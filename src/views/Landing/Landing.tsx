import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import WhyGoldX from "./components/WhyGoldX";
import Features from "./components/Features";
import MiningRights from "./components/MiningRights";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import CallToAction from "./components/CallToAction";
import Footer from "../components/Footer/Footer";

const GoldXLandingPage: React.FC = () => {
    return (
        <PageWrapper>
            <Hero />
            <WhyGoldX />
            <Features />
            <MiningRights />
            <Testimonials />
            <Products />
            <FAQ />
            <CallToAction />
            <Footer />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    // width: 100vw;
    // overflow: hidden;
`;

export default GoldXLandingPage;
