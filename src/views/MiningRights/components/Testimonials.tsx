import React from "react";
import styled from "styled-components";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TestiMonialSliderBox = ({ rtl }: any) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3400,
        cssEase: "linear",
        rtl: rtl,
    };
    return (
        <TestiMonialSliderBoxWrapper>
            <div className="slider-container">
                <Slider {...settings}>
                    {Array.from({ length: 12 }, (_, i) => (
                        <div className="testicardOuter" key={i}>
                            <img
                                src="/images/common/tesimonialcard.png"
                                alt="Card"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </TestiMonialSliderBoxWrapper>
    );
};
const Testimonials: React.FC = () => {
    const textWavyVariants = {
        hidden: { opacity: 0, y: -40 }, // Start off-screen below
        visible: ({
            index,
            delayOffset,
        }: {
            index: number;
            delayOffset: number;
        }) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: delayOffset + index * 0.1,
                duration: 0.3,
            }, // Stagger each line by 0.2s
        }),
    };

    const lineVariants = {
        hidden: { opacity: 0, y: -30 }, // Start off-screen below
        visible: ({
            index,
            delayOffset,
        }: {
            index: number;
            delayOffset: number;
        }) => ({
            opacity: 1,
            y: 0,
            transition: { delay: delayOffset + index * 0.5, duration: 0.3 }, // Stagger each line by 0.2s
        }),
    };

    const texts = {
        titlewhite: " What others",
        titlespan: "Say?",
        descriptionLines: [
            "Lorem ipsum dolor sit amet, consectetur elit, do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
            "veniam, quis a nostrud.",
        ],
    };
    return (
        <TestimonialsSectionWrapper className="marginborderboxx">
            <TestimonialsSection className=" paddingscbox">
                <SectionHeader className="paddingsclayoutx">
                    <SectionTitle>
                        <div>
                            {[...texts.titlewhite].map((char, index) => (
                                <motion.span
                                    key={index}
                                    custom={{ index: index, delayOffset: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={textWavyVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                >
                                    {char}
                                </motion.span>
                            ))}{" "}
                            <WhiteSpan>
                                {[...texts.titlespan].map((char, index) => (
                                    <motion.span
                                        key={index}
                                        custom={{
                                            index: index,
                                            delayOffset: 0.3,
                                        }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        variants={textWavyVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </WhiteSpan>
                        </div>
                    </SectionTitle>
                    <SectionDescription>
                        {[...texts.descriptionLines].map((line, index) => (
                            <motion.div
                                key={index}
                                custom={{ index: index, delayOffset: 0.4 }}
                                variants={lineVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                {line}
                            </motion.div>
                        ))}
                    </SectionDescription>
                </SectionHeader>
                <TestimonialsGrid>
                    {/* <img src="/images/common/testimonials.svg" alt="" /> */}
                    <TestiMonialSlider>
                        <TestiMonialSliderBox rtl={false} />
                        <TestiMonialSliderBox rtl={true} />
                    </TestiMonialSlider>
                </TestimonialsGrid>
            </TestimonialsSection>
        </TestimonialsSectionWrapper>
    );
};

const TestiMonialSlider = styled.div`
    box-sizing: border-box;
    width: 100%;
`;
const TestiMonialSliderBoxWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
    }
    .slick-arrow {
        display: none !important;
    }
    .slider-container,
    .slick-slider,
    .slick-list {
        height: 100% !important;
    }
    .testicardOuter {
        margin-bottom: 15px;
        img {
            width: 100%;
            height: auto;
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding-left: 8px;
        padding-right: 8px;
        .testicardOuter {
            margin-bottom: 10px;
        }
    }
`;
const TestimonialsSection = styled.section`
    display: flex;
    // background-color: var(--Brand-Dark, #111);
    height: 70vh;
    max-height: 700px;
    min-height: 400px;
    padding-right: 30px;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: space-between;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 0px;
    }
`;

const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 40px;
    max-width: 80%;

    @media screen and (min-width: ${mobileBreakpoint}px) {
        padding: 0;
        max-width: unset;
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 56px/60px Conthrax, sans-serif;
    color: var(--Brand-White, rgba(255, 255, 255, 0.4));
    text-transform: uppercase;
    line-height: 1.2;
    div {
        max-width: 480px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 48px;
    }
`;

const WhiteSpan = styled.span`
    color: var(--Brand-White, #fff);
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Brand-White, #fff);
    opacity: 0.8;
    max-width: 80%;
    margin: 0;
    padding-bottom: 40px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const TestimonialsGrid = styled.div`
    display: flex;
    width: 100%;
    max-width: 50vw;
    img {
        width: 100%;
        // height: 200%;
        object-fit: cover;
    }
`;
const TestimonialsSectionWrapper = styled.div`
    border-radius: 24px;
    border: 1px solid rgba(237, 206, 139, 0.4);
    background: linear-gradient(
        102deg,
        rgba(231, 214, 162, 0.1) -6.75%,
        rgba(106, 95, 62, 0.1) 101.51%
    );
    // margin: 0 14px;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${SectionHeader} {
            margin-bottom: 0;
            padding-top: 50px;
            padding-bottom: 50px;
            max-width: unset;
        }
        ${SectionDescription} {
            width: 100%;
            margin-bottom: 0px;
            padding: 0;
            max-width: unset;
        }
        ${SectionTitle} {
            margin: 0;
            margin-bottom: 10px;
            text-align: left;
            width: 100%;
        }
        ${TestimonialsSection} {
            flex-direction: column;
            overflow: hidden;
            ${TestimonialsGrid} {
                min-height: 60vh;
                max-width: unset;
            }
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        // padding: 40px 10px;
        padding-bottom: 20px;
        ${SectionTitle} {
            font-size: 32px;
            line-height: 40px;
        }
        ${SectionDescription} {
            font-size: 16px;
            line-height: 24px;
            margin-top: 0px;
        }
    }
`;

export default Testimonials;
