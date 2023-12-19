package com.apocalypse.demuu.mapper.kanban;

import com.apocalypse.demuu.dto.kanban.TaskDto;
import com.apocalypse.demuu.entity.kanban.Task;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TaskMapper {
    Task postToTask(TaskDto.Post post);
    Task patchToTask(TaskDto.Patch patch);
    TaskDto.Response taskToResponse(Task task);
    List<TaskDto.Response> tasksToResponses(List<Task> tasks);
}
