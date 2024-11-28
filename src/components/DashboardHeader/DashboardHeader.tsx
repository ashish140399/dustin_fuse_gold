import React, { useEffect } from "react";
import styled from "styled-components";
import {
    SuggestionCloseIcon,
    SuggestionTimeIcon,
    SearchIcon,
    UserIcon,
    MYNFTsIcon,
    FavoritesIcon,
    MyCollectionsIcon,
    ReferralsIcon,
    LogOutIcon,
    SuggestionSearchIcon,
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import ReferralModal from "../Modals/ReferralModal";
import { mobileBreakpoint } from "../../const";

interface SearchBarProps {}
interface ProfileButtonProps {}
interface DashboardHeaderProps {}

const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
    return (
        <Header className="paddinglayoutx">
            <HeaderContent>
                <LeftSection>
                    <LogoDashboard />
                    <SearchBar />
                </LeftSection>
                <RightSection>
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                    <ProfileButton />
                </RightSection>
            </HeaderContent>
        </Header>
    );
};

const Header = styled.header`
    border-bottom: 1px solid var(--Lines-Divider, #383838);
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--Brand-Dark, #111);
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 16px 20px;
    }
`;

const LeftSection = styled.div`
    display: flex;
    gap: 39px;
    flex-wrap: wrap;
    align-items: center;
`;
const RightSection = styled.div``;

const ProfileButton: React.FC<ProfileButtonProps> = () => {
    const [showList, setShowList] = React.useState(false);
    const [openRefferalModal, setOpenRefferalModal] = React.useState(false);
    const navigate = useNavigate();
    return (
        <>
            <ProfileWrapper>
                <div
                    className="accounticon"
                    onClick={() => setShowList(!showList)}
                >
                    <UserIcon />
                </div>
                {showList && (
                    <ListBox>
                        <div
                            className="item"
                            onClick={() => navigate("/dashboard")}
                        >
                            <div>My NFTs</div>
                            <MYNFTsIcon />
                        </div>
                        <div className="item">
                            <div>Profile</div>
                            <UserIcon />
                        </div>
                        <div className="item">
                            <div>Favourites</div>
                            <FavoritesIcon />
                        </div>
                        <div className="item">
                            <div>My Collections</div>
                            <MyCollectionsIcon />
                        </div>
                        <div
                            className="item"
                            onClick={() => {
                                setOpenRefferalModal(true);
                                setShowList(false);
                            }}
                        >
                            <div>Referrals</div>
                            <ReferralsIcon />
                        </div>
                        <div className="item logout">
                            <div>Log Out</div>
                            <LogOutIcon />
                        </div>
                    </ListBox>
                )}
            </ProfileWrapper>
            <ReferralModal
                modalopen={openRefferalModal}
                handleModal={setOpenRefferalModal}
            />
        </>
    );
};

