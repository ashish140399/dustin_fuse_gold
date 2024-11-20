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
                        src="./images/common/herobg.png"
                        alt="Hero BG"
                    />
                ) : (
                    <LandingHeroMobileBG
                        src="./images/common/herobg.png"
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

const HeroContent: React.FC = () => {
    return (
        <HeroContentWrapper>
            <TextContent>
                <Title>
                    goldx <br /> blockchain.
                </Title>
                <Description>
                    The Ultimate Fusion of Digital and Physical Gold Investment.
                    It is fully compatible with Euretheum and allows smart
                    contracts to operate on GoldX. Invest today!
                </Description>
                <div className="getstartedicon">
                    <GetStartedIcon />
                </div>
            </TextContent>
            <Logo
                src="/images/common/blockchainlogo.svg"
                alt="Goldx Blockchain Logo"
            />
        </HeroContentWrapper>
    );
};
const HeroStats: React.FC = () => {
    return (
        <StatsWrapper>
            <StatContent>
                <StatValue>250+</StatValue>
                <StatLabel>Market Cap</StatLabel>
            </StatContent>
            <StatImage
                src="/images/common/herograph.svg"
                alt="Market Cap Illustration"
            />
        </StatsWrapper>
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
        <InvestButtonWrapper>
            <ActionButton
                label="Invest in the future with us"
                variant="primary"
                className="btnwidth100"
                // @ts-ignore
                icon={<ArrowTransformIcon />}
            />
        </InvestButtonWrapper>
    );
};

const StyledHeroMain = styled(StyledHero)<Props>`
    ${InvestButtonWrapper} {
        width: ${(props) => `${100 + props?.boxWidth / 4.3}px`};
    }
`;
export default Hero;
