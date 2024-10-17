import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { ArrowTransformIcon } from "../../../assets/icons";

const SeeEcosystem: React.FC = () => {
    return (
        <EcoSystemSection className="paddingsclayoutx marginsclayouty1">
            <SectionHeader>
                <SectionTitle>
                    SEE OUR <GoldSpan>ECOSYSTEM</GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut
                    <ActionButton
                        label="About Ecosystem"
                        variant="primary"
                        className="btnwidth50"
                        // @ts-ignore
                        icon={<ArrowTransformIcon />}
                    />
                </SectionDescription>
            </SectionHeader>
            <EcoSystemImageWrapper>
                <img
                    src="images/common/seeourecosystem.svg"
                    className="seeecosystem"
                    alt=""
                />
            </EcoSystemImageWrapper>
        </EcoSystemSection>
    );
};

const EcoSystemImageWrapper = styled.div`
    .seeecosystem {
        width: 100%;
        margin-top: 40px;
        svg {
            width: 100%;
            height: auto;
        }
    }
`;

const EcoSystemSection = styled.section``;

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // margin-bottom: 40px;
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

export default SeeEcosystem;
