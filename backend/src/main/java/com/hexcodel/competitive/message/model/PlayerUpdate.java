package com.hexcodel.competitive.message.model;

import com.hexcodel.competitive.message.model.PlayerUpdateEnum;
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
