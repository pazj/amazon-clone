import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory} from "react-router-dom";  
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()
        //some fancy firebase logiiiiiin

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        //do some fancy firebase registerrrrr
        auth
            .createUserWithEmailAndPassword(email, password)

            //it successfully created a new user with 
            //email and password
            .then((auth) => {
                console.log(auth);

                //if sign in successfully then go to main page
                if(auth){
                    history.push('/')
                }
            })

            //if there is any error
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' 
            />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} 
                    onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} 
                    onChange={e => setPassword(e.target.value)}/>

                    <button type='submit 'onClick={signIn}
                     className="login__singInButton">Sign In</button>
               
                </form>
                 <p>
                     By signing-in you agree to the AMAZON FAKE CLONE
                     of Use & Sale. Please see our privacy Notice, our cookies 
                     Notice and our Interest-Based Ads Notice.
                 </p>
                 <button onClick={register}
                 className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
