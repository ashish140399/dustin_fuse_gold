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
} from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import ReferralModal from "../Modals/ReferralModal";

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
                <ProfileButton />
            </HeaderContent>
        </Header>
    );
};

const Header = styled.header`
    border-bottom: 1px solid var(--Lines-Divider, #383838);
    padding-top: 16px;
    padding-bottom: 16px;
    background: var(--Brand-Dark, #111);
    @media (max-width: 991px) {
        padding: 16px 20px;
    }
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`;

const LeftSection = styled.div`
    display: flex;
    gap: 39px;
    flex-wrap: wrap;
    align-items: center;
    @media (max-width: 991px) {
        width: 100%;
    }
`;

const ProfileButton: React.FC<ProfileButtonProps> = () => {
    const [showList, setShowList] = React.useState(false);
    const [openRefferalModal, setOpenRefferalModal] = React.useState(false);
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
                        <div className="item">
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
            {open && (
                <SearchSuggestionBox>
                    <div className="suggestionheader">
                        <div className="left">Recent Searches</div>
                        <div className="right">Clear All</div>
                    </div>
                    <div className="suggestionlistwrapper">
                        {[1, 2, 3, 4].map((item: any) => (
                            <div className="suggestionlistrow" key={item}>
                                <div className="left">
                                    <SuggestionTimeIcon /> #242414
                                </div>
                                <div className="right">
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
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
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
    @media (max-width: 991px) {
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
            padding-top: 12px;
            margin-top: 12px;
            cursor: pointer;
            .left {
                display: flex;
                align-items: center;
                svg {
                    margin-right: 10px;
                }
            }
        }
    }
`;

export default DashboardHeader;
