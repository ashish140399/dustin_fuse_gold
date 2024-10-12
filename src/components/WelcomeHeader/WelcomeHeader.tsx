import React from "react";
import styled from "styled-components";
import ActionButton from "../Buttons/ActionButton/ActionButton";
import { DollarIcon, ThreeDotsIcon, TransferIcon } from "../../assets/icons";

const HeaderContainer = styled.header`
    align-self: stretch;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    flex-basis: 0%;
    margin: auto 0;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const WelcomeMessage = styled.p`
    color: var(--Text-Tertiary, #969696);
    // font: 400 16px Telegraf, sans-serif;
    font-weight: 400;
    font-family: "Telegraf", sans-serif;
    margin: 0;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const DashboardTitle = styled.h1`
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    font-feature-settings: "liga" off, "clig" off;
    text-transform: uppercase;
    margin: 0;
    margin-top: 16px;
    // font: 600 40px/1.2 Conthrax, sans-serif;
    font-family: "Conthrax";
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

interface WelcomeHeaderProps {
    username: string;
}
type ActionButtonType = {
    label?: string;
    icon: any;
    variant: "primary" | "secondary" | "tertiary";
    key?: number;
};

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ username }) => {
    const actionButtons: ActionButtonType[] = [
        {
            label: "Buy",
            icon: <DollarIcon />,
            variant: "primary",
        },
        {
            label: "Convert",
            icon: <TransferIcon />,
            variant: "secondary",
        },
        {
            icon: <ThreeDotsIcon />,
            variant: "tertiary",
        },
    ];
    return (
        <DashboardContainer className="paddinglayoutx paddinglayouty">
            <HeaderContainer>
                <WelcomeMessage>Welcome Back, {username}!</WelcomeMessage>
                <DashboardTitle>Dashboard</DashboardTitle>
            </HeaderContainer>
            <ActionButtonsContainer>
                {actionButtons.map((button, index) => (
                    <ActionButton key={index} {...button} />
                ))}
            </ActionButtonsContainer>
        </DashboardContainer>
    );
};

const DashboardContainer = styled.main`
    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: flex-start;
    flex-wrap: wrap;
    // margin-bottom: 40px;
    background: var(--Brand-Dark, #111);
`;

const ActionButtonsContainer = styled.section`
    align-self: stretch;
    display: flex;
    min-width: 240px;
    align-items: center;
    gap: 16px;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: auto 0;
`;

export default WelcomeHeader;
