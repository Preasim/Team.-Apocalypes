package com.apocalypse.demuu.entity.kanban;

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
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    private String categoryName;

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

    @OneToMany(mappedBy = "category", cascade = {CascadeType.ALL})
    private List<Task> tasks = new ArrayList<>();

    public void addTasks(Task task) {
        this.tasks.add(task);
        task.setCategory(this);
    }

    public void removeTasks(Task task) {
        this.tasks.remove(task);
        if (task.getCategory() != this) {
            task.setCategory(this);
        }
    }
}
