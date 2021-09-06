import React from "react";
import { useEffect, useState, useCallback } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Buttons } from "./Buttons";
import { Clock } from "./Clock";
import s from "./Stopwatch.module.css"

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  
  useEffect(() => {
    const timer$ = new Subject(); 
    interval(1000)
      .pipe(takeUntil(timer$))
      .subscribe(() => {
        if (isActive && !isPaused) {
          setTime(val => val + 1000);
        } else {
          clearInterval(interval);
        }
      });
    return () => {
      timer$.next();
      timer$.complete();
    };
  }, [isActive, isPaused]);


  const clickStartWatch = useCallback(() => {
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const clickStopWatch = useCallback(() => {
    setIsActive(false);
    setIsPaused(false)
    setTime(0);
  }, []);

  const clickResetWatch = useCallback(() => {
    setTime(0);
  }, []);

  
  let timeout;
  let prevent = false;

  const clickWaitWatch = () => {
    timeout = setTimeout(function() {
      prevent = !prevent;
    }, 300);
  }

  const doubleClickWaitWatch = () => {
    clearTimeout(timeout);
    if (!prevent) {
      setIsActive(!isActive);
      setIsPaused(!isPaused);
    }
  }

  return (
    <div className={s.display}>
      <Clock
        time={time} />
      <Buttons
        clickStartWatch={clickStartWatch}
        clickStopWatch={clickStopWatch}
        clickResetWatch={clickResetWatch}
        clickWaitWatch={clickWaitWatch}
        doubleClickWaitWatch={doubleClickWaitWatch}
        isActive={isActive} />
    </div>
  );
}



