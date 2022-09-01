import helmiProfile from "../images/helmi.png";
import headerBackground from "../images/BG-Header.png";

export default function Index() {
  return (
    <main className="">
      <header
        className="px-6 pt-16 md:pt-40 bg-no-repeat bg-right md:bg-left bg-cover"
        style={{
          backgroundImage: `url(${headerBackground})`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl md:space-x-10 mx-auto">
          <img
            className="w-40 h-40 md:w-[180px] md:h-[180px] text-"
            src={helmiProfile}
            alt="helmi satria"
          />

          <div className="flex flex-col items-center md:items-start md:max-w-[29rem]">
            <div className="text-xs py-1 mt-7 md:mt-0 px-3 rounded-xl bg-blue-600 text-white font-bold">
              <span>Fullstack Javascript Developer</span>
            </div>

            <h1 className="text-3xl sm:text-5xl my-4 md:mt-4 md:mb-5 font-extrabold -tracking-[0.03rem]">
              Helmi Satria{" "}
              <span className="text-[2.5rem] md:text-5xl ">👋</span>
            </h1>

            <p className="text-sm sm:text-base leading-[150%] text-center md:text-left font-medium">
              Fullstack Javascript Developer who actively shares things on my
              Youtube and Twitter accounts about web development and other
              things to help other engineers in Indonesia
            </p>
          </div>
        </div>

        <p className="max-w-5xl mx-auto text-xl md:text-3xl !leading-[180%] py-14 md:pb-20 border-b-2 border-gray-200">
          Hi, I am a software engineer with more than 4 yoe in using Vue.js and
          5 yoe in using Node.js for full-stack development. I'm enthusiastic to
          explore new things and highly interested in building huge userbase
          applications using any web technology.
        </p>
      </header>
    </main>
  );
}
