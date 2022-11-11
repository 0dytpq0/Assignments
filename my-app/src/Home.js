import { useEffect, React, useState } from "react";
import Todolist from "./Todolist";
import styled from "styled-components";
import type { RangePickerProps } from "antd/es/date-picker";
import {
  Button,
  Select,
  TimePicker,
  DatePicker,
  Input,
  Typography,
  Col,
  Row,
  Divider,
} from "antd";
import moment from "moment";

const Home = () => {
  const { TextArea } = Input;
  const format = "HH:mm";
  const { Title } = Typography;
  const [inputdate, setInputdate] = useState("");
  const [summary, setSummary] = useState("");
  const [context, setContext] = useState("");
  const [timekeeper, setTimekeeper] = useState("");
  const [preAlarm, setPreAlarm] = useState("");
  const [storeTodo, setStoreTodo] = useState([]);

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onDateChange = (time, timeString) => {
    setInputdate(timeString);
    console.log(time, timeString);
  };
  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };
  const onSummaryChange = (e) => {
    console.log(e.target.value);
    setSummary(e.target.value);
  };
  const onContextChange = (e) => {
    console.log(e.target.value);
    setContext(e.target.value);
  };
  const onTimeKeeperChange = (time, timeString) => {
    setTimekeeper(timeString);
    console.log(time, timeString);
  };
  const onPreAlarmChange = (value) => {
    setPreAlarm(value);
    console.log(value);
  };
  const onStoreTodo = () => {
    let values = {};
    let count = storeTodo.length;
    console.log(count);
    values = {
      id: count + 1,
      inputdate,
      summary,
      context,
      timekeeper,
      preAlarm,
    };
    console.log("values", values);
    let preStore = [...storeTodo, values];
    setStoreTodo(preStore);
    localStorage.setItem("values", JSON.stringify(preStore));
  };

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
          <Input onChange={onSummaryChange} placeholder="Basic usage" />
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
