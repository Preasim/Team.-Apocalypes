package com.apocalypse.demuu.mapper.kanban;

import com.apocalypse.demuu.dto.KanbanBoardDto;
import com.apocalypse.demuu.entity.kanban.Task;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TaskMapper {
    Task postToTask(KanbanBoardDto.TaskPost post);
    Task patchToTask(KanbanBoardDto.TaskPatch patch);
    KanbanBoardDto.TaskResponse taskToResponse(Task task);
    List<KanbanBoardDto.TaskResponse> tasksToResponses(List<Task> tasks);
}
