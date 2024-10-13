package com.hexcodel.competitive.rest;

import java.util.List;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexcodel.competitive.service.GameService;
import com.hexcodel.competitive.service.PlayerService;
import com.hexcodel.competitive.service.model.Game;
import com.hexcodel.competitive.service.model.GameWithPlayers;
import com.hexcodel.competitive.service.model.Player;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/game")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class GameController {
    GameService gameService;
    PlayerService playerService;
    @PostMapping
    ResponseEntity<Game> createGame(){
        Game newGame = gameService.createGame();
        return ResponseEntity.ok().body(newGame);
    }
    @PutMapping("/{gameSlug}/join")
    ResponseEntity<Player> joinGame(@PathVariable String gameSlug){
        Player player = playerService.joinGame(gameSlug);
        return ResponseEntity.ok().body(player);
    }

    @GetMapping("/{gameSlug}")
    ResponseEntity<GameWithPlayers> getGame(@PathVariable String gameSlug){
        GameWithPlayers gameWithPlayers = playerService.getGameWithPlayers(gameSlug);
        return ResponseEntity.ok().body(gameWithPlayers);
    }
}
