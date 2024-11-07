import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import NFTCard from "../../components/NFTCard/NFTCard";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    OutlinedInput,
    InputAdornment,
    AccordionSummary,
    Accordion,
    AccordionDetails,
} from "@mui/material";
import {
    ArrowDownIcon,
    ArrowTransformIcon,
    BackArrowIcon,
    CustomDropdownIcon,
    SuggestionCloseIcon,
    UploadIcon,
} from "../../assets/icons";
import ActionButton from "../../components/Buttons/ActionButton/ActionButton";
import Dropzone, { Accept } from "react-dropzone";
import AccountCreatedModal from "../../components/Modals/AccountCreatedModal";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import UploadImage from "./UploadImage";
import SiteVariablesContext from "../../contexts/SiteVariablesContext";
import { mobileBreakpoint } from "../../const";
import NftTransfferdModal from "../../components/Modals/NftTransfferdModal";

interface NFTsListProps {}

const DataContainer = styled.div`
    .MuiAccordion-root {
        background: transparent;
        box-shadow: none;
        margin: 0 !important;
        .MuiAccordionSummary-root {
            margin-bottom: 20px;
            padding: 0;
            .MuiAccordionSummary-content {
                border-radius: 32px;
                background: var(--Brand-Dark, #111);
                color: #fff;
                padding: 20px 24px;
                margin: 0;
            }
        }
        .MuiAccordionSummary-expandIconWrapper {
            width: 64px;
            height: 64px;
            border-radius: 32px;
            background: var(--Brand-Dark, #111);
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            margin-left: 14px;
        }
        .MuiAccordionDetails-root {
            border-radius: 24px;
            background: var(--Brand-Dark, #111);
            color: #fff;
            padding: 24px;
            margin-bottom: 20px;
        }
    }
`;
const DataBox = styled.div`
    margin-bottom: 20px;
    &::last-child {
        margin-bottom: 0;
    }
    .MuiOutlinedInput-root {
        width: 100%;
        .MuiOutlinedInput-notchedOutline {
            border-radius: 20px;
        }
    }
    .ddicon {
        background: transparent;
    }
`;
const Label = styled.div`
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));

    /* S1/Medium */
    font-family: Telegraf;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    margin-bottom: 10px;
    span {
        color: var(--Text-Tertiary, var(--Typography-Primary-white, #969696));
    }
`;
const InputBox = styled.input`
    border-radius: 18px;
    background: Transparent;
    border: 2px solid rgba(255, 255, 255, 0.04);
    color: var(--Text-Tertiary, #969696);
    text-align: left;
    text-transform: capitalize;
    padding: 20px 28px;
    font: 400 16px Telegraf, sans-serif;
    width: 100%;
    box-sizing: border-box;
`;
const StyledOutlinedInput = styled(OutlinedInput)`
    width: 100%;
    border-radius: 18px !important;
    overflow: hidden !important;
    .MuiInputBase-root {
        width: 100%;
    }
    .MuiSvgIcon-root {
        color: #fff !important;
        transform: translateX(-10px);
    }
    fieldset {
        border-radius: 18px !important;
        background: Transparent;
        border: 2px solid rgba(255, 255, 255, 0.04) !important;
    }
`;
const PageHeading = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
    position: relative;
