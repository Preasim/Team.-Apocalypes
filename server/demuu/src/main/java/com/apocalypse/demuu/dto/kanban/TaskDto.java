package com.apocalypse.demuu.dto.kanban;

import com.apocalypse.demuu.entity.kanban.Category;
import com.apocalypse.demuu.entity.kanban.Task;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class TaskDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private String taskName;
        private String taskDescription;
        private String link;
        private String image;
        private String taskDeadline;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        @NotBlank
        private String taskName;
        private String taskDescription;
        private String link;
        private String image;
        private String taskDeadline;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long taskId;
        private long categoryId;
        private String taskName;
        private String taskDescription;
        private String link;
        private String image;
        private String taskStatus;
        private String taskDeadline;
        private Timestamp createdAt;
        private Timestamp modifiedAt;

        public void setCategory(Category category) {
            this.categoryId = category.getCategoryId();
        }
    }
}
