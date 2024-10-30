import React from "react";
import styled from "styled-components";
import NFTCard from "../../../../components/NFTCard/NFTCard";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
    ArrowTransformIcon,
    BackArrowIcon,
    CustomDropdownIcon,
    LayoutDistributeIcon,
    LayoutGridIcon,
    LayoutListIcon,
} from "../../../../assets/icons";
import ActionButton from "../../../../components/Buttons/ActionButton/ActionButton";

interface NFTsListProps {
    isSearchPage?: boolean;
}

const SelectorBoxWrapperOuter = () => {
    const [dropdownBlockchain, setDropdownBlockchain] = React.useState("");
    const [dropdownCategory, setDropdownCategory] = React.useState("");
    const [dropdownCollection, setDropdownCollection] = React.useState("");
    return (
        <SelectBoxWrapper>
            <Select
                labelId="dropdownBlockchain-select-label"
                id="dropdownBlockchain-simple-select"
                value={dropdownBlockchain}
                onChange={(e) => setDropdownBlockchain(e.target.value)}
                displayEmpty
                renderValue={
                    dropdownBlockchain !== ""
                        ? undefined
                        : () => (
                              <span style={{ color: "#fff" }}>Blockchain</span>
                          )
                }
                IconComponent={CustomDropdownIcon}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
                labelId="dropdownCategory-select-label"
                id="dropdownCategory-simple-select"
                value={dropdownCategory}
                onChange={(e) => setDropdownCategory(e.target.value)}
                displayEmpty
                renderValue={
                    dropdownCategory !== ""
                        ? undefined
                        : () => <span style={{ color: "#fff" }}>Category</span>
                }
                IconComponent={CustomDropdownIcon}
            >
                <MenuItem value={1}>Cat 1</MenuItem>
                <MenuItem value={2}>Cat 2</MenuItem>
            </Select>
            <Select
                labelId="dropdownCollection-select-label"
                id="dropdownCollection-simple-select"
                value={dropdownCollection}
                onChange={(e) => setDropdownCollection(e.target.value)}
                displayEmpty
                renderValue={
                    dropdownCollection !== ""
                        ? undefined
                        : () => (
                              <span style={{ color: "#fff" }}>Collection</span>
                          )
                }
                IconComponent={CustomDropdownIcon}
            >
                <MenuItem value={20}>Collection 1</MenuItem>
            </Select>
        </SelectBoxWrapper>
    );
};

