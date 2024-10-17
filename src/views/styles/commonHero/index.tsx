import styled from "styled-components";
import { mobileBreakpoint } from "../../../const";

export const HeroLeft = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    z-index: 2;
    padding-top: 24px;
    padding-bottom: 90px;
    .sidebartop {
    }
    .sidebarbottom {
        .socialiconswrapper {
            display: flex;
            flex-direction: column;
            .sclicon {
                cursor: pointer;
            }
        }
    }
`;
export const HeroRight = styled.div`
    width: calc(100% - 100px);
    padding-top: 20px;
    padding-right: 20px;
    position: relative;
    z-index: 2;
`;
export const StyledHero = styled.main`
    display: flex;
    min-height: 100vh;
    .herobag {
        position: absolute;
        // 20px for side paddding and 100px for left sidebar
        width: calc(100% - 100px - 20px);
        height: calc(100% - 20px);
        top: 20px;
        right: 20px;
        z-index: 0;
        svg {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        .herobag {
            width: calc(100% - 40px);
            height: calc(100% - 0px);
            top: 20px;
            right: 20px;
        }
        ${HeroLeft} {
            display: none;
        }
        ${HeroRight} {
            width: 100%;
        }
    }
`;

export const HeroContentWrapper = styled.section`
    align-items: center;
    display: flex;
    width: 100%;
    max-width: 1160px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px 0 50px 64px;
    box-sizing: border-box;
    height: calc(100% - 163px);
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 40px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        min-height: 100vh;
    }
`;
export const InvestButtonWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 27.5vw;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        position: relative;
        position: relative;
        width: auto;
        bottom: unset;
        left: unset;
    }
`;
