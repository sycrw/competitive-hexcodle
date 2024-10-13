package com.hexcodel.competitive.service;

import java.util.Random;


public class HexcodeGenerator {
    private static final String HEX_CHARACTERS = "0123456789ABCDEF";
    private static final Random random = new Random();

    public static String generateRandomHexCode() {
        StringBuilder hexCode = new StringBuilder("#");
        for (int i = 0; i < 6; i++) {
            hexCode.append(HEX_CHARACTERS.charAt(random.nextInt(HEX_CHARACTERS.length())));
        }
        return hexCode.toString();
    }
}