import React from "react";
import styled from "styled-components";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { ArrowTransformIcon } from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";

const ProofOfReserve: React.FC = () => {
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
        titlewhite: "Proof",
        titlespan: "of reserve",
        descriptionLines: [
            "Lorem ipsum dolor sit amet, consectetur elit, do eiusmod tempor",
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
            "veniam, quis a nostrud exercitation ullamco.",
        ],
    };
    return (
        <MiningRightsSection className="paddingsclayoutx paddingsclayouty">
            <ContentWrapper>
                <TextContent>
                    <SectionTitle>
                        <GoldSpan>
                            {" "}
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
                        </GoldSpan>{" "}
                        {[...texts.titlespan].map((char, index) => (
                            <motion.span
                                key={index}
                                custom={{ index: index, delayOffset: 0.5 }}
                                viewport={{ once: false, amount: 0.3 }}
                                variants={textWavyVariants}
                                initial="hidden"
                                whileInView="visible"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </SectionTitle>
                    <SectionDescription>
                        {[...texts.descriptionLines].map((line, index) => (
                            <motion.div
                                key={index}
                                custom={{ index: index, delayOffset: 0.8 }}
                                variants={lineVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                {line}
                            </motion.div>
                        ))}{" "}
                    </SectionDescription>
                    <FramerActionButton
                        viewport={{ once: false }}
                        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} // Start fully clipped
                        whileInView={{
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                        }} // Reveal completely
                        transition={{
                            delay: 1,
                            duration: 0.6,
                            ease: "easeIn", // Smooth transition
                        }}
                    >
                        <ActionButton
                            label="Read Full Article"
                            variant="primary"
                            className="btnwidth100"
                            // @ts-ignore
                            icon={<ArrowTransformIcon />}
                        />
                    </FramerActionButton>
                </TextContent>
                <ImageWrapper>
                    <MiningImage
                        as={motion.img}
                        viewport={{ once: false, amount: 0.3 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                        }}
                        src="/images/common/proofofreserve.svg"
                        alt="Mining Rights Illustration"
                    />
                    <div className="customer">
                        <img src="/images/common/250cust.png" alt="" />
                    </div>
                </ImageWrapper>
            </ContentWrapper>
        </MiningRightsSection>
    );
};
const FramerActionButton = motion(styled.div``);

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 78px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
    }
`;

const TextContent = styled.div`
    flex: 1;
    max-width: 600px;
    .fullwidth {
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: #111;
    text-transform: uppercase;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const GoldSpan = styled.span`
    color: #969696;
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Text-Inactive, #707070);
    margin-top: 24px;
    margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
    // flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    .customer {
        position: absolute;
        left: 0;
        z-index: 2;
        width: 200px;
        top: 70px;
        transform: translateX(-50%);
        img {
            width: 100%;
        }
    }
`;

const MiningImage = styled.img`
    max-width: 100%;
    height: auto;
`;
const MiningRightsSection = styled.section`
    border-radius: 32px;
    background: var(--Typography-Primary-white, #fff);
    margin: 0 14px;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${SectionDescription} {
            width: 100%;
            margin-bottom: 20px;
        }
        ${SectionTitle} {
            margin: 0;
            margin-bottom: 10px;
            text-align: left;
            width: 100%;
        }
        ${ContentWrapper} {
            flex-direction: column-reverse;
            // padding: 50px 30px;
            ${ImageWrapper} {
                width: 100%;
                img {
                    width: 100%;
                }
                .customer {
                    display: none;
                }
            }
            ${TextContent} {
                flex: 1;
                max-width: unset;
            }
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        // padding: 40px 10px;
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

export default ProofOfReserve;
