import helmiProfile from "../images/helmi.png";

export default function Index() {
  return (
    <main className="max-w-5xl mx-auto">
      <header className="px-5 mt-16 flex flex-col items-center">
        <img
          className="w-40 h-40 md:w-44 md:h-44 text-"
          src={helmiProfile}
          alt="helmi satria"
        />

        <div className="text-xs py-1 mt-7 px-3 rounded-xl bg-blue-600 text-white font-bold">
          <span>Fullstack Javascript Developer</span>
        </div>

        <h1 className="text-3xl my-4 font-extrabold tracking-[-3%]">
          Helmi Satria <span className="text-[2.5rem]">👋</span>
        </h1>

        <p className="text-sm leading-[150%] text-center font-medium">
          Fullstack Javascript Developer who actively shares things on my
          Youtube and Twitter accounts about web development and other things to
          help other engineers in Indonesia
        </p>

        <p className="text-xl leading-[180%] my-14">
          Hi, I am a software engineer with more than 4 yoe in using Vue.js and
          5 yoe in using Node.js for full-stack development. I'm enthusiastic to
          explore new things and highly interested in building huge userbase
          applications using any web technology.
        </p>
      </header>
    </main>
  );
}
