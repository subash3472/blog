import React, { useEffect, useState } from "react";
import "./createpost.css";
import useFetch from "../../hooks/Usefetch";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [validationerror, setvalidationerror] = useState("");
  const navigate = useNavigate();

  // Corrected function name
  const { data, error, optionsdata } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    "POST"
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
    console.log({ title, body: content, userid: 1 });
    optionsdata({ title, body: content, userid: 1 });
  };
  useEffect(() => {
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  return (
    <>
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
              onChange={(e) => settitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>
              <h4>Content:</h4>
            </label>
            {/* Text area */}
            <textarea
              className="form-control"
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            />
            {/* Error message */}
            {validationerror && (
              <div className="alert alert-success" role="alert">
                {validationerror}
              </div>
            )}
            {/* post sucess alert  */}
            {data.length !== 0 && (
              <div className="alert alert-success" role="alert">
                new post created sucessfully!!!
              </div>
            )}
            {/* if any error while creating new post */}
            {error && (
              <div class="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <button type="submit" className="btn btn-info float-end">
              POST
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Createpost;
