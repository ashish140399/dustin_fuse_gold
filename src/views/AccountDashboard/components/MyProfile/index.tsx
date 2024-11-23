import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import {
    ArrowTransformIcon,
    SuggestionCloseIcon,
    UploadIcon,
} from "../../../../assets/icons";
import Dropzone, { Accept } from "react-dropzone";
import { mobileBreakpoint } from "../../../../const";
import ActionButton from "../../../../components/Buttons/ActionButton/ActionButton";
import UploadImage from "../../../Minting/UploadImage";

interface NFTsListProps {}

const MyProfile: React.FC<NFTsListProps> = ({}) => {
    const [activeButtons, setActiveButtons] = useState("Edit Profile");

    const buttons = ["Edit Profile", "Withdraw", "Transaction", "Settings"];

    const handleButtonClick = (buttonName: string) => {
        setActiveButtons(buttonName);
    };

    const [previewUrl, setPreviewUrl] = useState("/images/common/cover.png");
    const [userpreviewUrl, setUserpreviewUrl] = useState(
        "/images/common/user.png"
    );
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
    const handleUserImgDrop = (acceptedFiles: any) => {
        const file = acceptedFiles[0];

        if (file) {
            // Create a URL for the file
            const fileUrl = URL.createObjectURL(file);
            console.log(fileUrl);
            // Load the image to check its dimensions
            const img = new Image();
            img.onload = () => {
                const { width, height } = img;

                if (width >= 200 && height >= 200) {
                    setUserpreviewUrl(fileUrl);
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
    return (
        <Layout className="paddinglayoutx paddinglayouty">
            {" "}
            <PageHeading>
                <PageTitle>My Profile</PageTitle>
                <PageDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </PageDescription>
            </PageHeading>
            <OptionsWrapper>
                <SelectBoxWrapper>
                    {buttons.map((buttonName) => (
                        <MuiButtonStyle
                            key={buttonName}
                            variant="contained"
                            className={
                                activeButtons == buttonName ? "active" : ""
                            }
                            onClick={() => handleButtonClick(buttonName)}
                        >
                            {buttonName}
                        </MuiButtonStyle>
                    ))}
                </SelectBoxWrapper>
            </OptionsWrapper>
            <ProfileWrapper>
                <Cover>
                    <Dropzone onDrop={handleImgDrop} accept={acceptedFileTypes}>
                        {({ getRootProps, getInputProps }: any) => (
                            <div
                                {...getRootProps()}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                {
                                    <div className="imguploadedwrapper">
                                        <div className="editbutton">
                                            <img
                                                src="/images/common/icons/edit.svg"
                                                className="editicon"
                                                alt=""
                                            />
                                            <input
                                                {...getInputProps()}
                                                multiple={false}
                                            />
                                        </div>
                                        <img
                                            src={previewUrl}
                                            className="coverimg"
                                            alt=""
                                        />
                                    </div>
                                }
                            </div>
                        )}
                    </Dropzone>
                </Cover>
                <UserImg>
                    <Dropzone
                        onDrop={handleUserImgDrop}
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
                                {
                                    <div className="imguploadedwrapper">
                                        <div className="editbutton">
                                            <img
                                                src="/images/common/icons/edit.svg"
                                                className="editicon"
                                                alt=""
                                            />
                                            <input
                                                {...getInputProps()}
                                                multiple={false}
                                            />
                                        </div>
                                        <img
                                            src={userpreviewUrl}
                                            className="userimg"
                                            alt=""
                                        />
                                    </div>
                                }
                            </div>
                        )}
                    </Dropzone>
                </UserImg>
            </ProfileWrapper>
            <DataRows>
                <LeftColumn>
                    <div className="title">General Information</div>
                    <div className="label">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do...
                    </div>
                </LeftColumn>

                <RightColumn>
                    <DataContainer>
                        <div className="flexbox">
                            <DataBox>
                                <Label>First Name</Label>
                                <InputBox placeholder="John" />
                            </DataBox>
                            <DataBox>
                                <Label>Last Name</Label>
                                <InputBox placeholder="Doe" />
                            </DataBox>
                        </div>
                        <DataBox>
                            <Label
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                Biography <span> 0 / 1,000</span>
                            </Label>
                            <TextAreaBox placeholder="Your Notes..." rows={4} />
                        </DataBox>
                    </DataContainer>
                </RightColumn>
            </DataRows>
            <DataRows>
                <LeftColumn>
                    <div className="title">Contact Information</div>
                    <div className="label">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do...
                    </div>
                </LeftColumn>

                <RightColumn>
                    <DataContainer>
                        <DataBox>
                            <Label>Email Address</Label>
                            <InputBox placeholder="johndoe@mail.com" />
                        </DataBox>
                        <DataBox>
                            <Label>Website Link</Label>
                            <InputBox placeholder="https://" />
                        </DataBox>
                        <DataBox>
                            <Label>Wallet Address</Label>
                            <InputBox placeholder="Your Wallet Address" />
                        </DataBox>
                    </DataContainer>
                    <ActionButton
                        label="Save Changes"
                        variant="primary"
                        className="btnwidth100"
                        // @ts-ignore
                        icon={<ArrowTransformIcon />}
                    />
                </RightColumn>
            </DataRows>
        </Layout>
    );
};

const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: row;
        overflow-x: auto;
        scrollbar-width: none;
        white-space: nowrap;
    }
`;

const MuiButtonStyle = styled(Button)`
    border-radius: 100px !important;
    padding: 14px 28px !important;
    background: var(--background-surface-2, #2e2d2a) !important;
    color: var(--Text-Tertiary, #969696) !important;
    font-family: "Telegraf", sans-serif !important;
    text-transform: none !important;
    box-shadow: none !important;
    flex: 1 1 auto; /* Let buttons grow but not shrink */
    flex-shrink: 0;
    &.active {
        background: var(--Typography-Primary-white, #fff) !important;
        color: var(--Brand-Dark, #111) !important;
    }
`;
const SelectBoxWrapper = styled.div`
    @media screen and (max-width: ${mobileBreakpoint}px) {
        display: flex;
        margin-left: 0px;
    }
`;
const LeftColumn = styled.div`
    .title {
        color: var(--Text-Primary, #fff);
        font-family: Telegraf;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px; /* 140% */
        margin-bottom: 6px;
    }
    .label {
        color: var(--Text-Secondary, #cfcfcf);
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
    }
`;
const RightColumn = styled.div`
    .btnwidth100 {
        margin-top: 40px !important;
    }
`;

const DataRows = styled.div`
    display: flex;
    justify-content: space-between;
    ${LeftColumn} {
        width: 50%;
    }
    ${RightColumn} {
        width: 50%;
        .imgwrapper {
            border-radius: 24px;
            overflow: hidden;
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
    &.row2 {
        margin-top: 40px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        ${LeftColumn} {
            width: 100%;
            margin-bottom: 20px;
        }
        ${RightColumn} {
            width: 100%;
        }
    }
`;
const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
    }
`;

const DataBox = styled.div`
    margin-bottom: 20px;
`;
const DataContainer = styled.div`
    .flexbox {
        display: flex;
        justify-content: space-between;
        ${DataBox} {
            width: calc(50% - 10px);
        }
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
const TextAreaBox = styled.textarea`
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
const Cover = styled.div`
    height: 244px;
    border-radius: 24px;

    .coverimg {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
        border-radius: 24px;
    }
`;
const UserImg = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 6px solid #232323;
    margin: auto;
    margin-top: -100px;
    .userimg {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: top;
        border-radius: 50%;
    }
    .editbutton {
        right: 20px !important;
        transform: scale(0.8) !important;
        transform-origin: bottom;
        bottom: -10px !important;
    }
`;
const ProfileWrapper = styled.div`
    margin-bottom: 60px;
    .imguploadedwrapper {
        height: 100%;
        width: 100%;
        .editbutton {
            position: absolute;
            bottom: 0;
            right: 4vw;
            cursor: pointer;
            transform: translateY(50%);
            .editicon {
            }
        }
    }
    ${Cover},${UserImg} {
        position: relative;
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

export default MyProfile;
