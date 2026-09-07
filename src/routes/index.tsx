import { DocumentLayout } from "#/components/DocumentLayout";
import { ProjectGallery } from "#/components/ProjectGallery";
import { createSeoHead } from "#/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LazyMotion, MotionConfig, type Variants } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";

const natauangImages = Array.from(
  { length: 6 },
  (_, index) => `/images/projects/natauang/${index + 1}@natauang.png`,
);
const natatokoImages = Array.from(
  { length: 7 },
  (_, index) => `/images/projects/${index + 1}@natatoko.png`,
);

const loadMotionFeatures = () => import("#/lib/motion-features").then((module) => module.default);
const viewport = { amount: 0.18, margin: "0px 0px -10%", once: true } as const;

const revealItem = {
  hidden: { opacity: 0, transform: "translateY(14px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1] },
  },
} satisfies Variants;

const revealFromLeft = {
  hidden: { opacity: 0, transform: "translateX(-12px)" },
  visible: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1] },
  },
} satisfies Variants;

const revealFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.36, ease: [0.23, 1, 0.32, 1] },
  },
} satisfies Variants;

const revealHeading = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
    transform: "translateY(12px)",
  },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: 0.58, ease: [0.23, 1, 0.32, 1] },
  },
} satisfies Variants;

const staggerContent = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.04, staggerChildren: 0.06 },
  },
} satisfies Variants;

function AnimatedSectionHeading({ children, id }: { children: ReactNode; id: string }) {
  return (
    <m.div
      className="section-heading-motion"
      initial="hidden"
      variants={staggerContent}
      viewport={viewport}
      whileInView="visible"
    >
      <m.h2 id={id} variants={revealHeading}>
        {children}
      </m.h2>
    </m.div>
  );
}

