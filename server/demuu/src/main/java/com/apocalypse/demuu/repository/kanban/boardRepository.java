package com.apocalypse.demuu.repository.kanban;

import com.apocalypse.demuu.entity.kanban.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
