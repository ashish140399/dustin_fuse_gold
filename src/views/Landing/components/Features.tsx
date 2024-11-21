import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
    GoldXFeaturesBG,
    GoldXFeaturesBottomBG,
    GoldXFeaturesMBBottomBG,
    GoldXFeaturesMBTopBG,
    GoldXFeaturesTopBG,
} from "../../../assets/BG/BG";
import { FeatureRowIcon } from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";
import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

const Features: React.FC = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Create refs for each FeatureWrapper
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);
    const ref4 = useRef<HTMLDivElement>(null);

    // Use useInView for each ref
    const inView1 = useInView(ref1, { margin: "-50% 0px -50% 0px" });
    const inView2 = useInView(ref2, { margin: "-50% 0px -50% 0px" });
    const inView3 = useInView(ref3, { margin: "-50% 0px -50% 0px" });
    const inView4 = useInView(ref4, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (inView1 && activeIndex !== 0) {
            setActiveIndex(0);
        } else if (inView2 && activeIndex !== 1) {
            setActiveIndex(1);
        } else if (inView3 && activeIndex !== 2) {
            setActiveIndex(2);
        } else if (inView4 && activeIndex !== 3) {
            setActiveIndex(3);
        }
    }, [inView1, inView2, inView3, inView4, activeIndex]);

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
        titlewhite: "GoldX",
        titlespan: "Features.",
        descriptionLines: [
            "Lorem ipsum dolor sit amet, consectetur elit, sed ",
            "tempor incididunt ut labore et dolore magna aliqua.",
        ],
    };
    return (
        <FeaturesSection>
            <SectionHeader className="paddingsclayoutx">
                <SectionTitle>
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
                    <GoldSpan>
                        {" "}
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
                    </GoldSpan>
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
                    ))}
                </SectionDescription>
            </SectionHeader>
            <FeaturesSectionWrapper className="marginborderboxx">
                <div className="topimgbg">
                    {windowDimensions?.width > mobileBreakpoint ? (
                        <GoldXFeaturesTopBG />
                    ) : (
                        <GoldXFeaturesMBTopBG />
                    )}
                </div>
                <FeaturesContainer>
                    <FramerFeatureWrapper
                        ref={ref1}
                        className={`paddingsclayoutx ${
                            activeIndex === 0 ? "active" : ""
                        }`}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{
                            delay: 0.3,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <FeatureNumber>01</FeatureNumber>
                        <FeatureIcon>
                            <FeatureRowIcon
                                style={{ opacity: activeIndex === 0 ? 1 : 0 }}
                            />
                        </FeatureIcon>
                        <FeatureTitle>
                            <div>Performance and Cost Efficiency</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            Swift block confirmation and low transaction costs
                            are ensured by the GOLDX blockchain, boasting an
                            average block interval of approximately 5 seconds
                            and transaction confirmation costs of under $0.01.
                        </FeatureDescription>
                    </FramerFeatureWrapper>

                    <FramerFeatureWrapper
                        ref={ref2}
                        className={`paddingsclayoutx ${
                            activeIndex === 1 ? "active" : ""
                        }`}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <FeatureNumber>02</FeatureNumber>
                        <FeatureIcon>
                            <FeatureRowIcon
                                style={{ opacity: activeIndex === 1 ? 1 : 0 }}
                            />
                        </FeatureIcon>
                        <FeatureTitle>
                            <div>Consensus Mechanism</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            The GOLDX blockchain utilizes a PoV variant for
                            consensus, reinforced by a mix of independent and
                            company-owned refiners. Refiners play a crucial
                            governance role on GOLDX, facilitating network
                            protocol changes through GOLDX Improvement Proposals
                            (FIPs).
                        </FeatureDescription>
                    </FramerFeatureWrapper>

                    <FramerFeatureWrapper
                        ref={ref3}
                        className={`paddingsclayoutx ${
                            activeIndex === 2 ? "active" : ""
                        }`}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{
                            delay: 0.9,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <FeatureNumber>03</FeatureNumber>
                        <FeatureIcon>
                            <FeatureRowIcon
                                style={{ opacity: activeIndex === 2 ? 1 : 0 }}
                            />
                        </FeatureIcon>
                        <FeatureTitle>
                            <div>Tokenization of Precious Metals</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            A standout feature of the GOLDX blockchain is its
                            ability to tokenize precious metals and real-world
                            assets, effectively reducing the volatility inherent
                            in traditional liquidity sources. At the core of the
                            network lies the native token, GOLDX.
                        </FeatureDescription>
                    </FramerFeatureWrapper>

                    <FramerFeatureWrapper
                        ref={ref4}
                        className={`paddingsclayoutx ${
                            activeIndex === 3 ? "active" : ""
                        }`}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{
                            delay: 1.2,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <FeatureNumber>04</FeatureNumber>
                        <FeatureIcon>
                            <FeatureRowIcon
                                style={{ opacity: activeIndex === 3 ? 1 : 0 }}
                            />
                        </FeatureIcon>
                        <FeatureTitle>
                            <div>Token Standards</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            The GOLDX chain's GX-20 and other token standards
                            empower the creation of diverse digital tokens,
                            enabling developers to launch their own projects and
                            products on the network.
                        </FeatureDescription>
                    </FramerFeatureWrapper>
                </FeaturesContainer>
                <div className="bottomimgbg">
                    {windowDimensions?.width > mobileBreakpoint ? (
                        <GoldXFeaturesBottomBG />
                    ) : (
                        <GoldXFeaturesMBBottomBG />
                    )}
                </div>
            </FeaturesSectionWrapper>
        </FeaturesSection>
    );
};

const FeaturesSectionWrapper = styled.div`
    position: relative;
    .topimgbg {
        margin-bottom: -10px;
        svg {
            width: 100%;
        }
    }
    .bottomimgbg {
        svg {
            width: 100%;
        }
    }
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--text-primary, #fff);
    text-transform: uppercase;
    margin: 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const GoldSpan = styled.span`
    color: var(--text-tertiary, #969696);
    display: block;
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--text-secondary, #cfcfcf);
    width: 40%;
    max-width: 600px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    background-color: #171615;
`;

const FeatureNumber = styled.span`
    font: 600 16px/40px Conthrax, sans-serif;
    color: var(--text-primary, #fff);
    width: 80px;
    padding: 16px 0;
`;

const FeatureIcon = styled.div`
    width: 140px;
    svg {
        width: 120px;
        margin-top: 12px;
        transition: all 0.3s ease;
    }
`;
const FeatureTitle = styled.h3`
    font: 600 30px/40px Conthrax, sans-serif;
    margin: 16px 0;
    // sum of featureicon and featurenumber width
    width: calc(50% - 110px);
    color: var(--Text-Tertiary, #969696);
    div {
        max-width: 400px;
    }
`;

const FeatureDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    width: calc(50% - 110px);
    color: var(--Text-Tertiary, #969696);
`;

const FeatureWrapper = styled.div`
    display: flex;
    color: var(--text-primary, #fff);
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--Lines-Divider, #383838);
    position: relative;
    &::after {
        position: absolute;
        content: "";
        height: 1px;
        background: #383838;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) scaleX(0);
        width: 100%;
        transform-origin: center;
        transition: transform 0.5s ease-in-out;
    }
    &.active {
        &::after {
            background: #e2b666;
            transform: translateX(-50%) scaleX(1);
        }
        ${FeatureTitle} {
            color: #fff;
        }
        ${FeatureDescription} {
            color: #fff;
        }
    }
    &:last-child {
        border-bottom: 0;
    }
`;
const FramerFeatureWrapper = motion(FeatureWrapper);
const FeaturesSection = styled.section`
    position: relative;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 40px 20px;
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
        ${FeatureWrapper} {
            flex-direction: column;
            flex-wrap: unset;
            ${FeatureIcon} {
                display: none;
            }
            ${FeatureTitle},${FeatureDescription} {
                width: 100%;
                div {
                    max-width: unset;
                }
            }
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 40px 10px;
        ${SectionTitle} {
            font-size: 32px;
            line-height: 40px;
        }
        ${SectionDescription} {
            font-size: 16px;
            line-height: 24px;
            margin-top: 0px;
        }
        ${FeatureWrapper} {
            padding: 30px 20px;
            ${FeatureNumber} {
                font-size: 14px;
                line-height: 24px;
                padding-bottom: 0px;
            }
            ${FeatureTitle} {
                font-size: 20px;
                line-height: 32px;
                margin-bottom: 0;
            }
            ${FeatureDescription} {
                font-size: 14px;
                line-height: 20px;
            }
        }
    }
`;
export default Features;
