import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider as JotaiProvider } from "jotai";
import { Provider as ReduxProvider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <ReduxProvider store={store}>
        <JotaiProvider>
          <Head />
          <RouterProvider router={appRouter} />
        </JotaiProvider>
      </ReduxProvider>
    </div>
  );
}

export default App;
