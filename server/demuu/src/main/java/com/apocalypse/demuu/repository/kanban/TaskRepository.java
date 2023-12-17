package com.apocalypse.demuu.repository.kanban;

import com.apocalypse.demuu.entity.kanban.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
