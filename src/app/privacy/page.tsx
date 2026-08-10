import type { Metadata } from "next";
import { site } from "@/content/site";
import styles from "./privacy.module.css";

const privacyEmail = "navidrashid.dxb@gmail.com";

/**
 * Kept out of search results on purpose. Crawling stays allowed in robots.txt —
 * a blocked URL can still be indexed from external links, and Google can only
 * honour `noindex` on a page it is permitted to fetch.
 */
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  alternates: { canonical: "/privacy" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function PrivacyPage() {
  return (
    <main className={`section ${styles.page}`}>
      <div className={`container ${styles.prose}`}>
        <p className="eyebrow">Legal</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: July 24, 2026</p>

        <p>
          This privacy policy explains what Personally Identifiable Information
          (PII) and Nonpersonal Information (NPI) we may collect from you, how
          we collect it, how we protect it, how we may share it, how you can
          access and change it, and how you can limit our sharing of it. It also
          explains certain legal rights you have with respect to your PII. Any
          capitalized terms not defined here have the same meaning as elsewhere
          on our website.
        </p>

        <h2>Definitions</h2>
        <p>
          <strong>Non-personal Information (NPI)</strong> is information that is
          in no way personally identifiable. Some NPI is obtained automatically
          when you access our website with a web browser.
        </p>
        <p>
          <strong>Personally Identifiable Information (PII)</strong> is
          information that is personally identifiable to you and obtained for us
          to provide you with a product or service. PII may include your name,
          email address, physical address, phone number, payment information, and
          other information you provide to us.
        </p>

        <h2>Information we collect</h2>
        <p>
          Generally, you control the amount and type of information you provide
          when using our website. We may require certain information to provide
          services and products. If you do not provide enough information, we may
          not be able to process a request. If you register as a user or member,
          you must provide PII so we can offer related features and
          functionality.
        </p>

        <h3>Automatic information</h3>
        <p>
          We automatically receive information from your web browser or mobile
          device. This may include the website you came from, the website you
          visit next, your IP address or proxy server, internet service
          provider, browser type, mobile device type, and operating system. We
          use this information to analyze trends and improve our website.
        </p>

        <h3>When entering and using our website</h3>
        <p>
          When you enter and use our website and agree to accept cookies, some
          of those cookies may contain your PII.
        </p>

        <h3>At user and member registration</h3>
        <p>
          When you register as a user or member, we collect your name, email
          address, and other information listed at registration.
        </p>

        <h3>When buying products or services</h3>
        <p>
          If you buy products or services from us, we collect your name, email
          address, physical address, payment information, phone number, and
          other information required to complete the transaction.
        </p>

        <h3>Online forms</h3>
        <p>
          Our website may use online forms. Information you enter into those
          forms may contain PII.
        </p>

        <h3>Mobile application</h3>
        <p>
          If you use our mobile application, you may need to provide PII to use
          it.
        </p>

        <h3>Location information</h3>
        <p>
          When you use our services, we may collect and process information
          about your approximate or actual physical location using technologies
          such as GPS and IP tracking. These technologies may also provide
          information about nearby cell towers, Wi-Fi access points, and other
          devices.
        </p>

        <h3>Premium features</h3>
        <p>
          Our website may offer paid premium features. If we charge for those
          features, we would collect payment information to bill you.
        </p>

        <h2>Our use of cookies</h2>
        <p>
          Our website uses cookies. A cookie is a small piece of data or a text
          file downloaded to your computer or mobile device when you access
          certain websites. Cookies may contain text that can be read by the
          web server that delivered the cookie, typically a sequence of letters
          and numbers that uniquely identify your device, and may contain other
          information as well.
        </p>
        <p>
          By agreeing to accept our use of cookies, you give us permission to
          place some or all of the cookies described below on your device.
        </p>

        <h3>Strictly necessary cookies</h3>
        <p>
          These cookies are necessary for proper functioning of the website,
          such as displaying content, logging in, validating your session,
          responding to your request for services, and related functions. Most
          browsers can disable cookies, but doing so may prevent features from
          working correctly.
        </p>

        <h3>Performance cookies</h3>
        <p>
          These cookies collect information about use of the website, such as
          pages visited, traffic sources, user interests, content management,
          and other measurements.
        </p>

        <h3>Functional cookies</h3>
        <p>
          These cookies enable the website to remember choices such as language,
          username, and other preferences, and may be used to deliver services
          like posting content, audio, or video.
        </p>

        <h3>Media cookies</h3>
        <p>
          These cookies can improve website performance and provide special
          features and content. They may be placed by third parties who provide
          services to us or by our company.
        </p>

        <h3>Advertising or targeting cookies</h3>
        <p>
          These cookies are usually placed by advertising companies to develop a
          profile of your browsing interests and serve related ads on other
          websites. Disabling them typically means you will see less targeted
          advertising.
        </p>

        <h3>Session cookies</h3>
        <p>
          These cookies link a user&apos;s actions during a browser session. They
          may remember items in a cart or recognize you as you navigate so page
          changes are retained. Session cookies expire after the browser session
          and are not stored long term.
        </p>

        <h3>Persistent cookies</h3>
        <p>
          These cookies are stored between browser sessions so preferences or
          actions across a site (or, in some cases, across sites) can be
          remembered. They may be used for preferences, choices, or advertising.
        </p>

        <p>We may also use cookies for:</p>
        <ul>
          <li>Identifying areas of our website you have visited</li>
          <li>Personalizing content you see on our website</li>
          <li>Website analytics</li>
          <li>Remarketing our products or services to you</li>
          <li>Remembering preferences, settings, and login details</li>
          <li>Targeted advertising relevant to your interests</li>
          <li>Affiliate marketing</li>
          <li>Allowing you to post comments</li>
          <li>Allowing you to share content with social networks</li>
        </ul>
        <p>
          Most web browsers can disable cookies. If you disable cookies, you may
          not be able to access features on our website correctly or at all.
        </p>

        <h2>Web beacons</h2>
        <p>
          We may use web beacons to collect general information about your use
          of our website, promotions, or newsletters. This helps us statistically
          monitor email opens and better understand visitor behavior.
        </p>

        <h2>Google ads and content network</h2>
        <p>
          Third-party vendors, including Google, use cookies to serve ads based
          on a user&apos;s past visits to our website. Google&apos;s use of the
          DoubleClick cookie enables it and its partners to serve ads to our
          users based on visits to our site and/or other sites on the Internet.
          You may opt out of interest-based advertising via the DoubleClick
          cookie at{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noreferrer"
          >
            aboutads.info/choices
          </a>
          .
        </p>

        <h2>Google Analytics</h2>
        <p>
          Our website may use Google Analytics to collect information about site
          use, such as how often users visit, which pages they view, and which
          sites they used before arriving. We use this information to improve
          our site. Google Analytics collects the IP address assigned to you on
          the date you visit, not your name or other identifying information. We
          do not combine Google Analytics data with PII. Although Google Analytics
          may place a permanent cookie to identify you as a unique user on return
          visits, that cookie cannot be used by anyone but Google. You can opt
          out at{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noreferrer"
          >
            tools.google.com/dlpage/gaoptout
          </a>
          .
        </p>

        <h2>Google remarketing</h2>
        <p>
          Our website may use remarketing advertising services provided by Google
          and other companies that show our ads across the Internet. With
          remarketing, you may see ads for products or services you previously
          viewed. For this to happen, Google or another remarketing provider may
          read or place a cookie in your browser when you visit our site or other
          sites using remarketing (only if your browser allows it).
        </p>
        <p>
          You can opt out of Google cookies and remarketing at{" "}
          <a
            href="https://support.google.com/ads/answer/2662922?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Google Ads settings
          </a>{" "}
          or via the Network Advertising Initiative at{" "}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noreferrer"
          >
            optout.networkadvertising.org
          </a>
          .
        </p>

        <h2>Facebook remarketing</h2>
        <p>
          Our website may use Facebook&apos;s remarketing advertising service. With
          remarketing, you may see ads for products or services you previously
          viewed while using Facebook. Facebook may use a Custom Audience Pixel
          that places a unique cookie in your browser when you land on a page. To
          opt out, visit{" "}
          <a
            href="https://www.facebook.com/help/568137493302217"
            target="_blank"
            rel="noreferrer"
          >
            Facebook&apos;s help center
          </a>
          .
        </p>

        <h2>How your information is used</h2>
        <p>We use the information we receive from you to:</p>
        <ul>
          <li>Provide our products and services</li>
          <li>Personalize and customize our content</li>
          <li>Make improvements to our website</li>
          <li>Contact you with updates to our website</li>
          <li>Resolve problems and disputes</li>
          <li>
            Contact you with marketing and advertising that we believe may be of
            interest to you
          </li>
        </ul>

        <h2>Communications and emails</h2>
        <p>
          When we communicate with you about our website, we will use the email
          address and phone number(s) you provided when you registered as a
          member or user. We may also send promotional information about our
          website or offers from us or our affiliates unless you have opted out.
          You can change your contact preferences at any time through your
          account or by emailing{" "}
          <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
        </p>

        <h2>Sharing information with affiliates and other third parties</h2>
        <p>
          We do not sell, rent, or otherwise provide your PII to third parties
          for marketing purposes. For data aggregation purposes we may use your
          NPI, which might be sold to other parties at our discretion. Any such
          aggregation would not contain your PII.
        </p>
        <p>
          We may provide your PII to third-party service providers we hire to
          support our business, including but not limited to payment processors,
          web analytics companies (such as Google Analytics), call centers, data
          management services, help desk providers, shopping cart and email
          service providers, and shipping or mailing companies. Once we have
          received a worksheet or booking request, we may share details provided
          with the builder, developer, marketing company, listing brokerage, or
          affiliate companies.
        </p>

        <h2>Legally required releases of information</h2>
        <p>
          We may be legally required to disclose your PII if such disclosure is
          (a) required by subpoena, law, or other legal process; (b) necessary to
          assist law enforcement officials or government enforcement agencies;
          (c) necessary to investigate violations of or otherwise enforce our
          Legal Terms; (d) necessary to protect us from legal action or claims
          from third parties, including you and/or other users or members; or (e)
          necessary to protect the legal rights, personal/real property, or
          personal safety of our company, users, employees, and affiliates.
        </p>

        <h2>Disclosures to successors</h2>
        <p>
          If our business is sold or merges in whole or in part with another
          business that would become responsible for providing the website to
          you, we retain the right to transfer your PII to the new business. The
          new business would retain the right to use your PII according to this
          privacy policy and any changes instituted by the new business.
        </p>
        <p>
          We also retain the right to transfer your PII if our company files for
          bankruptcy and some or all of our assets are sold to another individual
          or business.
        </p>

        <h2>Community discussion boards</h2>
        <p>
          Our website may offer community discussion boards. We do not filter or
          monitor all posts. If you choose to post, use care when exposing PII —
          that information is not protected by this privacy policy, and we are
          not liable if you choose to disclose PII through such postings.
        </p>

        <h2>Retaining and destroying your PII</h2>
        <p>
          We retain information we collect from you (including your PII) only for
          as long as we need it for legal, business, or tax purposes. Your
          information may be retained in electronic form, paper form, or both.
          When it is no longer needed, we will destroy, delete, or erase it.
        </p>

        <h2>Updating, requesting, and deleting your PII</h2>
        <p>
          You can update your PII using services on our website when available.
          If no such services exist, contact us and we will help you. You have
          the right to request access to the PII we have collected about you
          that is stored in electronic or paper format, and the right to request
          that we delete PII we hold about you.
        </p>
        <p>
          To request access, ask what PII we have collected, or request deletion,
          email{" "}
          <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>. We may keep
          your PII as needed to enforce our agreements and comply with legal
          obligations.
        </p>

        <h2>Filing a complaint with authorities</h2>
        <p>
          You have the right to file a complaint with supervisory authorities if
          your information has not been processed in compliance with applicable
          data protection law, including the General Data Protection Regulation
          where it applies. If supervisory authorities fail to address your
          complaint properly, you may have the right to a judicial remedy.
        </p>

        <h2>Revoking your consent and opting out of sharing</h2>
        <p>
          You have the right to revoke your consent for us to use your PII at any
          time. You can always opt out of future unaffiliated third-party
          disclosures of your information. Such an opt-out will not affect
          disclosures otherwise permitted by law, including but not limited to:
          (i) disclosures to affiliates; (ii) disclosures to third-party service
          providers that support our business, such as payment processing,
          computer system services, shipping, data management, or promotional
          services; (iii) disclosures to third parties as necessary to fulfill
          your requests; (iv) disclosures to governmental agencies or law
          enforcement, or as otherwise required by law; (v) previously completed
          disclosures to third parties; or (vi) disclosures related to contests,
          promotions, or third-party offers you later choose to enter or accept.
        </p>
        <p>
          To opt out of unaffiliated third-party disclosures or revoke consent
          for us to use your PII, email{" "}
          <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
        </p>

        <h2>Objecting to processing your PII</h2>
        <p>You have the right to object to the processing of your PII.</p>

        <h2>Protecting the privacy rights of third parties</h2>
        <p>
          If any postings you make on our website contain information about third
          parties, you must have permission to include that information. While we
          are not legally liable for the actions of our users, we will remove
          postings we are notified about if they violate the privacy rights of
          others.
        </p>

        <h2>Do Not Track settings</h2>
        <p>
          Some web browsers have settings that request websites not track your
          movement. Our website does not obey such settings when transmitted to
          and detected by our website. You can turn off tracking features and
          other security settings in your browser by referring to your
          browser&apos;s documentation.
        </p>

        <h2>Links to other websites</h2>
        <p>
          Our website may contain links to other websites. Those websites are not
          under our control and are not subject to this privacy policy. They will
          likely have their own policies. We provide links solely for your
          convenience and are not responsible for those websites. Access them at
          your own risk and review their privacy policies for how they treat your
          PII.
        </p>

        <h2>Protecting children&apos;s privacy</h2>
        <p>
          Our website is not designed for use by anyone under the age of 13. We do
          not knowingly collect PII from children under 13. If you are a parent or
          guardian and believe your child is using our website, please contact us.
          Before we remove any information, we may ask for proof of identification
          to prevent malicious removal of account information. If we discover that
          a child is accessing our website, we will delete their information within
          a reasonable period of time. You acknowledge that we do not verify the
          age of our users and have no liability to do so.
        </p>

        <h2>Our email policy</h2>
        <p>
          You can always opt out of receiving further email correspondence from us
          or our affiliates. We will not sell, rent, or trade your email address
          to any unaffiliated third party without your permission, except in the
          sale or transfer of our business.
        </p>

        <h2>Our security policy</h2>
        <p>
          We have built our website using industry-standard encryption and
          authentication tools to protect the security of your PII. We also use
          technologies such as secure routers and firewalls to help protect your
          PII. When we collect credit card information through our website, we
          encrypt it before it travels over the Internet using industry-standard
          technology for secure online transactions. Unfortunately, we cannot
          guarantee against the loss or misuse of your PII or secure data
          transmission over the Internet because of its nature.
        </p>
        <p>
          We strongly urge you to protect any password you may have for our
          website and not share it with anyone. Always log out when you finish
          using the site, especially on a shared or public computer.
        </p>

        <h2>Use of your credit card</h2>
        <p>
          You may need to provide a credit card to buy products and services from
          our website. We use third-party billing services and have no control
          over those services. We use commercially reasonable efforts to keep your
          card number confidential by using only billing services that use
          industry-standard encryption. However, you understand and agree that we
          are in no way responsible for any misuse of your credit card number.
        </p>

        <h2>International data transfers</h2>
        <p>
          Information we collect from you may be stored, processed, and
          transferred between any of the countries in which we operate. For
          European customers and users, your PII may be transferred outside the
          European Union so we can provide the services and information you
          request. Wherever we transfer, process, or store your PII, we will take
          reasonable steps to protect it. We will use the information we collect
          from you in accordance with this policy. By using our website or
          services, you agree to the transfers described in this section.
        </p>
        <p>
          Also, PII you post on our website for publication may be available
          worldwide via the Internet. We cannot prevent the use or misuse of such
          information by others.
        </p>

        <h2>Changes to our privacy policy</h2>
        <p>
          We reserve the right to change this privacy policy at any time. If we
          decide to change it, we will post those changes on our website so users
          and customers are aware of what information we collect, use, and
          disclose. If at any time we decide to disclose or use your PII in a
          method different from that specified when it was collected, we will
          provide advance notice by email to the address on file in your account,
          where applicable. Otherwise we will use and disclose PII in agreement
          with the privacy policy in effect when the information was collected. In
          all cases, your continued use of our website, services, and products
          after any change constitutes acceptance of that change.
        </p>

        <h2>Questions about our privacy policy</h2>
        <p>
          If you have any questions about this privacy policy, email us at{" "}
          <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>.
        </p>

        <p className={styles.copy}>© {new Date().getFullYear()} {site.name}</p>
      </div>
    </main>
  );
}
