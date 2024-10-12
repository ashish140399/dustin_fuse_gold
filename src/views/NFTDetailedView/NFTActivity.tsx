import React from "react";
import styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Box, TableContainer, TableContainerProps } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface NFTsListProps {}
interface StyledTableContainerProps extends TableContainerProps {
    // any additional props here
}
const NFTActivity: React.FC<NFTsListProps> = ({}) => {
    return (
        <Layout>
            <StyledTableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>EVENT NAME</TableCell>
                            <TableCell align="left">PRICE</TableCell>
                            <TableCell align="left">FROM</TableCell>
                            <TableCell align="left">TO</TableCell>
                            <TableCell align="left">DATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                            <TableRow
                                key={item}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    Listing
                                </TableCell>
                                <TableCell align="left">
                                    <div className="price">
                                        100,000,000 <span>GOLDX</span>
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    <div className="gradcolor">Jasmin Isio</div>
                                </TableCell>
                                <TableCell align="left">
                                    <div className="gradcolor">
                                        User Name Example
                                    </div>
                                </TableCell>
                                <TableCell align="left">
                                    28 July 2024 at 1:47 AM
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </Layout>
    );
};

const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
    margin: -16px;
`;

const StyledTableContainer = styled(TableContainer)<StyledTableContainerProps>`
    .MuiTableHead-root {
        .MuiTableRow-root {
            .MuiTableCell-root {
                color: var(--Text-Inactive, #707070);
                font-family: Telegraf;
                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                line-height: 16px; /* 133.333% */
                border-bottom: 1px solid #383838 !important;
            }
        }
    }
    .MuiTableBody-root {
        .MuiTableRow-root {
            .MuiTableCell-root {
                color: #fff;
                font-family: Telegraf;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 16px; /* 133.333% */
                border-bottom: 1px solid #383838 !important;
            }
        }
    }
    .gradcolor {
        overflow: hidden;
        text-overflow: ellipsis;

        /* P2/Regular */
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        background: var(--brand-gold);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export default NFTActivity;
