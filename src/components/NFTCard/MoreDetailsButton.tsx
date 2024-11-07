import React, { useContext } from "react";
import styled from "styled-components";
import {
    ClipboardIcon,
    EditIcon,
    MiningRightsIcon,
    SellIcon,
    SuggestionCloseIcon,
    ThreeDotsIcon,
    TransferIcon,
} from "../../assets/icons";
import MiningRightModal from "../Modals/MiningRightModal";
import { mobileBreakpoint } from "../../const";
import SiteVariablesContext from "../../contexts/SiteVariablesContext";
import { NFTBottomDDMobileBG } from "../../assets/BG/BG";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
function SlideTransition(props: any) {
    return <Slide {...props} direction="up" />;
}
const MoreDetailsButton: React.FC = () => {
    const [opentoast, setOpentoast] = React.useState(false);
    const { windowDimensions } = useContext(SiteVariablesContext);
    const [showList, setShowList] = React.useState(false);
    const [openMiningRightsModal, setOpenMiningRightsModal] =
        React.useState(false);
    const navigate = useNavigate();
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setOpentoast(true);
            setShowList(false);
        } catch (err) {
            console.error("Failed to copy!");
        }
    };
    return (
        <>
            <MiningRightModal
                type="add"
                modalopen={openMiningRightsModal}
                handleModal={setOpenMiningRightsModal}
            />
            <Snackbar
                open={opentoast}
                autoHideDuration={1500}
                onClose={() => setOpentoast(false)}
                TransitionComponent={SlideTransition}
                message="Link Copied !!"
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />
            <ButtonWrapper>
                <DotIconWrapper onClick={() => setShowList(!showList)}>
                    <ThreeDotsIcon />
                </DotIconWrapper>
                {showList && (
                    <ListBoxWrapper>
                        {windowDimensions?.width < mobileBreakpoint && (
                            <>
                                <div className="pgbg"></div>
                            </>
                        )}

                        <ListBox>
                            {windowDimensions?.width < mobileBreakpoint && (
                                <>
                                    <div className="cardbg">
                                        <NFTBottomDDMobileBG />
                                    </div>
                                    <div className="heading">Actions</div>
                                    <div
                                        className="closebutton"
                                        onClick={() => setShowList(!showList)}
                                    >
                                        <SuggestionCloseIcon />
                                    </div>
                                </>
                            )}
                            <div
                                className="item"
                                onClick={() => {
                                    navigate("/minting");
                                }}
                            >
                                Sell <SellIcon />
                            </div>
                            <div
                                className="item"
                                onClick={() => {
                                    navigate("/transfer");
                                }}
                            >
                                Transfer <TransferIcon />
                            </div>
                            <div
                                className="item"
                                onClick={() =>
                                    copyToClipboard("I LOVE FUSE GOLD!!")
                                }
                            >
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
                    </ListBoxWrapper>
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
const ListBoxWrapper = styled.div`
    .closebutton {
        border-radius: 20px;
        background: var(--Lines-Divider, #383838);
        position: absolute;
        border-radius: 50%;
        top: 0px;
        right: 0px;

        width: 53px;
        height: 53px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg path {
            stroke: #fff;
        }
    }
    .cardbg {
        display: none;
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
    @media screen and (max-width: ${mobileBreakpoint}px) {
        .cardbg {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        ${ListBox} {
            position: fixed;
            bottom: 0;
            right: 0;
            top: unset;
            width: 100%;
            z-index: 999;
            border-radius: 0px;
            background: linear-gradient(to left, transparent 25%, #2e2d2a 25%),
                linear-gradient(to bottom, transparent 25%, #2e2d2a 25%);
            border-top-left-radius: 40px;
            .heading {
                color: var(
                    --Text-Primary,
                    var(--Typography-Primary-white, #fff)
                );
                font-family: Telegraf;
                font-size: 22px;
                font-weight: 500;
                text-align: left;
                margin-bottom: 26px;
                margin-top: 20px;
            }
            .item {
                padding: 24px 0px;
            }
        }
        .pgbg {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(17, 17, 17, 0.8);
            filter: blur(16px);
            z-index: 1;
        }
    }
`;

const DotIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    align-self: stretch;
    margin: auto 0;
    cursor: pointer;
    position: relative;
    z-index: 2;
`;

export default MoreDetailsButton;
