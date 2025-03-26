import {useContext, useState} from 'react';
import {GameContext} from "../../context/GameContext.ts";
import {Player} from "../../gen";
import {PlayerCard} from "../molecules/PlayerCard.tsx";
import {useSearchParams} from "react-router-dom";

interface PlayerListProps {
    currentPlayerId: number,
}

const PlayerList = ({currentPlayerId}: PlayerListProps) => {
    const game = useContext(GameContext);

    return (
        <div className="flex justify-center w-full flex-wrap gap-1">
            {game?.playerList?.map((p) => <PlayerCard key={p.id} player={p} currentPlayerId={currentPlayerId}/>)}
        </div>

    );
};

export default PlayerList;
