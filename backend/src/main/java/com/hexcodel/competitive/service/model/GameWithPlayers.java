package com.hexcodel.competitive.service.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class GameWithPlayers {
    Game game;
    List<Player> playerList;
}
