import React, { useContext } from "react";
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
import { mobileBreakpoint } from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";

const Hero: React.FC = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    return (
        <StyledHero>
            <div className="herobag">
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
        </StyledHero>
    );
};

const HeroContent: React.FC = () => {
    return (
        <HeroContentWrapper>
            <TextContent>
                <Title>
                    Security & <br /> Custody
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bf7f61a654dfd7570ffc987876d57a87806ad0d4e8b9e37964537845d7fcecf?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
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
                <StatLabel>CLIENT TRUST US</StatLabel>
            </StatContent>
            <StatImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/052c2da166d6ea63882a50b2df2c675f2751d4d6fa29647a71bfedf614f70dd7?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
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
    @media (max-width: 991px) {
        margin-top: 40px;
        padding: 0 20px;
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
    .getstartedicon {
        cursor: pointer;
        svg {
            width: 100px;
        }
    }
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const Title = styled.h1`
    color: #fff;
    font-feature-settings: "liga" off, "clig" off;
    text-transform: uppercase;
    margin: 0;

    font: 600 80px/80px Conthrax, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
        font-size: 40px;
        line-height: 44px;
    }
`;

const Description = styled.p`
    color: var(--Text-Secondary, #cfcfcf);
    margin-top: 32px;
    font: 400 20px/28px Telegraf, sans-serif;
    max-width: 700px;
    @media (max-width: 991px) {
        max-width: 100%;
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
        <ButtonWrapper>
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
        </ButtonWrapper>
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
`;

export default Hero;
