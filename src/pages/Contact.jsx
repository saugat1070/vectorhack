import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { contactsData } from "../data";
import {
  PersonIcon,
  PhoneIcon,
  EmailIcon,
  LocationIcon,
  CheckIcon,
  ArrowLeftIcon,
} from "../components/Icons";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Contact Hero */}
      <section className="py-37.5 pb-12.5 text-center">
        <div className="mx-auto max-w-300 px-5">
          <h1 className="mb-4 text-center text-[clamp(2rem,5vw,3rem)] font-bold font-['Space_Grotesk',Inter,sans-serif] bg-[linear-gradient(135deg,#4aacd3_0%,#ffdf42_50%,#513c97_100%)] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mx-auto mb-12 max-w-150 text-center text-[1.1rem] text-[#535353]">
            Have questions or facing issues? Reach out to our coordinators.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-15 pt-0 sm:py-25">
        <div className="mx-auto max-w-300 px-5">
          <div className="mb-16 grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {contactsData.map((contact) => (
              <div
                className="rounded-[20px] border border-[#2a2a3a] bg-[#12121a] p-10 text-center transition duration-300 hover:-translate-y-1 hover:border-[#4aacd3]"
                key={contact.id}
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] text-white">
                  <PersonIcon size={48} />
                </div>
                <h3 className="mb-2 text-[1.3rem] font-semibold">
                  {contact.name}
                </h3>
                <p className="mb-6 text-[0.95rem] text-[#4aacd3]">
                  {contact.role}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:+977${contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#2a2a3a] bg-[#0a0a0f] px-5 py-3 text-white transition duration-300 hover:border-[#4aacd3] hover:text-[#4aacd3]"
                  >
                    <PhoneIcon size={20} className="text-[#4aacd3]" />
                    <span>{contact.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-12 rounded-[20px] border border-[#2a2a3a] bg-[#12121a] p-12">
            <h2 className="mb-8 text-center text-[1.5rem] text-[#4aacd3]">
              General Inquiries
            </h2>
            <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
              <div className="flex items-start gap-4">
                <EmailIcon size={24} className="text-[#4aacd3]" />
                <div>
                  <h4 className="mb-1 text-[0.9rem] text-[#535353]">Email</h4>
                  <a
                    href="mailto:ices@wrc.edu.np"
                    className="text-white transition duration-200 hover:text-[#4aacd3]"
                  >
                    ices@wrc.edu.np
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LocationIcon size={24} className="text-[#4aacd3]" />
                <div>
                  <h4 className="mb-1 text-[0.9rem] text-[#535353]">Venue</h4>
                  <p className="text-white">IOE, WRC, Pokhara, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckIcon size={24} className="text-[#4aacd3]" />
                <div>
                  <h4 className="mb-1 text-[0.9rem] text-[#535353]">
                    Registration
                  </h4>
                  <a
                    href="https://bit.ly/vectorhack2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition duration-200 hover:text-[#4aacd3]"
                  >
                    bit.ly/vectorhack2026
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-[10px] border-2 border-[#2a2a3a] px-8 py-3.5 text-base font-semibold text-white transition duration-300 hover:border-[#4aacd3] hover:text-[#4aacd3]"
            >
              <ArrowLeftIcon size={20} />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
