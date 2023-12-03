package com.apocalypse.demuu.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String name;

    private String email;

    private String password;

    private long memberCode;

    private String image;

    @Enumerated(EnumType.STRING)
    private Status status = Status.MEMBER_ACTIVE;

    private Timestamp createdAt;

    private Timestamp modifiedAt;


    public enum Status {
        MEMBER_ACTIVE("활동"),
        MEMBER_DELETE("탈퇴");

        private String status;

        Status(String status) {
            this.status = status;
        }
    }
}
