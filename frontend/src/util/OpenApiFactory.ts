import {Configuration, GameControllerApi} from '../gen';
import axios from 'axios';
import {envSettings} from './EnvSettings.ts';

const configuration = new Configuration({});

const basePath = `https://${envSettings.getHost()}`
const lagerAxios = axios.create();
lagerAxios.defaults.headers.common = {
  'Access-Control-Allow-Origin': '*',
};
lagerAxios.defaults.withCredentials = false;

export const gameApi = new GameControllerApi(configuration, basePath, lagerAxios);
