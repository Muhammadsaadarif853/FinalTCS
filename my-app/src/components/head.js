import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function head() {
  return (
    <>
      <Link to="/head/result/class">
        <button type="button" class="btn btn-success m-5">
          Result
        </button>
      </Link>
    </>
  );
}
