const main=`
  <h2> Elevate Partner Application</h2>
  <h3 id='intro' style='margin-bottom:30px; margin-top: -10px;line-height:1.5; font-weight:400;'>
    Thank you for your interest in our elevate partner program! </br>Let's start with some contact and company information.
  </h3>

  <div class='col2'>
    <div class="full-input">
      <label> First Name </label>
      <input type='text' placeholder=""> </input>
    </div>

    <div class="full-input">
      <label> Last Name </label>
      <input type='text' placeholder=" "> </input>
    </div>
  </div>

  <div class='col2'>
    <div class="full-input">
      <label> Email</label>
      <input type='text' placeholder=""> </input>
    </div>

    <div class="full-input">
      <label> Phone Number </label>
      <input type='text' placeholder=""> </input>
    </div>
  </div>

  <div class='col2'>
    <div class="full-input">
      <label>Company </label>
      <input type='text' placeholder=""> </input>
    </div>

    <div class="full-input">
      <label>Company Website</label>
      <input type='text' placeholder="http://"> </input>
    </div>
  </div>

  <div class='col1'>
    <div class="full-input">
      <label>Job title</label>
      <input type='text' placeholder="e.g. Architect"> </input>
    </div>
  </div>
  <!--
  <div class='separator'>&nbsp;</div> -->
  <div class='col-alt' style='margin-bottom:0'>
    <input type='checkbox' class='notMe animate-opacity'/>
    <h3> I am not the primary point of contact for my company</h3>
  </div>

  <div class='notThat'>
    <h3>Primary contact information</h3>
    <div class='col2'>
      <div class="full-input">
        <label> First Name </label>
        <input type='text' placeholder=""> </input>
      </div>

      <div class="full-input">
        <label> Last Name </label>
        <input type='text' placeholder=" "> </input>
      </div>
    </div>

    <div class='col2'>
      <div class="full-input">
        <label> Email</label>
        <input type='text' placeholder=""> </input>
      </div>

      <div class="full-input">
        <label> Phone Number </label>
        <input type='text' placeholder=""> </input>
      </div>
    </div>


  </div>`
const company =`
  <h2> Elevate Partner Application</h2>
  <h3 id='intro' style='margin-bottom:30px; margin-top: -10px;line-height:1.5; font-weight:400;'>
    Thank you for your interest in our elevate partner program! </br>Tell us more about your goals.
  </h3>


      <p>How would you descibe the type of engagement your company is looking for with Nutanix.</p>

      <div style='margin-bottom:0;'>
        <div class='col2'>
          <div class='col-alt' style='margin-bottom:0'>
            <input type='checkbox' class='notMe animate-opacity'/>
            <h3> Validate software for AHV</h3>
          </div>
          <div class='col-alt' style='margin-bottom:0;  width:48%'>
            <input type='checkbox' class='notMe animate-opacity'/>
            <h3> App integration with API</h3>
          </div>
        </div>
      <div>

      <div class='col2'>
        <div class='col-alt' style='margin-bottom:0'>
          <input type='checkbox' class='notMe animate-opacity'/>
          <h3>Blueprint creation/validation</h3>
        </div>
        <div class='col-alt' style='margin-bottom:0; width:48%'>
          <input type='checkbox' class='notMe animate-opacity'/>
          <h3>Validate Hardware</h3>
        </div>
      </div>

      <div class='separator'> </div>

      <p>Which of the following statements best completes the following sentence: <span>"Our customers/partners are interested in..."</span></p>

      <div class='col2'>
        <div class='col-alt' style='margin-bottom:0'>
          <input type='radio'  name="contact" class='notMe animate-opacity'/>
          <h3> learning about Nutanix</h3>
        </div>
        <div class='col-alt' style='margin-bottom:0;  width:48%'>
          <input type='radio'  name="contact" class='notMe animate-opacity'/>
          <h3> purchasing Nutanix</h3>
        </div>
      </div>

      <div class='col2'>
        <div class='col-alt' style='margin-bottom:0'>
          <input type='radio'  name="contact"  class='notMe animate-opacity'/>
          <h3>have Nutanix but want to scale</h3>
        </div>
        <div class='col-alt' style='margin-bottom:0; width:48%'>
          <input type='radio'  name="contact"  class='notMe animate-opacity'/>
          <h3>other</h3>
        </div>
      </div>
    </div>
  `
