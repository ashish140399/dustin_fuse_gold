import React from "react";
import styled from "styled-components";
import {
    ClipboardIcon,
    EditIcon,
    MiningRightsIcon,
    SellIcon,
    ThreeDotsIcon,
    TransferIcon,
} from "../../assets/icons";
import MiningRightModal from "../Modals/MiningRightModal";

const MoreDetailsButton: React.FC = () => {
    const [showList, setShowList] = React.useState(false);
    const [openMiningRightsModal, setOpenMiningRightsModal] =
        React.useState(false);
    return (
        <>
            <MiningRightModal
                type="add"
                modalopen={openMiningRightsModal}
                handleModal={setOpenMiningRightsModal}
            />
            <ButtonWrapper>
                <DotIconWrapper onClick={() => setShowList(!showList)}>
                    <ThreeDotsIcon />
                </DotIconWrapper>
                {showList && (
                    <ListBox>
                        <div className="item">
                            Sell <SellIcon />
                        </div>
                        <div className="item">
                            Transfer <TransferIcon />
                        </div>
                        <div className="item">
                            Copy Link <ClipboardIcon />
                        </div>
                        <div className="item">
                            Edit <EditIcon />
                        </div>
                        <div
                            className="item"
                            onClick={() => {
                                setOpenMiningRightsModal(true);
                                setShowList(false);
                            }}
                        >
                            Add Mining Rights <MiningRightsIcon />
                        </div>
                    </ListBox>
                )}
            </ButtonWrapper>
        </>
    );
};

const ListBox = styled.div`
    position: absolute;
    top: 55px;
    right: 0;
    border-radius: 16px;
    border: 1px solid var(--Lines-Divider, #383838);
    background: var(--background-surface-2, #2e2d2a);
    min-width: 240px;
    // z-index: 90;
    padding: 20px 26px;
    box-sizing: border-box;
    .item {
        padding: 16px 0px;

        border-bottom: 1px solid #383838;
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));

        /* P2/Regular */
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        svg {
            path {
                stroke: #fff;
            }
        }
        &:first-child {
            padding-top: 0;
        }
        &:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
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
