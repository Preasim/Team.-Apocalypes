package com.apocalypse.demuu.dto.kanban;

import com.apocalypse.demuu.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class BoardDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private String boardName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {
        @NotBlank
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

        public void setMember(Member member) {
            this.memberId = member.getMemberId();
        }
    }
}