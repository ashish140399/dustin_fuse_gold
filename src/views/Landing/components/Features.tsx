import React from "react";
import styled from "styled-components";
import {
    GoldXFeaturesBG,
    GoldXFeaturesBottomBG,
    GoldXFeaturesTopBG,
} from "../../../assets/BG/BG";
import { FeatureRowIcon } from "../../../assets/icons";

const Features: React.FC = () => {
    return (
        <FeaturesSection>
            <SectionHeader className="paddingsclayoutx">
                <SectionTitle>
                    GoldX <GoldSpan>Features.</GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut
                </SectionDescription>
            </SectionHeader>
            <FeaturesSectionWrapper>
                <div className="topimgbg">
                    <GoldXFeaturesTopBG />
                </div>
                <FeaturesContainer className="paddingsclayoutx">
                    <FeatureWrapper>
                        <FeatureNumber>01</FeatureNumber>
                        <FeatureIcon></FeatureIcon>
                        <FeatureTitle>
                            <div> Performance and Cost Efficiency</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            Swift block confirmation and low transaction costs
                            are ensured by the GOLDX blockchain, boasting an
                            average block interval of approximately 5 seconds
                            and transaction confirmation costs of under $0.01.
                        </FeatureDescription>
                    </FeatureWrapper>
                    <FeatureWrapper className="active">
                        <FeatureNumber>02</FeatureNumber>
                        <FeatureIcon>
                            <FeatureRowIcon />
                        </FeatureIcon>
                        <FeatureTitle>
                            <div>Consensus Mechanism</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            The GOLDX blockchain utilizes a PoV variant for
                            consensus, reinforced by a mix of independent and
                            company-owned refiners. Refiners play a crucial
                            governance role on GOLDX, facilitating network
                            protocol changes through GOLDX Improvement Proposals
                            (FIPs).
                        </FeatureDescription>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <FeatureNumber>03</FeatureNumber>
                        <FeatureIcon></FeatureIcon>
                        <FeatureTitle>
                            <div>Tokenization of Precious Metals</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            A standout feature of the GOLDX blockchain is its
                            ability to tokenize precious metals and real-world
                            assets, effectively reducing the volatility inherent
                            in traditional liquidity sources. At the core of the
                            network lies the native token, GOLDX.
                        </FeatureDescription>
                    </FeatureWrapper>
                    <FeatureWrapper>
                        <FeatureNumber>04</FeatureNumber>
                        <FeatureIcon></FeatureIcon>
                        <FeatureTitle>
                            <div>Token Standards</div>
                        </FeatureTitle>
                        <FeatureDescription>
                            The GOLDX chain's GX-20 and other token standards
                            empower the creation of diverse digital tokens,
                            enabling developers to launch their own projects and
                            products on the network.
                        </FeatureDescription>
                    </FeatureWrapper>
                </FeaturesContainer>
                <div className="bottomimgbg">
                    <GoldXFeaturesBottomBG />
                </div>
            </FeaturesSectionWrapper>
        </FeaturesSection>
    );
};

const FeaturesSectionWrapper = styled.div`
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
const FeaturesSection = styled.section`
    position: relative;

    @media (max-width: 991px) {
        padding: 40px 20px;
    }
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
    position: relative;
    z-index: 2;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--text-primary, #fff);
    text-transform: uppercase;
    margin: 0;
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
    max-width: 600px;
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    z-index: 2;
    background-color: #171615;
`;

const FeatureNumber = styled.span`
    font: 600 16px/40px Conthrax, sans-serif;
    color: var(--text-primary, #fff);
    width: 80px;
    padding: 16px 0;
`;

const FeatureIcon = styled.div`
    width: 140px;
    svg {
        width: 120px;
        margin-top: 12px;
    }
`;
const FeatureTitle = styled.h3`
    font: 600 30px/40px Conthrax, sans-serif;
    margin: 16px 0;
    // sum of featureicon and featurenumber width
    width: calc(50% - 110px);
    color: var(--Text-Tertiary, #969696);
    div {
        max-width: 400px;
    }
`;

const FeatureDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    width: calc(50% - 110px);
    color: var(--Text-Tertiary, #969696);
`;

const FeatureWrapper = styled.div`
    display: flex;
    color: var(--text-primary, #fff);
    padding: 40px;
    border-bottom: 1px solid var(--Lines-Divider, #383838);
    border-radius: 32px;
    &.active {
        border-bottom: 1px solid var(--Lines-Gold, #e2b666);
        ${FeatureTitle} {
            color: #fff;
        }
        ${FeatureDescription} {
            color: #fff;
        }
    }
`;
export default Features;
