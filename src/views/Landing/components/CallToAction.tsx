import React from "react";
import styled from "styled-components";
import { GoldXFeaturesTopBG } from "../../../assets/BG/BG";
import { ArrowTransformIcon } from "../../../assets/icons";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { mobileBreakpoint } from "../../../const";

const CallToAction: React.FC = () => {
    return (
        <CTASection>
            <div className="topimgbg">
                <GoldXFeaturesTopBG />
            </div>
            <CTAContent>
                <LeftColumn>
                    <SectionTitle>
                        Buy Your Mining <GoldSpan>Rights.</GoldSpan>
                    </SectionTitle>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor labore et dolore magna
                        aliqua.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </SectionDescription>
                    <ButtonGroup>
                        <ActionButton
                            label="Buy GOLDX"
                            variant="primary"
                            className="btnwidth100"
                            // @ts-ignore
                            icon={<ArrowTransformIcon />}
                        />
                        <ActionButton
                            label="Get Started"
                            variant="secondary"
                            className="btnwidth100"
                            // @ts-ignore
                            icon={<ArrowTransformIcon />}
                        />
                    </ButtonGroup>
                </LeftColumn>
                <RightColumn>
                    <SectionTitle>
                        Already a <GoldSpan>Member?</GoldSpan>
                    </SectionTitle>
                    <SectionDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor labore et dolore magna
                        aliqua.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                    </SectionDescription>
                    <div className="buttonwrapper">
                        <ActionButton
                            label="Login"
                            variant="primary"
                            className="btnwidth100"
                            // @ts-ignore
                            icon={<ArrowTransformIcon />}
                        />
                    </div>
                </RightColumn>
            </CTAContent>
        </CTASection>
    );
};

const CTAContent = styled.div`
    display: flex;
    justify-content: space-between;
    // gap: 20px;
    background: #171615;
    padding: 0 20px;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    flex: 1;
    padding: 80px 64px;
    border-radius: 32px;
    @media (max-width: 991px) {
        padding: 40px 20px;
    }
`;

const LeftColumn = styled(Column)`
    background-color: rgba(241, 241, 241, 0.06);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

const RightColumn = styled(Column)`
    background-color: rgba(241, 241, 241, 0.03);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    .buttonwrapper {
        width: 50%;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 40px/48px Conthrax, sans-serif;
    color: var(--Text-Tertiary, #969696);
    text-transform: uppercase;
    margin-bottom: 20px;
`;

const GoldSpan = styled.span`
    color: var(--Text-Primary, #fff);
`;

const SectionDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    margin-bottom: 48px;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 16px;
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const CTASection = styled.section`
    .topimgbg {
        margin-bottom: -10px;
        transform: scalex(-1);
        svg {
            width: 100%;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${CTAContent} {
            padding-top: 50px;
            ${LeftColumn} {
                border-radius: 32px;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
            }
            ${RightColumn} {
                border-radius: 32px;
                border-top-right-radius: 0;
                border-top-left-radius: 0;
            }
        }
    }
`;
export default CallToAction;
