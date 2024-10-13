package com.hexcodel.competitive.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.hexcodel.competitive.data.entity.PlayerEntity;
import com.hexcodel.competitive.data.repository.GameRepository;
import com.hexcodel.competitive.data.repository.PlayerRepository;
import com.hexcodel.competitive.service.model.Game;
import com.hexcodel.competitive.service.model.GameWithPlayers;
import com.hexcodel.competitive.service.model.Player;

import lombok.AllArgsConstructor;
@Component
@AllArgsConstructor
public class PlayerService {
    private PlayerRepository playerJpaRepository;
    private GameRepository gameRepository;
    private NicknameGenerator nicknameGenerator;
    private ServiceMapper serviceMapper;
    public Player joinGame(String gameSlug){
        String nickname = nicknameGenerator.generateRandomNickname();
        Game game = serviceMapper.gameEntityToGame(gameRepository.getBySlug(gameSlug));
        PlayerEntity playerEntity = PlayerEntity.builder().nickname(nickname).gameId(game.getId()).build();
       return serviceMapper.playerEntitytoPlayer(playerJpaRepository.save(playerEntity));

    }

    public GameWithPlayers getGameWithPlayers(String gameSlug){
        Game game = serviceMapper.gameEntityToGame(gameRepository.getBySlug(gameSlug));
        List<Player> playerList = playerJpaRepository.getPlayersByGameSlug(gameSlug).stream().map(playerEntity -> serviceMapper.playerEntitytoPlayer(playerEntity)).toList();
        return GameWithPlayers.builder().game(game).playerList(playerList).build();
    }
}