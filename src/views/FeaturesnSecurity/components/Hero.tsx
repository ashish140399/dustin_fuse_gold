import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ArrowTransformIcon, GetStartedIcon } from "../../../assets/icons";
import { LandingHeroBG, LandingHeroMobileBG } from "../../../assets/BG/BG";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
    HeroContentWrapper,
    HeroLeft,
    HeroRight,
    InvestButtonWrapper,
    StyledHero,
} from "../../styles/commonHero";
import { mobileBreakpoint, smallmobileBreakpoint } from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";
import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
interface Props {
    boxWidth: number; // Optional prop, defaults to '70px' if not provided
}

const Hero: React.FC = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    const heroWrapperRef = useRef(null);
    const [heroWidth, setHeroWidth] = useState(0);
    useEffect(() => {
        // Function to update width based on window dimensions
        const updateWidth = () => {
            const width = heroWrapperRef.current
                ? // @ts-ignore
                  heroWrapperRef.current.offsetWidth
                : 0;

            setHeroWidth(width);
        };

        updateWidth();
    }, [windowDimensions]);
    return (
        <StyledHeroMain boxWidth={heroWidth}>
            <div className="herobag" ref={heroWrapperRef}>
                {windowDimensions?.width > mobileBreakpoint ? (
                    <LandingHeroBG
                        src="./images/common/featurensecuritybg.png"
                        alt="Hero BG"
                    />
                ) : (
                    <LandingHeroMobileBG
                        src="./images/common/featurensecuritybg.png"
                        alt="Hero BG"
                    />
                )}
            </div>
            <HeroLeft>
                <Sidebar />
            </HeroLeft>
            <HeroRight>
                <NavBar />
                <HeroContent />
            </HeroRight>
            <HeroStats />
            <InvestButton />
        </StyledHeroMain>
    );
};
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
    titlewhite: "Security &",
    titlespan: "Custody",
    descriptionLines: [
        "The Ultimate Fusion of Digital and Physical Gold Investment. It is fully",
        "compatible with Euretheum and allows smart contracts to operate on",
        "GoldX. Invest today!",
    ],
};
const HeroContent: React.FC = () => {
    return (
        <HeroContentWrapper>
            <TextContent>
                <Title>
                    {[...texts.titlewhite].map((char, index) => (
                        <motion.span
                            key={index}
                            custom={{ index: index, delayOffset: 1.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                            variants={textWavyVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {char}
                        </motion.span>
                    ))}{" "}
                    <br />{" "}
                    {[...texts.titlespan].map((char, index) => (
                        <motion.span
                            key={index}
                            custom={{ index: index, delayOffset: 1.4 }}
                            viewport={{ once: false, amount: 0.3 }}
                            variants={textWavyVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {char}
                        </motion.span>
                    ))}
                </Title>
                <Description>
                    {[...texts.descriptionLines].map((line, index) => (
                        <motion.div
                            key={index}
                            custom={{ index: index, delayOffset: 1.6 }}
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {line}
                        </motion.div>
                    ))}
                </Description>
                <motion.div
                    className="getstartedicon"
                    viewport={{ once: false, amount: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 2,
                        duration: 0.5,
                    }}
                >
                    <div className="getStartedOuter">
                        <img
                            className="get_started_arrow"
                            src="/images/common/get_started_arrow.png"
                            alt=""
                        />
                        <img
                            className="get_started"
                            src="/images/common/get_started.png"
                            alt=""
                        />
                    </div>
                </motion.div>
            </TextContent>{" "}
            <motion.div
                className="getstartedicon"
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, x: -220 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 2.2,
                    duration: 0.5,
                }}
            >
                <Logo
                    src="/images/common/blockchainlogo.svg"
                    alt="Goldx Blockchain Logo"
                />{" "}
            </motion.div>
        </HeroContentWrapper>
    );
};
const IncreasingNumber = ({
    value,
    duration,
    delay = 0, // Optional delay in seconds
}: {
    value: number;
    duration: number;
    delay?: number; // Add delay as an optional prop
}) => {
    const motionValue = useMotionValue(0); // Start from 0
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Animate the motionValue to the target value
            const controls = animate(motionValue, value, {
                duration, // Animation duration
                onUpdate: (latest: any) => setDisplayValue(Math.floor(latest)), // Update displayed value
            });

            return () => controls.stop(); // Cleanup animation
        }, delay * 1000); // Convert delay to milliseconds

        return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }, [motionValue, value, duration, delay]);

    return <StatValue>{displayValue}+</StatValue>;
};

