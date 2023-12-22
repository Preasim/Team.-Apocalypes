package com.apocalypse.demuu.service.kanban;

import com.apocalypse.demuu.repository.kanban.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;
    private final CategoryService categoryService;
}
