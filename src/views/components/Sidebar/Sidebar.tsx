import React from "react";
import styled from "styled-components";
import ActionButton from "../../../components/Buttons/ActionButton/ActionButton";
import {
    ArrowTransformIcon,
    DiscordIcon,
    InstaIcon,
    TelegramIcon,
    TwitterIcon,
} from "../../../assets/icons";

const Sidebar: React.FC = () => {
    return (
        <>
            <div className="sidebartop">
                <img
                    src="/images/common/Goldx-logo.svg"
                    className="logo"
                    alt=""
                />
            </div>
            <div className="sidebarbottom">
                <div className="socialiconswrapper">
                    <div className="sclicon">
                        <DiscordIcon />
                    </div>
                    <div className="sclicon">
                        <InstaIcon />
                    </div>
                    <div className="sclicon">
                        <TelegramIcon />
                    </div>
                    <div className="sclicon">
                        <TwitterIcon />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
