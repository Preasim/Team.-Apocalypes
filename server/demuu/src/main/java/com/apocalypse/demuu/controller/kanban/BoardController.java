package com.apocalypse.demuu.controller.kanban;

import com.apocalypse.demuu.dto.kanban.BoardDto;
import com.apocalypse.demuu.entity.kanban.Board;
import com.apocalypse.demuu.mapper.kanban.BoardMapper;
import com.apocalypse.demuu.response.MultiResponseDto;
import com.apocalypse.demuu.response.SingleResponseDto;
import com.apocalypse.demuu.service.MemberService;
import com.apocalypse.demuu.service.kanban.BoardService;
import com.apocalypse.demuu.utils.UriCreator;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/{member-id}/kanban")
@AllArgsConstructor
public class BoardController {
    private final MemberService memberService;
    private final BoardService boardService;
    private final BoardMapper boardMapper;

    @PostMapping
    public ResponseEntity postBoard(@PathVariable("member-id") @Positive long memberId,
                                    @Valid @RequestBody BoardDto.Post requestBody) {

        Board board = boardMapper.postToBoard(requestBody);
        board.setMember(memberService.findVerifiedMember(memberId));
        Board createBoard = boardService.createBoard(board);

        URI location = UriCreator.createUri("/"+memberId+"/kanban", createBoard.getBoardId());
        return ResponseEntity.created(location).build();
    }

    @GetMapping
    public ResponseEntity getBoards(@PathVariable("member-id") @Positive long memberId,
                                    @Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                    @Positive @RequestParam(value = "size", defaultValue = "5") int size) {

        Page<Board> boardPage = boardService.findBoards(memberId, page-1, size);
        List<BoardDto.Response> responses = boardMapper.boardsToResponses(boardPage.getContent());

        return new ResponseEntity<>(new MultiResponseDto<>(responses, boardPage), HttpStatus.OK);
    }

    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("member-id") @Positive long memberId,
                                     @PathVariable("board-id") @Positive long boardId,
                                     @Valid @RequestBody BoardDto.Patch requestBody) {

        Board board = boardMapper.patchToBoard(requestBody);
        board.setBoardId(boardId);
        Board updatedBoard = boardService.updateBoard(memberId, boardId, requestBody);
        BoardDto.Response response = boardMapper.boardToResponse(updatedBoard);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("member-id") @Positive long memberId,
                                      @PathVariable("board-id") @Positive long boardId) {
        boardService.deleteBoard(memberId, boardId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
