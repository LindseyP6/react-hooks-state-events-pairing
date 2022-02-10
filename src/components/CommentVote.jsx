import React, {useState} from 'react';

function CommentVote() {
  let [commentLikes, setCommentLikes] = useState(0)

  function handleCommentLikes(){
    setCommentLikes((commentLikes) => commentLikes + 1)
  }

  return <button onClick={handleCommentLikes}>{commentLikes}Like 👍</button>;
}

export default CommentVote;
