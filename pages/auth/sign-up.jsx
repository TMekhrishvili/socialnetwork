import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import s from './auth.module.css';

const SignUp = () => {
    const [user, setUser] = useState({
        username: null,
        email: null,
        password: null,
        confirmPassword: null
    });

    const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/auth/sign-up', user);
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }

    }
    return (
        <div className={s.container}>
            <h2 className={s.h2}>Sign Up</h2>
            <p className={s.p}>Already have an account? <Link href={'/auth/sign-in'}>Sign In</Link></p>
            <div className={s.subContainer}>

                <form className={s.form}>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        className={s.inputItem}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className={s.inputItem}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className={s.inputItem}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirm password"
                        className={s.inputItem}
                        onChange={handleChange}
                    />

                    <input
                        type="submit"
                        value={'Sign Up'}
                        className={s.inputItem}
                        onClick={handleClick}
                    />
                </form>
            </div>
        </div>
    )
}

export default SignUp
