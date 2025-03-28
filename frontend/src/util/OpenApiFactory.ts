import {BetControllerApi, Configuration, GameControllerApi, PlayerControllerApi} from '../gen';
import axios from 'axios';
import {envSettings} from './EnvSettings.ts';

const configuration = new Configuration({});

const basePath = `http://${envSettings.getHost()}`
const lagerAxios = axios.create();
lagerAxios.defaults.headers.common = {
  'Access-Control-Allow-Origin': '*',
};
lagerAxios.defaults.withCredentials = false;

export const gameApi = new GameControllerApi(configuration, basePath, lagerAxios);
export const betApi = new BetControllerApi(configuration,basePath,lagerAxios);

export const playerApi = new PlayerControllerApi(configuration,basePath,lagerAxios);
