import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
    GoldXFeaturesBottomBG,
    GoldXFeaturesTopBG,
    ProductCardBG,
} from "../../../assets/BG/BG";
import { ProductCardBottomIcon, ProductCardIcon } from "../../../assets/icons";

interface ProductProps {
    name: string;
    description: string;
    icon: string;
}

// Define an interface for the component props
interface CardWrapperProps {
    bottomsvgWidth?: string; // Optional prop, defaults to '70px' if not provided
}
const Products: React.FC = () => {
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
                    Browse our <GoldSpan>Products.</GoldSpan>
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
                                <CardTitle>fuse.gold</CardTitle>
                                <CardDescription>
                                    GOLDX blockchain ensures rapid and
                                    economical transactions with an average
                                    block confirmation time of 5 seconds and
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
                                <CardTitle>goldx explorer</CardTitle>
                                <CardDescription>
                                    GOLDX blockchain ensures rapid and
                                    economical transactions with an average
                                    block confirmation time of 5 seconds and
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
                                <CardTitle>goldx testnet</CardTitle>
                                <CardDescription>
                                    GOLDX blockchain ensures rapid and
                                    economical transactions with an average
                                    block confirmation time of 5 seconds and
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
                                <CardTitle>goldx explorer</CardTitle>
                                <CardDescription>
                                    GOLDX blockchain ensures rapid and
                                    economical transactions with an average
                                    block confirmation time of 5 seconds and
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
                                <CardTitle>goldx testnet</CardTitle>
                                <CardDescription>
                                    GOLDX blockchain ensures rapid and
                                    economical transactions with an average
                                    block confirmation time of 5 seconds and
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
                                <CardTitle>goldx explorer</CardTitle>
                                <CardDescription>
                                    GOLDX blockchain ensures rapid and
                                    economical transactions with an average
                                    block confirmation time of 5 seconds and
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
                                <CardTitle>goldx testnet</CardTitle>
                                <CardDescription>
                                    GOLDX blockchain ensures rapid and
                                    economical transactions with an average
                                    block confirmation time of 5 seconds and
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

const ProductsSection = styled.section`
    padding: 160px 16px 80px;
    // background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/1f3e1c11b32a51b901b0d8830c4dfb7d36b8bc6eff26c9389184b10f6e0e51a7?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88");
    // background-size: cover;
    // background-position: center;
    @media (max-width: 991px) {
        padding: 100px 20px 40px;
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
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
    margin: 0;
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
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

export default Products;
