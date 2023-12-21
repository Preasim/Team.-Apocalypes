package com.apocalypse.demuu.entity.kanban;

import com.apocalypse.demuu.entity.Member;
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
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    private String boardName;

    @Column(updatable = false)
    private Timestamp createdAt;

    private Timestamp modifiedAt;


    @PrePersist
    protected void onCreate() {
        this.createdAt = new Timestamp(System.currentTimeMillis());
    }

    @PreUpdate
    protected void onUpdate() {
        this.modifiedAt = new Timestamp(System.currentTimeMillis());
    }

    @OneToMany(mappedBy = "board", cascade = {CascadeType.ALL})
    private List<Category> categories = new ArrayList<>();

    public void addCategories(Category category) {
        this.categories.add(category);
        category.setBoard(this);
    }

    public void removeCategories(Category category) {
        this.categories.remove(category);
        if (category.getBoard() != this) {
            category.setBoard(this);
        }
    }
}
