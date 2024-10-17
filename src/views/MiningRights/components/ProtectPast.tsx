import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
    GoldXFeaturesBottomBG,
    GoldXFeaturesTopBG,
    ProductCardBG,
} from "../../../assets/BG/BG";
import {
    ArrowTransformIcon,
    ProductCardBottomIcon,
    ProductCardIcon,
} from "../../../assets/icons";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { mobileBreakpoint } from "../../../const";

interface ProductProps {
    name: string;
    description: string;
    icon: string;
}

// Define an interface for the component props
interface CardWrapperProps {
    bottomsvgWidth?: string; // Optional prop, defaults to '70px' if not provided
}
const ProtectPast: React.FC = () => {
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

    return (
        <ProductsSection>
            <SectionHeader className="paddingsclayoutx">
                <SectionTitle>
                    Protect Your Past, <GoldSpan>Present & Future.</GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut
                    <ActionButton
                        label="About Security"
                        variant="primary"
                        className="btnwidth50"
                        // @ts-ignore
                        icon={<ArrowTransformIcon />}
                    />
                </SectionDescription>
            </SectionHeader>
            <ProductsGridWrapper>
                <div className="topimgbg">
                    <GoldXFeaturesTopBG />
                </div>

                <ProductsGrid className="paddingsclayoutx">
                    <CardWrapper
                        ref={cardWrapperRef}
                        bottomsvgWidth={`${bottomIconWidth}px`}
                    >
                        <CardContent>
                            <CardTitle>Reserve Transparency</CardTitle>
                            <CardDescription>
                                Complete Reserve Transparency ensures
                                accountability and trust by verifying
                                asset holdings.
                            </CardDescription>
                        </CardContent>
                        <div className="cardlefticon">
                            <ProductCardIcon />
                        </div>
                        <div className="cardbg">
                            <ProductCardBG />
                        </div>
                        <div className="bottomicon">
                            <ProductCardBottomIcon />
                        </div>
                    </CardWrapper>
                    <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                        <CardContent>
                            <CardTitle>Volume Proof</CardTitle>
                            <CardDescription>
                                DPOS Consensus converted to Proof of Volume
                                while maintaining EVM security features.
                            </CardDescription>
                        </CardContent>
                        <div className="cardlefticon">
                            <ProductCardIcon />
                        </div>
                        <div className="cardbg">
                            <ProductCardBG />
                        </div>
                        <div className="bottomicon">
                            <ProductCardBottomIcon />
                        </div>
                    </CardWrapper>
                    <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                        <CardContent>
                            <CardTitle>VIP Token Security</CardTitle>
                            <CardDescription>
                                DPOS Consensus converted to Proof of Volume
                                while maintaining EVM security features.
                            </CardDescription>
                        </CardContent>
                        <div className="cardlefticon">
                            <ProductCardIcon />
                        </div>
                        <div className="cardbg">
                            <ProductCardBG />
                        </div>
                        <div className="bottomicon">
                            <ProductCardBottomIcon />
                        </div>
                    </CardWrapper>
                </ProductsGrid>

                <div className="bottomimgbg">
                    <GoldXFeaturesBottomBG />
                </div>
            </ProductsGridWrapper>
        </ProductsSection>
    );
};

const ProductsGridWrapper = styled.div`
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
    align-items: flex-start;
    // margin-bottom: 40px;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
    margin: 0;
    max-width: 700px;
    @media (max-width: 991px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const GoldSpan = styled.span`
    color: var(--Text-Tertiary, #969696);
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    max-width: 500px;
    .btnwidth50 {
        margin-top: 20px;
        width: 240px;
    }
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const CardWrapper = styled.div<CardWrapperProps>`
    overflow: hidden;
    width: 33%;

    box-sizing: border-box;
    position: relative;
    margin-right: 30px;
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
    .cardlefticon {
        position: absolute;
        // Padding is set as 40px in CardContent below
        bottom: 40px;
        left: 40px;
        svg {
            width: 70px;
            height: auto;
        }
    }
`;
const ProductsGrid = styled.div`
    display: flex;
    width: 100%;
    background: #171615;
    box-sizing: border-box;
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
    text-transform: uppercase;
    height: 80px;
`;

const CardDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--text-Ssecondary, #cfcfcf);
    margin: 0;
`;
const ProductsSection = styled.section`
    padding: 160px 16px 80px;

    @media (max-width: 991px) {
        padding: 100px 0px 40px;
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
        ${ProductsGrid} {
            flex-direction: column;
            padding-top: 60px;
            padding-bottom: 60px;
            ${CardWrapper} {
                width: 100%;
                margin-bottom: 40px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
`;
export default ProtectPast;
