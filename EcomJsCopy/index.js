import React from "react"
import ReactDOM from "react-dom"
function LoginContent(){
    return(
    <div className="login">  
        <p>Punch in your username and password to access your account</p>
        <input type="text" placeholder="USERNAME"></input>
        <input type="password" placeholder="PASSWORD"></input>
        <button>Zap Here</button>
    </div>
    )

}
export default LoginContent;

ReactDOM(<LoginContent />, document.getElementById("root"))