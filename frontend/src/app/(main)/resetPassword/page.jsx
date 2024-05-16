"use client"

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import React, { useRef, useState } from "react";
import { useNavigate } from "next/navigation";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const emailRef = useRef(null);
  const otpRef = useRef(null);

  const [verifiedUser, setVerifiedUser] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const router = useRouter();

  const checkMailExists = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/getbyemail/${emailRef.current.value}`
    );
    console.log(res.status);
    const data = await res.json();
    // console.log(data);
    setVerifiedUser(data);
    return res.status === 200;
  };

  const sendOTP = async () => {
    if (!(await checkMailExists())) {
      toast.error("Email not registered");
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/util/sendotp`, {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res.status);
    if (res.status === 201) {
      toast.success("OTP sent");
    } else {
      toast.error("OTP not sent");
    }
  };

  const verifyOTP = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`
    );
    // console.log(res.status);
    if (res.status === 200) {
      setShowForm(true);
    } else {
      toast.error("OTP not verified");
    }
  };

  const resetForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      cpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/update/${verifiedUser._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            password: values.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            toast.success("Password reset successful");
            router.push("/login");
          } else {
            toast.error("Password reset failed");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
         <>
      
          {/* <div className="p-4 sm:p-7"> */}
        
            <div className="text-center h-fit flex justify-center item-center">
            <section className="flex flex-col h-fit w-fit md:mt-5 p-10 bg-white border w-fit border-gray-200 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div >
                   <div className="flex flex-col items-center w-fit mt-3 justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a
            href="#"
            className="flex items-center m-2 text-2xl font-semibold text-black dark:text-white"
          >
            <img className="w-12  mr-2 text-center" src="./iconsign.webp" alt="logo" />
            RESET PASSWORD
          </a>
          <div className="w-full w-fit p-1 h-fit bg-purple-50 rounded-xl shadow-sm dark:border md:mt-3 sm:max-w-sm dark:bg-gray-800 dark:border-gray-700 sm:p-10">
            <h2 className="mb-7 text-xl justify-center text-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
              Change Password
            </h2>
            {/* <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5"> */}
            <div>
              <label
                htmlFor="email"
                className="block m-2 text-sm font-medium text-black dark:text-white"
              >
                <h3 style={{fontWeight: 'bold'}}>Your email</h3>
              </label>
              <input
                type="email"
                ref={emailRef}
                className="bg-black-50 border border-[#000] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required=""
              />
            </div>
            <div>
              <button
                type="Submit"
                onClick={sendOTP}
                className="w-1/2 py-3 px-5 inline-flex justify-center items-center bg-[#36454f] gap-x-2 md:mt-3 mb-2 text-sm font-semibold rounded-lg border border-transparent  text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Send OTP
              </button>
            </div>
            <div>
              <input
                type="text"
                label="Enter OTP"
                ref={otpRef}
                placeholder="Enter OTP"
                className="bg-black-50 border border-[#000] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  md:mt-5 md:mb-3 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <button
                onClick={verifyOTP}
                className="w-full py-3 px-5 inline-flex bg-[#36454f] justify-center items-center gap-x-2 md:mt-9 mb-1 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 bg-[#36454f] border border-[#FC9B3C] w-1/2 rounded-lg"
              >
                Verify OTP
              </button>
            </div>
            {showForm && (
              <form onSubmit={resetForm.handleSubmit}>
                <div>
                  <label
                    htmlFor="password"
                    className=" md:mt-4 md:mb-6 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="please enter password"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.password}
                    className="bg-black-50 border  bg-[#363454f] border-[#000] text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  md:mt-5 md:mb-6 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    classNamame="block mb-2m-3 text-sm font-medium text-black dark:text-white "
                  >
                    <h3 style={{fontWeight: 'bold' }}>
                    Confirm password</h3>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    onChange={resetForm.handleChange}
                    value={resetForm.values.cpassword}
                    className="bg-gray-50 border m-2 border-gray-300 text-[#000] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    placeholder="enter password"
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      aria-describedby="newsletter"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="newsletter"
                      className="font-light text-black dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-black hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-5 inline-flex justify-center items-center bg-[#36454f] gap-x-2 md:mt-10 mb-5 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Reset passwod
                </button>
              </form>
            )}
          </div>
        </div>
        </div>
      </section> 
      </div>
       {/* </div>  */}
     </>
  );
};


export default ResetPassword;
