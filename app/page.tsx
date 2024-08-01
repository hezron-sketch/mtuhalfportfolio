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
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-grey">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
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
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text ">
        Hezron Onyango
      </h1>
      <br />

      {/* <img src="./public/3d-rendering-emotions.jpg" alt="profile picture" /> */}
      <Image
        src="/images/prof.jpg"
        height={200}
        width={200}
        // placeholder="blur"
        alt="profile picture"
        style={{ borderRadius: 100 }}
      />
      <br />
      <h2 className="text-gray-200 sm:text-xl md:text-3xl text-edge-outline duration-1000 animate-fade-in font-black font-display">
        Software Developer | Graphic Designer
      </h2>

      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-200 font-display">
          A computer enthusiast, I code ☕ and craft visuals🖼️.
        </h2>
      </div>
    </div>
  );
}
