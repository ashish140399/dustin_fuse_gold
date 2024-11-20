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
import MiningRightModal from "../../../components/Modals/MiningRightModal";

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
                    Buy Your <br />
                    Mining Rights
                    <br /> Today!
                </Title>
                <Description>
                    Efficient Transactions and Secure Tokenization on the GOLDX
                    Blockchain
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
    @media screen and (max-width: ${mobileBreakpoint}px) {
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
`;

const Description = styled.p`
    color: var(--Text-Secondary, #cfcfcf);
    margin-top: 32px;
    font: 400 20px/28px Telegraf, sans-serif;
    max-width: 400px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
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
        display: none !important;
    }
`;

const InvestButton: React.FC = () => {
    const [openMiningRightsModal, setOpenMiningRightsModal] =
        React.useState(false);
    return (
        <>
            <MiningRightModal
                type="purchase_with_wallet"
                modalopen={openMiningRightsModal}
                handleModal={setOpenMiningRightsModal}
            />
            <ButtonWrapper>
                <ActionButton
                    label="Buy Mining Rights"
                    variant="primary"
                    className="btnwidth100"
                    // @ts-ignore
                    icon={<ArrowTransformIcon />}
                    onClick={() => {
                        setOpenMiningRightsModal(true);
                    }}
                />
                <ActionButton
                    label="Marketplace"
                    variant="secondary"
                    className="btnwidth100"
                    // @ts-ignore
                    icon={<ArrowTransformIcon />}
                />
            </ButtonWrapper>
        </>
    );
};

const ButtonWrapper = styled(InvestButtonWrapper)`
    display: flex;
    justify-content: center;
    align-items: center;
    // position: relative;
    z-index: 10;
    .btnwidth100 {
        &:first-child {
            margin-right: 20px;
        }
    }
`;
export default Hero;
