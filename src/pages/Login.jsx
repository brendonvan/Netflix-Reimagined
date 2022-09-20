
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Header from '../components/home/Header';
import '../components/home/Login.css'

function Login(props) {
    const initialState = { username: "", password: "" };
    const [input, setInput] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const createdUserToken = await props.logIn(input);
        console.log(createdUserToken)

        if (createdUserToken.user) {
            navigate('/');

        } else {
            navigate('/login');
        }
        setInput(initialState);
    }

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Header />
            <div className='login-container'>
                <h1 className='header'>Netflicks</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <div className='form-line'>
                            <span className='span-username'>Username</span>
                            <input className='login-input username-input' type='text' required name='username' value={input.username} onChange={handleChange} />
                        </div>
                    </label>
                    <label>
                        <div className='form-line'>
                            <span className='span-password'>Password</span>
                            <input className='login-input password-input' type='password' required name='password' value={input.password} onChange={handleChange} />
                        </div>
                    </label>
                    <input type="submit" className='login-button' value="login" />
                </form >
            </div >
        </>
    )
}

export default Login;