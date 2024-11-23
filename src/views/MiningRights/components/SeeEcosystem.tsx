import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { ArrowTransformIcon } from "../../../assets/icons";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import { motion } from "framer-motion";
const SeeEcosystem: React.FC = () => {
    const textWavyVariants = {
        hidden: { opacity: 0, y: -40 }, // Start off-screen below
        visible: ({
            index,
            delayOffset,
        }: {
            index: number;
            delayOffset: number;
        }) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: delayOffset + index * 0.1,
                duration: 0.3,
            }, // Stagger each line by 0.2s
        }),
    };

    const lineVariants = {
        hidden: { opacity: 0, y: -30 }, // Start off-screen below
        visible: ({
            index,
            delayOffset,
        }: {
            index: number;
            delayOffset: number;
        }) => ({
            opacity: 1,
            y: 0,
            transition: { delay: delayOffset + index * 0.5, duration: 0.3 }, // Stagger each line by 0.2s
        }),
    };

    const texts = {
        titlewhite: "SEE OUR",
        titlespan: "ECOSYSTEM",
        descriptionLines: [
            "Lorem ipsum dolor sit amet, consectetur elit, sed do",
            "eiusmod tempor incididunt ut",
        ],
    };
    return (
        <EcoSystemSection className="paddingsclayoutx marginsclayouty1">
            <SectionHeader>
                <SectionTitle>
                    {[...texts.titlewhite].map((char, index) => (
                        <motion.span
                            key={index}
                            custom={{ index: index, delayOffset: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            variants={textWavyVariants}
                            initial="hidden"
                            whileInView="visible"
                        >
                            {char}
                        </motion.span>
                    ))}{" "}
                    <GoldSpan>
                        {" "}
                        {[...texts.titlespan].map((char, index) => (
                            <motion.span
                                key={index}
                                custom={{ index: index, delayOffset: 0.8 }}
                                viewport={{ once: false, amount: 0.3 }}
                                variants={textWavyVariants}
                                initial="hidden"
                                whileInView="visible"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    {[...texts.descriptionLines].map((line, index) => (
                        <motion.div
                            key={index}
                            custom={{ index: index, delayOffset: 0.8 }}
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {line}
                        </motion.div>
                    ))}{" "}
                    <FramerActionButton
                        viewport={{ once: false }}
                        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} // Start fully clipped
                        whileInView={{
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                        }} // Reveal completely
                        transition={{
                            delay: 1.3,
                            duration: 0.3,
                            ease: "easeIn", // Smooth transition
                        }}
                    >
                        <ActionButton
                            label="About Ecosystem"
                            variant="primary"
                            className="btnwidth50"
                            // @ts-ignore
                            icon={<ArrowTransformIcon />}
                        />
                    </FramerActionButton>
                </SectionDescription>
            </SectionHeader>
            <EcoSystemImageWrapper
                as={motion.div}
                viewport={{ once: false, amount: 0.3 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                }}
            >
                <img
                    src="/images/common/seeourecosystem.svg"
                    className="seeecosystem"
                    alt=""
                />
            </EcoSystemImageWrapper>
        </EcoSystemSection>
    );
};
const FramerActionButton = motion(styled.div``);
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

const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // margin-bottom: 40px;
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
    width: 50%;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const GoldSpan = styled.span`
    color: var(--Text-Tertiary, #969696);
`;

const SectionDescription = styled.p`
    width: 50%;
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    max-width: 500px;
    margin-top: 0;
    .btnwidth50 {
        margin-top: 20px;
        width: 240px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;
const EcoSystemSection = styled.section`
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${SectionDescription},${SectionTitle} {
            width: 100%;
            .btnwidth50 {
                width: 100%;
            }
        }
    }
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 60px 10px 0;
        ${SectionTitle} {
            font-size: 32px;
        }
        ${SectionDescription} {
            font-size: 16px;
        }
    }
`;
export default SeeEcosystem;
