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
import ReactStars from 'react-stars'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contacted = (props) => {
  //const [result,showResult] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [message,setMessage] = useState("");
  const ratingChanged = (newRating) => {
   console.log(newRating)
  }
  const [rating,setRating] = useState("");

  

  const sendFeedback = () =>{ //for getting feedbacks into database
    axios.post('http://localhost:3001/create',{
      name: name,
      email: email,
      subject: subject,
      message:message,
      rating:rating,
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
                        onChange={(event)=> {
                          setName(event.target.value);
                          }}
                        //onBlur={handleBlur}
                        //value={values.name}
                        required
                        type="text"
                      />
                      <input
                        placeholder="Enter email address"
                        type="email"
                        name="email"
                        onChange={(event)=> {
                          setEmail(event.target.value);
                          }}
                        //onBlur={handleBlur}
                        //value={values.email}
                        className="common-input mb-20 form-control"
                        required
                      />
                      <input
                        name="subject"
                        autoComplete="subject"
                        placeholder="Enter subject"
                        className="common-input mb-20 form-control"
                        onChange={(event)=> {
                          setSubject(event.target.value);
                          }}
                        //onBlur={handleBlur}
                        //value={values.subject}
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
                        onChange={(event)=> {
                          setMessage(event.target.value);
                          }}
                          
                        //onBlur={handleBlur}
                        //value={values.message}
                      />
                      <br></br>
                      <div align="left">
                        <h6>
                          Rating:
                        </h6>
                      </div>
                      <ReactStars
                        count={5}
                        //onChange={ratingChanged}
                        size={24}
                        color2={'#ffd700'}
                        name="rating"
                        onChange={(ratingChanged)=> {
                          setRating(ratingChanged);
                          }}
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
