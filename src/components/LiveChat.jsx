import React, { Fragment, useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { makeRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [comment, setComment] = useState();
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
    <Fragment>
      <div className="p-2  w-full h-[550px] rounded-xl shadow-xl bg-blue-50 flex flex-col-reverse gap-2 border border-blue-300  overflow-scroll rounded-b-none">
        {chats.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>
      <form
        className="rounded-b w-full bg-blue-50 border overflow-hidden border-t-0 border-blue-300 flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Thiliban",
              message: comment,
            })
          );
          setComment("");
        }}
      >
        <input
          className="p-2 w-full"
          type="text"
          placeholder="Type something.."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="p-2 rounded-b-none bg-blue-700 text-white hover:shadow-lg"
        >
          Send
        </button>
      </form>
    </Fragment>
  );
};

export default LiveChat;