`;
const PageTitle = styled.div`
    color: var(--UI-White, var(--Typography-Primary-white, #fff));
    font-feature-settings: "liga" off, "clig" off;
    font-family: Conthrax;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 114.286% */
    text-transform: uppercase;
`;
const PageDescription = styled.div`
    color: var(--Text-Secondary, #cfcfcf);

    /* P2/Regular */
    font-family: Telegraf;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin-top: 10px;
`;

const PageRightColumn = () => {
    const [file, setFile] = React.useState<string | ArrayBuffer | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const handleImgDrop = (acceptedFiles: any) => {
        const file = acceptedFiles[0];

        if (file) {
            // Create a URL for the file
            const fileUrl = URL.createObjectURL(file);

            // Load the image to check its dimensions
            const img = new Image();
            img.onload = () => {
                const { width, height } = img;

                if (width >= 400 && height >= 400) {
                    setFile(file);
                    setPreviewUrl(fileUrl);
                } else {
                    alert("Image must be at least 400px by 400px");
                    URL.revokeObjectURL(fileUrl); // Clean up the URL object
                }
            };
            img.onerror = () => {
                alert("Failed to load image");
                URL.revokeObjectURL(fileUrl); // Clean up the URL object
            };
            img.src = fileUrl;
        }
    };

    const acceptedFileTypes = {
        "image/jpeg": [".jpg", ".jpeg"],
        "image/png": [".png"],
    };
    const [closeIconWidth, setCloseIconWidth] = useState(0);
    const cardWrapperRef = useRef(null);
    const { windowDimensions } = useContext(SiteVariablesContext);

    useEffect(() => {
        // Function to update width based on window dimensions
        const updateWidth = () => {
            const width = cardWrapperRef.current
                ? // @ts-ignore
                  cardWrapperRef.current.offsetWidth
                : 0;

            setCloseIconWidth(width / 11); // Example: adjust bottom icon width calculation as needed
        };
        updateWidth();
    }, [windowDimensions]); // Dependency on windowDimensions width and height
    return (
        <RightColumn
            ref={cardWrapperRef}
            closeiconsvgWidth={`${closeIconWidth}px`}
        >
            <div className="imgwrapper">
                <div
                    className="boxWrapper"
                    style={{
                        background: file ? "transparent" : "#2e2d2a",
                    }}
                >
                    <div className="dropzonewrapper">
                        <Dropzone
                            onDrop={handleImgDrop}
                            accept={acceptedFileTypes}
                        >
                            {({ getRootProps, getInputProps }: any) => (
                                <div
                                    {...getRootProps()}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                    }}
                                >
                                    {previewUrl ? (
                                        <div className="imguploadedwrapper">
                                            <div
                                                className="closebutton"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setFile(null);
                                                    setPreviewUrl("");
                                                }}
                                            >
                                                <SuggestionCloseIcon />
                                            </div>
                                            <UploadImage
                                                src={previewUrl}
                                                alt="Image"
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            {" "}
                                            <input
                                                {...getInputProps()}
                                                multiple={false}
                                            />
                                            <div className="uploadtext">
                                                <div className="uploadicon">
                                                    <UploadIcon />
                                                </div>
                                                <h3>
                                                    Drag & Drop to upload your
                                                    NFT{" "}
                                                </h3>
                                                <div className="description">
                                                    JPG, PNG, at least 400рx x
                                                    400px
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </Dropzone>
                    </div>
                </div>
            </div>
        </RightColumn>
    );
};
const Minting: React.FC<NFTsListProps> = ({}) => {
    const [stepno, setStepno] = React.useState(1);
    const [openAccountCreatedModal, setOpenAccountCreatedModal] =
        React.useState(false);
    const [selectdraft, setSelectdraft] = React.useState("");
    const [nftcollection, setNftcollection] = React.useState("");
    const [blockchainnetwork, setBlockchainnetwork] = React.useState("");
    const [category, setCategory] = React.useState("");
    const { windowDimensions } = useContext(SiteVariablesContext);
    return (
        <>
            <DashboardHeader />
            <Layout className="paddinglayoutx paddinglayouty">
                <InformationRow>
                    <LeftColumn>
                        <TopColumn>
                            <PageControls>
                                <PageControlLeft>
                                    <div className="backbutton">
                                        <BackArrowIcon /> <span>Go Back</span>
                                    </div>
                                </PageControlLeft>
                                <PageControlRight></PageControlRight>
                            </PageControls>

                            <PersaonalDetailBoxWrapper>
                                <ContentWrapper>
                                    <PageHeading>
                                        <PageTitle>Mint NFT</PageTitle>
                                        <PageDescription>
                                            Upload your atwork to your profile.
                                        </PageDescription>
                                    </PageHeading>
                                    {windowDimensions?.width <=
                                        mobileBreakpoint && <PageRightColumn />}
                                    <DataContainer>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ArrowDownIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                Select Draft
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <DataBox>
                                                    <Label>First Name</Label>
                                                    <Select
                                                        value={selectdraft}
                                                        onChange={(e) =>
                                                            setSelectdraft(
                                                                e.target.value
                                                            )
                                                        }
                                                        displayEmpty
                                                        renderValue={
                                                            selectdraft !== ""
                                                                ? undefined
                                                                : () => (
                                                                      <span
                                                                          style={{
                                                                              color: "#fff",
                                                                          }}
                                                                      >
                                                                          Name
                                                                      </span>
                                                                  )
                                                        }
                                                        IconComponent={
                                                            CustomDropdownIcon
                                                        }
                                                    >
                                                        <MenuItem value={1}>
                                                            Option 1
                                                        </MenuItem>
                                                        <MenuItem value={2}>
                                                            Option 2
                                                        </MenuItem>
                                                        <MenuItem value={3}>
                                                            Option 3
                                                        </MenuItem>
                                                    </Select>
                                                </DataBox>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ArrowDownIcon />}
                                            >
                                                NFT Characteristics
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <DataBox>
                                                    <Label>NFT Title</Label>
                                                    <InputBox placeholder="Name" />
                                                </DataBox>
                                                <DataBox>
                                                    <Label>
                                                        NFT Collection
                                                    </Label>
                                                    <Select
                                                        value={nftcollection}
                                                        onChange={(e) =>
                                                            setNftcollection(
                                                                e.target.value
                                                            )
                                                        }
                                                        displayEmpty
                                                        renderValue={
                                                            nftcollection !== ""
                                                                ? undefined
                                                                : () => (
                                                                      <span
                                                                          style={{
                                                                              color: "#fff",
                                                                          }}
                                                                      >
                                                                          Name
                                                                      </span>
                                                                  )
                                                        }
                                                        IconComponent={
                                                            CustomDropdownIcon
                                                        }
                                                    >
                                                        <MenuItem value={1}>
                                                            Option 1
                                                        </MenuItem>
                                                        <MenuItem value={2}>
                                                            Option 2
                                                        </MenuItem>
                                                        <MenuItem value={3}>
                                                            Option 3
                                                        </MenuItem>
                                                    </Select>
                                                </DataBox>
                                                <DataBox>
                                                    <Label>
                                                        Blockchain Network
                                                    </Label>
                                                    <Select
                                                        value={
                                                            blockchainnetwork
                                                        }
                                                        onChange={(e) =>
                                                            setBlockchainnetwork(
                                                                e.target.value
                                                            )
                                                        }
                                                        displayEmpty
                                                        renderValue={
                                                            blockchainnetwork !==
                                                            ""
                                                                ? undefined
                                                                : () => (
                                                                      <span
                                                                          style={{
                                                                              color: "#fff",
                                                                          }}
                                                                      >
                                                                          Name
                                                                      </span>
                                                                  )
                                                        }
                                                        IconComponent={
                                                            CustomDropdownIcon
                                                        }
                                                    >
                                                        <MenuItem value={1}>
                                                            Option 1
                                                        </MenuItem>
                                                        <MenuItem value={2}>
                                                            Option 2
                                                        </MenuItem>
                                                        <MenuItem value={3}>
                                                            Option 3
                                                        </MenuItem>
                                                    </Select>
                                                </DataBox>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ArrowDownIcon />}
                                            >
                                                Add Description
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <DataBox>
                                                    <Label>Category</Label>
                                                    <Select
                                                        value={category}
                                                        onChange={(e) =>
                                                            setCategory(
                                                                e.target.value
                                                            )
                                                        }
                                                        displayEmpty
                                                        renderValue={
                                                            category !== ""
                                                                ? undefined
                                                                : () => (
                                                                      <span
                                                                          style={{
                                                                              color: "#fff",
                                                                          }}
                                                                      >
                                                                          Name
                                                                      </span>
                                                                  )
                                                        }
                                                        IconComponent={
                                                            CustomDropdownIcon
                                                        }
                                                    >
                                                        <MenuItem value={1}>
                                                            Option 1
                                                        </MenuItem>
                                                        <MenuItem value={2}>
                                                            Option 2
                                                        </MenuItem>
                                                        <MenuItem value={3}>
                                                            Option 3
                                                        </MenuItem>
                                                    </Select>
                                                </DataBox>
                                                <DataBox>
                                                    <Label>
                                                        Extra Utility{" "}
                                                        <span>Optional</span>
                                                    </Label>
                                                    <InputBox placeholder="Extra Utility" />
                                                </DataBox>
                                            </AccordionDetails>
                                        </Accordion>
                                    </DataContainer>
                                </ContentWrapper>
                            </PersaonalDetailBoxWrapper>
                        </TopColumn>
                        <BottomColumn>
                            <div className="leftcontrol">
                                <ActionButton
                                    label="Save as Draft"
                                    variant="secondary"
                                    className="btnwidth100"
                                    // onClick={() => setStepno(stepno + 1)}
                                    // @ts-ignore
                                    icon={<ArrowTransformIcon />}
                                />
                            </div>
                            <div className="rightcontrol">
                                <ActionButton
                                    label="Next"
                                    variant="primary"
                                    className="btnwidth100"
                                    onClick={() =>
                                        setOpenAccountCreatedModal(true)
                                    }
                                    // @ts-ignore
                                    icon={<ArrowTransformIcon />}
                                />
                            </div>
                        </BottomColumn>
                    </LeftColumn>
                    {windowDimensions?.width > mobileBreakpoint && (
                        <PageRightColumn />
                    )}
                </InformationRow>
            </Layout>
            <NftTransfferdModal
                type="mint"
                modalopen={openAccountCreatedModal}
                handleModal={setOpenAccountCreatedModal}
            />
        </>
    );
};

const PageControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;
const PageControlLeft = styled.div`
    .backbutton {
        display: flex;
        align-items: center;
        cursor: pointer;
        svg {
            margin-right: 10px;
        }
        span {
            /* P2/Regular */
            font-family: Telegraf;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            text-decoration-line: underline;
            background: var(
                --Brand-Gold,
                radial-gradient(
                    458.07% 144.86% at 13.25% 21.87%,
                    #f4e0a3 0%,
                    #dcbc65 37.37%,
                    #ca9f43 63.89%,
                    #fef0a0 79.39%,
                    #8e5f1e 100%
                )
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: underline;
        }
    }
`;
const PageControlRight = styled.div``;

const LeftColumn = styled.div`
    box-sizing: border-box;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const TopColumn = styled.div``;
const BottomColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftcontrol {
        width: calc(50% - 10px);
    }
    .rightcontrol {
        width: calc(50% - 10px);
    }
`;
interface WrapperProp {
    closeiconsvgWidth?: string;
}
const RightColumn = styled.div<WrapperProp>`
    width: 50%;
    max-height: calc(100vh - 100px);
    .boxWrapper {
        position: absolute;
        top: 0;
        padding-top: 100%;
        width: 100%;
        border-radius: 24px;
        background: #2e2d2a;
    }
    .imgwrapper {
        border-radius: 24px;
        padding-top: 100%;
        width: 100%;
        position: relative;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .dropzonewrapper {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
        }

        .dropzone {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 2px dashed #ccc;
            padding: 20px;
            text-align: center;
            box-sizing: border-box;
        }
        .imguploadedwrapper {
            position: relative;
            .closebutton {
                border-radius: 20px;
                background: var(--Lines-Divider, #383838);
                position: absolute;
                border-radius: 50%;
                top: 0px;
                right: 0px;
                width: ${(props) => props.closeiconsvgWidth || "26px"};
                height: ${(props) => props.closeiconsvgWidth || "26px"};
                // width: 53px;
                // height: 53px;
                z-index: 10;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                svg path {
                    stroke: #fff;
                }
            }
        }
        .uploadtext {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            h3 {
                color: var(
                    --Text-Primary,
                    var(--Typography-Primary-white, #fff)
                );
                text-align: center;
                font-family: Conthrax;
                font-size: 24px;
                font-style: normal;
                font-weight: 600;
                line-height: 32px;
                text-transform: uppercase;
                margin: 0;
                margin-bottom: 12px;
            }
            .description {
                color: var(--Text-Secondary, #cfcfcf);
                text-align: center;
                font-family: Telegraf;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 24px;
            }
            .uploadicon {
                width: 144px;
                height: 144px;
                border-radius: 80px;
                background: var(--Transparent-White, rgba(255, 255, 255, 0.04));
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 40px;
            }
        }
    }
`;

const BoxWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    .cardbg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
`;
const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
const PersaonalDetailBoxWrapper = styled(BoxWrapper)`
    ${DataContainer} {
        .flexbox {
            display: flex;
            justify-content: space-between;
            ${DataBox} {
                width: calc(50% - 10px);
            }
        }
    }
`;
const CABoxWrapper = styled(BoxWrapper)``;

const InformationRow = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    ${LeftColumn} {
        width: 50%;
    }
`;
const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${InformationRow} {
            flex-direction: column-reverse;
            ${LeftColumn} {
                width: 100%;
                padding-right: 0;
                ${RightColumn} {
                    width: 100%;
                    margin-bottom: 30px;
                }
            }
        }
    }
`;
export default Minting;
