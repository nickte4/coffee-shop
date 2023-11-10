import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  document.title = "Untitled Coffee | Contact";

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleSubjectChange(event) {
    setSubject(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  async function submit(e) {
    e.preventDefault();

    // try to send contact form
    try {
      await axios
        .post("http://localhost:8000/api/contact", {
          name,
          email,
          subject,
          message,
        })
        .then((res) => {
          // if the contact form was sent, alert the user
          if (res.data === "contact form sent") {
            alert("Message sent!");
          } else {
            // if the contact form was not sent, alert the user
            alert("Message not sent. Try again.");
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="pt-24 h-max">
        <h1 className="text-7xl text-center mt-10 border-b-2 border-primary pb-10">
          Contact
        </h1>
        <div className="flex flex-col lg:flex-row items-center">
          <img
            className="w-screen h-96 object-cover lg:h-auto lg:object-contain lg:w-1/2"
            src="/contact-image.jpg"
            alt="contact image"
          />
          <div className="mb-10">
            <form
              action="POST"
              className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 lg:ml-20"
            >
              <h1 className="text-4xl mb-3">Full Name</h1>
              <input
                className="rounded-lg w-80 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                onChange={handleNameChange}
                placeholder="Write your name"
              />
              <h1 className="text-4xl mb-3 mt-5">Email</h1>
              <input
                className="rounded-lg w-80 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                onChange={handleEmailChange}
                placeholder="your@email.com"
              />
              <h1 className="text-4xl mb-3 mt-5">Subject</h1>
              <input
                className="rounded-lg w-80 h-10 px-3 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                onChange={handleSubjectChange}
                placeholder="Write a subject"
              />
              <h1 className="text-4xl mb-3 mt-5">Message</h1>
              <textarea
                className="rounded-lg w-80 h-32 p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={handleMessageChange}
                placeholder="Write your message"
              />
              <input
                className="transition-all mt-6 bg-secondary p-5 w-28 h-20 text-2xl rounded-2xl hover:bg-primary hover:text-white hover:scale-110 cursor-pointer"
                type="submit"
                value="Send"
                onClick={submit}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
