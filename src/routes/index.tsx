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
      title: "Helmi Satria — Software Engineer",
      description:
        "Helmi Satria is a software engineer who builds tools and products that make repeated work easier and faster.",
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
            I turn recurring problems into shared foundations that help teams move faster.
          </p>
          <p>
            I’m a software engineer with 8 years of experience. Frontend is my strongest discipline, but I work across
            product, architecture, and implementation to solve problems end to end.
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
              <span aria-hidden="true">###</span> Building what teams need in common
            </m.h3>
            <m.p variants={revealItem}>
              Our platform team builds services and tools around needs shared by more than one team. That means working
              across product tribes to understand different constraints, find common ground, and create foundations
              people can adopt without starting from zero.
            </m.p>
            <m.p variants={revealItem}>
              Part of my role is helping the team work through service architecture decisions. I dig into the problem,
              weigh trade-offs across frontend and backend, and help shape the direction before implementation begins.
            </m.p>
            <m.p variants={revealItem}>
              My responsibilities include maintaining our identity provider (IdP), a shared identity service used
              across tribes, and the authentication SDK that helps services integrate with it. I also contribute to and
              help manage the E2E boilerplate, CMS boilerplate, and frontend tooling used by teams across the
              organization.
            </m.p>
            <m.p variants={revealItem}>
              I also make these foundations easier to adopt through reusable components, clear documentation, RFCs,
              and proofs of concept, so teams can build on them without having to rediscover the same decisions.
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
              <span aria-hidden="true">###</span> Giving time back to the organization
            </m.h3>
            <m.p variants={revealItem}>
              On my own initiative, I built an internal platform that replaced a repetitive monthly process across the
              organization—work that previously took every employee roughly 3-5 hours each month.
            </m.p>
            <m.p variants={revealItem}>
              I also build and maintain systems that make the organization easier to navigate. In Backstage, I help
              people understand services, products, ownership, and dependencies. I support compliance tools used by
              employee, PMO, and talent teams, and maintain Outline as our internal documentation platform.
            </m.p>
            <m.p variants={revealItem}>
              When we moved from Confluence to Outline, I led the migration while preserving the original document
              hierarchy, content, and layout, so teams could keep working without losing years of organizational
              knowledge.
            </m.p>
          </m.div>
        </section>

        <section id="projects" aria-labelledby="projects-heading">
          <AnimatedSectionHeading id="projects-heading">
            <span aria-hidden="true">##</span> products I’ve built
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
              A simple expense tracker designed to make recording spending quick. It works in the browser, supports
              offline use, and keeps data in sync across devices.
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
              A tool for creating a customizable online store without starting from zero. It covers storefront setup,
              products, orders, design changes, and business reporting.
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
              2022 — now
            </m.p>
            <m.div variants={staggerContent}>
              <m.h3 variants={revealItem}>INA Digital Edu</m.h3>
              <m.p className="job-title" variants={revealItem}>
                Frontend Software Engineer
              </m.p>
              <m.p variants={revealItem}>
                I maintain shared identity and developer platforms, help shape service architecture, and collaborate
                across tribes on tools used beyond a single team. The role combines technical leadership with hands-on
                frontend and backend work.
              </m.p>
              <m.p variants={revealItem}>
                I often work on initiatives that span multiple tribes. I work with teams to identify shared needs,
                navigate architecture trade-offs, and turn recurring problems into foundations multiple products can
                build on. I stay hands-on through delivery and adoption, whether that requires code, documentation, an
                RFC, or a proof of concept.
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
              2019 — 2022
            </m.p>
            <m.div variants={staggerContent}>
              <m.h3 variants={revealItem}>Bukalapak</m.h3>
              <m.p className="job-title" variants={revealItem}>
                Frontend Developer
              </m.p>
              <m.p variants={revealItem}>
                I worked on virtual products, product performance, and reusable frontend foundations. The role helped me
                grow as an individual contributor, and included building a configurable internal transaction tool that
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
            Frontend is my strongest area, but I care more about solving the whole problem than staying inside a narrow
            job boundary.
          </m.p>
          <m.p variants={revealItem}>
            The answer might be an SDK, a service, a component, a script, or clearer documentation. I enjoy work that
            helps other people move faster and spend less time on repeated tasks.
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
