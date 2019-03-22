import Head from "next/head";

import Header from "../components/Header.js";
import TextHeader from "../components/TextHeader.js";

export default () => (
  <>
    <Head>
      <title>Nat Welch | Talks</title>
    </Head>
    <Header noLogo />
    <section className="cf lh-copy pa3 pa5-ns">
      <TextHeader level="1">Talks</TextHeader>

      <p className="f3 f2-l measure w8-l mt3">
        I have given a variety of talks. Here are some that I am particularly
        proud of.
      </p>

      <ul className="f3 f2-l measure w8-l mt3">
        <li>
          StrangeLoop 2017 -{" "}
          <a href="https://writing.natwelch.com/post/673">
            Practical Applications of the Dickerson Pyramid
          </a>
        </li>
        <li>
          SRECon 2017 Americas -{" "}
          <a href="https://www.usenix.org/conference/srecon17americas/program/presentation/welch">
            SRE and Presidential Campaigns
          </a>
        </li>
        <li>Recurse Center, 2016 - Tech and the US Presidential Campaign</li>
        <li>
          LinuxCon 2014 -{" "}
          <a href="https://lccoelce14.sched.com/event/1yFaOlK/build-scalable-cloud-applications-on-google-compute-engine-using-kubernetes-and-mesos-bernd-mathiske-mesosphere-nat-welch-google?iframe=no">
            Build Scalable Cloud Applications on Google Compute Engine Using
            Kubernetes and Mesos
          </a>
        </li>
        <li>
          Cal Poly, 2013 - Site Reliability Engineering and Google Compute
          Engine (
          <a href="https://www.youtube.com/watch?v=vajzYBDg14c">video</a>)
        </li>
        <li>Cal Poly, 2011 - Punchd &amp; Google</li>
      </ul>
    </section>
  </>
);
