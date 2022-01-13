import React from "react";
import Moment from "react-moment";

export default class Age extends React.Component {
  render() {
    return (
      <Moment
        date="Mon, 22 Feb 1988 17:00:00 PST"
        durationFromNow
        interval={0}
      />
    );
  }
}
