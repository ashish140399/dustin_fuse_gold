import React, { useContext } from "react";
import styled from "styled-components";
import { Select, MenuItem } from "@mui/material";
import {
    ArrowTransformIcon,
    BackArrowIcon,
    CustomDropdownTransIcon,
} from "../../assets/icons";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import NftTransfferdModal from "../../components/Modals/NftTransfferdModal";
import { useNavigate } from "react-router-dom";
import { mobileBreakpoint } from "../../const";
import SiteVariablesContext from "../../contexts/SiteVariablesContext";

interface CompProps {}

const DataContainer = styled.div``;

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
const TextArea = styled.textarea`
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
const DataBox = styled.div`
    margin-bottom: 20px;
    &.amountvaluebox {
        margin-bottom: 40px;
        ${InputBox} {
            padding: 0;
            border: 0;
            color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
            font-family: Conthrax;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 48px; /* 120% */
            text-transform: uppercase;
            border-bottom: 1px solid #5d5c5a;
            padding-bottom: 14px;
            border-radius: 0;
        }
    }
    &.fromtobox {
        margin-bottom: 30px;
        .transferboxwrapper {
            border-radius: 18px;
            background: Transparent;
            border: 2px solid rgba(255, 255, 255, 0.04);
            position: relative;
            .switchicon {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                cursor: pointer;
            }
            .boxrow {
                .MuiOutlinedInput-root {
                    width: 100%;
                    padding: 10px 12px !important;
                    .MuiInputBase-input {
                        color: #fff;
                    }
                    .MuiOutlinedInput-notchedOutline {
                        border: 0;
                        border-radius: 0;
                        border-bottom: 1px solid #5d5c5a;
                    }
                }
                &.tobox {
                    .MuiOutlinedInput-root {
                        .MuiOutlinedInput-notchedOutline {
                            border: 0;
                        }
                    }
                }
            }
        }
    }
