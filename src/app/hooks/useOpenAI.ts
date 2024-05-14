import  OpenAI from 'openai';
import dotenv from 'dotenv';

// Importar dotenv para cargar las variables de entorno
dotenv.config();

// Create an OPenAI API Client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

// Crea una funcion que cuando se mande a llamar, le mande un mensaje a OpenAI. Y que al final retorne la respuesta obtenida en un string
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

