import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "../components/HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={
            "https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          alt="Profile Picture"
        />

        <form className="flex flex-grow border px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-x-3xl items-center">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transation
                duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 tezt-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>

        <Avatar
          className="ml-auto"
          url={
            "https://yt3.ggpht.com/yti/AJo0G0nutyDsq0zldvPr0jW5_Ve0P6lBLwbRuw1q9UH7Kg=s88-c-k-c0x00ffffff-no-rj-mo"
          }
          alt="Profile Picture"
        />
      </div>
      {/* HeaderOptions */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
