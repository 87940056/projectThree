import React, { Component } from 'react';
import '../css/wx_login.css';

class Pic extends React.Component {
    render() {
        return (
            <div className="pic">
                <div className="picOne">
                    <img src={require('../img/picture.png')} alt=""/>
                </div>
            </div>
        )
    }
}
class Login extends React.Component {
    render() {
        return (
            <div className="loginBox">
                <div className="admin">
                    <div className="icon"></div>
                    <input type="text" placeholder="请输入您的帐号"/>
                </div>
                <div className="password">
                    <div className="icon"></div>
                    <input type="text" placeholder="请输入您的密码"/>
                    <div className="closeEye"></div>
                </div>
                <div className="other">
                    <a href="" className="forget">忘记密码</a>
                    <a href="" className="register">立即注册</a>
                </div>
                <a href="" className="submit">
                    <div className="dot"></div>
                    <p>开启稚美之旅</p>
                    <div className="dot"></div>
                </a>
            </div>
        )
    }
}
class Wx_login extends Component {
    render(){
        return(
            <div className="root">
                <Pic/>
                <Login/>
            </div>
        )
    }
}
export default Wx_login;