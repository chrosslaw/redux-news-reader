import React from "react";
import Comment from "../redux-news-reader-app/src/components/Comment";

export default function CommentList({ comments }) {
  if (!comments) {
    return null;
  }

  return (
    <ul className="comments-list">
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </ul>
  );
}
