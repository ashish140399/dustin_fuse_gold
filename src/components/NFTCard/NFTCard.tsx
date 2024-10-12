import React from "react";
import styled from "styled-components";
import NFTCardDetails from "./NFTCardDetails";
import MoreDetailsButton from "./MoreDetailsButton";
import NFTImage from "./NFTImage";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>Done!</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return (
            <span>
                {hours}:{minutes}:{seconds}
            </span>
        );
    }
};

interface NFTCardProps {
    imageSrc: string;
    title: string;
    price: string;
    currency: string;
    likes: number;
    timeLeft: number;
}

const NFTCard: React.FC<NFTCardProps> = ({
    imageSrc,
    title,
    price,
    currency,
    likes,
    timeLeft,
}) => {
    return (
        <Card>
            <NFTImage src={imageSrc} alt={title} />

            <CountdownBox>
                <Countdown date={Date.now() + timeLeft} renderer={renderer} />
            </CountdownBox>
            <MoreDetailsButton />
            <BottomBg>
                <CardContent>
                    <NFTCardDetails
                        title={title}
                        price={price}
                        currency={currency}
                        likes={likes}
                    />
                </CardContent>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="auto"
                    viewBox="0 0 328 176"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        d="M24 176C10.7452 176 0 165.255 0 152V0H328V80C328 93.2548 317.255 104 304 104H288C270.327 104 256 118.327 256 136V152C256 165.255 245.255 176 232 176H24Z"
                        fill="#111111"
                    />
                </svg>
            </BottomBg>
        </Card>
    );
};

const Card = styled.article`
    position: relative;
    display: flex;
    max-width: 328px;
    min-width: 328px;
    flex-direction: column;
    justify-content: flex-start;
`;

const CardContent = styled.div`
    border-radius: 0;
    z-index: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    font: 400 16px/24px Telegraf, sans-serif;
    position: Relative;
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 100%;
`;

const BottomBg = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    margin-top: -10px;
`;

const CountdownBox = styled.div`
    position: absolute;
    z-index: 2;
    border-radius: 24px;
    background: var(--Brand-Dark, #111);
    position: absolute;
    min-height: 48px;
    width: 160px;
    max-width: 100%;
    gap: 10px;
    color: var(--Text-Tertiary, var(--Typography-Primary-white, #969696));
    text-align: center;
    height: 48px;
    font: 400 16px/24px Telegraf, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default NFTCard;
