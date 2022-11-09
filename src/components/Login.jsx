import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const Auth = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/login', {
                email: email,
                password: password,
            });
            navigate("/dashboard");
        } catch (error) {
            if(error.response) {
                setMessage(error.response.data.message);
            }
        }
    }

    return (    
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form action="" onSubmit={ Auth } className="box">
                            <p className="has-text-centered">{ message }</p>
                            <div className="field">
                                <label htmlFor="" className="label">Email</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="" className="label">Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="*****"  value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <button className="button is-success is-fullwidth">Submit</button>
                            </div>
                        </form>
                    </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Login;