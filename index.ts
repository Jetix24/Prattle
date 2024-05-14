import  OpenAI from 'openai';
import * as dotenv from 'dotenv';

let key = process.env.NEXT_PUBLIC_OPENAI_KEY as string;

console.log(key)



// Create an OPenAI API Client
const openai = new OpenAI({
    apiKey: key,
});

export async function sendMessageToOpenAI(message: string): Promise<string> {
    try{
        const response = await openai.chat.completions.create({
            messages: [
                { 
                    role: "user", 
                    content: message 
                },
            ],
            model: "gpt-3.5-turbo-0125",
        });

        // En caso de que sea null, mandar un mensaje de error, sino mandar el mensaje
        if(response.choices[0].message.content === null){
            return "Cuentame más :)";
        } else{
            return response.choices[0].message.content;
        }

    }catch(e){
        console.log(e);
        return "Ocurrió un error en la conexión con OpenAI, intenta de nuevo.";
    }
}


/*
// Set the runtime to edge
export const runtime = 'edge';
export async function POST(req: Request, res: Response) {

    try{
    const {text} = await req.json();
    console.log("El mensaje es:",  text);

    const response = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "Eres un buen amigo con el que se puede hablar de cualquier tema.",
                },
                { 
                    role: "user", 
                    content: text 
                },
            ],
            model: "gpt-3.5-turbo-0125",
        });

    // Return la respuesta como string
    return response.choices[0].message.content;

    }catch(e){
        console.log(e);
        return "Error";
    }

}*/