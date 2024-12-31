import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import Comments from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <Fragment>
      <div className="flex flex-col p-2 m-5 gap-4 w-full">
        <div className="flex gap-2">
          <div>
            <iframe
              className="rounded-xl shadow-2xl"
              width="924"
              height="550"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
        <Comments />
      </div>
    </Fragment>
  );
};

export default WatchPage;
