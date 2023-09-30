import { Col, Row, Select } from "antd";
const { Option } = Select;
const dropDown = ({ hoverIn, setHoverIn }: any) => {
  const dropDown = [
    {
      label: "Applied",
      value: "1745",
    },
    {
      label: "Shortlisted",
      value: "453",
    },
    {
      label: "Technical Interview",
      value: "123",
    },
    {
      label: "Opportunity Browsing",
      value: "243",
    },
    {
      label: "Video Interview ",
      value: "25",
    },
    {
      label: "Video Interview II",
      value: "25",
    },
    {
      label: "Video Interview III",
      value: "25",
    },
    {
      label: "Offer",
      value: "10",
    },
    {
      label: "Withdrawn",
      value: "25",
    },
  ];

  const handleChange = (value: string) => {
    setHoverIn(false);
  };
  return (
    <>
      <Select
        defaultValue="Opportunity Browsing"
        placeholder="Select an Option"
        style={{
          width: "100%",
          height: "2.7rem",
          border: "none",
          borderRadius: "10px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
        }}
        onChange={handleChange}
        open={hoverIn}
        onMouseEnter={() => {
          setHoverIn(true);
        }}
        bordered={false}
        size="large"
        listHeight={700}
      >
        {dropDown.map((value, index) => (
          <Option
            key={index}
            value={value.label}
            label={value.label}
            onMouseEnter={() => {
              setHoverIn(true);
            }}
            style={{
              height: "2.4rem",
              padding: "9px",
              fontWeight: 600,
              marginTop: "0.7rem",
            }}
          >
            <Row>
              <Col span={20}>{value.label}</Col>
              <Col span={4}>
                <span
                  style={{
                    borderRadius: "25%",
                    fontSize: "0.7rem",
                    fontWeight: "600",
                    background: "rgb(68 68 68 / 6%)",
                    padding: "3px",
                  }}
                >
                  {value.value}
                </span>
              </Col>
            </Row>
          </Option>
        ))}
      </Select>
    </>
  );
};

export default dropDown;