`;
const Transfer: React.FC<CompProps> = ({}) => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    const [openNFTTransferedModal, setOpenNFTTransferedModal] =
        React.useState(false);
    const [fromaccount, setFromaccount] = React.useState("");
    const [toaccount, setToaccount] = React.useState("");
    const switchValues = () => {
        const savefromaccount = fromaccount;
        setFromaccount(toaccount);
        setToaccount(savefromaccount);
    };
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // Navigates one step back in the history
    };

    return (
        <>
            <DashboardHeader />
            <Layout className="paddinglayoutx paddinglayouty">
                <InformationRow>
                    <LeftColumn>
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
                                <PageControlRight></PageControlRight>
                            </PageControls>

                            <PersaonalDetailBoxWrapper>
                                <ContentWrapper>
                                    <PageHeading>
                                        <PageTitle>
                                            Transfer NFT#12424
                                        </PageTitle>
                                        <PageDescription>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua.
                                        </PageDescription>
                                    </PageHeading>
                                    {windowDimensions?.width <=
                                        mobileBreakpoint && (
                                        <RightColumn>
                                            <div className="imgwrapper">
                                                <img
                                                    src="/images/common/transfer.png"
                                                    alt=""
                                                />
                                            </div>
                                        </RightColumn>
                                    )}
                                    <DataContainer>
                                        <DataBox className="amountvaluebox">
                                            <Label>Amount</Label>
                                            <InputBox
                                                value={`$890.0 USD`}
                                                readOnly
                                                style={{
                                                    pointerEvents: "none",
                                                }}
                                            />
                                        </DataBox>
                                        <DataBox className="fromtobox">
                                            <Label>Transfer Item</Label>
                                            <div className="transferboxwrapper">
                                                <div
                                                    className="switchicon"
                                                    onClick={switchValues}
                                                >
                                                    <img
                                                        src="/images/common/icons/transferswitch.svg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="boxrow frombox">
                                                    <Select
                                                        labelId="dropdownfrom-select-label"
                                                        id="dropdownfrom-simple-select"
                                                        value={fromaccount}
                                                        onChange={(e) =>
                                                            setFromaccount(
                                                                e.target.value
                                                            )
                                                        }
                                                        displayEmpty
                                                        renderValue={
                                                            fromaccount !== ""
                                                                ? undefined
                                                                : () => (
                                                                      <span
                                                                          style={{
                                                                              color: "#969696",
                                                                          }}
                                                                      >
                                                                          From
                                                                      </span>
                                                                  )
                                                        }
                                                        IconComponent={
                                                            CustomDropdownTransIcon
                                                        }
                                                    >
                                                        <MenuItem value={10}>
                                                            0x123123000000000000000000000000000000000000
                                                        </MenuItem>
                                                        <MenuItem value={20}>
                                                            0x865455500000000000000000000000000000000000
                                                        </MenuItem>
                                                    </Select>
                                                </div>
                                                <div className="boxrow tobox">
                                                    <Select
                                                        labelId="dropdownto-select-label"
                                                        id="dropdownto-simple-select"
                                                        value={toaccount}
                                                        onChange={(e) =>
                                                            setToaccount(
                                                                e.target.value
                                                            )
                                                        }
                                                        displayEmpty
                                                        renderValue={
                                                            toaccount !== ""
                                                                ? undefined
                                                                : () => (
                                                                      <span
                                                                          style={{
                                                                              color: "#969696",
                                                                          }}
                                                                      >
                                                                          To
                                                                          Wallet
                                                                      </span>
                                                                  )
                                                        }
                                                        IconComponent={
                                                            CustomDropdownTransIcon
                                                        }
                                                    >
                                                        <MenuItem value={10}>
                                                            0x123123000000000000000000000000000000000000
                                                        </MenuItem>
                                                        <MenuItem value={20}>
                                                            0x865455500000000000000000000000000000000000
                                                        </MenuItem>
                                                    </Select>
                                                </div>
                                            </div>
                                        </DataBox>
                                        <DataBox>
                                            <Label>
                                                Add Notes <span>Optional</span>
                                            </Label>
                                            <TextArea
                                                placeholder="Your Notes..."
                                                rows={3}
                                            />
                                        </DataBox>
                                    </DataContainer>
                                </ContentWrapper>
                            </PersaonalDetailBoxWrapper>
                        </TopColumn>
                        <BottomColumn>
                            <ActionButton
                                label="Confirm"
                                variant="primary"
                                className="btnwidth100"
                                onClick={() => setOpenNFTTransferedModal(true)}
                                // @ts-ignore
                                icon={<ArrowTransformIcon />}
                            />
                        </BottomColumn>
                    </LeftColumn>
                    {windowDimensions?.width > mobileBreakpoint && (
                        <RightColumn>
                            <div className="imgwrapper">
                                <img src="/images/common/transfer.png" alt="" />
                            </div>
                        </RightColumn>
                    )}
                </InformationRow>
            </Layout>
            <NftTransfferdModal
                modalopen={openNFTTransferedModal}
                handleModal={setOpenNFTTransferedModal}
            />
        </>
    );
};

const PageControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const PageControlLeft = styled.div`
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
const PageControlRight = styled.div``;

const LeftColumn = styled.div`
    box-sizing: border-box;
    padding-right: 50px;
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
        width: calc(50% - 10px);
    }
    .rightcontrol {
        width: calc(50% - 10px);
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

const InformationRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    ${LeftColumn} {
        width: 50%;
    }
    ${RightColumn} {
        width: 50%;
        max-height: calc(100vh - 100px);
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
    box-sizing: border-box;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${InformationRow} {
            flex-direction: column;
            ${LeftColumn} {
                width: 100%;
                padding-right: 0;
                ${RightColumn} {
                    width: 100%;
                    margin-bottom: 30px;
                }
            }
        }
    }
`;
export default Transfer;
