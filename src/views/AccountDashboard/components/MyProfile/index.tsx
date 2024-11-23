import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import {
    ArrowTransformIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CustomDropdownIcon,
    LayoutDistributeIcon,
    LayoutGridIcon,
    ThreeDotsIcon,
} from "../../../../assets/icons";
import {
    DashboardBalanceBG,
    DashboardBalanceMobileBG,
    GoldXRewardsBG,
    GoldXRewardsMobileBG,
    MiningPowerBG,
    MiningPowerMobileBG,
} from "../../../../assets/BG/BG";
import { PieChart, Pie, Sector, Cell } from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createGlobalStyle } from "styled-components";

import { mobileBreakpoint } from "../../../../const";
import SiteVariablesContext from "../../../../contexts/SiteVariablesContext";
import ActionButton from "../../../../components/Buttons/ActionButton/ActionButton";

interface NFTsListProps {}

const MyProfile: React.FC<NFTsListProps> = ({}) => {
    const [layoutSelector, setLayoutSelector] = React.useState("grid");
    const [chartContainersHeight, setChartContainersHeight] = useState(null);

    const sliderRef = useRef(null);

    const [activeButtons, setActiveButtons] = useState("Edit Profile");

    const buttons = ["Edit Profile", "Withdraw", "Transaction", "Settings"];

    const handleButtonClick = (buttonName: string) => {
        setActiveButtons(buttonName);
    };

    return (
        <Layout>
            <OptionsWrapper className="paddinglayoutx paddinglayouty">
                <SelectBoxWrapper>
                    {buttons.map((buttonName) => (
                        <MuiButtonStyle
                            key={buttonName}
                            variant="contained"
                            className={
                                activeButtons == buttonName ? "active" : ""
                            }
                            onClick={() => handleButtonClick(buttonName)}
                        >
                            {buttonName}
                        </MuiButtonStyle>
                    ))}
                </SelectBoxWrapper>
            </OptionsWrapper>
            <ProfileWrapper></ProfileWrapper>
            <DataRows className="paddinglayoutx">
                <LeftColumn>
                    <div className="title">General Information</div>
                    <div className="label">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do...
                    </div>
                </LeftColumn>

                <RightColumn>
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
                            <Label
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                Biography <span> 0 / 1,000</span>
                            </Label>
                            <TextAreaBox placeholder="Your Notes..." rows={4} />
                        </DataBox>
                    </DataContainer>
                </RightColumn>
            </DataRows>
            <DataRows className="paddinglayoutx paddinglayouty">
                <LeftColumn>
                    <div className="title">Contact Information</div>
                    <div className="label">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do...
                    </div>
                </LeftColumn>

                <RightColumn>
                    <DataContainer>
                        <DataBox>
                            <Label>Email Address</Label>
                            <InputBox placeholder="johndoe@mail.com" />
                        </DataBox>
                        <DataBox>
                            <Label>Website Link</Label>
                            <InputBox placeholder="https://" />
                        </DataBox>
                        <DataBox>
                            <Label>Wallet Address</Label>
                            <InputBox placeholder="Your Wallet Address" />
                        </DataBox>
                    </DataContainer>
                    <ActionButton
                        label="Save Changes"
                        variant="primary"
                        className="btnwidth100"
                        // @ts-ignore
                        icon={<ArrowTransformIcon />}
                    />
                </RightColumn>
            </DataRows>
        </Layout>
    );
};

const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: row-reverse;
        overflow-x: auto;
        scrollbar-width: none;
        white-space: nowrap;
    }
`;

const MuiButtonStyle = styled(Button)`
    border-radius: 100px !important;
    padding: 14px 28px !important;
    background: var(--background-surface-2, #2e2d2a) !important;
    color: var(--Text-Tertiary, #969696) !important;
    font-family: "Telegraf", sans-serif !important;
    text-transform: none !important;
    box-shadow: none !important;
    flex: 1 1 auto; /* Let buttons grow but not shrink */
    flex-shrink: 0;
    &.active {
        background: var(--Typography-Primary-white, #fff) !important;
        color: var(--Brand-Dark, #111) !important;
    }
`;
const SelectBoxWrapper = styled.div`
    @media screen and (max-width: ${mobileBreakpoint}px) {
        display: flex;
        margin-left: 20px;
    }
`;
const LeftColumn = styled.div`
    .title {
        color: var(--Text-Primary, #fff);
        font-family: Telegraf;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 140% */
        margin-bottom: 6px;
    }
    .label {
        color: var(--Text-Secondary, #cfcfcf);
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
`;
const RightColumn = styled.div`
    .btnwidth100 {
        margin-top: 40px !important;
    }
`;

const DataRows = styled.div`
    display: flex;
    justify-content: space-between;
    ${LeftColumn} {
        width: 50%;
        .
    }
    ${RightColumn} {
        width:  50%;
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
    &.row2 {
        margin-top: 40px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
    }
`;
const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
    }
`;

const DataBox = styled.div`
    margin-bottom: 20px;
`;
const DataContainer = styled.div`
    .flexbox {
        display: flex;
        justify-content: space-between;
        ${DataBox} {
            width: calc(50% - 10px);
        }
    }
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
const TextAreaBox = styled.textarea`
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

const ProfileWrapper = styled.div``;
export default MyProfile;
