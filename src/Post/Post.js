import React from 'react';
import './Post.css';
import editBtn from '../Assets/edit.png'

const Post = (props) => {

    var likeClasses = ["im", "like-img", "im-thumb-up"];
    var dislikeClasses = ["im", "like-img", "im-thumb-down"];
    var likes = props.likesArr.length - props.dislikesArr.length;

    if (props.currentUserLike === 1) {
      likeClasses.push("green-txt");
    }
    if (props.currentUserLike === -1) {
      dislikeClasses.push("red-txt");
    }

    return (
      <div className="post-div">
        <div className="post-header">
          <div className="author-div">
            <img
              src={props.authorPic}
              className="author-pic"
              alt="ProPic"
            ></img>
            <div className="author-name">{props.authorName}</div>
          </div>
          <div className="edit-btn-div shake-rotate">
            <img
              src={editBtn}
              className="edit-btn"
              alt="Edit"
              onClick={props.edit}
            ></img>
          </div>
        </div>
        <div className="post-text">{props.text}</div>
        <div className="post-footer">
          <div className="like-dislike-div">
            <div className="like-div">
              <i onClick={props.like} className={likeClasses.join(" ")}></i>
            </div>
            <div className="like-counter">{likes}</div>
            <div className="dislike-div">
              <i
                onClick={props.dislike}
                className={dislikeClasses.join(" ")}
              ></i>
            </div>
          </div>
          <div className="delete-div">
            <i
              onClick={props.delete}
              className="im im-trash-can delete-btn"
            ></i>
          </div>
        </div>
      </div>
    );
}

export default Post;