/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Heading } from "theme-ui";

const TextHeader = React.forwardRef((params: any, ref) => {
  const headers = {
    1: <Heading ref={ref} sx={{ my: "1em" }} as="h1" {...params}></Heading>,
    2: <Heading ref={ref} sx={{ my: "1em" }} as="h2" {...params}></Heading>,
    3: <Heading ref={ref} sx={{ my: "1em" }} as="h3" {...params}></Heading>,
  };

  let level = "1";
  if (params.level) {
    level = params.level;
  }

  return headers[level];
});
TextHeader.displayName = "TextHeader";

const TextHeaderOne = React.forwardRef((params: any, ref) => {
  return <TextHeader ref={ref} level="1" {...params}></TextHeader>;
});
TextHeaderOne.displayName = "TextHeaderOne";

const TextHeaderTwo = React.forwardRef((params: any, ref) => {
  return <TextHeader ref={ref} level="2" {...params}></TextHeader>;
});
TextHeaderTwo.displayName = "TextHeaderTwo";

const TextHeaderThree = React.forwardRef((params: any, ref) => {
  return <TextHeader ref={ref} level="3" {...params}></TextHeader>;
});
TextHeaderThree.displayName = "TextHeaderThree";

export { TextHeader, TextHeaderOne, TextHeaderThree, TextHeaderTwo };
