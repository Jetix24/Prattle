// hooks/useOpenAIConnection.ts
import { sendMessageToOpenAI } from "index";
import { useState } from "react";
import { aiMessageInput } from "../conversations/[conversationId]/components/MessageInput";

// Modifica la función para aceptar setters como argumentos y los intereses del usuario
export const sendRequestToOpenAI = async (
  setIsLoading: (isLoading: boolean) => void,
  setButtonText: (text: string) => void,
  setMessageGenerated: (isGenerated: boolean) => void,
  interests: string[] // Añadir intereses del usuario
) => {
  setIsLoading(true);
  try {
    // Construir el mensaje para OpenAI usando los intereses del usuario
    const prompt = `Basándote en estos intereses: ${interests.join(", ")}, dame una frase o una pregunta para continuar cualquier conversación. Sin poner comillas, por favor.`;
    console.log("Prompt:", prompt);
    const response = await sendMessageToOpenAI(prompt);
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
  aiMessageInput(message);
};
