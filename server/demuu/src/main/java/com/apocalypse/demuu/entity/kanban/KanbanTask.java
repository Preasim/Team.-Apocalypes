package com.apocalypse.demuu.entity.kanban;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class KanbanTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private KanbanCategory category;

    private String taskName;
    private String taskDescription;
    private String link;
    private String image;
    private String taskStatus;
    private Timestamp taskDeadline;

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
}
