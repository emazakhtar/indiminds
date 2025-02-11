import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Counter.module.css";

export function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}></div>
    </div>
  );
}
