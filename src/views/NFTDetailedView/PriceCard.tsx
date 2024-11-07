import React from "react";
import styled from "styled-components";
import PriceInfo from "./PriceInfo";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import { DollarIcon, TransferIcon } from "../../assets/icons";
import CountdownTimer from "./CountdownTimer";
import { useNavigate } from "react-router-dom";

interface PriceCardProps {
    saleEndDate: string;
    currentPrice: {
        amount: string;
        currency: string;
        usdEquivalent: string;
    };
}

const PriceCard: React.FC<PriceCardProps> = ({ saleEndDate, currentPrice }) => {
    const navigate = useNavigate();
    return (
        <CardWrapper>
            <CountdownTimer saleEndDate={saleEndDate} />
            <PriceInfo currentPrice={currentPrice} />
            <ButtonsContainer>
                <StyledActionButton
                    className="btnwidth50"
                    label="List for sell"
                    variant="primary"
                    // @ts-ignore
                    icon={<DollarIcon />}
                />
                <StyledActionButton
                    className="btnwidth50"
                    label="transfer"
                    variant="secondary"
                    onClick={() => navigate("/transfer")}
                    // @ts-ignore
                    icon={<TransferIcon />}
                />
            </ButtonsContainer>

            <Divider
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/197fc05a-257c-4751-b5cd-abf786232d27?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                alt=""
                loading="lazy"
            />
        </CardWrapper>
    );
};
const StyledActionButton = styled(ActionButton)``;
const ButtonsContainer = styled.section`
    align-self: stretch;
    display: flex;
    align-items: center;
    min-width: 240px;
    align-items: center;
    gap: 16px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto 0;
    margin-top: 20px;
    ${StyledActionButton} {
        width: 48%;
    }
`;

const CardWrapper = styled.section`
    border-radius: 24px;
    background: var(--transparent-white);
    position: relative;
    display: flex;
    // margin-top: 128px;
    flex-direction: column;
    padding: 24px;
    margin-top: 20px;
    @media (max-width: 991px) {
        margin-top: 40px;
        padding: 20px;
    }
`;

const Divider = styled.img`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 600px;
    max-width: 100%;
    height: 1px;
`;

export default PriceCard;
