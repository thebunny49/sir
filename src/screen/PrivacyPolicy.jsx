import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ico2.png'
import social1 from '../assets/social1.png'
import ceo from '../assets/ceo.png'
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'

const privacy = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
   <>

<div className="edumain">

  <div className="navbar" >
    <Link className="logo" href="#"><img src={logo} style={{width: 60, height: 60,}} alt="" /></Link>
      <button className="toggle-button" onClick={toggleNav}>
        ☰
      </button>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
      <div className='alink'>
      <Link to='/login'><button className="btn btn-warning">Login</button></Link>
                <Link to="/register"><button className="btn btn-warning">SignUp</button></Link>
      </div>
      </div>
    </div>
    <div className="container" id='top'>
            <div className="row">
                <div className="col-md-12">
                    <div className="content" style={{padding:"50px 0px"}}>
                        <h2 className="title">Privacy Policy</h2>
                    </div>
                </div>
            </div>
        </div>
    <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about__content">
                        <div className="block-text">
                            <h3 className="sub-title">Introduction</h3>
                            <p className="text text-dark">SIR Global Academy respects your privacy and is committed to
                                protecting your personal data. This
                                privacy policy will inform you as to how we look after your personal data when you visit
                                our
                                website (regardless of where you visit it from) and tell you about your privacy rights
                                and how
                                the law protects you.</p>
                            <p className="text text-dark">Please read the following carefully to understand our views and
                                practices regarding your personal
                                data and how we will treat it. Please also use the Glossary to understand the meaning of
                                some
                                terms used in this privacy policy.</p>
                            <p className="text text-dark">We may change this policy from time to time by updating this page.
                                You should check this page
                                from time to time to ensure that you are happy with any changes.</p>
                            <h3 className="sub-title">1. Important information and who we are Purpose of this privacy
                                policy</h3>
                            <p className="text text-dark">This privacy policy aims to give you information on how SIR Global Academy
                                Academy collects and processes
                                your personal data through your use of this website, including any data you may provide
                                through
                                this website when you sign up to our newsletter OR purchase a product or service OR take
                                part in
                                a competition OR over the telephone OR written communication.</p>
                            <p className="text text-dark">This website is not intended for children, and we do not knowingly
                                collect data relating to
                                children.</p>
                            <p className="text text-dark">It is important that you read this privacy policy together with
                                any other policy or fair
                                processing policy we may provide on specific occasions when we are collecting or
                                processing
                                personal data about you so that you are fully aware of how and why we are using your
                                data. This
                                privacy policy supplements other notices and privacy policies and is not intended to
                                override
                                them.</p>
                            <p className="text text-dark">Contact details</p>
                            <p className="text text-dark">If you have any questions about this privacy policy or our privacy
                                practices, please contact us
                                in the following ways:</p>
                           
                            <p className="text text-dark">We keep our privacy policy under regular review. This version was
                                last updated on 01.10.2022.
                                Historic versions can be obtained by contacting us.</p>
                            <p className="text text-dark">It is important that the personal data we hold about you is
                                accurate and current. Please keep us
                                informed if your personal data changes during your relationship with us.</p>
                            <p className="text text-dark">Third-party links</p>
                            <p className="text text-dark">This website may include links to third-party websites, plug-ins
                                and applications. Clicking on
                                those links or enabling those connections may allow third parties to collect or share
                                data about
                                you. We do not control these third-party websites and are not responsible for their
                                privacy
                                statements. When you leave our website, we encourage you to read the privacy policy of
                                every
                                website you visit.</p>
                            <h3 className="sub-title">2. The data we collect about you</h3>
                            <p className="text text-dark">Personal data, or personal information, means any information
                                about an individual from which that
                                person can be identified. It does not include data where the identity has been removed
                                (anonymous data).</p>
                            <p className="text text-dark">We may collect, use, store and transfer different kinds of
                                personal data about you which we have
                                grouped together but not limited to as follows:</p>
                            <ul className="text-dark my-2">
                                <li> Identity Data includes first name, maiden name, last name, username or similar
                                    identifier,
                                    marital status, title.
                                </li>
                                <li> date of birth and gender.</li>
                                <li> Contact Data includes billing address, delivery address, email address and
                                    telephone
                                    numbers.
                                </li>
                                <li> Financial Data includes bank account and payment card details.</li>
                                <li> Transaction Data includes details about payments to and from you and other details
                                    of
                                    products and services you have purchased from us.
                                </li>
                                <li> Technical Data includes internet protocol (IP) address, your login data, browser
                                    type and
                                    version, time zone setting and location, browser plug-in types and versions,
                                    operating
                                    system and platform, and other technology on the devices you use to access this
                                    website.
                                </li>
                                <li> Profile Data includes your username and password, purchases or orders made by you,
                                    your
                                    interests, preferences, feedback and survey responses.
                                </li>
                                <li> Usage Data includes information about how you use our website, products and
                                    services.
                                </li>
                                <li> Marketing and Communications Data includes your preferences in receiving marketing
                                    from us
                                    and our third parties and your communication preferences.
                                </li>
                            </ul>
                            <p className="text text-dark">We also collect, use and share Aggregated Data such as statistical
                                or demographic data for any
                                purpose.</p>
                            <p className="text text-dark">Aggregated Data could be derived from your personal data but is
                                not considered personal data in
                                law as this data will not directly or indirectly reveal your identity. For example, we
                                may
                                aggregate your Usage Data to calculate the percentage of users accessing a specific
                                website
                                feature. However, if we combine or connect Aggregated Data with your personal data so
                                that it
                                can directly or indirectly identify you, we treat the combined data as personal data
                                which will
                                be used in accordance with this privacy policy.</p>
                            <p className="text text-dark">If you fail to provide personal data</p>
                            <p className="text text-dark">Where we need to collect personal data by law, or under the terms
                                of a contract we have with you,
                                and you fail to provide that data when requested, we may not be able to perform the
                                contract we
                                have or are trying to enter into with you (for example, to provide you with goods or
                                services).
                                In this case, we may have to cancel a product or service you have with us but we will
                                notify you
                                if this is the case at the time.</p>
                            <h3 className="sub-title">3. How is your personal data collected</h3>
                            <p className="text text-dark">We capture, process and retain personal data from you and the
                                devices you use when you navigate
                                through our website by registering an account, entering into a transaction or otherwise
                                interacting with us.</p>
                            <p className="text text-dark">We use different methods to collect data from and about you
                                including through:</p>
                            <p className="text text-dark">Direct interactions. You may give us your Identity, Contact and
                                Financial Data by filling in
                                forms or by corresponding with us by post, phone, email or otherwise. This includes
                                personal
                                data you provide when you:</p>
                            <ul className="text-dark my-2">
                                <li> apply for our products or services;</li>
                                <li> create an account on our website;</li>
                                <li> subscribe to our services or publications;</li>
                                <li> request marketing to be sent to you;</li>
                                <li> enter a competition, promotion or survey; or</li>
                                <li> give us feedback or contact us.</li>
                            </ul>
                            <p className="text text-dark">Automated technologies or interactions. As you interact with our
                                website, we will automatically
                                collect Technical Data about your equipment, browsing actions and patterns. We collect
                                this
                                personal data by using cookies, server logs and other similar technologies. This website
                                uses
                                cookies to better understand the users’ experience while visiting the website. Cookies
                                are small
                                files saved to the user’s computer’s hard drive that track, save and store information
                                about the
                                user’s interactions and usage of the website. This allows the website, through its
                                server, to
                                provide the users with a tailored experience within this website. We may also receive
                                Technical
                                Data about you if you visit other websites employing our cookies.</p>
                            <p className="text text-dark">Third parties or publicly available sources. We will receive
                                personal data about you from various
                                third parties and public sources as set out below:</p>
                            <p className="text text-dark">Technical Data from the following parties:</p>
                            <p className="text text-dark"></p>
                            <p className="text text-dark">a. analytics providers such as Google based outside the EEA;</p>
                            <p className="text text-dark">b. advertising networks based inside OR outside the EEA;</p>
                            <p className="text text-dark">c. search information providers based inside OR outside the
                                EEA;</p>
                            <p className="text text-dark">d. financial services and logistics providers;</p>
                            <p className="text text-dark">e. credit reference agencies, fraud prevention agencies, business
                                directories and other
                                commercially and publicly available sources.</p>
                            <p className="text text-dark"></p>
                            <ul className="text-dark my-2">
                                <li> Contact, Financial and Transaction Data from providers of technical, payment and
                                    delivery
                                    services based inside OR outside the EEA.
                                </li>
                                <li> Identity and Contact Data from data brokers or aggregators based inside OR outside
                                    the
                                    EEA.
                                </li>
                                <li> Identity and Contact Data from publicly available sources such as Companies House
                                    and the
                                    Electoral Register based inside the EEA.
                                </li>
                            </ul>
                            <h3 className="sub-title">4. How we use your personal data</h3>
                            <p className="text text-dark">We will only use your personal data when the law allows us to.
                                Most commonly, we will use your
                                personal data in the following circumstances:</p>
                            <ul className="text-dark my-2">
                                <li> Where we need to perform the contract, we are about to enter into or have entered
                                    into
                                    with
                                    you.
                                </li>
                                <li> Where it is necessary for our legitimate interests (or those of a third party) and
                                    your
                                    interests and fundamental rights do not override those interests.
                                </li>
                                <li> Where we need to comply with a legal obligation.</li>
                            </ul>
                            <p className="text text-dark">Please read the Glossary to find out more about the types of
                                lawful basis that we will rely on to
                                process your personal data.</p>
                            <p className="text text-dark">We may contact you by e-mail, phone call or SMS in relation to
                                managing your account or the
                                performance of contract with you including but not limited to:</p>
                            <ul className="text-dark my-2">
                                <li> Setting up and providing access to your trading account;</li>
                                <li> Delivering our products and services;</li>
                                <li> Facilitating your withdrawals, deposits and funds transfer;</li>
                                <li> Responding to your queries; or</li>
                                <li> Giving you updates in relation to your account or order.</li>
                            </ul>
                            <p className="text text-dark">Generally, we do not rely on consent as a legal basis for
                                processing your personal data although
                                we will get your consent before sending third party direct marketing communications to
                                you via
                                email or text message. You have the right to withdraw consent to marketing at any time
                                by
                                contacting us.</p>
                            <p className="text text-dark">Purposes for which we will use your personal data:</p>
                            <p className="text text-dark">We have set out below, in a table format, a description of all the
                                ways we plan to use your
                                personal data, and which of the legal bases we rely on to do so. We have also identified
                                what
                                our legitimate interests are where appropriate.</p>
                            <p className="text text-dark">Note that we may process your personal data for more than one
                                lawful ground depending on the
                                specific purpose for which we are using your data. Please contact us if you need details
                                about
                                the specific legal ground, we are relying on to process your personal data where more
                                than one
                                ground has been set out in the table below.</p>
                            <p className="text text-dark">Purpose/Activity</p>
                            <p className="text text-dark">Type of data</p>
                            <p className="text text-dark">Lawful basis for processing including basis of legitimate interest
                                To register you as a new
                                customer</p>
                            <p className="text text-dark">(a) Identity</p>
                            <p className="text text-dark">(b) Contact</p>
                            <p className="text text-dark">(c) National Identifier</p>
                            <p className="text text-dark">(d) Socio-demographic</p>
                            <p className="text text-dark">(e) Transaction</p>
                            <p className="text text-dark">(f) Financial</p>
                            <p className="text text-dark">Performance of a contract with you To process and deliver your
                                order including:</p>
                            <p className="text text-dark">(a) Manage payments, fees and charges</p>
                            <p className="text text-dark">(b) Collect and recover money owed to us</p>
                            <p className="text text-dark">(a) Identity</p>
                            <p className="text text-dark">(b) Contact</p>
                            <p className="text text-dark">(c) Financial</p>
                            <p className="text text-dark">(d) Transaction</p>
                            <p className="text text-dark">(e) Marketing and Communications</p>
                            <p className="text text-dark">(f) Location</p>
                            <p className="text text-dark">(g) Usage Data</p>
                            <p className="text text-dark">(a) Performance of a contract with you</p>
                            <p className="text text-dark">(b) Necessary for our legitimate interests (to recover debts due
                                to us) To manage our
                                relationship with you which will include:</p>
                            <p className="text text-dark">(a) Notifying you about changes to our terms or privacy policy</p>
                            <p className="text text-dark">(b) Asking you to leave a review or take a survey</p>
                            <p className="text text-dark">(a) Identity</p>
                            <p className="text text-dark">(b) Contact</p>
                            <p className="text text-dark">(c) Profile</p>
                            <p className="text text-dark">(d) Marketing and Communications</p>
                            <p className="text text-dark">(a) Performance of a contract with you</p>
                            <p className="text text-dark">(b) Necessary to comply with a legal obligation</p>
                            <p className="text text-dark">(c) Necessary for our legitimate interests (to keep our records
                                updated and to study how
                                customers use our products/services)</p>
                            <p className="text text-dark">To enable you to partake in a prize draw, competition or complete
                                a survey</p>
                            <p className="text text-dark">(a) Identity</p>
                            <p className="text text-dark">(b) Contact</p>
                            <p className="text text-dark">(c) Profile</p>
                            <p className="text text-dark">(a) Performance of a contract with you</p>
                            <p className="text text-dark">(b) Necessary for our legitimate interests (to study how customers
                                use our products/services, to
                                develop them</p>
                            <p className="text text-dark">and</p>
                            <p className="text text-dark">(d) Usage</p>
                            <p className="text text-dark">(e) Marketing and Communications grow our business)</p>
                            <p className="text text-dark">To administer and protect our business and this website (including
                                troubleshooting, data
                                analysis, testing, system maintenance, support, reporting and hosting of data)</p>
                            <p className="text text-dark">(a) Identity</p>
                            <p className="text text-dark">(b) Contact</p>
                            <p className="text text-dark">(c) Technical</p>
                            <p className="text text-dark">(a) Necessary for our legitimate interests (for running our
                                business, provision of administration
                                and IT services, network security, to prevent fraud and in the context of a business
                                reorganisation or restructuring exercise)</p>
                            <p className="text text-dark">(b) Necessary to comply with a legal obligation</p>
                            <p className="text text-dark">To deliver relevant website content and advertisements to you and
                                measure or understand the
                                effectiveness of the advertising we serve to you</p>
                            <p className="text text-dark">(a) Identity</p>
                            <p className="text text-dark">(b) Contact</p>
                            <p className="text text-dark">(c) Profile</p>
                            <p className="text text-dark">(d) Usage</p>
                            <p className="text text-dark">(e) Marketing and Communications</p>
                            <p className="text text-dark">(f) Technical</p>
                            <p className="text text-dark">Necessary for our legitimate interests (to study how customers use
                                our products/services, to
                                develop them, to grow our business and to inform our marketing strategy)</p>
                            <p className="text text-dark">To use data analytics to improve our website, products/services,
                                marketing, customer
                                relationships and experiences</p>
                            <p className="text text-dark">(a) Technical</p>
                            <p className="text text-dark">(b) Usage</p>
                            <p className="text text-dark">Necessary for our legitimate interests (to define types of
                                customers for our products and
                                services, to keep our website updated and relevant, to develop our business and to
                                inform our
                                marketing strategy) To make suggestions and recommendations to you about goods or
                                services that
                                may be of interest to you</p>
                            <p className="text text-dark">(a) Identity</p>
                            <p className="text text-dark">(b) Contact</p>
                            <p className="text text-dark">(c) Technical</p>
                            <p className="text text-dark">(d) Usage</p>
                            <p className="text text-dark">(e) Profile</p>
                            <p className="text text-dark">(f) Marketing and Communications</p>
                            <p className="text text-dark">Necessary for our legitimate interests (to develop our
                                products/services and grow our business)
                                Marketing</p>
                            <p className="text text-dark">We strive to provide you with choices regarding certain personal
                                data uses, particularly around
                                marketing and advertising.</p>
                            <p className="text text-dark">Promotional offers from us</p>
                            <p className="text text-dark">We may use your Identity, Contact, Technical, Usage and Profile
                                Data to form a view on what we
                                think you may want or need, or what may be of interest to you. This is how we decide
                                which
                                products, services and offers may be relevant for you (we call this marketing).</p>
                            <p className="text text-dark">You will receive marketing communications from us if you have
                                requested information from us or
                                purchased goods or services from us and you have not opted out of receiving that
                                marketing.</p>
                            <p className="text text-dark">Third-party marketing</p>
                            <p className="text text-dark">We will get your express opt-in consent before we share your
                                personal data with any third party
                                for marketing purposes.</p>
                            <p className="text text-dark">Opting out</p>
                            <p className="text text-dark">You can ask us or third parties to stop sending you marketing
                                messages at any time by logging
                                into the website and checking or unchecking relevant boxes to adjust your marketing
                                preferences
                                OR by following the opt-out links on any marketing message sent to you OR by contacting
                                us at
                                any time.</p>
                            <p className="text text-dark">Where you opt out of receiving these marketing messages, this will
                                not apply to personal data
                                provided to us as a result of a product/service purchase, warranty registration,
                                product/service
                                experience or other transactions.</p>
                            <p className="text text-dark">The right to object to profiling</p>
                            <p className="text text-dark">You have the right to object to how your personal data is
                                processed including your right to
                                object to profiling as outlined in this privacy policy. Although we see profiling as a
                                beneficial service allowing you to have easier and quicker access to products, services
                                and
                                offers tailored specifically to your interests, we respect that you may not feel the
                                same way
                                and understand if you decided to opt out.</p>
                            <p className="text text-dark">Cookies</p>
                            <p className="text text-dark">You can set your browser to refuse all or some browser cookies, or
                                to alert you when websites set
                                or access cookies. If you disable or refuse cookies, please note that some parts of this
                                website
                                may become inaccessible or not function properly.</p>
                            <p className="text text-dark">Change of purpose</p>
                            <p className="text text-dark">We will only use your personal data for the purposes for which we
                                collected it, unless we
                                reasonably consider that we need to use it for another reason and that reason is
                                compatible with
                                the original</p>
                            <p className="text text-dark">purpose. If you wish to get an explanation as to how the
                                processing for the new purpose is
                                compatible with the original purpose, please contact us.</p>
                            <p className="text text-dark">Please note that we may process your personal data without your
                                knowledge or consent, in
                                compliance with the above rules, where this is required or permitted by law.</p>
                            <h3 className="sub-title">5. Disclosures of your personal data</h3>
                            <p className="text text-dark">We may share your personal data with the parties set out below for
                                the purposes set out in the
                                table above.</p>
                            <ul className="text-dark my-2">
                                <li> Internal Third Parties as set out in the Glossary.</li>
                                <li> External Third Parties as set out in the Glossary.</li>
                                <li> Third parties to whom we may choose to sell, transfer or merge parts of our
                                    business
                                    or our
                                    assets.
                                </li>
                            </ul>
                            <p className="text text-dark">Alternatively, we may seek to acquire other businesses or merge
                                with them. If a change happens to
                                our business, then the new owners may use your personal data in the same way as set out
                                in this
                                privacy policy.</p>
                            <p className="text text-dark">We require all third parties to respect the security of your
                                personal data and to treat it in
                                accordance with the law. We do not allow our third-party service providers to use your
                                personal
                                data for their own purposes and only permit them to process your personal data for
                                specified
                                purposes and in accordance with our instructions.</p>
                            <h3 className="sub-title">6. International transfers</h3>
                            <p className="text text-dark">We share your personal data within the Corporation and with
                                suppliers providing goods or services
                                requested by you. This may involve transferring your data outside the European Economic
                                Area
                                (EEA).</p>
                            <p className="text text-dark">We ensure your personal data is protected by requiring all our
                                corporation companies to follow
                                the same rules when processing your personal data. These rules are called “binding
                                corporate
                                rules”.</p>
                            <p className="text text-dark">Many of our suppliers are based outside the EEA so their
                                processing of your personal data will
                                involve a transfer of data outside the EEA.</p>
                            <p className="text text-dark">Whenever we transfer your personal data out of the EEA, we ensure
                                a similar degree of protection
                                is afforded to it by ensuring at least one of the following safeguards is
                                implemented:</p>
                            <ul className="text-dark my-2">
                                <li> We will only transfer your personal data to countries that have been deemed to
                                    provide an
                                    adequate level of protection for personal data by the European Commission.
                                </li>
                                <li> Where we use certain service providers, we may use specific contracts approved by
                                    the
                                    European Commission which give personal data the same protection it has in Europe.
                                </li>
                            </ul>
                            <p className="text text-dark">Please contact us if you want further information on the specific
                                mechanism used by us when
                                transferring your personal data out of the EEA.</p>
                            <h3 className="sub-title">7. Data security</h3>
                            <p className="text text-dark">We have put in place appropriate security measures to prevent your
                                personal data from being
                                accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In
                                addition,
                                we limit access to your personal data to those employees, agents, contractors and other
                                third
                                parties who</p>
                            <p className="text text-dark">have a business need to know. They will only process your personal
                                data on our instructions, and
                                they are subject to a duty of confidentiality.</p>
                            <p className="text text-dark">We have put in place procedures to deal with any suspected
                                personal data breach and will notify
                                you and any applicable regulator of a breach where we are legally required to do so.</p>
                            <p className="text text-dark">We use encrypted transmission links whenever we can.</p>
                            <p className="text text-dark">We use safeguards such as firewalls, authentication systems, and
                                access control mechanisms to
                                control unauthorised access to systems and data.</p>
                            <p className="text text-dark">We regularly review our information collection, storage and
                                processing practices, including
                                physical security measures, to guard against unauthorised access to systems.</p>
                            <p className="text text-dark">We restrict access to personal information to our employees,
                                contractors and agents who need to
                                know that information in order to process it for us and who are subject to strict
                                contractual
                                confidentiality obligations.</p>
                            <p className="text text-dark">If you are aged 18 or under you are not allowed to provide us with
                                your personal data and should
                                not use our website and services.</p>
                            <h3 className="sub-title">8. Data retention</h3>
                            <p className="text text-dark">How long will you use my personal data for?</p>
                            <p className="text text-dark">We will only retain your personal data for as long as reasonably
                                necessary to fulfil the purposes
                                we collected it for, including for the purposes of satisfying any legal, regulatory,
                                tax,
                                accounting or reporting requirements. We may retain your personal data for a longer
                                period in
                                the event of a complaint or if we reasonably believe there is a prospect of litigation
                                in
                                respect to our relationship with you.</p>
                            <p className="text text-dark">To determine the appropriate retention period for personal data,
                                we consider the amount, nature
                                and sensitivity of the personal data, the potential risk of harm from unauthorised use
                                or
                                disclosure of your personal data, the purposes for which we process your personal data
                                and
                                whether we can achieve those purposes through other means, and the applicable legal,
                                regulatory,
                                tax, accounting or other requirements.</p>
                            <p className="text text-dark">By law we have to keep basic information about our customers
                                (including Contact, Identity,
                                Financial and Transaction Data) for six years after they cease being customers for tax
                                purposes.</p>
                            <p className="text text-dark">In some circumstances you can ask us to delete your data: see your
                                legal rights below for further
                                information.</p>
                            <p className="text text-dark">In some circumstances we will anonymise your personal data (so
                                that it can no longer be
                                associated with you) for research or statistical purposes, in which case we may use this
                                information indefinitely without further notice to you.</p>
                            <h3 className="sub-title">9. Your legal rights</h3>
                            <p className="text text-dark">Under certain circumstances, you have rights under data protection
                                laws in relation to your
                                personal data.</p>
                            <ul className="text-dark my-2">
                                <li> Request access to your personal data.</li>
                                <li> Request correction of your personal data.</li>
                                <li> Request erasure of your personal data.</li>
                                <li> Object to processing of your personal data.</li>
                                <li> Request restriction of processing your personal data.</li>
                                <li> Request transfer of your personal data.</li>
                                <li> Right to withdraw consent.</li>
                            </ul>
                            <p className="text text-dark">If you wish to exercise any of the rights set out above, please
                                contact us. No fee usually
                                required</p>
                            <p className="text text-dark">You will not have to pay a fee to access your personal data (or to
                                exercise any of the other
                                rights). However, we may charge a reasonable fee if your request is clearly unfounded,
                                repetitive, or excessive. Alternatively, we could refuse to comply with your request in
                                these
                                circumstances.</p>
                            <p className="text text-dark">What we may need from you</p>
                            <p className="text text-dark">We may need to request specific information from you to help us
                                confirm your identity and ensure
                                your right to access your personal data (or to exercise any of your other rights). This
                                is a
                                security measure to ensure that personal data is not disclosed to any person who has no
                                right to
                                receive it. We may also contact you to ask you for further information in relation to
                                your
                                request to speed up our response.</p>
                            <p className="text text-dark">Time limit to respond</p>
                            <p className="text text-dark">We try to respond to all legitimate requests within one month.
                                Occasionally it could take us
                                longer than a month if your request is particularly complex or you have made several
                                requests.
                                In this case, we will notify you and keep you updated.</p>
                            <h3 className="sub-title">10. Glossary LAWFUL BASIS</h3>
                            <p className="text text-dark">Legitimate Interest means the interest of our business in
                                conducting and managing our business to
                                enable us to give you the best service/product and the best and most secure experience.
                                We make
                                sure we consider and balance any potential impact on you (both positive and negative)
                                and your
                                rights before we process your personal data for our legitimate interests. We do not use
                                your
                                personal data for activities where our interests are overridden by the impact on you
                                (unless we
                                have your consent or are otherwise required or permitted to by law). You can obtain
                                further
                                information about how we assess our legitimate interests against any potential impact on
                                you in
                                respect of specific activities by contacting us.</p>
                            <p className="text text-dark">Performance of Contract means processing your data where it is
                                necessary for the performance of a
                                contract to which you are a party or to take steps at your request before entering into
                                such a
                                contract.</p>
                            <p className="text text-dark">Comply with a legal obligation means processing your personal data
                                where it is necessary for
                                compliance with a legal obligation that we are subject to.</p>
                            <p className="text text-dark">THIRD PARTIES</p>
                            <ul className="text-dark my-2">
                                <li> Service providers acting as processors who provide IT and system administration
                                    services.
                                </li>
                                <li> Professional advisers acting as processors or joint controllers including lawyers,
                                    bankers,
                                    auditors and insurers based in who provide consultancy, banking, legal, insurance
                                    and
                                    accounting
                                    services.
                                </li>
                                <li> HM Revenue &amp; Customs, Financial Conduct Authority, Prudential Regulation
                                    Authority,
                                    Information
                                    Commissioner’s Office, other regulators and other authorities acting as processors
                                    or joint
                                    controllers based in the United Kingdom who require reporting of processing
                                    activities in
                                    certain circumstances.
                                </li>
                                <li> Fraud prevention agencies that provide databases and services, such as CIFAS,
                                    National
                                    Hunter,
                                    SIRA and ENI, to detect or prevent fraud.
                                </li>
                                <li> Law enforcement or government agencies.</li>
                                <li> Credit reference agencies. YOUR LEGAL RIGHTS</li>
                            </ul>
                            <p className="text text-dark">You have the right to:</p>
                            <p className="text text-dark">Request access to your personal data (commonly known as a “data
                                subject access request”). This
                                enables you to receive a copy of the personal data we hold about you and to check that
                                we are
                                lawfully processing it.</p>
                            <p className="text text-dark">Request correction of the personal data that we hold about you.
                                This enables you to have any
                                incomplete or inaccurate data we hold about you corrected, though we may need to verify
                                the
                                accuracy of the new data you provide to us.</p>
                            <p className="text text-dark">Request erasure of your personal data. This enables you to ask us
                                to delete or remove personal
                                data where there is no good reason for us continuing to process it. You also have the
                                right to
                                ask us to delete or remove your personal data where you have successfully exercised your
                                right
                                to object to processing (see below), where we may have processed your information
                                unlawfully or
                                where we are required to erase your personal data to comply with local law. Note,
                                however, that
                                we may not always be able to comply with your request of erasure for specific legal
                                reasons
                                which will be notified to you, if applicable, at the time of your request.</p>
                            <p className="text text-dark">Object to processing of your personal data where we are relying on
                                a legitimate interest (or
                                those of a third party) and there is something about your particular situation which
                                makes you
                                want to object to processing on this ground as you feel it impacts on your fundamental
                                rights
                                and freedoms. You also have the right to object where we are processing your personal
                                data for
                                direct marketing purposes. In some cases, we may demonstrate that we have compelling
                                legitimate
                                grounds to process your information which override your rights and freedoms.</p>
                            <p className="text text-dark">Request restriction of processing your personal data. This enables
                                you to ask us to suspend the
                                processing of your personal data in the following scenarios:</p>

                            <ul className="text-dark my-2">
                                <li> If you want us to establish the data’s accuracy.</li>
                                <li> Where our use of the data is unlawful, but you do not want us to erase it.</li>
                                <li> Where you need us to hold the data even if we no longer require it as you need it
                                    to
                                    establish,
                                    exercise or defend legal claims.
                                </li>
                                <li> You have objected to our use of your data, but we need to verify whether we have
                                    overriding
                                    legitimate grounds to use it.
                                </li>
                            </ul>
                            <p className="text text-dark">Request the transfer of your personal data to you or to a third
                                party. We will provide to you, or
                                a third party you have chosen, your personal data in a structured, commonly used,
                                machine-readable</p>
                            <p className="text text-dark">format. Note that this right only applies to automated information
                                which you initially provided
                                consent for us to use or where we used the information to perform a contract with
                                you.</p>
                            <p className="text text-dark">Withdraw consent at any time when we are relying on consent to
                                process your personal data.
                                However, this will not affect the lawfulness of any processing carried out before you
                                withdraw
                                your consent. If you withdraw your consent, we may not be able to provide certain
                                products or
                                services to you. We will advise you if this is the case at the time you withdraw your
                                consent.</p>
                        </div>
                    </div>
                </div>
                <hr className="divider" />
            </div>
        </div>
        <div className="fmain">
				<footer className="footer-02" >
					<div className="container" style={{ paddingTop: 73 }}>

						<div className="row">
							<div className="col-md-4 col-lg-5" >
								<div className="row">
									<div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                                    <h2 class="footer-heading">SIR Global Academy</h2>
                                <p>SIR Global Academy excels in teaching trading and investment with a practical,
                                    expert-led approach. Their curriculum, blending theory with real-world strategies,
                                    stands out in preparing individuals for success in financial markets.</p>
									</div>

								</div>
							</div>
							<div className="col-md-8 col-lg-7">
								<div className="row">
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Quick Links</h2>
										<ul className="list-unstyled">

											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">About</a></li>
											<li><a href="#stock" style={{ textDecoration: 'none' }} className="py-1 d-block">Stock Education


