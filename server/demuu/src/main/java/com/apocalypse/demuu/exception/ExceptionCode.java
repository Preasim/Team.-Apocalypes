package com.apocalypse.demuu.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "회원을 찾을 수 없습니다"),
    MEMBER_EXISTS(409, "회원이 존재합니다"),
    MEMBER_IS_DELETED(404, "탈퇴한 회원입니다"),
    NO_PERMISSION_EDITING_POST(403,"작성자만 수정할 수 있습니다"),
    BOARD_NOT_FOUND(404, "칸반보드를 찾을 수 없습니다."),
    CATEGORY_NOT_FOUND(404, "카테고리를 찾을 수 없습니다."),
    TASK_NOT_FOUND(404, "작업을 찾을 수 없습니다."),
    UNABLE_TO_SEND_EMAIL(500, "이메일 발신 에러");

    @Getter
    private int status;

    @Getter
    private String message;
    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
