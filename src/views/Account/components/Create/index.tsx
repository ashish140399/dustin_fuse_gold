import React from "react";
import styled from "styled-components";
import NFTCard from "../../../../components/NFTCard/NFTCard";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    OutlinedInput,
    InputAdornment,
} from "@mui/material";
import { ArrowTransformIcon, BackArrowIcon } from "../../../../assets/icons";
import ActionButton from "../../../../components/Buttons/ActionButton/ActionButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import AccountCreatedModal from "../../../../components/Modals/AccountCreatedModal";
import { useNavigate } from "react-router-dom";
import { mobileBreakpoint, smallmobileBreakpoint } from "../../../../const";

interface NFTsListProps {}

const CreateAccountBox = () => {
    return (
        <CABoxWrapper>
            <ContentWrapper>
                <PageHeading>
                    <PageTitle>Create your account</PageTitle>
                    <PageDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do...
                    </PageDescription>
                </PageHeading>
                <DataContainer>
                    <DataBox>
                        <Label>Email Address</Label>
                        <InputBox placeholder="Your Email Address" />
                    </DataBox>
                </DataContainer>
            </ContentWrapper>
        </CABoxWrapper>
    );
};
const PersonalDetailsBox = () => {
    return (
        <PersaonalDetailBoxWrapper>
            <ContentWrapper>
                <PageHeading>
                    <PageTitle>enter personal details</PageTitle>
                    <PageDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </PageDescription>
                </PageHeading>
                <DataContainer>
                    <div className="flexbox">
                        <DataBox>
                            <Label>First Name</Label>
                            <InputBox placeholder="John" />
                        </DataBox>
                        <DataBox>
                            <Label>Last Name</Label>
                            <InputBox placeholder="Doe" />
                        </DataBox>
                    </div>
                    <DataBox>
                        <Label>
                            Wallet Address <span>Optional</span>
                        </Label>
                        <InputBox placeholder="Your Wallet Address" />
                    </DataBox>
                </DataContainer>
            </ContentWrapper>
        </PersaonalDetailBoxWrapper>
    );
};

const CreatePasswordBox = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };
    return (
        <PersaonalDetailBoxWrapper>
            <ContentWrapper>
                <PageHeading>
                    <PageTitle>create your password</PageTitle>
                    <PageDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </PageDescription>
                </PageHeading>
                <DataContainer>
                    <DataBox>
                        <Label>Password</Label>
                        <StyledOutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword
                                                ? "hide the password"
                                                : "display the password"
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </DataBox>
                    <DataBox>
                        <Label>Confirm Password</Label>
                        <StyledOutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword
                                                ? "hide the password"
                                                : "display the password"
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </DataBox>
                </DataContainer>
            </ContentWrapper>
        </PersaonalDetailBoxWrapper>
    );
};

