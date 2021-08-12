import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="About Jatin Nagpal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles (Currently Empty)" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Jatin Nagpal" />
//        <InterestsSection sectionId="details" heading="Interests" />
        <ProjectsSection sectionId="features" heading="Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
