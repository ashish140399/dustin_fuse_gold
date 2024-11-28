import React, {
    useState,
    useEffect,
    useRef,
    useContext,
    useLayoutEffect,
    useCallback,
} from "react";
import { useWindowSize } from "@react-hook/window-size";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import {
    Link as ScrollLink,
    animateScroll as scroll,
    scroller,
} from "react-scroll";
// import ScrollMagicPluginGsap from "scrollmagic-plugin-gsap";
import {
    GoldXFeaturesBottomBG,
    GoldXFeaturesMBBottomBG,
    GoldXFeaturesMBTopBG,
    GoldXFeaturesTopBG,
    ProtectKeyCardBG,
} from "../../../assets/BG/BG";
import {
    ProtectKeyCardBottomIcon,
    ProductCardIcon,
} from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
    useIsTouchscreen,
} from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";
import throttle from "lodash.throttle";
interface ProductProps {
    name: string;
    description: string;
    icon: string;
}

// Define an interface for the component props
interface CardWrapperProps {
    bottomsvgWidth?: string; // Optional prop, defaults to '70px' if not provided
}

const cardInfo = [
    {
        title: " Professionally Vaulted & Insured",
        desc: "",
    },
    {
        title: "goldx explorer",
        desc: "When you decide to convert your FUSEG tokens back to physical bullion we will buy back the gold at 99% of the spot price. This will  be minus the minimal fee associated with the administration of the FUSEG tokens, thus allowing us to remain competitive.",
    },
    {
        title: "100% Allocated & Individually Segregated",
        desc: "",
    },
    {
        title: "goldx explorer",
        desc: "When you decide to convert your FUSEG tokens back to physical bullion we will buy back the gold at 99% of the spot price. This will  be minus the minimal fee associated with the administration of the FUSEG tokens, thus allowing us to remain competitive.",
    },
    {
        title: "100% Allocated & Individually Segregated",
        desc: "",
    },
    {
        title: "goldx explorer",
        desc: "GOLDX blockchain ensures rapid and economical transactions with an average block confirmation time of 5 seconds and",
    },
];
const ProtectKey: React.FC = () => {
    const cardWrapperRef = useRef(null);
    const [bottomIconWidth, setBottomIconWidth] = useState(0);
    const { windowDimensions } = useContext(SiteVariablesContext);
    const isTouchscreen = useIsTouchscreen();
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
    const productsGridRef = useRef<HTMLDivElement>(null);
    const productsTopRef = useRef<HTMLDivElement>(null);
    const productsBottomRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isTopVisible, setIsTopVisible] = useState(false);
    const [isBottomVisible, setIsBottomVisible] = useState(false);

    // Check if any part of the element is in view
    const isPartiallyInView = useInView(productsGridRef, {
        margin: "0px", // No viewport adjustment
        amount: 0, // Trigger when any part of the element is visible
    });
    useEffect(() => {
        const checkVisibility = throttle(() => {
            if (!productsGridRef.current) return;

            const rect = productsGridRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Check if the top of the element is visible in the viewport
            setIsTopVisible(rect.top >= 0 && rect.top <= viewportHeight);

            // Check if the bottom of the element is visible in the viewport
            setIsBottomVisible(
                rect.bottom >= 0 && rect.bottom <= viewportHeight
            );
        }, 10);

        // Trigger on scroll and resize
        window.addEventListener("scroll", checkVisibility);
        window.addEventListener("resize", checkVisibility);
        checkVisibility();
        return () => {
            window.removeEventListener("scroll", checkVisibility);
            window.removeEventListener("resize", checkVisibility);
        };
    }, [isPartiallyInView]);
    const isInView = isTopVisible && isBottomVisible;

    useEffect(() => {
        if (!isTouchscreen) {
            const container = productsGridRef.current;

            const handleScroll = (event: WheelEvent) => {
                if (!container) return;
                console.log("i am in handle scroll");
                const isEndOfHorizontalScroll =
                    container.scrollLeft + container.clientWidth >=
                    container.scrollWidth;
                const isStartOfHorizontalScroll = container.scrollLeft <= 0;

                if (isInView) {
                    if (isEndOfHorizontalScroll && event.deltaY > 0) {
                        document.body.removeEventListener(
                            "wheel",
                            handleScroll
                        );
                        document.body.classList.remove("no-scroll");
                    } else if (isStartOfHorizontalScroll && event.deltaY < 0) {
                        document.body.removeEventListener(
                            "wheel",
                            handleScroll
                        );
                        document.body.classList.remove("no-scroll");
                    } else {
                        event.preventDefault();
                        container.scrollLeft += event.deltaY; // Use mouse wheel delta for horizontal scroll
                    }
                } else {
                    document.body.removeEventListener("wheel", handleScroll);
                }
            };

            if (container) {
                document.body.addEventListener("wheel", handleScroll, {
                    passive: false,
                });
            }

            return () => {
                if (container) {
                    document.body.removeEventListener("wheel", handleScroll);
                }
            };
        }
    }, [isInView, isTouchscreen]);

    useEffect(() => {
        if (isInView && !isTouchscreen) {
            document.body.classList.add("no-scroll");
            if (sectionRef.current) {
                const topPosition = sectionRef.current.offsetTop; // Get the element's top position
                const offset = 50; // Define your offset

                // Scroll to the position minus the offset
                window.scrollTo({
                    top: topPosition - offset,
                    behavior: "smooth", // Smooth scrolling
                });
            }
        }
    }, [isInView, isTouchscreen]);

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
        titlewhite: "Protect your",
        titlespan: "KEY",
        descriptionLines: [
            "Lorem ipsum dolor sit amet, consectetur,",
            "incididunt ut labore et dolore magna",
        ],
    };

    return (
        <ProductsSection className="marginborderboxx">
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
                    </GoldSpan>{" "}
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
            </SectionHeader>
            <ProductsGridWrapper>
                <div className="topimgbg" ref={productsTopRef}>
                    {windowDimensions?.width > mobileBreakpoint ? (
                        <GoldXFeaturesTopBG />
                    ) : (
                        <GoldXFeaturesMBTopBG />
                    )}
                </div>
                <ProductsGridScroll
                    className="horizontalScroll paddingsclayoutx"
                    id="horizontalScrollContainer"
                    ref={productsGridRef}
                >
                    <ProductsGrid>
                        {cardInfo.map((item, index) => (
                            <CardWrapper
                                key={index}
                                ref={index === 0 ? cardWrapperRef : null}
                                bottomsvgWidth={`${bottomIconWidth}px`}
                                as={motion.div}
                                // viewport={{ once: true, amount: 0.2 }}
                                initial={{ opacity: 0, x: "100%" }}
                                animate={
                                    isPartiallyInView
                                        ? { opacity: 1, x: "0%" }
                                        : {}
                                }
                                transition={{
                                    delay: index * 0.3 + 0.3,
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            >
                                <CardContent>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDescription>
                                        {item.desc}
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
                        ))}
                    </ProductsGrid>
                </ProductsGridScroll>
                <div className="bottomimgbg" ref={productsBottomRef}>
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
    width: 100%;
    max-width: 400px;

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
    min-height: 533px;
    // height: 100%;
    box-sizing: border-box;
    position: relative;
    margin-right: 30px;
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
    height: 80px;
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
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 30px 10px 0;
        //   ${SectionHeader} {
        //     margin-bottom: 0;
        //     padding-top: 50px;
        //     padding-bottom: 50px;
        // }
        ${SectionTitle} {
            font-size: 32px;
        }
        ${SectionDescription} {
            font-size: 16px;
        }

        ${CardWrapper} {
            // min-height: 270px;
            // width: 25vw;
            // max-width: 270px;
            // min-width: 270px;
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

export default ProtectKey;
