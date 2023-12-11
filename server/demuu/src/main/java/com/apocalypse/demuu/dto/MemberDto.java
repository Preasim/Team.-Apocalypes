package com.apocalypse.demuu.dto;

import com.apocalypse.demuu.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.sql.Timestamp;

public class MemberDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class PostDto {
        @NotBlank
        private String name;

        @Email
        @NotBlank
        private String email;

        @NotBlank
        private String password;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class PatchDto {
        @NotBlank
        private String name;

//        @NotBlank
//        private String email;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class ResponseDto {
        private long memberId;
        private String name;
        private String email;
        private String image;
        private Member.Status status;
        private Timestamp createdAt;
        private Timestamp modifiedAt;
    }
}
