import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Vaulting from "./components/Vaulting";
import MiningRights from "./components/MiningRights";
import ProtectKey from "./components/ProtectKey";
import Footer from "../components/Footer/Footer";
import ProofOfReserve from "./components/ProofOfReserve";

const FeaturesnSecurity: React.FC = () => {
    return (
        <PageWrapper>
            <Hero />
            <Vaulting />
            <ProofOfReserve />
            <ProtectKey />
            <MiningRights />
            <Footer />
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export default FeaturesnSecurity;
