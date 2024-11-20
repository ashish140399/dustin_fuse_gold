import React, { useState } from "react";
import styled from "styled-components";
import NFTCard from "../../../../components/NFTCard/NFTCard";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
    ArrowTransformIcon,
    BackArrowIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CustomDropdownIcon,
    LayoutDistributeIcon,
    LayoutGridIcon,
    LayoutListIcon,
} from "../../../../assets/icons";
import ActionButton from "../../../../components/Buttons/ActionButton/ActionButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createGlobalStyle } from "styled-components";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Box, TableContainer, TableContainerProps } from "@mui/material";
import { mobileBreakpoint } from "../../../../const";
interface StyledTableContainerProps extends TableContainerProps {
    // any additional props here
}

const GlobalStyle = createGlobalStyle`
  body {
 background: url(/images/common/dashboard_distribute_bg.png);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 100% 80vh;
    background-size: cover;
    min-height:100vh
  }


`;

interface NFTsListProps {
    isSearchPage?: boolean;
}

const SelectorBoxWrapperOuter = (props: any) => {
    const { className, style } = props;
    const [dropdownBlockchain, setDropdownBlockchain] = React.useState("");
    const [dropdownCategory, setDropdownCategory] = React.useState("");
    const [dropdownCollection, setDropdownCollection] = React.useState("");
    return (
        <SelectBoxWrapper className={className} style={style}>
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
                <MenuItem value={10}>Etherum</MenuItem>
                <MenuItem value={20}>Binance</MenuItem>
                <MenuItem value={30}>AVL</MenuItem>
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

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} arrow-next`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ChevronRightIcon />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} arrow-prev`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ChevronLeftIcon />
        </div>
    );
}
const NFTsList: React.FC<NFTsListProps> = ({ isSearchPage }) => {
    const [layoutSelector, setLayoutSelector] = React.useState("grid");

    // const [nftcards, setNftcards] = React.useState([
    //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    // ]);
    const [nftcards, setNftcards] = React.useState(
        Array.from({ length: 12 }, (_, i) => i + 1)
    );
    const settings = {
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 700, // For tablets and small desktops
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Layout>
            {layoutSelector === "distribute" && <GlobalStyle />}

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
                        <SelectorBoxWrapperOuter
                            style={
                                layoutSelector === "distribute"
                                    ? { opacity: 0 }
                                    : { opacity: 1 }
                            }
                        />
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
                    layoutSelector === "grid" ? (
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
                    ) : layoutSelector === "distribute" ? (
                        <SliderStyled {...settings}>
                            {nftcards.map((item, index) => (
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
                            ))}
                        </SliderStyled>
                    ) : (
                        <StyledTableContainer>
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table"
                            >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ITEM</TableCell>
                                        <TableCell align="left">
                                            CURRENT PRICE
                                        </TableCell>
                                        <TableCell align="left">
                                            BEST OFFER
                                        </TableCell>
                                        <TableCell align="left">
                                            LAST SALE
                                        </TableCell>
                                        <TableCell align="left">
                                            OWNER
                                        </TableCell>
                                        <TableCell align="left">
                                            TIME LISTED
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                        <TableRow
                                            key={item}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                <div className="itemdetails">
                                                    <img
                                                        src="/images/common/sqimg.png"
                                                        alt=""
                                                    />
                                                    <span>The Cat #10458</span>
                                                </div>
                                            </TableCell>
                                            <TableCell align="left">
                                                <div className="price">
                                                    100,000,000{" "}
                                                    <span>GOLDX</span>
                                                </div>
                                            </TableCell>
                                            <TableCell align="left">
                                                <div className="price">
                                                    100,000,000{" "}
                                                    <span>GOLDX</span>
                                                </div>
                                            </TableCell>
                                            <TableCell align="left">
                                                <div className="price">
                                                    100,000,000{" "}
                                                    <span>GOLDX</span>
                                                </div>
                                            </TableCell>
                                            <TableCell align="left">
                                                <div className="gradcolor">
                                                    Jasmin Isio
                                                </div>
                                            </TableCell>
                                            <TableCell align="left">
                                                <div className="price">
                                                    15 <span> {` `}m ago</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </StyledTableContainer>
                    )
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
    position: relative;
    .dashboard_distribute_bg {
        position: absolute;
        left: 0;
        width: 100%;
        top: 0;
        height: 100%;
        object-fit: cover;
    }
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
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
    }
`;
const WelcomeMessage = styled.p`
    color: var(--Text-Tertiary, #969696);
    // font: 400 16px Telegraf, sans-serif;
    font-weight: 400;
    font-family: "Telegraf", sans-serif;
    margin: 0;

    @media screen and (max-width: ${mobileBreakpoint}px) {
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
    @media screen and (max-width: ${mobileBreakpoint}px) {
        max-width: 100%;
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
        .MuiSelect-outlined {
            color: #fff !important;
        }
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

    @media screen and (max-width: ${mobileBreakpoint}px) {
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
    display: flex;
    justify-content: center;
`;

const SliderStyled = styled(Slider)`
    margin-top: 4vh;
    margin-bottom: 7vh;
    .slick-slide {
        opacity: 0;
    }
    .slick-active {
        opacity: 1;
        transition: all 0.2s ease;
    }
    .slick-active {
        transform: skewY(10deg) scale(0.82);
        opacity: 0.6;
    }
    .slick-active.slick-center {
        transform: skewY(0deg) scale(1);
        opacity: 1;
    }

    .slick-center + .slick-active {
        transform: skewY(-10deg) scale(0.82);
        opacity: 0.6;
    }
    ${NFTWidthWrapper} {
        margin: auto;
        display: flex !important;
        justify-content: center;
    }
`;

const StyledTableContainer = styled(TableContainer)<StyledTableContainerProps>`
    .MuiTableHead-root {
        .MuiTableRow-root {
            .MuiTableCell-root {
                color: var(--Text-Inactive, #707070);
                font-family: Telegraf;
                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                line-height: 16px; /* 133.333% */
                border-bottom: 1px solid #383838 !important;
            }
        }
    }
    .MuiTableBody-root {
        .MuiTableRow-root {
            .MuiTableCell-root {
                color: #fff;
                font-family: Telegraf;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px; /* 133.333% */
                border-bottom: 1px solid #383838 !important;
            }
        }
    }
    .gradcolor {
        overflow: hidden;
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
    .price {
        span {
            color: #969696;
        }
    }
    .itemdetails {
        display: flex;
        align-items: center;
        overflow: hidden;
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
        text-overflow: ellipsis;
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px; /* 150% */
        img {
            height: 40px;
            width: 40px;
            object-fit: cover;
            margin-right: 20px;
        }
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
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: row-reverse;
        overflow-x: auto;
        scrollbar-width: none;
        .rightwrapper {
            flex-direction: row-reverse;
            ${SelectBoxWrapper} {
                display: flex;
                margin-left: 20px;
                .MuiOutlinedInput-root {
                    margin-right: 20px;
                }
            }
        }
    }
`;
export default NFTsList;
