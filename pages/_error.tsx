import Layout from "components/Layout";
import { TextHeaderOne, TextHeaderTwo } from "components/TextHeader";
import { Paragraph } from "theme-ui";

const statusCodes: { [code: number]: string } = {
  400: "Bad Request.",
  404: "This page could not be found.",
  405: "Method Not Allowed.",
  500: "Internal Server Error.",
};

function Error({ statusCode }) {
  return (
    <Layout>
      <div
        sx={{
          height: "70vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paragraph>
          <TextHeaderOne
            sx={{
              display: "inline-block",
              borderRight: "1px solid",
              borderColor: "border",
              margin: 0,
              marginRight: "20px",
              padding: "10px 23px 10px 0",
              verticalAlign: "top",
              fontSize: "2em",
            }}
          >
            {statusCode ?? "???"}
          </TextHeaderOne>

          <TextHeaderTwo
            sx={{
              fontSize: "2em",
              display: "inline-block",
              margin: 0,
              padding: "10px 23px 10px 0",
              textAlign: "left",
              verticalAlign: "top",
              fontWeight: 100,
            }}
          >
            {statusCode
              ? statusCodes[statusCode]
                ? statusCodes[statusCode]
                : `An error ${statusCode} occurred on server`
              : "An error occurred on client"}
          </TextHeaderTwo>
        </Paragraph>
      </div>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
