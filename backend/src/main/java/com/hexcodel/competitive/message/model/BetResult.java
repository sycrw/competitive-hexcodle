package com.hexcodel.competitive.message.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class BetResult {
    int userId;
    int gameId;
    boolean correct;
}
