import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
    AccordionMinusIcon,
    AccordionPlusIcon,
    ArrowTransformIcon,
    ClipboardIcon,
    CustomDropdownIcon,
    CustomDropdownTransIcon,
    FaceBookIcon,
    SuggestionCloseIcon,
    TelegramIcon,
    TwitterIcon,
} from "../../assets/icons";
import { MenuItem, Select } from "@mui/material";
import ActionButton from "../Buttons/ActionButton/ActionButton";
import SiteVariablesContext from "../../contexts/SiteVariablesContext";
import {
    ModalControlProps,
    ModalDescription,
    ModalFooter,
    ModalHeading,
    ModalMainWrapper,
    ModalTitle,
    ModalWrapper,
} from "./styles";
import { mobileBreakpoint } from "../../const";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "700px",
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
interface SocialShareProps {
    icon: any;
    alt: string;
    onClick?: () => void;
}

interface ReferralStepProps {
    title: string;
    description: string;
}

interface EmailFormProps {
    onSubmit: (email: string) => void;
}

const SocialShareButton: React.FC<SocialShareProps> = ({
    icon,
    alt,
    onClick,
}) => (
    <ShareIconWrapper onClick={onClick} role="button" tabIndex={0}>
        {icon}
    </ShareIconWrapper>
);

const ReferralStep: React.FC<ReferralStepProps> = ({ title, description }) => (
    <StepContainer>
        <StepTitle>{title}</StepTitle>
        <StepDescription>{description}</StepDescription>
    </StepContainer>
);

const EmailForm: React.FC<EmailFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <EmailLabel htmlFor="email">Email Address</EmailLabel>
                <EmailInput
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                    aria-required="true"
                />
            </FormGroup>
        </form>
    );
};

const socialIcons = [
    { icon: <FaceBookIcon />, alt: "Share on Facebook" },
    { icon: <TwitterIcon />, alt: "Share on Twitter" },
    { icon: <TelegramIcon />, alt: "Share on Instagram" },
];

const ReferralPage: React.FC = () => {
    const [referralLink] = React.useState("https://goldx-username.com");

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(referralLink);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const handleEmailSubmit = (email: string) => {
        console.log("Email submitted:", email);
    };

    return (
        <ContentArea>
            <StepsWrapper>
                <section>
                    <ReferralStep
                        title="Invite Your Friends"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                    />
                    <EmailForm onSubmit={handleEmailSubmit} />
                </section>

                <section>
                    <ReferralStep
                        title="Share Your Referral Link"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
                    />
                    <ShareSection>
                        <ReferralLinkContainer
                            onClick={handleCopyLink}
                            role="button"
                            tabIndex={0}
                            aria-label="Copy referral link"
                        >
                            <ReferralLink>{referralLink}</ReferralLink>

                            <ClipboardIcon />
                        </ReferralLinkContainer>

                        {socialIcons.map((social, index) => (
                            <SocialShareButton
                                key={index}
                                {...social}
                                onClick={() =>
                                    console.log(`Sharing on ${social.alt}`)
                                }
                            />
                        ))}
                    </ShareSection>
                </section>
            </StepsWrapper>
        </ContentArea>
    );
};