const terms =
    `
    <h2> Elevate Partner Application</h2>
    <h3 id='intro' style='margin-bottom:30px; margin-top: -10px;line-height:1.5; font-weight:400;'>
      Thank you for your interest in our elevate partner program! </br>Review terms and conditions.
    </h3>

    <div class="agreement">
    <div class='col2' style='padding-top: 20px' >
      <h3 style='margin:0'> Elevate Program Agreement </h3>
      <a class='link' id='scroller'>Scroll to bottom</a>
    </div>
    <hr class='agreement-separtor'>
    <p>This Nutanix Elevate Program Agreement (the “Agreement”) creates a contract between you (“Partner”) and Nutanix, Inc., having its principal place of business at 1740 Technology Dr., Suite 150, San Jose, CA 95110 (“Nutanix”), (“Partner” and each of Partner and Nutanix a “Party” and collectively, the “Parties”).

      To confirm your understanding and acceptance of the Agreement, click “Agree.” By clicking “Agree”, Partner will be a part of the Nutanix Elevate Program at the Build Elevate Partner level. The Agreement is effective as of the date Partner clicks “Agree” (the “Effective Date”).
      This Agreement governs the relationship of the Parties with regard to the Nutanix Elevate Program.

      In consideration of the mutual promises contained herein, the Parties hereby agree as follows:

      <b>1. Definitions.</b>
      a. “Customer” means a third party that has purchased or licensed a Partner Product.
      b. “Partner Product” means a Partner product offered for sale and sold to a customer, which
      Partner desires to submit for testing and validation for interoperability with a Nutanix system under the Program (“Testing”).
      c. “Program Guide” means the document describing the Program, as posted on Nutanix’s website and as may be modified from time to time at Nutanix’s sole discretion.

      <b>2. Overview</b>.
      a. This Agreement and the Program Guide (defined below) establish the terms and conditions under which Nutanix conducts its Technology Alliance Partner Program (the “Program”). Features of the different tiers of membership in the Program are more fully described in the program guide, which may be modified from time to time by Nutanix (“Program Guide”). Partner is encouraged to periodically review the Program Guide to keep apprised of any updates. If any modification to the Program Guide is unacceptable to Partner, Partner’s sole and exclusive remedy shall be to terminate this Agreement within thirty (30) days after being made aware of such modification.
      b. Subject to the satisfaction of all of the terms and conditions of this Agreement, the Partner shall be a member in the Program at the Build Elevate Program level. Nutanix may change the level of the Partner at any time in its sole discretion.

      <b>3. Marketing.</b>
      a. Joint Marketing. The Parties will cooperate in good faith to determine what joint marketing, sales development, demand generation and promotional activities are mutually agreeable, on a case-by-case basis, to promote each other’s products or business objectives, and will enter into one or more written joint marketing plans (“Joint Marketing Plans”). All costs and expenses incurred in conducting such activities shall be borne by the Party incurring them. During each Contract Year (as defined below), to the extent applicable to Partner’s tier of membership in the Program and specified in the Program Guidelines, unless otherwise mutually agreed, Partner shall spend a minimum of the marketing dollars listed in the Program Guidelines for such membership tier on the activities specified in the Joint Marketing Plans. “Contract Year” means the period commencing on the Effective Date or an anniversary thereof an ending twelve (12) months thereafter.

      b. Web Site Link. Subject to Section 3(e) below, each Party will establish and maintain a hypertext link (“Link”) on its website to the other Party’s website, and will specify the URL to the other Party in writing at or before the execution of this Agreement. Each Party shall provide to the other Party the necessary graphical and textual material for Links to each URL specified by the other Party as a computer-readable file format. Neither Party shall modify, alter or otherwise change the graphic or textual material provided by the other Party, without prior notice to such Party. Each Party shall notify the other Party in writing of the position and format of each Link prior to the placement of any such Link on such Party’s website. Neither Party shall permit or otherwise allow any third party to link to any URL of the other Party without obtaining such other Party’s prior written consent.

      c. Public Announcements. Any public announcements, postings, or other advertising or public relations activities related to or concerning this Agreement, or the relationship between Nutanix and Partner, must be reviewed and approved in writing by both Parties in advance.

      d. Non-Exclusive. Notwithstanding the foregoing, it is agreed and understood that either Party shall have unrestricted rights to pursue any business opportunity alone or with any third parties. The Parties agree that this Agreement does not authorize or require either Party to sell the other Party’s products. The Parties agree that neither Party shall earn or pay any type of commission or other compensation in connection with sales referrals made under this Agreement.

      e. Trademark.

      i. Trademark License. Subject to the terms and conditions of this Agreement, and during the term of this Agreement: (i) Nutanix grants to Partner a nonexclusive, nontransferable, revocable, limited license to use and display those trademarks, trade names, logos, service marks, service names, and other indicia of origin (“Marks”) provided by Nutanix to Partner under this Agreement for use solely as necessary to perform Partner’s rights and obligations described in this Agreement, as specified in the Program Guidelines, and in connection with any Joint Marketing Plans between the Parties; and (ii) Partner grants to Nutanix a nonexclusive, nontransferable, revocable, limited license to use and display those Marks provided by Partner to Nutanix under this Agreement for use solely as necessary to perform Nutanix’s rights and obligations described in this Agreement, as specified in the Program Guidelines, and in connection with any Joint Marketing Plans between the Parties.

      ii. Usage Guidelines. Each Party shall comply with all reasonable guidelines provided by the other Party in writing concerning the use of the other Party’s Marks, as may be updated by either Party in writing. Nothing in this Agreement shall grant or shall be deemed to grant to one Party any right, title or interest in or to the other Party’s Marks. All use of a Party’s Marks (including any goodwill associated therewith) shall inure to the benefit of that Party. At no time during or after the term of this Agreement shall either Party challenge or assist others to challenge the Marks of the other Party or the registration thereof by the other Party, nor shall either Party attempt to register any Trademarks that are confusingly similar to those of the other Party. Neither Party shall adopt, use, register, make application or attempt to register any acronym, Marks, trade names or other marketing name of the other Party or any confusingly similar mark, URL, Internet domain name, or symbol as part of such Party’s own name or the name of any of its affiliates or the names of any products it markets. Each Party agrees that it will not make any negative, false, or disparaging statements (written or oral) to the other Party’s customers, potential customers, press or analysts about the other Party or other Party’s products, services or technology.

      iii. Termination of License. Either Party may terminate its trademark license if, in its reasonable discretion, the other Party’s use of one or more of its Marks tarnishes, blurs or dilutes the quality associated with the Marks or the associated goodwill.

      <b>4. “Nutanix Ready” Logo Program.</b>
      a. Logo Authorization. Subject to the satisfactory performance of the terms and conditions set forth in Section 3 and this section, Nutanix may, in its sole discretion, grant Partner the right to use the “Nutanix Ready” logo (the “Nutanix Ready Logo”) solely for use in connection with those Partner Products which are approved in writing by Nutanix as “Nutanix Ready” (“Approved Products”), which such right shall be a Mark governed by the Trademark License provisions set forth in Section 33.e) in all respects. Nutanix shall be entitled to withdraw Partner’s right to use the Nutanix Ready Logo immediately upon notice to Partner in the event that Partner fails to comply with the terms of this Agreement, as determined in Nutanix’s sole discretion, including in the event the Approved Product fails to qualify as a Nutanix Ready product at any time.
      b. Product Testing and Validation. In order to submit a Partner Product for validation as an Approved Product under this Agreement, Partner must satisfy each of the following qualification requirements in this Section 4(b).

      i. Technical Contacts. Partner shall designate in writing (or by e-mail) to Nutanix one (1) Partner contact who will serve as the primary technical contact for compliance with the terms and provisions of this Agreement. Partner may change the primary technical contact at any time upon seven (7) days’ prior written notice to Nutanix. Partner shall also designate a secondary technical contact as a backup or alternate contact in the event that the primary technical contact is unavailable.

      ii. Testing and Validation.

      1. Partner shall provide Nutanix with a technology solution enabling or combining such Partner Products with certain Nutanix products (a “Solution”) and submit such Solution to one of the Testing
      methods outlined in the Program Guide, the specific method applicable to the solution to be determined by Nutanix in its sole discretion. Partner shall conduct any required Testing of a Partner Product in accordance with the Nutanix Ready Validation Test Kit Guidelines (the “Guidelines”), and any and all Testing in accordance with such Guidelines shall be conducted at Partner’s sole expense. Partner will deliver the results of such Testing (“Test Results”) to Nutanix promptly after completion of such procedures. Nutanix will evaluate the Test Results and determine, in Nutanix’s sole discretion, if the Partner Product has passed the applicable validation test(s). Nutanix shall at all times have control of the manner and method of the Nutanix Ready Logo Testing requirements and Guidelines, as well as the sole discretion to determine whether the Testing requirements have been met. Nutanix engineers may supervise the execution of tests and interpretation, analysis, and presentation of Test Results, and Partner shall provide such technical support and documentation and respond to such inquiries as Nutanix may reasonably request in connection with the Testing of the Partner Product.

      2. Partner may not use the Nutanix Ready Logo with respect to any given Partner Product unless and until Partner completes the Testing of the applicable Partner Product and Nutanix has verified
      that the Testing requirements have been met for such Partner Product. Prior to identifying a new version of a Partner Product (i.e. major version, minor version, service packs, etc.) available for distribution to the general public as a Nutanix Ready Product, Partner will complete the applicable Testing for the Partner Product, submit the resulting Test Results to Nutanix in accordance with Section 4(b)(ii)(1) above, and obtain Nutanix’s written approval confirming it has passed the Nutanix Ready Logo testing requirements. Nutanix shall be entitled to test each release and version of the Partner Products which Partner deems “Nutanix Ready” to confirm that it is compatible with the Nutanix product(s).

      3. In certain circumstances, as determined by Nutanix in its sole discretion, In the event that it is necessary, as determined by Nutanix in its sole discretion, for Nutanix to have access to and/or loan
      of the Partner Product in order to complete the Testing procedures, Partner shall use commercially reasonable efforts to provide access to and/or loan of such Partner Product to Nutanix at no expense to Nutanix, and Partner grants to Nutanix a nonexclusive, nontransferable, revocable, limited license to complete such Testing procedures as are necessary to validate whether the Partner Product may be deemed Nutanix Ready.

      4. In no event shall any testing configurations, test results, performance metrics or other activities related to any testing or validation procedures, interoperability integration efforts or this
      Agreement be made public without prior written approval from both Parties. c. Support and TSA Net.

      i. Partner must be a member of the Technical Support Alliance Network Mission Critical Customer Support Membership (“TSA Net Membership”) with respect to the Approved Product and comply with all the requirements placed upon such members.

      ii. Subject to each Party’s agreements with Customers, each Party is responsible for supporting their respective products. Partner shall make telephone support available for Customers 24 hours a day, 7 days a week, pursuant to any applicable support policies or support agreements with Partner’s Customer.

      iii. For the purpose of providing Customer support services, Partner will provide Nutanix the same access to its public, non-confidential articles relating to Approved Products, such as knowledge base articles, that Partner has provided or would reasonably provide to other companies involved in distribution and/or support of Partner’s Products.
      iv. Partner shall designate a contact person to serve as the Customer support services point of contact to resolve problems and issues in connection with its Approved Product.

      d. If Nutanix determines, in its sole discretion, that Partner does not meet the Testing requirements with respect to a Partner Product at any time during the Term, Nutanix may immediately terminate Partner’s right to use the Nutanix Ready Logo. No later than five (5) business days after written or e-mail notice from Nutanix of its decision to terminate Partner’s right to use the Nutanix Ready Logo for a Partner Product, Partner shall remove the Nutanix Ready Logo from all documentation, advertising materials, publications, websites and packaging for such Partner Product.

      e. Partner shall not, and shall ensure that its employees and agents will not purport to take on any obligation or responsibility, or make any representations, warranties, guarantees or endorsements to anyone (i) on behalf of Nutanix including relating to Nutanix products, services or technology or (ii) regarding Nutanix’s products, services or technology that are not expressly pre-authorized by Nutanix in writing. Unless mutually agreed by the Parties in writing, Partner shall not use the name of Nutanix, or any of its affiliates, in connection with any advertising or publication without the prior written consent of Nutanix. Except in accordance with the provisions set forth herein, Partner shall not state or imply that any Partner Products have been developed, endorsed, certified, tested, reviewed or otherwise approved by Nutanix.

      <b>5. Partner Technology Programs.</b>
      To the extent that Partner conducts its own technology alliance or technology validation or certification program, Partner shall allow Nutanix to apply for and become a member of such program, provided that Nutanix meets the requirements of such program and, if Nutanix does not, Partner shall use commercially reasonable efforts to help Nutanix meet such requirements.

      <b>6. Technical Training and Personnel. </b>
      To the extent applicable to Partner’s membership tier, (i) Partner will designate a certain number of personnel required to be technically trained by Nutanix on Nutanix products (“Trained Personnel”), and will submit such personnel, at Partner’s own expense, to such technical training at least one (1) time annually at Nutanix’s then-current applicable rates for technical training; and (ii) if any such Trained Personnel cease to be full-time employees of the Partner, Partner shall be required to replace any such Trained Personnel immediately, so that Partner at all times maintains the minimum number of Trained Personnel specified in the Program Guide. Such technical training will be on the date(s) and times and at the location designated by Nutanix. Partner shall be responsible for all expenses relating to such travel expenses, including the cost of transportation, hotels and meals associated with Partner representatives attending the annual training sessions.

      <b>7. Nutanix Partner Network</b>.
      To the extent that the Program Guide indicates that Partner will have the benefit of joining the Nutanix Partner Network (the “NPN”) at its applicable membership tier, Partner will have the right to join the Nutanix Partner Network at such membership level as Nutanix may determine to be appropriate for Partner in its sole discretion, provided that Partner successfully completes the ordinary course partner onboarding process for the NPN and agrees to the terms and conditions applicable to such NPN, including the NPN Terms and Conditions and the NPN Program Guide, as required of all members of the NPN. The NPN Program is separately governed by the NPN Program Guide and the NPN Terms and Conditions, among others, and violation of any of the terms governing the NPN Program Guide shall give Nutanix the right to terminate Partner’s membership in the NPN at its sole discretion in accordance with such terms and conditions, regardless of Partner’s membership in the Program.

      <b>8. NFR Units. </b>
      Partner is eligible to purchase Not for Resale Nutanix hardware products (“NFR Units”) at a special discount. Each purchase of NFR Units and the discount applicable to each such purchase will be subject to Nutanix’s approval at its sole discretion. NFR Units shall be used for Partner’s internal demonstration and laboratory (“Demo/Lab”) use only, and may not be transferred to any third party. NFR Units may not be used in a production environment, including for Partner’s own internal information processing or computing needs, or for the demonstration or support of Partner products that have not been developed or integrated with the Nutanix platform pursuant to this Agreement. NFR Units are subject to the terms of Nutanix’s standard end user license agreement in effect at the time (available at www.nutanix.com/eula), as well as any additional terms and conditions that may accompany the purchase order for such NFR Units. Partner agrees not to dispose of, sell, lease or otherwise transfer NFR Units to another party under any circumstances. Nutanix has the right to demand the return of any NFR Unit in the event of a violation of any of the foregoing terms applicable to NFR Units.

      <b>9. Loan, Testing and Purchase of Nutanix Products</b>.
      At Nutanix’s option and sole discretion, and subject to Partner’s execution of and compliance with Nutanix’s partner product loan agreement, Nutanix may loan certain Nutanix products to Partner to be used either in connection with Partner’s demonstrations to potential purchasers of Partner or Nutanix products or by Partner for interoperability of Partner products with Nutanix products. The purpose of the loan shall be set forth in the partner product loan agreement, and Partner’s authorized use of the Nutanix product shall be limited to the purpose set forth in such agreement.

      10. Program Fees. Unless otherwise mutually agreed, Partner shall pay Nutanix the annual program fee then in effect for Partner’s tier of membership in the Program, as set forth in the Program Guide. For each renewal of this Agreement, Partner shall pay Nutanix any applicable Program Fee set forth in the Program Guide. All payments due hereunder to Nutanix shall be paid to Nutanix in U.S. dollars on or before the Effective Date and are non-refundable. All amounts payable by Partner are payable in full without offset or deduction for taxes (including any withholding tax) or customs duties. Partner shall be responsible for and shall pay any sales, use, value-added and similar transaction taxes and customs duties paid or payable, however designated, levied, or based on amounts payable by Partner hereunder.

      <b>11. Confidentiality.</b>
      a. “Confidential Information” means, with respect to either Party, all confidential and proprietary information of that Party including documents, data, reports, know-how and other information or data related to the past, current or proposed operations, products, marketing, technology, services and business of such Party disclosed or otherwise made available by such Party (“Discloser”) to the other Party in connection with this Agreement or a Joint Marketing Plan, including lists of customers and prospects, customer requirements, the content of specific sales proposals, quota and compensation of sales personnel, product roadmaps and pricing information, whether disclosed before or during the term hereof. Notwithstanding the foregoing, the term “Confidential Information” does not include and no duty of confidentiality shall apply to information or data that the Party receiving such information (“Recipient”) can show by credible evidence: (a) was in the public domain at the time it was disclosed or has entered the public domain through no fault of Recipient; (b) was known to Recipient, without restriction, at the time of disclosure, as demonstrated by files in existence at the time of disclosure; (c) becomes known to Recipient, without restriction from a source other than Discloser without breach of this Agreement by Recipient and otherwise not in violation of Discloser’s rights; or (d) is disclosed with the prior written approval of Discloser.

      b. Restrictions on Use and Disclosure. Recipient shall not use the Confidential Information of Discloser for any purpose other than as necessary to fulfill Recipient’s obligations or exercise its rights under this Agreement. Recipient shall not disclose or permit disclosure of any Confidential Information of Discloser to third parties or to employees of Recipient, other than directors, officers, employees, consultants and agents of Recipient who are required to have the information in order to carry out Recipient’s obligations under this Agreement. Recipient agrees that it shall take reasonable measures to protect the secrecy of and avoid disclosure or use of Confidential Information of Discloser in order to prevent it from falling into the public domain or the possession of persons other than those persons authorized under this Agreement to have any such information. Such measures shall include the degree of care that Recipient utilizes to protect its own Confidential Information of a similar nature. Recipient shall immediately notify Discloser in the event any Confidential Information is used or disclosed in violation of this section, and will cooperate with Discloser in every reasonable way to regain possession of Confidential Information and prevent any further unauthorized use.

      c. Legal Obligation to Disclose. Notwithstanding anything contained herein to the contrary, Recipient may disclose Discloser’s Confidential Information pursuant to an order of a court of competent jurisdiction or as otherwise required by applicable law, but only to the extent so required. Under such circumstances, then, prior to such disclosure, Recipient will (i) notify Discloser prior to such disclosure to allow Discloser an opportunity to contest the disclosure, (ii) assert the privileged and confidential nature of the Confidential Information, and (iii) reasonably cooperate with Discloser in protecting against any such disclosure and/or obtaining a protective order narrowing the scope of such disclosure and/or use of the Confidential Information.

      d. Injunctive Relief. Due to the unique nature of Discloser’s Confidential Information, monetary damages would be inadequate to compensate Discloser for any breach by Recipient of its covenants and agreements set forth in this Section 11. Accordingly, the Parties each agree and acknowledge that any such violation or threatened violation may cause irreparable injury to Discloser and, in addition to any other remedies that may be available, in law, in equity or otherwise, Discloser shall be entitled to obtain injunctive relief against the threatened breach of this Section 11 or the continuation of any such breach by Recipient.

      <b>12. Non-Exclusive. </b>
      Partner acknowledges and agrees that the rights granted hereunder are non-exclusive, and that either Party is free to enter into similar agreements and/or arrangements with third parties.

      <b>13. No Reliance. </b>
      Partner agrees and acknowledges that any decisions it has made or may make to join the Program, execute this Agreement or any Joint Marketing Plans and/or to purchase NFR Units are not and will not be based upon, nor rely on, Product Road Map information. “Product Road Map” is information related to Nutanix development and plans for and availability of future products, features or enhancements. Product Road Map information is subject to change at any time, without notice, thus Nutanix provides no assurances, and assumes no responsibility that future products, features or enhancements will be introduced.

      <b>14. Intellectual Property.</b>
      Each Party retains ownership of all intellectual property rights arising from modifications it makes to its products for the purpose of facilitating interoperability under this Agreement. Such modifications by one party shall not be treated as a work made for hire by the other party. Nothing in this Agreementrepresents a conveyance, transfer, assignment, or license (except for those licenses expressly stated in this Agreement), of any preexisting intellectual property rights from one party to the other.

      15. DISCLAIMER OF WARRANTY. ANY PRODUCTS, SOFTWARE, MATERIALS OR INFORMATION PROVIDED BY NUTANIX AS PART OF A TESTING PROCEDURE, OR OTHERWISE UNDER OR IN CONNECTION WITH THE PROGRAM OR THIS AGREEMENT ARE PROVIDED “AS IS”, AND NUTANIX DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, AS TO ANY MATTER WHATSOEVER, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OF REASONABLE CARE OR WORKMANLIKE EFFORT, OF RESULTS, OF LACK OF NEGLIGENCE, OR OF ACCURACY OR COMPLETENESS OF RESPONSES. THERE IS NO WARRANTY OF NONINFRINGEMENT OR TITLE WITH RESPECT TO SUCH SOFTWARE, MATERIALS AND INFORMATION.

      16. LIMITATION OF LIABILITY. EXCEPT FOR BREACHES OF SECTIONS 3.e) (TRADEMARK) AND 11 (CONFIDENTIALITY), (A) IN NO EVENT WILL EITHER PARTY BE LIABLE TO THE OTHER OR ANY THIRD PARTY FOR ANY LOST PROFITS OR LOST DATA OR FOR ANY SPECIAL, INCIDENTAL, INDIRECT, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT (WHETHER FROM BREACH OF CONTRACT OR WARRANTY, FROM NEGLIGENCE, STRICT LIABILITY OR OTHER CAUSE OF ACTION), EVEN IF EITHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND (B) IN NO EVENT WILL EITHER PARTY’S AGGREGATE LIABILITY RELATED TO THIS AGREEMENT EXCEED THE AGGREGATE AMOUNT OF PROGRAM FEES PAID HEREUNDER. THE FOREGOING LIMITATIONS ARE CUMULATIVE WITH ALL PAYMENTS BEING AGGREGATED TO DETERMINE SATISFACTION OF THE LIMITS. THE EXISTENCE OF ONE OR MORE CLAIMS WILL NOT ENLARGE THE LIMITS.

      <b>17. Term and Termination.</b>
      a. Term. The initial term of this Agreement (“Initial Term”) commences as of the Effective Date and continues for one (1) year, unless terminated earlier in accordance with this Agreement. Following the expiration of the Initial Term, this Agreement will automatically extend for additional periods of one (1) year (“Renewal Term”).

      b. Termination for Convenience. At any time after the first twelve (12) months of the Term, either Party may terminate this Agreement upon thirty (30) days written notice to the other Party.

      c. Termination for Breach. Either Party may terminate this Agreement immediately upon written notice at any time if the other Party (i) is in material breach of any material warranty, term, condition or covenant of this Agreement and fails to cure that breach within thirty (30) days after written notice thereof, (ii) fails to meet the requirements for the applicable tier of membership as set forth in the Program Guide (in the case of Nutanix’s right to terminate), or (iii) is in breach of Section 11 or assigns or transfers this Agreement in breach of Section 18.

      d. Termination of Joint Marketing Plans. Notwithstanding the foregoing, unless otherwise provided in the applicable Joint Marketing Plan, either Party may terminate a Joint Marketing Plan for convenience and without liability by giving the other Party thirty (30) days’ notice of termination. Termination of a Joint Marketing Plan will have no effect on the term of the Agreement.

      e. Effect of Termination. Immediately upon the expiration or termination of this Agreement for any reason, (i) all rights and licenses granted under this Agreement will terminate, (ii) Partner and Nutanix will immediately cease all use of the other Party’s Marks; and (iii) each Party will (a) return or confirm destruction of all copies of the other Party’s marketing materials; and (b) return or confirm destruction of all Confidential Information of the other Party provided under this Agreement, including all notes, files, and computer programs embodying such Confidential Information; provided, however, that each Party may retain a file copy of thisAgreement and any Joint Marketing Plan. Sections 4.e), 11, 12, 13, 14, 15, 16, 17(e), and 18 will survive the expiration or termination of this Agreement for any reason, together with any other provision where survival is required for its interpretation or enforcement.

      f. Remedies. The remedies set forth in this Agreement are cumulative and will not exclude any other remedies to which a party may be entitled under this Agreement or at law or in equity (subject to the limitations on liability in Section 16).

      <b>18. Miscellaneous. </b>
      This Agreement, including any exhibits attached hereto, constitutes the entire agreement between the Parties and supersedes all previous agreements, oral or written, with respect to the subject matter of this Agreement. This Agreement may not be amended without the prior written consent of both Parties. Neither Party may assign or delegate or otherwise transfer its licenses, rights or duties under this Agreement (other than in connection with a merger, change of control or a sale of all or substantially all of such Party’s assets), or any portion thereof, without the other Party’s prior written consent. Any permitted assignment of this Agreement shall be binding upon and enforceable by and against the Parties’ successors and assigns, provided that any unauthorized assignment shall be null and void and constitute a breach of this Agreement. This Agreement shall be governed by and interpreted in accordance with the laws of the state of California without giving effect to its conflicts of law rules, and the parties agree that jurisdiction for any claim or dispute arising from or related to this Agreement resides in the federal and state courts situated in Santa Clara County, California. This Agreement shall not be governed by the United Nations Convention on Contracts for the International Sale of Goods. A waiver by either Party of any term or condition of this Agreement or any breach thereof, in any one instance, shall not waive such term or condition or any subsequent breach thereof. If any provision of this Agreement is held invalid or unenforceable, it shall be replaced with the valid provision that most closely reflects the intent of the Parties and the remaining provisions of the Agreement will remain in full force and effect. This Agreement will not be construed more strictly against either Party as a result of its participation in its preparation. This Agreement may be executed in any number of counterparts, all of which taken together constitute a single instrument.
    </p>
    <div class='agreement-footer'>
      <p style='margin-top:10px'>Company Name: Nutanix
      Your Name: John Torres
      Date: 4/22/2018</p><hr>
      <p> <input type='checkbox' id='agreed'/> BY CHECKING THIS BOX YOU (A) REPRESENT THAT YOU HAVE THE LEGAL CAPACITY AND AUTHORITY TO BIND YOURSELF AND/OR THE PERSON OR ENTITY FOR WHOM YOU ARE ENTERING INTO THIS AGREEMENT; (B) REPRESENT THAT YOU HAVE READ AND UNDERSTAND THIS AGREEMENT; AND (C) AGREE TO BE BOUND BY THIS AGREEMENT.</p>
    </div>
  </div>`
const confirm = `
  <h2> We have received your application </h2>
  <p>
    One of our technology alliance representatives will be in touch with you within 72 hours. </br> In the meantime, take a few moments to go through our program resources.
  </p>
  <div class=video></div>


  <a class='module-parent'
    href="https://www.nutanix.com/elevate/Nutanix%20Elevate%20Program%20Agreement%20Oct%202016.pdf">
    <div class='module'>
      <h3> Elevate technology Alliance </h3>
      <p class='alt'>  Program Guide - PDF document</p>
    </div></a>
  <hr>

  <a class='module-parent'
    href="https://www.nutanix.com/elevate/Nutanix%20Elevate%20Program%20Agreement%20Oct%202016.pdf">
    <div class='module'>
      <h3> Nutanix Ready Guide </h3>
      <p class='alt'> 7 minutes Video</p>
    </div></a>
  <hr>

  <a class='module-parent'
    href="https://www.nutanix.com/elevate/Nutanix%20Elevate%20Program%20Agreement%20Oct%202016.pdf">
    <div class='module'>
      <h3> Terms and conditions</h3>
      <p class='alt'> Pdf document</p>
    </div></a>
`
