"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  CalendarDays,
  UserRound,
  List,
  Pencil,
  Send,
  ExternalLink,
  MapPin,
  BriefcaseBusiness,
  Clock3,
  Info
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

// Update with your own details.
const CONTACT_EMAIL = "leonardojasonnunez122@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/jleo8/";
const GITHUB_URL = "https://github.com/johnkinn122";

// Paste your Calendly 30-minute event link here.
const CALENDLY_URL = "https://calendly.com/leonardojasonnunez122/30min";

type ContactMode = "message" | "meeting";

const inputStyle =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900";

export default function Contact() {
  const [mode, setMode] = useState<ContactMode>("message");
  const [subject, setSubject] = useState("");
  const [contactMethod, setContactMethod] = useState("Email");

  function changeMode(nextMode: ContactMode) {
    setMode(nextMode);

    setSubject(
      nextMode === "meeting" ? "Meeting Request" : ""
    );

    document.getElementById("contact-panel")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const getValue = (name: string) =>
      String(formData.get(name) ?? "").trim();

    const contactMethods = formData
      .getAll("contactMethod")
      .join(", ");

    const emailBody = [
      `Name: ${getValue("fullName")}`,
      `Email: ${getValue("email")}`,
      `Phone: ${getValue("phone") || "Not provided"}`,
      `Contact Method: ${contactMethods || "Not specified"}`,
      `Preferred Date: ${getValue("date") || "Not specified"}`,
      `Preferred Time: ${getValue("time") || "Not specified"}`,
      "",
      "Message:",
      getValue("message"),
    ].join("\n");

    const mailtoLink =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-5 py-0 text-zinc-900"
    >
      
          
<div className="mx-auto w-full max-w-3xl lg:pl-8">

        {/* HEADER */}
        <div className="border-t border-zinc-200 pt-6">
          <div className="flex items-center justify-between gap-6">
            <div>
              <header className="mb-8">
          <p className="flex items-center gap-2 text-xs font-bold tracking-widest text-zinc-900">
            < Mail size={18} aria-hidden="true" />
            CONTACT
          </p>
        </header>

              <h2
                id="contact-heading"
                className="mt-3 font-serif text-3xl font-bold"
              >
                Get in Touch
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600">
                {mode === "message"
                  ? "Have a project, opportunity, or collaboration in mind? I'd love to hear from you. You can send me a message or book a meeting at a time that works for you."
                  : "Choose how you'd like to connect. Send a message or book a meeting."}
              </p>
            </div>

          </div>

          {/* MODE SWITCH BUTTONS */}
          
        {/* MODE SWITCH BUTTONS */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[180px_180px_minmax(0,1fr)] lg:items-center">

          {/* Send a Message */}
          <button
            type="button"
            onClick={() => changeMode("message")}
            aria-pressed={mode === "message"}
            className={`flex min-h-11 items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold transition ${
              mode === "message"
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100"
            }`}
          >
            <Mail size={16} />
            Send a Message
          </button>

          {/* Book a Meeting */}
          <button
            type="button"
            onClick={() => changeMode("meeting")}
            aria-pressed={mode === "meeting"}
            className={`flex min-h-11 items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-semibold transition ${
              mode === "meeting"
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100"
            }`}
          >
            <CalendarDays size={16} />
            Book a Meeting
          </button>

          {/* Short Description */}
          <p className="text-xs leading-5 text-zinc-600 sm:col-span-2 lg:col-span-1 lg:border-l lg:border-zinc-300 lg:pl-4">
            Recruiters or clients can choose which ever option works best.
          </p>

        </div>

        </div>

        {/* CONTENT */}
        
            <div
              id="contact-panel"
              className={`mt-8 pb-10 grid scroll-mt-6 items-start gap-3 ${
                mode === "meeting"
                  ? "grid-cols-1 xl:grid-cols-[minmax(0,1fr)_260px]"
                  : "grid-cols-1 lg:grid-cols-[1.2fr_1fr]"
              }`}
            >

          {/* LEFT COLUMN */}
          {mode === "message" ? (

            // SEND MESSAGE VIEW
            <div className="min-w-0 rounded-xl border border-zinc-200 bg-white p-5">
              <div className="mb-6 flex items-start gap-4">
                <div className="rounded-xl bg-zinc-100 p-3">
                  <Mail size={27} />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold">
                    Send a Message
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-zinc-600">
                    Complete the form with your details and message.
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Full Name *
                  </label>

                  <div className="relative">
                    <UserRound
                      size={17}
                      aria-hidden="true"
                      className="absolute left-3 top-3 text-zinc-600"
                    />

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={`${inputStyle} pl-10`}
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Email Address *
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      aria-hidden="true"
                      className="absolute left-3 top-3 text-zinc-600"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="your.email@example.com"
                      className={`${inputStyle} pl-10`}
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Subject *
                  </label>

                  <div className="relative">
                    <List
                      size={17}
                      aria-hidden="true"
                      className="absolute left-3 top-3 text-zinc-600"
                    />

                    <select
                      id="subject"
                      name="subject"
                      required
                      value={subject}
                      onChange={(event) =>
                        setSubject(event.target.value)
                      }
                      className={`${inputStyle} pl-10`}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="Job Opportunity">
                        Job Opportunity
                      </option>
                      <option value="Project Collaboration">
                        Project Collaboration
                      </option>
                      <option value="Freelance Inquiry">
                        Freelance Inquiry
                      </option>
                      <option value="General Inquiry">
                        General Inquiry
                      </option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Message *
                  </label>

                  <div className="relative">
                    <Pencil
                      size={17}
                      aria-hidden="true"
                      className="absolute left-3 top-3 text-zinc-600"
                    />

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or request..."
                      className={`${inputStyle} resize-y pl-10`}
                    />
                  </div>
                </div>

                
                  {/* CONTACT METHOD */}
                  <fieldset>
                    <legend className="mb-3 text-xs font-semibold">
                      Preferred Contact Method
                    </legend>

                    <div className="grid grid-cols-3 gap-2">
                      {["Email", "WhatsApp", "Google Meet"].map((method) => (
                        <label
                          key={method}
                          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-zinc-200 p-2 text-xs"
                        >
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            defaultChecked={method === "Email"}
                            onChange={() => setContactMethod(method)}
                            className="accent-zinc-900"
                          />

                          {method}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                      {/* EMAIL OPTION */}
                      {contactMethod === "Email" && (
                        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                          <div className="flex items-start gap-3">
                            <Mail size={20} className="shrink-0 text-zinc-900" />

                            <div>
                              <h4 className="text-sm font-semibold text-zinc-900">
                                Contact via Email
                              </h4>

                              <p className="mt-1 text-xs leading-5 text-zinc-600">
                                We&apos;ll use the email address you provided above
                                to get back to you about your inquiry.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                
                    
                      {/* WHATSAPP OPTION */}
                      {contactMethod === "WhatsApp" && (
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="whatsappCountry"
                              className="mb-2 block text-xs font-semibold"
                            >
                              Country *
                            </label>

                            <select
                              id="whatsappCountry"
                              name="whatsappCountry"
                              required
                              defaultValue=""
                              className={inputStyle}
                            >
                              <option value="" disabled>
                                Select your country
                              </option>
                              <option value="Philippines">🇵🇭 Philippines (+63)</option>
                              <option value="United States">🇺🇸 United States (+1)</option>
                              <option value="Canada">🇨🇦 Canada (+1)</option>
                              <option value="United Kingdom">🇬🇧 United Kingdom (+44)</option>
                              <option value="Australia">🇦🇺 Australia (+61)</option>
                              <option value="Singapore">🇸🇬 Singapore (+65)</option>
                              <option value="India">🇮🇳 India (+91)</option>
                              <option value="Other">Other country</option>
                            </select>
                          </div>

                          <div>
                            <label
                              htmlFor="whatsapp"
                              className="mb-2 block text-xs font-semibold"
                            >
                              WhatsApp Number *
                            </label>

                            <input
                              id="whatsapp"
                              name="whatsapp"
                              type="tel"
                              autoComplete="tel"
                              required
                              placeholder="e.g. +1 415 555 0123"
                              className={inputStyle}
                            />

                            <p className="mt-2 text-xs text-zinc-500">
                              Please include your international country code,
                              such as +63 for the Philippines or +1 for the USA.
                            </p>
                          </div>
                        </div>
                      )}

                  {/* GOOGLE MEET OPTION */}
                  {contactMethod === "Google Meet" && (
                    <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                      <div className="flex items-start gap-3">
                        <CalendarDays
                          size={20}
                          className="mt-0.5 shrink-0 text-zinc-900"
                        />

                        <div>
                          <h4 className="text-sm font-semibold text-zinc-900">
                            Schedule a Google Meet
                          </h4>

                          <p className="mt-1 text-xs leading-5 text-zinc-600">
                            Prefer a video call? Choose an available
                            date and time for a 30-minute meeting.
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => changeMode("meeting")}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                      >
                        <CalendarDays size={17} />
                        Book a Google Meet
                      </button>
                    </div>
                  )}


                {/* DATE & TIME */}
                <div>
                  <p className="mb-3 text-xs font-semibold">
                    Preferred Date & Time (Optional)
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label htmlFor="date" className="sr-only">
                        Preferred date
                      </label>

                      <input
                        id="date"
                        name="date"
                        type="date"
                        className={inputStyle}
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="sr-only">
                        Preferred time
                      </label>

                      <input
                        id="time"
                        name="time"
                        type="time"
                        className={inputStyle}
                      />
                    </div>
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-lg bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>

          ) : (

            // BOOK A MEETING VIEW
            <div className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4">
              <h3 className="font-serif text-2xl font-bold">
                Select a Date & Time
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Pick an available date and time for a
                30-minute conversation.
              </p>

              
              
              <div className="mt-5 w-full overflow-hidden rounded-lg">
                <iframe
                  title="Book a 30-minute meeting"
                  src={`${CALENDLY_URL}${
                    CALENDLY_URL.includes("?") ? "&" : "?"
                  }hide_event_type_details=1`}
                  loading="lazy"
                  className="block h-[640px] w-full border-0"
                />
              </div>


            </div>
          )}

          {/* RIGHT COLUMN */}
          <div className="min-w-0 space-y-5">

            {/* CONTACT LINKS */}
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <h3 className="font-serif text-xl font-bold">
                Other Ways to Reach Me
              </h3>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Feel free to connect with me directly
                through these channels.
              </p>

              <div className="mt-4 space-y-2">

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 p-3 transition hover:bg-zinc-50"
                >
                  <Mail size={21} />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      Email
                    </p>
                    <p className="truncate text-xs text-zinc-600">
                      {CONTACT_EMAIL}
                    </p>
                  </div>

                  <ExternalLink size={15} />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 p-3 transition hover:bg-zinc-50"
                >
                  <FaLinkedin size={21} />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      LinkedIn
                    </p>
                    <p className="truncate text-xs text-zinc-600">
                      View my LinkedIn profile
                    </p>
                  </div>

                  <ExternalLink size={15} />
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 p-3 transition hover:bg-zinc-50"
                >
                  <FaGithub size={21} />

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold">
                      GitHub
                    </p>
                    <p className="truncate text-xs text-zinc-600">
                      View my GitHub projects
                    </p>
                  </div>

                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* QUICK INFO */}
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <h3 className="font-serif text-xl font-bold">
                Quick Info
              </h3>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <MapPin size={20} className="shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">
                      Location
                    </p>
                    <p className="text-xs text-zinc-600">
                      Philippines
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <BriefcaseBusiness
                    size={20}
                    className="shrink-0"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Availability
                    </p>
                    <p className="text-xs leading-5 text-zinc-600">
                      Open to full-time, contract, or
                      freelance opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock3 size={20} className="shrink-0" />

                  <div>
                    <p className="text-sm font-semibold">
                      Response Time
                    </p>
                    <p className="text-xs text-zinc-600">
                      Usually within 1 business day
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 rounded-lg bg-zinc-100 p-3 text-xs leading-5 text-zinc-600">
                  <Info size={17} className="shrink-0" />

                  <p>
                    For job opportunities, please include
                    the role title, key requirements,
                    and preferred timeline in your message.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
