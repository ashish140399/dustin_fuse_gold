import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { WhyShouldYouBuyBG } from "../../../assets/BG/BG";
import { WhyGoldXBottomIcon } from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import { motion } from "framer-motion";
interface BenefitCardProps {
    title: string;
    description: string;
}

// Define an interface for the component props
interface CardWrapperProps {
    bottomsvgWidth?: string; // Optional prop, defaults to '70px' if not provided
}
const WhyShouldYouBuy: React.FC = () => {
    const cardWrapperRef = useRef(null); // Ref to attach to the CardWrapper
    const [cardWrapperWidth, setCardWrapperWidth] = useState(0); // State to store the width
    const [bottomIconWidth, setBottomIconWidth] = useState(0); // State for bottom icon width

    useEffect(() => {
        // Function to update width
        const updateWidth = () => {
            const width = cardWrapperRef.current
                ? // @ts-ignore
                  cardWrapperRef.current.offsetWidth
                : 0;
            setCardWrapperWidth(width);
            setBottomIconWidth(width / 7); // Example: set bottom icon width as half of card wrapper
        };

        updateWidth(); // Initial check
        window.addEventListener("resize", updateWidth); // Adjust on window resize

        return () => {
            window.removeEventListener("resize", updateWidth); // Cleanup listener
        };
    }, []);
    const benefits: BenefitCardProps[] = [
        {
            title: "No Hardware No Hassle",
            description:
                "Enjoy seamless investment without the hassle of managing physical assets or hardware.",
        },
        {
            title: "Hybrid NFT Utility, Multi-Use case",
            description:
                "Benefit from contracts with no diminishing power over time, ensuring consistent value and performance.",
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
        titlewhite: "Why Should",
        titlespan: "you Buy?",
        descriptionLines: [
            "Explore secure, efficient transactions and",
            "tokenization of mining rights, backed by the",
            "stability and innovation of the GOLDX blockchain.",
        ],
    };

    const leftColumnRef = useRef<HTMLDivElement | null>(null);
    const rightColumnRef = useRef<HTMLDivElement | null>(null);

    const [leftColumnWidth, setLeftColumnWidth] = useState("50%"); // Initial width
    const [rightColumnWidth, setRightColumnWidth] = useState("50%"); // Initial width

    useEffect(() => {
        const adjustWidths = () => {
            // Get the heights of both columns
            const leftHeight = leftColumnRef.current?.offsetHeight || 0;
            const rightHeight = rightColumnRef.current?.offsetHeight || 0;
            console.log("leftHeight", leftHeight, rightHeight);
            if (leftHeight && rightHeight) {
                // Calculate widths proportionally
                const totalHeight = leftHeight + rightHeight;
                setLeftColumnWidth(`${(leftHeight / totalHeight) * 100}%`);
                setRightColumnWidth(`${(rightHeight / totalHeight) * 100}%`);
            }
        };

        adjustWidths(); // Initial adjustment

        // Recalculate widths on window resize
        window.addEventListener("resize", adjustWidths);
        return () => window.removeEventListener("resize", adjustWidths);
    }, []);
    return (
        <WhyShouldYouBuySection className="paddingsclayoutx ">
            <Container>
                <LeftColumn
                    ref={leftColumnRef}
                    style={{
                        width: leftColumnWidth, // Dynamically calculated width
                        transition: "width 0.3s ease", // Smooth width transition
                    }}
                >
                    <MainHeading>
                        <WhiteText>
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
                        </WhiteText>
                        <GrayText>
                            {" "}
                            {[...texts.titlespan].map((char, index) => (
                                <motion.span
                                    key={index}
                                    custom={{ index: index, delayOffset: 0.8 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={textWavyVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </GrayText>
                    </MainHeading>
                    <SubHeading>
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
                    </SubHeading>
                    <MainImage
                        as={motion.img}
                        viewport={{ once: false, amount: 0.3 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.5,
                        }}
                        loading="lazy"
                        src="/images/common/whyshouldyoubuymain.png"
                        alt="GOLDX blockchain illustration"
                    />
                </LeftColumn>
                <RightColumn
                    ref={rightColumnRef}
                    style={{
                        width: rightColumnWidth, // Dynamically calculated width
                        transition: "width 0.3s ease", // Smooth width transition
                    }}
                >
                    {benefits.map((benefit, index) => (
                        <CardWrapper
                            key={index}
                            ref={index === 0 ? cardWrapperRef : null}
                            bottomsvgWidth={`${bottomIconWidth}px`}
                            as={motion.div}
                            viewport={{ once: false }}
                            initial={{ opacity: 0, y: "300px" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{
                                delay: index * 0.15 + 0.3,
                                duration: 0.3,
                            }}
                        >
                            <CardContent>
                                <CardTitle>{benefit.title}</CardTitle>
                                <CardDescription>
                                    {benefit.description}
                                </CardDescription>
                            </CardContent>
                            <div className="cardbg">
                                <WhyShouldYouBuyBG />
                            </div>
                            <div className="bottomicon">
                                <WhyGoldXBottomIcon />
                            </div>
                        </CardWrapper>
                    ))}
                </RightColumn>
            </Container>
        </WhyShouldYouBuySection>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }
`;

const MainHeading = styled.h1`
    color: #969696;
    font: 600 64px/64px Conthrax, sans-serif;
    text-transform: uppercase;
    margin: 0;
    margin-right: 22px;
    margin-bottom: 30px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 44px;
        margin-right: 10px;
    }
`;

const WhiteText = styled.span`
    color: #fff;
`;

const GrayText = styled.span`
    color: #969696;
    display: block;
`;

const SubHeading = styled.p`
    color: #cfcfcf;
    font: 400 20px/28px Telegraf, sans-serif;
    margin-top: 24px;
    width: 464px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        width: 100%;
    }
`;

const MainImage = styled.img`
    width: 100%;
    aspect-ratio: 1.07;
    object-fit: contain;
    border-radius: 32px;
    margin-top: 80px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        margin-top: 40px;
    }
`;
const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 54%;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        width: 100%;
        margin-top: 40px;
    }
`;
const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 42%;
    margin-left: 20px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        width: 100%;
        margin-left: 0;
        margin-top: 40px;
    }
`;

const CardWrapper = styled.div<CardWrapperProps>`
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 40px;
    position: relative;
    background: linear-gradient(to top, transparent 60%, #121212 25%);
    overflow: hidden;
    min-height: 300px;
    border-radius: 32px;
    @media (min-width: ${mobileBreakpoint}px) and (max-width: ${smscreenBreakpoint}px) {
        background: linear-gradient(to top, transparent 40%, #121212 25%);
    }
    &:last-child {
        margin-bottom: 0;
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
    }
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
    text-transform: uppercase;
    // height: 80px;
`;

const CardDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--text-Ssecondary, #cfcfcf);
    margin: 0;
    max-width: 90%;
`;
const WhyShouldYouBuySection = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
    @media (min-width: ${smallmobileBreakpoint}px) and (max-width: ${mobileBreakpoint}px) {
        ${CardWrapper} {
            min-height: 350px;
        }
    }
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        padding-top: 70px;
        padding-bottom: 70px;
        ${MainHeading} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 60px 10px 0;
        ${MainHeading} {
            font-size: 32px;
            margin-right: 0;
            margin-bottom: 0;
        }
        ${CardWrapper} {
            min-height: 270px;
            ${CardContent} {
                padding: 26px;
                ${CardTitle} {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
                ${CardDescription} {
                    font-size: 14px;
                }
            }
        }
    }
`;
export default WhyShouldYouBuy;
