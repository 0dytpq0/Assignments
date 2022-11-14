import { React, useEffect, useState } from "react";
import Todolist from "./Todolist";
import "./app.css";

import {
  Button,
  Select,
  TimePicker,
  DatePicker,
  Input,
  Typography,
  Col,
  Row,
} from "antd";
import moment from "moment";

const Home = () => {
  const { TextArea } = Input;
  const format = "HH:mm";
  const { Title } = Typography;
  const [inputdate, setInputdate] = useState("");
  const [topic, setTopic] = useState("");
  const [context, setContext] = useState("");
  const [timekeeper, setTimekeeper] = useState("");
  const [preAlarm, setPreAlarm] = useState("");
  const [storeTodo, setStoreTodo] = useState([]);

  console.log(storeTodo);
  const onDateChange = (time, timeString) => {
    setInputdate(timeString);
  };
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  const onTopicChange = (e) => {
    setTopic(e.target.value);
  };
  const onContextChange = (e) => {
    setContext(e.target.value);
  };
  const onTimeKeeperChange = (time, timeString) => {
    setTimekeeper(timeString);
  };
  const onPreAlarmChange = (value) => {
    setPreAlarm(value);
  };
  const onStoreTodo = () => {
    let values = {};
    let count = storeTodo.length;
    values = {
      id: count + 1,
      inputdate,
      topic,
      context,
      timekeeper,
      preAlarm,
    };
    let preStore = [...storeTodo, values];
    setStoreTodo(preStore);

    localStorage.setItem("values", JSON.stringify(preStore));
  };
  useEffect(() => {
    const savedTodo = localStorage.getItem("values");
    setStoreTodo(JSON.parse(savedTodo));
  }, []);
  return (
    <div>
      <Title>Todd Alarms</Title>
      <Row>
        <Col flex={2}>
          <Title level={3}>날짜</Title>
        </Col>
        <Col flex={3}>
          <DatePicker onChange={onDateChange} />
        </Col>
      </Row>
      <Row>
        <Col flex={2}>
          <Title level={3}>주제</Title>
        </Col>
        <Col flex={3}>
          <Input onChange={onTopicChange} placeholder="Basic usage" />
        </Col>
      </Row>
      <Row>
        <Col flex={2}>
          <Title level={3}>내용</Title>
        </Col>
        <Col flex={3}>
          <TextArea onChange={onContextChange} rows={4} />
        </Col>
      </Row>
      <Row>
        <Col flex={2}>
          <Title level={3}>알람 시간</Title>
        </Col>
        <Col flex={3}>
          <TimePicker
            onChange={onTimeKeeperChange}
            defaultValue={moment("12:08", format)}
            format={format}
          />
        </Col>
      </Row>
      <Row>
        <Col flex={2}>
          <Title level={3}>미리 알람</Title>
        </Col>
        <Col flex={3}>
          <Select
            defaultValue="사용안함"
            style={{
              width: 120,
            }}
            onChange={onPreAlarmChange}
            options={[
              {
                value: "사용안함",
                label: "사용안함",
              },
              {
                value: "1분전",
                label: "1분전",
              },
              {
                value: "5분전",
                label: "5분전",
              },
              {
                value: "10분전",
                label: "10분전",
              },
              {
                value: "1시간전",
                label: "1시간전",
              },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button onClick={onStoreTodo} type="primary">
            저장
          </Button>
        </Col>
      </Row>
      <Todolist data={storeTodo} />
    </div>
  );
};

export default Home;
