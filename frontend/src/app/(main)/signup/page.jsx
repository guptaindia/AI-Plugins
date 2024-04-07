'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';

import * as Yup from 'yup';
import toast from 'react-hot-toast';

const signupSchema = Yup.object().shape({
  fullname: Yup.string().required('Enter your name')
    .min(3, 'too short'),
  email: Yup.string().required('Enter email')
    .email('Incorrect email').min(4, 'too short'),
  password: Yup.string().required('Enter password')
    .min(4, 'too short')
    .matches(/[a-z]/, 'lower case required')
    .matches(/[A-Z]/, 'uppercase letter required')
    .matches(/[\W]/, 'special character required')
    .matches(/[0-9]/, 'number required'),
  confirmPassword: Yup.string().required('Enter confirm password')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {

  const [showPassword,setShowPassword] = useState(false)
  const signupForm = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values) => {
      console.log(values);
      fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body : JSON.stringify(values),
                headers : {
                    'Content-Type' : 'application/json'
                }

            })
            .then((res) => {
                if(res.status === 200){
                    toast.success('Signup Successfull');
                }else {
                    toast.error('error in Signing up')
                }
            }).catch((err) => {
                console.log(err);
                toast.error('error')
            });
    },
    validationSchema: signupSchema
  })


  return (
    <form onSubmit={signupForm.handleSubmit}>
      <div className=" bg-grey-lighter min-h-screen flex flex-col">
        <div className=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">
              <img className="h-20 m-auto" src="\iconsign.webp" />
              Sign up</h1>

            <div>

              {
                signupForm.touched.email && (
                  <small className='text-red-600'>{signupForm.errors.fullname}</small>

                )
              }
              <input
                type="text"
                className=" mb-4 bg-gray-100 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                name="fullname"
                onChange={signupForm.handleChange}
                values={signupForm.values.fullname}
                placeholder="Full Name" />

            </div>

            <div>
              {
                signupForm.touched.email && (
                  <small className=' text-red-600'>{signupForm.errors.email}</small>

                )
              }
              <input
                type="email"
                className="bg-gray-100 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 mb-4"
                name="email"
                onChange={signupForm.handleChange}
                values={signupForm.values.email}
                placeholder="Email" />


            </div>
          

            <div>
              {
                signupForm.touched.password && (
                  <small className=' text-red-600'>{signupForm.errors.password}</small>

                )
              }
              <input
                type={showPassword ? "text" : "password"}
                className="border-2 hover:border-slate-600  w-full p-3 rounded mb-4"
                name="password"
                onChange={signupForm.handleChange}
                values={signupForm.values.password }
                placeholder="Enter password" />
<button
  type="button"
  className="text-black dark:text-white"
  onClick={() => {
    setShowPassword((prev) => !prev);
  }}
>
  {showPassword ? "Hide" : "Show"}
</button>

            </div>
            <div>
              {
                signupForm.touched.confirmPassword && (
                  <small className=' text-red-600'>{signupForm.errors.confirmPassword}</small>

                )
              }
              <input
                type="password"
                className="border-2 hover:border-slate-600  w-full p-3 rounded mb-4"
                name="confirmPassword"
                onChange={signupForm.handleChange}
                values={signupForm.values.confirmPassword }
                placeholder="Confirm password"  />

            </div>
          
            <button type="Submit"
              className="w-full text-center py-3 rounded bg-green-800 text-white hover:bg-green-dark focus:outline-none my-1"
            >Create Account </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Terms of Service
              </a> and
              <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a className="no-underline border-b border-blue text-blue" href="../login/">
              Log in
            </a>.
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup;