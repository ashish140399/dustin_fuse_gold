import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import WhyShouldYouBuy from "./components/WhyShouldYouBuy";
import SeeEcosystem from "./components/SeeEcosystem";
import MintingInterest from "./components/MintingInterest";
import Testimonials from "./components/Testimonials";
import ProtectPast from "./components/ProtectPast";
import MintingBuy from "./components/MintingBuy";
import Footer from "../components/Footer/Footer";
import SupportEngland from "./components/SupportEngland";
import ProductHistory from "./components/ProductHistory";

const MiningRightsPage: React.FC = () => {
    return (
        <PageWrapper>
            <Hero />
            <WhyShouldYouBuy />
            <SeeEcosystem />
            <ProductHistory />
            <MintingInterest />
            <SupportEngland />
            <ProtectPast />
            <Testimonials />
            <MintingBuy />
            <Footer />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export default MiningRightsPage;
