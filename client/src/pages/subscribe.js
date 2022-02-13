import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ProductImg from './../assets/img/social-img.png';
import { Formik } from 'formik';
import axios from 'axios';

const Subscribe = () => {

    const [fullscreen, setFullscreen] = useState({
        height: 'auto'
    })
    const instance = axios.create({
        baseURL: "https://localhost:44313/api/"
    });
    const handleSubmit = (data) => {
        instance.put("Email/subcribemail", data)
    }
    useEffect(() => {
        setFullscreen({
            ...fullscreen,
            height: window.innerHeight
        });
    }, []);

    return (
        <div>
     
            <section className={`hero-section relative`} style={{ overflow: 'hidden' }}>
                <div className="container">
                    <div className="row fullscreen align-items-center relative" style={fullscreen}>
                        <div className="col-lg-6 content-wrap">
                            <section className="contact-form-section section-gap">
                                <div className="container subscribe-container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-12">
                                            <Formik
                                                initialValues={{ firstName: '', lastName: '', email: '', isSubscribeToMail: false }}
                                                onSubmit={(values) => {
                                                    handleSubmit(values)
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
                                                        <form onSubmit={handleSubmit}
                                                            className="form-area contact-form text-right"
                                                            id="myForm"
                                                            action="mail"
                                                            method="post"
                                                        >
                                                            <label className="float-left mb-2">First Name</label>
                                                            <input
                                                                name="firstName"
                                                                autoComplete="firstName"
                                                                placeholder="Enter your first name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.firstName}
                                                                className="common-input mb-20 form-control"
                                                                required
                                                                type="text"
                                                            />
                                                            <label className="float-left mb-2">Last Name</label>
                                                            <input
                                                                name="lastName"
                                                                autoComplete="lastName"
                                                                placeholder="Enter your last name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.lastName}
                                                                className="common-input mb-20 form-control"
                                                                required
                                                                type="text"
                                                            />
                                                            <label className="float-left mb-2">Email</label>
                                                            <input
                                                                name="email"
                                                                autoComplete="email"
                                                                placeholder="Enter email address"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                className="common-input mb-20 form-control"
                                                                required
                                                                type="email"
                                                            />
                                                            <input className="float-left" name="isSubscribeToMail" onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.isSubscribeToMail} style={{ marginTop: '3px', marginRight: '10px' }}
                                                                type="checkbox"
                                                            />
                                                            <label className="float-left mb-2">I want to subscribe to your mailing list.</label>

                                                            <div className="d-flex flex-column">
                                                                <div className="d-flex form-wrap">
                                                                    <button className="genric-btn2 d-block mt-30 mr-0 ml-auto">
                                                                        Submit
                                                                            <span style={{ paddingLeft: '5px' }}>
                                                                            <FontAwesomeIcon icon={faPaperPlane} />
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                <div className="alert-msg" />
                                                            </div>
                                                        </form>
                                                    )}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <img className="hero-img" src={ProductImg} alt="" style={{ width: 'auto' }} />
            </section>
            <div className="pt-5">
                <Footer />
            </div>
        </div>
    )
}

export default Subscribe;