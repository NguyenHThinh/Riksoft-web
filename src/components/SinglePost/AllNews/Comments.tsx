import React from "react";

interface commentsData {
  user: {
    picture: string;
    name: string;
  };
  content: string;
  time: string;
  replies: {
    user: {
      picture: string;
      name: string;
    };
    content: string;
    time: string;
  }[];
}

interface CommentsProps {
  commentCard: {
    user: {
      picture: string;
      name: string;
    };
    date: string;
    text: string;
  };
  comments: commentsData[];
  style: string;
}

const Comments: React.FC<CommentsProps> = ({
  commentCard,
  comments,
  style,
}) => {
  return (
    <div className="blog-comments mt-70">
      <div className="comment-card card p-5 radius-5 border-0 mt-50">
        <div className="d-flex">
          <div className="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
            <img loading="lazy" src={commentCard.user.picture} alt="" />
          </div>
          <div className="inf">
            <h6 className="fw-bold">{commentCard.user.name}</h6>
            <small className="color-999">{commentCard.date}</small>
            <div className="text color-000 fs-12px mt-10">
              {commentCard.text}
            </div>
            <div className="social-icons d-flex mt-20">
              <a
                href="#"
                className="icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="icon-25 rounded-circle d-inline-flex overflow-hidden align-items-center justify-content-center fs-10px me-2"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Comments */}
      <div className="comments-content mt-70">
        <h3 className="color-000 mb-0">
          {comments.length < 10 ? `0${comments.length}` : comments.length}{" "}
          Comments
        </h3>
        {comments.map((comment, index) => (
          <div
            className={`comment-replay-cont ${index !== comments.length - 1 ? "border-bottom border-1 brd-gray" : ""} pb-40 pt-40`}
            key={index}
          >
            <div className="d-flex comment-cont">
              <div className="icon-60 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                <img loading="lazy" src={comment.user.picture} alt="" />
              </div>
              <div className="inf">
                <div className="title d-flex justify-content-between">
                  <h6 className="fw-bold fs-14px">{comment.user.name}</h6>
                  <span className="time fs-12px text-uppercase">
                    {comment.time}
                  </span>
                </div>
                <div className="text color-000 fs-12px mt-10">
                  {comment.content}
                </div>
                <a
                  href="#"
                  className={`butn border border-1 rounded-pill border-main${style} mt-20 py-2 px-3 hover-main${style} color-main${style}`}
                >
                  <span className="fs-10px">replay</span>
                </a>
              </div>
            </div>
            {comment.replies.map((reply, i) => (
              <div className="d-flex comment-replay ps-5 mt-30 ms-4" key={i}>
                <div className="icon-40 rounded-circle img-cover overflow-hidden me-3 flex-shrink-0">
                  <img loading="lazy" src={reply.user.picture} alt="" />
                </div>
                <div className="inf">
                  <div className="title d-flex justify-content-between">
                    <h6 className="fw-bold fs-14px">{reply.user.name}</h6>
                    <span className="time fs-12px text-uppercase">
                      {reply.time}
                    </span>
                  </div>
                  <div className="text color-000 fs-12px mt-10">
                    {reply.content}
                  </div>
                  <a
                    href="#"
                    className={`butn border border-1 rounded-pill border-main${style} mt-20 py-2 px-3 hover-main${style} color-main${style}`}
                  >
                    <span className="fs-10px">replay</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Comments Form */}
      <form className="comment-form d-block pt-30">
        <h3 className="color-000 mb-40">Leave A Comment</h3>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group mb-30">
              <textarea
                className="form-control radius-4 fs-12px p-3"
                rows={6}
                placeholder="Write your comment here"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-4 mb-lg-0">
              <input
                type="text"
                className="form-control fs-12px radius-4 p-3"
                placeholder="Your Name *"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control fs-12px radius-4 p-3"
                placeholder="Your Email *"
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-check mt-20">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-12px"
                htmlFor="flexCheckDefault"
              >
                'Save my name & email in this browser for next time I comment'
              </label>
            </div>
          </div>
          <div className="col-12">
            <a
              href="#"
              className={`btn rounded-pill main${style}-3Dbutn hover-main4 sm-butn fw-bold mt-40`}
            >
              <span>Submit Comment</span>
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comments;
