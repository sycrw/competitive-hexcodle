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

    @MessageMapping("/sendMessage")
    @SendTo("/topic/public")
    public BetResult sendMessage(@Payload BetMessage betMessage) {
        return betService.validateBet(betMessage);
    }
}
