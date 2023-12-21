package com.apocalypse.demuu.controller.kanban;

import com.apocalypse.demuu.dto.kanban.CategoryDto;
import com.apocalypse.demuu.entity.kanban.Category;
import com.apocalypse.demuu.mapper.kanban.CategoryMapper;
import com.apocalypse.demuu.response.MultiResponseDto;
import com.apocalypse.demuu.response.SingleResponseDto;
import com.apocalypse.demuu.service.kanban.BoardService;
import com.apocalypse.demuu.service.kanban.CategoryService;
import com.apocalypse.demuu.utils.UriCreator;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/kanban/{board-id}")
@AllArgsConstructor
public class CategoryController {
    private final BoardService boardService;
    private final CategoryService categoryService;
    private final CategoryMapper categoryMapper;

    @PostMapping
    public ResponseEntity postCategory(@PathVariable("board-id") @Positive long boardId,
                                       @Valid @RequestBody CategoryDto.Post requestBody){

        Category category = categoryMapper.postToCategory(requestBody);
        category.setBoard(boardService.findVerifiedBoard(boardId));
        Category createCategory = categoryService.createCategory(category);

        URI location = UriCreator.createUri("/kanban/"+boardId, createCategory.getCategoryId());
        return ResponseEntity.created(location).build();
    }

    @GetMapping
    public ResponseEntity getCategories(@PathVariable("board-id") @Positive long boardId,
                                        @Positive @RequestParam(value = "page", defaultValue = "1") int page,
                                        @Positive @RequestParam(value = "size", defaultValue = "5") int size){

        Page<Category> categoryPage = categoryService.findCategories(boardId, page-1, size);
        List<CategoryDto.Response> responses = categoryMapper.categoriesToResponses(categoryPage.getContent());

        return new ResponseEntity<>(new MultiResponseDto<>(responses, categoryPage), HttpStatus.OK);
    }

    @PatchMapping("/{category-id}")
    public ResponseEntity patchCategory(@PathVariable("board-id") @Positive long boardId,
                                        @PathVariable("category-id") @Positive long categoryId,
                                        @Valid @RequestBody CategoryDto.Patch requestBody){

        Category category = categoryMapper.patchToCategory(requestBody);
        category.setCategoryId(categoryId);
        Category updatedCategory = categoryService.updateCategory(boardId, categoryId, requestBody);
        CategoryDto.Response response = categoryMapper.categoryToResponse(updatedCategory);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @DeleteMapping("/{category-id}")
    public ResponseEntity deleteCategory(@PathVariable("board-id") @Positive long boardId,
                                         @PathVariable("category-id") @Positive long categoryId) {
        categoryService.deleteCategory(boardId, categoryId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
