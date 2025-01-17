import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { ArrowTransformIcon, SuggestionCloseIcon } from "../../assets/icons";

import ActionButton from "../Buttons/ActionButton/ActionButton";
import {
    ModalControlProps,
    ModalDescription,
    ModalFooter,
    ModalHeading,
    ModalMainWrapper,
    ModalTitle,
    ModalWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import SiteVariablesContext from "../../contexts/SiteVariablesContext";
import { mobileBreakpoint } from "../../const";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "720px",
    // maxWidth: "700px",
    bgcolor: "transparent",
    border: 0,
    outline: 0,
};
const stylemobile = {
    position: "absolute",
    bottom: "0",
    left: "0px",
    width: "100%",
    bgcolor: "transparent",
    border: 0,
    outline: 0,
};
const NftTransfferdModal: React.FC<ModalControlProps> = ({
    type,
    modalopen,
    handleModal,
}) => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    const handleOpen = () => handleModal(true);
    const handleClose = () => handleModal(false);
    const navigate = useNavigate();

    return (
        <>
            <Modal
                open={modalopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={
                        windowDimensions?.width < mobileBreakpoint
                            ? stylemobile
                            : style
                    }
                >
                    <StyledModalMainWrapper>
                        <div className="closebutton" onClick={handleClose}>
                            <SuggestionCloseIcon />
                        </div>

                        <>
                            <div className="modalbg">
                                <img
                                    src="/images/common/bg/AddMintingRights/4.png"
                                    alt=""
                                />
                            </div>
                            <ModalWrapper
                                className={`transaction_completed type_${type}`}
                            >
                                <img
                                    src="/images/common/transaction_completed.svg"
                                    alt=""
                                    className="transactioncompletedimg"
                                />
                                {type === "mint" ? (
                                    <ModalHeading>
                                        <ModalTitle>
                                            nft successfully minted!
                                        </ModalTitle>
                                        <ModalDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed
                                            do...
                                        </ModalDescription>
                                    </ModalHeading>
                                ) : (
                                    <ModalHeading>
                                        <ModalTitle>
                                            nft successfully transferred!
                                        </ModalTitle>
                                        <ModalDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed
                                            do...
                                        </ModalDescription>
                                    </ModalHeading>
                                )}

                                <ModalFooter>
                                    <div className="gobackbutton">
                                        <ActionButton
                                            label="View Transaction"
                                            variant="secondary"
                                        />
                                    </div>
                                    <div className="buttonbottom">
                                        <ActionButton
                                            label="Go to Dashboard"
                                            variant="primary"
                                            className="btnwidth100"
                                            onClick={() =>
                                                navigate("/dashboard")
                                            }
                                            // @ts-ignore
                                            icon={<ArrowTransformIcon />}
                                        />
                                    </div>
                                </ModalFooter>
                            </ModalWrapper>
                        </>
                    </StyledModalMainWrapper>
                </Box>
            </Modal>
        </>
    );
};

const StyledModalMainWrapper = styled(ModalMainWrapper)`
    .transaction_completed {
        .transactioncompletedimg {
            display: block;
            margin: auto;
            margin-top: 30px;
            margin-bottom: 40px;
        }
        ${ModalHeading} {
            align-items: center;
            ${ModalTitle} {
                font-family: Conthrax;
                text-transform: uppercase;
            }
        }
        ${ModalFooter} {
            margin-top: 32px;
            transform: translateY(11px);
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${ModalHeading} {
            margin-bottom: 50px;
            ${ModalTitle} {
                max-width: 275px;
                text-align: center;
                line-height: 1.6;
                padding-right: 0;
            }
        }
    }
`;
export default NftTransfferdModal;
