export function sendMessageAction ( message ) {
    return {
        type: "SEND_MESSAGE",
        payload: message
    }
}