import React, { useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
    AccordionMinusIcon,
    AccordionPlusIcon,
    ArrowDownIcon,
    ArrowTransformIcon,
    CheckIcon,
    CustomDropdownIcon,
    CustomDropdownTransIcon,
    FaceBookIcon,
    LinkedinIcon,
    QRCodeIcon,
    SuggestionCloseIcon,
    TwitterIcon,
} from "../../assets/icons";
import { MenuItem, Select } from "@mui/material";
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
import { Height } from "@mui/icons-material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "720px",
    // maxWidth: "700px",
    bgcolor: "transparent",
    // height: "100%",
    // maxHeight: "90vh",
    // overflowY: "scroll",
    border: 0,
    outline: 0,
};

interface StepProps {
    icon: string;
    text: string;
    isActive: boolean;
}

const OrderProgressTracker: React.FC = () => {
    const steps: StepProps[] = [
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e1829c0-20bd-4dfe-b1d3-c29756c175b4?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88",
            text: "Order Placed",
            isActive: true,
        },
        {
            icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aba141a6e32c9b27ade3269704389788e2cbd7eae7005169ebaa0a3327c48517?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88",
            text: "Awaiting Verification",
            isActive: false,
        },
        {
            icon: "",
            text: "NFT Being Minted and Mining Rights being granted",
            isActive: false,
        },
        {
            icon: "",
            text: "Sending to your fortune.gold account",
            isActive: false,
        },
    ];

    return (
        <TrackerContainer>
            <StepList>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <Step>
                            {step.icon ? (
                                <StepIcon
                                    src={step.icon}
                                    alt=""
                                    loading="lazy"
                                />
                            ) : (
                                <StepCircle isActive={step.isActive} />
                            )}
                            {index < steps.length - 1 && <StepConnector />}
                        </Step>
                    </React.Fragment>
                ))}
            </StepList>
            <StepTextList>
                {steps.map((step, index) => (
                    <StepText key={index}>{step.text}</StepText>
                ))}
            </StepTextList>
        </TrackerContainer>
    );
};

const TrackerContainer = styled.section`
    display: flex;
    // max-width: 656px;
    flex-direction: column;
    justify-content: start;
`;

const StepList = styled.div`
    display: flex;
    width: 100%;
    gap: 18px;
    flex-wrap: wrap;
    padding: 0 63px;
    @media (max-width: 991px) {
        max-width: 100%;
        padding: 0 20px;
    }
`;

const Step = styled.div`
    display: flex;
    align-items: center;
`;

const StepIcon = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
    background-color: #87d6c3;
    border-radius: 50%;
    height: 24px;
`;

const StepCircle = styled.div<{ isActive: boolean }>`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #5d5c5a;
    background-color: ${(props) =>
        props.isActive ? "#87d6c3" : "transparent"};
`;

const StepConnector = styled.div`
    width: 108px;
    height: 2px;
    background-color: #5d5c5a;
    margin: 0 9px;
`;

const StepTextList = styled.div`
    display: flex;
    margin-top: 8px;
    width: 100%;
    align-items: start;
    gap: 18px;
    color: #fff;
    text-align: center;
    justify-content: space-between;
    flex-wrap: wrap;
    font: 500 12px/1 Telegraf, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const StepText = styled.p`
    width: 150px;
    line-height: 16px;
    margin: 0;
`;

