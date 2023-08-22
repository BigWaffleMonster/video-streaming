import { createBrowserRouter } from "react-router-dom";
import Upload from "./components/Upload";
import VideoPlayer from "./components/VideoPlayer";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/video",
    element: <VideoPlayer />,
  },
]);

export default router;
