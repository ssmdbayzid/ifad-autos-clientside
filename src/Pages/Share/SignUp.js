import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const SignUp = () => {
    const [
        createUserWithEmailAndPassword, signInUser, signInLoading, error1, ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
        
    if(signInLoading){
        return <p>Loading...</p>;
    }
    
    let errors;

    if(error1){ 
        errors = <p className='text-[red]'>{error1.message}</p>
    }
        if(signInUser){
            navigate('/home')
        }

        const handleSignUp = e =>{
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            createUserWithEmailAndPassword(email, password)
        }


    return (
        <div className="hero min-h-screen rounded-lg bg-base-300">

            <div className="p-6 rounded-lg bg-orange-200 py-12 items-center w-2/5">
            <h1 className='text-center text-accent text-3xl'>Please Sign Up</h1>

                <form onSubmit={handleSignUp} className='w-full justify-center p-6'>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className=" w-full p-3 mx-auto rounded " required />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className=" w-full p-3 mx-auto rounded " required />

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className=" w-full p-3 mx-auto rounded " required />
                    <label className="label">
                        <span> Already Have An Account?<a href="/log-in" className=" text-red-500 font-bold ml-2 text-secondary ">Log In</a></span>
                    </label>
                    {errors}
                    <input type="submit" className=' mt-2 btn w-full btn-primary' value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;