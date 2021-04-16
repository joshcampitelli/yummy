
const roomSocketIds = new Map();
const sessions = new Map();


export function registerSession(host, apiSearchParameters, socketId){

    var session = new Session(host, apiSearchParameters);
    var roomCode = generateRoomCode(6);

    roomSocketIds.set(roomCode, socketId);
    sessions.set(socketId, session);

    return roomCode;
}

export function joinSession(roomCode, user){

    if(roomSocketIds.has(roomCode)){
        sessions.get(roomSocketIds.get(roomCode)).addUser(user);
        return true;
    }
    return false;
}

export function startSession(roomCode){

    if(roomSocketIds.has(roomCode)){
        
        //Start session, get restaurants and add them to session object

        return true;
    }
    return false;
}

export function generateRoomCode(length) {

    var code = '';
    var characterPool = 'ABCEFGHJKLMNPQRSTUVWXYZ23456789';
    var poolSize = characterPool.length;
    for (var i = 0; i < length; i++) {
        code += characterPool.charAt(Math.floor(Math.random() * poolSize));
    }

    return code;
}
