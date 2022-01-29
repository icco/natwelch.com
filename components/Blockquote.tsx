const Blockquote = (params) => {
  return (
    <blockquote
      sx={{
        borderWidth: "0.25rem",
        paddingLeft: "1rem",
        my: "1rem",
        ml: 0,
        borderLeftStyle: "solid",
        borderColor: "border",
      }}
      {...params}
    ></blockquote>
  );
};

export default Blockquote;
