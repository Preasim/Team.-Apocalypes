package com.apocalypse.demuu.service.kanban;

import com.apocalypse.demuu.dto.kanban.CategoryDto;
import com.apocalypse.demuu.entity.kanban.Board;
import com.apocalypse.demuu.entity.kanban.Category;
import com.apocalypse.demuu.exception.BusinessLogicException;
import com.apocalypse.demuu.exception.ExceptionCode;
import com.apocalypse.demuu.repository.kanban.CategoryRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;
    private final BoardService boardService;

    public Category createCategory(Category category) {
        long boardId = category.getBoard().getBoardId();
        Board Board = boardService.findVerifiedBoard(boardId);
        Board.addCategories(category);
        return categoryRepository.save(category);
    }

    public Page<Category> findCategories(long boardId, int page, int size) {
        Board board = boardService.findVerifiedBoard(boardId);
        List<Category> categories = board.getCategories();

        int start = page * size;
        int end = Math.min(start + size, categories.size());
        if (start >= categories.size()) return Page.empty();

        List<Category> categoryList = categories.subList(start, end);
        return new PageImpl<>(categoryList, PageRequest.of(page, size), categories.size());
    }

    @Transactional
    public Category updateCategory(long boardId, long categoryId, CategoryDto.Patch category) {
        Category findCategory = findVerifiedCategory(categoryId);
        Board findBoard = boardService.findVerifiedBoard(boardId);

        if (!findCategory.getBoard().getBoardId().equals(findBoard.getBoardId())) {
            throw new BusinessLogicException(ExceptionCode.NO_PERMISSION_EDITING_POST);
        } else {
            if (category.getCategoryName() != null) {
                findCategory.setCategoryName(category.getCategoryName());
            }
        }

        return findCategory;
    }

    public void deleteCategory(long boardId, long categoryId) {
        Category category = findVerifiedCategory(categoryId);
        Board board = boardService.findVerifiedBoard(boardId);
        board.removeCategories(category);
        categoryRepository.delete(category);
    }

    public Category findVerifiedCategory(long categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        return optionalCategory.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.CATEGORY_NOT_FOUND));
    }
}
