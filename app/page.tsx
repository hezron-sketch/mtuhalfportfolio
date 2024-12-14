import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";
// import Resume from "./resume/resume";

const navigation = [
  { name: "My Work", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gray-600">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-white hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="inline-flex z-10 text-5xl text-transparent duration-1000 bg-white cursor-default font-semibold text-edge-outline animate-title sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text ">
        <div className="bg-gray-300 bg-clip-text ">Software Developer</div>{" "}
      </h1>
      <br />

      {/* <img src="./public/3d-rendering-emotions.jpg" alt="profile picture" /> */}
      <Image
        src="/images/profile.webp"
        height={200}
        width={200}
        // placeholder="blur"
        alt="profile picture"
        style={{ borderRadius: 100 }}
      />
      <br />
      <h2 className="text-gray-300 bg-clip-text sm:text-xl md:text-3xl duration-1000 animate-fade-in font-semibold font-display">
        Hezron Onyango
      </h2>

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-md text-zinc-200 font-display text-edge-outline bg-yellow-900">
          Am a computer enthusiast, I use computers to make life easier.
        </h2>
      </div>
    </div>
  );
}
