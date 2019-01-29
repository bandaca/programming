import React, { Component } from 'react';

export class CookieManager extends Component {
  static displayName = CookieManager.name;

  constructor (props) {
    super(props);
    this.state = { currentCount: 0 };
    this.checkCookie = this.checkCookie.bind(this);
  }

  incrementCounter () {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  setCookie (name, value) {
    document.cookie = name + "=" + value + ";path=/";
    window.location.replace("https://my-dev-store-544280745.store.bcdev/admin/services/3p-auth/v1/store/10000207/auth/cloverstaging/initiate?redirect=/admin/payments/clover/config/setup");
  }

  getCookie (cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  checkCookie () {
    var user=this.getCookie("username");
    if (user !== "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user !== "" && user !== null) {
         this.setCookie("username", user);
       }
    }
  }

  render () {
    return (
      <div>
        <h1>Set Cookie</h1>

        <p>Click the button to create a cookie</p>

        <button className="btn btn-primary" onClick={this.checkCookie()}>Set cookie</button>
      </div>
    );
  }
}
