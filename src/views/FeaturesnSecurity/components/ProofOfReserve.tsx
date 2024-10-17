import React from "react";
import styled from "styled-components";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { ArrowTransformIcon } from "../../../assets/icons";
import { mobileBreakpoint } from "../../../const";

const ProofOfReserve: React.FC = () => {
    return (
        <MiningRightsSection>
            <ContentWrapper>
                <TextContent>
                    <SectionTitle>
                        <GoldSpan>Proof </GoldSpan>of reserve
                    </SectionTitle>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur elit, do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis a nostrud exercitation
                        ullamco.
                    </SectionDescription>
                    <ActionButton
                        label="Read Full Article"
                        variant="primary"
                        className="btnwidth100"
                        // @ts-ignore
                        icon={<ArrowTransformIcon />}
                    />
                </TextContent>
                <ImageWrapper>
                    <MiningImage
                        src="./images/common/proofofreserve.svg"
                        alt="Mining Rights Illustration"
                    />
                    <div className="customer">
                        <img src="images/common/250cust.png" alt="" />
                    </div>
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
    color: #111;
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
    color: var(--Text-Inactive, #707070);
    margin-top: 24px;
    margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
    // flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    .customer {
        position: absolute;
        left: 0;
        z-index: 2;
        width: 200px;
        top: 70px;
        transform: translateX(-50%);
        img {
            width: 100%;
        }
    }
`;

const MiningImage = styled.img`
    max-width: 100%;
    height: auto;
`;
const MiningRightsSection = styled.section`
    border-radius: 32px;
    background: var(--Typography-Primary-white, #fff);
    margin: 0 14px;
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
            padding: 50px 30px;
            ${ImageWrapper} {
                width: 100%;
                img {
                    width: 100%;
                }
                .customer {
                    display: none;
                }
            }
            ${TextContent} {
                flex: 1;
                max-width: unset;
            }
        }
    }
`;

export default ProofOfReserve;
