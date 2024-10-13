package com.hexcodel.competitive.service;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import com.hexcodel.competitive.data.entity.GameEntity;
import com.hexcodel.competitive.data.entity.PlayerEntity;
import com.hexcodel.competitive.service.model.Game;
import com.hexcodel.competitive.service.model.Player;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ServiceMapper {
    Game gameEntityToGame(GameEntity gameEntity);
    GameEntity gameToGameEntity(Game game);
    Player playerEntitytoPlayer(PlayerEntity playerEntity);
}
