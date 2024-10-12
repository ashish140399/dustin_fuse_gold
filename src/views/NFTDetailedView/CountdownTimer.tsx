import React from "react";
import styled from "styled-components";

interface CountdownTimerProps {
    saleEndDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ saleEndDate }) => {
    // Implement countdown logic here
    const timeLeft = {
        days: "00",
        hours: "23",
        minutes: "15",
        seconds: "53",
    };

    return (
        <TimerWrapper>
            <SaleEndInfo>Sale ends 28 July 2024 at 1:47 AM</SaleEndInfo>
            <TimeUnits>
                <TimeUnit>
                    <TimeValue>{timeLeft.days}</TimeValue>
                    <TimeLabel>Days</TimeLabel>
                </TimeUnit>
                <TimeUnit>
                    <TimeValue>{timeLeft.hours}</TimeValue>
                    <TimeLabel>Hours</TimeLabel>
                </TimeUnit>
                <TimeUnit>
                    <TimeValue>{timeLeft.minutes}</TimeValue>
                    <TimeLabel>Minutes</TimeLabel>
                </TimeUnit>
                <TimeUnit>
                    <TimeValue>{timeLeft.seconds}</TimeValue>
                    <TimeLabel>Seconds</TimeLabel>
                </TimeUnit>
            </TimeUnits>
        </TimerWrapper>
    );
};

const TimerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    // border-bottom: 2px solid red;
    position: relative;
    padding-bottom: 30px;
    margin-bottom: 10px;
    &::after {
        position: absolute;
        content: "";
        width: calc(100% + 48px);
        height: 2px;
        background: #383838;
        bottom: 0;
        left: -24px;
    }
`;

const SaleEndInfo = styled.p`
    color: var(--text-primary);
    font: 400 16px Telegraf, sans-serif;
`;

const TimeUnits = styled.div`
    display: flex;
    margin-top: 12px;
    gap: 24px;
    flex-wrap: wrap;
`;

const TimeUnit = styled.div`
    display: flex;
    flex-direction: column;
    width: 96px;
`;

const TimeValue = styled.span`
    color: var(--text-primary);
    font: 350 40px/1.2 Conthrax, sans-serif;
    text-transform: uppercase;
`;

const TimeLabel = styled.span`
    color: var(--text-tertiary);
    font: 400 12px/1 Telegraf, sans-serif;
`;

export default CountdownTimer;
