import { Button } from "antd";
import React from "react";

const TodoItem = ({ inputdate, topic, context, timekeeper, preAlarm }) => {
  return `날짜 : ${inputdate}, 주제 : ${topic}, 내용 : ${context}, 알람 시간 : ${timekeeper}, 미리 알람 : ${preAlarm}`;
};

export default TodoItem;
