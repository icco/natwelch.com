const Blockquote = (params) => {
  return (
    <blockquote
      sx={{
        borderWidth: "0.25rem",
        paddingLeft: "1rem",
        my: "1rem",
        borderLeftStyle: "solid",
        borderColor: "secondary",
      }}
      {...params}
    ></blockquote>
  );
};

export default Blockquote;
