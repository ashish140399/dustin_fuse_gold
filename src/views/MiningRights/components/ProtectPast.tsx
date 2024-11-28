import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import {
    GoldXFeaturesBottomBG,
    GoldXFeaturesMBBottomBG,
    GoldXFeaturesMBTopBG,
    GoldXFeaturesTopBG,
    ProductCardBG,
} from "../../../assets/BG/BG";
import {
    ArrowTransformIcon,
    ProductCardBottomIcon,
    ProductCardIcon,
} from "../../../assets/icons";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";
import { motion } from "framer-motion";
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
    const { windowDimensions } = useContext(SiteVariablesContext);
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
    const texts = {
        titlewhite: " Protect Your Past,",
        titlespan: "Present & Future.",
    };
    return (
        <ProductsSection>
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
                                custom={{ index: index, delayOffset: 1.6 }}
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
                <SectionDescription
                    as={motion.div}
                    viewport={{ once: false, amount: 0.3 }}
                    initial={{ opacity: 0, y: "100px" }}
                    whileInView={{ opacity: 1, y: "0" }}
                    transition={{
                        delay: 0.8,
                        duration: 0.3,
                    }}
                >
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
                    {windowDimensions?.width > mobileBreakpoint ? (
                        <GoldXFeaturesTopBG />
                    ) : (
                        <GoldXFeaturesMBTopBG />
                    )}
                </div>

                <ProductsGrid className="paddingsclayoutx">
                    <CardWrapper
                        ref={cardWrapperRef}
                        bottomsvgWidth={`${bottomIconWidth}px`}
                        as={motion.div}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{
                            delay: 0.8,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
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
                    <CardWrapper
                        bottomsvgWidth={`${bottomIconWidth}px`}
                        as={motion.div}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{
                            delay: 1.2,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
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
                    <CardWrapper
                        bottomsvgWidth={`${bottomIconWidth}px`}
                        as={motion.div}
                        viewport={{ once: false }}
                        initial={{ opacity: 0, x: "100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{
                            delay: 1.4,
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
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
                    {windowDimensions?.width > mobileBreakpoint ? (
                        <GoldXFeaturesBottomBG />
                    ) : (
                        <GoldXFeaturesMBBottomBG />
                    )}
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
    max-width: 700px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
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
    margin-left: 30px;
    .btnwidth50 {
        margin-top: 20px;
        width: 240px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
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
    background: linear-gradient(to top, transparent 60%, #201f1e 25%);
    overflow: hidden;
    border-radius: 32px;
    min-height: 380px;
    box-sizing: border-box;
    position: relative;
    @media (min-width: ${mobileBreakpoint}px) and (max-width: ${smscreenBreakpoint}px) {
        background: linear-gradient(to top, transparent 40%, #201f1e 25%);
        .cardlefticon {
            display: none;
        }
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
    .cardlefticon {
        position: absolute;
        // Padding is set as 40px in CardContent below
        bottom: 40px;
        left: 40px;
        z-index: 1;
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
    word-wrap: break-word;
    min-height: 80px;
`;

const CardDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--text-Ssecondary, #cfcfcf);
    margin: 0;
`;
const ProductsSection = styled.section`
    padding: 160px 16px 80px;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 80px 16px 80px;
        padding: 100px 0px 40px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${SectionDescription} {
            width: 100%;
            margin-bottom: 20px;
            margin-left: 0;
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
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        ${SectionTitle} {
            font-size: 32px;
        }
        ${SectionDescription} {
            font-size: 16px;
            margin-top: 10px;
        }
        ${CardWrapper} {
            min-height: 270px;
            ${CardContent} {
                padding: 26px;
                ${CardTitle} {
                    font-size: 20px;
                    margin-bottom: 10px;
                    min-height: unset;
                }
                ${CardDescription} {
                    font-size: 14px;
                }
            }
        }
    }
`;
export default ProtectPast;
