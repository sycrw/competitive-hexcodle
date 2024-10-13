import { createContext } from 'react';
import {GameWithPlayers} from '../gen';

export const GameContext = createContext<GameWithPlayers | undefined>(undefined);