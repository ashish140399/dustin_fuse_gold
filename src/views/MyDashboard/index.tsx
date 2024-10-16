import React from "react";
import styled from "styled-components";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MyNFT from "../components/NFTsList";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    className?: string;
}

interface MyNFTProps {}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, className, ...other } = props;

    return (
        <div
            className={className}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const MyDashboard: React.FC<MyNFTProps> = ({}) => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    return (
        <>
            <DashboardHeader />
            <Layout>
                <WelcomeHeader username="John" />

                <Box sx={{ width: "100%", boxSizing: "border-box" }}>
                    <Box
                        sx={{
                            borderBottom: 1,
                            borderColor: "divider",
                            background: "var(--Brand-Dark, #111);",
                        }}
                        className="paddinglayoutx"
                    >
                        <Tabs
                            value={tabValue}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                        >
                            <Tab label="MY NFTS" {...a11yProps(0)} />
                            <Tab label="GOLDX STATS" {...a11yProps(1)} />
                            <Tab label="LEADERBOARD" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={0}
                        className="paddinglayoutx paddinglayouty"
                    >
                        <MyNFT />
                    </CustomTabPanelWrapper>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={1}
                        className="paddinglayoutx paddinglayouty"
                    >
                        Item Two
                    </CustomTabPanelWrapper>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={2}
                        className="paddinglayoutx paddinglayouty"
                    >
                        Item Three
                    </CustomTabPanelWrapper>
                </Box>
            </Layout>
        </>
    );
};

const Layout = styled.section``;
const CustomTabPanelWrapper = styled(CustomTabPanel)`
    background: #232323;
    // padding: 40px 20px;
    width: 100%;
    box-sizing: border-box;
`;

export default MyDashboard;
