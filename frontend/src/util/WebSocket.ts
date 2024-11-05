import { Client } from '@stomp/stompjs';
import {envSettings} from "./EnvSettings.ts";

const SOCKET_URL = `http://${envSettings.getHost()}/ws`;

let stompClient = null;

export const connect = (onBetRecived,onPlayerRecived,onGameRecived,{gameSlug}) => {
    const socket = new SockJS(SOCKET_URL,{});
    stompClient = new Client({
        webSocketFactory: () => socket,
        onConnect: () => {
            console.log('Connected to WebSocket');
            // Subscribe to a topic
            stompClient.subscribe(`/topic/${gameSlug}/bet`, (message) => {
                onBetRecived(JSON.parse(message.body));
            });
            stompClient.subscribe(`/topic/${gameSlug}/player`, (message) => {
                onPlayerRecived(JSON.parse(message.body));
            });
            stompClient.subscribe(`/topic/${gameSlug}/game`, (message) => {
                onGameRecived(JSON.parse(message.body));
            });
        },
        onStompError: (error) => {
            console.error('STOMP error:', error);
        },
    });
    stompClient.activate();
};

export const disconnect = () => {
    if (stompClient) {
        stompClient.deactivate();
        console.log('Disconnected from WebSocket');
    }
};

export const sendMessage = (message:Object,dest:string) => {
    if (stompClient && stompClient.connected) {
        console.log("sending")
        stompClient.publish({
            destination: dest,
            body: JSON.stringify(message),
        });
    }
};
