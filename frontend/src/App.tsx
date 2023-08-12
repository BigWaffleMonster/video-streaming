import { useRef } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = async () => {
    const formData = new FormData();
    const files = inputRef.current?.files;

    if (files) {
      for (const file of files) {
        formData.append("file", file);
      }
    }

    const resp = await axios.post("http://localhost:5000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(resp);
  };

  return (
    <>
      <input
        type="file"
        name="file"
        multiple
        ref={inputRef}
        onChange={handleChangeFile}
      />
    </>
  );
}
export default App;
