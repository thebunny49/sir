import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/ico2.png'
import social1 from '../assets/social1.png'
import ceo from '../assets/ceo.png'
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'
const tac = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
  <div className="edumain">
  <div className="navbar">
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
    <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="content" style={{padding:"50px 0px"}}>
                        <h2 className="title">Customer Terms &amp; Conditions</h2>
                    </div>
                </div>
            </div>
        </div>
      <div className="container">
        <div className="row">
        <div className="col-12">
                    <p className="text text-dark">Our terms</p>
                    <p className="text text-dark">1. THESE TERMS</p>
                    <p className="text text-dark">1.1 What definitions we use in our terms. In these terms, “Services” means educational services
                        and
                        our online learning courses, as the case may be, that we advertise on our website. Our Services are intended only for your personal,
                        non-commercial use, unless you and us have agreed otherwise in writing.</p>
                    <p className="text text-dark">What these terms cover. These are the terms and conditions on which we supply the Services to you
                        (our contract with you).</p>
                    <p className="text text-dark">1.2 Logging onto and using information provided on SIR Global Academy or submitting an application
                        for
                        any of our services or packages including but not limited to Subscription-Based Services, etc.
                        (hereafter referred to as "MEMBER", "SUBSCRIBER", OR "MEMBERSHIP"), you hereby agree
                        unconditionally
                        to the legal terms and condition stated here.</p>
                    <p className="text text-dark">Disclaimers:</p>
                    <p className="text text-dark">Every Member, Potential Member, Free Trial Member, Interested Customer, or Subscriber of any
                        sort,
                        must fully read this legal disclaimer, understand, and agree, to the legal terms stipulated.</p>
                    <p className="text text-dark">(a) Our Services are purely educational. We will not accept responsibility for any losses you
                        suffer
                        if you make your own decision to use any information you gained from our Services and online
                        learning courses. Please see clause 9 to learn more about our responsibility for any damage
                        suffered
                        by you as a result of our Services.</p>
                    <p className="text text-dark">We do not provide any financial advice or claim that our Services will bring you financial
                        benefits.
                        Any investment and trading activities are at your own risk and any decision to be involved in
                        trading shall be made by weighing all pros and cons for you personally. We cannot know whether
                        trading is something you should pursue in your personal circumstances. This is your decision and
                        we
                        will not accept any responsibility for it.</p>
                    <p className="text text-dark">(b) You should carefully think over your investment objectives, risks and experience before
                        participating in the Futures &amp; Forex market. It is important to not invest money you cannot
                        afford
                        to lose.</p>
                    <p className="text text-dark">Any opinions, news, research, analyses, prices, or other information offered by SIR Global Academy
                        does
                        not constitute investment advice. SIR Global Academy will not accept liability for any loss or</p>


                    <p className="text text-dark">damage, including without limitation to, any loss of profit, which may arise directly or
                        indirectly
                        from use of or reliance on such information.</p>
                    <p className="text text-dark">(c) You must be 18 years of age, or the age of majority in your province, territory or country,
                        to
                        become a Subscriber of SIR Global Academy.</p>
                    <p className="text text-dark">1.3 If you are not in the UK:</p>
                    <p className="text text-dark">(a) We do not provide our Services in sanctioned jurisdictions. Our Website can be accessed from
                        any
                        jurisdiction in the world. Nonetheless, we do not provide our Services to the residents and
                        companies registered in countries which are currently under sanctions imposed by the United
                        States
                        of America, European Union, United Arab Emirates, United Kingdom and United Nations or under the
                        respective applicable laws. For the specific sanctions and the list of countries under such
                        sanctions, please visit the website of the respective authorities and governmental bodies.</p>
                    <p className="text text-dark">(b) SIR Global Academy does not accept applications from residents of the U.S, Canada, the Islamic
                        Republic of Iran, GCC, UAE and any sanctioned countries. The information on this site is not
                        directed at residents in any country or jurisdiction where such distribution or use would be
                        contrary to local law or regulation. . If we learn that you are using our Services from a
                        sanctioned
                        jurisdiction, we can cancel your subscription and stop providing our Services to you without any
                        notice as and when we learn about it. We shall have no obligation towards you. You shall have no
                        right to refund or compensation if you have already paid us.</p>
                    <p className="text text-dark">You should cancel your subscription and immediately stop using our Services if you are from a
                        sanctioned or above stated (1.3(b)) jurisdiction. If we learn that you are using our Services
                        from a
                        these jurisdiction, we can cancel your subscription and stop providing our Services to you
                        without
                        any notice as and when we learn about it and we shall have no obligation towards you. You shall
                        have
                        no right to refund or compensation, if you have already paid us.</p>
                    <p className="text text-dark">(c) Trading or trading education may not be legal in some jurisdictions. You understand and
                        accept
                        that we are unable to provide you with any legal advice or assurances in respect of your use of
                        the
                        Website or the Services. We make no representations whatsoever as to the legality of the
                        Services in
                        your jurisdiction. Please verify the relevant laws in your jurisdiction before registering with
                        us
                        and using the Services as it is the users'</p>


                    <p className="text text-dark">responsibility to observe all applicable laws and regulations of the relevant jurisdiction before
                        proceeding to access the information contained in our courses.</p>
                    <p className="text text-dark">Our Services are intended only for users who are not prohibited by the laws of any applicable
                        jurisdiction from using FOREX/ CRYPTO or learning about FOREX/ CRYPTO trading. We do not intend
                        to
                        enable you to contravene applicable law. You represent, warrant and agree to ensure that your
                        use of
                        the Website and the Services will comply with all applicable laws, statutes and regulations. We
                        shall not be responsible for any illegal or unauthorised use of the Website and/or the Services
                        by
                        you. Please consult legal counsel in the applicable jurisdiction if you have any doubts about
                        the
                        legality of your use of the Website and the Services under the laws of any jurisdiction that
                        applies
                        to you. By accepting these terms, you agree to assist us, to the extent you are able, with its
                        compliance with applicable laws and regulations. DO NOT USE OUR SERVICES IF YOU HAVE A REASON TO
                        BELIEVE THIS CAN BREACH ANY LAWS OF YOUR COUNTRY.</p>
                    <p className="text text-dark">1.4 Governing law. By accepting our terms and conditions and/or continuing to use our Services,
                        you
                        understand and accept that these terms and any dispute or claim (including non-contractual
                        disputes
                        or claims) arising out of or in connection with them or their subject matter or formation shall
                        be
                        governed by and construed in accordance with the law of UAE.</p>
                    <p className="text text-dark">1.5 As a Client, you hereby accept and warrant that You have an understanding of the usage and
                        intricacies of cryptographic tokens, such as BTC (Bitcoin) and other blockchain-based software
                        systems. Furthermore, you accept and warrant that You are legally permitted to trade in Your
                        jurisdiction. You also accept and warrant that You waive Your right to participate in a class
                        action
                        lawsuit or a wide-reaching arbitration or court case against SIR Global Academy or any entity
                        affiliated, private individuals, employees, consultants, third-party suppliers or other people
                        or
                        entities associated or connected with SIR Global Academy. You further accept and warrant that You
                        take
                        sole responsibility for any restrictions and risks associated with the education provided.
                        Further,
                        you accept and warrant that You are not exchanging cryptocurrencies or FIAT Currency for
                        speculative
                        investments, nor for any illegal purpose within your jurisdiction. You accept and warrant that
                        you
                        understand that there is no guarantee whatsoever on any of the services provided, to the extent
                        permitted by law and remedies at law or in equity, reserves the right to take any action it
                        deems
                        appropriate, including but not limited to issuing warning letters, suspending or terminate You
                        as a
                        Client and pursue litigation or other legal actions. Furthermore, SIR Global Academy has zero tolerance for
                        unprofessional behaviour that can in any way, shape or form directly or indirectly harm SIR Global Academy
                        Academy or the companies that SIR Global Academy</p>


                    <p className="text text-dark">Academy from time to time cooperates with. Legal action will be taken against those Clients and
                        IBIs
                        for any loss of income or any other damage or financial loss caused to the SIR Global Academy or the
                        companies
                        that SIR Global Academy from time to time cooperates with. Any Affiliate caught smearing the name of SIR Global Academy,
                        or associates– whether it’s directly or indirectly – or in any way misrepresents SIR Global Academy or
                        the companies that SIR Global Academy from time to time cooperates with will also be subject to legal action
                        from SIR Global Academy and/or the companies that SIR Global Academy from time to time cooperates with. SIR Global Academy shall be
                        the
                        sole determiner in cases of suspected abuse, fraud, violation of its rules, unprofessional
                        behaviour, smearing or misrepresenting SIR Global Academy. Any decision SIR Global Academy makes relating to the
                        cancellation of potential rewards, and the suspension or termination of the status as a customer
                        shall be final and binding.</p>
                    <p className="text text-dark">1.6 Our Website. Nothing on our Website shall be considered a solicitation to buy or an offer to
                        sell
                        any product or service to any person in any jurisdiction where such offer, solicitation,
                        purchase or
                        sale would be unlawful under the laws of such jurisdiction. The information on our Website is
                        not
                        targeted at the public of any country. It is not intended for distribution to residents in
                        any country where such distribution or use would contravene any local law or regulatory
                        requirement.</p>
                    <p className="text text-dark">Why you should read our terms. Please read these terms carefully before you submit your order to
                        us.
                        These terms tell you who we are, how we will provide Services to you, how you and we may change
                        or
                        end the contract, what to do if there is a problem and other important information. If you think
                        that there is a mistake in these terms, please contact us to discuss.</p>
                    <p className="text text-dark">2. INFORMATION About Us AND HOW TO CONTACT US</p>
                    <p className="text text-dark">2.1 Who we are. SIR Global Academy LTD is a company registered in the UAE. SIR Global Academy
                        Academy is a direct to consumer, subscription based, training and education company.</p>
                    <p className="text text-dark">How to contact us. You can contact us by writing to us at support@SIR Global Academyworld.com</p>
                    <p className="text text-dark">2.2 How we may contact you. If we have to contact you, we will do so by telephone or by writing
                        to
                        you at the email address or postal address you provided to us in your order.</p>
                    <p className="text text-dark">"Writing" includes emails. When we use the words "writing" or "written" in these terms, this
                        includes
                        emails.</p>
                    <p className="text text-dark">3. OUR CONTRACT WITH YOU</p>
                    <p className="text text-dark">3.1 How we will accept your order. Our acceptance of your order will take place upon initial
                        payment
                        of the subscription, at which point a contract will come into existence between you and us.</p>
                    <p className="text text-dark">If we cannot accept your order. If we are unable to accept your order, we will inform you of this
                        in
                        writing, however you may still be charged for the Services.</p>
                    <p className="text text-dark">4. YOUR RIGHTS TO MAKE CHANGES</p>
                    <p className="text text-dark">If you wish to make a change to the Services you have ordered (for example, if you want a
                        different
                        course) please contact us immediately. We will let you know if the change is possible. If it is
                        possible, we will let you know about any changes to the price of the Services, the timing of
                        supply
                        or anything else which would be necessary as a result of your requested change and ask you to
                        confirm whether you wish to go ahead with the change. If we cannot make the change or the
                        consequences of making the change are unacceptable to you, you may want to end the contract.</p>
                    <p className="text text-dark">5. PROVIDING THE SERVICES</p>
                    <p className="text text-dark">5.1 When we will provide the Services. See clause 3.1</p>
                    <p className="text text-dark">We are not responsible for delays outside our control. If our supply of the Services is delayed
                        by an
                        event outside our control, then we will contact you as soon as possible to let you know and we
                        will
                        take steps to minimise the effect of the delay. Provided we do this we will not be liable for
                        delays
                        caused by the event, but if there is a risk of substantial delay you may contact us to end the
                        contract and receive a refund for any Services you have paid for but not received.</p>
                    <p className="text text-dark">5.2 Ending the contract for late provision of the Services. If you do choose to treat the
                        contract as
                        at an end for late provision of Services, you can cancel your order for the Services by writing
                        to
                        us on support@SIR Global Academyworld.com</p>
                    <p className="text text-dark">What are your obligations under these terms. You should co-operate with us and assist us to such
                        extent as we may reasonably require to perform our obligations under these terms.</p>
                    <p className="text text-dark">5.3 What will happen if you do not give required information to us. We may need certain
                        information
                        from you so that we can supply the Services to you. We will contact you to ask for this
                        information.
                        If you do not give us this information within a reasonable time of us asking for it, or if you
                        give</p>


                    <p className="text text-dark">us incomplete or incorrect information, we may either end the contract (and clause 6.2 will
                        apply) or
                        make an additional charge of a reasonable sum to compensate us for any extra work that is
                        required
                        as a result. We will not be responsible for supplying the Services late or not supplying any
                        part of
                        them if this is caused by you not giving us the information, we need within a reasonable time of
                        us
                        asking for it.</p>
                    <p className="text text-dark">Reasons we may suspend the supply of the Services to you. We may have to suspend the supply of
                        the
                        Services to:</p>
                    <p className="text text-dark">(a) deal with technical problems or make minor technical changes.</p>
                    <p className="text text-dark">make changes to the Services as requested by you or notified by us to you.</p>
                    <p className="text text-dark">5.4 Your rights if we suspend the supply of the Services. We will contact you in advance to tell
                        you
                        we will be suspending supply of the Services, unless the problem is urgent or an emergency. You
                        may
                        contact us to end the contract for the whole or part of the Services if we suspend it, or tell
                        you
                        we are going to suspend it, in each case for a period of more than one month and we will refund
                        any
                        sums you have paid in advance for the Services in respect of the period after you end the
                        contract.</p>
                    <p className="text text-dark">6. OUR RIGHTS TO END THE CONTRACT</p>
                    <p className="text text-dark">6.1 We may end the contract if you break it. We may end the contract for Services at any time by
                        writing to you if:</p>
                    <p className="text text-dark">(a) you do not make any payment to us when it is due and you still do not make payment within
                        three
                        days of us reminding you that payment is due;</p>
                    <p className="text text-dark">you do not, within a reasonable time of us asking for it, provide us with information that is
                        necessary for us to provide the Services; or</p>
                    <p className="text text-dark">(b) you do not, within a reasonable time, allow us to provide the Services to you.</p>
                    <p className="text text-dark">6.2 You must compensate us if you break the contract. If we end the contract in any situation,
                        you
                        may be charged as compensation for the net costs we will incur as a result of your breaking the
                        contract.</p>
                    <p className="text text-dark">7. IF THERE IS A PROBLEM WITH THE SERVICES</p>
                    <p className="text text-dark">7.1 How to tell us about problems. If you have any questions or complaints about the Services,
                        please
                        contact us. You can use our web chat service on the Website or write to us at
                        support@SIR Global Academyworld.com</p>


                    <p className="text text-dark">8. PRICE AND PAYMENT</p>
                    <p className="text text-dark">8.1 Where to find the price for the Services. The price of the Services will be the price
                        indicated
                        on our Website. We use our best efforts to ensure that the price of the Services advised to you
                        is
                        correct. However please see full terms for what happens if we discover an error in the price of
                        the
                        Services you order.</p>
                    <p className="text text-dark">8.2 What happens if we got the price wrong. It is always possible that, despite our best efforts,
                        the
                        Services may be incorrectly priced. We will normally check prices before accepting your order so
                        that, where the correct price at your order date is less than our stated price at your order
                        date,
                        we will charge the lower amount. If the correct price at your order date is higher than the
                        price
                        stated to you, we will contact you for your instructions before we accept your order. If we
                        accept
                        and process your order where a pricing error is obvious and unmistakeable and could reasonably
                        have
                        been recognised by you as a mispricing, we may end the contract and refund you any sums you have
                        paid, unless we have already started providing the Services to you, in which case we may
                        withhold a
                        reasonable amount for the work we have done.</p>
                    <p className="text text-dark">When you must pay and how you must pay. We ONLY accept payments using the options available on
                        our
                        website. You must pay for the Services before we start providing them. You must pay for our
                        Services
                        in advance, in order to gain online access to them.</p>
                    <p className="text text-dark">9. OUR RESPONSIBILITY FOR LOSS OR DAMAGE SUFFERED BY YOU</p>
                    <p className="text text-dark">9.1 We are not liable for business losses. If you use the Services for any commercial, business
                        or
                        re-sale purpose we will have no liability to you for any loss of profit, loss of business,
                        business
                        interruption, or loss of business opportunity.</p>
                    <p className="text text-dark">10. HOW WE MAY USE YOUR PERSONAL INFORMATION</p>
                    <p className="text text-dark">10.1 How we may use your personal information. We will only use your personal information as set
                        out
                        in our Privacy Policy, which can be found at the bottom of the Website.</p>
                    <p className="text text-dark">Confidentiality. Any data you supply to us under these terms shall remain your property and will
                        be
                        kept confidential by us.</p>
                    <p className="text text-dark">11. OTHER IMPORTANT TERMS</p>
                    <p className="text text-dark">We may transfer this agreement to someone else. We may transfer our rights and obligations under
                        these terms to another organisation. We may tell</p>


                    <p className="text text-dark">you in writing or announce this using other methods such as but not limited to social media,
                        online
                        webinars etc. if this happens and we will ensure that the transfer will not affect your rights
                        under
                        the contract.</p>
                    <p className="text text-dark">11.1 You need our consent to transfer your rights to someone else (except that you can always
                        transfer our guarantee). You may only transfer your rights or your obligations under these terms
                        to
                        another person if we agree to this in writing.</p>
                    <p className="text text-dark">Nobody else has any rights under this contract (except someone you pass your guarantee on to).
                        This
                        contract is between you and us. No other person shall have any rights to enforce any of its
                        terms.
                        Neither of us will need to get the agreement of any other person in order to end the contract or
                        make any changes to these terms.</p>
                    <p className="text text-dark">11.2 KYC: SIR Global Academy can at any time, at their own decision, ask You to provide a copy of
                        Your
                        passport and a copy of a utility bill that is not older than 90 days and shows Your address.
                        This
                        request is called (“KYC Request”). You are aware and accept that You will be asked to provide
                        accepted KYC documents before You can access any rewards shared by SIR Global Academy. If a KYC
                        Request
                        is required, you will not be able to withdraw any rewards until You have provided acceptable
                        documents.</p>
                    <p className="text text-dark">11.3 If a court finds part of this contract illegal, the rest will continue in force. Each of the
                        paragraphs of these terms operates separately. If any court or relevant authority decides that
                        any
                        of them are unlawful, the remaining paragraphs will remain in full force and effect.</p>
                    <p className="text text-dark">Even if we delay in enforcing this contract, we can still enforce it later. If we do not insist
                        immediately that you do anything you are required to do under these terms, or if we delay in
                        taking
                        steps against you in respect of your breaking this contract, that will not mean that you do not
                        have
                        to do those things and it will not prevent us taking steps against you at a later date.</p>
                    <p className="text text-dark">RISK DISCLAIMER</p>
                    <p className="text text-dark">By purchasing an education package, the customer is only purchasing said educational services.
                        SIR Global Academy
                        Academy may at times reward its customer with mCoins and/or any other reward based on the
                        purchased
                        Package as a benefit. The value of mCoin is determined by the market and SIR Global Academy has no
                        control over this. The mCoin rewards may fluctuate in value according to market trends.</p>
                    <p className="text text-dark">The information and/or education provided is not in any way, shape or form should be considered
                        professional/financial advice from SIR Global Academy or any Presenter in terms of investments,
                        finances, trading or securities. Any product of the company does not</p>

                    <p className="text text-dark">guarantee any future result. mCoin free rewards is a promotional offer. SIR Global Academy reserves
                        the
                        right to withdraw any promotional rewards without any prior notice.</p>

                    
                    
                </div>
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
											<li><Link style={{ textDecoration: 'none' }} to="/terms-and-condition" className="py-1 d-block">Terms and condition</Link></li>
											<li><Link to='/privacy-policy' style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</Link></li>

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

export default tac