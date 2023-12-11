import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [toShowButton,setToShowButton] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      setToShowButton(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setToShowButton(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //       <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
  //       <input
  //         style={{
  //           borderColor: !isValid ? "red" : "black",
  //           background: !isValid ? "salmon" : "transparent",
  //         }}
  //         type="text"
  //         onChange={goalInputChangeHandler}
  //       />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" class={`${toShowButton ? '' : 'blur'}` }>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
