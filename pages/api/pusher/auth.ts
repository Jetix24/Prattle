import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import { pusherServer } from "@/app/libs/pusher";
import { authOptions } from "@/app/api/auth/authOptions";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getServerSession(request, response, authOptions);

  if (!session?.user?.email) {
    // Asegúrate de enviar una respuesta después de establecer el estado.
    return response.status(401).json({ error: "No autorizado" });
  }

  const socketId = request.body.socket_id;
  const channel = request.body.channel_name;
  const data = {
    user_id: session.user.email
  };

  try {
    // Asumiendo que authorizeChannel es asíncrono y devuelve una promesa.
    const authResponse = await pusherServer.authorizeChannel(socketId, channel, data);
    response.send(authResponse);
  } catch (error) {
    // Manejo de errores en caso de que la autorización falle.
    response.status(500).json({ error: "Error al autorizar el canal" });
  }
}