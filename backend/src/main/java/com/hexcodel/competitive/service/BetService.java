package com.hexcodel.competitive.service;

import org.springframework.stereotype.Service;

import com.hexcodel.competitive.data.repository.GameRepository;
import com.hexcodel.competitive.data.repository.PlayerRepository;
import com.hexcodel.competitive.message.model.BetMessage;
import com.hexcodel.competitive.message.model.BetResult;
import com.hexcodel.competitive.service.model.Game;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BetService
{
    GameRepository gameRepository;
    PlayerRepository playerRepository;
    ServiceMapper serviceMapper;

    public BetResult validateBet(BetMessage betMessage){
        Game game = serviceMapper.gameEntityToGame(gameRepository.getReferenceById(betMessage.getGameId()));
        boolean betCorrect = game.getColorHexCode().equals(betMessage.getHexaCode());
        return BetResult.builder().correct(betCorrect).gameId(game.getId()).userId(betMessage.getUserId()).build();
    }
}
