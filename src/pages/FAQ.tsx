import React from "react";
import { useNavigate } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

interface Props {
  auth: any;
}
function FAQ(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // authorization
  const decoded_token =
    props.auth && props.auth.token ? jwt_decode(props.auth.token) : null;
  const isAuthorized = decoded_token && (decoded_token as any).user;

  return (
    <main id="main" style={{ marginTop: "75px" }}>
      <Header isAuthorized={isAuthorized} title="faq" />
      <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>F.A.Q</h2>
            <h3>
              Frequently Asked <span>Questions</span>
            </h3>
            <p>
              For a modest fee, we guide undocumented immigrants through asylum,
              defend their rights, and support their journey towards legal
              status and a brighter future.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-12">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    1. How can Chenel Super Service help you?
                  </Accordion.Header>
                  <Accordion.Body>
                    Chenel Super Service LLC is committed to assisting
                    undocumented immigrants in the United States, and can offer
                    a wide range of services to help those living illegally in
                    the country.
                    <br />
                    <br />
                    1. **Asylum Application Assistance**: If you fear
                    persecution in your home country, Chenel Super Service can
                    help you prepare and file your asylum application. Their
                    team includes a variety of professionals, including
                    psychologists, economists, attorneys, journalists, and
                    professors, who work together to provide the best possible
                    service. They will listen to your story and help craft a
                    coherent and persuasive narrative that will be
                    understandable to the judge, increasing your chances of
                    being granted asylum. They will also check with the justice
                    department and the court to ensure that your case has been
                    docketed and filed correctly, and help you submit the proper
                    type of asylum application, whether affirmative or
                    defensive.
                    <br />
                    <br />
                    2. **Legal Representation**: Chenel Super Service can help
                    you find and hire a qualified immigration attorney at a
                    discounted rate. They negotiate discounts for their clients
                    with the attorneys they use, ensuring that you receive the
                    best possible legal representation at an affordable price.
                    <br />
                    <br />
                    3. **Comprehensive Support**: From the moment you contact
                    Chenel Super Service, you will be treated like family. They
                    have two receptionists and over ten phone lines to ensure
                    that your calls are always answered, and they provide
                    support and guidance every step of the way, from preparing
                    your application to attending your interview or court
                    hearing.
                    <br />
                    <br />
                    4. **Work Permit Application Assistance**: Once you have
                    filed your asylum application, you will be eligible to apply
                    for a work permit 150 days after filing, and USCIS will not
                    process it before 180 days. Chenel Super Service can help
                    you prepare and submit your work permit application,
                    ensuring that it is correctly filled out and submitted in a
                    timely manner.
                    <br />
                    <br />
                    5. **Family Petitions**: If you are granted asylum, Chenel
                    Super Service can help you petition to bring your spouse and
                    unmarried children under the age of 21 to the United States.
                    <br />
                    <br />
                    6. **Path to Citizenship**: Once you have been granted
                    asylum and have had your green card for the required amount
                    of time, Chenel Super Service can assist you in the process
                    of applying for U.S. citizenship.
                    <br />
                    <br />
                    Chenel Super Service LLC's ultimate goal is to be a beacon
                    of hope for everyone living illegally in the United States,
                    and to provide comprehensive, affordable, and compassionate
                    support to those seeking legal status and a brighter future.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    2. What happens if I win asylum?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you are granted asylum in the United States, you will
                    receive several benefits:
                    <br />
                    <br />
                    1. **Permission to Stay in the U.S.**: You will be allowed
                    to remain in the United States indefinitely.
                    <br />
                    <br />
                    2. **Work Authorization**: You will be eligible to apply for
                    a work permit (Employment Authorization Document, or EAD)
                    immediately after being granted asylum. This allows you to
                    work legally in the United States.
                    <br />
                    <br />
                    3. **Apply for Social Security Card**: You can apply for a
                    Social Security card.
                    <br />
                    <br />
                    4. **Apply for Family Members**: You can petition to bring
                    your spouse and unmarried children under the age of 21 to
                    the United States.
                    <br />
                    <br />
                    5. **Apply for a Green Card**: One year after being granted
                    asylum, you can apply for lawful permanent resident status
                    (a green card).
                    <br />
                    <br />
                    6. **Travel Outside the U.S.**: If you need to travel
                    outside the United States, you must apply for a Refugee
                    Travel Document before you leave. It is important to be
                    careful about traveling back to your home country, as it may
                    affect your asylee status or your ability to return to the
                    United States.
                    <br />
                    <br />
                    7. **Apply for Citizenship**: After you have had your green
                    card for four years (or one year, if you marry a U.S.
                    citizen), you can apply for U.S. citizenship.
                    <br />
                    <br />
                    It is important to note that being granted asylum also comes
                    with certain obligations, such as the obligation to notify
                    USCIS of any change of address and to not return to the
                    country from which you sought protection unless you receive
                    a special permission or you no longer fear persecution.
                    <br />
                    <br />
                    It is advisable to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to understand all of your rights and obligations
                    as an asylee and to get guidance on the next steps in the
                    process.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    3. What happens if I lose asylum?
                  </Accordion.Header>
                  <Accordion.Body>
                    If your asylum application is denied and you are not in
                    legal immigration status, you may be placed in removal
                    (deportation) proceedings.
                    <br />
                    <br />
                    1. **Immigration Court**: If your asylum application is
                    denied by the asylum officer at the initial interview, your
                    case will be referred to the immigration court, and you will
                    have the opportunity to present your case before an
                    Immigration Judge. 
                    <br />
                    <br />
                    2. **Appeal**: If the Immigration Judge denies your
                    application, you can appeal the decision to the Board of
                    Immigration Appeals (BIA) within 30 days of the decision. If
                    the BIA denies your appeal, you can further appeal to the
                    Federal Circuit Court of Appeals, and ultimately to the U.S.
                    Supreme Court.
                    <br />
                    <br />
                    3. **Removal**: If you do not appeal the decision or if your
                    appeals are unsuccessful, you may be ordered removed
                    (deported) from the United States. 
                    <br />
                    <br />
                    It is crucial to have legal representation throughout this
                    process. An immigration attorney or a reputable organization
                    like Chenel Super Service LLC can help you navigate the
                    process, present the strongest case possible, and explore
                    any other options for relief that may be available to you.
                    <br />
                    <br />
                    If you fear persecution or torture in your home country, you
                    should inform the court, your attorney, or the immigration
                    officials, as you may be eligible for other forms of relief,
                    such as withholding of removal or protection under the
                    Convention Against Torture.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    4. Can I reapply for asylum?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, you can reapply for asylum after your application has
                    been denied, but there are some important things to
                    consider.
                    <br />
                    <br />
                    1. **One-year filing deadline**: You must apply for asylum
                    within one year of your last arrival in the United States,
                    unless you can demonstrate changed circumstances that
                    materially affect your eligibility for asylum or
                    extraordinary circumstances relating to the delay in filing.
                    <br />
                    <br />
                    2. **Previous application**: If you have previously applied
                    for asylum and your application was denied by an Immigration
                    Judge or the Board of Immigration Appeals, you may only
                    reapply if there are changed circumstances that materially
                    affect your eligibility for asylum.
                    <br />
                    <br />
                    3. **New evidence**: You must present new evidence or
                    arguments that were not presented in your previous
                    application.
                    <br />
                    <br />
                    It's important to note that the asylum process is complex,
                    and the chances of success on a second application may be
                    lower than on a first application. Therefore, it's advisable
                    to consult with a qualified immigration attorney or a
                    reputable organization like Chenel Super Service LLC before
                    reapplying to ensure that you have a strong case and that
                    you meet all the necessary requirements.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    5. If I win asylum, will I be able to bring my family to the
                    US?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, if you are granted asylum, you can petition to bring
                    your spouse and unmarried children under the age of 21 to
                    the United States.
                    <br />
                    <br />
                    To do this, you must file Form I-730, Refugee/Asylee
                    Relative Petition, for each qualifying family member within
                    two years of being granted asylum, unless there are
                    humanitarian reasons for filing after this period.
                    <br />
                    <br />
                    Your family members may be eligible to receive a derivative
                    asylum status, which means they would receive the same
                    benefits and obligations as you do as an asylee.
                    <br />
                    <br />
                    It is advisable to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to guide you through the process and ensure that
                    all paperwork is correctly filled out and submitted in a
                    timely manner.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    6. If I am married, do I have to do a separate asylum?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you are married and both you and your spouse are in the
                    United States and are seeking asylum, you can include your
                    spouse (and any unmarried children under 21) on your asylum
                    application as derivatives. This means that if your asylum
                    application is approved, your spouse and children will also
                    be granted asylum.
                    <br />
                    <br />
                    You will need to include your spouse's and children's
                    information on your Form I-589, Application for Asylum and
                    for Withholding of Removal, and provide supporting
                    documentation (e.g., marriage certificate, birth
                    certificates) to establish your relationships.
                    <br />
                    <br />
                    If your spouse has their own independent claim for asylum,
                    they can choose to file a separate asylum application or be
                    included as a derivative on your application. It may be
                    advisable for both spouses to file separate applications if
                    they each have strong, independent claims for asylum, as
                    this increases the chances that at least one application
                    will be approved.
                    <br />
                    <br />
                    It is advisable to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to determine the best strategy for your specific
                    situation.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    7. Can I apply for someone who is not in the US?
                  </Accordion.Header>
                  <Accordion.Body>
                    The asylum process is designed for individuals who are
                    already in the United States or are seeking entry at a U.S.
                    border or port of entry. You cannot apply for asylum on
                    behalf of someone who is outside the United States.
                    <br />
                    <br />
                    If someone is outside the U.S. and is seeking protection as
                    a refugee, they must go through the U.S. Refugee Admissions
                    Program. The U.S. Refugee Admissions Program is separate
                    from the asylum process and has its own application process
                    and eligibility requirements.
                    <br />
                    <br />
                    If you are in the United States and want to help a relative
                    who is outside the United States, you may be able to sponsor
                    them for a family-based immigrant visa. However, this
                    process is different from the asylum or refugee processes
                    and has its own eligibility requirements and application
                    procedures.
                    <br />
                    <br />
                    It is advisable to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to understand all of your options and to get
                    guidance on the best course of action for your specific
                    situation.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    8. How long does it take to process the asylum application?
                  </Accordion.Header>
                  <Accordion.Body>
                    The processing time for asylum applications can vary widely
                    based on several factors, including the backlog of cases at
                    the asylum office or immigration court where your
                    application is being processed, the complexity of your case,
                    and any delays in gathering evidence or scheduling
                    interviews or hearings.
                    <br />
                    <br />
                    The asylum process in the United States typically involves
                    the following steps and timelines:
                    <br />
                    <br />
                    1. **Filing the Application**: You must file Form I-589,
                    Application for Asylum and for Withholding of Removal,
                    within one year of arriving in the United States.
                    <br />
                    <br />
                    2. **Receipt Notice**: You should receive a receipt notice
                    from USCIS within two to three weeks after filing your
                    application.
                    <br />
                    <br />
                    3. **Fingerprinting**: You will receive a notice to have
                    your fingerprints taken at a USCIS Application Support
                    Center. This usually occurs within a few weeks to a few
                    months after filing your application.
                    <br />
                    <br />
                    4. **Asylum Interview**: You will be scheduled for an
                    interview with an asylum officer. The wait time for an
                    interview can vary widely, from a few months to several
                    years, depending on the backlog of cases at the asylum
                    office where your application is being processed.
                    <br />
                    <br />
                    5. **Decision**: After your interview, the asylum officer
                    will make a decision on your case. The decision may be
                    granted, denied, or referred to the immigration court for
                    further proceedings. The timeline for receiving a decision
                    can vary from a few weeks to several months after your
                    interview.
                    <br />
                    <br />
                    If your case is referred to the immigration court, the
                    process can take even longer, as the immigration courts are
                    also experiencing significant backlogs. It is not uncommon
                    for the entire process, from filing the application to
                    receiving a final decision, to take several years.
                    <br />
                    <br />
                    Please note that these are general timelines and the
                    processing time for your specific case may vary. It is
                    always advisable to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to get the most up-to-date information and
                    guidance on the asylum process.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    9. Do I have to submit the asylum application with evidence?
                  </Accordion.Header>
                  <Accordion.Body>
                    It is not required to submit evidence with your asylum
                    application, but it is highly recommended to include as much
                    evidence as possible to support your claim. The more
                    comprehensive and compelling your evidence is, the stronger
                    your case will be.
                    <br />
                    <br />
                    Evidence can include:
                    <br />
                    <br />
                    1. **Personal Declaration**: A detailed, written statement
                    describing your experiences and fear of persecution in your
                    home country.
                    <br />
                    <br />
                    2. **Documents**: Birth certificates, marriage certificates,
                    identity cards, medical records, police reports, and any
                    other documents that can help establish your identity, your
                    relationships, and the events that led to your fear of
                    persecution.
                    <br />
                    <br />
                    3. **Country Conditions**: Reports, news articles, and other
                    documents that provide information about the human rights
                    conditions and political situation in your home country.
                    <br />
                    <br />
                    4. **Expert Witnesses**: Testimony from experts on your
                    country, your ethnicity, your religion, or other aspects of
                    your case that can help establish your credibility and the
                    legitimacy of your fear of persecution.
                    <br />
                    <br />
                    5. **Affidavits from Witnesses**: Written statements from
                    people who have firsthand knowledge of your situation and
                    can corroborate your story.
                    <br />
                    <br />
                    It is advisable to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to help you prepare your asylum application and
                    gather the necessary evidence to support your claim. They
                    can help you organize and present your evidence in a way
                    that is compelling and persuasive to the immigration judge
                    or asylum officer reviewing your case.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    10. If I don’t win the asylum, what else can I do?
                  </Accordion.Header>
                  <Accordion.Body>
                    If your asylum application is not approved, you still have
                    some options:
                    <br />
                    <br />
                    1. **Appeal the Decision**: You have the right to appeal the
                    decision to the Board of Immigration Appeals (BIA) within 30
                    days of the decision. The BIA is an administrative court
                    that reviews decisions made by immigration judges.
                    <br />
                    <br />
                    2. **Reapply for Asylum**: If your circumstances have
                    changed or if there is new evidence that was not available
                    at the time of your initial application, you may be able to
                    file a new asylum application. However, this is a
                    complicated process and not always possible, so it is
                    important to consult with a qualified immigration attorney
                    or a reputable organization like Chenel Super Service LLC.
                    <br />
                    <br />
                    3. **Apply for Other Forms of Relief**: Depending on your
                    circumstances, you may be eligible for other forms of
                    relief, such as withholding of removal or protection under
                    the Convention Against Torture (CAT). These forms of relief
                    are similar to asylum but have different eligibility
                    requirements and provide different levels of protection.
                    <br />
                    <br />
                    4. **Adjustment of Status**: If you are eligible for a green
                    card through another means, such as marriage to a U.S.
                    citizen, you can apply for adjustment of status to become a
                    lawful permanent resident.
                    <br />
                    <br />
                    5. **Voluntary Departure**: If you do not have any other
                    options for staying in the United States legally, you may
                    request voluntary departure, which allows you to leave the
                    United States on your own terms and at your own expense.
                    Voluntary departure may help you avoid some of the negative
                    consequences of a formal order of removal (deportation).
                    <br />
                    <br />
                    It is important to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to understand all of your options and to get
                    guidance on the best course of action for your specific
                    situation.
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    11. What if I get married to a US Citizen after I file for
                    asylum?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you get married to a U.S. citizen after you have filed
                    for asylum, you may be eligible to adjust your status to a
                    lawful permanent resident (green card holder) based on your
                    marriage to a U.S. citizen. Here are some key points to
                    consider:
                    <br />
                    <br />
                    1. **Genuine Relationship**: Your marriage must be genuine,
                    meaning it was entered into in good faith and not solely for
                    the purpose of obtaining an immigration benefit.
                    <br />
                    <br />
                    2. **Adjustment of Status**: Your U.S. citizen spouse can
                    file Form I-130, Petition for Alien Relative, on your
                    behalf. Once the I-130 is approved, you can file Form I-485,
                    Application to Register Permanent Residence or Adjust
                    Status, to apply for a green card.
                    <br />
                    <br />
                    3. **Pending Asylum Application**: You can still pursue your
                    asylum application while your adjustment of status
                    application is pending. However, if you are granted lawful
                    permanent resident status, your asylum application will be
                    administratively closed because it is no longer necessary.
                    <br />
                    <br />
                    4. **Work and Travel Authorization**: When you apply for
                    adjustment of status, you can also apply for work
                    authorization (Form I-765) and advance parole (Form I-131),
                    which allows you to travel outside the United States and
                    return while your adjustment of status application is
                    pending.
                    <br />
                    <br />
                    It is advisable to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC to understand the implications of getting
                    married after filing for asylum and to get guidance on the
                    best course of action for your specific situation.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    12. Can I submit my work permit application along with my
                    asylum application?
                  </Accordion.Header>
                  <Accordion.Body>
                    You cannot submit your work permit application (Form I-765,
                    Application for Employment Authorization) at the same time
                    as your asylum application (Form I-589, Application for
                    Asylum and for Withholding of Removal).
                    <br />
                    <br />
                    You must wait until 150 days have passed since you submitted
                    your complete asylum application, provided that no decision
                    has been made on your application, before you can apply for
                    a work permit. USCIS will not issue an Employment
                    Authorization Document (EAD) until at least 180 days have
                    passed since you filed your asylum application, provided
                    that no decision has been made on your application.
                    <br />
                    <br />
                    However, immigration policies and procedures can change, so
                    it's always a good idea to consult with a qualified
                    immigration attorney or a reputable organization like Chenel
                    Super Service LLC to get the most up-to-date information and
                    guidance on the asylum process and applying for a work
                    permit.
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    13. Why would USCIS deny my asylum work permit application?
                  </Accordion.Header>
                  <Accordion.Body>
                    The USCIS may deny your application for an Employment
                    Authorization Document (EAD), commonly referred to as a work
                    permit, for several reasons:
                    <br />
                    <br />
                    1. **Incomplete Application**: If your application is
                    incomplete or if you failed to include the required
                    supporting documents, your application may be denied.
                    <br />
                    <br />
                    2. **Ineligibility**: You can apply for a work permit 150
                    days after you have filed your complete asylum application
                    and have not received a decision on your application.
                    However, USCIS will not process your application or issue an
                    EAD until at least 180 days have passed since you filed your
                    asylum application, provided that no decision has been made
                    on your asylum application. If you applied for the work
                    permit before the 150 days, your application would be
                    denied.
                    <br />
                    <br />
                    3. **Criminal History**: Certain criminal convictions may
                    make you ineligible for a work permit.
                    <br />
                    <br />
                    4. **Asylum Application Denial**: If your asylum application
                    is denied, you are not eligible for a work permit.
                    <br />
                    <br />
                    5. **Failure to Follow Instructions**: If you did not follow
                    the instructions on the application form, including not
                    signing the form or not paying the required fees (if
                    applicable), your application may be denied.
                    <br />
                    <br />
                    It's important to carefully review the application
                    instructions and ensure that your application is complete
                    and accurate before submitting it. If your work permit
                    application is denied, the denial notice should include
                    information on whether you can appeal the decision or file a
                    motion to reopen or reconsider. If you need assistance with
                    your work permit application or if your application has been
                    denied, it is advisable to consult with a qualified
                    immigration attorney or a reputable organization like Chenel
                    Super Service LLC.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    14. What happens to my wife and kids if I win asylum?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you are granted asylum in the United States, your spouse
                    and children (under 21 and unmarried) are also eligible for
                    asylum status, whether they are in the United States or
                    abroad.
                    <br />
                    <br />
                    You can include your spouse and children on your asylum
                    application, or if they are not included initially, you can
                    file a Form I-730, Refugee/Asylee Relative Petition, for
                    your spouse and/or children within two years of being
                    granted asylum (except in cases of changed circumstances).
                    <br />
                    <br />
                    If your spouse and children are outside the United States,
                    they can use the approved Form I-730 to apply for a visa to
                    enter the United States. If your spouse and children are
                    already in the United States, they can use the approved Form
                    I-730 to apply for employment authorization and to adjust
                    their status to asylee (which grants them the same rights
                    and benefits as you).
                    <br />
                    <br />
                    It's important to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC that specializes in asylum applications to
                    ensure that all the necessary forms are correctly filed and
                    that your spouse and children are properly included in your
                    asylum application.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    15. If I resided in a foreign country before coming to the
                    US, can I still win asylum in the US?
                  </Accordion.Header>
                  <Accordion.Body>
                    Residing in another country before coming to the United
                    States does not automatically disqualify you from seeking
                    asylum in the U.S. However, if you have been "firmly
                    resettled" in another country before arriving in the U.S.,
                    you may be ineligible for asylum.
                    <br />
                    <br />
                    "Firm resettlement" means that you have received an offer of
                    permanent resident status, citizenship, or some other type
                    of permanent resettlement in another country before you
                    arrived in the United States.
                    <br />
                    <br />
                    There are exceptions to the firm resettlement bar, such as
                    if you can demonstrate that your stay in the third country
                    was a necessary stopover on your way to the United States or
                    if you can show that your living conditions in that country
                    were so restrictive that you were not, in fact, firmly
                    resettled.
                    <br />
                    <br />
                    The asylum officer or immigration judge will consider all
                    the circumstances of your case to determine whether you have
                    been firmly resettled in another country. This is a complex
                    area of immigration law, and it is advisable to consult with
                    a qualified immigration attorney or a reputable organization
                    like Chenel Super Service LLC that specializes in asylum
                    applications to ensure that your application is as strong as
                    possible.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>
                    16. Can I still file for asylum after one year in the US?
                  </Accordion.Header>
                  <Accordion.Body>
                    The U.S. asylum law requires that you must apply for asylum
                    within one year of your last arrival in the United States,
                    unless you can show:
                    <br />
                    <br />
                    1. **Changed Circumstances**: These are circumstances that
                    materially affect your eligibility for asylum. For example,
                    if conditions in your home country have worsened or if you
                    have recently converted to a religion that is persecuted in
                    your home country.
                    <br />
                    <br />
                    2. **Extraordinary Circumstances**: These are circumstances
                    beyond your control that prevented you from filing within
                    one year. For example, if you were suffering from a serious
                    illness or mental or physical disability during the one-year
                    period.
                    <br />
                    <br />
                    It's important to note that even if you believe that you
                    qualify for an exception to the one-year rule, you must
                    still apply for asylum as soon as possible. The USCIS
                    officer or immigration judge will determine whether you
                    qualify for an exception.
                    <br />
                    <br />
                    Given the complexity of the asylum process and the
                    importance of filing a well-prepared application, it is
                    advisable to seek assistance from a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC that specializes in asylum applications.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    17. Why would USCIS deny my asylum application?
                  </Accordion.Header>
                  <Accordion.Body>
                    The United States Citizenship and Immigration Services
                    (USCIS) may deny an asylum application for a variety of
                    reasons, including but not limited to:
                    <br />
                    <br />
                    1. **Lack of Credibility**: This is one of the most common
                    reasons for denial. If the USCIS officer or immigration
                    judge does not believe your story or finds inconsistencies
                    in your testimony or documentation, your application may be
                    denied.
                    <br />
                    <br />
                    2. **Failure to File Within One Year**: Generally, you must
                    apply for asylum within one year of your last arrival in the
                    United States unless you can show changed circumstances that
                    materially affect your eligibility for asylum or
                    extraordinary circumstances relating to the delay in filing.
                    <br />
                    <br />
                    3. **Safe Third Country**: If you passed through another
                    country where you could have applied for asylum before
                    reaching the United States, and the U.S. has an agreement
                    with that country, you may be ineligible for asylum in the
                    U.S.
                    <br />
                    <br />
                    4. **Persecution Not on Account of a Protected Ground**: To
                    qualify for asylum, you must prove that you have been
                    persecuted or have a well-founded fear of persecution on
                    account of your race, religion, nationality, membership in a
                    particular social group, or political opinion. If the USCIS
                    officer or immigration judge does not believe that the
                    persecution you have suffered or fear is on account of one
                    of these protected grounds, your application may be denied.
                    <br />
                    <br />
                    5. **Firm Resettlement**: If you have been permanently
                    resettled in another country before coming to the United
                    States, you may be ineligible for asylum.
                    <br />
                    <br />
                    6. **Criminal Activity or National Security Concerns**: If
                    you have been convicted of certain crimes or are believed to
                    pose a threat to national security, you may be ineligible
                    for asylum.
                    <br />
                    <br />
                    7. **Previous Denial of Asylum**: If you have been
                    previously denied asylum by an immigration judge or the
                    Board of Immigration Appeals, you may be ineligible to apply
                    again unless you can demonstrate changed circumstances that
                    materially affect your eligibility.
                    <br />
                    <br />
                    It is important to consult with a qualified immigration
                    attorney or a reputable organization like Chenel Super
                    Service LLC that specializes in asylum applications to
                    ensure that your application is as strong as possible and to
                    address any potential issues that may lead to a denial.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    18. How are many types of asylum are there?
                  </Accordion.Header>
                  <Accordion.Body>
                    There are primarily two types of asylum that individuals can
                    apply for:
                    <br />
                    <br />
                    1. **Affirmative Asylum**: This is for individuals who are
                    not in removal proceedings and apply for asylum proactively.
                    Individuals can apply for affirmative asylum within one year
                    of their arrival to the United States, regardless of their
                    current immigration status. The application is processed by
                    the U.S. Citizenship and Immigration Services (USCIS).
                    <br />
                    <br />
                    2. **Defensive Asylum**: This is for individuals who are in
                    removal proceedings in immigration court. Defensive asylum
                    applications are filed as a defense against removal from the
                    U.S. This process typically occurs when an individual is
                    referred to an Immigration Judge by USCIS, or when they are
                    placed in removal proceedings because they were apprehended
                    (or caught) in the United States or at a U.S. port of entry
                    without proper legal documents.
                    <br />
                    <br />
                    It's important to note that the asylum process and types of
                    asylum can vary by country, so it's always advisable to
                    consult with a legal expert or the immigration services of
                    the respective country for the most accurate and up-to-date
                    information.
                    <br />
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="18">
                  <Accordion.Header>
                    19. Can I apply for asylum outside of the US?
                  </Accordion.Header>
                  <Accordion.Body>
                    You generally must be physically present in the United
                    States to apply for asylum there. This includes being at a
                    port of entry (e.g., an airport or border crossing). You can
                    apply for asylum regardless of how you arrived in the United
                    States or your current immigration status.
                    <br />
                    <br />
                    It's important to note that policies and procedures can
                    change, so it's always advisable to consult the official
                    website of the U.S. Citizenship and Immigration Services
                    (USCIS) or speak with a legal expert or an immigration
                    organization for the most current and accurate information.
                    Additionally, procedures for seeking asylum may vary by
                    country, so if you are considering seeking asylum in a
                    country other than the United States, you will need to
                    research the specific procedures and requirements for that
                    country.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="19">
                  <Accordion.Header>
                    20. Do I have to have an attorney for an asylum?
                  </Accordion.Header>
                  <Accordion.Body>
                    It is not legally required to have an attorney to apply for
                    asylum in the United States or in most other countries. You
                    have the right to apply for asylum on your own, which is
                    referred to as filing "pro se."
                    <br />
                    <br />
                    However, the asylum process can be incredibly complex and
                    challenging, involving specific legal criteria, detailed
                    documentation, and strict deadlines. Having an attorney who
                    is knowledgeable about immigration law can greatly increase
                    your chances of a successful application. An attorney can
                    help you prepare your application, gather necessary
                    evidence, prepare you for interviews or court appearances,
                    and represent you in any legal proceedings.
                    <br />
                    <br />
                    Statistics show that asylum seekers with legal
                    representation are significantly more likely to be granted
                    asylum than those without. Therefore, while it is not
                    mandatory to have an attorney to apply for asylum, it is
                    highly recommended.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion>
                <Accordion.Item eventKey="20">
                  <Accordion.Header>
                    21. Why should I choose Chenel Super Service LLC do my
                    asylum application over an attorney?
                  </Accordion.Header>
                  <Accordion.Body>
                    Chenel Super Service LLC provides a comprehensive approach
                    to the asylum process that goes beyond just legal
                    representation. Here are some of the key advantages of
                    choosing Chenel Super Service LLC to file your asylum
                    application instead of just an attorney:
                    <br />
                    <br />
                    1. **Multidisciplinary Team of Experts**: Chenel Super
                    Service LLC brings together a team of experts from various
                    fields, including psychologists, economists, journalists,
                    and professors, in addition to attorneys. This
                    multidisciplinary approach ensures that every aspect of your
                    case is addressed comprehensively and that your application
                    is as strong as possible.
                    <br />
                    <br />
                    2. **Proactive and Attentive Service**: The team at Chenel
                    Super Service LLC takes a proactive approach by regularly
                    checking with the Justice Department and the court to ensure
                    that your case is progressing as it should. This level of
                    attention and care helps to avoid delays and ensures that
                    the proper type of asylum application, whether affirmative
                    or defensive, is submitted.
                    <br />
                    <br />
                    3. **Coherent and Understandable Story**: The team at Chenel
                    Super Service LLC listens attentively to your experiences
                    and helps craft a coherent and understandable narrative for
                    the judge. This enhances your chances of being understood
                    and ultimately winning asylum.
                    <br />
                    <br />
                    4. **Comprehensive Support**: Chenel Super Service LLC
                    provides comprehensive support throughout the entire asylum
                    process. From preparing and filing your application to
                    preparing you for interviews or court appearances and
                    providing ongoing support, Chenel Super Service LLC is there
                    for you every step of the way.
                    <br />
                    <br />
                    5. **Access to the Best Immigration Attorneys**: Chenel
                    Super Service LLC has a network of top immigration attorneys
                    and negotiates discounts on your behalf, ensuring that you
                    receive the highest quality legal representation at the most
                    affordable rates.
                    <br />
                    <br />
                    6. **Client-Focused Approach**: At Chenel Super Service LLC,
                    clients are treated like family. The team is always
                    available to answer your calls and address any urgent needs
                    that may arise. With over ten phone lines and two dedicated
                    receptionists, you can always reach someone when you need
                    assistance.
                    <br />
                    <br />
                    In summary, Chenel Super Service LLC provides a
                    comprehensive, proactive, and client-focused approach to the
                    asylum process that goes beyond just legal representation.
                    With a multidisciplinary team of experts, attentive and
                    proactive service, comprehensive support, and a
                    client-focused approach, Chenel Super Service LLC is an
                    excellent choice for anyone seeking to file an asylum
                    application.
                    <br />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            {/* <div className="col-xl-4">
              <img
                src="http://localhost:3000/assets/img/faq1.jpg"
                alt="faq1"
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <img
                src="http://localhost:3000/assets/img/faq2.jpg"
                alt="faq2"
                style={{ width: "100%" }}
              />
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

FAQ.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(FAQ);
