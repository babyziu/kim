import React from "react";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import styles from "../css/body.module.css";

const SubjectTable = ({ subjectList, onClickSubmitButton }) => {
  console.log(subjectList);
  return (
    <div className={styles.table}>
      <TableContainer sx={{ width: 1600, height: 280 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ padding: 1 }}>
                주차
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                이수구분
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                강의실 위치
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                교과목명
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                학점
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                대면/비대면
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                요일
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                개설학과
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                교수
              </TableCell>
              <TableCell align="center" sx={{ padding: 1 }}>
                신청
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjectList.map((value) => {
              return (
                <TableRow sx={{ height: 30 }}>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.week}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.major ? "전공" : "교양"}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.classroom}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.sbj_name}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.credit}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.face ? "대면" : "비대면"}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.day}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.dept}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    {value.prof}
                  </TableCell>
                  <TableCell align="center" sx={{ padding: 1 }}>
                    <Button variant="contained" color="info" size="small" onClick={() => onClickSubmitButton(value)}>
                      신청
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubjectTable;