</a></li>
											<li><a href="#forex" style={{ textDecoration: 'none' }} className="py-1 d-block">Forex Education</a></li>
											<li><a href="#crypto" style={{ textDecoration: 'none' }} className="py-1 d-block">Crypto Education</a></li>
											<li><a href="#web3" style={{ textDecoration: 'none' }} className="py-1 d-block">Web3 Education</a></li>
								
								
										</ul>
									</div>
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">About</h2>
										<ul className="list-unstyled">
										<li><a href="" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokens</a></li>
											<li><a href="#team" style={{ textDecoration: 'none' }} className="py-1 d-block">Staff</a></li>
											<li><a href="#!" style={{ textDecoration: 'none' }} className="py-1 d-block">Location</a></li>
											
											<li><a href="#!" style={{ textDecoration: 'none' }} className="py-1 d-block">Blog</a></li>
										</ul>
									</div>
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Privacy</h2>
										<ul className="list-unstyled">
											<li><Link style={{ textDecoration: 'none' }}  to="/terms-and-condition" className="py-1 d-block">Terms and condition</Link></li>
											<li><Link to='/privacy-policy' style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</Link> </li>

										</ul>
									</div>
									<div className="r1 col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Social</h2>
										<ul className="list-unstyled">
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social1} alt=""  style={{width:30, marginRight:5, height:30}}/>Facebook</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social2} alt=""  style={{width:30, marginRight:5, height:30}} />Instagram</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social3} alt=""  style={{width:30, marginRight:5, height:30}} />Youtube</a></li>
											<li><a href="#" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social4} alt=""  style={{width:30, marginRight:5, height:30}} />X</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-6 col-lg-8">


							</div>

						</div>
					</div>
				</footer>
			</div>
</div>

   </>
  )
}

export default privacy