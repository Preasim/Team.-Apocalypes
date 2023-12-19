package com.apocalypse.demuu.mapper.kanban;


import com.apocalypse.demuu.dto.kanban.BoardDto;
import com.apocalypse.demuu.entity.kanban.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board postToBoard(BoardDto.Post postDto);
    Board patchToBoard(BoardDto.Patch patchDto);
    BoardDto.Response boardToResponse(Board board);
    List<BoardDto.Response> boardsToResponses(List<Board> boards);
}
