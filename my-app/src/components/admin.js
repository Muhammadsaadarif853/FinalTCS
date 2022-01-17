import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function admin() {
  return (
    <>
      <Link to = "/teacher/class">
        <button type="button" class="btn btn-success m-3">Add Class</button>
      </Link>
    </>
  );
}
