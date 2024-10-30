import React, { useContext } from "react";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";
import { mobileBreakpoint } from "../../../const";
import { AccordionMinusIcon, AccordionPlusIcon } from "../../../assets/icons";

const menuItems = {
    products: {
        title: "Product",
        menulist: [
            { label: "About Goldx NFT", href: "#" },
            { label: "Exchange", href: "#" },
        ],
    },
    browse: {
        title: "Browse",
        menulist: [
            { label: "fuse.gold", href: "#" },
            { label: "goldx explorer", href: "#" },
            { label: "goldx testnet", href: "#" },
            { label: "goldx dex", href: "#" },
            { label: "marketplace", href: "#" },
            { label: "minecart", href: "#" },
            { label: "xbridge", href: "#" },
            { label: "dex.gold", href: "#" },
            { label: "loanifi", href: "#" },
        ],
    },
    legal: {
        title: "Legal",
        menulist: [
            { label: "Terms & privacy", href: "#" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
};

const MenuItemsDesktop: React.FC = () => {
    return (
        <MenuSection>
            {Object.values(menuItems).map((item, index) => {
                return (
                    <MenuColumn key={index}>
                        <MenuTitle>{item.title}</MenuTitle>
                        {item.menulist.map((list, indexlist) => {
                            return (
                                <MenuColumn key={indexlist}>
                                    <MenuItem href={list.href}>
                                        {list.label}
                                    </MenuItem>
                                </MenuColumn>
                            );
                        })}
                    </MenuColumn>
                );
            })}
        </MenuSection>
    );
};

const MenuItemsMobileAccordion: React.FC = ({ menu }: any) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Accordion
            expanded={expanded === `panel${menu.title}`}
            onChange={handleChange(`panel${menu.title}`)}
        >
            <AccordionSummary
                expandIcon={
                    expanded === `panel${menu.title}` ? (
                        <AccordionMinusIcon />
                    ) : (
                        <AccordionPlusIcon />
                    )
                }
                aria-controls={`panel${menu.title}-content`}
                id={`panel${menu.title}-header`}
            >
                {menu.title}
            </AccordionSummary>
            <AccordionDetails>
                {menu.menulist.map((list: any, indexlist: number) => {
                    return (
                        <MenuColumn key={indexlist}>
                            <MenuItem href={list.href}>{list.label}</MenuItem>
                        </MenuColumn>
                    );
                })}
            </AccordionDetails>
        </Accordion>
    );
};
const MenuItemsMobile: React.FC = () => {
    return (
        <MenuSectionMobile>
            {Object.values(menuItems).map((item, index) => {
                return (
                    // @ts-ignore
                    <MenuItemsMobileAccordion key={index} menu={item} />
                );
            })}
        </MenuSectionMobile>
    );
};
const Footer: React.FC = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    return (
        <FooterWrapper>
            <TopSection>
                <LogoSection>
                    <Logo>
                        <img src="/images/common/LOGO.svg" alt="" />
                    </Logo>
                    <LogoDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Metus, aliquam potenti est, volutpat justo.
                    </LogoDescription>
                </LogoSection>
                {windowDimensions?.width > mobileBreakpoint ? (
                    <MenuItemsDesktop />
                ) : (
                    <MenuItemsMobile />
                )}
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
    a {
    }
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
        // flex-direction: column;
        gap: 16px;
    }
`;

const Copyright = styled.p`
    font: 400 16px Telegraf, sans-serif;
`;

const SocialIcons = styled.img`
    height: 32px;
`;
const MenuSectionMobile = styled(MenuSection)`
    flex-direction: column;
    gap: 0;
    width: 100%;

    .MuiAccordionSummary-content {
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
        font-feature-settings: "liga" off, "clig" off;
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
        margin: 25px 0 !important;
    }
    .MuiAccordion-root {
        background: transparent !important;
        border-bottom: 1px solid var(--Lines-Divider, #383838);
        .MuiAccordionSummary-root {
            padding: 0 !important;
        }
        &:last-child {
            border-bottom: 0;
            .MuiAccordionSummary-content {
                margin-bottom: 0 !important;
            }
        }
    }
    ${MenuColumn} {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`;

export default Footer;
