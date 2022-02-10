import React from 'react';

function Header({title,embedUrl, views,createdAt}) {

  return (
    <div>
        <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h3>{title}</h3>
      <span>{views} views | Uploaded {createdAt}</span>
    </div>
  )
}

export default Header;
