import { useState, useEffect } from "react";

const Usefetch = (url, method = "GET") => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null);
  //   this is used to show loading if inncase network is slow
  const [network, setnetwork] = useState(false);
  // this
  const [options, setoptions] = useState(null);

  // post
  const optionsdata = (data) => {
    if (method === "POST") {
      setoptions({
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
    // patch
    else if (method === "PATCH") {
      setoptions({
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    }
    // delete
    else if (method === "DELETE") {
      setoptions({
        method: "DELETE",
      });
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setnetwork(true);
      try {
        const response = await fetch(url, { ...options }); // Pass the 'url' parameter to fetch
        const jsonResponse = await response.json();

        if (response.ok) {
          setdata(jsonResponse);
          seterror(""); // Clear error when fetching is successful
          setnetwork(false);
        } else {
          seterror("Error fetching posts"); // Set a generic error message
          setnetwork(false);
        }
      } catch (error) {
        seterror("An unexpected error occurred"); // Set a generic error message
        setnetwork(false);
      }
    };
    if (method === "GET") {
      fetchPosts();
    } else if (
      (method === "POST" || method === "PATCH" || method === "DELETE") &&
      options
    ) {
      fetchPosts(options);
    }
  }, [url, method, options]);

  // 'error' is added to the dependency array to fix the ESLint warning
  return { data, error, network, optionsdata };
};

export default Usefetch;
