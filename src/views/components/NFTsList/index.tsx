import React from "react";
import styled from "styled-components";
import NFTCard from "../../../components/NFTCard/NFTCard";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
    ArrowTransformIcon,
    CustomDropdownIcon,
    LayoutDistributeIcon,
    LayoutGridIcon,
    LayoutListIcon,
} from "../../../assets/icons";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";

interface NFTsListProps {}

const NFTsList: React.FC<NFTsListProps> = ({}) => {
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
            {nftcards?.length > 0 && (
                <OptionsWrapper>
                    <SelectBoxWrapper>
                        <Select
                            labelId="dropdownBlockchain-select-label"
                            id="dropdownBlockchain-simple-select"
                            value={dropdownBlockchain}
                            onChange={(e) =>
                                setDropdownBlockchain(e.target.value)
                            }
                            displayEmpty
                            renderValue={
                                dropdownBlockchain !== ""
                                    ? undefined
                                    : () => (
                                          <span style={{ color: "#fff" }}>
                                              Blockchain
                                          </span>
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
                            onChange={(e) =>
                                setDropdownCategory(e.target.value)
                            }
                            displayEmpty
                            renderValue={
                                dropdownCategory !== ""
                                    ? undefined
                                    : () => (
                                          <span style={{ color: "#fff" }}>
                                              Category
                                          </span>
                                      )
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
                            onChange={(e) =>
                                setDropdownCollection(e.target.value)
                            }
                            displayEmpty
                            renderValue={
                                dropdownCollection !== ""
                                    ? undefined
                                    : () => (
                                          <span style={{ color: "#fff" }}>
                                              Collection
                                          </span>
                                      )
                            }
                            IconComponent={CustomDropdownIcon}
                        >
                            <MenuItem value={20}>Collection 1</MenuItem>
                        </Select>
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
                                layoutSelector === "list" ? "active" : ""
                            }`}
                            onClick={() => setLayoutSelector("list")}
                        >
                            <LayoutListIcon />
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
