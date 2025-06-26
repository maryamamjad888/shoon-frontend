"use client"

import { useEffect, useState } from "react"

export default function ContactPage() {
  const [captcha, setCaptcha] = useState("")
  const [inputCaptcha, setInputCaptcha] = useState("")
  const [error, setError] = useState("")
  const [touched, setTouched] = useState<any>({})

  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    telephone: "",
    message: "",
    captcha: "",
  })

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
    let result = ""
    for (let i = 0; i < 5; i++) {
      result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
  }

  useEffect(() => {
    setCaptcha(generateCaptcha())
  }, [])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e: any) => {
    const { name } = e.target
    setTouched((prev: any) => ({ ...prev, [name]: true }))
  }

  const isValid = (name: keyof typeof formData) => {
    if (!touched[name]) return null
    if (formData[name]?.trim()) return "valid"
    return "invalid"
  }

  const renderStatusIcon = (name: keyof typeof formData) => {
    if (!touched[name]) return null
    return isValid(name) === "valid" ? (
      <img src="/validation-tick.svg" alt="Valid" className="w-5 h-5 ml-2" />
    ) : (
      <img src="/validation-warning.svg" alt="Error" className="w-5 h-5 ml-2" />
    )
  }

  const renderErrorText = (name: keyof typeof formData, label: string) => {
    return isValid(name) === "invalid" ? (
      <div className="text-white bg-red-600 px-2 py-1 mt-1 text-sm rounded w-[97%] lg:w-[95%]">
        {label} required
      </div>
    ) : null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputCaptcha !== captcha) {
      setError("Captcha does not match. Please try again.")
      setCaptcha(generateCaptcha())
      setInputCaptcha("")
      return
    }
    setError("")
    alert("Form submitted successfully!")
  }

  return (
    <>
      <div className="content-container py-10">
        <h1 className="cormorant text-3xl font-semibold mb-6 text-center">
          Contact Us
        </h1>
        <h1 className="cormorant text-3xl font-semibold mb-6 text-center">
          We're Here To Help
        </h1>
        <p className="f-12 lato text-sm text-gray-500 font-medium">
          Thank you for your patience
        </p>

        <h2 className="f-16 lato py-4 text-2xl font-semibold text-black">
          General Queries
        </h2>
        <p className="f-12 lato text-base text-black leading-relaxed">
          If you require further assistance, please contact us via any of the
          following methods or by using the contact form below.
        </p>

        <p className="py-4 text-base">
          <span className="f-13 lato font-semibold text-gray-500">
            By Email:{" "}
          </span>
          <a
            href="mailto:customerservices@modainpelle.com"
            className="f-12 lato text-black hover:underline"
          >
            customerservices@modainpelle.com
          </a>
        </p>

        <h4 className="f-12 lato text-lg font-semibold text-black">
          By Live Chat
        </h4>
        <h4 className="f-12 lato text-lg font-semibold text-black">
          Customer Service Hours
        </h4>
        <h4 className="f-12 text-lg lato font-semibold text-black">
          Opening Times for Customer Services:
        </h4>

        <ul className="contact-ul f-12 lato list-inside space-y-1 text-black">
          <li>Monday - Thursday: 8am - 6pm</li>
          <li>Friday: 8.30am - 5pm</li>
          <li>Saturday & Sunday: Closed</li>
        </ul>

        <p className="f-12 py-4 text-base lato text-black leading-relaxed">
          We'll aim to get back to you via email within 1-4 working days. If
          you're emailing about a damaged or faulty item, please include images
          of the damage and your order number so we can respond quickly.
        </p>
      </div>

      <div className="lato f-13 text-gray-500 content-container py-10">
        <form onSubmit={handleSubmit} className="lato space-y-6">
          {/* Subject */}
          <div className="w-full lg:w-[50%]">
            <div className="flex items-center">
              <div className="w-full lg:w-[70%] relative">
                <label className="block font-medium mb-1">Subject</label>
                <div className="relative flex items-center">
                  <select
                    name="subject"
                    required
                    value={formData.subject || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full border px-3 py-2 rounded bg-gray-100 ${
                      isValid("subject") === "invalid" ? "border-red-500" : ""
                    }`}
                  >
                    <option value="I am having problems with your website">
                      I am having problems with your website
                    </option>
                    <option value="I would like a stock enquiry">
                      I would like a stock enquiry
                    </option>
                    <option value="I have a discount or promotion enquiry">
                      I have a discount or promotion enquiry
                    </option>
                    <option value="I want to cancel or amend my order">
                      I want to cancel or amend my order
                    </option>
                    <option value="Can you remind me of your delivery times and options?">
                      Can you remind me of your delivery times and options?
                    </option>
                    <option value="My order is late">My order is late</option>
                    <option value="I have received a faulty item">
                      I have received a faulty item
                    </option>
                    <option value="I have had an incorrect item delivered">
                      I have had an incorrect item delivered
                    </option>
                    <option value="There is an item missing from my order">
                      There is an item missing from my order
                    </option>
                    <option value="How do I return an item to Moda In Pelle?">
                      How do I return an item to Moda In Pelle?
                    </option>
                    <option value="I want to leave feedback">
                      I want to leave feedback
                    </option>
                  </select>
                  <span className="ml-2 text-red-700">*</span>
                  {renderStatusIcon("subject" as keyof typeof formData)}
                </div>
                {renderErrorText("subject" as keyof typeof formData, "Subject")}
              </div>
            </div>
          </div>

          {/* Fields */}
          {[
            { label: "Your Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Telephone", name: "telephone", type: "tel" },
          ].map((field) => (
            <div className="w-full lg:w-[50%]" key={field.name}>
              <div className="flex items-center">
                <div className="w-full lg:w-[70%] relative">
                  <label className="block font-medium mb-1">
                    {field.label}
                  </label>
                  <div className="relative flex items-center">
                    <input
                      name={field.name}
                      type={field.type}
                      required={field.name !== "telephone"}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`border px-3 py-2 rounded w-full bg-gray-100 ${
                        isValid(field.name as keyof typeof formData) ===
                        "invalid"
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                  <span className="ml-2 text-red-700">*</span>
                    {renderStatusIcon(field.name as keyof typeof formData)}
                  </div>
                  {renderErrorText(
                    field.name as keyof typeof formData,
                    field.label
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Message */}
          <div className="w-full lg:w-[50%]">
            <div className="flex items-center">
              <div className="w-full lg:w-[70%] relative">
                <label className="block font-medium mb-1">Message</label>
                <div className="relative flex items-center">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full border px-3 py-2 rounded bg-gray-100 ${
                      isValid("message") === "invalid" ? "border-red-500" : ""
                    }`}
                  />
                  <span className="ml-2 text-red-700">*</span>
                  {renderStatusIcon("message")}
                </div>
                {renderErrorText("message", "Message")}
              </div>
            </div>
          </div>

          {/* CAPTCHA */}
          <div className="w-full lg:w-[50%]">
            <div className="flex items-center">
              <div className="w-full lg:w-[70%] relative">
                <label className="block font-medium mb-1">Characters</label>

                {/* Captcha Display Box */}
                <div className="bg-black text-green-400 text-xl px-5 py-2 font-mono tracking-widest rounded select-none mb-2">
                  {captcha}
                </div>

                {/* Input + Validation Icon */}
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="captcha"
                    value={inputCaptcha}
                    onChange={(e) =>
                      setInputCaptcha(e.target.value.toUpperCase())
                    }
                    onBlur={handleBlur}
                    required
                    className={`w-full border px-3 py-2 rounded bg-gray-100 ${
                      error ? "border-red-500" : ""
                    }`}
                  />
                  {error ? (
                    <img
                      src="/validation-warning.svg"
                      alt="Error"
                      className="w-5 h-5 ml-2"
                    />
                  ) : inputCaptcha && inputCaptcha === captcha ? (
                    <img
                      src="/validation-tick.svg"
                      alt="Valid"
                      className="w-5 h-5 ml-2"
                    />
                  ) : null}
                  <span className="ml-2 text-red-700">*</span>
                </div>
                {/* Error Message */}
                {error && (
                  <div className="text-white bg-red-600 px-2 py-1 mt-1 text-sm rounded w-full">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Checkbox + Button */}
          <div className="w-full lg:w-[50%] flex flex-col gap-4">
            <div className="w-full lg:w-[70%]">
              <label className="inline-flex items-start gap-2 text-sm">
                <input type="checkbox" className="mt-1" />
                Subscribe to our newsletter to receive exclusive offers, early
                access and sneak peeks
              </label>
            </div>

            <div className="w-full lg:w-[70%]">
              <button
                type="submit"
                className="w-full sm:w-auto bg-black text-white px-6 py-3 uppercase hover:bg-white hover:text-black border border-black transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
