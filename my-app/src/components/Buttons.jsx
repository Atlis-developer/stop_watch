import React from "react";
import s from "./Buttons.module.css"
 

export const Buttons = (props) => {
  
  return (
    <div className={s.buttons}>
      <button className={s.start} onClick={props.startWatch}>Start</button>
      <button className={s.stop} onClick={props.stopWatch}>Stop</button>
      <button className={s.reset} onClick={props.resetWatch}>Reset</button>
      <button className={s.wait} onClick={props.waitWatch}>Wait</button>
    </div>
  );
}
 

