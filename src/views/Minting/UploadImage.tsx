import React from "react";
import styled from "styled-components";

interface NFTImageProps {
    src: string;
    alt: string;
}

const UploadImage: React.FC<NFTImageProps> = ({ src, alt }) => {
    return (
        <ImageWrapper>
            <div className="sqboxwrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid meet"
                    height="auto"
                    width="100%"
                    viewBox="0 0 724 724"
                    fill="none"
                >
                    <path
                        d="M0 24C0 10.7452 10.7452 0 24 0H628C641.255 0 652 10.7452 652 24V40C652 57.6731 666.327 72 684 72H700C713.255 72 724 82.7452 724 96V700C724 713.255 713.255 724 700 724H24C10.7452 724 0 713.255 0 700V24Z"
                        fill="url(#pattern0_261_19058)"
                    />
                    <defs>
                        <pattern
                            id="pattern0_261_19058"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <image
                                id="image0_261_19058"
                                width="1"
                                height="1"
                                preserveAspectRatio="xMidYMid slice"
                                xlinkHref={src}
                            />
                        </pattern>
                    </defs>
                </svg>
            </div>
        </ImageWrapper>
    );
};

const ImageWrapper = styled.div`
    width: 100%; // Ensures that the wrapper takes full width of its parent
    position: relative; // Needed for absolute positioning of the svg
    padding-top: 100%; // Creates a square based on the width
    z-index: 2;
    .sqboxwrapper {
        position: absolute;
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

export default UploadImage;
