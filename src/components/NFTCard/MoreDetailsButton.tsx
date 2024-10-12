import React from "react";
import styled from "styled-components";
import { ThreeDotsIcon } from "../../assets/icons";

const MoreDetailsButton: React.FC = () => {
    const [showList, setShowList] = React.useState(false);
    return (
        <ButtonWrapper>
            <DotIconWrapper onClick={() => setShowList(!showList)}>
                <ThreeDotsIcon />
            </DotIconWrapper>
            {showList && (
                <ListBox>
                    <div className="item">Sell</div>
                    <div className="item">Transfer</div>
                    <div className="item">Copy Link</div>
                    <div className="item">Edit</div>
                    <div className="item">Add Mining Rights</div>
                </ListBox>
            )}
        </ButtonWrapper>
    );
};

const ListBox = styled.div`
    position: absolute;
    top: 55px;
    right: 0;
    border-radius: 16px;
    border: 1px solid var(--Lines-Divider, #383838);
    background: var(--background-surface-2, #2e2d2a);
    min-width: 200px;
    // z-index: 90;
    .item {
        padding: 12px 20px;
        color: #fff;
        border-bottom: 1px solid #383838;
        font-weight: 400;
        font-family: "Telegraf", sans-serif;
        cursor: pointer;
    }
`;

const ButtonWrapper = styled.button`
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    background: var(--Brand-Dark, #111);
    position: absolute;
    z-index: 0;
    display: flex;
    min-height: 48px;
    width: 48px;
    height: 48px;
    right: 0;
    top: 0;
    padding: 0 12px;
    border: none;
    cursor: pointer;
    z-index: 3;
`;

const DotIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    align-self: stretch;
    margin: auto 0;
    cursor: pointer;
`;

export default MoreDetailsButton;
