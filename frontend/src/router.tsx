import { createBrowserRouter } from "react-router-dom";
import Upload from "./components/Upload";
import VideoPlayer from "./components/VideoPlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: "",
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
