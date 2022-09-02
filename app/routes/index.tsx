import helmiProfile from "../images/helmi.png";
import headerBackground from "../images/BG-Header.png";

import IconGovtech from "../images/Govtech.png";
import IconBL from "../images/BL.png";

const CONTENT = {
  experiences: [
    {
      companyIcon: IconGovtech,
      title: "Govtech Edu @ Telkom Indonesia",
      job: "as Frontend Developer",
      date: "Jul 2022 - Present",
      description:
        "Working on the core web experience team that focusing on developer experience, design system, and web performance.",
      responsibilities: [
        "Lead or contribute to technical design, implementation, deployment, and operational excellence efforts to build and run scalable solutions for complex engineering challenges.",
        "Champion high-quality products and services through adopting best practices in resilience, observability, maintainability, and testing.",
        "Collaborate with cross-functional teams in delivering customer-centric tech products and services.",
      ],
      technologies: [
        {
          img: IconGovtech,
          name: "React",
        },
        {
          img: IconGovtech,
          name: "Next.js",
        },
      ],
    },
    {
      companyIcon: IconBL,
      title: "Bukalapak.com",
      job: "as Frontend Developer",
      date: "Apr 2019 - Jul 2022 · 3 yrs 4 mos",
      description:
        "Working on the virtual product development team using Vue.js and creating a scalable product, page, and component that is used by all across the teams",
      responsibilities: [
        "Maintaining web page performance and create a guideline for other engineers",
        "Ship a high quality code and result with minimum bug deployed to production",
        "Have a good way to explain things clearly to the team even to the non-technical person",
        "Improve a product page performance score from 20 to 80 (in fragment-based architecture that is harder than usual)",
        "Create a universal application (bukalapak admin transaction) used by all across the team in Bukalapak, so someone can add a new product easily using a templated config",
      ],
      appreciations: [
        "Performance appraisal results told that I am 1x Exceptional and 5x Exceeded Expectations",
      ],
      technologies: [
        {
          img: IconGovtech,
          name: "Vue.js",
        },
        {
          img: IconGovtech,
          name: "Nuxt.js",
        },
      ],
    },
  ],
};

export default function Index() {
  return (
    <main>
      <header
        className="px-6 pt-16 md:pt-40 bg-no-repeat bg-right md:bg-left bg-cover"
        style={{
          backgroundImage: `url(${headerBackground})`,
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl md:space-x-10 mx-auto">
          <img
            height={160}
            width={160}
            className="w-40 h-40 md:w-[180px] md:h-[180px]"
            src={helmiProfile}
            alt="helmi satria"
          />

          <div className="flex flex-col items-center md:items-start md:max-w-[29rem]">
            <div className="text-xs py-1 mt-7 md:mt-0 px-3 rounded-xl bg-sky-600 text-white font-bold">
              <span>Fullstack Javascript Developer</span>
            </div>

            <h1 className="text-3xl sm:text-5xl my-4 md:mt-4 md:mb-5 font-extrabold text-sky-900 -tracking-[0.03em]">
              Helmi Satria{" "}
              <span className="text-[2.5rem] md:text-5xl ">👋</span>
            </h1>

            <p className="text-sm sm:text-base leading-[150%] text-center md:text-left font-medium text-sky-900">
              Fullstack Javascript Developer who actively shares things on my
              Youtube and Twitter accounts about web development and other
              things to help other engineers in Indonesia
            </p>
          </div>
        </div>

        <p className="max-w-5xl text-sky-900 mx-auto text-xl md:text-3xl !leading-[180%] py-14 md:pb-20 border-b-2 border-sky-100">
          Hi, I am a software engineer with more than 4 yoe in using Vue.js and
          5 yoe in using Node.js for full-stack development. I'm enthusiastic to
          explore new things and highly interested in building huge userbase
          applications using any web technology.
        </p>
      </header>

      <section className="bg-sky-100  bg-opacity-[15%]">
        <div className="max-w-5xl mx-auto px-6 md:py-20 border-b-2 border-sky-100 py-14">
          <h2 className="text-2xl md:text-[2rem] font-extrabold -tracking-[0.03em] text-slate-900">
            <span className="inline-block mr-2">💼</span> Experiences
          </h2>

          <ul className="max-w-[43rem]">
            {CONTENT.experiences.map((experience, index) => (
              <li
                key={index}
                className="flex flex-col items-start !leading-[180%] pt-14"
              >
                <div className="flex space-x-4 md:space-x-6 leading-normal">
                  <img
                    className="w-10 h-10"
                    src={experience.companyIcon}
                    alt=""
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {experience.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-gray-900">
                      {experience.job}
                    </p>
                  </div>
                </div>

                <div className="flex md:space-x-16">
                  <div></div>

                  <div className="flex flex-col items-start">
                    <div className="py-[2px] px-2 text-gray-900 font-bold text-xs bg-sky-100 rounded-lg mt-4">
                      <span>{experience.date}</span>
                    </div>

                    <p className="text-sm md:text-base font-semibold text-gray-900 mt-5 !leading-[180%]">
                      {experience.description}
                    </p>

                    <br></br>
                    <h4 className="text-gray-900 font-semibold text-sm md:text-base">
                      Responsibilities and things I did:
                    </h4>

                    <ul className="text-sm md:text-base list-disc !leading-[180%]">
                      <div className="mt-2"></div>
                      {experience.responsibilities.map(
                        (responsibility, index) => (
                          <li className="ml-4" key={index}>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>

                    {experience.appreciations && (
                      <>
                        <br></br>
                        <h4 className="text-gray-900 font-semibold text-sm md:text-base">
                          Appreciation from the company:
                        </h4>
                        <ul className="text-sm md:text-base list-disc !leading-[180%]">
                          <div className="mt-2"></div>
                          {experience.appreciations.map(
                            (appreciation, index) => (
                              <li className="ml-4" key={index}>
                                {appreciation}
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}

                    <br></br>
                    <h4 className="text-gray-900 font-semibold text-sm md:text-base">
                      Technology Skills
                    </h4>

                    <ul className="flex space-x-3 mt-5">
                      {experience.technologies.map((technology, index) => (
                        <li
                          key={index}
                          className="text-sm !leading-[180%] font-semibold text-gray-600 shadow-sm border-1 border-gray-100 rounded-lg bg-white"
                        >
                          <div className="flex flex-col items-center space-y-3 py-2 px-3">
                            <img src={technology.img} alt="" className="h-10" />
                            <span>{technology.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 md:py-20">
          <h2 className="text-2xl md:text-[2rem] font-extrabold -tracking-[0.03em] text-slate-900">
            <span className="inline-block mr-2">🚀</span> Side Projects
          </h2>
        </div>
      </section>
    </main>
  );
}
