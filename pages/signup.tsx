import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { appwrite, userState } from "../store/global";
import { useRecoilState } from "recoil";
import { User } from "../store/types";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();

  const signup = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    try {
      await appwrite.account.create("unique()", email, password, name);
      setUser(
        (await appwrite.account.createEmailSession(
          email,
          password
        )) as unknown as User
      );
      router.push("/dashboard");
    } catch (error) {
      setAlert(error.message);
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
              className="text-4xl font-bold mb-6 text-gray-800"
              style={{ fontFamily: "comfort" }}
            >
              Sign Up
            </h1>
            <form onSubmit={signup} className="space-y-4">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 mb-2"
                  style={{ fontFamily: "poppins" }}
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full p-3 placeholder-gray-400 text-gray-700 border rounded-md focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300"
                  style={{ fontFamily: "comfort" }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
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
              <div className="mb-6">
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
                  disabled={!name || !email || !password}
                  className="py-3 px-6 font-semibold rounded-md shadow-md bg-gray-900 text-white hover:bg-gray-800 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "raleway" }}
                >
                  Sign Up
                </button>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "poppins" }}
                >
                  Already have an account?{" "}
                  <Link href="/login">
                    <a className="underline">Login</a>
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="flex-grow flex items-center justify-center">
            {/* Your image here */}
            <img
              src="/assets/signup.svg"
              alt="Description"
              className="object-cover max-w-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
