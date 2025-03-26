package com.hexcodel.competitive.service.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
@AllArgsConstructor
public class PlayerUpdate {
    private PlayerUpdateEnum playerUpdateEnum;
    private Player player;
}
