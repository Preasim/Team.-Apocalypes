package com.apocalypse.demuu.controller.kanban;

import com.apocalypse.demuu.mapper.kanban.TaskMapper;
import com.apocalypse.demuu.service.kanban.CategoryService;
import com.apocalypse.demuu.service.kanban.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/kanban/{category-id}")
@AllArgsConstructor
public class TaskController {
    private final CategoryService categoryService;
    private final TaskService taskService;
    private final TaskMapper taskMapper;
}
