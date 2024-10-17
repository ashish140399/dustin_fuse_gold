import React, { useContext } from "react";
import styled from "styled-components";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import { ArrowTransformIcon, HamburgerIcon } from "../../../assets/icons";
import { useWindowSize } from "@react-hook/window-size";
import { mobileBreakpoint } from "../../../const";
import SiteVariablesContext from "../../../contexts/SiteVariablesContext";

const NavBar: React.FC = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    return (
        <>
            {windowDimensions.width > mobileBreakpoint ? (
                <HeaderWrapper>
                    <Nav>
                        <NavList>
                            <NavItem active>Home</NavItem>
                            <NavItem>About Goldx NFT</NavItem>
                            <NavItem>
                                Browse
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/70021bc9e619c40f487fd312cf0a65ee564965a43aa0526cc277fc2d8463ae8a?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                                    alt="Browse icon"
                                />
                            </NavItem>
                            <NavItem>Exchange</NavItem>
                        </NavList>
                    </Nav>
                    <ButtonGroup>
                        <ContactButton>Contact Us</ContactButton>
                        <SignUpButton>
                            <ActionButton
                                label="Sign Up"
                                variant="primary"
                                className="btnwidth100"
                                // @ts-ignore
                                icon={<ArrowTransformIcon />}
                            />
                        </SignUpButton>
                    </ButtonGroup>
                </HeaderWrapper>
            ) : (
                <MobileWrapper>
                    <div className="sitelogo">
                        <img src="images/common/LOGO.svg" alt="" />
                    </div>
                    <div className="hamicon">
                        <HamburgerIcon />
                    </div>
                </MobileWrapper>
            )}
        </>
    );
};

const MobileWrapper = styled.header`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 14px 40px 20px;
`;

const HeaderWrapper = styled.header`
    display: flex;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const Nav = styled.nav`
    border-radius: 32px;
    background: var(--background-surface-2, #2e2d2a);
    backdrop-filter: blur(32px);
    align-self: start;
    display: flex;
    min-height: 64px;
    flex-direction: column;
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    justify-content: center;
    // flex-grow: 1;
    // flex-basis: 0;
    width: fit-content;
    padding: 4px;
    width: 41vw;
    font: 400 16px Telegraf, sans-serif;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const NavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

const NavItem = styled.li<{ active?: boolean }>`
    align-self: stretch;
    border-radius: 32px;
    gap: 10px;
    margin: auto 0;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    background: ${(props) =>
        props.active ? "var(--Typography-Primary-white, #fff)" : "transparent"};
    color: ${(props) => (props.active ? "var(--Brand-Dark, #111)" : "inherit")};

    @media (max-width: 991px) {
        white-space: initial;
        padding: 0 20px;
    }

    img {
        aspect-ratio: 1;
        object-fit: contain;
        object-position: center;
        width: 16px;
        align-self: stretch;
        margin: auto 0;
    }
`;

const ContactButton = styled.button`
    align-self: stretch;
    border-radius: 32px;
    border: 1.5px solid var(--Lines-Border, #5d5c5a);
    gap: 8px;
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    text-align: center;
    text-transform: capitalize;
    width: 200px;
    padding: 20px 32px;
    font: 500 16px Telegraf, sans-serif;
    background: none;
    cursor: pointer;

    @media (max-width: 991px) {
        padding: 0 20px;
    }
`;

const SignUpButton = styled.div`
    width: 200px;
`;
const ButtonGroup = styled.div`
    align-self: start;
    display: flex;
    min-height: 64px;
    align-items: start;
    gap: 16px;
    justify-content: start;
    width: 30vw;
    ${ContactButton} {
        width: 50%;
    }
    ${SignUpButton} {
        width: 50%;
    }
`;
export default NavBar;
