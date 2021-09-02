import { useState } from "react";
import "./App.css";
import CreateVideo from "./components/CreateVideo";
import Video from "./components/Video";
import VideoData from "./data/data.json";

const App = () => {
  const [page, setPage] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="appHeading">Video Recommendation App</h1>
        <button onClick={() => setPage('createvideopage')}>Add</button>
        <button onClick={() => setPage('viewvideopage')}>View</button>
        {page === 'viewvideopage' && (
        <div>
        {VideoData.map(VideoItem => (
          <div key={VideoItem.id}>
          <Video video={VideoItem}  />
          </div>
        ))}
        </div>
        )}
        {page === 'createvideopage' && (
        <div>
            <CreateVideo />
        </div>
        )}
      </header>
    </div>
  );
};

export default App;
