import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props.class)
  let classname = "button " + props.class;
  console.log(classname);
  return (
    <button type={props.type} className={classname} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
