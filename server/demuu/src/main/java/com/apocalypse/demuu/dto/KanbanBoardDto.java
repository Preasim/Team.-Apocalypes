package com.apocalypse.demuu.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

public class KanbanBoardDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        private String boardName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private String boardName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long boardId;
        private long memberId;
        private String boardName;
        private Timestamp createdAt;
        private Timestamp modifiedAt;
    }

    // ----------- Category
    @Getter
    @Setter
    @AllArgsConstructor
    public static class CategoryPost {
        private String categoryName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class CategoryPatch {
        private String categoryName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class CategoryResponse {
        private long categoryId;
        private long boardId;
        private String categoryName;
        private Timestamp createdAt;
        private Timestamp modifiedAt;
    }


    // ----------- Task
    @Getter
    @Setter
    @AllArgsConstructor
    public static class TaskPost {
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
    public static class TaskPatch {
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
    public static class TaskResponse {
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
