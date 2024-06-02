'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';

import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();

  const [showPassword,setShowPassword] = useState(false)
  const signupForm = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
      role:''
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
                    router.push("/login")
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
      <div className=" bg-grey-lighter min-h-screen flex flex-col ">
        <div className=" container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className=" px-6 py-8 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 ">
            <h1 className="mb-8 text-center block text-3xl font-bold text-gray-800 dark:text-white">
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
{/* radion buttons
            <div>
            <fieldset>
  <legend className="text-sm font-semibold leading-6 text-gray-900">
  ROLE
  </legend>
 
  <div className="mt-6 space-y-6">
    <div className="flex items-center gap-x-3">
      <input
        
        name="role"
        type="radio"
        onChange={signupForm.handleChange}
        values={signupForm.values.role}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor="student"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        student
      </label>
   
      <input
       
        name="role"
        type="radio"
        onChange={e => {
          if(e.target.value === 'on'){
            signupForm.setFieldValue('teacher')
          }else{
            signupForm.setFieldValue('other')
          }
        }}
        values={signupForm.values.role}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor="teacher"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        teacher
      </label>
    
      <input
        // id="push-nothing"
        name="role"
        type="radio"
        onChange={e => {
          if(e.target.value === 'on'){
            signupForm.setFieldValue('student')
          }else{
            signupForm.setFieldValue('other')
          }
        }}
        values={signupForm.values.role}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      />
      <label
        htmlFor="other"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        other
        
      </label>
    </div>
  </div>
</fieldset> 

            </div>*/}
          

            <div>
              {
                signupForm.touched.password && (
                  <small className=' text-red-600'>{signupForm.errors.password}</small>

                )
              }
              <input
                type={showPassword ? "text" : "password"}
                className=" bg-gray-100 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 "
                name="password"
                onChange={signupForm.handleChange}
                values={signupForm.values.password }
                placeholder="Enter password" />
<button
  type="button"
  className="text-black dark:text-white mx-4 mb-4"
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
                className=" bg-gray-100 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 mb-4"
                name="confirmPassword"
                onChange={signupForm.handleChange}
                values={signupForm.values.confirmPassword }
                placeholder="Confirm password"  />

            </div>
          
            <button type="Submit"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg  text-white  focus:outline-none my-1 bg-blue-600 hover:bg-blue-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."
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
            <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../login/">
              Log in
            </a>.
          </div>
        </div>
      </div>
    </form>
  )
}

export default Signup;


