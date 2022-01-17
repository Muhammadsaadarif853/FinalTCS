import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DisplayResult from "./DisplayResult";

export default function Result() {
  const display = () => {
    DisplayResult(_id);
  };

  const DisplayResult = async (id) => {
    try {
      axios
        .get(`http://localhost:5000/head/results/class/${id}`)
        .then(function (res) {
          setApiResponse(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const [_id, setID] = React.useState();
  const [apiResponse, setApiResponse] = React.useState([]);
  return (
    <div>
      <div>
        <h3 className="m-3 d-flex justify-content-center">Result</h3>
        <div class="m-3">
          <label for="exampleFormControlInput1" class="form-label ">
            Enter Class Id
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="BCS-6A"
            onChange={(text) => setID(text.target.value)}
          />
        </div>
      </div>
      <Link to="/head/result/class/classid">
        <div class="m-3 d-flex justify-content-center">
          <button onClick={display} type="button" class="btn btn-danger">
            Display Result
          </button>
        </div>
      </Link>
    </div>
  );
}
