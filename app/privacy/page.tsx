import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nat Welch | Privacy Policy",
}

export default async function Page() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        If you visit any subdomain of natwelch.com, I will store your IP address,
        visit time, and pages visited. If you login or create an account with
        natwelch.com or its subdomains, we will store your email address. We
        reserve the right to keep this data indefinitely. Please email
        nat@natwelch.com if you would like your information removed.
      </p>

      <p>
        Data is stored on a database hosted in the US on Google Cloud Platform. We
        also utilize Google Analytics on some sites and Auth0 on others.
      </p>
    </>
  );
}