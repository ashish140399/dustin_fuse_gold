import React from "react";
import styled from "styled-components";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { ArrowTransformIcon } from "../../../assets/icons";
import { mobileBreakpoint } from "../../../const";

const MintingBuy: React.FC = () => {
    return (
        <MiningRightsSection className="paddingscbox">
            <ContentWrapper>
                <TextContent>
                    <SectionTitle>
                        Ready to buy Your
                        <GoldSpan> Mining Right?</GoldSpan>
                    </SectionTitle>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur elit, do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis a nostrud exercitation
                        ullamco.
                    </SectionDescription>
                    <ActionButton
                        label="Buy Now"
                        variant="primary"
                        className="btnwidth100"
                        // @ts-ignore
                        icon={<ArrowTransformIcon />}
                    />
                </TextContent>
                <ImageWrapper>
                    <MiningImage
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68d6dfc25429d5836a4db41cadf6ed2edc083f1d4c9c3a4d59f4f606a415d663?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                        alt="Mining Rights Illustration"
                    />
                </ImageWrapper>
            </ContentWrapper>
        </MiningRightsSection>
    );
};

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 78px;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const TextContent = styled.div`
    flex: 1;
    max-width: 600px;
    .fullwidth {
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: #fff;
    text-transform: uppercase;
    @media (max-width: 991px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const GoldSpan = styled.span`
    color: #969696;
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    margin-top: 24px;
    margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MiningImage = styled.img`
    max-width: 100%;
    height: auto;
`;
const MiningRightsSection = styled.section`
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
        ${ContentWrapper} {
            flex-direction: column-reverse;
            flex-wrap: unset;
            ${TextContent} {
                max-width: unset;
            }
        }
    }
`;

export default MintingBuy;
