package com.hexcodel.competitive.service;

import java.util.Random;

public class  GameSlugGenerator {
    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    public static String generateGameSlug(int length){
        Random random = new Random();
        StringBuilder gameSlug = new StringBuilder();
        for(int i = 0; i < length; i++){
            gameSlug.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
        }
        return gameSlug.toString();
    }
}
