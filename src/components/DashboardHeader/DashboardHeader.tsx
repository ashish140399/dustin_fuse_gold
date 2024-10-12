import React from "react";
import styled from "styled-components";

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
    return (
        <Button>
            <ButtonIcon
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0db4ae9347219f8ad4c122929e6ce0f6e2c36d3366110d494115f44b25badda?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                alt="Profile"
            />
        </Button>
    );
};

const Button = styled.button`
    justify-content: center;
    align-items: center;
    border-radius: 32px;
    border: 1.5px solid var(--Lines-Divider, #383838);
    display: flex;
    width: 64px;
    height: 64px;
    padding: 0;
    background: transparent;
    cursor: pointer;
`;

const ButtonIcon = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
`;

const SearchBar: React.FC<SearchBarProps> = () => {
    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder="Input NFT ID..." />
            <SearchButton>
                <SearchIcon
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffc0ff2da41eb81f598e5eaab0e3a43584ba811db3cc6c1d35f2aa9c620ac2dd?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                    alt="Search"
                />
            </SearchButton>
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

const SearchIcon = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
`;

const LogoDashboard: React.FC = () => {
    return (
        <LogoWrapper>
            <LogoImage
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fce9b8f6e651d35ba376a555aeeea54c78e2ec54681b6b0ef7b105e4643a280c?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
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

export default DashboardHeader;
