package com.apocalypse.demuu.entity;

import com.apocalypse.demuu.entity.kanban.Board;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String name;

    private String email;

    private String password;

    private String memberCode;

    private String image;

    @Enumerated(EnumType.STRING)
    private Status status = Status.MEMBER_ACTIVE;

    @Column(updatable = false)
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

    @PrePersist
    protected void onCreate() {
        this.createdAt = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    protected void onUpdate() {
        this.modifiedAt = new Timestamp(System.currentTimeMillis());
    }

    @OneToMany(mappedBy = "member", cascade = {CascadeType.ALL})
    private List<Board> boards = new ArrayList<>();

    public void addBoards(Board board) {
        this.boards.add(board);
        board.setMember(this);
    }

    public void removeBoards(Board board) {
        this.boards.remove(board);
        if (board.getMember() != this) {
            board.setMember(this);
        }
    }
}
