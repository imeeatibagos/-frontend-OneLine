import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

export const Login = () => {
  const apiURL = import.meta.env.VITE_MY_NGROK_API;
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const promise = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const handleLogin = async (e) => {
    e.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    const fields = [
      {
        value: password,
        setError: setPasswordError,
        message: "Password is required",
      },
      {
        value: email,
        setError: setEmailError,
        message: "Email is required",
      },
    ];

    let isValid = true;

    fields.forEach((field) => {
      if (field.value === "") {
        field.setError(true);
        toast.error(field.message);
        isValid = false;
      }
    });

    if (isValid) {
      if (!(password.length >= 8)) {
        toast.error("Password must be at least 8 characters");
        setPasswordError(true);
      } else if (password !== password) {
        toast.error("Password not matched!");
        setPasswordError(true);
      } else {
        try {
          let response = await fetch(`${apiURL}/OneLine/public/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });

          const data = await response.json();

          if (response.ok) {
            toast.promise(promise, {
              loading: "Logging in...",
              success: () => {
                return "Logged in Successfully";
              },
              error: "Error",
            });
            setTimeout(() => {
              nav("/");
            }, 1200);
          } else if (
            response.status === 422 &&
            data.message === "The email has already been taken."
          ) {
            toast.error("Email already in use");
            setEmailError(true);
          }
        } catch (error) {
          console.error(error);
          toast.warning("Internal Server Error");
        }
      }
    }
  };

  return (
    <>
      <div className="bg-gradient-to-tl from-primaryColor to-secondaryColor">
        <Toaster position="top-center" closeButton richColors />
        <div className="py-16 px-80 h-screen">
          <div className="bg-slate-50 h-full rounded-2xl flex justify-between items-center relative">
            <Link to="/">
              <IoCloseCircle
                size={25}
                className="text-green absolute top-3 right-5 hover:text-opacity-85"
              />
            </Link>
            <div className="p-5 w-full">
              <form>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col items-center">
                    <p className="font-medium">Create an account</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3"></div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className={` ${
                        emailError
                          ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                          : "rounded-lg shadow-2xl px-5 py-2  w-full"
                      }`}
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className={` ${
                        passwordError
                          ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                          : "rounded-lg shadow-2xl px-5 py-2  w-full"
                      }`}
                    />

                    <div>
                      <p className="text-sm">
                        Already have an account?
                        <Link to="/signup">
                          <span className="text-primaryColor font-bold hover:text-opacity-85">
                            {" "}
                            Signup
                          </span>
                        </Link>
                      </p>
                      <div
                        onClick={handleLogin}
                        className="bg-green py-2 px-10 rounded-lg hover:bg-opacity-75 font-bold text-white text-center items-center justify-center shadow-2xl cursor-pointer"
                      >
                        Login
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="p-5 w-full">
              <img
                src="/static/icons/Boy.png"
                alt="image"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
