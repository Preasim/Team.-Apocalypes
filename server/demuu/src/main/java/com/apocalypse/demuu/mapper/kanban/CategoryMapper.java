package com.apocalypse.demuu.mapper.kanban;

import com.apocalypse.demuu.dto.KanbanBoardDto;
import com.apocalypse.demuu.entity.kanban.Board;
import com.apocalypse.demuu.entity.kanban.Category;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    Category postToCategory(KanbanBoardDto.CategoryPost post);
    Category patchToCategory(KanbanBoardDto.CategoryPatch patch);
    KanbanBoardDto.CategoryResponse categoryToResponse(Category category);
    List<KanbanBoardDto.CategoryResponse> categoriesToResponses(List<Category> categories);
}
