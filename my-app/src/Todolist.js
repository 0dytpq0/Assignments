import { React } from "react";
import { Typography, Col, Row, Button, Divider } from "antd";

import TodoItem from "./Todoitem";

const Todolist = ({ data }) => {
  const { Title } = Typography;
  console.log("data", data);
  return (
    <div>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Title level={2}> My Daily Todolist</Title>
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row>
        <Col flex={2}>
          <Title level={5}>
            <TodoItem data={data} />
          </Title>
        </Col>
        <Col flex={3}>
          <Button>Default Button</Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col flex={2}>
          <Title level={5}>
            <TodoItem data={data} />
          </Title>
        </Col>
        <Col flex={3}>
          <Button>Default Button</Button>
        </Col>
      </Row>
      <Divider dashed />
      <Row>
        <Col flex={2}>
          <Title level={5}>
            <TodoItem data={data} />
          </Title>
        </Col>
        <Col flex={3}>
          <Button>Default Button</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Todolist;