const ProfileWrapper = styled.div`
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    border: 1.5px solid var(--Lines-Divider, #383838);
    display: flex;
    width: 64px;
    height: 64px;
    padding: 0;
    background: var(--background-surface-2, #2e2d2a);
    cursor: pointer;
    position: relative;
    .accounticon {
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const ListBox = styled.div`
    position: absolute;
    top: 80px;
    right: 0;
    border-radius: 16px;
    border: 1px solid var(--Lines-Divider, #383838);
    background: var(--background-surface-2, #2e2d2a);
    min-width: 240px;
    z-index: 5;
    padding: 24px;
    .item {
        padding: 20px 0px;
        color: #fff;
        border-bottom: 1px solid #383838;
        font-weight: 400;
        font-family: "Telegraf", sans-serif;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &.logout {
            color: var(--Functional-Error, #f14b5d);
        }
        &:first-child {
            padding-top: 0;
        }
        &:last-child {
            padding-bottom: 0;
            border-bottom: 0;
        }
    }
`;

const SearchBar: React.FC<SearchBarProps> = () => {
    const [open, setOpen] = React.useState(false);
    const [iptValue, setIptValue] = React.useState("");
    const [searchList, setSearchList] = React.useState([
        "#234343",
        "#334343",
        "#634343",
        "#734343",
        "#034343",
    ]);
    // Handler to remove an item from the list
    const handleRemove = (itemToRemove: string) => {
        setSearchList((prevList) =>
            prevList.filter((item) => item !== itemToRemove)
        );
    };
    const navigate = useNavigate();
    return (
        <SearchWrapper>
            <SearchInput
                type="text"
                placeholder="Input NFT ID..."
                value={iptValue}
                onChange={(e) => setIptValue(e.target.value)}
                onClick={() => setOpen(true)}
            />
            {iptValue && (
                <div
                    className="smallcloseicon"
                    onClick={() => {
                        setIptValue("");
                        setOpen(false);
                    }}
                >
                    <SuggestionCloseIcon />
                </div>
            )}

            <SearchButton onClick={() => navigate("/search")}>
                <SearchIcon />
            </SearchButton>
            {open && searchList.length > 0 && (
                <SearchSuggestionBox>
                    <div className="suggestionheader">
                        <div className="left">Recent Searches</div>
                        <div
                            className="right"
                            onClick={() => setSearchList([])}
                        >
                            Clear All
                        </div>
                    </div>
                    <div className="suggestionlistwrapper">
                        {searchList.map((item: any) => (
                            <div className="suggestionlistrow" key={item}>
                                <div className="left">
                                    <SuggestionSearchIcon /> {item}
                                </div>
                                <div
                                    className="right"
                                    onClick={() => handleRemove(item)}
                                >
                                    <SuggestionCloseIcon />
                                </div>
                            </div>
                        ))}
                    </div>
                </SearchSuggestionBox>
            )}
        </SearchWrapper>
    );
};

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
    padding: 2px 0;
    position: relative;
    min-width: 360px;
    .smallcloseicon {
        border-radius: 20px;
        background: var(--Lines-Divider, #383838);
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 70px;
        width: 26px;
        height: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg path {
            stroke: #fff;
        }
    }
    .left {
        svg {
            transform: scale(0.8);
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        width: 100%;
    }
`;

const SearchInput = styled.input`
    border-radius: 32px;
    background: var(--Transparent-White, rgba(255, 255, 255, 0.04));
    color: var(--Text-Tertiary, #969696);
    text-align: left;
    text-transform: capitalize;
    padding: 20px 28px;
    font: 400 16px Telegraf, sans-serif;
    border: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
        outline: 1px solid var(--Brand-Gold, #f4e0a3);
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        padding: 20px;
    }
`;

const SearchButton = styled.button`
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    background: var(--Typography-Primary-white, #fff);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    width: 56px;
    height: 56px;
    border: none;
    cursor: pointer;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        right: 4px;
    }
`;

const LogoDashboard: React.FC = () => {
    return (
        <LogoWrapper>
            <LogoImage
                loading="lazy"
                src="/images/common/LOGO.svg"
                alt="Dashboard Logo"
            />
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImage = styled.img`
    aspect-ratio: 7.58;
    object-fit: contain;
    object-position: center;
    width: 121px;
`;

const SearchSuggestionBox = styled.div`
    border-radius: 24px;
    border: 1px solid var(--Lines-Divider, #383838);
    background: var(--background-surface-1, #232323);
    position: absolute;
    top: 75px;
    width: 100%;
    padding: 24px;
    z-index: 10;
    box-sizing: border-box;
    .suggestionheader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
        .left {
            color: var(--Text-Tertiary, #969696);
            font-family: Telegraf;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
        }
        .right {
            text-align: right;
            font-family: Telegraf;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px; /* 133.333% */
            text-decoration-line: underline;
            cursor: pointer;
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
    .suggestionlistwrapper {
        .suggestionlistrow {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid #383838;
            padding-top: 8px;
            margin-top: 8px;

            cursor: pointer;
            .left {
                display: flex;
                align-items: center;
                font-size: 14px;
                svg {
                    margin-right: 10px;
                }
            }
        }
    }
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    ${RightSection} {
        ${SearchButton} {
            display: none;
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${LeftSection} {
            ${SearchWrapper} {
                display: none;
            }
        }
        ${RightSection} {
            display: flex;
            align-items: center;
            ${SearchButton} {
                position: relative;
                top: unset;
                transform: unset;
                border: 1.5px solid var(--Lines-Divider, #383838);
                display: flex;
                width: 64px;
                height: 64px;
                padding: 0;
                background: var(--background-surface-2, #2e2d2a);
                margin-right: 14px;
                svg {
                    path {
                        stroke: #fff;
                    }
                }
            }
        }
    }
`;
export default DashboardHeader;
