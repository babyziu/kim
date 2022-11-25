import React from "react";
import styles from "../css/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>2023년도 1학기</div>
      <div className={styles.content}>
        <div className={styles.itembox}>
          전공 / 반<div className={styles.item}>컴퓨터정보계열 2CPJ</div>
        </div>
        <div className={styles.itembox}>
          성명
          <div className={styles.item}>김세정</div>
        </div>
        <div className={styles.itembox}>
          학번
          <div className={styles.item}>2101001</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
