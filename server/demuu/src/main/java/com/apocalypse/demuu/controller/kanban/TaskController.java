package com.apocalypse.demuu.controller.kanban;

import com.apocalypse.demuu.dto.kanban.TaskDto;
import com.apocalypse.demuu.entity.kanban.Task;
import com.apocalypse.demuu.mapper.kanban.TaskMapper;
import com.apocalypse.demuu.response.MultiResponseDto;
import com.apocalypse.demuu.response.SingleResponseDto;
import com.apocalypse.demuu.service.kanban.CategoryService;
import com.apocalypse.demuu.service.kanban.TaskService;
import com.apocalypse.demuu.utils.UriCreator;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/kanban/{category-id}/task")
@AllArgsConstructor
public class TaskController {
    private final CategoryService categoryService;
    private final TaskService taskService;
    private final TaskMapper taskMapper;

    @PostMapping("/{status}")
    public ResponseEntity postTask(@PathVariable("category-id") @Positive long categoryId,
                                   @PathVariable("status") String status,
                                   @Valid @RequestBody TaskDto.Post requestBody) {

        Task task = taskMapper.postToTask(requestBody);
        task.setCategory(categoryService.findVerifiedCategory(categoryId));

        if (!isValidStatus(status)) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Status");

        Task createTask = taskService.createTask(task, status);

        URI location = UriCreator.createUri(
                "/kanban/"+categoryId+"/task/"+status, createTask.getTaskId());
        return ResponseEntity.created(location).build();
    }

    @GetMapping
    public ResponseEntity getTasks(@PathVariable("category-id") @Positive long categoryId,
                                   @Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                   @Positive @RequestParam(value = "size", defaultValue = "5") int size){

        Page<Task> taskPage = taskService.findTasks(categoryId, page-1, size);
        List<TaskDto.Response> responses = taskMapper.tasksToResponses(taskPage.getContent());

        return new ResponseEntity<>(new MultiResponseDto<>(responses, taskPage), HttpStatus.OK);
    }

    @PatchMapping("/{task-id}/{status}")
    public ResponseEntity patchTask(@PathVariable("category-id") @Positive long categoryId,
                                     @PathVariable("task-id") @Positive long taskId,
                                     @PathVariable("status") String status,
                                     @Valid @RequestBody TaskDto.Patch requestBody) {
        Task task = taskMapper.patchToTask(requestBody);
        task.setTaskId(taskId);

        if (!isValidStatus(status)) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Status");

        Task updatedTask = taskService.updateTask(categoryId, taskId, status, requestBody);
        TaskDto.Response response = taskMapper.taskToResponse(updatedTask);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("/{task-id}")
    public ResponseEntity deleteTask(@PathVariable("category-id") @Positive long categoryId,
                                     @PathVariable("task-id") @Positive long taskId) {
        taskService.deleteTask(categoryId, taskId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private boolean isValidStatus(String status) {
        return Arrays.asList("nostatus","wait","active","done").contains(status.toLowerCase());
    }
}
