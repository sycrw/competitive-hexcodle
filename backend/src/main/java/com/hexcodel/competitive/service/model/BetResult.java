package com.hexcodel.competitive.service.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class BetResult {
    int playerId;
    int gameId;
    boolean correct;
}
