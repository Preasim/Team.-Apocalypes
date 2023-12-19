package com.apocalypse.demuu.mapper.kanban;

import com.apocalypse.demuu.dto.kanban.CategoryDto;
import com.apocalypse.demuu.entity.kanban.Category;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    Category postToCategory(CategoryDto.Post post);
    Category patchToCategory(CategoryDto.Patch patch);
    CategoryDto.Response categoryToResponse(Category category);
    List<CategoryDto.Response> categoriesToResponses(List<Category> categories);
}
