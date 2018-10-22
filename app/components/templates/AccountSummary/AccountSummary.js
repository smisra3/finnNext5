// @flow
import React from "react";
import styled from "styled-components";
import styles from "./AccountSummary.style";
import Layout from "../Layout";
import HeadTag from "../../atoms/HeadTag";
import AccountSummary from "../../organisms/AccountSummary";

type Props = {
  labels: object,
  className: string
};

const AccountSummaryPage = (props: Props) => (
  <Layout title="Account Summary">
    <div className={props.className}>
      <HeadTag
        description={props.labels.loginPageTitleText}
        image="image"
        title={props.labels.loginPageTitleText}
        url="canonical url"
        siteName={props.labels.SITE_NAME}
        card="card"
      />
      <h1 className="visually-hidden">{props.labels.name}</h1>
      <section className="accountSummaryContainer fxiTba row">
        <h2 className="center-align">About Us</h2>
        <div className="name">
          <p>
            This Finnair Privacy Policy informs you of how we collect and process your personal
            data. This Policy provides information as required by the European Union General Data
            Protection Regulation (Regulation (EU) 679/2016) and describes the practices and
            purposes of personal data processing at Finnair.
          </p>
          <p>
            The Privacy Policy covers all the personal information that we may collect when you use
            our services, for example, to plan your trip, when you travel with us or shop with us or
            when you visit our website. In this Policy, we also describe the processing of your
            personal data for marketing and communication, personalisation, analytics, safety and
            security, as well as for regulatory purposes.
          </p>
          In case you are a member of the Finnair Plus loyalty program and use the membership
          services of Finnair or loyalty program partners with your Finnair Plus number, we will
          record and use your personal data according to this Policy. You can find more information
          about the processing of your personal data under each topic below. We may update this
          Privacy Policy from time to time. We will notify you on our website if we make any
          significant changes.
        </div>
      </section>
    </div>
  </Layout>
);

export default styled(AccountSummaryPage)`
  ${styles};
`;

// <AccountSummary {...props} />
