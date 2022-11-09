import React from 'react';

const Login = () => {
    return (    
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
          <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-4-desktop">
                        <form action="" className="box">
                            <div className="field">
                                <label htmlFor="" className="label">Email or Username</label>
                                <div className="controls">
                                    <input type="text" className="input" placeholder="Email or Username" />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="" className="label">Password</label>
                                <div className="controls">
                                    <input type="password" className="input" placeholder="*****" />
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