const NFTsList: React.FC<NFTsListProps> = ({ isSearchPage }) => {
    const [layoutSelector, setLayoutSelector] = React.useState("grid");

    // const [nftcards, setNftcards] = React.useState([
    //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    // ]);
    const [nftcards, setNftcards] = React.useState([1]);

    return (
        <Layout>
            {nftcards?.length > 0 && (
                <OptionsWrapper className={isSearchPage ? "searchpage" : ""}>
                    <div className="backbutton">
                        <BackArrowIcon /> <span>Go Back</span>
                    </div>
                    <div className="leftwrapper">
                        <HeaderContainer>
                            <DashboardTitle>Search Results</DashboardTitle>
                            <WelcomeMessage>
                                435 Results for “#242414”
                            </WelcomeMessage>
                        </HeaderContainer>
                    </div>
                    <div className="rightwrapper">
                        <SelectorBoxWrapperOuter />
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
                                    layoutSelector === "list" ? "active" : ""
                                }`}
                                onClick={() => setLayoutSelector("list")}
                            >
                                <LayoutListIcon />
                            </div>
                            <div
                                className={`iconwrapper ${
                                    layoutSelector === "distribute"
                                        ? "active"
                                        : ""
                                }`}
                                onClick={() => setLayoutSelector("distribute")}
                            >
                                <LayoutDistributeIcon />
                            </div>
                        </LayoutSelectorWrapper>
                    </div>
                </OptionsWrapper>
            )}

            <NFTCardsWrapper>
                {nftcards.length > 0 ? (
                    nftcards.map((item, index) => (
                        <NFTWidthWrapper>
                            <NFTCard
                                key={item}
                                imageSrc="./img.png"
                                title="Samurai X #04 #12210"
                                price="100"
                                currency="INR"
                                likes={100}
                                timeLeft={10000000 * item}
                            />
                        </NFTWidthWrapper>
                    ))
                ) : (
                    <NoNftWrapper>
                        <section className="no-nfts-section">
                            <header className="no-nfts-header">
                                <img
                                    className="no-nfts-image"
                                    src="./images/common/nonft.png"
                                    alt="No NFTs illustration"
                                    loading="lazy"
                                />
                            </header>
                            <main className="no-nfts-content">
                                <h1 className="no-nfts-title">
                                    No NFT's yet? Start Minting to create your
                                    first NFT!
                                </h1>
                                <p className="no-nfts-description">
                                    Wondering why your NFTs haven't minted yet?
                                    It's time to dive into your stats. Review
                                    your metrics, analyze trends, and discover
                                    what's holding you back.
                                </p>
                                <div className="no-nfts-actions">
                                    <ActionButton
                                        label="Mint NFT"
                                        variant="primary"
                                        // @ts-ignore
                                        icon={<ArrowTransformIcon />}
                                    />

                                    <ActionButton
                                        label="Marketplace"
                                        variant="secondary"
                                        // @ts-ignore
                                        icon={<ArrowTransformIcon />}
                                    />
                                </div>
                            </main>
                        </section>
                    </NoNftWrapper>
                )}
            </NFTCardsWrapper>
        </Layout>
    );
};

const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
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

const HeaderContainer = styled.header`
    align-self: stretch;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    flex-basis: 0%;
    margin: auto 0;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;
const WelcomeMessage = styled.p`
    color: var(--Text-Tertiary, #969696);
    // font: 400 16px Telegraf, sans-serif;
    font-weight: 400;
    font-family: "Telegraf", sans-serif;
    margin: 0;

    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const DashboardTitle = styled.h1`
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    font-feature-settings: "liga" off, "clig" off;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 16px;
    font-family: "Conthrax";
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;
const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    .leftwrapper,
    .backbutton {
        display: none;
    }
    .rightwrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
    &.searchpage {
        position: relative;
        padding-top: 40px;
        .leftwrapper {
            display: block;
        }
        .backbutton {
            display: flex;
            position: absolute;
            top: 0;
            left: 0;
        }
        .rightwrapper {
            justify-content: flex-end;
        }
    }
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
const SelectBoxWrapper = styled.div`
    .MuiOutlinedInput-root {
        margin-right: 30px;
    }
`;
const NFTCardsWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
`;

const NoNftWrapper = styled.div`
    margin: auto;
    max-width: 700px;
    width: 80vw;
    margin-top: 100px;
    .no-nfts-section {
        display: flex;

        flex-direction: column;
        justify-content: center;
    }

    .no-nfts-header {
        margin-bottom: 48px;
        .no-nfts-image {
            width: 100%;
        }
    }
    .no-nfts-content {
        text-align: center;
    }

    .no-nfts-title {
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
        font-feature-settings: "liga" off, "clig" off;
        text-transform: uppercase;
        font: 600 30px/40px Conthrax, sans-serif;
        max-width: 681px;
        margin: auto;
        margin-bottom: 20px;
    }

    .no-nfts-description {
        color: var(--Text-Secondary, #cfcfcf);
        font: 400 16px/24px Telegraf, sans-serif;
        margin-bottom: 32px;
    }
    .no-nfts-actions {
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
    }

    @media (max-width: 991px) {
        .no-nfts-header {
            margin-bottom: 40px;
        }

        .no-nfts-title,
        .no-nfts-description {
            max-width: 100%;
        }
    }
`;
const NFTWidthWrapper = styled.div`
    width: 25%;
    min-width: 360px;
    margin-bottom: 40px;
`;

export default NFTsList;
