import React, { useContext } from "react";
import styled from "styled-components";
import {
    GoldXFeaturesMBTopBG,
    GoldXFeaturesTopBG,
} from "../../../assets/BG/BG";
import {
    ArrowTransformIcon,
    ProductTimelineIcon,
    ProductTimelineMBIcon,
} from "../../../assets/icons";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";

const ProductHistory: React.FC = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    return (
        <HistorySection>
            <div className="topimgbg">
                {windowDimensions?.width > mobileBreakpoint ? (
                    <GoldXFeaturesTopBG />
                ) : (
                    <GoldXFeaturesMBTopBG />
                )}
            </div>
            <SectionHeader className="paddingsclayoutx">
                <SectionTitle>
                    History <GoldSpan>of product</GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut
                </SectionDescription>
            </SectionHeader>
            <HistoryContentWrapper className="paddingsclayoutx">
                <div className="genesiswrapper">GENESIS Round</div>
                <HistoryLayoutBox>
                    <TimelineContainer>
                        <TimelineItemWrapper>
                            <TimelineIconWrapper>
                                {windowDimensions?.width > mobileBreakpoint ? (
                                    <ProductTimelineIcon />
                                ) : (
                                    <ProductTimelineMBIcon />
                                )}
                            </TimelineIconWrapper>

                            <TimelineContent>
                                <YearBadge>
                                    <YearText>2014</YearText>
                                </YearBadge>
                                <TimelineDetails>
                                    <TimelineTitle>Round 1</TimelineTitle>
                                    <TimelineDescription>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </TimelineDescription>
                                </TimelineDetails>
                            </TimelineContent>
                        </TimelineItemWrapper>
                        <TimelineItemWrapper className="disabled">
                            <TimelineIconWrapper>
                                {windowDimensions?.width > mobileBreakpoint ? (
                                    <ProductTimelineIcon />
                                ) : (
                                    <ProductTimelineMBIcon />
                                )}
                            </TimelineIconWrapper>

                            <TimelineContent>
                                <YearBadge>
                                    <YearText>2016</YearText>
                                </YearBadge>
                                <TimelineDetails>
                                    <TimelineTitle>Round 2</TimelineTitle>
                                    <TimelineDescription>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </TimelineDescription>
                                </TimelineDetails>
                            </TimelineContent>
                        </TimelineItemWrapper>
                        <TimelineItemWrapper className="disabled">
                            <TimelineIconWrapper>
                                {windowDimensions?.width > mobileBreakpoint ? (
                                    <ProductTimelineIcon />
                                ) : (
                                    <ProductTimelineMBIcon />
                                )}
                            </TimelineIconWrapper>

                            <TimelineContent>
                                <YearBadge>
                                    <YearText>2019</YearText>
                                </YearBadge>
                                <TimelineDetails>
                                    <div className="newbox">Now</div>
                                    <TimelineTitle>Round 3</TimelineTitle>
                                    <TimelineDescription>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                    </TimelineDescription>
                                </TimelineDetails>
                            </TimelineContent>
                        </TimelineItemWrapper>
                    </TimelineContainer>
                </HistoryLayoutBox>
            </HistoryContentWrapper>
        </HistorySection>
    );
};
const HistoryLayoutBox = styled.div`
    width: 100%;
`;
const TimeLineComponent = styled.div``;

const HistoryContentWrapper = styled.div`
    background: #171615;
    padding-top: 70px;
    padding-bottom: 140px;
    .genesiswrapper {
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
        font-feature-settings: "liga" off, "clig" off;

        /* Title/H5 */
        font-family: Conthrax;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 40px; /* 133.333% */
        text-transform: uppercase;
        margin-bottom: 50px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        padding-bottom: 70px;
    }
`;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: #171615;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/64px Conthrax, sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
    margin: 0;
    max-width: 700px;
    line-height: 1.2;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const GoldSpan = styled.span`
    color: var(--Text-Tertiary, #969696);
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    max-width: 500px;
    .btnwidth50 {
        margin-top: 20px;
        width: 240px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const TimelineContainer = styled.section`
    position: relative;
    display: flex;
    width: 100%;
`;

const TimelineIconWrapper = styled.div`
    height: 100%;
    margin-right: 30px;
    svg {
        height: 100%;
        width: auto;
    }
`;

const TimelineItemWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 33.3%;
    &.disabled {
        opacity: 0.5;
    }
`;

const TimelineContent = styled.div`
    align-self: stretch;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: flex-start;
    width: 345px;
    margin: auto 0;
`;

const YearText = styled.span`
    position: relative;
    z-index: 1;
`;

const TimelineDetails = styled.div`
    display: flex;
    margin-top: 104px;
    width: 100%;
    flex-direction: column;
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    justify-content: flex-start;
    position: relative;
    .newbox {
        position: absolute;
        top: -45px;
        color: #87d6c3;
    }
`;

const TimelineTitle = styled.h2`
    font-feature-settings: "liga" off, "clig" off;
    text-transform: uppercase;
    font: 600 30px/1 Conthrax, sans-serif;
    margin: 0;
    margin-bottom: 40px;
`;

const YearBadge = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-feature-settings: "liga" off, "clig" off;
    align-self: stretch;
    position: relative;
    width: 123px;
    border-radius: 100px;
    aspect-ratio: 3.075;
    max-width: 100%;
    gap: 10px;
    color: var(--Brand-Dark, #111);
    white-space: nowrap;
    text-transform: uppercase;
    padding: 2px 16px;
    font: 600 30px/1 Conthrax, sans-serif;
    border-radius: 100px;
    margin-top: 50px;
    background: linear-gradient(90deg, #fae8b2 0%, #554b2d 100%),
        url(<path-to-image>) lightgray 50% / cover no-repeat;
`;

const TimelineDescription = styled.p`
    margin-top: 0px;
    font: 400 16px/24px Telegraf, sans-serif;
    margin-bottom: 50px;
`;

const HistorySection = styled.section`
    .topimgbg {
        margin-bottom: -10px;
        transform: scalex(-1);
        svg {
            width: 100%;
        }
    }
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }

    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 70px 0px 16px;
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
        ${TimelineItemWrapper} {
            width: 100%;
        }
        ${TimelineIconWrapper} {
            margin-right: 0;
            width: 100%;
        }
        ${TimelineContainer} {
            flex-direction: column;
            ${TimelineContent} {
                width: 100%;
                flex-direction: column-reverse;
            }
            ${TimelineDetails} {
                margin-top: 50px;
                ${TimelineTitle} {
                    margin-bottom: 20px;
                }
            }
            ${YearBadge} {
                margin-top: 0;
                margin-bottom: 50px;
            }
            ${TimelineItemWrapper} {
                flex-direction: column;
                position: relative;
                ${TimelineIconWrapper} {
                    // transform: rotate(90deg);
                    // position: absolute;
                    // top: 0;
                    // right: -58px;
                    // transform-origin: top right;
                    // height: calc(100vw - 0px);
                    // margin: 0;
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
    }
`;

export default ProductHistory;
