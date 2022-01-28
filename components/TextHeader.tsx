import { Heading } from "theme-ui";

const TextHeader = (params) => {
  const headers = {
    1: <Heading as="h1">{params.children}</Heading>,
    2: <Heading as="h2">{params.children}</Heading>,
    3: <Heading as="h3">{params.children}</Heading>,
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
