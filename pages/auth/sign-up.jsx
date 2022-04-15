import style from './index.module.css';

const SignUp = () => {
    return (
        <div className={style.container}>
            <h2>Sign Up</h2>
            <form id='signUp' action="/api/auth/sign-up" method="post" className={style.subContainer}>

                <input
                    type="text"
                    name='username'
                    placeholder='username'
                    className={style.signUpInput}
                />

                <input
                    type="text"
                    name='email'
                    placeholder='email'
                    className={style.signUpInput}
                />

                <input
                    type="password"
                    name='password'
                    placeholder='password'
                    className={style.signUpInput}
                />

                <input
                    type="password"
                    name='repeat-password'
                    placeholder='repeat password'
                    className={style.signUpInput}
                />

                <input
                    type="submit"
                    value="Sign Up"
                    className={style.signUpInput}
                />
            </form>
        </div>
    )
}

export default SignUp
