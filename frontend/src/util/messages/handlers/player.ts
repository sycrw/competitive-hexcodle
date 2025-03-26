import {GameWithPlayers, Player, PlayerUpdate} from "../../../gen";
import {useContext} from "react";
import {GameContext} from "../../../context/GameContext.ts";

export const playerMessageHandler = (message: PlayerUpdate, gameWithPlayers: GameWithPlayers | undefined): GameWithPlayers | undefined => {
    console.log("playerMessageHandler")
    console.log(message, "message")
    console.log(gameWithPlayers, "gameWithPlayers")
    const gameToUpdate: GameWithPlayers = JSON.parse(JSON.stringify(gameWithPlayers));
    if (!gameToUpdate || !gameToUpdate.playerList) return gameWithPlayers;
    if (message.playerUpdateEnum == "JOINED") {
        gameToUpdate.playerList.push(message.player!);
        return gameToUpdate;
    }
    const playerIndex = gameToUpdate?.playerList?.findIndex((player) => player.id == message.player?.id);
    if (playerIndex !== -1 && message.player) {
        gameToUpdate.playerList[playerIndex] = message.player;
    }
    console.log(JSON.stringify(gameToUpdate), "gameToUpdate")
    return gameToUpdate;
}