export const Route = createFileRoute("/")({
  head: () =>
    createSeoHead({
      title: "Helmi Satria, Product Engineer",
      description:
        "Helmi Satria, Product Engineer at INA Digital Edu. Internal products, identity services, QA automation, design systems, and shared tools.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <DocumentLayout filePath="~/helmi-satria/README.md">
      <LazyMotion features={loadMotionFeatures} strict>
        <MotionConfig reducedMotion="user">
          <article className="page-content home-page">
        <section className="intro" aria-labelledby="page-title">
          <h1 id="page-title">
            <span aria-hidden="true">#</span> helmi satria
          </h1>
          <p className="lead">
            I build products and improve the tools teams use every day.
          </p>
          <p>
            Product Engineer with 8 years of experience and a frontend background. At INA Digital Edu, my work
            covers internal products, identity services, QA automation, and shared libraries. That includes deciding what to improve,
            building it, and keeping it working.
          </p>
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Open to engineering roles, consulting, and teaching.
          </p>
        </section>

        <hr />

        <section id="work" aria-labelledby="work-heading">
          <h2 className="work-heading" id="work-heading">
            <span aria-hidden="true">##</span> selected work
          </h2>

          <m.div
            className="entry"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.p className="entry-label" variants={revealItem}>
              platform · identity · developer experience
            </m.p>
            <m.h3 variants={revealItem}>
              <span aria-hidden="true">###</span> Shared services and developer tools
            </m.h3>
            <m.p variants={revealItem}>
              On the platform team, I work out what different product teams need in common and what we can build
              once for them to share.
            </m.p>
            <m.p variants={revealItem}>
              Architecture decisions involve the teams who will use and maintain what we build.
            </m.p>
            <m.p variants={revealItem}>
              My work includes maintaining QA automation tools for API and web testing, a design system component
              library, and a shared tooling library. It also covers our identity service, its auth SDK, and tools
              for content management.
            </m.p>
            <m.p variants={revealItem}>
              Reusable components, working examples, and documentation help teams get started and understand our
              decisions.
            </m.p>
          </m.div>

          <m.div
            className="entry"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.p className="entry-label" variants={revealItem}>
              workflow automation · organizational knowledge
            </m.p>
            <m.h3 variants={revealItem}>
              <span aria-hidden="true">###</span> Replacing repetitive compliance work
            </m.h3>
            <m.p variants={revealItem}>
              Every employee used to spend roughly 3 to 5 hours a month on repetitive compliance work. I decided to
              tackle it and built an internal platform to replace that process.
            </m.p>
            <m.p variants={revealItem}>
              Backstage is another tool under my care. It helps people find our products and services, who owns
              them, and how they connect. The work also includes supporting compliance tools for employees, PMO,
              and talent teams.
            </m.p>
          </m.div>

          <m.div
            className="entry"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.p className="entry-label" variants={revealItem}>
              internal products · test case management
            </m.p>
            <m.h3 variants={revealItem}>
              <span aria-hidden="true">###</span> Reworking Kiwi and moving off Xray
            </m.h3>
            <m.p variants={revealItem}>
              Kiwi is our test case management tool. My work includes reworking its interface so teams can find
              their way around, adding improvements, and fixing problems as they come up.
            </m.p>
            <m.p variants={revealItem}>
              I built a way for teams to move from Xray to Kiwi safely on their own. The switch is in progress, and
              we expect it to lower our software costs.
            </m.p>
          </m.div>

          <m.div
            className="entry"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.p className="entry-label" variants={revealItem}>
              internal products · documentation
            </m.p>
            <m.h3 variants={revealItem}>
              <span aria-hidden="true">###</span> Moving our docs to Outline
            </m.h3>
            <m.p variants={revealItem}>
              I led our move from Confluence to Outline. We kept years of docs and their organization intact, and
              cut our monthly software costs.
            </m.p>
            <m.p variants={revealItem}>
              Ongoing maintenance focuses on bugs, slow scrolling, and confusing navigation as our document
              collection grows.
            </m.p>
          </m.div>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <AnimatedSectionHeading id="projects-heading">
            <span aria-hidden="true">##</span> products I've built
          </AnimatedSectionHeading>

          <m.article
            className="project"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.div className="project-heading" variants={revealItem}>
              <div>
                <p className="entry-label">personal product · live</p>
                <h3>Natauang</h3>
              </div>
              <a href="https://web.natauang.com">web.natauang.com ↗</a>
            </m.div>
            <m.p variants={revealItem}>
              Natauang makes recording expenses quick. It works in the browser, including offline, and syncs your
              data across devices.
            </m.p>
            <m.div className="project-gallery-motion" variants={revealFade}>
              <ProjectGallery
                project="Natauang"
                images={natauangImages}
                imageWidth={612}
                imageHeight={726}
              />
            </m.div>
          </m.article>

          <m.article
            className="project"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.div className="project-heading" variants={revealItem}>
              <div>
                <p className="entry-label">personal product · live</p>
                <h3>Natatoko</h3>
              </div>
              <a href="https://natatoko.com">natatoko.com ↗</a>
            </m.div>
            <m.p variants={revealItem}>
              Natatoko lets people set up an online store without building one from scratch. They can customize the
              storefront, manage products and orders, and view business reports.
            </m.p>
            <m.div className="project-gallery-motion" variants={revealFade}>
              <ProjectGallery
                project="Natatoko"
                images={natatokoImages}
                imageWidth={1452}
                imageHeight={1452}
              />
            </m.div>
          </m.article>
        </section>

        <section id="experience" aria-labelledby="experience-heading">
          <AnimatedSectionHeading id="experience-heading">
            <span aria-hidden="true">##</span> experience
          </AnimatedSectionHeading>

          <m.div
            className="job"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.p className="job-date" variants={revealFromLeft}>
              2022 to now
            </m.p>
            <m.div variants={staggerContent}>
              <m.h3 variants={revealItem}>INA Digital Edu</m.h3>
              <m.p className="job-title" variants={revealItem}>
                Frontend Software Engineer
              </m.p>
              <m.p variants={revealItem}>
                My responsibilities include building and maintaining Kiwi, Outline, and Backstage, along with QA
                automation tools for API and web testing. The work also covers our design system component library,
                shared tooling library, and identity service, including its auth SDK.
              </m.p>
              <m.p variants={revealItem}>
                The role includes deciding what these tools need and working across frontend and backend to improve
                them. Guides, proposals, and working examples help teams adopt the changes.
              </m.p>
              <m.p className="note" variants={revealItem}>
                Performance rating: Exceeds Expectations
              </m.p>
            </m.div>
          </m.div>

          <m.div
            className="job"
            initial="hidden"
            variants={staggerContent}
            viewport={viewport}
            whileInView="visible"
          >
            <m.p className="job-date" variants={revealFromLeft}>
              2019 to 2022
            </m.p>
            <m.div variants={staggerContent}>
              <m.h3 variants={revealItem}>Bukalapak</m.h3>
              <m.p className="job-title" variants={revealItem}>
                Frontend Developer
              </m.p>
              <m.p variants={revealItem}>
                At Bukalapak, my work covered virtual products, performance, and reusable frontend code. It helped
                me grow as an individual contributor. One project was a configurable internal transaction tool that
                other teams could extend.
              </m.p>
              <m.p className="note" variants={revealItem}>
                1× Exceptional · 5× Exceeded Expectations
              </m.p>
            </m.div>
          </m.div>
        </section>

        <m.section
          aria-labelledby="approach-heading"
          initial="hidden"
          variants={staggerContent}
          viewport={viewport}
          whileInView="visible"
        >
          <m.h2 id="approach-heading" variants={revealHeading}>
            <span aria-hidden="true">##</span> how I work
          </m.h2>
          <m.p variants={revealItem}>
            I move quickly from a problem to working software, and stay involved after it ships. That means
            deciding what needs to change and taking responsibility for keeping the product useful and working.
          </m.p>
          <m.p variants={revealItem}>
            Frontend is my strongest area, but the work goes wherever the product needs it. Sometimes that means
            a backend change. Sometimes a small script or a better guide is enough.
          </m.p>
        </m.section>

        <m.section
          id="contact"
          aria-labelledby="contact-heading"
          initial="hidden"
          variants={staggerContent}
          viewport={viewport}
          whileInView="visible"
        >
          <m.h2 id="contact-heading" variants={revealHeading}>
            <span aria-hidden="true">##</span> contact
          </m.h2>
          <m.p variants={revealItem}>Have a problem that keeps coming back? Tell me about it.</m.p>
          <m.ul className="links" variants={staggerContent}>
            <m.li variants={revealItem}>
              <a href="mailto:satriahelmi@gmail.com">email</a>
            </m.li>
            <m.li variants={revealItem}>
              <a href="https://www.linkedin.com/in/helmisatria/">linkedin</a>
            </m.li>
            <m.li variants={revealItem}>
              <a href="https://github.com/helmisatria">github</a>
            </m.li>
          </m.ul>
        </m.section>
          </article>
        </MotionConfig>
      </LazyMotion>
    </DocumentLayout>
  );
}
