// import React from 'react'
let initialState = {
  taskList: [],
};
function todoReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case "T":
      // store update
      let newObject = {
        ...state,
        // quantity: state.quantity - action.payload,
        taskList: [
          ...state.taskList,
          { task: action.payload, id: state.taskList.length },
        ],
      };
      console.log(state.taskList);
      return newObject;
    // balls: state.balls - 1,
    case "A":
      return {
        taskList: state.taskList.filter(function (task) {
          return task.id !== action.payload;
        }),
        // currTask: e.target.value,
        // balls: state.balls + 1,
      };
    default:
      return state;
  }
}

export default todoReducer;
