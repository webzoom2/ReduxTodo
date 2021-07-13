import React, { useState } from "react";
import { connect } from "react-redux";
function Todo(props) {
  //   const [task, setTask] = useState([]);
  const [currTask, setcurrTask] = useState("");
  return (
    <div>
      <h1>USER</h1>
      <div className="input-container">
        <input
          type="text"
          value={currTask}
          onChange={(e) => {
            setcurrTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            props.T(currTask);
            setcurrTask("");
          }}
        >
          submit
        </button>
      </div>
      <div className="task-list">
        <ul>
          {props.taskList.map((taskObj) => {
            return (
              <li className="tasklist" key={taskObj.id}>
                <p>{taskObj.task}</p>
                <button
                  onClick={() => {
                    // console.log("hello"+taskObj.id);
                    props.A(taskObj.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  console.log("in map state to prop", store);
  // state variables change
  return store.Todo;
};
// dispatch action provide to reducer
const mapDispatchtoProps = (dispatch) => {
  //    action
  // handler function
  return {
    T: (val) => {
      // dispatch action
      return dispatch({ type: "T", payload: val });
    },
    A: (val1) => {
      return dispatch({ type: "A", payload: val1 });
    },
  };
};
// higher order function
export default connect(mapStateToProps, mapDispatchtoProps)(Todo);
