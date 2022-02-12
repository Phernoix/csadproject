import React, { useState } from "react";
import emailjs from "emailjs-com";
import AlertDismissibleExample from "../components/alert";
import GoogleMapReact from "google-map-react";
import Map from "../components/Map";
//import Comments from "../components/comments";
import Footer from "../components/footer";
import axios from "axios";
import { Formik } from "formik";
import Example from "../components/alert";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacted = (props) => {
  //const [result,showResult] = useState(false);

  const sendFeedback = () =>{
    axios.post('http://localhost:3001/create',{
      name: name,
      email:email,
      subject:subject,
      message:message,
      }).then(() =>{
        console.log("success");
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4mv5co",
        "template_p0oqfqa",
        e.target,
        "user_HF63DGbyTe8y2HC2T03JV"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Feedback Submitted");
          //<Example />;
        },
        (error) => {
          console.log(error.text);
          alert("not ok");
        }
      );
  };

  const [center, setCenter] = useState({
    lat: 1.3098,
    lng: 103.7775,
  });
  const instance = axios.create({
    baseURL: "https://localhost:44313/api/",
  });
  const [zoom, setZoom] = useState(11);
  const handleSubmit = (data) => {
    instance.post("Email/contactmail", data);
  };
  return (
    <div>
      <div className="mt-5 pt-5">
        <Map />
      </div>
      <div className="pt-5">
        <section className="contact-form-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  }}
                  onSubmit={(values) => {
                    handleSubmit(values);
                    alert("ok");
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form
                      //onSubmit={handleSubmit}
                      onSubmit={sendEmail}
                      className="form-area contact-form text-right"
                      id="myForm"
                      action="mail"
                      method="post"
                    >
                      <input
                        name="name"
                        autoComplete="name"
                        placeholder="Enter your name"
                        className="common-input mb-20 form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        required
                        type="text"
                      />
                      <input
                        placeholder="Enter email address"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className="common-input mb-20 form-control"
                        required
                      />
                      <input
                        name="subject"
                        autoComplete="subject"
                        placeholder="Enter subject"
                        className="common-input mb-20 form-control"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                        required
                        type="text"
                      />
                      <textarea
                        className="common-textarea form-control"
                        cols={30}
                        rows={7}
                        name="message"
                        autoComplete="message"
                        placeholder="Enter Message"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      />
                      <div className="d-flex flex-column">
                        <button
                          onClick={sendFeedback}
                          type="submit"
                          className="genric-btn2 d-block mt-30 mr-0 ml-auto"
                        >
                          SUBMIT FEEDBACK
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Contacted;
