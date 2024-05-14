import  OpenAI from 'openai';

// Create an OPenAI API Client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

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

}