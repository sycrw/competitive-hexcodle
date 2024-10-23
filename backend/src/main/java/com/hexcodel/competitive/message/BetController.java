package com.hexcodel.competitive.message;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.hexcodel.competitive.message.model.BetMessage;
import com.hexcodel.competitive.message.model.BetResult;
import com.hexcodel.competitive.service.BetService;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class BetController {
    private BetService betService;

    @MessageMapping("/bet")
    @SendTo("/topic/bet")
    public BetResult bet(@Payload BetMessage betMessage) {
        System.out.println("gameId:"+betMessage);
        return betService.validateBet(betMessage);
    }
}
