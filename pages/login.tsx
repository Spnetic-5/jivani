import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/router";
import {
  appwrite,
  userState,
  handleSuccess,
  handleError,
} from "../store/global";
import { useRecoilState } from "recoil";
import { User } from "../store/types";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  const login = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    try {
      setUser(
        (await appwrite.account.createEmailSession(
          email,
          password
        )) as unknown as User
      );
      handleSuccess("Log In Success!");
      router.push("/dashboard");
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <>
      <section
        className="flex items-center justify-center h-screen"
        style={{ background: "linear-gradient(to right, #15171A, #1E2125)" }}
      >
        <div className="flex w-full max-w-6xl mx-auto items-center justify-center">
          <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
            <h1
              style={{ fontFamily: "comfort" }}
              className="text-4xl font-bold mb-8 text-gray-800"
            >
              Login
            </h1>
            <form onSubmit={login} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: "poppins" }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full p-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300"
                  style={{ fontFamily: "comfort" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: "poppins" }}
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="w-full p-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={!email || !password}
                  className="py-3 px-6 font-semibold rounded-md shadow-md bg-gray-900 text-white hover:bg-gray-800 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "raleway" }}
                >
                  Login
                </button>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "poppins" }}
                >
                  Don't have an account?{" "}
                  <Link href="/signup">
                    <a className="underline">Sign Up</a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="flex-grow flex items-center justify-center">
            {/* Your image here */}
            <img src="/assets/login.svg" alt="Description" className="object-cover max-w-md" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
