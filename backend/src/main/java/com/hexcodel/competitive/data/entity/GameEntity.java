package com.hexcodel.competitive.data.entity;

import java.time.Instant;

import com.hexcodel.competitive.service.model.GameStateEnum;
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
@Table(name = "game")
public class GameEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String slug;
    String colorHexCode;
    @Column(name="game_state")
    @Enumerated(EnumType.STRING)
    GameStateEnum gameState;
    @CreationTimestamp
    private Instant createdOn;
    @UpdateTimestamp
    private Instant updatedOn;
}
