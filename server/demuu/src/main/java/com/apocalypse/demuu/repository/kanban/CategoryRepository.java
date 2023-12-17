package com.apocalypse.demuu.repository.kanban;

import com.apocalypse.demuu.entity.kanban.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
