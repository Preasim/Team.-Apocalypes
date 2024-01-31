package com.apocalypse.demuu.service.kanban;

import com.apocalypse.demuu.dto.kanban.TaskDto;
import com.apocalypse.demuu.entity.kanban.Category;
import com.apocalypse.demuu.entity.kanban.Task;
import com.apocalypse.demuu.exception.BusinessLogicException;
import com.apocalypse.demuu.exception.ExceptionCode;
import com.apocalypse.demuu.repository.kanban.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final CategoryService categoryService;

    public Task createTask(Task task, String status) {
        long categoryId = task.getCategory().getCategoryId();
        Category category = categoryService.findVerifiedCategory(categoryId);
        category.addTasks(task);

        setTaskStatus(task, status);
        return taskRepository.save(task);
    }

    public Page<Task> findTasks(long categoryId, int page, int size) {
        Category category = categoryService.findVerifiedCategory(categoryId);
        List<Task> tasks = category.getTasks();

        int start = page * size;
        int end = Math.min(start + size, tasks.size());
        if (start >= tasks.size()) return Page.empty();

        List<Task> taskList = tasks.subList(start, end);
        return new PageImpl<>(taskList, PageRequest.of(page, size), tasks.size());
    }

    @Transactional
    public Task updateTask(long categoryId, long taskId, String status, TaskDto.Patch task) {
        Task findTask = findVerifiedTask(taskId);
        Category findCategory = categoryService.findVerifiedCategory(categoryId);

        if (!findTask.getCategory().getCategoryId().equals(findCategory.getCategoryId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        } else {
            if (task.getTaskName() != null) findTask.setTaskName(task.getTaskName());
            if (task.getTaskDescription() != null) findTask.setTaskDescription(task.getTaskDescription());
            if (task.getLink() != null) findTask.setLink(task.getLink());
            if (task.getImage() != null) findTask.setImage(task.getImage());
            if (task.getTaskDescription() != null) findTask.setTaskDeadline(task.getTaskDeadline());
            if (status != null) setTaskStatus(findTask, status);
        }
        return findTask;
    }

    public void deleteTask(long categoryId, long taskId) {
        Task task = findVerifiedTask(taskId);
        Category category = categoryService.findVerifiedCategory(categoryId);
        category.removeTasks(task);
        taskRepository.delete(task);
    }

    private void setTaskStatus(Task task, String status) {
        switch (status.toLowerCase()) {
            case "nostatus" :
                task.setTaskStatus(Task.TaskStatus.NO_STATUS);
                break;
            case "wait" :
                task.setTaskStatus(Task.TaskStatus.WAIT);
                break;
            case "active" :
                task.setTaskStatus(Task.TaskStatus.ACTIVE);
                break;
            case "done" :
                task.setTaskStatus(Task.TaskStatus.DONE);
                break;
            default:
                task.setTaskStatus(Task.TaskStatus.NO_STATUS);
                break;
        }
    }

    public Task findVerifiedTask(long taskId) {
        Optional<Task> optionalTask = taskRepository.findById(taskId);
        return optionalTask.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.TASK_NOT_FOUND));
    }
}
