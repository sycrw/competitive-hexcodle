package com.hexcodel.competitive.service;

import org.springframework.stereotype.Service;

import com.hexcodel.competitive.data.entity.GameEntity;
import com.hexcodel.competitive.data.repository.GameRepository;
import com.hexcodel.competitive.service.model.Game;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GameService {
    private final GameRepository gameRepository;
    private final static int SLUGLENGTH = 8;
    private final ServiceMapper serviceMapper;


    public Game createGame(){
        return serviceMapper.gameEntityToGame(gameRepository.save(GameEntity.
            builder().
            slug(GameSlugGenerator.generateGameSlug(SLUGLENGTH)).
            colorHexCode(HexcodeGenerator.generateRandomHexCode()).
            build()));
    }
}
