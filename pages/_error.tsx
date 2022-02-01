import { Error } from "components/Error";

function ErrorPage({ statusCode }) {
  return <Error statusCode={statusCode} />;
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
