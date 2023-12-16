package com.apocalypse.demuu.repository.kanban;

import com.apocalypse.demuu.entity.kanban.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface boardRepository extends JpaRepository<Board, Long> {
}
