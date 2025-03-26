package com.hexcodel.competitive.service.model;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Builder
@AllArgsConstructor
@Data
public class Game {
    int id;
    String slug;
    String colorHexCode;
    GameStateEnum gameState;
    Instant createdOn;
    Instant updatedOn;

}
