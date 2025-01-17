import React, { useContext, useEffect } from "react";
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
import SiteVariablesContext from "../../contexts/SiteVariablesContext";
import { mobileBreakpoint } from "../../const";
import Slider from "@mui/material/Slider";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "720px",
    bgcolor: "transparent",
    border: 0,
    outline: 0,
    // height: "100%",
    // maxHeight: "97vh",
    // overflowY: "auto",
    // display: "flex",
    // justifyContent: "center",
    // flexDirection: "column",
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

interface StepProps {
    icon: string;
    text: string;
    progress: string;
}

const OrderProgressTracker: React.FC = () => {
    // value of progress is "finished" , "inprocess" and "notstarted"
    const steps: StepProps[] = [
        {
            icon: "/images/common/icons/green_check_icon.png",
            text: "Order Placed",
            progress: "inprocess",
        },
        {
            icon: "",
            text: "Awaiting Verification",
            progress: "notstarted",
        },
        {
            icon: "",
            text: "NFT Being Minted and Mining Rights being granted",
            progress: "notstarted",
        },
        {
            icon: "",
            text: "Sending to your fortune.gold account",
            progress: "notstarted",
        },
    ];

    return (
        <TrackerContainer>
            <StepList>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        <Step className={step.progress}>
                            {step.icon ? (
                                <StepIcon
                                    src={step.icon}
                                    alt=""
                                    loading="lazy"
                                />
                            ) : (
                                <StepCircle />
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
    gap: 4px;
    flex-wrap: wrap;
    padding: 0 63px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
        padding: 0 20px;
    }
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

const StepCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #5d5c5a;
    background-color: transparent;
`;

const StepConnector = styled.div`
    width: 108px;
    height: 2px;
    background: #5d5c5a;
    margin: 0 9px;
`;

const Step = styled.div`
    display: flex;
    align-items: center;
    &.inprocess {
        ${StepConnector} {
            background: linear-gradient(to left, #5d5c5a 50%, #87d6c3 50%);
        }
    }
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
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;

const StepText = styled.p`
    width: 150px;
    line-height: 16px;
    margin: 0;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        display: none;
        &:first-child {
            display: block;
        }
        &:last-child {
            display: block;
        }
    }
`;
const CustomSlider = styled(Slider)({
    // Customize the track
    "& .MuiSlider-track": {
        height: 8, // Increase track height
        borderRadius: 8, // Optional for rounded track
        backgroundColor: "#b5fdf7", // Set track color
        borderColor: "transparent",
    },
    // Customize the rail (inactive track)
    "& .MuiSlider-rail": {
        height: 8,
        borderRadius: 8,
        backgroundColor: "#b5fdf7", // Set rail color
        borderColor: "transparent",
    },
    // Customize the thumb
    "& .MuiSlider-thumb": {
        width: 16, // Increase thumb size
        height: 16,
        backgroundColor: "#111", // Thumb color
        border: "4px solid #b5fdf7", // Optional border
        "&:hover, &.Mui-focusVisible, &.Mui-active": {
            boxShadow: "0px 0px 0px 8px rgba(255, 255, 255, 0.16)", // Hover effect
        },
    },
    // Add styling for marks
    "& .MuiSlider-mark": {
        width: 16, // Increase thumb size
        height: 16,
        backgroundColor: "#111", // Thumb color
        border: "4px solid #b5fdf7", // Optional border
        borderRadius: "50%",
        boxSizing: "border-box",
        transform: "translateY(-50%) translateX(-50%)",
        // opacity:1
    },
});
const MiningRightModal: React.FC<ModalControlProps> = ({
    type,
    modalopen,
    handleModal,
}) => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    const [modalstate, setModalstate] = React.useState("");
    const [accountselected, setAccountselected] = React.useState("");
    // 1. withwallet 2.withoutwallet
    const [paymethodselected, setPaymethodselected] = React.useState("");
    // 1. gpay 2.paypal 3. cards
    const [dropdownMoreOptions, setDropdownMoreOptions] = React.useState("");
    const [priceval, setPriceval] = React.useState(0.0005);
    const increasedecreasevalue = 0.0005;
    // For add mining rights type = "add"
    // in case of with wallet accountselected = withwallet
    // 1. buyamountques 2.areyousure 3.finalstep 4.transactioncompleted

    // in case of without wallet accountselected = withoutwallet
    // 1. buyamountques 2.areyousure 3.finalstep 3.finalstepcard 4.transactioncompleted

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
    const handleValueIncrease = () => {
        setPriceval(priceval + increasedecreasevalue);
    };
    const handleValueDecrease = () => {
        if (priceval - increasedecreasevalue > 0)
            setPriceval(priceval - increasedecreasevalue);
    };

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
                        {modalstate === "purchaseoptions" && (
                            <>
                                <div className="modalbg">
                                    {windowDimensions?.width <
                                    mobileBreakpoint ? (
                                        <img
                                            src="/images/common/bg/AddMintingRights/mobile.png"
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            src="/images/common/bg/AddMintingRights/purchaseoptions.png"
                                            alt=""
                                        />
                                    )}
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
                                                onClick={() => {
                                                    setModalstate(
                                                        "buyamountques"
                                                    );
                                                    setAccountselected(
                                                        "withwallet"
                                                    );
                                                }}
                                                // @ts-ignore
                                                icon={<ArrowTransformIcon />}
                                            />
                                        </div>
                                        <div className="buttonbottom">
                                            <ActionButton
                                                label="Continue Without Account"
                                                variant="primary"
                                                className="btnwidth100"
                                                onClick={() => {
                                                    setModalstate(
                                                        "buyamountques"
                                                    );
                                                    setAccountselected(
                                                        "withoutwallet"
                                                    );
                                                }}
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
                                    {windowDimensions?.width <
                                    mobileBreakpoint ? (
                                        <img
                                            src="/images/common/bg/AddMintingRights/mobile.png"
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            src="/images/common/bg/AddMintingRights/1.png"
                                            alt=""
                                        />
                                    )}
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
                                                        value={priceval.toFixed(
                                                            4
                                                        )}
                                                        onChange={(e) =>
                                                            setPriceval(
                                                                Number(
                                                                    e.target
                                                                        .value
                                                                )
                                                            )
                                                        }
                                                    />
                                                    USD
                                                </div>
                                                <div className="controlright">
                                                    <button
                                                        onClick={
                                                            handleValueIncrease
                                                        }
                                                    >
                                                        <AccordionPlusIcon />
                                                    </button>
                                                    <button
                                                        onClick={
                                                            handleValueDecrease
                                                        }
                                                    >
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
                                            <CustomSlider
                                                aria-label="Amount"
                                                defaultValue={50}
                                                // valueLabelDisplay="auto"
                                                shiftStep={50}
                                                step={50}
                                                marks
                                                min={0}
                                                max={100}
                                            />

                                            <div className="left">
                                                <div className="val">
                                                    Lowest: <span>52,445</span>
                                                </div>
                                            </div>
                                            <div className="middle">
                                                <div className="val">
                                                    Medium: <span>202,445</span>
                                                </div>
                                            </div>
                                            <div className="right">
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
                                    {windowDimensions?.width <
                                    mobileBreakpoint ? (
                                        <img
                                            src="/images/common/bg/AddMintingRights/mobile.png"
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            src="/images/common/bg/AddMintingRights/2.png"
                                            alt=""
                                        />
                                    )}
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
                                                        value={priceval.toFixed(
                                                            4
                                                        )}
                                                    />{" "}
                                                    USD
                                                </div>
                                                <div className="controlright">
                                                    <button
                                                        onClick={
                                                            handleValueIncrease
                                                        }
                                                    >
                                                        <AccordionPlusIcon />
                                                    </button>
                                                    <button
                                                        onClick={
                                                            handleValueDecrease
                                                        }
                                                    >
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

                        {modalstate === "finalstep" &&
                            (accountselected === "withoutwallet" ? (
                                <>
                                    <div className="modalbg">
                                        {windowDimensions?.width <
                                        mobileBreakpoint ? (
                                            <img
                                                src="/images/common/bg/AddMintingRights/mobile.png"
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                src="/images/common/bg/AddMintingRights/2.png"
                                                alt=""
                                            />
                                        )}
                                    </div>
                                    <ModalWrapper>
                                        <ModalHeading>
                                            <ModalTitle>Final Step</ModalTitle>
                                            <ModalDescription>
                                                Select your Payment Method
                                            </ModalDescription>
                                        </ModalHeading>
                                        <ModalContent className="buyamountques finalstep">
                                            <Box className="paymethodselector">
                                                <div
                                                    className={`payrow ${
                                                        paymethodselected ===
                                                        "gpay"
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        setPaymethodselected(
                                                            "gpay"
                                                        )
                                                    }
                                                >
                                                    <div className="left">
                                                        <div className="circlbox"></div>
                                                        Google Pay
                                                    </div>
                                                    <div className="right">
                                                        <img
                                                            src="/images/common/gpay.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className={`payrow ${
                                                        paymethodselected ===
                                                        "paypal"
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        setPaymethodselected(
                                                            "paypal"
                                                        )
                                                    }
                                                >
                                                    <div className="left">
                                                        <div className="circlbox"></div>
                                                        PayPal
                                                    </div>
                                                    <div className="right">
                                                        <img
                                                            src="/images/common/paypal.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    className={`payrow ${
                                                        paymethodselected ===
                                                        "card"
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        setPaymethodselected(
                                                            "card"
                                                        )
                                                    }
                                                >
                                                    <div className="left">
                                                        <div className="circlbox"></div>
                                                        Credit or Debit Card
                                                    </div>
                                                    <div className="right">
                                                        <img
                                                            src="/images/common/visa.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </Box>
                                        </ModalContent>
                                        <ModalFooter>
                                            <div className="gobackbutton">
                                                <ActionButton
                                                    label="Go Back"
                                                    variant="secondary"
                                                    onClick={() =>
                                                        setModalstate(
                                                            "areyousure"
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="buttonbottom">
                                                <ActionButton
                                                    label="Next"
                                                    variant="primary"
                                                    className="btnwidth100"
                                                    onClick={() => {
                                                        paymethodselected ===
                                                        "card"
                                                            ? setModalstate(
                                                                  "finalstepcard"
                                                              )
                                                            : setModalstate(
                                                                  "transactioncompleted"
                                                              );
                                                    }}
                                                    // @ts-ignore
                                                    icon={
                                                        <ArrowTransformIcon />
                                                    }
                                                />
                                            </div>
                                        </ModalFooter>
                                    </ModalWrapper>
                                </>
                            ) : (
                                <>
                                    <div className="modalbg">
                                        {windowDimensions?.width <
                                        mobileBreakpoint ? (
                                            <img
                                                src="/images/common/bg/AddMintingRights/mobile_3.png"
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                src="/images/common/bg/AddMintingRights/3.png"
                                                alt=""
                                            />
                                        )}
                                    </div>
                                    <ModalWrapper>
                                        <ModalHeading>
                                            <ModalTitle>Final Step</ModalTitle>
                                            <ModalDescription>
                                                Your transaction has been
                                                received we need a little bit
                                                more time. Confirmation usually
                                                takes 2-15 min
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
                                                        Other change USTD to
                                                        ETH?
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <ul>
                                                            <li>
                                                                Estimate Earned
                                                            </li>
                                                            <li>
                                                                55 Mining
                                                                contracts
                                                            </li>
                                                            <li>
                                                                2 Prospector
                                                                contracts, 5
                                                                Miners, 2
                                                                Refiners{" "}
                                                            </li>
                                                            <li>
                                                                Timeline to
                                                                Return 2 month
                                                            </li>
                                                            <li>
                                                                At any point you
                                                                can merge your
                                                                NFTs or Contact
                                                                Us for more
                                                                complex
                                                                transactions
                                                            </li>
                                                        </ul>
                                                        <div className="warning">
                                                            *This is an estimate
                                                            based on current
                                                            live information
                                                        </div>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </Box>

                                            <Box className="ordertrackerbox">
                                                <OrderProgressTracker />
                                            </Box>

                                            <Box className="getreceivebox">
                                                <div className="leftbox">
                                                    <h3>You Get</h3>0.2345395
                                                    ETH
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
                                                            <li>
                                                                Estimate Earned
                                                            </li>
                                                            <li>
                                                                55 Mining
                                                                contracts
                                                            </li>
                                                            <li>
                                                                2 Prospector
                                                                contracts, 5
                                                                Miners, 2
                                                                Refiners{" "}
                                                            </li>
                                                            <li>
                                                                Timeline to
                                                                Return 2 month
                                                            </li>
                                                            <li>
                                                                At any point you
                                                                can merge your
                                                                NFTs or Contact
                                                                Us for more
                                                                complex
                                                                transactions
                                                            </li>
                                                        </ul>
                                                        <div className="warning">
                                                            *This is an estimate
                                                            based on current
                                                            live information
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
                                                            "areyousure"
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
                                                        setModalstate(
                                                            "transactioncompleted"
                                                        )
                                                    }
                                                    // @ts-ignore
                                                    icon={
                                                        <ArrowTransformIcon />
                                                    }
                                                />
                                            </div>
                                        </ModalFooter>
                                    </ModalWrapper>
                                </>
                            ))}
                        {modalstate === "finalstepcard" && (
                            <>
                                <div className="modalbg">
                                    {windowDimensions?.width <
                                    mobileBreakpoint ? (
                                        <img
                                            src="/images/common/bg/AddMintingRights/mobile.png"
                                            alt=""
                                        />
                                    ) : (
                                        <img
                                            src="/images/common/bg/AddMintingRights/2.png"
                                            alt=""
                                        />
                                    )}
                                </div>
                                <ModalWrapper>
                                    <ModalHeading>
                                        <ModalTitle>Final Step</ModalTitle>
                                        <ModalDescription>
                                            Select your Payment Method
                                        </ModalDescription>
                                    </ModalHeading>
                                    <ModalContent className="buyamountques finalstep">
                                        <Box className="paymethodinput">
                                            <div className="row row1">
                                                <DataBox>
                                                    <Label>Card Number</Label>
                                                    <InputBox placeholder="1234  5678  9101  1121" />
                                                </DataBox>
                                            </div>
                                            <div className="row row2">
                                                <DataBox>
                                                    <Label>
                                                        Expiration Date
                                                    </Label>
                                                    <InputBox placeholder="MM/YY" />
                                                </DataBox>
                                                <DataBox>
                                                    <Label>CVV</Label>
                                                    <InputBox placeholder="123" />
                                                </DataBox>
                                            </div>
                                            <div className="carddetails">
                                                <div className="circlbox"></div>
                                                Save card details
                                            </div>
                                        </Box>
                                    </ModalContent>
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
                        {/* {modalstate === "finalstep" && (
                           
                        )} */}
                        {modalstate === "transactioncompleted" && (
                            <>
                                <div className="modalbg">
                                    {type == "purchase_with_wallet" ? (
                                        windowDimensions?.width <
                                        mobileBreakpoint ? (
                                            <img
                                                src="/images/common/bg/AddMintingRights/mobile.png"
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                src="/images/common/bg/AddMintingRights/4_transaction_share.png"
                                                alt=""
                                            />
                                        )
                                    ) : windowDimensions?.width <
                                      mobileBreakpoint ? (
                                        <img
                                            src="/images/common/bg/AddMintingRights/mobile.png"
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
const DataBox = styled.div`
    margin-bottom: 20px;
`;
const Label = styled.div`
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));

    /* S1/Medium */
    font-family: Telegraf;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    margin-bottom: 10px;
    span {
        color: var(--Text-Tertiary, var(--Typography-Primary-white, #969696));
    }
`;
const InputBox = styled.input`
    border-radius: 18px;
    background: Transparent;
    // outline: 0 !important;
    border: 2px solid rgba(255, 255, 255, 0.04) !important;
    color: var(--Text-Tertiary, #969696);
    text-align: left;
    text-transform: capitalize;
    padding: 20px 28px;
    font: 400 16px Telegraf, sans-serif !important;
    width: 100%;
    box-sizing: border-box;
`;
const ModalContent = styled.div`
    .flexbox {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .paymethodinput {
        .row {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        ${DataBox} {
            width: 100%;
        }
        .row2 {
            ${DataBox} {
                width: calc(50% - 10px);
            }
        }
        .carddetails {
            display: flex;
            align-items: center;
            .circlbox {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 1px solid #707070;
                // box-sizing: border-box;
                margin-right: 8px;
                margin-bottom: -3px;
            }
        }
    }
    .paymethodselector {
        .payrow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 32px;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.08) 0%,
                rgba(255, 255, 255, 0.05) 100%
            );
            padding: 16px 20px;
            cursor: pointer;
            transition: all 0.3s linear;
            margin-bottom: 20px;
            .left {
                display: flex;
                align-items: center;
                .circlbox {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid #707070;
                    // box-sizing: border-box;
                    margin-right: 8px;
                    margin-bottom: -2px;
                }
            }
            .right {
                display: flex;
                align-items: center;
                img {
                    height: 18px;
                }
            }
            &.active {
                .circlbox {
                    background: #e0c26f;
                    border-color: #cba145;
                }
            }
            &:hover {
                background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.1) 0%,
                    rgba(255, 255, 255, 0.09) 100%
                );
            }
        }
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
                    cursor: pointer;
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
            .MuiOutlinedInput-root {
                .MuiOutlinedInput-notchedOutline {
                    border: 0 !important;
                }
            }
            .MuiMenuItem-root {
                padding-top: 9px;
                padding-bottom: 9px !important;
                font-size: 10px !important;
            }
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
            margin-top: 50px;

            .MuiSlider-root {
                position: absolute;
                top: -27px;
                padding: 0;
                width: calc(100% - 20px);
                left: 50%;
                transform: translateX(-50%);
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
                box-shadow: none;
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
