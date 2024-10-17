import React, { useState } from "react";
import styled from "styled-components";
import { mobileBreakpoint } from "../../../const";

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <FAQItemWrapper>
            <QuestionWrapper onClick={() => setIsOpen(!isOpen)}>
                <Question>{question}</Question>
                <ToggleIcon
                    src={
                        isOpen
                            ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2664175415f328674e5b8135266b125655dbe198ed3a11045a2f573513d885c6?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                            : "https://cdn.builder.io/api/v1/image/assets/TEMP/a6488ef16a395fbbf1871c563496f224bd46a39a4cdd9257d707e1edc2c588e4?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                    }
                    alt={isOpen ? "Close" : "Open"}
                />
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

    return (
        <FAQSection className="paddingscbox">
            <SectionHeader>
                <SectionTitle>
                    FAQs<GoldSpan>.</GoldSpan>
                </SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor elit, do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    a nostrud exercitation ullamco.
                </SectionDescription>
            </SectionHeader>
            <FAQList>
                {faqItems.map((item, index) => (
                    <FAQItem key={index} {...item} />
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
    @media (max-width: 991px) {
        flex-direction: column;
    }
`;

const SectionTitle = styled.h2`
    line-height: 1.2;
    font: 600 64px/1 Conthrax, sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
    margin: 0;
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
        max-width: 100%;
        margin-top: 20px;
    }
`;

const FAQItemWrapper = styled.div`
    border-bottom: 1px solid var(--Lines-Border, #5d5c5a);
    padding: 48px 0;
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

const ToggleIcon = styled.img`
    width: 32px;
    height: 32px;
`;

const Answer = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    color: var(--Text-Secondary, #cfcfcf);
    margin-top: 24px;
`;
const FAQSection = styled.section`
    // background-color: var(--Brand-Dark, #111);
    display: flex;

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
`;

export default FAQ;
