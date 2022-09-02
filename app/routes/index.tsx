import helmiProfile from "../images/helmi.png";
import headerBackground from "../images/BG-Header.png";

import IconGovtech from "../images/Govtech.png";
import IconBL from "../images/BL.png";

import { NatanyaSvg } from "../svg/Natanya";
import { NatatokoSvg } from "../svg/Natatoko";

const CONTENT = {
  writings: [
    {
      url: "https://medium.com/@helmisatria/cara-mendapatkan-data-tweet-dari-twitter-e0ce79cdeed4",
      text: "Cara mendapatkan data tweet dari Twitter",
    },
    {
      url: "https://medium.com/@helmisatria/line-bot-101-cara-mudah-membuat-bot-di-line-61cd488f1b42",
      text: "Cara Mudah Membuat Bot di Line",
    },
  ],
  technologiesOftenUsed: [
    { img: IconGovtech, name: "Typescript" },
    { img: IconGovtech, name: "Remix.run" },
    { img: IconGovtech, name: "Next.js" },
    { img: IconGovtech, name: "Redis" },
    { img: IconGovtech, name: "Docker" },
    { img: IconGovtech, name: "PostgreSQL" },
    { img: IconGovtech, name: "Cloudflare Worker" },
  ],
  projects: [
    {
      icon: NatanyaSvg,
      title: "Natanya",
      description:
        "Open source project as the free alternatives of Slido and Mentimeter. This project is to help my team host a survey in a live event easily (like with slido) but without budget. It is also a project that I will used to demonstrate and learn react.js application in my Youtube channel",
      lowerDescription: () => (
        <p className="!leading-[180%] text-sm md:text-base">
          Check the open source project:{" "}
          <a
            className="underline"
            href="https://github.com/helmisatria/natanya"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/helmisatria/natanya
          </a>
          <br />
          Live project hosted in vercel:{" "}
          <a
            className="underline"
            href="https://natanya.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            https://natanya.vercel.app
          </a>
        </p>
      ),
      technologies: [
        {
          img: IconGovtech,
          name: "Next.js",
        },
        {
          img: IconGovtech,
          name: "React.js",
        },
      ],
      demo: [
        {
          img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
          alt: "Preview Natanya 1",
        },
        {
          img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
          alt: "Preview Natanya 2",
        },
        {
          img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
          alt: "Preview Natanya 3",
        },
      ],
    },
    {
      icon: NatatokoSvg,
      title: "Natatoko",
      description:
        "Build a customizable well designed web store in 5 minutes with ease and sell products that supported by comprehensive income estimation and web traffic analytics for our users",
      lowerDescription: () => (
        <p className="!leading-[180%] text-sm md:text-base">
          Check the application here:{" "}
          <a
            href="https://natatoko.com"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            https://natatoko.com
          </a>
        </p>
      ),
      technologies: [
        { img: IconGovtech, name: "Vue.js" },
        { img: IconGovtech, name: "Nuxt.js" },
        { img: IconGovtech, name: "Sentry" },
        { img: IconGovtech, name: "Hasura" },
        { img: IconGovtech, name: "Dokku" },
        { img: IconGovtech, name: "Cloudflare" },
        { img: IconGovtech, name: "Digital Ocean" },
        { img: IconGovtech, name: "Mixpanel" },
      ],
      demo: [
        {
          img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
          alt: "Preview Natatoko 1",
        },
        {
          img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
          alt: "Preview Natatoko 2",
        },
        {
          img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
          alt: "Preview Natatoko 3",
        },
      ],
    },
  ],
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

            <p className="text-sm sm:text-base !leading-[160%] text-center md:text-left font-medium text-sky-900">
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
        <div className="max-w-5xl mx-auto px-6 md:py-[5.2rem] border-b-2 border-sky-100 py-14">
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
                  <div data-sal="slide-right">
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
                    <div
                      data-sal="slide-up"
                      className="py-[2px] px-2 text-gray-900 font-bold text-xs bg-sky-100 rounded-lg mt-4"
                    >
                      <span>{experience.date}</span>
                    </div>

                    <p
                      data-sal="slide-up"
                      className="text-sm md:text-base font-semibold text-gray-900 mt-5 !leading-[180%]"
                    >
                      {experience.description}
                    </p>

                    <br></br>
                    <h4
                      data-sal="slide-up"
                      className="text-gray-900 font-semibold text-sm md:text-base"
                    >
                      Responsibilities and things I did:
                    </h4>

                    <ul className="text-sm md:text-base list-disc !leading-[180%]">
                      <div className="mt-2"></div>
                      {experience.responsibilities.map(
                        (responsibility, index) => (
                          <li data-sal="slide-up" className="ml-4" key={index}>
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>

                    {experience.appreciations && (
                      <>
                        <br></br>
                        <h4
                          data-sal="slide-up"
                          className="text-gray-900 font-semibold text-sm md:text-base"
                        >
                          Appreciation from the company:
                        </h4>
                        <ul className="text-sm md:text-base list-disc !leading-[180%]">
                          <div className="mt-2"></div>
                          {experience.appreciations.map(
                            (appreciation, index) => (
                              <li
                                data-sal="slide-up"
                                className="ml-4"
                                key={index}
                              >
                                {appreciation}
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}

                    <br></br>
                    <h4
                      data-sal="slide-up"
                      className="text-gray-900 font-semibold text-sm md:text-base"
                    >
                      Technology Skills
                    </h4>

                    <ul className="flex space-x-3 mt-5">
                      {experience.technologies.map((technology, index) => (
                        <li
                          data-sal="slide-up"
                          key={index}
                          className="text-sm !leading-[180%] font-semibold text-gray-600 shadow-sm border-1 border-gray-100 rounded-lg bg-white"
                        >
                          <div className="flex flex-col items-center space-y-3 py-2 px-3">
                            <img
                              loading="lazy"
                              src={technology.img}
                              alt={technology.name}
                              className="h-10"
                            />
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

      <section className="bg-sky-50 bg-opacity-60">
        <div className="max-w-5xl mx-auto px-6 md:py-24 py-16">
          <h2 className="mb-16 text-2xl md:text-[2rem] font-extrabold -tracking-[0.03em] text-slate-900">
            <span className="inline-block mr-2">🚀</span> Side Projects
          </h2>

          <div>
            <ul className="space-y-20">
              {CONTENT.projects.map(
                (
                  {
                    icon: Icon,
                    lowerDescription: LowerDescription,
                    ...project
                  },
                  index
                ) => (
                  <li
                    key={index}
                    className="md:w-[48rem] md:border-l-4 md:pl-14 border-sky-100 border-opacity-60"
                  >
                    <h3 data-sal="slide-up">
                      <span className="sr-only">{project.title}</span>
                      <span className="w-[7.75rem] inline-block">
                        <Icon />
                      </span>
                    </h3>

                    <p
                      data-sal="slide-up"
                      className="!leading-[180%] mt-10 mb-6 text-sm md:text-base font-semibold"
                    >
                      {project.description}
                    </p>

                    <div data-sal="slide-up">
                      <LowerDescription />
                    </div>

                    <h4
                      data-sal="slide-up"
                      className="text-xl md:text-lg mt-6 font-extrabold !leading-[180%]"
                    >
                      Technologies
                    </h4>

                    <ul
                      data-sal="slide-up"
                      className="flex gap-3 flex-wrap mt-5"
                    >
                      {project.technologies.map((technology, index) => (
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

                    <h4
                      data-sal="slide-up"
                      className="text-xl md:text-lg mt-6 font-extrabold !leading-[180%]"
                    >
                      Preview
                    </h4>

                    <ul className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 mt-5">
                      {project.demo.map((demo, index) => (
                        <li key={index} data-sal="slide-up">
                          <img
                            loading="lazy"
                            width={200}
                            height={120}
                            className="md:w-[12.5rem] md:h-[7.5rem] w-full h-[8rem] object-cover rounded-lg shadow border border-sky-50"
                            src={demo.img}
                            alt={demo.alt}
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 bg-opacity-60">
        <div className="max-w-5xl mx-auto px-6 md:pb-24 py-16">
          <h2 className="md:mb-16 mb-10 text-2xl md:text-[2rem] font-extrabold -tracking-[0.03em] text-slate-900">
            <span className="inline-block mr-2">⚙️</span> Technologies Often
            Used
          </h2>

          <ul className="flex gap-3 md:max-w-[32rem] flex-wrap">
            {CONTENT.technologiesOftenUsed.map((technology, index) => (
              <li
                data-sal="slide-up"
                key={index}
                className="text-sm md:text-base !leading-[180%] font-semibold shadow-sm border-1 border-gray-100 rounded-lg bg-white"
              >
                <div className="flex flex-col items-start space-y-3 py-2 px-3">
                  <img
                    loading="lazy"
                    src={technology.img}
                    alt={technology.name}
                    className="h-10"
                  />
                  <span>{technology.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sky-50 bg-opacity-60 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:pb-24 py-16">
          <h2 className="md:mb-16 mb-10 text-2xl md:text-[2rem] font-extrabold -tracking-[0.03em] text-slate-900">
            <span className="inline-block mr-2">✍️</span> Writings
          </h2>

          <p
            data-sal="slide-up"
            className="!leading-[180%] md:max-w-[37rem] mb-8 text-sm md:text-base"
          >
            It is not a big list but I'm in the way to add more writings while
            actively updating my youtube channel, stay tuned for more updates.
          </p>

          <ul className="!leading-[180%] flex gap-3 md:max-w-[32rem] flex-wrap list-disc">
            {CONTENT.writings.map((writing, index) => (
              <li
                data-sal="slide-up"
                key={index}
                className="pl-2 ml-4 text-sky-800 md:text-lg hover:underline"
              >
                <a
                  href={writing.url}
                  target="_blank"
                  rel="noreferrer"
                  className="visited:text-sky-900"
                >
                  {writing.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-sky-900 pb-8 md:pb-[5rem] md:pt-[9rem] pt-[4rem]">
        <div className="max-w-5xl px-6 mx-auto text-white">
          <h2
            data-sal="fade"
            data-sal-delay="800"
            data-sal-duration="500"
            className="font-bold text-2xl md:text-3xl"
          >
            🤝 Let's get in touch
          </h2>

          <p className="text-sky-200 flex flex-col-reverse md:flex-col font-semibold leading-[150%] md:leading-[130%] text-3xl md:text-[4rem] pt-[5rem] md:pb-[4.5rem] pb-10">
            <span
              data-sal="slide-up"
              data-sal-easing="ease-out-back"
              className="inline"
            >
              Suka kopi, mau ngopi bareng?
            </span>
            <span
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease-out-back"
              className="inline"
            >
              Have any project ideas?
            </span>
            <span
              data-sal="slide-up"
              data-sal-delay="600"
              data-sal-easing="ease-out-back"
              className="inline"
            >
              Ask something?
            </span>
          </p>

          <p
            data-sal="slide-up"
            data-sal-delay="800"
            data-sal-duration="500"
            data-sal-easing="ease-out-back"
            className="text-sky-50 text-sm md:text-xl md:mb-[9rem] mb-20"
          >
            Contact me via{" "}
            <a
              className="underline"
              target="_blank"
              href="mailto:satriahelmi@gmail.com"
              rel="noreferrer"
            >
              email
            </a>
            ,{" "}
            <a
              className="underline"
              target="_blank"
              href="https://twitter.com/helmisatria_"
              rel="noreferrer"
            >
              twitter
            </a>
            , or{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.youtube.com/channel/UC5ZR_JynIx14bmcZP_Pz8vw"
              rel="noreferrer"
            >
              my youtube channel
            </a>{" "}
            <span className="text-sky-300">(boleh subscribe 😜)</span>
          </p>

          <p
            data-sal="slide-up"
            data-sal-delay="1000"
            data-sal-easing="ease-out-back"
            className="font-semibold text-sky-300 text-opacity-70 text-sm md:w-full"
          >
            Made with{" "}
            <a href="https://remix.run" target="_blank" rel="noreferrer">
              Remix.run
            </a>{" "}
            and designed with love ❤️ by Helmi Satria
          </p>
        </div>
      </footer>
    </main>
  );
}
