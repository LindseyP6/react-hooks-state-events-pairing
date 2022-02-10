import React , {useState} from 'react';

function Buttons({upvotes, downvotes}) {
  let [upCount, setUpCount] = useState(upvotes);
  let [downCount, setDownCount] = useState(downvotes);
  
  function handleUpLikes(){
    setUpCount((upCount) => upCount + 1)
  }

  function handleDownLikes(){
    setDownCount((downCount) => downCount - 1)
  }

  return (
    <>
    <button onClick={handleUpLikes}>{upCount} 👍</button>
    <button onClick={handleDownLikes}>{downCount} 👎</button>
  </>
  );
}

export default Buttons;
