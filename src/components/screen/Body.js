import React, { useEffect, useState } from "react";
import styles from "../css/body.module.css";
import SubjectTable from "./SubjectTable";
import SubmitList from "./SubmitList";
import YouTube from "react-youtube";
import img from "../../public/img.jpg";

const Body = () => {
  const subjectList = [
    {
      sub_id: 1,
      week: 3,
      major: true,
      classroom: "인제니움 3층",
      sbj_name: "DB",
      credit: 2,
      face: true,
      day: "월요일",
      dept: "컴퓨터정보계열",
      prof: "김종율",
    },
    {
      sub_id: 2,
      week: 1,
      major: true,
      classroom: "인제니움 2층",
      sbj_name: "CCNA",
      credit: 3,
      face: false,
      day: "화요일",
      dept: "컴퓨터정보계열",
      prof: "김종율",
    },
    {
      sub_id: 3,
      week: 2,
      major: false,
      classroom: "토탈테크놀로지 4층",
      sbj_name: "AWS",
      credit: 3,
      face: true,
      day: "수요일",
      dept: "컴퓨터정보계열",
      prof: "김종율",
    },
    {
      sub_id: 4,
      week: 2,
      major: false,
      classroom: "토탈테크놀로지 2층",
      sbj_name: "국어",
      credit: 3,
      face: false,
      day: "목요일",
      dept: "컴퓨터정보계열",
      prof: "김종률",
    },
    {
      sub_id: 5,
      week: 1,
      major: false,
      classroom: "글로벌 생활관",
      sbj_name: "영어",
      credit: 2,
      face: false,
      day: "금요일",
      dept: "컴퓨터정보계열",
      prof: "김종율",
    },
  ];
  const [submitList, setSubmitList] = useState([]);
  const onClickSubmitButton = (value) => {
    if (window.confirm(value.sbj_name + " 과목을 신청하시겠습니까")) {
      if (submitList.find((data) => data.sub_id === value.sub_id)) {
        alert("잠시만 기다려 주세요.");
      } else {
        const newList = [...submitList, value];
        setSubmitList(newList);
        console.log(newList);
      }
    } else {
      alert("취소되었습니다.");
    }
  };

  const onClickRemoveButton = (value) => {
    setSubmitList(submitList.filter((data) => data.sub_id !== value.sub_id));
  };

  return (
    <div className={styles.body}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: "10px" }}>
        <YouTube videoId={"vRiJBMrg8_o"} opts={{ width: "480", height: "270" }} />
        <img src={img} style={{ height: "270px", marginLeft: "50px" }} />
      </div>
      <SubjectTable subjectList={subjectList} onClickSubmitButton={onClickSubmitButton} />
      <div className={styles.list}>&gt; 수강신청내역</div>
      <SubmitList submitList={submitList} onClickRemoveButton={onClickRemoveButton} />
    </div>
  );
};

export default Body;
