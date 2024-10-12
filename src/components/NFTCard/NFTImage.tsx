import React from "react";
import styled from "styled-components";

interface NFTImageProps {
    src: string;
    alt: string;
}

const NFTImage: React.FC<NFTImageProps> = ({ src, alt }) => {
    return (
        <ImageWrapper>
            <div className="sqboxwrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 328 320"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    height="auto"
                    width="100%"
                >
                    <defs>
                        <pattern
                            id="pattern0_5003_3760"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <image
                                id="image0_5003_3760"
                                width="1"
                                height="1"
                                preserveAspectRatio="xMidYMid slice"
                                xlinkHref={src}
                            />
                        </pattern>
                    </defs>
                    <path
                        d="M136 56C153.673 56 168 41.6731 168 24C168 10.7452 178.745 0 192 0H248C261.255 0 272 10.7452 272 24C272 41.6731 286.327 56 304 56C317.255 56 328 66.7452 328 80V320H0V80C0 66.7452 10.7452 56 24 56H136Z"
                        fill="url(#pattern0_5003_3760)"
                    />
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

export default NFTImage;
