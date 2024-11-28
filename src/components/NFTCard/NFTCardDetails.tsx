import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "../../assets/icons";

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
    const navigate = useNavigate();
    // Function to handle click event
    const handleClick = () => {
        navigate("/nftdetailedview"); // Update '/your-target-route' with your desired path
    };
    return (
        <DetailsWrapper onClick={handleClick} style={{ cursor: "pointer" }}>
            <Title>{title}</Title>
            <Price>
                <span className="price-value">{price}</span>{" "}
                <span className="currency">{currency}</span>
            </Price>
            <StatsWrapper>
                <LikesWrapper>
                    <LikesIcon
                        loading="lazy"
                        src="/images/common/icons/collection.svg"
                        alt="Likes"
                    />
                    <LikesCount>
                        {likes}
                        <span className="unit">K</span>
                    </LikesCount>
                </LikesWrapper>
                <CollectionIcon>
                    <HeartIcon />
                </CollectionIcon>
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

const CollectionIcon = styled.div`
    border-radius: 40px;
    border: 1px solid var(--Lines-Border, #5d5c5a);
    background: var(--background-surface-2, #2e2d2a);
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 60px;
    border-radius: 0;
    position: absolute;
    right: 0;
    bottom: -20px;
    transition: all 0.3s linear;
    cursor: pointer;
    border-radius: 50%;
    svg {
        transition: all 0.3s linear;
    }
    &:hover {
        svg {
            path {
                fill: red;
            }
        }
    }
`;

export default NFTCardDetails;
