import React from "react";
import styled from "styled-components";

interface NFTInfoProps {
    name: string;
    id: string;
    owner: string;
    description: string;
}

const NFTInfo: React.FC<NFTInfoProps> = ({ name, id, owner, description }) => {
    return (
        <InfoWrapper>
            <Header>
                <Title>{name}</Title>
                <SocialIcons>
                    <Icon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c9442801b514796fe509b4d7fada635bc11ed1b7aaed1740991a547568e895?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                        alt="Social Icon 1"
                        loading="lazy"
                    />
                    <Icon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5cc7b228df986474f5cfbd7c3fe94255cebc8484c9c6eec94230c8ec27672a1?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                        alt="Social Icon 2"
                        loading="lazy"
                    />
                </SocialIcons>
            </Header>
            <SubHeader>
                <NFTId>{id}</NFTId>
                <Owner>
                    <span>Owned by</span> {owner}
                </Owner>
            </SubHeader>
            <Description>{description}</Description>
        </InfoWrapper>
    );
};

const InfoWrapper = styled.article`
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    background: var(--brand-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font: 400 16px Telegraf, sans-serif;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 16px;
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
`;

const SubHeader = styled.div`
    margin-top: 24px;
`;

const NFTId = styled.h2`
    color: #fff;
    font: 600 30px/1 Conthrax, sans-serif;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 20px;
`;

const Owner = styled.p`
    color: var(--Text-Tertiary, #969696);
    background: var(--brand-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font: 400 16px/24px Telegraf, sans-serif;
    margin-top: 8px;
    span {
        color: var(--Text-Tertiary, #969696) !important;
        -webkit-text-fill-color: #969696 !important;
    }
`;

const Description = styled.p`
    color: var(--Text-Secondary, #cfcfcf);
    font: 400 16px/24px Telegraf, sans-serif;
    margin: 0;
`;

export default NFTInfo;
