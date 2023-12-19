package com.apocalypse.demuu.dto.kanban;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class TaskDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        private String taskName;
        private String taskDescription;
        private String link;
        private String image;
        private String taskStatus;
        private Timestamp taskDeadline;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        @NotBlank
        private String taskName;
        private String taskDescription;
        private String link;
        private String image;
        private String taskStatus;
        private Timestamp taskDeadline;
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
        private Timestamp taskDeadline;
        private Timestamp createdAt;
        private Timestamp modifiedAt;
    }
}
