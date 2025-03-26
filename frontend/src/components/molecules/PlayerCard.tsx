import {Player} from "../../gen";

interface PlayerCardProps {
    player: Player
    currentPlayerId: number
}

export const PlayerCard = ({player, currentPlayerId}: PlayerCardProps) => {
    return <div
        className={`border-gray-300 rounded-lg w-36 h-36 flex justify-center items-center text-center ${player.id == currentPlayerId ? " border-4" : "border-2"} ${player.ready ? "bg-green-200" : "bg-red-200"}`}>
        {player.nickname}
    </div>
}