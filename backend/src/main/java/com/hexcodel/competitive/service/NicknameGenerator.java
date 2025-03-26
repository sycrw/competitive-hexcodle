package com.hexcodel.competitive.service;

import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class NicknameGenerator {
    private final static List<String> ADJECTIVELIST = List.of("bloated", "angry", "cute", "sleep-deprived", "rooted", "goated", "funky", "goofy", "wobbly", "sassy", "zany", "bouncy", "quirky", "grumpy", "fluffy", "clumsy", "spunky", "snazzy", "wacky", "chill", "loopy", "spooky", "nutty", "perky", "jazzy", "wonky");
    private final static List<String> NAMELIST = List.of("mausi", "bloat", "bruf", "windows", "linustorvalds", "turing", "lovelace", "knuth", "hopper", "gates", "jobs", "wozniak", "zuckerberg", "musk", "torvalds", "berners-lee", "page", "brin", "thiel", "mitnick", "cerf", "ellison", "bezos", "babbage", "dijkstra", "banana", "penguin", "unicorn", "robot", "pickle", "hamster", "marshmallow", "taco", "spaceship", "donut", "ninja", "pirate", "walrus", "pancake", "koala", "toaster", "alien", "octopus", "bubble", "cheeseburger");
    private final static int NICKNAME_NUMBER_THRESHOLD = 999;
    public String generateRandomNickname(){
        Random random = new Random();
        return ADJECTIVELIST.get(random.nextInt(ADJECTIVELIST.toArray().length)) + "-"
            + NAMELIST.get(random.nextInt(NAMELIST.toArray().length))
            + random.nextInt(NICKNAME_NUMBER_THRESHOLD);
    }
}
