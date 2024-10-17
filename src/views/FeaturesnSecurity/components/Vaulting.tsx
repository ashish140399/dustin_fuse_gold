import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { WhyGoldXBG } from "../../../assets/BG/BG";
import { WhyGoldXBottomIcon } from "../../../assets/icons";

interface BenefitCardProps {
    icon: string;
    title: string;
    description: string;
}

// Define an interface for the component props
interface CardWrapperProps {
    bottomsvgWidth?: string; // Optional prop, defaults to '70px' if not provided
}

const Vaulting: React.FC = () => {
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
            setBottomIconWidth(width / 5.525); // Example: set bottom icon width as half of card wrapper
        };

        updateWidth(); // Initial check
        window.addEventListener("resize", updateWidth); // Adjust on window resize

        return () => {
            window.removeEventListener("resize", updateWidth); // Cleanup listener
        };
    }, []);
    const benefits: BenefitCardProps[] = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4442e46209f0437521b8c1a102bcc3d77abee1bcb8122c60a918e3f4d45b454f?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88",
            title: "Hybrid NFT Utility, Multi-Use case",
            description:
                "Benefit from contracts with no diminishing power over time, ensuring consistent value and performance.",
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cb25a4cf24b35e2fd299e78033c6871e45a5b49d8c3c785d3c96b3865fb00ab?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88",
            title: "High Security Vaults",
            description:
                "Enjoy seamless investment without the hassle of managing physical assets or hardware.",
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3a74c5fca73a050bd768dfff3adaceb01d932dd3159f77bbfbba520706107c9?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88",
            title: "Life Time Mining Rights with no loss of power",
            description:
                "Transfer, sell, or redeem your assets anytime, offering unmatched liquidity and flexibility.",
        },
    ];

    return (
        <WhyGoldXSection>
            <SectionHeader>
                <SectionTitle>
                    Vaulting
                    <GoldSpan>In London</GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation.
                </SectionDescription>
            </SectionHeader>
            <BenefitsContainer>
                <CardWrapperOuter>
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
                    </CardWrapper>
                </CardWrapperOuter>
                <CardWrapperOuter>
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
                    </CardWrapper>
                </CardWrapperOuter>
                <CardWrapperOuter>
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
                </CardWrapperOuter>
            </BenefitsContainer>
        </WhyGoldXSection>
    );
};

const WhyGoldXSection = styled.section`
    padding: 160px 80px 80px;
    @media (max-width: 991px) {
        padding: 100px 20px 0;
    }
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--text-primary, #fff);
    text-transform: uppercase;

    @media (max-width: 991px) {
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
    width: 50%;
    max-width: 700px;
    margin: 0;
    @media (max-width: 991px) {
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

const CardWrapper = styled.div<CardWrapperProps>`
    // background-color: var(--brand-dark, #111);
    // border-radius: 32px;
    overflow: hidden;

    // height: 100%;
    box-sizing: border-box;
    position: relative;
    .cardbg {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 0;
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

const CardIcon = styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 24px;
`;

const CardContent = styled.div`
    color: var(--text-primary, #fff);
    position: absolute;
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
`;

const CardDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--text-Ssecondary, #cfcfcf);
    margin: 0;
`;

export default Vaulting;
