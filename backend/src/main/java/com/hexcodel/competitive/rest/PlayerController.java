package com.hexcodel.competitive.rest;

import com.hexcodel.competitive.service.PlayerService;
import com.hexcodel.competitive.service.model.Player;
import com.hexcodel.competitive.service.model.PlayerUpdate;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/game")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class PlayerController {

    private PlayerService playerService;
    @PutMapping("/{gameSlug}/{playerId}/ready")
    ResponseEntity<PlayerUpdate> ready(@PathVariable String gameSlug, @PathVariable int playerId){
        Optional<PlayerUpdate> playerUpdateOpt= playerService.ready(gameSlug,playerId);
        return playerUpdateOpt.map(playerUpdate -> ResponseEntity.ok().body(playerUpdate)).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
