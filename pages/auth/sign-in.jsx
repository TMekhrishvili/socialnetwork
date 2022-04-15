import Link from 'next/link';
import s from './auth.module.css';

const SignIn = () => {
    return (
        <div className={s.container}>
            <h2 className={s.h2}>Sign In</h2>
            <p className={s.p}>Don't have an account? <Link href={'/auth/sign-up'}>Sign Up</Link></p>
            <div className={s.subContainer}>
                <form action="/api/v1/auth/sign-in" method="post" className={s.form}>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className={s.inputItem}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className={s.inputItem}
                    />

                    <input
                        type="submit"
                        value={'Sign In'}
                        className={s.inputItem}
                    />
                </form>
            </div>
        </div>
    )
}

export default SignIn
