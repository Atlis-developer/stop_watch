import React from "react";
import { useEffect, useState, useCallback } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Buttons } from "./Buttons";
import { Clock } from "./Clock";
import s from "./Stopwatch.module.css"

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [starting, setStarting] = useState(false);

  useEffect(() => {
    const timer$ = new Subject(); 
    interval(1000)
      .pipe(takeUntil(timer$))
      .subscribe(() => {
        if (starting === true) {
          setTime(val => val + 1000);
        }
      });
    return () => {
      timer$.next();
      timer$.complete();
    };
  }, [starting]);


  const startWatch = useCallback(() => {
    setStarting(true);
  }, []);

  const stopWatch = useCallback(() => {
    setStarting(false);
    setTime(0);
  }, []);

  const resetWatch = useCallback(() => {
    setTime(0);
  }, []);

  const waitWatch = useCallback(() => {
    setStarting(false);
  }, []);

  return (
    <div className={s.display}>
      <Clock
        time={time} />
      <Buttons
        startWatch={startWatch}
        stopWatch={stopWatch}
        resetWatch={resetWatch}
        waitWatch={waitWatch} />
    </div>
  );
}



