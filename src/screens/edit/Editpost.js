import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Usefetch from "../../hooks/Usefetch";
// import useFetch from "../../hooks/Usefetch";

const Editpodt = () => {
  const location = useLocation();
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [validationerror, setvalidationerror] = useState("");
  const [modifiedFields, setModifiedFields] = useState({});
  const navigate = useNavigate();

  const { state: post } = location;
  const { data, error, optionsdata } = Usefetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    "PATCH"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setvalidationerror("Title should not be empty");
      return;
    }
    if (!content) {
      setvalidationerror("Content should not be empty");
      return;
    }
    setvalidationerror("");
    console.log(modifiedFields);
    optionsdata(modifiedFields);
    // optionsdata({ title, body: content, userid: 1 });
  };

  useEffect(() => {
    settitle(post.title);
    setcontent(post.body);
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate, post.title, post.body]);

  const ontitlechange = (e) => {
    settitle(e.target.value);
    setModifiedFields({ ...modifiedFields, title: e.target.value });
  };

  const oncontantchange = (e) => {
    setcontent(e.target.value);
    setModifiedFields({ ...modifiedFields, body: e.target.value });
  };

  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h4>Title:</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={ontitlechange}
          />
        </div>
        <div className="form-group">
          <label>
            <h4>Content:</h4>
          </label>
          <textarea
            className="form-control"
            value={content}
            onChange={oncontantchange}
          />
          {validationerror && (
            <div className="alert alert-success" role="alert">
              {validationerror}
            </div>
          )}
          {data.length !== 0 && (
            <div className="alert alert-success" role="alert">
              New post created successfully!!!
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-info float-end">
            EDIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editpodt;
