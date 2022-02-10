import React from 'react';
import CommentVote from "./CommentVote"
import SearchBar from "./SearchBar"

function Comments({comments}) {
    const commentDisplay = comments.map((comment) => <>
    <h4>{comment.user}</h4>
    <br></br>
    <p>{comment.comment}</p>
    <CommentVote />
    </>)

  return (
      <>
      <br></br>
      {/* <SearchBar /> */}
      <div>{commentDisplay}</div>
      </>
      );
}

export default Comments;
