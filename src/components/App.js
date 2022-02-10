import video from "../data/video.js";
import Header from "./Header";
import Buttons from "./Buttons";
import HideComments from "./HideComments";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Header title={video.title} embedUrl={video.embedUrl} views={video.views} createdAt={video.createdAt}/>
      <Buttons upvotes={video.upvotes} downvotes={video.downvotes}/>
      <br></br>
      <HideComments comments={video.comments}/>
    </div>
  );
}

export default App;
