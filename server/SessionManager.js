import Session from "./Session";
var roomCodeGenerator = require("randomstring")

const roomSocketIds = new Map();
const sessions = new Map();
const ROOM_CODE_LENGTH = 6;
const ROOM_CODE_CHARSET = 'ABCEFGHJKLMNPQRSTUVWXYZ23456789'

export function registerSession(host, apiSearchParameters, socketId) {

    var session = new Session(host, apiSearchParameters);
    var roomCode = generateRoomCode()

    roomSocketIds.set(roomCode, socketId);
    sessions.set(socketId, session);

    return roomCode;
}

export function joinSession(roomCode, user) {

    if (roomSocketIds.has(roomCode)) {
        var socketId = roomSocketIds.get(roomCode);
        var session = sessions.get(socketId);
        session.addUser(user);
        return true;
    }

    return false;
}

export function startSession(roomCode) {

    if (roomSocketIds.has(roomCode)) {

        //TODO: Start session, get restaurants and add them to session object

        return true;
    }

    return false;
}

export function generateRoomCode() {
    var roomCode = roomCodeGenerator.generate({
        length: ROOM_CODE_LENGTH,
        charset: ROOM_CODE_CHARSET
    });

    //While code exists, generate new code
    while (roomSocketIds.has(roomCode)) {
        roomCode = roomCodeGenerator.generate({
            length: ROOM_CODE_LENGTH,
            charset: ROOM_CODE_CHARSET
        });
    }

    return roomCode;
}