const HeroStats: React.FC = () => {
    return (
        <FramerStatsWrapper
            viewport={{ once: false, amount: 0.3 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                delay: 2.2,
                duration: 0.5,
            }}
        >
            <StatContent>
                <IncreasingNumber value={250} duration={2} delay={2} />
                <StatLabel>client trust us</StatLabel>
            </StatContent>
            <StatImage
                src="/images/common/clienttrust.png"
                alt="Market Cap Illustration"
            />
        </FramerStatsWrapper>
    );
};

const StatsWrapper = styled.aside`
    position: absolute;
    bottom: 50px;
    right: 50px;
    border-radius: 24px;
    background: var(--Transparent-White, rgba(255, 255, 255, 0.04));
    backdrop-filter: blur(32px);
    align-self: end;
    display: flex;

    // flex-direction: column;
    font-family: Conthrax, sans-serif;
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    text-transform: uppercase;
    justify-content: center;
    padding: 32px 40px;

    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        width: calc(100% - 40px);
        right: 20px;
        bottom: -20px;
        box-sizing: border-box;
    }
`;

const FramerStatsWrapper = motion(StatsWrapper);

const StatContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 168px;
    margin: auto 0;
`;

const StatValue = styled.div`
    font-size: 40px;
    font-weight: 400;
    line-height: 0.8;
`;

const StatLabel = styled.div`
    font-feature-settings: "liga" off, "clig" off;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    margin-top: 24px;
`;

const StatImage = styled.img`
    aspect-ratio: 1.89;
    object-fit: contain;
    object-position: center;
    width: 136px;
    align-self: stretch;
    margin: auto 0;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;
    z-index: -1;
    .getstartedicon {
        cursor: pointer;
        svg {
            width: 100px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;

const Title = styled.h1`
    color: #fff;
    font-feature-settings: "liga" off, "clig" off;
    text-transform: uppercase;
    margin: 0;

    font: 600 80px/80px Conthrax, sans-serif;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        font-size: 40px;
        line-height: 44px;
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        font-size: 32px;
    }
`;

const Description = styled.p`
    color: var(--Text-Secondary, #cfcfcf);
    margin-top: 32px;
    font: 400 20px/28px Telegraf, sans-serif;
    max-width: 700px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        font-size: 16px;
    }
`;

const Logo = styled.img`
    aspect-ratio: 1.58;
    object-fit: contain;
    object-position: center;

    width: 122px;
    border-radius: 0;
    align-self: start;
    margin-top: 8px;
    max-width: 100%;
    position: absolute;
    top: 27vh;
    right: 10vw;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        display: none;
    }
`;

const InvestButton: React.FC = () => {
    return (
        <FramerButtonWrapper
            viewport={{ once: false }}
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} // Start fully clipped
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
        >
            <ActionButton
                label="Terms & Conditions"
                variant="primary"
                className="btnwidth100"
                // @ts-ignore
                icon={<ArrowTransformIcon />}
            />
            <ActionButton
                label="Marketplace"
                variant="secondary"
                className="btnwidth100"
                // @ts-ignore
                icon={<ArrowTransformIcon />}
            />
        </FramerButtonWrapper>
    );
};

const ButtonWrapper = styled(InvestButtonWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    .btnwidth100 {
        &:first-child {
            margin-right: 20px;
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        flex-direction: column;
        .btnwidth100 {
            margin-top: 14px;
        }
    }
`;
const FramerButtonWrapper = motion(ButtonWrapper);
const StyledHeroMain = styled(StyledHero)<Props>`
    // ${InvestButtonWrapper} {
    //     width: ${(props) => `${100 + props?.boxWidth / 4.3}px`};
    // }
`;

export default Hero;
