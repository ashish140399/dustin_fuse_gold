import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDashboard from "./views/MyDashboard";
import NFTDetailedView from "./views/NFTDetailedView/NFTDetailedView";
import DashboardHeader from "./components/DashboardHeader/DashboardHeader";

function App() {
    // return <MyDashboard />;
    return (
        <Router>
            <DashboardHeader />
            <Routes>
                <Route path="/" element={<MyDashboard />} />
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
    );
}

export default App;
