import { React } from "react";
import { Col, Row, Button } from "antd";

import TodoItem from "./Todoitem";

const Todolist = ({ data }) => {
  const dataComp = data.map((a) => (
    <Row key={a.id}>
      <TodoItem
        key={a.id}
        inputdate={a.inputdate}
        topic={a.topic}
        context={a.context}
        timekeeper={a.timekeeper}
        preAlarm={a.preAlarm}
      ></TodoItem>
    </Row>
  ));
  console.log("dataComp", dataComp);

  return (
    <Row>
      <Col span={6}>
        <Row>{dataComp}</Row>
      </Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>
        <Button danger>Delete</Button>
        <Button type="primary"> Edit </Button>
      </Col>
      <Col span={6}>col-6</Col>
    </Row>
  );
};

export default Todolist;
