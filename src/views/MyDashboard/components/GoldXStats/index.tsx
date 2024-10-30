import React from "react";
import styled from "styled-components";
import NFTCard from "../../../../components/NFTCard/NFTCard";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
} from "@mui/material";
import {
    ArrowTransformIcon,
    CustomDropdownIcon,
    LayoutDistributeIcon,
    LayoutGridIcon,
    LayoutListIcon,
} from "../../../../assets/icons";
import ActionButton from "../../../../components/Buttons/ActionButton/ActionButton";
import { DashboardBalanceBG } from "../../../../assets/BG/BG";

interface NFTsListProps {}

const BalanceBox = () => {
    return (
        <BalanceBoxWrapper>
            <div className="cardbg">
                <DashboardBalanceBG />
            </div>
            <ContentWrapper>
                <BoxHeader>
                    <h3>BALANCES</h3>
                    <h6>Last updated 2h ago</h6>
                </BoxHeader>
                <BalanceDataRow>
                    <Col>
                        <h1>
                            1,429.<span>4</span>
                        </h1>
                        <h6>GOLDX</h6>
                    </Col>
                    <Col>
                        <h1>
                            469.<span>4</span>
                        </h1>
                        <h6>USDX</h6>
                    </Col>
                    <Col>
                        <h1>
                            422.<span>1</span>
                        </h1>
                        <h6>FUSEG</h6>
                    </Col>
                </BalanceDataRow>
            </ContentWrapper>
        </BalanceBoxWrapper>
    );
};

const GoldXStats: React.FC<NFTsListProps> = ({}) => {
    const [layoutSelector, setLayoutSelector] = React.useState("grid");
    const [dropdownBlockchain, setDropdownBlockchain] = React.useState("");
    const [dropdownCategory, setDropdownCategory] = React.useState("");
    const [dropdownCollection, setDropdownCollection] = React.useState("");
    const [nftcards, setNftcards] = React.useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    // const [nftcards, setNftcards] = React.useState([]);

    return (
        <Layout>
            <OptionsWrapper>
                <SelectBoxWrapper>
                    <MuiButtonStyle variant="contained" className="active">
                        All
                    </MuiButtonStyle>
                    <MuiButtonStyle variant="contained">
                        Global Stats
                    </MuiButtonStyle>
                    <MuiButtonStyle variant="contained">
                        My Stats
                    </MuiButtonStyle>
                    <MuiButtonStyle variant="contained">
                        Balances
                    </MuiButtonStyle>
                    <MuiButtonStyle variant="contained">
                        Total Global Mining Power
                    </MuiButtonStyle>
                    <MuiButtonStyle variant="contained">
                        GOLDX Rewards Earned
                    </MuiButtonStyle>
                    <MuiButtonStyle variant="contained">
                        Global Stats
                    </MuiButtonStyle>
                </SelectBoxWrapper>
                <LayoutSelectorWrapper>
                    <div
                        className={`iconwrapper ${
                            layoutSelector === "grid" ? "active" : ""
                        }`}
                        onClick={() => setLayoutSelector("grid")}
                    >
                        <LayoutGridIcon />
                    </div>

                    <div
                        className={`iconwrapper ${
                            layoutSelector === "distribute" ? "active" : ""
                        }`}
                        onClick={() => setLayoutSelector("distribute")}
                    >
                        <LayoutDistributeIcon />
                    </div>
                </LayoutSelectorWrapper>
            </OptionsWrapper>

            <DataRows>
                <BalanceRow>
                    <LeftColumn>
                        <BalanceBox />
                    </LeftColumn>
                    <RightColumn>
                        <div className="imgwrapper">
                            <img src="/images/common/goldimg.png" alt="" />
                        </div>
                    </RightColumn>
                </BalanceRow>
            </DataRows>
        </Layout>
    );
};

const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
`;

const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`;
const LayoutSelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 3px;
    border-radius: 32px;
    border: 1px solid var(--Lines-Divider, #383838);
    background: var(--background-surface-1, #232323);
    .iconwrapper {
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        &.active {
            background: #fff;
            svg {
                path {
                    stroke: #111111;
                }
            }
        }
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
    &.active {
        background: var(--Typography-Primary-white, #fff) !important;
        color: var(--Brand-Dark, #111) !important;
    }
`;
const SelectBoxWrapper = styled.div``;
const LeftColumn = styled.div``;
const RightColumn = styled.div``;
const DataRows = styled.div``;

const BoxHeader = styled.div`
    border-bottom: 1px solid #383838;
    padding: 40px;
    box-sizing: border-box;
    h3 {
        overflow: hidden;
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
        font-feature-settings: "liga" off, "clig" off;
        text-overflow: ellipsis;
        font-family: Conthrax;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 12px;
    }
    h6 {
        color: var(--Text-Tertiary, #969696);
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
    }
`;
const Col = styled.div`
    padding: 40px;
    h1 {
        color: var(--UI-White, var(--Typography-Primary-white, #fff));
        font-feature-settings: "liga" off, "clig" off;

        /* Title/H3 */
        font-family: Conthrax;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: 56px; /* 116.667% */
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 12px;
        span {
            color: var(--UI-White, var(--Typography-Primary-white, #fff));
            font-feature-settings: "liga" off, "clig" off;

            /* Title/H5 */
            font-family: Conthrax;
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
    h6 {
        color: var(--Text-Tertiary, #969696);
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
    }
`;
const BalanceDataRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Col} {
        width: 33.33%;
        box-sizing: border-box;
        &:nth-child(2) {
            border-right: 1px solid #383838;
            border-left: 1px solid #383838;
        }
    }
`;
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
const BalanceBoxWrapper = styled(BoxWrapper)``;
const BalanceRow = styled.div`
    display: flex;
    justify-content: space-between;
    ${LeftColumn} {
        width: calc(80% - 10px);
    }
    ${RightColumn} {
        width: calc(20% - 10px);
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
export default GoldXStats;
