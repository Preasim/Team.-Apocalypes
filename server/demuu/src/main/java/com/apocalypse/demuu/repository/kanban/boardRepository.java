package com.apocalypse.demuu.repository.kanban;

import com.apocalypse.demuu.entity.Member;
import com.apocalypse.demuu.entity.kanban.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByMember(Member member);
}
