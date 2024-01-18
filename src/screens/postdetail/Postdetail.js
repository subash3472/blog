import React, { useEffect } from "react";
import "./Postdetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import Usefetch from "../../hooks/Usefetch";
import { Usethemecontext } from "../../hooks/Usethemescontex";

const Postdetail = () => {
  // global state
  const { theme } = Usethemecontext();

  const navigate = useNavigate();
  const location = useLocation();
  const { state: post } = location;

  const { data, error, optionsdata } = Usefetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    "DELETE"
  );

  // edit function (passing data over react-router-dom)
  const handleedit = () => {
    navigate(`/edit/${post.id}`, { state: post });
  };
  //  delete operation
  const handledelete = () => {
    optionsdata();
  };
  useEffect(() => {
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate("/"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  return (
    <div className="container outer">
      <div className="jumbotron">
        {post && (
          <>
            {/* start....................................... */}
            <div>
              {/* status alert class */}
              {data.length !== 0 && (
                <div className="alert alert-success" role="alert">
                  new post deleted successfully!!!
                </div>
              )}
              {/* if any error while creating new post */}
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
            {/* end ............................................... */}
            <div>
              <h1 className={`${theme}displaytitle`}>{post.title}</h1>
              <p className={`${theme}displaybody`}>{post.body}</p>

              <div className="float-end">
                <button
                  type="submit"
                  className="btn btn-danger btn"
                  onClick={handledelete}
                >
                  DELETE
                </button>

                {/* next button */}
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={handleedit}
                >
                  EDIT
                </button>
              </div>
            </div>

            {/*  */}
          </>
        )}
      </div>
    </div>
  );
};

export default Postdetail;
