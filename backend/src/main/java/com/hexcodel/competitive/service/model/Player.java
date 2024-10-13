package com.hexcodel.competitive.service.model;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class Player {
    int id;
    String nickname;
    int gameId;
    private Instant createdOn;
    private Instant updatedOn;
}
