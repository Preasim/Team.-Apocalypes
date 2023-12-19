package com.apocalypse.demuu.service.kanban;

import com.apocalypse.demuu.entity.Member;
import com.apocalypse.demuu.entity.kanban.Board;
import com.apocalypse.demuu.exception.BusinessLogicException;
import com.apocalypse.demuu.exception.ExceptionCode;
import com.apocalypse.demuu.repository.kanban.BoardRepository;
import com.apocalypse.demuu.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;
    private final MemberService memberService;

    public Board createBoard(Board board) {
        long memberId = board.getMember().getMemberId();
        Member findMember = memberService.findVerifiedMember(memberId);
        findMember.addBoards(board);
        return boardRepository.save(board);
    }

    // 유저가 생성한 보드(큰 카테고리) 모두 조회
    public Page<Board> findBoards(long memberId, int page, int size) {
        Member member = memberService.findVerifiedMember(memberId);
        List<Board> boards = member.getBoards();

        int start = page * size;
        int end = Math.min(start + size, boards.size());
        if (start >= boards.size()) return Page.empty();

        List<Board> boardList = boards.subList(start, end);
        return new PageImpl<>(boardList, PageRequest.of(page, size), boards.size());
    }


    public void deleteBoard(long memberId, long boardId) {
        Board board = findVerifiedBoard(boardId);
        Member member = memberService.findVerifiedMember(memberId);

        member.removeBoards(board);
        boardRepository.delete(board);
    }

    public Board findVerifiedBoard(long boardId) {
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        Board findBoard = optionalBoard.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return findBoard;
    }
}
