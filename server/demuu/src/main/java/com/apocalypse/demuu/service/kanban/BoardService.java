package com.apocalypse.demuu.service.kanban;

import com.apocalypse.demuu.entity.kanban.Board;
import com.apocalypse.demuu.repository.kanban.BoardRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    public Board createBoard(Board board) {

    }
}
