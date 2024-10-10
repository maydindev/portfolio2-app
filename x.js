import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFDD55] min-h-screen flex flex-col">
      <nav className="flex justify-between items-center rounded-bl-3xl rounded-br-3xl bg-black text-white px-8 py-4 md:px-[5em] md:py-[1em]">
        <a href="">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 md:w-14 md:h-14" />
        </a>
        <div className="hidden md:flex justify-center items-center text-xl font-extrabold">
          <ul className="flex gap-[20px] md:gap-[60px] text-xl md:text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="md:hidden">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </nav>

      <section className="flex flex-col md:flex-row justify-between items-center flex-grow my-10 mx-5 md:mx-10">
        <div className="flex flex-col text-center md:text-left">
          <div className="m-5">
            <p className="text-5xl md:text-6xl font-bold leading-[40px] md:leading-[50px]">Hello,</p>
            <p className="text-5xl md:text-6xl font-bold leading-[80px] md:leading-[100px]">I'm Namık.</p>
            <p className="text-xl md:text-3xl">UI/UX Designer, React Developer</p>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-xl rounded-xl shadow-lg shadow-[#00c6ae]/50">
              Hire me
            </button>
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-xl rounded-xl shadow-lg shadow-[#00c6ae]/50">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 md:mt-0">
          <img src="/avatar.png" alt="My Picture" className="w-40 h-auto" />
          <div className="flex justify-center mt-4 gap-4">
            <img src="instagram.png" alt="Instagram" className="w-8 h-8" />
            <img src="facebook.png" alt="Facebook" className="w-8 h-8" />
            <img src="twitter.png" alt="Twitter" className="w-8 h-8" />
            <img src="youtube.png" alt="Youtube" className="w-8 h-8" />
          </div>
        </div>
      </section>
    </div>
  );
}
