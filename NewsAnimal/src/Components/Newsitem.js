import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl? imageUrl: "https://cdn.wionews.com/sites/default/files/2024/01/07/404165-untitled-design-2024-01-07t121222522.png"}className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} className="btn btn-sm btn-primary mt-auto">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
