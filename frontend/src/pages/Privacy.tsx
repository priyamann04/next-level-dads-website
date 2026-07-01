const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              Effective Date: July 1, 2026 &nbsp;|&nbsp; Last Updated: July 1,
              2026
            </p>
          </div>

          <div className="space-y-10 text-base text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Introduction
              </h2>
              <p>
                At <strong className="text-foreground">Next Level Dads</strong>,
                we are committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, store, and protect your
                personal information when you use our website{' '}
                <a
                  href="https://nextleveldads.ca/"
                  className="text-primary hover:underline"
                >
                  https://nextleveldads.ca/
                </a>
                , web application [INSERT LINK], and related services
                (collectively, the "Service").
              </p>
              <p className="mt-3">
                This Privacy Policy applies to personal information collected
                through the Service. It does not apply to information collected
                offline or through third-party websites or services that are not
                operated by{' '}
                <strong className="text-foreground">Next Level Dads</strong>,
                even if they are linked from our website or web application.
              </p>
              <p className="mt-3">
                By accessing or using{' '}
                <strong className="text-foreground">Next Level Dads</strong>,
                you acknowledge that you have read and understood this Privacy
                Policy. Questions or requests may be sent to{' '}
                <a
                  href="mailto:info@nextleveldads.ca"
                  className="text-primary hover:underline"
                >
                  info@nextleveldads.ca
                </a>
                . <strong className="text-foreground">Next Level Dads</strong>{' '}
                is currently operating in Canada during an early-stage beta
                phase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Definitions
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Personal Data:</strong>{' '}
                  Any information relating to an identified or identifiable
                  person, including name, email, IP address, and online
                  identifiers.
                </li>
                <li>
                  <strong className="text-foreground">Processing:</strong> Any
                  operation on personal data, including collection, storage,
                  use, transfer, and deletion.
                </li>
                <li>
                  <strong className="text-foreground">Organization:</strong>{' '}
                  Next Level Dads Ltd., determining the purposes and means of
                  processing personal data on Next Level Dads.
                </li>
                <li>
                  <strong className="text-foreground">You / User:</strong> Any
                  individual accessing or using Next Level Dads.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Information We Collect
              </h2>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                1. Information You Provide Directly
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Contact form submissions: name, email address, and message
                  content
                </li>
                <li>
                  Account registration: name, email address, age, date of birth,
                  city, province, interests, children's ages/life stage,
                  bio/about section, and profile photo
                </li>
                <li>
                  Email address and preferences for newsletter or mailing list
                  subscriptions
                </li>
                <li>
                  Community and messaging content: posts, comments, forum
                  discussions, chat messages, reactions, connection requests,
                  and other content users submit through the platform
                </li>
                <li>Files, documents, or images you voluntarily upload</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                2. Automatically Collected Data
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  IP address, browser type and version, operating system, device
                  type, and approximate location
                </li>
                <li>
                  Pages and features accessed, time and date of visit, duration,
                  and referring URL
                </li>
                <li>Server logs, HTTP request headers and error logs</li>
                <li>
                  Cookie identifiers, session tokens, and similar tracking data
                  (see Cookies section)
                </li>
                <li>
                  Aggregated usage analytics collected through Google Analytics
                  4 or similar analytics services
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">
                3. Data from Third-Party Authentication
              </h3>
              <p>
                When you register or sign in using Google or other
                authentication providers, we receive limited profile data such
                as your name, email address, profile photo (if shared), and a
                unique account identifier as permitted by your settings. We
                never receive your third-party password.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We process personal data for the following purposes:
              </p>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Examples
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Legal Basis (GDPR)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Service Delivery
                      </td>
                      <td className="px-4 py-3">
                        Operating the website; responding to support requests
                      </td>
                      <td className="px-4 py-3">
                        Contract / Legitimate Interests
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Analytics & Improvement
                      </td>
                      <td className="px-4 py-3">
                        Understanding usage patterns; improving features
                      </td>
                      <td className="px-4 py-3">Legitimate Interests</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Email Marketing
                      </td>
                      <td className="px-4 py-3">
                        Newsletters, updates, and promotional content
                      </td>
                      <td className="px-4 py-3">Consent</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Security & Fraud Prevention
                      </td>
                      <td className="px-4 py-3">
                        Detecting malicious activity; protecting user accounts
                      </td>
                      <td className="px-4 py-3">Legitimate Interests</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Legal Compliance
                      </td>
                      <td className="px-4 py-3">
                        Meeting tax, regulatory, and court-ordered obligations
                      </td>
                      <td className="px-4 py-3">Legal Obligation</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Community Features
                      </td>
                      <td className="px-4 py-3">
                        Enabling messaging, forum discussions, connection
                        requests, event registrations, and other community
                        features
                      </td>
                      <td className="px-4 py-3">
                        Contract / Legitimate Interests
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Content Moderation
                      </td>
                      <td className="px-4 py-3">
                        Detecting harmful content, enforcing Community
                        Guidelines, investigating reports, and maintaining
                        moderation records
                      </td>
                      <td className="px-4 py-3">Legitimate Interests</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Account Management
                      </td>
                      <td className="px-4 py-3">
                        Creating and managing user accounts, authentication, and
                        profile information
                      </td>
                      <td className="px-4 py-3">Contract</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Cookies and Tracking Technologies
              </h2>
              <p>
                <strong className="text-foreground">Next Level Dads</strong>{' '}
                uses cookies, web beacons, and similar technologies. Cookies are
                small text files placed on your browser to help us deliver and
                improve our services. We use the following categories:
              </p>
              <div className="overflow-x-auto rounded-lg border border-border mt-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Category
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Purpose
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Examples
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Strictly Necessary
                      </td>
                      <td className="px-4 py-3">
                        Core functionality, security, session management. Cannot
                        be disabled.
                      </td>
                      <td className="px-4 py-3">
                        Session cookies, CSRF tokens, authentication tokens
                      </td>
                      <td className="px-4 py-3">Session</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Analytics / Performance
                      </td>
                      <td className="px-4 py-3">
                        Visitor behaviour data; site performance improvement.
                      </td>
                      <td className="px-4 py-3">
                        Google Analytics 4 (_ga, _gid, _gat)
                      </td>
                      <td className="px-4 py-3">Up to 2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                <strong className="text-foreground">Managing Cookies:</strong>{' '}
                You can control or delete cookies through your browser settings.
                Disabling strictly necessary cookies may impair website
                functionality. Opt-out tools: DAA Opt-Out, Your Online Choices
                (EU), Google Analytics Opt-Out.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Cookie Consent:</strong>{' '}
                Where required by applicable privacy laws, we will present a
                cookie consent banner or other notice regarding the use of
                cookies and similar technologies. Your preferences will be
                stored and honoured on subsequent visits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Analytics
              </h2>
              <p>
                We use{' '}
                <strong className="text-foreground">
                  Google Analytics 4 (GA4)
                </strong>{' '}
                to measure traffic and understand how users interact with Next
                Level Dads. Analytics information helps us improve our website
                and platform, identify issues, and better understand feature
                usage. Google Analytics is currently used on our website and may
                be expanded to additional platform features over time. Google
                Analytics may collect information such as device information,
                approximate location, pages visited, and usage events. We do not
                intentionally send private messages, payment information, or
                sensitive account information to Google Analytics.
              </p>
              <p className="mt-3">
                You may opt out of Google Analytics tracking at any time via the
                Google Analytics Opt-Out Browser Add-on.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Social Login and Third-Party Authentication
              </h2>
              <p>
                You may register or log in using Google or other authentication
                providers. We receive only the profile data you authorise
                (typically your name, email address, profile photo, and a unique
                account identifier). Authentication is managed by Supabase, and
                we do not receive or store your passwords. You may revoke access
                through the provider's security settings at any time. We are not
                responsible for the data practices of identity providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Email Communications and Newsletter
              </h2>
              <p>
                With your explicit consent, we may send newsletters, product
                updates, or promotional emails. You may opt out of receiving
                marketing communications at any time by replying to the email or
                contacting us at{' '}
                <a
                  href="mailto:info@nextleveldads.ca"
                  className="text-primary hover:underline"
                >
                  info@nextleveldads.ca
                </a>
                , or otherwise informing us that you no longer wish to receive
                marketing communications. We will make reasonable efforts to
                process opt-out requests promptly and maintain records of your
                communication preferences where appropriate. We comply with
                Canada's Anti-Spam Legislation (CASL). Marketing emails are sent
                only with the required consent and include an unsubscribe option
                where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                User-Uploaded Files and Content
              </h2>
              <p>
                Profile photos and other files you upload are stored in cloud
                storage provided by Supabase and may be accessible via link to
                anyone who obtains the URL. Uploads are handled exclusively
                through our backend services, which require authentication, and
                are not accepted directly from unauthenticated sources. We aim
                to delete uploaded content within a reasonable period following
                account closure unless retention is required for legal,
                security, or operational purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                User Communications and Community Features
              </h2>
              <p>
                Next Level Dads may provide community features that allow users
                to participate in discussions, create posts, comment on content,
                and communicate with other users. Content submitted through
                these features may be visible to other users based on the
                functionality of the platform.
              </p>
              <p className="mt-3">
                While private messages and community interactions are intended
                for their intended audience, Next Level Dads may review,
                preserve, or disclose content and communications when reasonably
                necessary to investigate reports, enforce our policies, comply
                with legal obligations, respond to safety concerns, or protect
                the rights, safety, and security of our users and platform.
              </p>
              <p className="mt-3">
                To help maintain a safe and respectful community, posts and
                other community content may be automatically reviewed using
                automated moderation tools to detect potentially harmful,
                abusive, or prohibited content. Content flagged by these systems
                may be temporarily restricted, removed, or reviewed further in
                accordance with our Community Guidelines. Moderation records may
                be retained where necessary to investigate reports, enforce our
                policies, comply with legal obligations, or protect the safety
                and security of our users and platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Third-Party Services and Integrations
              </h2>
              <p>
                We work with trusted third-party service providers who may
                process personal information on our behalf only to the extent
                necessary to provide our services. Where appropriate, these
                providers are contractually required to protect personal
                information and process it only in accordance with our
                instructions and applicable law. Categories of providers
                include:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-3">
                <li>
                  <strong className="text-foreground">
                    Authentication, database, and file storage:
                  </strong>{' '}
                  <a
                    href="https://supabase.com"
                    className="text-primary hover:underline"
                  >
                    Supabase
                  </a>{' '}
                  hosts our user database, manages authentication and credential
                  storage, stores uploaded files such as profile photos, and
                  handles transactional email delivery. Supabase processes data
                  in accordance with their Data Processing Agreement, available
                  at{' '}
                  <a
                    href="https://supabase.com/privacy"
                    className="text-primary hover:underline"
                  >
                    supabase.com/privacy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-foreground">Backend hosting:</strong>{' '}
                  <a
                    href="https://render.com"
                    className="text-primary hover:underline"
                  >
                    Render
                  </a>{' '}
                  hosts our backend application servers. Request data and
                  application logs may pass through Render's infrastructure.
                </li>
                <li>
                  <strong className="text-foreground">Frontend hosting:</strong>{' '}
                  <a
                    href="https://vercel.com"
                    className="text-primary hover:underline"
                  >
                    Vercel
                  </a>{' '}
                  hosts our website and frontend application. Vercel may process
                  visitor IP addresses and request metadata as part of content
                  delivery.
                </li>
                <li>
                  <strong className="text-foreground">
                    Real-time messaging infrastructure:
                  </strong>{' '}
                  <span className="text-primary">Redis</span> is used as a
                  publish/subscribe layer to deliver real-time chat events via
                  WebSocket connections. Message data passes through Redis
                  transiently and is not persisted there.
                </li>
                <li>
                  <strong className="text-foreground">Analytics:</strong>{' '}
                  <a
                    href="https://analytics.google.com"
                    className="text-primary hover:underline"
                  >
                    Google Analytics 4
                  </a>{' '}
                  (Google LLC) is used to measure website traffic and user
                  behaviour. Google may collect device information, approximate
                  location, pages visited, and usage events. Google's privacy
                  policy is available at{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    className="text-primary hover:underline"
                  >
                    policies.google.com/privacy
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                How We Share Your Information
              </h2>
              <p>
                We do not sell your personal information. Data is shared only in
                these limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">
                    Service Providers:
                  </strong>{' '}
                  Trusted third-party service providers who help us operate our
                  website, web application, and related services. They may
                  process personal information only as instructed by us and only
                  for the purposes of providing those services.
                </li>
                <li>
                  <strong className="text-foreground">
                    Legal Requirements:
                  </strong>{' '}
                  Where required by law, regulation, subpoena, or court order.
                  We notify you where legally permitted before disclosing.
                </li>
                <li>
                  <strong className="text-foreground">Safety:</strong> To
                  protect the rights, property, or safety of Next Level Dads,
                  our users, or the public.
                </li>
                <li>
                  <strong className="text-foreground">
                    Business Transfers:
                  </strong>{' '}
                  In a merger, acquisition, or asset sale, your data may
                  transfer. You will be notified via a prominent website notice
                  and, where feasible, by email.
                </li>
                <li>
                  <strong className="text-foreground">
                    With Your Consent:
                  </strong>{' '}
                  For any other purpose with your explicit prior consent.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  HTTPS/TLS 1.2+ encryption for data transmitted between your
                  device and our services
                </li>
                <li>
                  Passwords are never transmitted to or stored by Next Level
                  Dads directly. All credential management is handled by our
                  authentication provider (Supabase), which stores credentials
                  using industry-standard hashing. Our application receives only
                  authentication tokens, never raw passwords.
                </li>
                <li>
                  Role-based access controls limiting access to personal
                  information to authorized personnel
                </li>
                <li>
                  Appropriate administrative, technical, and physical safeguards
                  designed to protect personal information from unauthorized
                  access, disclosure, alteration, or destruction
                </li>
              </ul>
              <p className="mt-3">
                In the event of a personal data breach likely to result in risk
                to your rights, we will notify affected individuals and relevant
                supervisory authorities within the legally mandated timeframe
                (e.g. 72 hours under GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Data Retention
              </h2>
              <p className="mb-4">
                We retain personal data only as long as necessary to fulfil
                stated purposes or as required by law:
              </p>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Data Type
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Retention Period
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">
                        Reason
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Server access logs
                      </td>
                      <td className="px-4 py-3">90 days</td>
                      <td className="px-4 py-3">
                        Security monitoring and abuse prevention
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Analytics data
                      </td>
                      <td className="px-4 py-3">Up to 14 months</td>
                      <td className="px-4 py-3">
                        Trend analysis (auto-deleted by GA4)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Newsletter subscriptions
                      </td>
                      <td className="px-4 py-3">
                        Until unsubscribed + 30 days
                      </td>
                      <td className="px-4 py-3">
                        Suppression list maintenance
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Account data
                      </td>
                      <td className="px-4 py-3">
                        Account lifetime + 12 months post-deletion
                      </td>
                      <td className="px-4 py-3">
                        Dispute resolution and backups
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Uploaded files
                      </td>
                      <td className="px-4 py-3">
                        Duration of use + 90 days post-closure
                      </td>
                      <td className="px-4 py-3">Service delivery; backup</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Moderation records
                      </td>
                      <td className="px-4 py-3">
                        As long as necessary for safety, enforcement, legal, or
                        audit purposes
                      </td>
                      <td className="px-4 py-3">
                        Safety audit trail, repeat-offence detection, legal
                        defence
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Contact form submissions
                      </td>
                      <td className="px-4 py-3">3 years</td>
                      <td className="px-4 py-3">
                        Correspondence records and dispute resolution
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Community and messages
                      </td>
                      <td className="px-4 py-3">
                        Account lifetime. Following account deletion, messages
                        may be retained in anonymized form where necessary to
                        preserve conversations or for legal, safety, or
                        moderation purposes.
                      </td>
                      <td className="px-4 py-3">
                        Service delivery, community integrity, user safety,
                        dispute resolution
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-foreground">
                        Connection data
                      </td>
                      <td className="px-4 py-3">
                        Account lifetime + 12 months post-deletion
                      </td>
                      <td className="px-4 py-3">
                        Service delivery, community features, dispute resolution
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Account Deletion
              </h2>
              <p>
                You may delete your account at any time through your account
                settings or by contacting us at{' '}
                <a
                  href="mailto:info@nextleveldads.ca"
                  className="text-primary hover:underline"
                >
                  info@nextleveldads.ca
                </a>
                . Upon account deletion, we will delete or anonymize your
                personal information in accordance with this Privacy Policy and
                applicable law. Messages you have sent may be retained in an
                anonymized form to preserve conversations for other users and
                maintain the integrity of the Service. Once anonymized, these
                messages are no longer associated with your identity. We may
                also retain certain information where required or permitted by
                applicable law, including for legal, security, fraud prevention,
                or dispute resolution purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Minimum Age
              </h2>
              <p>
                Next Level Dads is intended for individuals who are 18 years of
                age or older. We do not knowingly collect personal information
                from individuals under the age of 18. If we become aware that an
                account has been created by someone under the age of 18, we may
                suspend or delete the account and any associated personal
                information, subject to applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Your Privacy Rights
              </h2>
              <p>
                Depending on your location, you may have rights to access,
                correct, delete, restrict, or transfer your personal data. You
                may exercise these rights by contacting us at{' '}
                <a
                  href="mailto:info@nextleveldads.ca"
                  className="text-primary hover:underline"
                >
                  info@nextleveldads.ca
                </a>
                . We will respond within the timeframe required by applicable
                law. You will never be penalised or discriminated against for
                exercising your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Canadian Privacy Rights (PIPEDA)
              </h2>
              <p>
                If you are a Canadian resident, your privacy rights are governed
                by the Personal Information Protection and Electronic Documents
                Act (PIPEDA), S.C. 2000, c. 5, and applicable provincial privacy
                legislation. Under PIPEDA, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Access personal information we hold about you and how it is
                  used
                </li>
                <li>Correct inaccurate or incomplete personal information</li>
                <li>
                  Withdraw consent to collection or use at any time, subject to
                  legal or contractual restrictions (with reasonable notice)
                </li>
                <li>
                  File a complaint with the Office of the Privacy Commissioner
                  of Canada (OPC) at priv.gc.ca if you believe we have not
                  handled your personal information in accordance with PIPEDA
                </li>
              </ul>
              <p className="mt-3">
                We collect, use, and disclose personal information only with
                your knowledge and consent (express or implied depending on
                sensitivity), and only for purposes that a reasonable person
                would consider appropriate in the circumstances. To exercise
                your rights, contact us at{' '}
                <a
                  href="mailto:info@nextleveldads.ca"
                  className="text-primary hover:underline"
                >
                  info@nextleveldads.ca
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                GDPR — European Union Data Protection Rights
              </h2>
              <p>
                If you are in the EU or EEA, the General Data Protection
                Regulation (EU) 2016/679 grants you these rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">
                    Right of Access (Art. 15):
                  </strong>{' '}
                  Request a copy of personal data we hold and how it is
                  processed.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Rectification (Art. 16):
                  </strong>{' '}
                  Request correction of inaccurate or incomplete data without
                  undue delay.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Erasure / "Right to be Forgotten" (Art. 17):
                  </strong>{' '}
                  Request deletion of your data where no longer necessary,
                  consent is withdrawn, or processing is unlawful, subject to
                  legal retention obligations.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Restriction of Processing (Art. 18):
                  </strong>{' '}
                  Request we temporarily halt processing in certain
                  circumstances.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Data Portability (Art. 20):
                  </strong>{' '}
                  Receive your data in a structured, machine-readable format
                  (e.g. CSV/JSON) and transfer it to another controller where
                  technically feasible.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Object (Art. 21):
                  </strong>{' '}
                  Object to processing based on legitimate interests or for
                  direct marketing.
                </li>
                <li>
                  <strong className="text-foreground">
                    Rights re: Automated Decisions (Art. 22):
                  </strong>{' '}
                  Some moderation decisions on community content may involve
                  automated tools to help identify content that may violate our
                  Community Guidelines. Where required by applicable law, you
                  may request human review of decisions that produce legal or
                  similarly significant effects.
                </li>
                <li>
                  <strong className="text-foreground">
                    Right to Withdraw Consent (Art. 7(3)):
                  </strong>{' '}
                  Withdraw consent at any time where processing relies on it,
                  without affecting the lawfulness of prior processing.
                </li>
              </ul>
              <p className="mt-3">
                <strong className="text-foreground">
                  Legal Bases for Processing:
                </strong>{' '}
                Art. 6(1)(a) Consent; Art. 6(1)(b) Contract; Art. 6(1)(c) Legal
                obligation; Art. 6(1)(f) Legitimate interests. For special
                category data, we rely on Art. 9(2)(a) explicit consent or other
                applicable bases.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">
                  International Transfers:
                </strong>{' '}
                Transfers outside the EEA are protected by EU Standard
                Contractual Clauses (SCCs, Commission Decision 2021/914),
                adequacy decisions, or other lawful Chapter V GDPR mechanisms.
              </p>
              <p className="mt-3">
                Privacy-related inquiries may be directed to{' '}
                <a
                  href="mailto:info@nextleveldads.ca"
                  className="text-primary hover:underline"
                >
                  info@nextleveldads.ca
                </a>
                . We will respond to GDPR requests within 30 days (extendable by
                2 months for complex cases). You may also lodge a complaint with
                your EU Member State's supervisory authority (DPA).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Links to External Websites
              </h2>
              <p>
                We recommend reviewing the privacy policy of any third-party
                site you visit.{' '}
                <strong className="text-foreground">Next Level Dads</strong> may
                contain links to third-party websites. Once you leave our site,
                this Privacy Policy no longer applies. We have no control over
                and accept no responsibility for external sites' content,
                privacy policies, or practices. We encourage you to review the
                privacy policies of any third-party websites you visit before
                providing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Do Not Track (DNT) Signals
              </h2>
              <p>
                Some browsers transmit "Do Not Track" signals to websites. There
                is currently no universally accepted standard for how websites
                must respond to DNT signals. At this time,{' '}
                <strong className="text-foreground">Next Level Dads</strong>{' '}
                does not alter its data collection practices in response to DNT
                browser signals. We will review this position as industry
                standards evolve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. When material
                changes are made, we will update the "Last Updated" date at the
                top and post a prominent notice on our website, and where
                feasible notify subscribers via email. Your continued use of
                Next Level Dads after any modification constitutes acceptance of
                the revised policy. We encourage you to review this page
                periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Contact Us
              </h2>
              <p>
                For questions, data subject requests, or privacy complaints,
                please contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong className="text-foreground">Website:</strong>{' '}
                  <a
                    href="https://nextleveldads.ca/"
                    className="text-primary hover:underline"
                  >
                    https://nextleveldads.ca/
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Email:</strong>{' '}
                  <a
                    href="mailto:info@nextleveldads.ca"
                    className="text-primary hover:underline"
                  >
                    info@nextleveldads.ca
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Organization:</strong>{' '}
                  Next Level Dads Ltd.
                </li>
              </ul>
              <p className="mt-3">
                We aim to acknowledge general enquiries within 5 business days
                and will respond to formal privacy requests within the
                timeframes required by applicable law.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy
