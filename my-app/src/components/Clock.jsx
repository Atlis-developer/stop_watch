import React from "react";

import s from "./Clock.module.css"
 

export const Clock = (props) => {
  return (
    <div className={s.clock}>
     {new Date(props.time).toISOString().slice(11, 19)}
    </div>
  );
}
 


