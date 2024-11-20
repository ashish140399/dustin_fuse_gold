import React from "react";
import styled from "styled-components";
import NFTImage from "./NFTImage";
import NFTInfo from "./NFTInfo";
import PriceCard from "./PriceCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MyNFT from "../MyDashboard/components/NFTsList";
import NFTDettails from "./NFTDettails";
import NFTActivity from "./NFTActivity";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import { mobileBreakpoint } from "../../const";

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

interface NFTDetailsProps {
    imageUrl: string;
    logoUrl: string;
    name: string;
    id: string;
    owner: string;
    description: string;
    saleEndDate: string;
    currentPrice: {
        amount: string;
        currency: string;
        usdEquivalent: string;
    };
}

const NFTDetailedView: React.FC<NFTDetailsProps> = ({
    imageUrl,
    logoUrl,
    name,
    id,
    owner,
    description,
    saleEndDate,
    currentPrice,
}) => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    return (
        <>
            <DashboardHeader />
            <Layout className="paddinglayoutx">
                <StyledNFTDetails>
                    <StyledNFTImage src={imageUrl} />
                    <NFTDetailsContent>
                        <NFTInfo
                            name={name}
                            id={id}
                            owner={owner}
                            description={description}
                        />
                        <PriceCard
                            saleEndDate={saleEndDate}
                            currentPrice={currentPrice}
                        />
                    </NFTDetailsContent>
                </StyledNFTDetails>
            </Layout>
            <LayoutOptionWrapper>
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
                            <Tab label="NFT DETAILS" {...a11yProps(0)} />
                            <Tab label="NFT ACTIVITY" {...a11yProps(1)} />
                            <Tab label="BIDS" {...a11yProps(2)} />
                            <Tab
                                label="BLOCKCHAIN INFORMATION"
                                {...a11yProps(3)}
                            />
                            <Tab label="SIMILAR NFTS" {...a11yProps(4)} />
                        </Tabs>
                    </Box>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={0}
                        className="paddinglayoutx paddinglayouty"
                    >
                        <NFTDettails />
                    </CustomTabPanelWrapper>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={1}
                        className="paddinglayoutx paddinglayouty"
                    >
                        <NFTActivity />
                    </CustomTabPanelWrapper>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={2}
                        className="paddinglayoutx paddinglayouty"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo perferendis nesciunt nihil beatae fugiat
                        voluptates maiores illum ab? Pariatur exercitationem
                        laboriosam ratione, aspernatur maiores id deserunt
                        fugiat distinctio beatae tempore.
                    </CustomTabPanelWrapper>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={3}
                        className="paddinglayoutx paddinglayouty"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit optio dolores maxime aut sapiente nam esse
                        laboriosam cumque, quod, eos inventore fugiat nobis rem
                        recusandae velit incidunt itaque, adipisci autem?
                    </CustomTabPanelWrapper>
                    <CustomTabPanelWrapper
                        value={tabValue}
                        index={4}
                        className="paddinglayoutx paddinglayouty"
                    >
                        <MyNFT />
                    </CustomTabPanelWrapper>
                </Box>
            </LayoutOptionWrapper>
        </>
    );
};

const Layout = styled.div`
    background: #111111;
    padding-top: 5vh;
    padding-bottom: 5vh;
`;

const NFTDetailsContent = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // width: 45%;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        width: 100%;
        margin-top: 40px;
    }
`;
const StyledNFTImage = styled(NFTImage)``;
const StyledNFTDetails = styled.main`
    display: flex;
    gap: 20px;

    ${StyledNFTImage} {
        width: 50vw;
    }
    ${NFTDetailsContent} {
        width: 50vw;
        padding-left: 40px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        ${StyledNFTImage} {
            width: 100%;
        }
        ${NFTDetailsContent} {
            width: 100%;
            padding-left: 0px;
        }
    }
`;

const LayoutOptionWrapper = styled.div`
    @media screen and (max-width: ${mobileBreakpoint}px) {
        .MuiTabs-scroller {
            overflow-x: auto !important;
            scrollbar-width: none;
        }
    }
`;
const CustomTabPanelWrapper = styled(CustomTabPanel)`
    background: #232323;
    // padding: 40px 20px;
    width: 100%;
    box-sizing: border-box;
`;
export default NFTDetailedView;
