import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Fun } from "../App";

function Home() {
  console.log("Home-P");
  let f = useContext(Fun);
  function reloadPage() {
    window.location.reload();
  }

  console.log("inside home");
  useEffect(() => {
    console.log("again");
    f();
    console.log("Home-UseEffect");
  }, []);
  return (
    <React.Fragment>
      <div class=" border pl-3 pb-3 mt-1 rounded">
        <Link to="/jobs">
          <button class="btn btn-success mt-3 shadow-lg p-3  ">
            <strong class="text-white">Companies</strong>
          </button>
        </Link>

        {/* <button
          onClick={reloadPage}
          class="btn btn-danger mt-3 ml-3 shadow-lg p-3 "
        >
          <strong class="text-white">Reload</strong>
        </button> */}
      </div>
    </React.Fragment>
  );
}

export default Home;
