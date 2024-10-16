import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <TopSection>
                <LogoSection>
                    <Logo>
                        <img src="images/common/LOGO.svg" alt="" />
                    </Logo>
                    <LogoDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Metus, aliquam potenti est, volutpat justo.
                    </LogoDescription>
                </LogoSection>
                <MenuSection>
                    <MenuColumn>
                        <MenuTitle>Products</MenuTitle>
                        <MenuItem>About Goldx NFT</MenuItem>
                        <MenuItem>Exchange</MenuItem>
                    </MenuColumn>
                    <MenuColumn>
                        <MenuTitle>Browse</MenuTitle>
                        <MenuItem>fuse.gold</MenuItem>
                        <MenuItem>goldx explorer</MenuItem>
                        <MenuItem>goldx testnet</MenuItem>
                        <MenuItem>goldx dex</MenuItem>
                        <MenuItem>marketplace</MenuItem>
                        <MenuItem>minecart</MenuItem>
                        <MenuItem>xbridge</MenuItem>
                        <MenuItem>dex.gold</MenuItem>
                        <MenuItem>loanifi</MenuItem>
                    </MenuColumn>
                    <MenuColumn>
                        <MenuTitle>Legal</MenuTitle>
                        <MenuItem>Terms & privacy</MenuItem>
                        <MenuItem>Privacy Policy</MenuItem>
                    </MenuColumn>
                </MenuSection>
            </TopSection>
            <Divider />
            <BottomSection>
                <Copyright>2024 © GOLDX</Copyright>
                <SocialIcons
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a276ce9b94fc9aee6d6155b51970e19c348dc22415ef08ce0574034233e02a1f?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                    alt="Social Media Icons"
                />
            </BottomSection>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    background: #171615;
    padding: 64px 80px 32px;
    color: var(--Text-Tertiary, #969696);
    @media (max-width: 991px) {
        padding: 40px 20px;
    }
`;

const TopSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
`;

const LogoSection = styled.div`
    max-width: 300px;
`;

const Logo = styled.h2`
    font: 500 35px/1 Panchang Variable, -apple-system, Roboto, Helvetica,
        sans-serif;
    color: var(--Text-Primary, #fff);
    text-transform: uppercase;
`;

const LogoDescription = styled.p`
    font: 400 16px/24px Telegraf, sans-serif;
    margin-top: 32px;
`;

const MenuSection = styled.div`
    display: flex;
    gap: 64px;
    @media (max-width: 991px) {
        flex-wrap: wrap;
        gap: 32px;
    }
`;

const MenuColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const MenuTitle = styled.h3`
    font: 500 16px Telegraf, sans-serif;
    color: var(--Text-Primary, #fff);
`;

const MenuItem = styled.a`
    font: 400 16px Telegraf, sans-serif;
    color: var(--Text-Tertiary, #969696);
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: var(--Text-Primary, #fff);
    }
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid var(--Lines-Border, #5d5c5a);
    margin: 64px 0 32px;
`;

const BottomSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 991px) {
        flex-direction: column;
        gap: 16px;
    }
`;

const Copyright = styled.p`
    font: 400 16px Telegraf, sans-serif;
`;

const SocialIcons = styled.img`
    height: 32px;
`;

export default Footer;
