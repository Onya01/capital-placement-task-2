import { Divider, Space } from "antd";
import Title from "antd/es/typography/Title";

const Filter = (props: any) => {
  const { value } = props;
  return (
    <>
      <Space
        style={{
          display: "flex",
          padding: "18px 16px",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          width: "100%",
        }}
      >
        <Title
          style={{
            color: " #0B0B0B",
            fontFamily: "Montserrat",
            fontSize: "1.2rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ marginRight: "1rem" }}
          >
            <path
              d="M6.00016 11.3333H10.0002M6.00016 9.33333H10.0002M12.6666 6H9.73324C9.35987 6 9.17337 5.99999 9.03076 5.92733C8.90532 5.86341 8.80341 5.76145 8.73949 5.63601C8.66683 5.4934 8.66683 5.3067 8.66683 4.93333V2M12.6668 11.8667V6.43599C12.6668 6.12699 12.667 5.97248 12.6336 5.82621C12.6041 5.6965 12.5554 5.57192 12.489 5.45666C12.414 5.32668 12.309 5.21331 12.099 4.98657L9.96696 2.68392C9.73363 2.43192 9.61686 2.30592 9.47803 2.21562C9.35497 2.13558 9.21926 2.07643 9.07693 2.04052C8.91635 2 8.74497 2 8.40154 2H5.46696C4.72022 2 4.34658 2 4.06136 2.14532C3.81048 2.27316 3.60665 2.47714 3.47882 2.72803C3.3335 3.01324 3.3335 3.3866 3.3335 4.13334V11.8667C3.3335 12.6134 3.3335 12.9868 3.47882 13.272C3.60665 13.5229 3.81048 13.7268 4.06136 13.8547C4.34658 14 4.72022 14 5.46696 14H10.5336C11.2804 14 11.6535 14 11.9387 13.8547C12.1896 13.7268 12.3938 13.5229 12.5216 13.272C12.667 12.9868 12.6668 12.6134 12.6668 11.8667Z"
              stroke="#0B0B0B"
            />
          </svg>
          {value}
        </Title>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path d="M12 7.5L9 10.5L6 7.5" stroke="#1D4ED8" />
        </svg>
      </Space>
      <Divider style={{ margin: 0 }} />
    </>
  );
};

export default Filter;