const MiningRightModal: React.FC<ModalControlProps> = ({
    type,
    modalopen,
    handleModal,
}) => {
    const [modalstate, setModalstate] = React.useState("");
    const [dropdownMoreOptions, setDropdownMoreOptions] = React.useState("");
    // For add mining rights type = "add"
    // 1. buyamountques 2.areyousure 3.finalstep 4.transactioncompleted

    // purchaseoptions

    const handleOpen = () => handleModal(true);
    const handleClose = () => handleModal(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (type === "add") {
            setModalstate("buyamountques");
        } else if (type === "purchase_with_wallet") {
            setModalstate("purchaseoptions");
        }
    }, [modalopen, type]);
    useEffect(() => {
        // setModalstate("buyamountques");
    }, [modalopen]);
    return (
        <>
            <Modal
                open={modalopen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <StyledModalMainWrapper>
                        <div className="closebutton" onClick={handleClose}>
                            <SuggestionCloseIcon />
                        </div>
                        {modalstate === "purchaseoptions" && (
                            <>
                                <div className="modalbg">
                                    <img
                                        src="/images/common/bg/AddMintingRights/purchaseoptions.png"
                                        alt=""
                                    />
                                </div>
                                <ModalWrapper className="purchaseoptions">
                                    <ModalHeading>
                                        <ModalTitle>
                                            Purchase GOLDX Mining Rights
                                        </ModalTitle>
                                        <ModalDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed
                                            do...
                                        </ModalDescription>
                                    </ModalHeading>

                                    <ModalFooter>
                                        <div className="gobackbutton">
                                            <ActionButton
                                                label="Connect Your Wallet"
                                                variant="secondary"
                                                className="btnwidth100"
                                                onClick={() =>
                                                    setModalstate(
                                                        "buyamountques"
                                                    )
                                                }
                                                // @ts-ignore
                                                icon={<ArrowTransformIcon />}
                                            />
                                        </div>
                                        <div className="buttonbottom">
                                            <ActionButton
                                                label="Continue Without Account"
                                                variant="primary"
                                                className="btnwidth100"
                                                onClick={() =>
                                                    setModalstate(
                                                        "buyamountques"
                                                    )
                                                }
                                                // @ts-ignore
                                                icon={<ArrowTransformIcon />}
                                            />
                                        </div>
                                    </ModalFooter>
                                </ModalWrapper>
                            </>
                        )}
                        {modalstate === "buyamountques" && (
                            <>
                                <div className="modalbg">
                                    <img
                                        src="/images/common/bg/AddMintingRights/1.png"
                                        alt=""
                                    />
                                </div>
                                <ModalWrapper>
                                    <ModalHeading>
                                        <ModalTitle>
                                            What amount you want to buy?
                                        </ModalTitle>
                                    </ModalHeading>
                                    <ModalContent className="buyamountques">
                                        <Box className="amountbox">
                                            <Box className="pricebox flexbox">
                                                <div className="priceleft">
                                                    Price: 112,445{" "}
                                                    <span> &nbsp;NFT Left</span>
                                                </div>
                                                <div className="purchaseleft">
                                                    55
                                                    <span>
                                                        {" "}
                                                        &nbsp;Purchased
                                                    </span>
                                                </div>
                                            </Box>
                                        </Box>
                                        <Box className="amountinputbox">
                                            <Box className="pricebox flexbox">
                                                <div className="priceleft">
                                                    $
                                                    <input
                                                        type="text"
                                                        value={"0.0005"}
                                                    />{" "}
                                                    USD
                                                </div>
                                                <div className="controlright">
                                                    <button>
                                                        <AccordionPlusIcon />
                                                    </button>
                                                    <button>
                                                        <AccordionMinusIcon />
                                                    </button>
                                                </div>
                                            </Box>
                                        </Box>
                                        <Box className="whoareyou">
                                            <Box className=" flexbox">
                                                <h5>Who are you?</h5>
                                                <Select
                                                    labelId="dropdownBlockchain-select-label"
                                                    id="dropdownBlockchain-simple-select"
                                                    value={dropdownMoreOptions}
                                                    onChange={(e) =>
                                                        setDropdownMoreOptions(
                                                            e.target.value
                                                        )
                                                    }
                                                    displayEmpty
                                                    renderValue={
                                                        dropdownMoreOptions !==
                                                        ""
                                                            ? undefined
                                                            : () => (
                                                                  <span
                                                                      style={{
                                                                          color: "#fff",
                                                                      }}
                                                                  >
                                                                      More
                                                                      Information
                                                                  </span>
                                                              )
                                                    }
                                                    IconComponent={
                                                        CustomDropdownTransIcon
                                                    }
                                                >
                                                    <MenuItem value={10}>
                                                        Ten
                                                    </MenuItem>
                                                    <MenuItem value={20}>
                                                        Twenty
                                                    </MenuItem>
                                                    <MenuItem value={30}>
                                                        Thirty
                                                    </MenuItem>
                                                </Select>
                                            </Box>
                                        </Box>
                                        <Box className="slidebarbox">
                                            <div className="line"></div>
                                            <div className="left">
                                                <div className="point"></div>
                                                <div className="val">
                                                    Lowest: <span>52,445</span>
                                                </div>
                                            </div>
                                            <div className="middle">
                                                <div className="point"></div>
                                                <div className="val">
                                                    Medium: <span>202,445</span>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="point"></div>
                                                <div className="val">
                                                    Highest:{" "}
                                                    <span>502,445</span>
                                                </div>
                                            </div>
                                        </Box>
                                        <Box className="moreinformationbox">
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={
                                                        <ArrowDownIcon />
                                                    }
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    More Information
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul>
                                                        <li>Estimate Earned</li>
                                                        <li>
                                                            55 Mining contracts
                                                        </li>
                                                        <li>
                                                            2 Prospector
                                                            contracts, 5 Miners,
                                                            2 Refiners{" "}
                                                        </li>
                                                        <li>
                                                            Timeline to Return 2
                                                            month
                                                        </li>
                                                        <li>
                                                            At any point you can
                                                            merge your NFTs or
                                                            Contact Us for more
                                                            complex transactions
                                                        </li>
                                                    </ul>
                                                    <div className="warning">
                                                        *This is an estimate
                                                        based on current live
                                                        information
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    </ModalContent>
                                    <ModalFooter>
                                        <div className="gobackbutton">
                                            {type === "purchase_with_wallet" ? (
                                                <ActionButton
                                                    label="Go Back"
                                                    variant="secondary"
                                                    // className="btnwidth100"
                                                    onClick={() =>
                                                        setModalstate(
                                                            "purchaseoptions"
                                                        )
                                                    }
                                                />
                                            ) : (
                                                <ActionButton
                                                    label="Go Back"
                                                    variant="secondary"
                                                    // className="btnwidth100"
                                                />
                                            )}
                                        </div>
                                        <div className="buttonbottom">
                                            <ActionButton
                                                label="Next"
                                                variant="primary"
                                                className="btnwidth100"
                                                // @ts-ignore
                                                icon={<ArrowTransformIcon />}
                                                onClick={() =>
                                                    setModalstate("areyousure")
                                                }
                                            />
                                        </div>
                                    </ModalFooter>
                                </ModalWrapper>
                            </>
                        )}
                        {modalstate === "areyousure" && (
                            <>
                                <div className="modalbg">
                                    <img
                                        src="/images/common/bg/AddMintingRights/2.png"
                                        alt=""
                                    />
                                </div>
                                <ModalWrapper>
                                    <ModalHeading>
                                        <ModalTitle>Are you sure?</ModalTitle>
                                        <ModalDescription>
                                            Confirm the following amount
                                        </ModalDescription>
                                    </ModalHeading>
                                    <ModalContent className="buyamountques areyousure">
                                        <Box className="amountbox">
                                            <Box className="pricebox flexbox">
                                                <div className="priceleft">
                                                    Price: 112,445{" "}
                                                    <span> &nbsp;NFT Left</span>
                                                </div>
                                                <div className="purchaseleft">
                                                    55
                                                    <span>
                                                        {" "}
                                                        &nbsp;Purchased
                                                    </span>
                                                </div>
                                            </Box>
                                        </Box>
                                        <Box className="amountinputbox">
                                            <Box className="pricebox flexbox">
                                                <div className="priceleft">
                                                    $
                                                    <input
                                                        type="text"
                                                        value={"0.0005"}
                                                    />{" "}
                                                    USD
                                                </div>
                                                <div className="controlright">
                                                    <button>
                                                        <AccordionPlusIcon />
                                                    </button>
                                                    <button>
                                                        <AccordionMinusIcon />
                                                    </button>
                                                </div>
                                            </Box>
                                        </Box>

                                        <Box className="moreinformationbox">
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={
                                                        <ArrowDownIcon />
                                                    }
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    More Information
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul>
                                                        <li>Estimate Earned</li>
                                                        <li>
                                                            55 Mining contracts
                                                        </li>
                                                        <li>
                                                            2 Prospector
                                                            contracts, 5 Miners,
                                                            2 Refiners{" "}
                                                        </li>
                                                        <li>
                                                            Timeline to Return 2
                                                            month
                                                        </li>
                                                        <li>
                                                            At any point you can
                                                            merge your NFTs or
                                                            Contact Us for more
                                                            complex transactions
                                                        </li>
                                                    </ul>
                                                    <div className="warning">
                                                        *This is an estimate
                                                        based on current live
                                                        information
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    </ModalContent>
                                    <ModalFooter>
                                        <div className="gobackbutton">
                                            <ActionButton
                                                label="Go Back"
                                                variant="secondary"
                                                onClick={() =>
                                                    setModalstate(
                                                        "buyamountques"
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="buttonbottom">
                                            <ActionButton
                                                label="Next"
                                                variant="primary"
                                                className="btnwidth100"
                                                onClick={() =>
                                                    setModalstate("finalstep")
                                                }
                                                // @ts-ignore
                                                icon={<ArrowTransformIcon />}
                                            />
                                        </div>
                                    </ModalFooter>
                                </ModalWrapper>
                            </>
                        )}
                        {modalstate === "finalstep" && (
                            <>
                                <div className="modalbg">
                                    <img
                                        src="/images/common/bg/AddMintingRights/3.png"
                                        alt=""
                                    />
                                </div>
                                <ModalWrapper>
                                    <ModalHeading>
                                        <ModalTitle>Final Step</ModalTitle>
                                        <ModalDescription>
                                            Your transaction has been received
                                            we need a little bit more time.
                                            Confirmation usually takes 2-15 min
                                        </ModalDescription>
                                    </ModalHeading>
                                    <ModalContent className="buyamountques finalstep">
                                        <Box className="qrcodebox">
                                            <div className="overlay">
                                                <div className="checkicon">
                                                    <CheckIcon />
                                                </div>
                                            </div>
                                            <div className="leftbox">
                                                <h3>Amount</h3>
                                                <div className="value">
                                                    $0.0005 USD
                                                </div>
                                                <h3>To this address</h3>
                                                <div className="address">
                                                    9en283737dm04948GBhBCh892388bfjhwfb3iu4
                                                </div>
                                            </div>
                                            <div className="rightbox">
                                                <QRCodeIcon />
                                            </div>
                                        </Box>
                                        <Box className="moreinformationbox">
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={
                                                        <ArrowDownIcon />
                                                    }
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    Other change USTD to ETH?
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul>
                                                        <li>Estimate Earned</li>
                                                        <li>
                                                            55 Mining contracts
                                                        </li>
                                                        <li>
                                                            2 Prospector
                                                            contracts, 5 Miners,
                                                            2 Refiners{" "}
                                                        </li>
                                                        <li>
                                                            Timeline to Return 2
                                                            month
                                                        </li>
                                                        <li>
                                                            At any point you can
                                                            merge your NFTs or
                                                            Contact Us for more
                                                            complex transactions
                                                        </li>
                                                    </ul>
                                                    <div className="warning">
                                                        *This is an estimate
                                                        based on current live
                                                        information
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>

                                        <Box className="ordertrackerbox">
                                            <OrderProgressTracker />
                                        </Box>

                                        <Box className="getreceivebox">
                                            <div className="leftbox">
                                                <h3>You Get</h3>0.2345395 ETH
                                            </div>
                                            <div className="rightbox">
                                                <h3>Recipient Wallet</h3>
                                                9en283737dm04948GBhBCh892388bfjhwfb3iu4
                                            </div>
                                        </Box>

                                        <Box className="moreinformationbox">
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={
                                                        <ArrowDownIcon />
                                                    }
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    More Information
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul>
                                                        <li>Estimate Earned</li>
                                                        <li>
                                                            55 Mining contracts
                                                        </li>
                                                        <li>
                                                            2 Prospector
                                                            contracts, 5 Miners,
                                                            2 Refiners{" "}
                                                        </li>
                                                        <li>
                                                            Timeline to Return 2
                                                            month
                                                        </li>
                                                        <li>
                                                            At any point you can
                                                            merge your NFTs or
                                                            Contact Us for more
                                                            complex transactions
                                                        </li>
                                                    </ul>
                                                    <div className="warning">
                                                        *This is an estimate
                                                        based on current live
                                                        information
                                                    </div>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Box>
                                    </ModalContent>
                                    <ModalFooter>
                                        <div className="gobackbutton">
                                            <ActionButton
                                                label="Go Back"
                                                variant="secondary"
                                                onClick={() =>
                                                    setModalstate("areyousure")
                                                }
                                            />
                                        </div>
                                        <div className="buttonbottom">
                                            <ActionButton
                                                label="Next"
                                                variant="primary"
                                                className="btnwidth100"
                                                onClick={() =>
                                                    setModalstate(
                                                        "transactioncompleted"
                                                    )
                                                }
                                                // @ts-ignore
                                                icon={<ArrowTransformIcon />}
                                            />
                                        </div>
                                    </ModalFooter>
                                </ModalWrapper>
                            </>
                        )}
                        {modalstate === "transactioncompleted" && (
                            <>
                                <div className="modalbg">
                                    {type == "purchase_with_wallet" ? (
                                        <img
                                            src="/images/common/bg/AddMintingRights/4_transaction_share.png"
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            src="/images/common/bg/AddMintingRights/4.png"
                                            alt=""
                                        />
                                    )}
                                </div>
                                <ModalWrapper
                                    className={`transaction_completed type_${type}`}
                                >
                                    <img
                                        src="/images/common/transaction_completed.svg"
                                        alt=""
                                        className="transactioncompletedimg"
                                    />
                                    <ModalHeading>
                                        <ModalTitle>
                                            Transaction successfully completed!
                                        </ModalTitle>
                                        <ModalDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed
                                            do...
                                        </ModalDescription>
                                    </ModalHeading>
                                    {type === "purchase_with_wallet" && (
                                        <ModalContent>
                                            <div className="sharenowbox">
                                                <h3>SHARE NOW</h3>
                                                <div className="flexwrapper">
                                                    <a
                                                        className="icon"
                                                        href="#"
                                                    >
                                                        <TwitterIcon />
                                                    </a>
                                                    <a
                                                        className="icon"
                                                        href="#"
                                                    >
                                                        <FaceBookIcon />
                                                    </a>
                                                    <a
                                                        className="icon"
                                                        href="#"
                                                    >
                                                        <LinkedinIcon />
                                                    </a>
                                                </div>
                                            </div>
                                        </ModalContent>
                                    )}
                                    <ModalFooter>
                                        <div className="gobackbutton">
                                            <ActionButton
                                                label="Go Back"
                                                variant="secondary"
                                                onClick={() =>
                                                    setModalstate("finalstep")
                                                }
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
                        )}
                    </StyledModalMainWrapper>
                </Box>
            </Modal>
        </>
    );
};

const ModalContent = styled.div`
    .flexbox {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    &.buyamountques {
        position: relative;
        .pricebox {
            font-family: Telegraf;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            span {
                color: var(--Text-Tertiary, #969696);
            }
        }
        .amountinputbox {
            margin-top: 14px;
            .pricebox {
                align-items: center;
                font-family: Conthrax;
                font-size: 24px;

                .priceleft {
                    border-bottom: 1px solid #5d5c5a;
                    padding-bottom: 4px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    input {
                        background: transparent;
                        border: 0;
                        width: 48%;
                        outline: 0;
                        padding: 0 20px;
                    }
                }
            }
            .controlright {
                background: rgba(255, 255, 255, 0.08);
                border-radius: 40px;
                overflow: hidden;
                white-space: nowrap;
                margin-left: 20px;
                display: flex;
                flex-wrap: nowrap;
                min-width: 128px;
                button {
                    background: transparent;
                    border: 0;
                    outline: 0;
                    width: 64px;
                    height: 56px;
                    svg path {
                        stroke: #fff;
                    }
                    &:first-child {
                        border-right: 1px solid rgba(255, 255, 255, 0.08);
                    }
                }
            }
        }
        .whoareyou {
            border-radius: 100px;
            background: rgba(255, 255, 255, 0.08);
            width: fit-content;
            padding: 0 20px;
            margin-top: 24px;
            .flexbox {
                justify-content: flex-start;
                align-items: center;
                h5 {
                    color: var(
                        --Text-Tertiary,
                        var(--Typography-Primary-white, #969696)
                    );
                    font-family: Telegraf;
                    font-size: 12px;
                    font-weight: 500;
                    margin: 0;
                    margin-right: 10px;
                }
                .MuiInputBase-root {
                    color: var(
                        --Text-Primary,
                        var(--Typography-Primary-white, #fff)
                    );
                    font-family: Telegraf !important;
                    font-size: 12px !important;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 16px;
                    .MuiSelect-select {
                        padding: 0 !important;
                    }
                    .transparent {
                        min-width: 30px;
                        min-height: 30px;
                        transform: scale(0.8);
                        transform-origin: center center;
                    }
                    .MuiOutlinedInput-notchedOutline {
                        border: 0;
                    }
                }
            }
        }
        .slidebarbox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            margin-top: 24px;
            .line {
                position: absolute;
                top: 3px;
                width: 100%;
                height: 8px;
                border-radius: 32px;
                border: 0.75px solid rgba(255, 255, 255, 0);
                background: #b5fdf7;
                backdrop-filter: blur(16px);
            }
            .point {
                width: 8px;
                height: 8px;
                background: #111;
                border: 4px solid #b5fdf7;
                border-radius: 50%;
                margin-bottom: 15px;
            }

            .val {
                color: #969696;
                font-family: Telegraf;
                font-size: 12px;
                font-style: normal;
                span {
                    color: #fff;
                }
            }
            .left {
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                position: relative;
                z-index: 2;
            }
            .middle {
                display: flex;
                align-items: center;
                flex-direction: column;
                position: relative;
                z-index: 2;
            }
            .right {
                display: flex;
                align-items: flex-end;
                flex-direction: column;
                position: relative;
                z-index: 2;
            }
        }
        .moreinformationbox {
            margin-top: 24px;
            .MuiAccordion-root {
                border-radius: 16px !important;
                width: 100% !important;
                font-family: Telegraf !important;
                background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.08) 0%,
                    rgba(255, 255, 255, 0.05) 100%
                ) !important;
                box-shadow: none !important;
                color: #fff;
                padding: 10px;
                box-sizing: border-box;
                .MuiAccordionSummary-root {
                    background: Transparent !important;
                }
                .MuiOutlinedInput-notchedOutline {
                    border: 0;
                }
                .MuiAccordionDetails-root {
                    padding-top: 0 !important;
                    margin-top: -10px;
                    ul {
                        margin: 0;
                        padding-left: 16px;
                        li {
                            color: var(--Text-Secondary, #cfcfcf);

                            font-family: Telegraf;
                            font-size: 12px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 16px; /* 133.333% */
                            margin-bottom: 3px;
                            &:last-child {
                                margin-bottom: 0;
                            }
                        }
                    }
                    .warning {
                        color: var(--Text-Tertiary, #969696);

                        /* S1/Regular */
                        font-family: Telegraf;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 16px; /* 133.333% */
                        margin-top: 8px;
                    }
                }
            }
        }
    }
    &.areyousure {
        .moreinformationbox {
            margin-bottom: 55px;
        }
    }
    &.finalstep {
        .ordertrackerbox {
            margin-bottom: 30px;
            margin-top: 30px;
        }
        .getreceivebox {
            display: flex;
            margin-bottom: 35px;
            margin-top: 35px;
            h3 {
                margin: 0;
                color: var(
                    --Text-Primary,
                    var(--Typography-Primary-white, #fff)
                );

                font-family: Telegraf;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;

                margin-bottom: 10px;
            }
            color: var(--Text-Secondary, #cfcfcf);
            font-family: Telegraf;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;

            .leftbox {
                width: 50%;
            }
            .rightbox {
                width: 50%;
            }
        }
        .qrcodebox {
            border-radius: 16px;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.08) 0%,
                rgba(255, 255, 255, 0.05) 100%
            );
            padding: 20px;
            display: flex;
            justify-content: space-between;
            position: relative;
            .overlay {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                .checkicon {
                    width: 42px;
                    height: 42px;
                    flex-shrink: 0;
                    background: #87d6c3;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
            }
            .leftbox,
            .rightbox {
                opacity: 0.2;
            }
            .leftbox {
                h3 {
                    margin: 0;
                    margin-bottom: 8px;
                    color: var(
                        --Text-Primary,
                        var(--Typography-Primary-white, #fff)
                    );
                    font-family: Telegraf;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px; /* 150% */
                }
                .value {
                    color: var(
                        --Text-Primary,
                        var(--Typography-Primary-white, #fff)
                    );
                    margin-bottom: 20px;
                    font-family: Conthrax;
                    font-size: 40px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 48px; /* 120% */
                    text-transform: uppercase;
                }
                .address {
                    color: var(
                        --Text-Primary,
                        var(--Typography-Primary-white, #fff)
                    );
                    font-family: Telegraf;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 16px; /* 133.333% */
                }
            }
        }
    }
`;

const StyledModalMainWrapper = styled(ModalMainWrapper)`
    .purchaseoptions {
        ${ModalFooter} {
            flex-direction: column;
            .buttonbottom {
                margin-right: 0;
                margin-top: 20px;

                .btnwidth100 {
                    transform: scale(1) translateY(0px);
                }
            }
        }
    }
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
            margin-top: 65px;
        }
        &.type_purchase_with_wallet {
            ${ModalContent} {
                .sharenowbox {
                    h3 {
                        color: var(--Text-Secondary, #cfcfcf);
                        text-align: center;

                        /* S1/Medium */
                        font-family: Telegraf;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 16px; /* 133.333% */
                    }
                    .flexwrapper {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .icon {
                            border-radius: 40px;
                            border: 1.5px solid var(--Brand-Gold, #f4e0a3);
                            width: 64px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 64px;
                            margin: 0 8px;
                            flex: none;
                        }
                    }
                }
            }
            ${ModalFooter} {
                // transform: translateY(-100px);
            }
        }
    }
`;
export default MiningRightModal;
