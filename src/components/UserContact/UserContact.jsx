import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import "./UserContact.css"

function UserContact() {
    const [state, handleSubmit] = useForm("moqyjwgz");
    if (state.succeeded) {
        console.log("Success");
    }
    return (
        <div className="container mt-md-5">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-7 d-flex justify-content-center">
                            <div className="submitBox formBox">
                                <h3 className="text-center text-success"><span className="text-highlight">Contact</span> Form</h3>
                                <hr />
                                <input placeholder="Full Name" type="text" name="name" id="" /> <br /> <hr />
                                <input placeholder="Mobile Number" type="name" name="number" id="" /> <br />  <hr />
                                <input placeholder="Email Address" id="email" type="email" name="email" /> <br /> <hr />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                                <textarea placeholder="Message" id="message" name="message" /> <br /> <hr />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                                <div className="d-flex justify-content-center mb-3">
                                    <button className="btn button-hover w-100" type="submit" disabled={state.submitting}>
                                        <FontAwesomeIcon className="me-3 text-success" icon={faPaperPlane} /> Send Message
                                    </button>
                                </div>
                                <small className="text-dark-gray">Mail will be received by <a className="text-decoration-none text-highlight" href="mailto:sohrab.cse9@gmail.com">sohrab.cse9@gmail.com</a></small>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

function App() {
    return (
        <UserContact />
    );
}
export default App;
