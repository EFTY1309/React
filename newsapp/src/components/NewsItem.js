import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div class="card">
        <img
          src={
            !imageUrl
              ? "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/02/samsung-galaxy-s23-ultra-12-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1"
              : imageUrl
          }
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{title}...</h5>
          <p class="card-text">{description}...</p>
          <p class="card-text">
            <small class="text-muted">
              By {!author ? "Ünknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="blank" class="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
