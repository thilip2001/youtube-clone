import { useSetAtom } from "jotai";
import { Search } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { showSidebar } from "../atom/showSidebar";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTIONS_URL } from "../utils/const";
import { addToCache } from "../utils/searchSlice";

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const isToggle = useSetAtom(showSidebar);
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);

  const handleSidebar = useCallback(() => {
    isToggle((prev) => !prev);
    dispatch(toggleMenu());
  }, [dispatch, isToggle]);

  const fetchSearchResults = useCallback(async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_URL + search);
    const response = await data.json();
    setSuggestions(response);
    dispatch(
      addToCache({
        [search]: response,
      })
    );
  }, [dispatch, search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setSuggestions(searchCache[search]);
      } else {
        fetchSearchResults();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, fetchSearchResults, search, searchCache]);

  return (
    <div className="grid grid-flow-col p-2  shadow-xl items-center  w-full bg-white sticky top-0">
      <div className="flex col-span-1">
        <img
          onClick={handleSidebar}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII="
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube"
        />
      </div>
      <div className="col-span-10">
        <div className="items-center flex relative">
          <input
            className="w-1/2 border border-gray-400 p-2 border-r-0 rounded-l-full "
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-white justify-center items-center hover:bg-gray-100">
            <Search />
          </button>
        </div>
        {suggestions?.[1]?.length > 0 && (
          <div className="absolute bg-white z-[999999] w-[38%] rounded-lg mt-4 p-4 shadow-lg">
            <ul>
              {suggestions?.[1]?.map((item) => (
                <li
                  key={item}
                  className="p-1 hover:bg-gray-100 rounded-full cursor-pointer flex gap-2 items-center z-[999999]"
                >
                  <Search width={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user icon"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