const DataContainer = styled.div``;
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
    border: 2px solid rgba(255, 255, 255, 0.04);
    color: var(--Text-Tertiary, #969696);
    text-align: left;
    text-transform: capitalize;
    padding: 20px 28px;
    font: 400 16px Telegraf, sans-serif;
    width: 100%;
    box-sizing: border-box;
`;
const StyledOutlinedInput = styled(OutlinedInput)`
    width: 100%;
    color: #fff !important;
    border-radius: 18px !important;
    overflow: hidden !important;
    .MuiInputBase-root {
        width: 100%;
    }
    .MuiSvgIcon-root {
        color: #fff !important;
        transform: translateX(-10px);
    }
    fieldset {
        border-radius: 18px !important;
        background: Transparent;
        border: 2px solid rgba(255, 255, 255, 0.04) !important;
    }
`;
const PageHeading = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
    position: relative;
`;
const PageTitle = styled.div`
    color: var(--UI-White, var(--Typography-Primary-white, #fff));
    font-feature-settings: "liga" off, "clig" off;
    font-family: Conthrax;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 114.286% */
    text-transform: uppercase;
`;
const PageDescription = styled.div`
    color: var(--Text-Secondary, #cfcfcf);

    /* P2/Regular */
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
`;

const CreateAccount: React.FC<NFTsListProps> = ({}) => {
    const [stepno, setStepno] = React.useState(1);
    const [openAccountCreatedModal, setOpenAccountCreatedModal] =
        React.useState(false);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Navigates one step back in the history
    };
    return (
        <>
            <Layout>
                <InformationRow>
                    <LeftColumn className="paddinglayoutx paddinglayouty">
                        <TopColumn>
                            <PageControls>
                                <PageControlLeft>
                                    <div
                                        className="backbutton"
                                        onClick={handleGoBack}
                                    >
                                        <BackArrowIcon /> <span>Go Back</span>
                                    </div>
                                </PageControlLeft>
                                <PageControlRight>
                                    {" "}
                                    <div className="progressbar">
                                        <div
                                            className={`item ${
                                                stepno > 1 ? "active" : ""
                                            }`}
                                        >
                                            <div className="value">1</div>Email{" "}
                                            <div className="line"></div>
                                        </div>
                                        <div
                                            className={`item ${
                                                stepno > 2 ? "active" : ""
                                            }`}
                                        >
                                            <div className="value">2</div>
                                            Personal Details
                                            <div className="line"></div>
                                        </div>
                                        <div
                                            className={`item ${
                                                stepno > 3 ? "active" : ""
                                            }`}
                                        >
                                            <div className="value">3</div>
                                            Password
                                        </div>
                                    </div>
                                </PageControlRight>
                            </PageControls>

                            {stepno === 1 && <CreateAccountBox />}
                            {stepno === 2 && <PersonalDetailsBox />}
                            {stepno === 3 && <CreatePasswordBox />}
                        </TopColumn>
                        <BottomColumn>
                            <div className="leftcontrol">
                                Already Have Account?<a href="#"> Sign In</a>
                            </div>
                            <div className="rightcontrol">
                                {stepno < 3 && (
                                    <ActionButton
                                        label="Next"
                                        variant="primary"
                                        // className="btnwidth100"
                                        onClick={() => setStepno(stepno + 1)}
                                        // @ts-ignore
                                        icon={<ArrowTransformIcon />}
                                    />
                                )}
                                {stepno === 3 && (
                                    <ActionButton
                                        label="Next"
                                        variant="primary"
                                        // className="btnwidth100"
                                        onClick={() =>
                                            setOpenAccountCreatedModal(true)
                                        }
                                        // @ts-ignore
                                        icon={<ArrowTransformIcon />}
                                    />
                                )}
                            </div>
                        </BottomColumn>
                    </LeftColumn>
                    <RightColumn>
                        <div className="imgwrapper">
                            <img src="/images/common/goldimg.png" alt="" />
                        </div>
                    </RightColumn>
                </InformationRow>
            </Layout>
            <AccountCreatedModal
                modalopen={openAccountCreatedModal}
                handleModal={setOpenAccountCreatedModal}
            />
        </>
    );
};

const PageControlLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .backbutton {
        display: flex;
        align-items: center;
        cursor: pointer;
        svg {
            margin-right: 10px;
        }
        span {
            /* P2/Regular */
            font-family: Telegraf;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            text-decoration-line: underline;
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
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: underline;
        }
    }
`;
const PageControlRight = styled.div`
    .progressbar {
        display: flex;
        align-items: center;
        .item {
            display: flex;
            align-items: center;
            color: #707070;
            .value {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                font-size: 10px;
                margin-right: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #707070;
                line-height: 10px;
            }
            .line {
                margin: 0 10px;
                width: 30px;
                height: 1.6px;
                background: #383838;
                border-radius: 2px;
            }
            &.active {
                color: #fff;
                .value {
                    color: #ebd27e;
                    border-color: #ebd27e;
                }
            }
        }
    }
`;
const PageControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    @media screen and (max-width: ${smallmobileBreakpoint}px) {
        flex-direction: column;
        align-items: flex-start;
        ${PageControlRight} {
            margin-top: 10px;
        }
    }
`;
const LeftColumn = styled.div`
    box-sizing: border-box;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopColumn = styled.div``;
const BottomColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftcontrol {
        color: var(--Text-Secondary, #cfcfcf);
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        text-transform: capitalize;
        a {
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
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

const RightColumn = styled.div``;

const BoxWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    .cardbg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
`;
const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
const PersaonalDetailBoxWrapper = styled(BoxWrapper)`
    ${DataContainer} {
        .flexbox {
            display: flex;
            justify-content: space-between;
            ${DataBox} {
                width: calc(50% - 10px);
            }
        }
    }
`;
const CABoxWrapper = styled(BoxWrapper)``;
const InformationRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    ${LeftColumn} {
        width: 50%;
    }
    ${RightColumn} {
        width: 50%;
        .imgwrapper {
            border-radius: 24px;
            overflow: hidden;
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`;
const Layout = styled.section`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${InformationRow} {
            flex-direction: column;
            ${LeftColumn} {
                width: 100%;
                height: 100%;
            }
            ${RightColumn} {
                display: none;
            }
        }
    }
`;
export default CreateAccount;
