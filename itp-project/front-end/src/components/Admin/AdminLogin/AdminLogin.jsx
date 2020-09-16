import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../../App.css";


class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  adminloginF = async (e) => {
    e.preventDefault();
    let Admin_account = document.getElementById('Lemail').value;
    let admin_password = document.getElementById('password').value;

    const check_account = await fetch(`/api/v2/admin/specificname/${Admin_account}`);
    if(check_account.status == 404){
    	alert("user does not found");
    }else{
    	const result = await check_account.json();
    	sessionStorage.clear();
    	sessionStorage.setItem("adminAccount" , "account1");	
    	this.props.history.push("/dashboard");
    }
    
  };

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "50px",
      marginBottom: "40px",
    };
  };

  getStyle = () => {
    return {
      marginTop: "20px",
    };
  };
  
  static removeWhiteSpaces = (inputString) => {
  	return inputString.replace(/\s/g,'');
  }

  render() {
    return (
      <div className="container loginForm test" style={this.style()}>
        <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image hide-on-small-only">
              <img
                alt=""
                src="https://image.freepik.com/free-vector/admin-concept-illustration_114360-2332.jpg"
                height="100%"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h4 className="center-align grey-text">Admin Login</h4>
                <div className="row">
                  <form className="col s12" method="post" action="/login">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="Lemail" name="username" type="text" className="avalidate"/>
                        <label htmlFor="Lemail" id="LemailLabel">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          className="validate"
                        />
                        <label htmlFor="password" id="pwordLabel">Password</label>
                      </div>
                    </div>
                    <div className="container center-align grey-text">
                      <p>
                        <label>
                          <input type="checkbox" className="filled-in" />
                          <span>Remeber Me</span>
                          <br />
                          <br />
                        </label>
                      </p>
                    </div>
                    <div className="center-align center">
                      <button
                        onClick={this.adminloginF}
                        className="btn center-align grey darken-3"
                        style={{ width: "100%" }}
                      >
                        Login
                      </button>
                    </div>
                    <br />
                    <div className="center-align center">
                      <Link to="/signup">
                      <p className="teal-text">forget password?</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
