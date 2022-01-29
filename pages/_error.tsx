import Layout from "components/Layout";
import { Paragraph } from "theme-ui";

function Error({ statusCode }) {
  return (
    <Layout>
      <Paragraph>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </Paragraph>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
