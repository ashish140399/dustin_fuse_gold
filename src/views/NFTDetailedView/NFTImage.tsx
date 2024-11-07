import React from "react";
import styled from "styled-components";

interface NFTImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const NFTImage: React.FC<NFTImageProps> = ({ src, alt, className }) => {
    return (
        <ImageWrapper className={className}>
            <LikesIcon
                loading="lazy"
                src="/images/common/icons/likes.svg"
                alt="Collection"
            />
            <div className="sqboxwrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 720 720"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    height="auto"
                    width="100%"
                >
                    <path
                        d="M40 72C57.6731 72 72 57.6731 72 40V24C72 10.7452 82.7452 0 96 0H696C709.255 0 720 10.7452 720 24V696C720 709.255 709.255 720 696 720H24C10.7452 720 0 709.255 0 696V96C0 82.7452 10.7452 72 24 72H40Z"
                        fill="url(#pattern0_464_25453)"
                    />
                    <defs>
                        <pattern
                            id="pattern0_464_25453"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <use
                                xlinkHref="#image0_464_25453"
                                transform="scale(0.000976562)"
                            />
                        </pattern>
                        <image
                            id="image0_464_25453"
                            width="1024"
                            height="1024"
                            preserveAspectRatio="xMidYMid slice"
                            xlinkHref={src}
                        />{" "}
                    </defs>
                </svg>
            </div>
        </ImageWrapper>
    );
};

const ImageWrapper = styled.div`
    width: 100%; // Ensures that the wrapper takes full width of its parent
    position: relative; // Needed for absolute positioning of the svg
    // padding-top: 100%; // Creates a square based on the width
    z-index: 2;
    .sqboxwrapper {
        // position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        svg {
            width: 100%;
            height: 100%;
        }
    }
`;
const LikesIcon = styled.img`
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 60px;
    border-radius: 0;
    position: absolute;
    top: 0;
    left: 0;
`;
export default NFTImage;
