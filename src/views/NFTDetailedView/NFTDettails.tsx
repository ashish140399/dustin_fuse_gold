import React from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
interface NFTsListProps {}

const NFTDettails: React.FC<NFTsListProps> = ({}) => {
    return (
        <Layout>
            <NFTDetailRow>
                <NFTDetailBox>
                    <Label>Characteristics</Label>
                    <Value>Characteristic Name</Value>
                </NFTDetailBox>
                <NFTDetailBox>
                    <Label>Category</Label>
                    <Value>[FORTG] fortuna.gold</Value>
                </NFTDetailBox>
            </NFTDetailRow>
            <NFTDetailRow>
                <NFTDetailBox>
                    <Label>Class</Label>
                    <Value>Miner</Value>
                </NFTDetailBox>
                <NFTDetailBox>
                    <Label>Blockchain Network</Label>
                    <Value>GOLDX</Value>
                </NFTDetailBox>
            </NFTDetailRow>
            <NFTDetailRow>
                <NFTDetailBox>
                    <Label>Power Level</Label>
                    <Value>0.0072%</Value>
                </NFTDetailBox>
            </NFTDetailRow>
        </Layout>
    );
};

const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
`;

const NFTDetailRow = styled.div`
    display: flex;
    align-items: Center;
    justify-content: space-between;
    border-bottom: 1px solid #383838;
    padding-bottom: 20px;
    margin-bottom: 20px;
    &:last-child {
        border-bottom: 0;
    }
`;

const NFTDetailBox = styled.div`
    display: flex;
    align-items: Center;
    justify-content: space-between;
    width: calc(50% - 30px);
`;
const Label = styled.div`
    color: var(--Text-Tertiary, #969696);

    /* P2/Regular */
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`;
const Value = styled.div`
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    text-align: right;

    /* P2/Regular */
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
`;

export default NFTDettails;
