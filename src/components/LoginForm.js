import React, {useState} from 'react';
import userIcon from '../images/user.png';
import emailIcon from '../images/email.png';
import passwordIcon from '../images/password.png';
import showIcon from '../images/view.png';
import hideIcon from '../images/hide.png';

const LoginForm = () => {

    const [action,setAction] = useState("Login");
    const [show, setShow] = useState(hideIcon);

    return (
        <div className="container">
            <div className="header">
            <h1 className="">{action}</h1>
            <p className="underline"></p>
            </div>
            <div className="formInputBox">
                {action=== "Login" ? <div></div> : <div className="inputDiv nameBox">
                    <img className="icon" src={userIcon} alt="userIcon" />
                    <input type="text" className="input name" placeholder="Name" />
                </div>}
                
                <div className="inputDiv emailBox">
                <img className="icon" src={emailIcon} alt="emailIcon" />
                <input type="email" className="input email" placeholder="Email" />
                </div>
                <div className="inputDiv passwordBox">
                <img className="icon" src={passwordIcon} alt="passwordIcon" />
                <input type={show === showIcon ? "text" : "password"} className="input password" placeholder="Password" />
                <img src={show} className="icon viewIcon" alt="shoe/hide password" onClick={() => show===showIcon ? setShow(hideIcon) : setShow(showIcon)} />
                </div>
            </div>
            
            {action==="Sign Up" ? <div></div> : <div className="forgotPassword">Lost Password?<span>Click Here!</span></div>}
            <div className="buttonBox">
                <button className={action === "Login" ? "button active" : "button"} onClick={() => setAction("Sign Up")}>Sign Up</button>
                <button className={action === "Sign Up" ? "button active" : "button"} onClick={() => setAction("Login")}>Login</button>
            </div>
        </div>
    )
}

export default LoginForm;