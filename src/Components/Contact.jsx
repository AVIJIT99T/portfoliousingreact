import React from "react";
import "./Contact.css";
// import { AiOutlineMail } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { withRouter } from "react-router";
// import { FiPhone } from "react-icons/io";
// import { FaMapMarkerAlt } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section id="contact" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <h1 className="contact_heading">Contact Me</h1>

                <div className="col-md-6 pt-5 mt-4 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column contact_left">
                  <div className="text_contact">Get in Touch</div>
                  <p>
                    These are my personal Details. If my details fulfill any of
                    the position's criteria,please contact with me.
                  </p>

                  <div className="info_contact">
                    <div className="row">
                      <div className="icon">
                        <IoMdContact />
                      </div>
                      <div className="heading">Name</div>

                      <div className="sub-title">Avijit Karati</div>
                    </div>
                    <div className="row">
                      <div className="icon">
                        <IoMdContact />
                      </div>
                      <div className="heading">Email</div>

                      <div className="sub-title">karatiavijit@gmail.com</div>
                    </div>
                    <div className="row">
                      <div className="icon">
                        <IoMdContact />
                      </div>
                      <div className="heading">Phone</div>

                      <div className="sub-title">8334033467</div>
                    </div>
                    <div className="row">
                      <div className="icon">
                        <IoMdContact />
                      </div>
                      <div className="heading">Address</div>

                      <div className="sub-title">Dasnagar, Howrah</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 order-2 order-lg-2 mt-4 contact_right">
                  {/* <div className="my-5">
                    <h1 className="text-center">Leave your Comments Here</h1>
                  </div> */}
                  <div className="container contact_div">
                    <div className="row">
                      <div className="col-11 mx-auto">
                        <form>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Full name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="exampleFormControlInput1"
                              name="fullname"
                              //   value={data.fullname}
                              //   onChange={InputEvent}
                              placeholder="Enter your Name"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Phone
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="exampleFormControlInput1"
                              name="phone"
                              //   value={data.phone}
                              //   onChange={InputEvent}
                              placeholder="Mobile Number"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              name="email"
                              //   value={data.email}
                              //   onChange={InputEvent}
                              placeholder="name@example.com"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label"
                            >
                              Message
                            </label>
                            <textarea
                              className="form-control"
                              name="msg"
                              //   value={data.msg}
                              //   onChange={InputEvent}
                              id="exampleFormControlTextarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                              Send
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(Contact);
