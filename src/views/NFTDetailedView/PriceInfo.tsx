import React from "react";
import styled from "styled-components";

interface PriceInfoProps {
    currentPrice: {
        amount: string;
        currency: string;
        usdEquivalent: string;
    };
}

const PriceInfo: React.FC<PriceInfoProps> = ({ currentPrice }) => {
    return (
        <PriceWrapper>
            <PriceLabel>Current Price</PriceLabel>
            <PriceDetails>
                <MainPrice>
                    <Amount>{currentPrice.amount}</Amount>
                    <Currency>{currentPrice.currency}</Currency>
                </MainPrice>
                <USDEquivalent>
                    <USDAmount>${currentPrice.usdEquivalent}</USDAmount>
                    <USDLabel>GOLDX</USDLabel>
                </USDEquivalent>
            </PriceDetails>
        </PriceWrapper>
    );
};

const PriceWrapper = styled.div`
    margin-bottom: 24px;
`;

const PriceLabel = styled.p`
    color: var(--text-primary);
    font: 400 16px Telegraf, sans-serif;
`;

const PriceDetails = styled.div`
    display: flex;
    margin-top: 12px;
    align-items: flex-end;
    gap: 16px;
    flex-wrap: wrap;
`;

const MainPrice = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 240px;
`;

const Amount = styled.span`
    color: var(--text-primary);
    font: 350 40px/1.2 Conthrax, sans-serif;
    text-transform: uppercase;
`;

const Currency = styled.span`
    color: var(--text-tertiary);
    font: 400 12px/1 Telegraf, sans-serif;
`;

const USDEquivalent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    width: 105px;
`;

const USDAmount = styled.span`
    color: var(--text-primary);
    font: 300 20px/1.6 Conthrax, sans-serif;
    text-transform: uppercase;
`;

const USDLabel = styled.span`
    color: var(--text-tertiary);
    font: 400 12px/1 Telegraf, sans-serif;
`;

export default PriceInfo;
