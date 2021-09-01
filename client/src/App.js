import "./App.css";
import Video from "./components/Video";
import VideoData from "./data/data.json";

const App = () => {
  console.log({Videos: VideoData})
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="appHeading">Video Recommendation</h1>
        { VideoData.map(VideoItem =>(

          <div key = {VideoItem.id}>
          <Video Video={VideoItem}  />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
