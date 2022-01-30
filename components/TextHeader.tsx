import { Heading } from "theme-ui";

const TextHeader = (params) => {
  const headers = {
    1: <Heading sx={{ my: "1em" }} as="h1" {...params}></Heading>,
    2: <Heading sx={{ my: "1em" }} as="h2" {...params}></Heading>,
    3: <Heading sx={{ my: "1em" }} as="h3" {...params}></Heading>,
  };

  let level = "1";
  if (params.level) {
    level = params.level;
  }

  return headers[level];
};

export const TextHeaderOne = (params) => {
  return <TextHeader level="1" {...params}></TextHeader>;
};

export const TextHeaderTwo = (params) => {
  return <TextHeader level="2" {...params}></TextHeader>;
};

export const TextHeaderThree = (params) => {
  return <TextHeader level="3" {...params}></TextHeader>;
};

export default TextHeader;
