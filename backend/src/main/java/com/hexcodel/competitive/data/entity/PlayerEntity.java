package com.hexcodel.competitive.data.entity;

import java.time.Instant;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "player")
public class PlayerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String nickname;
    int gameId;
    @CreationTimestamp
    private Instant createdOn;
    @UpdateTimestamp
    private Instant updatedOn;
}