const ReferralModal: React.FC<ModalControlProps> = ({
    modalopen,
    handleModal,
}) => {
    const [closeIconWidth, setCloseIconWidth] = useState(0);
    const cardWrapperRef = useRef(null);
    const { windowDimensions } = useContext(SiteVariablesContext);

    const handleOpen = () => handleModal(true);
    const handleClose = () => handleModal(false);
    useEffect(() => {
        // Function to update width based on window dimensions
        const updateWidth = () => {
            const width = cardWrapperRef.current
                ? // @ts-ignore
                  cardWrapperRef.current.offsetWidth
                : 0;

            setCloseIconWidth(width / 13); // Example: adjust bottom icon width calculation as needed
        };
        if (modalopen) updateWidth(); // Run once on mount and then whenever window dimensions change
    }, [modalopen, windowDimensions]); // Dependency on windowDimensions width and height

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
                    ref={cardWrapperRef}
                >
                    <ModalMainWrapper closeiconsvgWidth={`${closeIconWidth}px`}>
                        <div className="modalbg">
                            <img src="/images/common/bg/referral.png" alt="" />
                        </div>
                        <div className="closebutton" onClick={handleClose}>
                            <SuggestionCloseIcon />
                        </div>
                        <ModalWrapper>
                            <ModalHeading>
                                <ModalTitle>Get Referral Link</ModalTitle>
                                <ModalDescription>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do...
                                </ModalDescription>
                            </ModalHeading>
                            <ModalContent className="buyamountques">
                                <ReferralPage />
                            </ModalContent>
                            <ModalFooter>
                                <div className="gobackbutton">
                                    <ActionButton
                                        label="Go Back"
                                        variant="secondary"
                                        // className="btnwidth100"
                                    />
                                </div>
                                <div className="buttonbottom">
                                    <ActionButton
                                        label="Next"
                                        variant="primary"
                                        className="btnwidth100"
                                        // @ts-ignore
                                        icon={<ArrowTransformIcon />}
                                    />
                                </div>
                            </ModalFooter>
                        </ModalWrapper>
                    </ModalMainWrapper>
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
                    input {
                        background: transparent;
                        border: 0;
                        outline: 0;
                    }
                }
            }
            .controlright {
                background: rgba(255, 255, 255, 0.08);
                border-radius: 40px;
                overflow: hidden;
                white-space: nowrap;
                width: 100px;
                button {
                    background: transparent;
                    border: 0;
                    outline: 0;
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
            .MuiInputBase-root {
                border-radius: 16px !important;
                width: 100% !important;
                font-family: Telegraf !important;
                background: linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.08) 0%,
                    rgba(255, 255, 255, 0.05) 100%
                ) !important;
                .MuiOutlinedInput-notchedOutline {
                    border: 0;
                }
            }
        }
    }
`;

const ContentArea = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
`;

const StepsWrapper = styled.div`
    align-self: end;
    display: flex;
    flex-direction: column;
    justify-content: start;
    // flex-grow: 1;
    // flex-basis: 0;
    width: 100%;
    // margin: 32px -24px 0 0;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const StepContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    font-family: Telegraf, sans-serif;
    justify-content: center;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const StepTitle = styled.h2`
    color: var(--Text-Primary, #fff);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    margin: 0;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const StepDescription = styled.p`
    color: var(--Text-Secondary, #cfcfcf);
    font-size: 16px;
    font-weight: 400;
    margin-top: 7px;
    margin-bottom: 0;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const EmailLabel = styled.label`
    color: var(--Text-Primary, #fff);
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
`;

const EmailInput = styled.input`
    flex: 1;
    border-radius: 16px;
    border: 1px solid var(--Lines-Border, #5d5c5a);
    margin-top: 12px;
    width: 100%;
    box-sizing: border-box;
    gap: 10px;
    font-size: 16px !important;
    font-family: Telegraf !important;
    color: var(--Text-Primary, #fff);
    background: transparent;
    font-weight: 400 !important;
    text-transform: none !important;
    padding: 20px 24px;

    &::placeholder {
        color: var(--Text-Tertiary, #969696);
    }

    @media (max-width: 991px) {
        max-width: 100%;
        // padding: 20px;
    }
`;

const ShareSection = styled.div`
    display: flex;
    margin-top: 16px;
    width: 100%;
    align-items: start;
    gap: 16px;
    justify-content: start;
    flex-wrap: nowrap;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const ReferralLinkContainer = styled.div`
    align-items: center;
    border-radius: 32px;
    border: 1px solid var(--Lines-Border, #5d5c5a);
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.08) 0%,
        rgba(255, 255, 255, 0.05) 100%
    );
    display: flex;
    min-width: 240px;
    min-height: 64px;
    gap: 10px;
    padding: 0px 24px;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0.08) 100%
        );
    }

    &:focus {
        outline: 2px solid var(--Brand-Gold, #f4e0a3);
        outline-offset: 2px;
    }

    @media (max-width: 991px) {
        padding: 20px;
    }
`;

const ReferralLink = styled.span`
    color: var(--Text-Primary, #fff);
    font-family: Telegraf, sans-serif;
    font-size: 16px;
    font-weight: 400;
    flex: 1;
`;

const ShareIconWrapper = styled.div`
    align-items: center;
    border-radius: 32px;
    border: 1px solid var(--Lines-Border, #5d5c5a);
    background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.08) 0%,
        rgba(255, 255, 255, 0.05) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    min-width: 64px;
    height: 64px;
    // padding: 20px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(255, 255, 255, 0.08) 100%
        );
    }

    &:focus {
        outline: 2px solid var(--Brand-Gold, #f4e0a3);
        outline-offset: 2px;
    }
`;

export default ReferralModal;
