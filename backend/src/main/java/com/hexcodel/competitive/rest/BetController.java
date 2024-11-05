package com.hexcodel.competitive.rest;

import com.hexcodel.competitive.service.model.BetRequest;
import com.hexcodel.competitive.service.model.BetResult;
import com.hexcodel.competitive.service.BetService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/game")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class BetController {

    private BetService betService;

    @PostMapping("/{slug}/bet")
    BetResult bet(@RequestBody @Valid BetRequest betRequest){
        return betService.bet(betRequest);
    }
}