package com.hexcodel.competitive.service;

import jakarta.transaction.Transactional;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.hexcodel.competitive.data.repository.GameRepository;
import com.hexcodel.competitive.data.repository.PlayerRepository;
import com.hexcodel.competitive.service.model.BetRequest;
import com.hexcodel.competitive.service.model.BetResult;
import com.hexcodel.competitive.service.model.Game;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BetService
{
    GameRepository gameRepository;
    PlayerRepository playerRepository;
    ServiceMapper serviceMapper;
    private final SimpMessagingTemplate messagingTemplate;

    private static final String PLAYER_TOPIC = "/topic/%s/bet";

    @Transactional
    public BetResult bet(BetRequest betRequest){
        Game game = serviceMapper.gameEntityToGame(gameRepository.getBySlug(betRequest.getGameSlug()));
        boolean betCorrect = game.getColorHexCode().equals(betRequest.getHexCode());
        var result = BetResult.builder().correct(betCorrect).gameId(game.getId()).playerId(betRequest.getPlayerId()).build();
        //notify players:
        messagingTemplate.convertAndSend(String.format(PLAYER_TOPIC,game.getSlug()), result);
        System.out.println("Sent bet to: " +  String.format(PLAYER_TOPIC,game.getSlug()) + " with: " + result.toString());
        return result;
    }
}
