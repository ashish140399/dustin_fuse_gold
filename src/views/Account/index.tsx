import React from "react";
import styled from "styled-components";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import { useMatch } from "react-router-dom";
import CreateAccount from "./components/Create";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
}

interface MyNFTProps {}

const Account: React.FC<MyNFTProps> = ({}) => {
    const [tabValue, setTabValue] = React.useState(0);
    const searchpathvalues = useMatch({
        path: "/search",
    });
    const searchmatch: boolean = searchpathvalues?.pathnameBase === "/search";

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    return (
        <>
            <DashboardHeader />
            <Layout>
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    <CreateAccount />
                </Box>
            </Layout>
        </>
    );
};

const Layout = styled.section`
    height: calc(100vh - 100px);
`;

export default Account;
