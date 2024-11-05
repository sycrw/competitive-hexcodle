package com.hexcodel.competitive.service.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Data
@AllArgsConstructor
@Builder
public class PlayerUpdate {
    private int playerId;
    private PlayerUpdateEnum playerUpdateEnum;
}
