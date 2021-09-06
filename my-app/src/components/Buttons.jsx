import React from "react";
import s from "./Buttons.module.css"
 

export const Buttons = (props) => {
  
  return (
    <div className={s.buttons}>
      {props.isActive ? <button className={s.stop} onClick={props.clickStopWatch}>Stop</button> :
      <button className={s.start} onClick={props.clickStartWatch}>Start</button>}
      <button className={s.reset} onClick={props.clickResetWatch}>Reset</button>
      <button className={s.wait} onClick={props.clickWaitWatch} onDoubleClick={props.doubleClickWaitWatch}>Wait</button>
    </div>
  );
}
 

