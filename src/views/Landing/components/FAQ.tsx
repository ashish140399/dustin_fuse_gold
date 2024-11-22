import React, { useState } from "react";
import styled from "styled-components";
import {
    mobileBreakpoint,
    smallmobileBreakpoint,
    smscreenBreakpoint,
} from "../../../const";
import { AccordionMinusIcon, AccordionPlusIcon } from "../../../assets/icons";
import { motion, useInView } from "framer-motion";
interface FAQItemProps {
    question: string;
    answer: string;
    idx?: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, idx }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FAQItemWrapper
            as={motion.div}
            // viewport={{ once: true, amount: 0.2 }}
            initial={{ opacity: 0, y: "100%" }}
            viewport={{ once: false }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{
                delay: (idx !== undefined ? idx + 1 : 0) * 0.2 + 0.3,
                duration: 0.3,
                ease: "easeInOut",
            }}
        >
            <QuestionWrapper onClick={() => setIsOpen(!isOpen)}>
                <Question>{question}</Question>
                <AccordionIcon>
                    {isOpen ? <AccordionPlusIcon /> : <AccordionMinusIcon />}
                </AccordionIcon>
            </QuestionWrapper>
            {isOpen && <Answer>{answer}</Answer>}
        </FAQItemWrapper>
    );
};

const FAQ: React.FC = () => {
    const faqItems: FAQItemProps[] = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit iaculis nisi, consectetur sociis blandit augue aliquam. Tristique sit elementum lacus vitae egestas sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit iaculis nisi, consectetur sociis blandit augue aliquam",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit iaculis nisi, consectetur sociis blandit augue aliquam. Tristique sit elementum lacus vitae egestas sit.",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit iaculis nisi, consectetur sociis blandit augue aliquam. Tristique sit elementum lacus vitae egestas sit.",
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit iaculis nisi, consectetur sociis blandit augue aliquam. Tristique sit elementum lacus vitae egestas sit.",
        },
    ];
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
        titlewhite: "FAQs",
        titlespan: ".",
        descriptionLines: [
            "Lorem ipsum dolor elit, do eiusmod tempor incididunt ut",
            "labore et dolore magna aliqua. Ut enim ad minim veniam,",
            "veniam, quis a nostrud.",
        ],
    };
    return (
        <FAQSection className="paddingscbox">
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
                                custom={{ index: index, delayOffset: 0.3 }}
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
                            custom={{ index: index, delayOffset: 0.4 }}
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {line}
                        </motion.div>
                    ))}
                </SectionDescription>
            </SectionHeader>
            <FAQList>
                {faqItems.map((item, index) => (
                    <FAQItem key={index} {...item} idx={index} />
                ))}
            </FAQList>
        </FAQSection>
    );
};

const SectionHeader = styled.div`
    display: flex;
    // justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 40px;
    width: 35%;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/1 Conthrax, sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
    margin: 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        font-size: 40px;
    }
`;

const GoldSpan = styled.span`
    color: var(--Text-Tertiary, #969696);
`;

const SectionDescription = styled.p`
    font: 400 20px/28px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    max-width: 90%;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const FAQItemWrapper = styled.div`
    border-bottom: 1px solid var(--Lines-Border, #5d5c5a);
    padding: 48px 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 28px 0;
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        padding: 15px 0;
    }
`;

const FAQList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 65%;
    ${FAQItemWrapper} {
        &:first-child {
            border-top: 1px solid var(--Lines-Border, #5d5c5a);
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        gap: 0;
    }
`;

const QuestionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const Question = styled.h3`
    font: 500 24px/1 Telegraf, sans-serif;
    color: var(--Text-Primary, #fff);
`;

const AccordionIcon = styled.div`
    width: 32px;
    height: 32px;
    svg {
        path {
            stroke: #fff;
        }
    }
`;

const Answer = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    margin-top: 24px;
`;
const FAQSection = styled.section`
    // background-color: var(--Brand-Dark, #111);
    display: flex;
    @media screen and (max-width: ${smscreenBreakpoint}px) {
        ${SectionTitle} {
            font-size: 46px;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        ${SectionHeader} {
            width: 100%;
        }
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
        ${FAQList} {
            width: 100%;
        }
    }
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        // padding: 40px 10px;
        padding-bottom: 20px;
        ${SectionHeader} {
            margin-bottom: 20px;
        }
        ${SectionTitle} {
            font-size: 32px;
            line-height: 40px;
        }
        ${SectionDescription} {
            font-size: 16px;
            line-height: 24px;
            margin-top: 0px;
        }
        ${Question} {
            font-size: 16px;
            line-height: 24px;
        }
        ${Answer} {
            color: #cfcfcf;
            font-size: 14px;
            line-height: 20px;
            margin-top: 10px;
        }
    }
`;

export default FAQ;
