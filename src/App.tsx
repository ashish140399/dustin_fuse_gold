import React, { useState, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDashboard from "./views/MyDashboard";
import NFTDetailedView from "./views/NFTDetailedView/NFTDetailedView";
import GoldXLandingPage from "./views/Landing/Landing";
import FeaturesnSecurity from "./views/FeaturesnSecurity/FeaturesnSecurity";
import MiningRightsPage from "./views/MiningRights/MiningRights";
import SiteVariablesContext from "./contexts/SiteVariablesContext";
import { useWindowSize } from "@react-hook/window-size";
import Account from "./views/Account";
import Minting from "./views/Minting";
import Transfer from "./views/Transfer";
import { useAnimation } from "framer-motion";
import styled from "styled-components";

function App() {
    const [width, height] = useWindowSize();
    const [windowDimensions, setWindowDimensions] = useState<any>(null);
    useEffect(() => {
        setWindowDimensions({
            width: width,
            height: height,
        });
    }, [width, height]);
    const controls = useAnimation();
    const progressRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;

        // Animate ProductsGridScroll translation based on scroll position
        controls.start({
            transform: `translateX(-${
                (scrollPosition / maxScroll) *
                ((100 * (windowDimensions?.width ?? 0)) / 5)
            }%)`,
            transition: { type: "spring", stiffness: 100 },
        });

        // Progress bar animation
        if (progressRef.current) {
            const progress = scrollPosition / maxScroll;
            progressRef.current.style.transform = `scaleX(${progress})`;
        }
    };

    useEffect(() => {
        // Listen for scroll events
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [windowDimensions]);
    return (
        <SiteVariablesContext.Provider
            value={{ windowDimensions, setWindowDimensions }}
        >
            {" "}
            <ProgressBar ref={progressRef} />
            <Router>
                <Routes>
                    <Route path="/" element={<GoldXLandingPage />} />
                    <Route
                        path="/featuesnsecurity"
                        element={<FeaturesnSecurity />}
                    />
                    <Route path="/miningright" element={<MiningRightsPage />} />
                    <Route path="/account/create" element={<Account />} />
                    <Route path="/account/login" element={<Account />} />
                    <Route path="/account/transfer" element={<Account />} />
                    <Route path="/minting" element={<Minting />} />
                    <Route path="/transfer" element={<Transfer />} />

                    <Route path="/dashboard" element={<MyDashboard />} />
                    <Route path="/search" element={<MyDashboard />} />
                    <Route
                        path="/nftdetailedview"
                        element={
                            <NFTDetailedView
                                imageUrl="./img.png"
                                logoUrl="https://example.com/logo.png"
                                name="CryptoFantasy"
                                id="NFT123"
                                owner="Jasmin Isio"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                saleEndDate="2024-12-31"
                                currentPrice={{
                                    amount: "100,000,000",
                                    currency: "GOLDX",
                                    usdEquivalent: "1,193.06",
                                }}
                            />
                        }
                    />
                </Routes>
            </Router>
        </SiteVariablesContext.Provider>
    );
}
const ProgressBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 4px;
    background-color: #e2b666;
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.2s ease-out;
    z-index: 1000;
    width: 100%;
`;
export default App;
