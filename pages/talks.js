import App from "components/App";
import Header from "components/Header.js";
import TextHeader from "components/TextHeader.js";
import Head from "next/head";

const Talks = () => (
  <App>
    <Head>
      <title>Nat Welch | Talks</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Talks</TextHeader>

      <p className="f5 f4-ns measure-wide w8-ns mt3">
        I have given a variety of talks. Here are some that I am particularly
        proud of.
      </p>

      <ul className="list f5 f4-ns measure-wide mt3 pl0">
        <li className="ml4-ns mv4">
          Google Cloud Next 2019 San Francisco - Prometheus and SLO Alerting
        </li>
        <li className="ml4-ns mv4">
          SRECon 2019 Americas -{" "}
          <a href="https://www.usenix.org/conference/srecon19americas/presentation/welch">
            Intro to GraphQL
          </a>
        </li>
        <li className="ml4-ns mv4">
          StrangeLoop 2017 -{" "}
          <a href="https://writing.natwelch.com/post/673">
            Practical Applications of the Dickerson Pyramid
          </a>
        </li>
        <li className="ml4-ns mv4">
          SRECon 2017 Americas -{" "}
          <a href="https://www.usenix.org/conference/srecon17americas/program/presentation/welch">
            SRE and Presidential Campaigns
          </a>
        </li>
        <li className="ml4-ns mv4">
          Recurse Center, 2016 - Tech and the US Presidential Campaign
        </li>
        <li className="ml4-ns mv4">
          LinuxCon 2014 -{" "}
          <a href="https://lccoelce14.sched.com/event/1yFaOlK/build-scalable-cloud-applications-on-google-compute-engine-using-kubernetes-and-mesos-bernd-mathiske-mesosphere-nat-welch-google?iframe=no">
            Build Scalable Cloud Applications on Google Compute Engine Using
            Kubernetes and Mesos
          </a>
        </li>
        <li className="ml4-ns mv4">
          Cal Poly, 2013 - Site Reliability Engineering and Google Compute
          Engine (
          <a href="https://www.youtube.com/watch?v=vajzYBDg14c">video</a>)
        </li>
        <li className="ml4-ns mv4">Cal Poly, 2011 - Punchd &amp; Google</li>
      </ul>
    </section>
  </App>
);

export default Talks;
