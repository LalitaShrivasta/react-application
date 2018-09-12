 import React, { Component } from 'react';
 import './login.css';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: '',
                email: '',
                password:''
            },
            errors: {}
        };
    
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(e) {
        let fields = this.state.userInfo;
        fields[e.target.name] = e.target.value;        
        this.setState({fields});
    }
    
    validateForm() {
    
        let fields = this.state.userInfo;
        let errors = {};
        let formIsValid = true;
    
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "*Please enter your name.";
        }
    
        if (typeof fields["name"] !== "undefined") {
          if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["name"] = "*Please enter alphabet characters only.";
          }
        }
    
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your email.";
        }
    
        if (typeof fields["email"] !== "undefined") {
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "Please enter valid email.";
          }
        }
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Please enter your password.";
          }
      
          if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^[a-zA-Z ]*$/)) {
              formIsValid = false;
              errors["password"] = "Please enter valid password.";
            }
      
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
    
       }
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["name"] = "";
            fields["email"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
    
        let formData = {
            name: this.state.userInfo.name,
            emailAddress: this.state.userInfo.email,
        }
    
        let fullname = this.state.userInfo.name.split(' ');
    
        //    switch (fullname.length) {
        //        case 1:
        //            formData.firstname = fullname[0];
        //            break;
        //        case 2:
        //            formData.firstname = fullname[0];
        //            formData.lastname = fullname[1];
        //            break;
        //        case 3:
        //            formData.firstname = fullname[0];
        //            formData.lastname = fullname[2];
        //            break;
        //        default:
        //            formData.firstname = fullname[0];
        //            formData.lastname = fullname[2];
        //    }
    
     }
    
    render() {
        return (
            <div>
           <form onSubmit={this.handleSubmit}>
              <div>
                <label>Full name</label><br />
                 <input type="text" name="name" placeholder="Enter FullName"  minLength="2" value={this.state.userInfo.name} onChange={this.handleInput} required="required" /><br />
                 <span className="error">{this.state.errors.name}</span>
              </div>
              <div>
                 <label>Email</label><br />
                 <input  type="text" name="email" placeholder="Enter Email Id"  minLength="5" value={this.state.userInfo.email} onChange={this.handleInput} required="required" /><br />
                 <span className="error">{this.state.errors.email}</span>
              </div>
              <div>
              <label>Password</label><br />
             <input type="password" name="password" placeholder="Enter password"  minLength="12"  value={this.state.userInfo.password}  onChange={this.handleInput} required="required" /><br />
             <span className="error">{this.state.errors.password}</span>
             </div>

              <button className='login' type="submit">Login</button>
           </form>
           <div className="img"></div>
           </div>
        );
    }
}
    export default Login;