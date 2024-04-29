"use client";
import { FullMessageType } from "@/app/types";
import styles from "./Body.module.css";
import { useEffect, useRef, useState } from "react";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import axios from "axios";

interface BodyProps {
    initialMessages: FullMessageType[]
  }
  

const Body: React.FC<BodyProps> = ({
    initialMessages
  }) => {
    const [messages, setMessages] = useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);

    const { conversationId } = useConversation();

    useEffect(() => { //Cada vez que se abra una conversacion, se marcaran los mensajes como vistos
      axios.post(`/api/conversations/${conversationId}/seen`)
    }, [conversationId]);

    return ( 
      <div className="flex-1 overflow-y-auto">
        {messages.map((message, i) => (
          <MessageBox
            isLast={i === messages.length - 1}
            key={message.id}
            data={message}
          />
        ))}
        <div ref={bottomRef} className="pt-24" />
      </div>
    );
}
export default Body;