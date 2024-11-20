import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import {
    GoldXFeaturesBottomBG,
    GoldXFeaturesTopBG,
    ProtectKeyCardBG,
} from "../../../assets/BG/BG";
import {
    ProtectKeyCardBottomIcon,
    ProductCardIcon,
} from "../../../assets/icons";
import { mobileBreakpoint } from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";

interface ProductProps {
    name: string;
    description: string;
    icon: string;
}

// Define an interface for the component props
interface CardWrapperProps {
    bottomsvgWidth?: string; // Optional prop, defaults to '70px' if not provided
}
const ProtectKey: React.FC = () => {
    const cardWrapperRef = useRef(null);
    const [bottomIconWidth, setBottomIconWidth] = useState(0);
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

    return (
        <ProductsSection>
            <SectionHeader className="paddingsclayoutx">
                <SectionTitle>
                    Protect your <GoldSpan>key</GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut
                </SectionDescription>
            </SectionHeader>
            <ProductsGridWrapper>
                <div className="topimgbg">
                    <GoldXFeaturesTopBG />
                </div>
                <ProductsGridScroll className="horizontalScroll paddingsclayoutx">
                    <ProductsGrid>
                        <CardWrapper
                            ref={cardWrapperRef}
                            bottomsvgWidth={`${bottomIconWidth}px`}
                        >
                            <CardContent>
                                <CardTitle>
                                    Professionally Vaulted & Insured
                                </CardTitle>
                                <CardDescription></CardDescription>
                            </CardContent>
                            <div className="cardlefticon">
                                <ProductCardIcon />
                            </div>
                            <div className="cardbg">
                                <ProtectKeyCardBG />
                            </div>
                            <div className="bottomicon">
                                <ProtectKeyCardBottomIcon />
                            </div>
                        </CardWrapper>
                        <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                            <CardContent>
                                <CardTitle>goldx explorer</CardTitle>
                                <CardDescription>
                                    When you decide to convert your FUSEG tokens
                                    back to physical bullion we will buy back
                                    the gold at 99% of the spot price. This will
                                    be minus the minimal fee associated with the
                                    administration of the FUSEG tokens, thus
                                    allowing us to remain competitive.
                                </CardDescription>
                            </CardContent>
                            <div className="cardlefticon">
                                <ProductCardIcon />
                            </div>
                            <div className="cardbg">
                                <ProtectKeyCardBG />
                            </div>
                            <div className="bottomicon">
                                <ProtectKeyCardBottomIcon />
                            </div>
                        </CardWrapper>

                        <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                            <CardContent>
                                <CardTitle>
                                    100% Allocated & Individually Segregated
                                </CardTitle>
                                <CardDescription></CardDescription>
                            </CardContent>
                            <div className="cardlefticon">
                                <ProductCardIcon />
                            </div>
                            <div className="cardbg">
                                <ProtectKeyCardBG />
                            </div>
                            <div className="bottomicon">
                                <ProtectKeyCardBottomIcon />
                            </div>
                        </CardWrapper>
                        <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                            <CardContent>
                                <CardTitle>goldx explorer</CardTitle>
                                <CardDescription>
                                    When you decide to convert your FUSEG tokens
                                    back to physical bullion we will buy back
                                    the gold at 99% of the spot price. This will
                                    be minus the minimal fee associated with the
                                    administration of the FUSEG tokens, thus
                                    allowing us to remain competitive.
                                </CardDescription>
                            </CardContent>
                            <div className="cardlefticon">
                                <ProductCardIcon />
                            </div>
                            <div className="cardbg">
                                <ProtectKeyCardBG />
                            </div>
                            <div className="bottomicon">
                                <ProtectKeyCardBottomIcon />
                            </div>
                        </CardWrapper>

                        <CardWrapper bottomsvgWidth={`${bottomIconWidth}px`}>
                            <CardContent>
                                <CardTitle>
                                    100% Allocated & Individually Segregated
                                </CardTitle>
                                <CardDescription></CardDescription>
                            </CardContent>
                            <div className="cardlefticon">
                                <ProductCardIcon />
                            </div>
                            <div className="cardbg">
                                <ProtectKeyCardBG />
                            </div>
                            <div className="bottomicon">
                                <ProtectKeyCardBottomIcon />
                            </div>
                        </CardWrapper>
                    </ProductsGrid>
                </ProductsGridScroll>
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
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
    margin: 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const GoldSpan = styled.span`
    color: var(--Text-Tertiary, #969696);
    display: block;
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    max-width: 50%;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;
const ProductsGridScroll = styled.div`
    overflow: hidden;
    overflow-x: scroll;
    background: #171615;
    padding-bottom: 40px;
    box-sizing: border-box;
`;
const ProductsGrid = styled.div`
    display: flex;
    width: 100%;
`;

const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(32px);
    border-radius: 32px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ProductName = styled.h3`
    font: 600 30px/1 Conthrax, sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
    margin-bottom: 24px;
`;

const ProductDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    margin-bottom: 32px;
`;

const LearnMoreButton = styled.button`
    background: transparent;
    border: 1.5px solid var(--Brand-Gold, #f4e0a3);
    border-radius: 40px;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: flex-end;
`;

const CardWrapper = styled.div<CardWrapperProps>`
    // background-color: var(--brand-dark, #111);
    // border-radius: 32px;
    overflow: hidden;
    width: 25vw;
    max-width: 450px;
    min-width: 450px;
    // height: 100%;
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

    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 80px 16px 80px;
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
        ${ProductsGridScroll} {
            padding-top: 30px;
        }
    }
`;

export default ProtectKey;
