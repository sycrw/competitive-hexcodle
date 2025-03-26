package com.hexcodel.competitive.rest;

import com.hexcodel.competitive.service.model.BetRequest;
import com.hexcodel.competitive.service.model.BetResult;
import com.hexcodel.competitive.service.BetService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/api/v1/game")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class BetController {

    private BetService betService;

    @PostMapping("/{slug}/bet")
    BetResult bet(@PathVariable String slug,  @RequestBody BetRequest betRequest){
        if(Objects.isNull( betRequest.getGameSlug())) betRequest.setGameSlug(slug);
        return betService.bet(betRequest);
    }
}
