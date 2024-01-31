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
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    private String taskName;
    private String taskDescription;
    private String link;
    private String image;

    @Enumerated(EnumType.STRING)
    private TaskStatus taskStatus;
    private String taskDeadline;

    @Column(updatable = false)
    private Timestamp createdAt;

    private Timestamp modifiedAt;

    public enum TaskStatus {
        NO_STATUS("상태 없음"),
        WAIT("대기"),
        ACTIVE("진행 중"),
        DONE("완료");

        private String status;
        TaskStatus(String status) {
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
}
