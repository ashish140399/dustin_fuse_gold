import React, { useState, useEffect } from "react";
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

function App() {
    const [width, height] = useWindowSize();
    const [windowDimensions, setWindowDimensions] = useState<any>(null);
    useEffect(() => {
        setWindowDimensions({
            width: width,
            height: height,
        });
    }, [width, height]);

    return (
        <SiteVariablesContext.Provider
            value={{ windowDimensions, setWindowDimensions }}
        >
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

export default App;
