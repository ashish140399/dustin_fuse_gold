import React from "react";
import styled from "styled-components";

interface ActionButtonProps {
    label?: string;
    icon: string;
    className?: string;
    variant: "primary" | "secondary" | "tertiary";
}

const ActionButton: React.FC<ActionButtonProps> = ({
    label,
    icon,
    variant,
    className,
}) => {
    return (
        <ButtonWrapper variant={variant} className={className}>
            {variant === "primary" && <ButtonBackground />}
            {label && <ButtonLabel variant={variant}>{label}</ButtonLabel>}
            <IconWrapper variant={variant}>
                <IconInner variant={variant}>{icon}</IconInner>
            </IconWrapper>
        </ButtonWrapper>
    );
};

const ButtonBackground = styled.div`
    border-radius: 32px;
    background: var(
        --Brand-Gold,
        radial-gradient(
            458.07% 144.86% at 13.25% 21.87%,
            #f4e0a3 0%,
            #dcbc65 37.37%,
            #ca9f43 63.89%,
            #fef0a0 79.39%,
            #8e5f1e 100%
        )
    );
    position: absolute;
    z-index: 0;
    display: flex;
    height: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 200px;
`;

const ButtonWrapper = styled.div<{ variant: string }>`
    align-items: center;
    border-radius: 32px;
    border: 1.5px solid
        ${(props) =>
            props.variant === "primary"
                ? "var(--Lines-Gold, #e2b666)"
                : props.variant === "secondary"
                ? "var(--Brand-Gold, #f4e0a3)"
                : "var(--Lines-Divider, #383838)"};
    align-self: stretch;
    position: relative;
    z-index: 1;
    display: flex;
    overflow: hidden;
    cursor: pointer;
    justify-content: flex-start;
    width: ${(props) => (props.variant === "tertiary" ? "64px" : "200px")};
    margin: auto 0;
    &.btnwidth50 {
        ${ButtonBackground} {
            width: 100% !important;
        }
    }
`;

const ButtonLabel = styled.span<{ variant: string }>`
    flex: 1;
    // gap: 8px;
    color: ${(props) =>
        props.variant === "primary"
            ? "var(--Brand-Dark, #111)"
            : "var(--Text-Primary, var(--Typography-Primary-white, #fff))"};
    white-space: nowrap;
    text-transform: capitalize;
    // padding: 20px 20px 20px 32px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font: 500 16px Telegraf, sans-serif;
    position: Relative;
    z-index: 1;
    @media (max-width: 991px) {
        padding-left: 20px;
        white-space: initial;
    }
`;

const IconWrapper = styled.div<{ variant: string }>`
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    padding: 4px;
`;

const IconInner = styled.div<{ variant: string }>`
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: ${(props) =>
        props.variant === "primary"
            ? "var(--Typography-Primary-white, #fff)"
            : props.variant === "secondary"
            ? "var(--Brand-Gold, radial-gradient(458.07% 144.86% at 13.25% 21.87%, #f4e0a3 0%, #dcbc65 37.37%, #ca9f43 63.89%, #fef0a0 79.39%, #8e5f1e 100%))"
            : "transparent"};
    border: ${(props) =>
        props.variant === "secondary"
            ? "1.5px solid var(--Lines-Gold, #e2b666)"
            : "none"};
    display: flex;
    width: 56px;
    gap: 8px;
    height: 56px;
    margin: auto 0;
    padding: 0 16px;
`;

export default ActionButton;
