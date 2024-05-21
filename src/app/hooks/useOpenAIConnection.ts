import { sendMessageToOpenAI } from "index";
import { useState } from "react";
import { aiMessageInput } from "../conversations/[conversationId]/components/MessageInput";

// Modifica la función para aceptar setters como argumentos
    export const sendRequestToOpenAI = async (
    setIsLoading: (isLoading: boolean) => void,
    setButtonText: (text: string) => void,
    setMessageGenerated: (isGenerated: boolean) => void
    ) => {
    setIsLoading(true);
    try {
        const response = await sendMessageToOpenAI("Dame solamente una frase o una pregunta para continuar cualquier conversación");
        setButtonText(response);
    } catch (error) {
        console.error("Error al enviar mensaje a OpenAI:", error);
        setButtonText('Error, intenta de nuevo');
    } finally {
        setIsLoading(false);
        setMessageGenerated(true);
    }
    };

    // La funcion messageReceived recibe un mensaje y lo muestra en el input
    export const messageReceived = (message: string) => {
    // Mostrar el mensaje en el input
        aiMessageInput(message)        
    };
