package com.hexcodel.competitive.service.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class BetRequest {
    int playerId;
    String gameSlug;
    String hexCode;
}
