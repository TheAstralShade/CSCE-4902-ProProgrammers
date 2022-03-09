import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Progress } from "semantic-ui-react";
const Bar = ({ day, options, calculated}) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  const hrs = ((calculated / 100) * 24).toFixed(1);
  return (
    <div className="column" style={{ backgroundColor: `${theme.background}` }}>
      <h1 className="field" style={{ color: `${theme.foreground}` }}>
        Analysis
      </h1>
      {options.map((option, index) => {
        return (
          <div className="content" key={index}>
            <label style={{ color: `${theme.foreground}` }}>{option}</label>
            <Progress
              percent={day === option ? calculated : 0}
              color="green"
              style={{ backgroundColor: `${theme.foreground}` }}
            >
              {`${day === option ? hrs : 0} hrs`}
            </Progress>
          </div>
        );
      })}
    </div>
  );
};

export default Bar;