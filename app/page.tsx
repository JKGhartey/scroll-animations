"use client";

import Card, { CardProps } from "./components/Card";
import { motion, useScroll, useTransform } from "framer-motion";

import Footer from "./components/Footer";
import FullPage from "./components/FullPage";
import Header from "./components/Header/Header";
import HorizontalWrapper from "./components/HorizontalWrapper";
import React from "react";
import SectionLayout from "./components/SectionLayout";
import TextSection from "./components/TextSection";
import ZoomSection from "./components/ZoomSection";
import { cards } from "./utils/card";
import styled from "styled-components";

export default function Home() {
  const video = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <>
      <Header />
      <MainStyled>
        <SectionLayout>
          <HorizontalWrapper
          height="40rem" direction={-1400}
          >
            <div className="cards">
              {cards.map((card: CardProps, index: number) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <FullPage />

        <SectionLayout>
          <HorizontalWrapper
           height="40rem" direction={1400}
          >
            <div className="cards" style={{ right: 0 }}>
              {cards.map((card: CardProps, index: number) => {
                return (
                  <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                );
              })}
            </div>
          </HorizontalWrapper>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <SectionLayout>
          <motion.div
            className="video"
            ref={video}
            style={{
              opacity,
              scale,
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/OuaUjkZhfqQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </SectionLayout>

        <SectionLayout>
          <ZoomSection></ZoomSection>
        </SectionLayout>

        <SectionLayout>
          <TextSection />
        </SectionLayout>

        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;

  .cards {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, 30rem);
    gap: 4rem;
  }

  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
