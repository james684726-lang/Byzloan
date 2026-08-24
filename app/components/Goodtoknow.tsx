import { ChevronDown, Phone } from "lucide-react";
import React, { useState } from "react";

function Goodtoknow() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    [
      "Is My Credit Pulled?",
      "When you submit a funding request, ByzLoan may share your pre‑qualification request (including your authorization for credit checks) with funding partners who could obtain information from credit bureaus as part of the pre‑qualification process. This may include credit inquiries depending on the lender involved.",
    ],
    [
      "How Do I Qualify?",
      "Eligibility depends on the type of financing you’re applying for. Generally, you must have a business that meets certain criteria (for example, at least 6 months in business for many products). Qualification is reviewed based on your business profile, financials, and funding partner underwriting.",
    ],
    [
      "How Fast Will I Be Funded?",
       "Once you apply and select an offer, many applicants receive funding quickly. Approval and funding often happen within 24 to 48 hours. Timing varies by product and underwriting.",
    ],
    [
      "Can I Get Funded Twice?",
      "If you successfully complete one funding and your business still meets qualification criteria afterward, you may be able to seek additional funding or lines of credit again. Approval is subject to the lender or funding partner.",
    ],
    [
      "Do I Need Bank Statements?",
      "Some types of funding require proof of financial history such as bank account information as part of the qualification process. The exact documentation depends on the product and underwriting partner"   
     ],

      [ "How Long Has ByzLoan Existed?",
      "The ByzLoan website has been active since 2018. The company has been providing business funding solutions for multiple years." 
       ],
      [
      "Can I Speak Directly With Someone?",
      "Yes. You can contact a loan specialist directly for help or questions.  Visit our contact page HERE to get in touch with us!"
  ]
  ]
  return (
    <>
      <section
        id="faq"
        className="bg-[#089DC8] py-20 text-white lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
          <div>
            <p className="eyebrow">Good to know</p>
            <h2 className="section-title">
              Questions?
              <br />
              <span className="text-brand-coral">We&apos;ve got answers.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-brand-ink/60">
              Still curious? Our team is ready to help.
            </p>
            <a
              href="tel:18005550199"
              className="mt-6 inline-flex items-center gap-2 font-bold hover:text-brand-coral"
            >
              <Phone className="size-4" /> Talk to our team
            </a>
          </div>
          <div className="divide-y divide-brand-ink/15">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="py-5 first:pt-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 text-left text-lg font-bold"
                  aria-expanded={openFaq === index}
                >
                  {question}
                  <ChevronDown
                    className={`size-5 shrink-0 transition ${openFaq === index ? "rotate-180 text-brand-coral" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <p className="max-w-2xl pt-4 leading-7 text-white/60">
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Goodtoknow;
