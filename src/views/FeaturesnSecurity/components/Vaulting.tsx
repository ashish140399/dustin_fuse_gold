import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import { WhyGoldXBG } from "../../../assets/BG/BG";
import { WhyGoldXBottomIcon } from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface BenefitCardProps {
    title: string;
    description: string;
}

// Define an interface for the component props
interface CardWrapperProps {
    bottomsvgWidth?: string; // Optional prop, defaults to '70px' if not provided
}

const Vaulting: React.FC = () => {
    const cardWrapperRef = useRef(null); // Ref to attach to the CardWrapper
    const [bottomIconWidth, setBottomIconWidth] = useState(0); // State for bottom icon width
    const { windowDimensions } = useContext(SiteVariablesContext);
    useEffect(() => {
        // Function to update width based on window dimensions
        const updateWidth = () => {
            const width = cardWrapperRef.current
                ? // @ts-ignore
                  cardWrapperRef.current.offsetWidth
                : 0;

            setBottomIconWidth(width / 5.525); // Example: adjust bottom icon width calculation as needed
        };

        updateWidth(); // Run once on mount and then whenever window dimensions change
    }, [windowDimensions]); // Dependency on windowDimensions width and height
    const benefits: BenefitCardProps[] = [
        {
            title: "Hybrid NFT Utility, Multi-Use case",
            description:
                "Benefit from contracts with no diminishing power over time, ensuring consistent value and performance.",
        },
        {
            title: "High Security Vaults",
            description:
                "Enjoy seamless investment without the hassle of managing physical assets or hardware.",
        },
        {
            title: "Life Time Mining Rights with no loss of power",
            description:
                "Transfer, sell, or redeem your assets anytime, offering unmatched liquidity and flexibility.",
        },
    ];

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
        titlewhite: "Vaulting",
        titlespan: "In London",
        descriptionLines: [
            "Lorem ipsum dolor sit amet, consectetur ",
            "tempor incididunt ut labore",
            "ad minim veniam, quis nostrud .",
        ],
    };
    return (
        <WhyGoldXSection>
            <SectionHeader>
                <FramerSectionTitle>
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
                    ))}
                    <GoldSpan>
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
                </FramerSectionTitle>
                <SectionDescription>
                    {[...texts.descriptionLines].map((line, index) => (
                        <motion.div
                            key={index}
                            custom={{ index: index, delayOffset: 1.2 }}
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
            <BenefitsContainer>
                <MotionCardWrapperOuter
                    viewport={{ once: false, amount: 0.3 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.3,
                    }}
                >
                    <CardWrapper
                        ref={cardWrapperRef}
                        bottomsvgWidth={`${bottomIconWidth}px`}
                    >
                        <CardContent>
                            <CardTitle>{benefits[0].title}</CardTitle>
                            <CardDescription>
                                {benefits[0].description}
                            </CardDescription>
                        </CardContent>
                        <div className="cardbg">
                            <WhyGoldXBG />
                        </div>
                        <div className="bottomicon">
                            <WhyGoldXBottomIcon />
                        </div>
                    </CardWrapper>{" "}
                </MotionCardWrapperOuter>{" "}
                <MotionCardWrapperOuter
                    viewport={{ once: false, amount: 0.3 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0,
                        duration: 0.3,
                    }}
                >
                    <img
                        src="/images/common/VaultingLondon.svg"
                        className="whygoldximg"
                        alt=""
                    />
                    <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                        <CardContent>
                            <CardTitle>{benefits[1].title}</CardTitle>
                            <CardDescription>
                                {benefits[1].description}
                            </CardDescription>
                        </CardContent>
                        <div className="cardbg">
                            <WhyGoldXBG />
                        </div>
                        <div className="bottomicon">
                            <WhyGoldXBottomIcon />
                        </div>
                    </CardWrapper>{" "}
                </MotionCardWrapperOuter>{" "}
                <MotionCardWrapperOuter
                    viewport={{ once: false, amount: 0.3 }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.3,
                    }}
                >
                    <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                        <CardContent>
                            <CardTitle>{benefits[2].title}</CardTitle>
                            <CardDescription>
                                {benefits[2].description}
                            </CardDescription>
                        </CardContent>
                        <div className="cardbg">
                            <WhyGoldXBG />
                        </div>
                        <div className="bottomicon">
                            <WhyGoldXBottomIcon />
                        </div>
                    </CardWrapper>
                </MotionCardWrapperOuter>
            </BenefitsContainer>
        </WhyGoldXSection>
    );
};

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 0 20px;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--text-primary, #fff);
    text-transform: uppercase;
    div {
        position: relative;
        display: inline-flex;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 44px;
    }
`;
const FramerSectionTitle = motion(SectionTitle);

const GoldSpan = styled.div`
    color: var(--text-tertiary, #969696);
    margin-left: 10px;
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--text-secondary, #cfcfcf);
    width: 50%;
    max-width: 700px;
    margin: 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const BenefitsContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;

const CardWrapperOuter = styled.div`
    flex: 1;
    min-width: 240px;
    .whygoldximg {
        width: 100%;
        margin-bottom: 20px;
    }
`;
const MotionCardWrapperOuter = motion(CardWrapperOuter);
const CardWrapper = styled.div<CardWrapperProps>`
    background: linear-gradient(to top, transparent 55%, #121212 25%);
    overflow: hidden;
    border-radius: 32px;
    min-height: 380px;
    // height: 100%;
    box-sizing: border-box;
    position: relative;
    @media (min-width: ${mobileBreakpoint}px) and (max-width: ${smscreenBreakpoint}px) {
        background: linear-gradient(to top, transparent 40%, #121212 25%);
    }
    .cardbg {
        position: absolute;
        bottom: 0;
        left: 0;
        /* height: 100%; */
        width: 100%;
        z-index: 0;
        object-fit: contain;
        svg {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
    .bottomicon {
        position: absolute;
        bottom: 0;
        right: 0;
        svg {
            width: ${(props) => props.bottomsvgWidth || "70px"};
            height: auto;
        }
        cursor: pointer;
        z-index: 3;
        transform-origin: bottom right;
        transition: transform 0.3s ease-in-out;
        &:hover {
            transform: scale(1.05);
        }
    }
`;

const CardIcon = styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
`;

const CardContent = styled.div`
    color: var(--text-primary, #fff);
    position: relative;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    padding: 40px;
    box-sizing: border-box;
`;

const CardTitle = styled.h3`
    font: 600 30px/40px Conthrax, sans-serif;
    margin: 0;
    margin-bottom: 24px;
    word-wrap: break-word;
    @media screen and (max-width: 1300px) {
        font-size: 24px;
        margin-bottom: 18px;
    }
`;

const CardDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--text-Ssecondary, #cfcfcf);
    margin: 0;
`;
const WhyGoldXSection = styled.section`
    padding: 160px 80px 80px;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 100px 20px 0;
        ${BenefitsContainer} {
            flex-direction: column;
            flex-wrap: unset;
            ${CardWrapperOuter} {
                margin-bottom: 40px;
            }
        }
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
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 60px 10px 0;
        ${SectionTitle} {
            font-size: 32px;
        }
        ${SectionDescription} {
            font-size: 16px;
        }
        ${CardWrapperOuter} {
            margin-bottom: 20px !important;
        }
        ${CardWrapper} {
            min-height: 270px;
            ${CardContent} {
                padding: 26px;
                ${CardTitle} {
                    font-size: 20px;
                }
                ${CardDescription} {
                    font-size: 14px;
                }
            }
        }
    }
`;
export default Vaulting;
