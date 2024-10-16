import React from "react";
import styled from "styled-components";
import { GoldXFeaturesTopBG } from "../../../assets/BG/BG";
import { ArrowTransformIcon } from "../../../assets/icons";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";

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

const CTASection = styled.section`
    // background-image: url("https://cdn.builder.io/api/v1/image/assets/TEMP/36b51db74741719471682b2caca8a262981dd720a4caa83e5272336682bec036?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88");
    background-size: cover;
    background-position: center;
    // padding: 136px 16px 16px;
    .topimgbg {
        margin-bottom: -10px;
        transform: scalex(-1);
        svg {
            width: 100%;
        }
    }
    @media (max-width: 991px) {
        padding: 100px 20px 16px;
    }
`;

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

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 32px;
    padding: 20px 32px;
    font: 500 16px Telegraf, sans-serif;
    cursor: pointer;
`;

const PrimaryButton = styled(Button)`
    background: var(
        --Brand-Gold,
        radial-gradient(
            458.07% 144.86% at 13.25% 21.87%,
            #f4e0a3 0%,
            #dcbc65 37.37%,
            #ca9f43 63.89%,
            #fef0a0 79.39%,
            #8e5f1e 100%
        )
    );
    border: none;
    color: var(--Brand-Dark, #111);
`;

const SecondaryButton = styled(Button)`
    background: transparent;
    border: 1.5px solid var(--Brand-Gold, #f4e0a3);
    color: var(--Text-Primary, #fff);
`;

const LoginButton = styled(PrimaryButton)`
    width: 100%;
    max-width: 280px;
`;

const ButtonIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export default CallToAction;
