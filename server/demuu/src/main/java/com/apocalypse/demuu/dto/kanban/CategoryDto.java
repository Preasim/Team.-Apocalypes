package com.apocalypse.demuu.dto.kanban;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class CategoryDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        private String categoryName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
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
    }
}
