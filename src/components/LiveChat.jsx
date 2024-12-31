import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { makeRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <div className="p-2  w-full h-[550px] rounded-xl shadow-xl bg-blue-50 flex flex-col-reverse gap-2 border border-blue-300  overflow-scroll">
      {chats.map((chat, index) => (
        <ChatMessage name={chat.name} message={chat.message} key={index} />
      ))}
    </div>
  );
};

export default LiveChat;
