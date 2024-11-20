import React from "react";
import styled from "styled-components";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";

const Testimonials: React.FC = () => {
    return (
        <TestimonialsSectionWrapper>
            <TestimonialsSection>
                <SectionHeader className="paddingsclayoutx">
                    <SectionTitle>
                        <div>
                            What others <WhiteSpan>Say?</WhiteSpan>
                        </div>
                    </SectionTitle>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur elit, do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis.
                    </SectionDescription>
                </SectionHeader>
                <TestimonialsGrid>
                    <img src="/images/common/testimonials.svg" alt="" />
                </TestimonialsGrid>
            </TestimonialsSection>
        </TestimonialsSectionWrapper>
    );
};

const TestimonialsSection = styled.section`
    display: flex;
    // background-color: var(--Brand-Dark, #111);
    height: 70vh;
    max-height: 700px;
    min-height: 400px;
    padding-right: 30px;
    padding-left: 100px;
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
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
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
    margin: 0 14px;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        margin-bottom: 50px;
        margin-top: 50px;
        ${SectionHeader} {
            margin-bottom: 0;
            padding-top: 50px;
            padding-bottom: 50px;
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
