import React from "react";
import { Button, Col, Divider, Row } from "antd";
import Title from "antd/es/typography/Title";
import DropDown from "../dropDown/dropDown";
import UserVoice from "../sideIcons/UserVoice";
import UserCheck from "../sideIcons/UserCheck";
import UserClose from "../sideIcons/UserClose";
import UserTag from "../sideIcons/UserTag";
import { DownOutlined, MailOutlined } from "@ant-design/icons";

const Header = () => {
  const [dropDownHoverIn, setDropDownHoverIn] = React.useState(false);
  return (
    <Row style={{ marginTop: "2.5rem" }}>
      <Col span={6}>
        <Title
          style={{
            color: "#1D4ED8",
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          London Internship Program
        </Title>
        <Title
          style={{
            color: "#0B0B0B",
            fontFamily: "Poppins",
            fontSize: "0.9rem",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "normal",
          }}
        >
          London
        </Title>
      </Col>
      <Col
        span={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onMouseLeave={() => {
          setDropDownHoverIn(false);
        }}
      >
        <DropDown hoverIn={dropDownHoverIn} setHoverIn={setDropDownHoverIn} />
      </Col>
      <Col
        span={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          type="default"
          icon={<UserTag />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          type="default"
          icon={<UserClose />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          type="default"
          icon={<UserCheck />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
          }}
          type="default"
          icon={<UserVoice />}
        />
        <Button
          style={{
            height: "2.5rem",
            width: "2.5rem",
            border: "none",
          }}
          type="default"
          icon={<MailOutlined />}
        />
        <Button
          type="primary"
          style={{
            borderRadius: "8px 8px 8px 8px",
            background: "#1D5ECD",
            display: "flex",
            padding: "8px 16px",
            alignItems: "center",
            gap: "10px",
            height: "3rem",
          }}
        >
          Move To Video Interview
          <Divider
            type="vertical"
            style={{
              width: "1px",
              height: "100%",
              backgroundColor: "white",
            }}
          />
          <DownOutlined />
        </Button>
      </Col>
    </Row>
  );
}

export default Header;
