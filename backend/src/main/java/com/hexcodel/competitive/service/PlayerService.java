package com.hexcodel.competitive.service;

import java.util.List;
import java.util.Optional;

import com.hexcodel.competitive.service.model.PlayerUpdate;
import com.hexcodel.competitive.service.model.PlayerUpdateEnum;
import org.springframework.messaging.simp.SimpMessagingTemplate;
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
    private final SimpMessagingTemplate messagingTemplate;

    private static final String PLAYER_TOPIC = "/topic/%s/player";

    public Player joinGameByGameSlug(String gameSlug) {
        String nickname = nicknameGenerator.generateRandomNickname();
        Game game = serviceMapper.gameEntityToGame(gameRepository.getBySlug(gameSlug));
        PlayerEntity playerEntity = PlayerEntity.builder().nickname(nickname).gameId(game.getId()).build();
        playerEntity = playerJpaRepository.save(playerEntity);
        //notify everyone else
        Player player = serviceMapper.playerEntitytoPlayer(playerEntity);
        messagingTemplate.convertAndSend(String.format(PLAYER_TOPIC,gameSlug), PlayerUpdate.builder().playerUpdateEnum(PlayerUpdateEnum.JOINED).player(player).build());
        return player;
    }

    public GameWithPlayers getGameWithPlayers(String gameSlug) {
        Game game = serviceMapper.gameEntityToGame(gameRepository.getBySlug(gameSlug));
        List<Player> playerList = playerJpaRepository.getPlayersByGameSlug(gameSlug).stream().map(playerEntity -> serviceMapper.playerEntitytoPlayer(playerEntity)).toList();
        return GameWithPlayers.builder().game(game).playerList(playerList).build();
    }

    public Optional<PlayerUpdate> ready(String gameSlug, int playerId){
        Optional<PlayerEntity> playerOpt = playerJpaRepository.getPlayerEntityById(playerId);
        if(playerOpt.isEmpty()){
            return Optional.empty();
        }
        PlayerEntity player = playerOpt.get();
        player.setReady(!player.isReady());
        playerJpaRepository.save(player);
        //update others
        PlayerUpdate playerUpdate = PlayerUpdate.builder().playerUpdateEnum(PlayerUpdateEnum.READY).player(serviceMapper.playerEntitytoPlayer(player)).build();
        messagingTemplate.convertAndSend(String.format(PLAYER_TOPIC,gameSlug), playerUpdate);
        return Optional.of(playerUpdate);
    }
}
