import React from "react";
import styled from "styled-components";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { ArrowTransformIcon } from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";

const SupportEngland: React.FC = () => {
    return (
        <MiningRightsSection>
            <ContentWrapper>
                <TextContent>
                    <SectionTitle>
                        We support <br />
                        england!
                    </SectionTitle>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur elit, do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis a nostrud exercitation
                        ullamco.
                    </SectionDescription>
                    <ActionButton
                        label="Buy Mining Rights"
                        variant="primary"
                        className="btnwidth100"
                        // @ts-ignore
                        icon={<ArrowTransformIcon />}
                    />
                </TextContent>
                <ImageWrapper>
                    <img
                        src="/images/common/supportengland.svg"
                        className="supportengland"
                        alt=""
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

    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
    }
`;

const TextContent = styled.div`
    position: absolute;
    max-width: 600px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .fullwidth {
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    @media screen and (max-width: ${mobileBreakpoint}px) {
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
    text-align: center;
`;

const ImageWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
        width: 100%;
    }
`;
const MiningRightsSection = styled.section`
    position: relative;
    overflow-x: hidden;
    max-width: 100vw;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
            margin-top: 0;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${ContentWrapper} {
            min-height: 70vh;
            ${ImageWrapper} {
                height: 100%;
                img {
                    width: auto;
                    height: 100%;
                    object-fit: contain;
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
        ${TextContent} {
            width: calc(100% - 30px);
        }
    }
`;
export default SupportEngland;
