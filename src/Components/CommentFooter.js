import "../css/comment-footer.css";
import Votes from "./Votes";
import commentIcon from "../assets/img/commentIcon.png";
import posts from "../data/posts";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseInit";

function scrollToReplyBox() {
  const reply = document.querySelector(".reply textarea");
  reply.scrollIntoView({ behavior: "smooth" });
  setTimeout(() => reply.focus(), 500);
}

const CommentFooter = ({ comment }) => {
  async function voteClick(e) {
    const commentRef = doc(db, "comments", comment.id);
    const classList = Array.from(e.target.classList);
    if (classList.includes("upvote")) {
      await updateDoc(commentRef, { upvotes: comment.upvotes + 1 });
    } else if (classList.includes("downvote")) {
      await updateDoc(commentRef, { downvotes: comment.downvotes + 1 });
    }
    window.location.reload();
  }

  return (
    <div className="comment-footer">
      <Votes post={comment} voteClick={voteClick} />
      <div className="footer-comments" onClick={scrollToReplyBox}>
        <img src={commentIcon} alt=""></img>
        <div className="comment-num">Reply</div>
      </div>
    </div>
  );
};

export default CommentFooter;
