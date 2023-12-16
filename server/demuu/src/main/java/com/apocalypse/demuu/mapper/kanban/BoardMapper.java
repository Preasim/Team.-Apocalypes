package com.apocalypse.demuu.mapper.kanban;

import com.apocalypse.demuu.dto.KanbanBoardDto;
import com.apocalypse.demuu.entity.kanban.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board postToBoard(KanbanBoardDto.Post post);
    Board patchToBoard(KanbanBoardDto.Patch patch);
    KanbanBoardDto.Response boardToResponse(Board board);
    List<KanbanBoardDto.Response> boardsToResponses(List<Board> boards);
}
