import React from "react";
import styled from "styled-components";

interface NFTCardDetailsProps {
    title: string;
    price: string;
    currency: string;
    likes: number;
}

const NFTCardDetails: React.FC<NFTCardDetailsProps> = ({
    title,
    price,
    currency,
    likes,
}) => {
    return (
        <DetailsWrapper>
            <Title>{title}</Title>
            <Price>
                <span className="price-value">{price}</span>{" "}
                <span className="currency">{currency}</span>
            </Price>
            <StatsWrapper>
                <LikesWrapper>
                    <LikesIcon
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d6fa39ecee14193f14574c9aa4e9f5a92db5027982d672720f1d29a7198704?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                        alt="Likes"
                    />
                    <LikesCount>
                        {likes}
                        <span className="unit">K</span>
                    </LikesCount>
                </LikesWrapper>
                <CollectionIcon
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/416c826abc0fd35680f6b82f33a7b2b9f4265aa15f2f1a4cd0eb759689a0902f?placeholderIfAbsent=true&apiKey=c2eace46523148b195c70f9101a6de88"
                    alt="Collection"
                />
            </StatsWrapper>
        </DetailsWrapper>
    );
};

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    fill: var(--Brand-Dark, #111);
    overflow: hidden;
    position: relative;
    // aspect-ratio: 1.864;
    width: 100%;
    padding-left: 24px;
    box-sizing: border-box;
    height: 100%;
`;

const Title = styled.h2`
    position: relative;
    color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
    font-feature-settings: "liga" off, "clig" off;
    text-overflow: ellipsis;
    text-transform: uppercase;
    margin: 0;
    margin-right: 24px;
    margin-top: 30px;
    font: 600 20px/1.6 Conthrax, sans-serif;
    white-space: nowrap;
    overflow: hidden;
`;

const Price = styled.div`
    position: relative;
    color: var(--Text-Tertiary, #969696);
    align-self: flex-start;
    margin-top: 8px;

    .price-value {
        color: rgba(255, 255, 255, 1);
    }

    .currency {
        color: rgba(150, 150, 150, 1);
    }
`;

const StatsWrapper = styled.div`
    position: relative;
    display: flex;
    margin-top: 24px;
    width: 100%;
    gap: 20px;
    color: var(--Text-Tertiary, var(--Typography-Primary-white, #969696));
    justify-content: space-between;
`;

const LikesWrapper = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: flex-start;
`;

const LikesIcon = styled.img`
    aspect-ratio: 2.2;
    object-fit: contain;
    object-position: center;
    width: 88px;
    align-self: stretch;
    gap: -16px;
    margin: auto 0;
`;

const LikesCount = styled.div`
    align-self: stretch;
    margin: auto 0;

    .unit {
        color: rgba(150, 150, 150, 1);
    }
`;

const CollectionIcon = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 60px;
    border-radius: 0;
    position: absolute;
    right: 0;
    bottom: -20px;
`;

export default NFTCardDetails;
