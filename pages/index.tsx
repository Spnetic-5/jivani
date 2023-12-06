import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { appwrite, userState } from "../store/global";
import { User } from "../store/types";

const links = [
  {
    href: "http://github.com/appwrite/appwrite",
    icon: <img src="/assets/github.svg" className="w-10 h-10 inline" />,
  },
  {
    href: "https://twitter.com/appwrite_io",
    icon: <img src="/assets/twitter.svg" className="w-10 h-10 inline" />,
  },
  {
    href: "http://appwrite.io",
    icon: <img src="/assets/appwrite.svg" className="w-10 h-10 inline" />,
  },
];

const Landing = () => {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  const desc =
    "Welcome to our Digital Life Planner — a seamlessly integrated platform designed to elevate your daily experience. Organize your tasks, set goals, and cultivate a more productive lifestyle with intuitive tools. Our planner offers user-friendly features, empowering you to manage your digital life effortlessly. ";
  useEffect(() => {
    appwrite.account.get().then(
      (response: User) => {
        setUser(response);
        router.replace("/dashboard");
      },
      () => {
        console.log("no session found");
      }
    );
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(to right, #15171A, #1E2125)" }}
    >
      <div className="flex w-full max-w-6xl mx-auto items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left">
          <p className="my-4 text-xl md:text-2xl lg:text-3xl font-medium font-sans text-white">
            Introducing
          </p>
          <h1
            style={{ fontFamily: "comfort" }}
            className="text-3xl md:text-5xl lg:text-7xl font-bold my-5"
          >
            <span className="bg-gradient-to-r from-green-600 via-green-300 to-green-100 text-transparent bg-clip-text">
              LoremIsp '24
            </span>
          </h1>
          <p
            style={{ fontFamily: "great" }}
            className="mt-4 mb-8 text-2xl md:text-4xl lg:text-5xl font-medium text-gray-200"
          >
            Your Digital Life Planner
          </p>
          <p className="mt-4 mb-8 text-base md:text-lg lg:text-xl font-normal text-gray-400 font-roboto">
            {desc}
          </p>
          <a
            href="/login"
            style={{ fontFamily: "raleway" }}
            className="mx-auto py-2 md:py-3 px-6 md:px-10 lg:px-18 text-sm md:text-base lg:text-lg font-semibold rounded-lg shadow-md bg-white text-black border border-black hover:border-white hover:text-white hover:bg-black focus:outline-none transition duration-300"
          >
            Get Started
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/assets/journal.svg"
            alt="Journal Icon"
            className="mx-auto md:h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
