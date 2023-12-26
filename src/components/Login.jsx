export const Login = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-primaryColor to-secondaryColor">
        <Toaster position="top-center" closeButton richColors />
        <div className="py-16 px-80 h-screen">
          <div className="bg-slate-50 h-full rounded-2xl flex justify-between items-center relative">
            <Link to="/">
              <IoCloseCircle
                size={25}
                className="text-primaryColor absolute top-3 right-5 hover:text-opacity-85"
              />
            </Link>
            <div className="p-5 w-full">
              <form>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col items-center">
                    <img
                      src="/static/icons/Logo.png"
                      alt="logo"
                      className="w-[70px] justify-center"
                    />
                    <p className="font-medium">Create an account</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                      <input
                        id="fname"
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                        placeholder="First Name"
                        className={` ${
                          fnameError
                            ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                            : "rounded-lg shadow-2xl px-5 py-2  w-full"
                        }`}
                      />
                      <input
                        type="text"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                        placeholder="Last Name"
                        className={` ${
                          lnameError
                            ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                            : "rounded-lg shadow-2xl px-5 py-2  w-full"
                        }`}
                      />
                    </div>
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
                    <input
                      type="password"
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                      placeholder="Confirm Password"
                      className={` ${
                        cpasswordError
                          ? "rounded-lg shadow-2xl px-5 py-2  w-full border border-red-500"
                          : "rounded-lg shadow-2xl px-5 py-2  w-full"
                      }`}
                    />
                    <div>
                      <p className="text-sm">
                        Already have an account?
                        <Link to="/login">
                          <span className="text-primaryColor font-bold hover:text-opacity-85">
                            {" "}
                            Login
                          </span>
                        </Link>
                      </p>
                      <div
                        onClick={handleSignUp}
                        className="bg-primaryColor py-2 px-10 rounded-lg hover:bg-opacity-75 font-bold text-white text-center items-center justify-center shadow-2xl cursor-pointer"
                      >
                        Register
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
