"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatus("Something went wrong, please try again later.");
        const errorData = await res.json();
        console.error(errorData); // Log any server-side error message
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
      console.error("Form submission error:", error); // Log the error
    }
  };

  return (
    <main className="">
      <section className="sub-header">
        <h1>Contact Us</h1>
      </section>

      <section className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.833356918023!2d7.489492814786992!3d9.078941393486236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a501a5e2def%3A0x42c4f1e46696a9fd!2s10%20Zambezi%20Cres%2C%20Wuse%20904101%2C%20Abuja!5e0!3m2!1sen!2sng!4v1646929713494!5m2!1sen!2sng"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          title="Location Map"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>10, Zambezi Crescent,</h5>
                <p>Wuse, Abuja, Nigeria</p>
              </span>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+234 70 2512 7767</h5>
                <p>Monday to Saturday, 9am to 5pm</p>
              </span>
            </div>
            <div>
              <i className="fa fa-envelope-o"></i>
              <span>
                <h5>info@sanctuarysound.com.ng</h5>
                <p>Email Us</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                rows="8"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="hero-btn red-btn">
                Send Message
              </button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
