package com.apocalypse.demuu.dto.kanban;

import com.apocalypse.demuu.entity.kanban.Board;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class CategoryDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private String categoryName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        @NotBlank
        private String categoryName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long categoryId;
        private long boardId;
        private String categoryName;
        private Timestamp createdAt;
        private Timestamp modifiedAt;

        public void setBoard(Board board) {
            this.boardId = board.getBoardId();
        }
    }
}
