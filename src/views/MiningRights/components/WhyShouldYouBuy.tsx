import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { WhyShouldYouBuyBG } from "../../../assets/BG/BG";
import { WhyGoldXBottomIcon } from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";

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

    return (
        <WhyShouldYouBuySection className="paddingsclayoutx ">
            <Container>
                <LeftColumn>
                    <MainHeading>
                        <WhiteText>Why Should </WhiteText>
                        <GrayText>you Buy?</GrayText>
                    </MainHeading>
                    <SubHeading>
                        Explore secure, efficient transactions and tokenization
                        of mining rights, backed by the stability and innovation
                        of the GOLDX blockchain.
                    </SubHeading>
                    <MainImage
                        loading="lazy"
                        src="/images/common/whyshouldyoubuymain.png"
                        alt="GOLDX blockchain illustration"
                    />
                </LeftColumn>
                <RightColumn>
                    {benefits.map((benefit, index) => (
                        <CardWrapper
                            key={index}
                            ref={index === 0 ? cardWrapperRef : null}
                            bottomsvgWidth={`${bottomIconWidth}px`}
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
    border-radius: 32px;
    @media (min-width: ${mobileBreakpoint}px) and (max-width: 1000px) {
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
