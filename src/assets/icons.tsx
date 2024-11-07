import styled from "styled-components";
const DropDownIconWrapper = styled.div`
    border-radius: 32px;
    background: var(--background-surface-2, #2e2d2a);
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;
    &.transparent {
        width: auto;
        height: auto;
        background: transparent;
        border: 0;
        margin: 0;
    }
`;
// Correctly define a custom SVG icon component
export const CustomDropdownIcon: React.ElementType = () => (
    <DropDownIconWrapper className="ddicon">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M6 9L12 15L18 9"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="square"
            />
        </svg>
    </DropDownIconWrapper>
);
export const CustomDropdownTransIcon: React.ElementType = () => (
    <DropDownIconWrapper className="transparent">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M6 9L12 15L18 9"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="square"
            />
        </svg>
    </DropDownIconWrapper>
);

export const HamburgerIcon: React.ElementType = () => (
    <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.75"
            y="0.75"
            width="54.5"
            height="54.5"
            rx="27.25"
            stroke="#5D5C5A"
            stroke-width="1.5"
        />
        <path
            d="M19 21H27"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M19 28H32"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M19 35H37"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);
export const AccordionPlusIcon: React.ElementType = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M6 12H12M12 12H18M12 12V6M12 12V18"
            stroke="url(#paint0_radial_5115_15646)"
            stroke-width="1.5"
            stroke-miterlimit="10"
        />
        <defs>
            <radialGradient
                id="paint0_radial_5115_15646"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(7.59 8.625) rotate(42.3859) scale(17.3837 43.8728)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);
export const AccordionMinusIcon: React.ElementType = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M6 12H12H18"
            stroke="url(#paint0_radial_5115_15661)"
            stroke-width="1.5"
            stroke-miterlimit="10"
        />
        <defs>
            <radialGradient
                id="paint0_radial_5115_15661"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(7.59 12.2187) rotate(4.34933) scale(12.8771 4.9356)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);

export const GetStartedIcon: React.ElementType = () => (
    <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M106.665 66.75H107.685V71.475C107.685 71.475 107.46 71.49 107.325 71.49C104.235 71.49 101.775 69.405 101.775 66.135C101.775 62.865 104.235 60.78 107.325 60.78C110.415 60.78 112.875 62.865 112.875 66.135C112.875 68.745 111.39 70.59 109.11 71.235V70.05C110.835 69.45 111.84 67.995 111.84 66.135C111.84 63.675 110.01 61.92 107.325 61.92C104.64 61.92 102.81 63.675 102.81 66.135C102.81 68.385 104.34 70.05 106.665 70.305V66.75Z"
            fill="white"
        />
        <path
            d="M98.9606 80.2962L97.9658 80.0104L99.9418 73.1336L110.178 76.0747L108.202 82.9515L107.207 82.6657L108.88 76.8413L105.334 75.8223L103.747 81.3439L102.753 81.058L104.339 75.5365L100.634 74.4718L98.9606 80.2962Z"
            fill="white"
        />
        <path
            d="M101.27 93.6684L100.366 93.1343L102.098 90.2026L93.8322 85.3199L94.3892 84.3771L102.655 89.2598L104.387 86.3282L105.291 86.8622L101.27 93.6684Z"
            fill="white"
        />
        <path
            d="M82.3718 96.7863C80.9951 97.8505 80.5389 99.0753 81.3371 100.108C83.4012 102.778 86.8379 96.8982 89.4525 100.28C90.3882 101.491 90.2904 103.425 88.4035 104.883C86.5284 106.333 84.6141 105.917 83.3859 104.401L84.2285 103.75C85.1632 104.885 86.54 105.072 87.7861 104.109C89.0559 103.128 89.3384 101.923 88.6137 100.986C86.7146 98.5292 83.1285 104.24 80.5048 100.846C79.3764 99.3863 79.9031 97.4434 81.79 95.9847C83.9618 94.3059 85.8572 94.8693 87.0357 96.2713L86.1813 96.9318C85.1047 95.7354 83.689 95.768 82.3718 96.7863Z"
            fill="white"
        />
        <path
            d="M73.3242 111.611L72.9079 110.647L76.034 109.297L72.2284 100.484L73.2337 100.05L77.0393 108.863L80.1653 107.514L80.5815 108.478L73.3242 111.611Z"
            fill="white"
        />
        <path
            d="M65.9017 101.614L67.0542 101.412L64.5748 112.658L63.4075 112.862L57.2432 103.129L58.44 102.919L59.859 105.199L65.326 104.242L65.9017 101.614ZM63.7537 111.446L63.7833 111.441L65.1176 105.314L60.4337 106.134L63.7537 111.446Z"
            fill="white"
        />
        <path
            d="M46.962 101.083L48.2777 101.19L50.3994 106.012L53.5092 106.265L53.8842 101.645L54.9756 101.733L54.1139 112.348L49.7483 111.994C47.3412 111.799 46.4475 110.387 46.5823 108.727C46.6975 107.307 47.5248 106.2 49.2547 106.024L46.962 101.083ZM47.7185 108.819C47.6238 109.986 48.2784 110.821 49.7884 110.944L53.1075 111.213L53.4243 107.311L50.1052 107.042C48.5951 106.919 47.8168 107.608 47.7185 108.819Z"
            fill="white"
        />
        <path
            d="M34.3987 106.741L34.7564 105.754L37.9577 106.914L41.2288 97.8885L42.2582 98.2616L38.9872 107.287L42.1884 108.447L41.8306 109.434L34.3987 106.741Z"
            fill="white"
        />
        <path
            d="M29.0625 91.1702L29.6308 90.3052L35.6105 94.2342L29.7622 103.135L23.7825 99.2057L24.3509 98.3407L29.4154 101.669L31.4418 98.5847L26.6405 95.4299L27.2088 94.5649L32.0101 97.7197L34.127 94.4979L29.0625 91.1702Z"
            fill="white"
        />
        <path
            d="M25.7245 84.7663L27.9033 87.1439L20.0515 94.3392L17.8727 91.9615C15.329 89.1858 15.4179 86.1745 17.7956 83.9956C20.1733 81.8168 23.1808 81.9905 25.7245 84.7663ZM18.5658 84.8361C16.6194 86.6197 16.5085 88.9187 18.6874 91.2964L20.0859 92.8225L26.3894 87.046L24.9909 85.5199C22.8121 83.1422 20.5122 83.0525 18.5658 84.8361Z"
            fill="white"
        />
        <path
            d="M12.8838 54.25H11.8638V49.525C11.8638 49.525 12.0888 49.51 12.2238 49.51C15.3138 49.51 17.7738 51.595 17.7738 54.865C17.7738 58.135 15.3138 60.22 12.2238 60.22C9.13383 60.22 6.67383 58.135 6.67383 54.865C6.67383 52.255 8.15883 50.41 10.4388 49.765V50.95C8.71383 51.55 7.70883 53.005 7.70883 54.865C7.70883 57.325 9.53883 59.08 12.2238 59.08C14.9088 59.08 16.7388 57.325 16.7388 54.865C16.7388 52.615 15.2088 50.95 12.8838 50.695V54.25Z"
            fill="white"
        />
        <path
            d="M20.5882 40.7038L21.583 40.9896L19.6071 47.8664L9.37122 44.9253L11.3472 38.0485L12.3419 38.3343L10.6684 44.1587L14.2149 45.1777L15.8014 39.6561L16.7962 39.942L15.2096 45.4635L18.9147 46.5282L20.5882 40.7038Z"
            fill="white"
        />
        <path
            d="M18.2789 27.3316L19.183 27.8657L17.4511 30.7974L25.7166 35.6801L25.1597 36.6229L16.8942 31.7402L15.1623 34.6718L14.2583 34.1378L18.2789 27.3316Z"
            fill="white"
        />
        <path
            d="M37.1771 24.2137C38.5537 23.1495 39.0099 21.9247 38.2117 20.8922C36.1476 18.222 32.711 24.1018 30.0964 20.7196C29.1606 19.5091 29.2584 17.5755 31.1453 16.1168C33.0204 14.6673 34.9347 15.0834 36.1629 16.5987L35.3203 17.25C34.3857 16.1145 33.0088 15.9276 31.7627 16.8909C30.4929 17.8725 30.2104 19.0767 30.9352 20.0143C32.8342 22.4708 36.4203 16.7599 39.0441 20.154C40.1725 21.6137 39.6458 23.5566 37.7588 25.0153C35.5871 26.6941 33.6917 26.1307 32.5131 24.7287L33.3675 24.0682C34.4441 25.2646 35.8598 25.232 37.1771 24.2137Z"
            fill="white"
        />
        <path
            d="M46.2246 9.38875L46.6409 10.3527L43.5148 11.7025L47.3205 20.516L46.3152 20.9501L42.5096 12.1366L39.3835 13.4864L38.9673 12.5224L46.2246 9.38875Z"
            fill="white"
        />
        <path
            d="M53.6471 19.386L52.4946 19.5876L54.974 8.3422L56.1413 8.13802L62.3057 17.8714L61.1088 18.0808L59.6898 15.8012L54.2228 16.7575L53.6471 19.386ZM55.7951 9.55385L55.7656 9.55902L54.4313 15.6856L59.1151 14.8662L55.7951 9.55385Z"
            fill="white"
        />
        <path
            d="M72.5868 19.9172L71.2712 19.8104L69.1494 14.9879L66.0396 14.7355L65.6646 19.3553L64.5732 19.2667L65.4349 8.65161L69.8005 9.00599C72.2076 9.20139 73.1013 10.6133 72.9666 12.2729C72.8513 13.6932 72.024 14.7999 70.2941 14.9755L72.5868 19.9172ZM71.8303 12.1806C71.925 11.0145 71.2704 10.1788 69.7604 10.0562L66.4413 9.78676L66.1246 13.6889L69.4437 13.9584C70.9537 14.0809 71.732 13.3916 71.8303 12.1806Z"
            fill="white"
        />
        <path
            d="M85.1502 14.2591L84.7924 15.2462L81.5911 14.086L78.3201 23.1115L77.2906 22.7384L80.5617 13.7129L77.3604 12.5527L77.7182 11.5655L85.1502 14.2591Z"
            fill="white"
        />
        <path
            d="M90.4863 29.8298L89.918 30.6948L83.9383 26.7658L89.7866 17.8652L95.7663 21.7943L95.1979 22.6593L90.1334 19.3315L88.1071 22.4153L92.9084 25.5701L92.34 26.4351L87.5387 23.2803L85.4218 26.5021L90.4863 29.8298Z"
            fill="white"
        />
        <path
            d="M93.8243 36.2337L91.6455 33.8561L99.4973 26.6608L101.676 29.0385C104.22 31.8142 104.131 34.8255 101.753 37.0044C99.3756 39.1832 96.368 39.0095 93.8243 36.2337ZM100.983 36.1639C102.929 34.3803 103.04 32.0813 100.861 29.7036L99.463 28.1775L93.1594 33.954L94.5579 35.4801C96.7368 37.8578 99.0367 37.9475 100.983 36.1639Z"
            fill="white"
        />
        <g clip-path="url(#clip0_464_19837)">
            <path
                d="M44.1677 69.2332L75.8504 48.7776"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
            />
            <path
                d="M62.8164 45.9688L75.851 48.7755L73.0442 61.8101"
                stroke="white"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="square"
            />
        </g>
        <path
            d="M13.64 74.96C12.36 74.96 11.56 74.016 11.56 72.88C11.56 71.744 12.36 70.8 13.64 70.8C14.904 70.8 15.704 71.744 15.704 72.88C15.704 74.016 14.904 74.96 13.64 74.96Z"
            fill="white"
        />
        <path
            d="M106.64 48.96C105.36 48.96 104.56 48.016 104.56 46.88C104.56 45.744 105.36 44.8 106.64 44.8C107.904 44.8 108.704 45.744 108.704 46.88C108.704 48.016 107.904 48.96 106.64 48.96Z"
            fill="white"
        />
        <defs>
            <clipPath id="clip0_464_19837">
                <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(47.7363 40) rotate(12.1521)"
                />
            </clipPath>
        </defs>
    </svg>
);
export const FeatureRowIcon: React.ElementType = () => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M67.2442 39.9844L40.0078 12.748L12.7714 39.9844L40.0078 67.2208L67.2442 39.9844Z"
            stroke="url(#paint0_radial_5115_15590)"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M70.2806 48.6517L31.3398 9.71094L9.70258 31.3482L48.6433 70.2889L70.2806 48.6517Z"
            stroke="url(#paint1_radial_5115_15590)"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M31.3542 70.2903L70.2949 31.3496L48.6577 9.71234L9.71692 48.6531L31.3542 70.2903Z"
            stroke="url(#paint2_radial_5115_15590)"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M34.2438 46V45.408L38.5798 40.24L34.2438 35.072V34.48H36.5318L39.9878 38.576L43.4118 34.48H45.7158V35.072L41.3638 40.24L45.7158 45.392V46H43.4118L39.9718 41.92L36.5318 46H34.2438Z"
            fill="url(#paint3_radial_5115_15590)"
        />
        <defs>
            <radialGradient
                id="paint0_radial_5115_15590"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(37.6587 22.3148) rotate(87.3859) scale(55.799 140.825)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
            <radialGradient
                id="paint1_radial_5115_15590"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(31.7663 19.6037) rotate(71.8907) scale(66.0695 135.086)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
            <radialGradient
                id="paint2_radial_5115_15590"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(60.4021 31.7761) rotate(161.891) scale(66.0695 135.086)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
            <radialGradient
                id="paint3_radial_5115_15590"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.01 36.625) rotate(9.1495) scale(73.6977 58.6425)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);

export const ProductCardIcon: React.ElementType = () => (
    <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M26.2438 38V37.408L30.5798 32.24L26.2438 27.072V26.48H28.5318L31.9878 30.576L35.4118 26.48H37.7158V27.072L33.3638 32.24L37.7158 37.392V38H35.4118L31.9718 33.92L28.5318 38H26.2438Z"
            fill="url(#paint0_radial_5115_12616)"
        />
        <path
            d="M54.8384 9.16406H9.16211V54.8404H54.8384V9.16406Z"
            stroke="url(#paint1_radial_5115_12616)"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M51.2588 12.7832H12.7852V51.2569H51.2588V12.7832Z"
            stroke="url(#paint2_radial_5115_12616)"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M43.2959 4.82227H20.7038L4.82227 20.7038V43.2959L20.7038 59.1775H43.2959L59.1775 43.2959V20.7038L43.2959 4.82227Z"
            stroke="url(#paint3_radial_5115_12616)"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <defs>
            <radialGradient
                id="paint0_radial_5115_12616"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(7.01 28.625) rotate(9.1495) scale(73.6977 58.6425)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
            <radialGradient
                id="paint1_radial_5115_12616"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.2142 19.1558) rotate(42.3859) scale(66.1688 166.996)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
            <radialGradient
                id="paint2_radial_5115_12616"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.8829 21.1993) rotate(42.3859) scale(55.7347 140.662)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
            <radialGradient
                id="paint3_radial_5115_12616"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.0243 16.7125) rotate(42.3859) scale(78.7415 198.726)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);

export const LayoutGridIcon: React.ElementType = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M8.4 3H4.6H3V4.6V8.4V10H4.6H8.4H10V8.4V4.6V3H8.4Z"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M19.4 3H15.6H14V4.6V8.4V10H15.6H19.4H21V8.4V4.6V3H19.4Z"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M19.4 14H15.6H14V15.6V19.4V21H15.6H19.4H21V19.4V15.6V14H19.4Z"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M8.4 14H4.6H3V15.6V19.4V21H4.6H8.4H10V19.4V15.6V14H8.4Z"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const LayoutListIcon: React.ElementType = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const LayoutDistributeIcon: React.ElementType = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M21 21V3M3 21V3M9 8V16V19L12 19L15 19V16V8V5.15224V5H12H9V8Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const DollarIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M6 16C6 18.2091 7.79086 20 10 20H14C16.2091 20 18 18.2091 18 16C18 13.7909 16.2091 12 14 12H10C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8M12 2V22"
            stroke="#111111"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const TransferIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11"
            stroke="#111111"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const ThreeDotsIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M20 12.5C20.2761 12.5 20.5 12.2761 20.5 12C20.5 11.7239 20.2761 11.5 20 11.5C19.7239 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.7239 12.5 20 12.5Z"
            fill="white"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5Z"
            fill="white"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M4 12.5C4.27614 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.27614 11.5 4 11.5C3.72386 11.5 3.5 11.7239 3.5 12C3.5 12.2761 3.72386 12.5 4 12.5Z"
            fill="white"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const ArrowTransformIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M6 18L18 6M18 6V17.52M18 6H6.48"
            stroke="#111111"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const WhyGoldXBottomIcon: React.FC = () => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.5"
            y="0.5"
            width="79"
            height="79"
            rx="39.5"
            fill="#2E2D2A"
            stroke="#5D5C5A"
        />
        <path
            d="M39.9993 53.3307C47.3631 53.3307 53.3327 47.3611 53.3327 39.9974C53.3327 32.6336 47.3631 26.6641 39.9993 26.6641M39.9993 53.3307C32.6355 53.3307 26.666 47.3611 26.666 39.9974C26.666 32.6336 32.6355 26.6641 39.9993 26.6641M39.9993 53.3307C35.5811 53.3307 31.9995 47.3611 31.9995 39.9974C31.9995 32.6336 35.5811 26.6641 39.9993 26.6641"
            stroke="url(#paint0_radial_5115_9185)"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <defs>
            <radialGradient
                id="paint0_radial_5115_9185"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(30.1993 32.4974) rotate(42.3859) scale(38.6305 97.4951)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);

export const ProductCardBottomIcon: React.FC = () => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.75"
            y="0.75"
            width="78.5"
            height="78.5"
            rx="39.25"
            stroke="url(#paint0_radial_5115_12624)"
            stroke-width="1.5"
        />
        <path
            d="M32 48.0001L47.9999 32M47.9999 32V47.3601M47.9999 32H32.64"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <defs>
            <radialGradient
                id="paint0_radial_5115_12624"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.6 17.5) rotate(42.3859) scale(115.892 292.485)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);
export const ProtectKeyCardBottomIcon: React.FC = () => (
    <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="0.75"
            y="0.75"
            width="78.5"
            height="78.5"
            rx="39.25"
            fill="url(#paint0_radial_464_22941)"
            stroke="url(#paint1_linear_464_22941)"
            stroke-width="1.5"
        />
        <path
            d="M45.3376 36.5523L33.8622 48.0277L31.9766 46.1421L43.452 34.6667H33.3377V32H48.0043V46.6667H45.3376V36.5523Z"
            fill="#111111"
        />
        <defs>
            <radialGradient
                id="paint0_radial_464_22941"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.6 17.5) rotate(42.3859) scale(115.892 292.485)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
            <linearGradient
                id="paint1_linear_464_22941"
                x1="0.193377"
                y1="39.8295"
                x2="80.0558"
                y2="39.8295"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#E2B666" />
                <stop offset="0.2279" stop-color="#FFE290" />
                <stop offset="0.414" stop-color="#D3AF60" />
                <stop offset="0.586" stop-color="#FFD36A" />
                <stop offset="0.7721" stop-color="#FFF1B0" />
                <stop offset="1" stop-color="#C8A766" />
            </linearGradient>
        </defs>
    </svg>
);
export const ProductTimelineIcon: React.FC = () => (
    <svg
        width="16"
        height="328"
        viewBox="0 0 16 328"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M8 0V320" stroke="#EDCE8B" />
        <circle cx="8" cy="320" r="8" fill="url(#paint0_radial_464_22727)" />
        <defs>
            <radialGradient
                id="paint0_radial_464_22727"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(2.12 315.5) rotate(42.3859) scale(23.1783 58.4971)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);

export const DiscordIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
    >
        <g clip-path="url(#clip0_464_22858)">
            <path
                d="M18.6053 4.13842C17.2064 3.50756 15.707 3.04128 14.139 2.77613C14.125 2.77345 14.1106 2.77518 14.0976 2.78108C14.0847 2.78698 14.0739 2.79675 14.0668 2.80905C13.8748 3.14642 13.6608 3.58619 13.5109 3.93362C11.8479 3.68515 10.1572 3.68515 8.49419 3.93362C8.32718 3.54858 8.13885 3.17314 7.93008 2.80905C7.923 2.7966 7.9123 2.7866 7.89939 2.7804C7.88649 2.77419 7.87199 2.77206 7.85785 2.77431C6.29076 3.03945 4.79134 3.50573 3.39156 4.13751C3.37952 4.14256 3.36931 4.15117 3.36231 4.16219C0.517051 8.34505 -0.262835 12.4246 0.120251 16.4529C0.121317 16.4628 0.124379 16.4723 0.129252 16.481C0.134124 16.4896 0.140705 16.4972 0.148593 16.5032C1.80929 17.7123 3.66159 18.6333 5.62791 19.2278C5.64161 19.232 5.65628 19.232 5.66998 19.2278C5.68368 19.2235 5.69578 19.2152 5.70471 19.204C6.12783 18.6381 6.50279 18.0378 6.82562 17.4093C6.8301 17.4007 6.83268 17.3912 6.83319 17.3815C6.8337 17.3719 6.83213 17.3622 6.82857 17.3532C6.82502 17.3442 6.81957 17.336 6.81259 17.3293C6.80562 17.3226 6.79728 17.3174 6.78814 17.3142C6.19751 17.0918 5.62524 16.8234 5.07659 16.5114C5.06673 16.5058 5.05843 16.4978 5.05242 16.4882C5.04641 16.4786 5.04288 16.4676 5.04215 16.4563C5.04143 16.4449 5.04353 16.4336 5.04826 16.4233C5.053 16.413 5.06022 16.404 5.06928 16.3972C5.18448 16.3121 5.29968 16.2234 5.40939 16.1348C5.41927 16.1268 5.43116 16.1217 5.44376 16.1201C5.45635 16.1185 5.46914 16.1204 5.48071 16.1256C9.07111 17.7384 12.9596 17.7384 16.5079 16.1256C16.5195 16.1201 16.5324 16.1179 16.5452 16.1194C16.558 16.1208 16.5701 16.1258 16.5801 16.1338C16.6898 16.2234 16.8041 16.3121 16.9202 16.3972C16.9294 16.4039 16.9367 16.4127 16.9416 16.4229C16.9465 16.4332 16.9488 16.4445 16.9482 16.4558C16.9477 16.4671 16.9444 16.4781 16.9385 16.4878C16.9327 16.4975 16.9245 16.5057 16.9148 16.5114C16.368 16.826 15.7993 17.092 15.2023 17.3133C15.1931 17.3166 15.1848 17.3219 15.1778 17.3287C15.1708 17.3355 15.1654 17.3437 15.1618 17.3528C15.1583 17.3619 15.1567 17.3716 15.1572 17.3814C15.1577 17.3911 15.1603 17.4006 15.1648 17.4093C15.494 18.0374 15.8706 18.6353 16.2848 19.2031C16.2934 19.2148 16.3054 19.2235 16.3192 19.228C16.3329 19.2326 16.3477 19.2329 16.3616 19.2287C18.3313 18.6359 20.1866 17.7144 21.8492 16.5032C21.8573 16.4975 21.8641 16.4902 21.8691 16.4817C21.8742 16.4732 21.8773 16.4637 21.8784 16.4538C22.3356 11.7965 21.1122 7.74985 18.6336 4.16402C18.6275 4.15237 18.6175 4.14328 18.6053 4.13842ZM7.36231 13.9999C6.28162 13.9999 5.39019 13.0225 5.39019 11.8239C5.39019 10.6244 6.26425 9.64791 7.36231 9.64791C8.46859 9.64791 9.35179 10.6326 9.33442 11.8239C9.33442 13.0234 8.46036 13.9999 7.36231 13.9999ZM14.6537 13.9999C13.5721 13.9999 12.6816 13.0225 12.6816 11.8239C12.6816 10.6244 13.5548 9.64791 14.6537 9.64791C15.76 9.64791 16.6432 10.6326 16.6259 11.8239C16.6259 13.0234 15.7609 13.9999 14.6537 13.9999Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_464_22858">
                <rect
                    width="21.9429"
                    height="21.9429"
                    fill="white"
                    transform="translate(0.0292969 0.03125)"
                />
            </clipPath>
        </defs>
    </svg>
);

export const InstaIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M10.9407 0.8605C11.6079 0.85794 12.2751 0.864645 12.9421 0.880614L13.1194 0.887014C13.3242 0.894329 13.5263 0.903471 13.7704 0.914443C14.7432 0.960157 15.407 1.11376 15.9894 1.33959C16.5928 1.57181 17.1012 1.88633 17.6095 2.39467C18.0743 2.85145 18.434 3.40399 18.6637 4.01387C18.8895 4.59627 19.0431 5.26096 19.0888 6.23376C19.0998 6.47696 19.1089 6.67993 19.1162 6.88473L19.1217 7.0621C19.138 7.72879 19.145 8.39567 19.1427 9.06256L19.1437 9.74461V10.9423C19.1459 11.6095 19.1389 12.2767 19.1226 12.9437L19.1171 13.1211C19.1098 13.3259 19.1007 13.5279 19.0897 13.772C19.044 14.7448 18.8886 15.4086 18.6637 15.991C18.4348 16.6015 18.075 17.1545 17.6095 17.6111C17.1523 18.0759 16.5995 18.4356 15.9894 18.6653C15.407 18.8911 14.7432 19.0447 13.7704 19.0904C13.5263 19.1014 13.3242 19.1106 13.1194 19.1179L12.9421 19.1234C12.2751 19.1396 11.6079 19.1466 10.9407 19.1444L10.2586 19.1453H9.06183C8.39465 19.1476 7.72746 19.1405 7.06046 19.1243L6.88309 19.1188C6.66605 19.1109 6.44906 19.1018 6.23212 19.0914C5.25932 19.0456 4.59555 18.8902 4.01223 18.6653C3.40212 18.4361 2.84948 18.0763 2.39303 17.6111C1.92771 17.1542 1.56764 16.6014 1.33795 15.991C1.11212 15.4086 0.958521 14.7448 0.912807 13.772C0.902624 13.5551 0.893481 13.3381 0.885378 13.1211L0.880807 12.9437C0.86395 12.2767 0.856331 11.6095 0.857949 10.9423V9.06256C0.855398 8.39568 0.862103 7.72879 0.878064 7.0621L0.884464 6.88473C0.891778 6.67993 0.900921 6.47696 0.911892 6.23376C0.957607 5.26004 1.11121 4.59719 1.33704 4.01387C1.56686 3.4037 1.92763 2.85131 2.39395 2.39559C2.85008 1.92999 3.40237 1.5696 4.01223 1.33959C4.59555 1.11376 5.25841 0.960157 6.23212 0.914443L6.88309 0.887014L7.06046 0.882443C7.72715 0.865595 8.39403 0.857975 9.06092 0.859586L10.9407 0.8605ZM10.0008 5.43193C9.3951 5.42336 8.79373 5.53526 8.23164 5.76113C7.66956 5.987 7.15797 6.32233 6.72661 6.74764C6.29525 7.17294 5.95271 7.67973 5.71892 8.23857C5.48513 8.7974 5.36473 9.39713 5.36473 10.0029C5.36473 10.6087 5.48513 11.2084 5.71892 11.7672C5.95271 12.3261 6.29525 12.8329 6.72661 13.2582C7.15797 13.6835 7.66956 14.0188 8.23164 14.2447C8.79373 14.4705 9.3951 14.5824 10.0008 14.5739C11.2132 14.5739 12.376 14.0922 13.2333 13.2349C14.0906 12.3776 14.5722 11.2149 14.5722 10.0024C14.5722 8.79002 14.0906 7.62726 13.2333 6.76995C12.376 5.91265 11.2132 5.43193 10.0008 5.43193ZM10.0008 7.2605C10.3652 7.25379 10.7272 7.31974 11.0658 7.45452C11.4043 7.58929 11.7127 7.79018 11.9727 8.04545C12.2328 8.30073 12.4394 8.60526 12.5804 8.94127C12.7215 9.27728 12.7941 9.63802 12.7942 10.0024C12.7943 10.3668 12.7217 10.7276 12.5808 11.0637C12.4398 11.3997 12.2333 11.7043 11.9734 11.9597C11.7134 12.215 11.4051 12.416 11.0666 12.5509C10.7281 12.6858 10.3661 12.7519 10.0017 12.7453C9.27427 12.7453 8.57661 12.4563 8.06223 11.9419C7.54784 11.4276 7.25886 10.7299 7.25886 10.0024C7.25886 9.27499 7.54784 8.57733 8.06223 8.06295C8.57661 7.54856 9.27427 7.25959 10.0017 7.25959L10.0008 7.2605ZM14.8008 4.0605C14.5059 4.07231 14.2269 4.19778 14.0224 4.41065C13.8179 4.62351 13.7037 4.90725 13.7037 5.20244C13.7037 5.49763 13.8179 5.78138 14.0224 5.99424C14.2269 6.20711 14.5059 6.33258 14.8008 6.34439C15.1039 6.34439 15.3946 6.22398 15.6089 6.00965C15.8233 5.79532 15.9437 5.50463 15.9437 5.20153C15.9437 4.89842 15.8233 4.60773 15.6089 4.39341C15.3946 4.17908 15.1039 4.05867 14.8008 4.05867V4.0605Z"
            fill="white"
        />
    </svg>
);
export const FaceBookIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M12.002 2C6.4791 2 2.00195 6.47715 2.00195 12C2.00195 16.9913 5.6588 21.1283 10.4395 21.8785V14.8906H7.90038V12H10.4395V9.79688C10.4395 7.29063 11.9324 5.90625 14.2166 5.90625C15.3107 5.90625 16.4551 6.10156 16.4551 6.10156V8.5625H15.1941C13.9519 8.5625 13.5645 9.33334 13.5645 10.1242V12H16.3379L15.8946 14.8906H13.5645V21.8785C18.3451 21.1283 22.002 16.9913 22.002 12C22.002 6.47715 17.5248 2 12.002 2Z"
            fill="white"
        />
    </svg>
);

export const TelegramIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M2.14851 11.8099C7.39588 9.52374 10.895 8.01654 12.6457 7.28833C17.6445 5.20916 18.6832 4.84799 19.3602 4.83606C19.5091 4.83344 19.8421 4.87034 20.0577 5.04534C20.2398 5.1931 20.2899 5.39271 20.3139 5.5328C20.3379 5.6729 20.3677 5.99204 20.344 6.2414C20.0731 9.08763 18.901 15.9947 18.3047 19.1825C18.0524 20.5314 17.5556 20.9836 17.0746 21.0279C16.0293 21.1241 15.2355 20.3371 14.2231 19.6735C12.6389 18.635 11.7439 17.9885 10.2061 16.9751C8.42893 15.804 9.58099 15.1603 10.5938 14.1084C10.8589 13.8331 15.4645 9.64397 15.5536 9.26395C15.5647 9.21642 15.5751 9.03926 15.4698 8.94571C15.3646 8.85216 15.2093 8.88415 15.0972 8.9096C14.9383 8.94566 12.4074 10.6184 7.50463 13.928C6.78626 14.4212 6.13559 14.6616 5.55261 14.649C4.90991 14.6351 3.67363 14.2856 2.75458 13.9869C1.62733 13.6204 0.731408 13.4267 0.809423 12.8044C0.850057 12.4803 1.29642 12.1488 2.14851 11.8099Z"
            fill="white"
        />
    </svg>
);

export const TwitterIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"
            fill="white"
        />
    </svg>
);

export const LinkedinIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M7.32 6.13043C7.32 7.03109 6.58 7.76087 5.66667 7.76087C4.75333 7.76087 4.01333 7.03109 4.01333 6.13043C4.01333 5.23043 4.75333 4.5 5.66667 4.5C6.58 4.5 7.32 5.23043 7.32 6.13043ZM7.33333 9.06522H4V19.5H7.33333V9.06522ZM12.6547 9.06522H9.34267V19.5H12.6553V14.0224C12.6553 10.9767 16.6747 10.7276 16.6747 14.0224V19.5H20V12.8928C20 7.7537 14.052 7.94087 12.6547 10.4707V9.06522Z"
            fill="white"
        />
    </svg>
);

export const SuggestionTimeIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M18.9166 9.58333L17.2505 11.25L15.5833 9.58333M17.4542 10.8333C17.4845 10.5597 17.5 10.2817 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C12.3561 17.5 14.4584 16.4136 15.8333 14.7144M10 5.83333V10L12.5 11.6667"
            stroke="#969696"
            stroke-linecap="square"
        />
    </svg>
);
export const SuggestionCloseIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
    >
        <path
            d="M12 4L4 12M4 4L12 12"
            stroke="#707070"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);
export const SearchIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M17 17L21 21"
            stroke="#111111"
            stroke-width="1.5"
            stroke-linecap="square"
        />
        <path
            d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z"
            stroke="#111111"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const BackArrowIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M15.8327 9.99935H4.99935M9.99935 4.16602L4.16602 9.99935L9.99935 15.8327"
            stroke="url(#paint0_radial_261_18650)"
            stroke-linecap="square"
        />
        <defs>
            <radialGradient
                id="paint0_radial_261_18650"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(5.71185 6.7181) rotate(42.3859) scale(16.9009 42.6541)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);

// Nav Menu icons

export const UserIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const MYNFTsIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M5.99958 20.0004L14.8686 11.1314C15.2646 10.7354 15.4627 10.5373 15.691 10.4632C15.8918 10.3979 16.1082 10.3979 16.309 10.4632C16.5373 10.5373 16.7354 10.7354 17.1314 11.1314L21.4053 15.4053M10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const FavoritesIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);
export const MyCollectionsIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M3 12H21M12 3V21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);
export const ReferralsIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);
export const LogOutIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M18 8L22 12M22 12L18 16M22 12H9M15 4.20404C13.7252 3.43827 12.2452 3 10.6667 3C5.8802 3 2 7.02944 2 12C2 16.9706 5.8802 21 10.6667 21C12.2452 21 13.7252 20.5617 15 19.796"
            stroke="#F14B5D"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

// Referral icon

export const ClipboardIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);
export const CheckIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
    >
        <path
            d="M26.5 8.5L12.0625 22.9375L5.5 16.375"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
        />
    </svg>
);
export const QRCodeIcon: React.FC = () => (
    <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g opacity="1" clip-path="url(#clip0_261_21336)">
            <path
                d="M73.3346 0H86.6669V6.66615H80.0008V13.3323H66.6663V33.3351H53.334V26.6668H60.0001V6.66615H73.3346V0Z"
                fill="white"
            />
            <path
                d="M0 0V46.6674H46.6674V0H0ZM39.9991 39.9991H6.66615V6.66615H39.9991V39.9991Z"
                fill="white"
            />
            <path
                d="M93.334 0V46.6674H139.999V0H93.334ZM133.331 39.9991H100V6.66615H133.333L133.331 39.9991Z"
                fill="white"
            />
            <path
                d="M33.3326 13.3359H13.332V33.3366H33.3326V13.3359Z"
                fill="white"
            />
            <path
                d="M126.665 13.3359H106.664V33.3366H126.665V13.3359Z"
                fill="white"
            />
            <path d="M80.0001 20H73.334V26.6662H80.0001V20Z" fill="white" />
            <path
                d="M80.0005 26.6719H86.6666V53.3386H80.0005V40.0042H73.3343V46.6725H66.666V33.3402H80.0005V26.6719Z"
                fill="white"
            />
            <path
                d="M53.3345 39.9961H60.0006V46.6644H66.6668V53.3306H60.0006V66.6629H66.6668V59.9967H73.3351V53.3306H80.0012V73.3312H66.6668V79.9973H60.0006V73.3312H53.3345V59.9967H40V53.3306H53.3345V39.9961Z"
                fill="white"
            />
            <path
                d="M26.6643 53.332H13.332V60.0003H26.6643V53.332Z"
                fill="white"
            />
            <path
                d="M86.666 53.332H100V59.9982H93.3343V66.6643H86.666V53.332Z"
                fill="white"
            />
            <path
                d="M113.332 53.332H106.664V60.0003H113.332V53.332Z"
                fill="white"
            />
            <path
                d="M0 59.9961H13.3323V66.6622H20.0006V73.3306H13.3323V79.9967H6.66615V66.6622H0V59.9961Z"
                fill="white"
            />
            <path
                d="M26.668 59.9961H40.0003V66.6622H33.3341V73.3306H40.0003V79.9967H26.668V59.9961Z"
                fill="white"
            />
            <path
                d="M113.332 59.9961H120.001V66.6622H126.667V86.6629H120.001V79.9967H106.664V86.6629H100V73.3306H113.332V59.9961Z"
                fill="white"
            />
            <path d="M46.6662 66.668H40V73.3363H46.6662V66.668Z" fill="white" />
            <path d="M140 66.668H133.332V73.3363H140V66.668Z" fill="white" />
            <path
                d="M46.6683 73.332H53.3345V86.6643H40V79.9982H46.6683V73.332Z"
                fill="white"
            />
            <path d="M86.6683 73.332H80V79.9982H86.6683V73.332Z" fill="white" />
            <path
                d="M6.66615 80.0039H0V86.6722H6.66615V80.0039Z"
                fill="white"
            />
            <path
                d="M19.9982 80.0039H13.332V86.6722H19.9982V80.0039Z"
                fill="white"
            />
            <path
                d="M66.6663 80.0039H80.0008V86.6701H73.3346V100.005H66.6663V113.337H60.0001V100.005H53.334V86.6701H60.0001V93.3362H66.6663V80.0039Z"
                fill="white"
            />
            <path
                d="M93.3343 80.0039H86.666V86.6722H93.3343V80.0039Z"
                fill="white"
            />
            <path d="M140 80.0039H133.332V86.6722H140V80.0039Z" fill="white" />
            <path d="M86.6683 86.668H80V100H86.6683V86.668Z" fill="white" />
            <path d="M120 86.668H113.332V100H120V86.668Z" fill="white" />
            <path
                d="M133.334 86.668H126.668V93.3341H133.334V86.668Z"
                fill="white"
            />
            <path
                d="M100.001 93.332H106.665V100H113.334V113.333H133.332V119.999H106.665V133.331H100.001V119.999H93.3351V126.667H86.6668V133.331H93.3351V139.999H60V133.331H80.0006V119.999H86.6668V100H100.001V93.332Z"
                fill="white"
            />
            <path
                d="M0 93.332V139.999H46.6674V93.332H0ZM39.9991 133.331H6.66615V100H39.9991V133.331Z"
                fill="white"
            />
            <path
                d="M80.0001 100.004H73.334V106.67H80.0001V100.004Z"
                fill="white"
            />
            <path
                d="M133.332 100.004H120.002V106.67H133.332V100.004Z"
                fill="white"
            />
            <path
                d="M33.3326 106.664H13.332V126.665H33.3326V106.664Z"
                fill="white"
            />
            <path d="M140 106.664H133.332V113.332H140V106.664Z" fill="white" />
            <path
                d="M53.334 113.328H60.0001V119.994H66.6663V126.663H53.334V113.328Z"
                fill="white"
            />
            <path
                d="M79.9983 113.328H66.666V119.994H79.9983V113.328Z"
                fill="white"
            />
            <path
                d="M126.668 126.664H120.002V133.33H126.668V126.664Z"
                fill="white"
            />
            <path d="M140 126.664H133.332V133.33H140V126.664Z" fill="white" />
            <path
                d="M113.332 133.328H106.664V139.996H113.332V133.328Z"
                fill="white"
            />
        </g>
        <defs>
            <clipPath id="clip0_261_21336">
                <rect width="140" height="140" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

// -----------------------------------> NFT Card dd icons <-----------------------------------

export const SellIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M8.5 14.6667C8.5 15.9553 9.54467 17 10.8333 17H13C14.3807 17 15.5 15.8807 15.5 14.5C15.5 13.1193 14.3807 12 13 12H11C9.61929 12 8.5 10.8807 8.5 9.5C8.5 8.11929 9.61929 7 11 7H13.1667C14.4553 7 15.5 8.04467 15.5 9.33333M12 5.5V7M12 17V18.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const EditIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M12 20.0002H21M3 20.0002H4.67454C5.16372 20.0002 5.40832 20.0002 5.63849 19.945C5.84256 19.896 6.03765 19.8152 6.2166 19.7055C6.41843 19.5818 6.59138 19.4089 6.93729 19.063L19.5 6.50023C20.3285 5.6718 20.3285 4.32865 19.5 3.50023C18.6716 2.6718 17.3285 2.6718 16.5 3.50023L3.93726 16.063C3.59136 16.4089 3.4184 16.5818 3.29472 16.7837C3.18506 16.9626 3.10425 17.1577 3.05526 17.3618C3 17.5919 3 17.8365 3 18.3257V20.0002Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const MiningRightsIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <g clip-path="url(#clip0_5243_8038)">
            <path
                d="M2 2L4 4M22 2L20 4M22 22L20 20M2 22L4 20M2 16H3.5M8 2V3.5M22 8H20.5M16 22V20.5M18 16H21.5M16 2V6M2 8H6M8 22V18M11.4343 7.56569L7.56569 11.4343C7.36768 11.6323 7.26867 11.7313 7.23158 11.8455C7.19895 11.9459 7.19895 12.0541 7.23158 12.1545C7.26867 12.2687 7.36768 12.3677 7.56569 12.5657L11.4343 16.4343C11.6323 16.6323 11.7313 16.7313 11.8455 16.7684C11.9459 16.8011 12.0541 16.8011 12.1545 16.7684C12.2687 16.7313 12.3677 16.6323 12.5657 16.4343L16.4343 12.5657C16.6323 12.3677 16.7313 12.2687 16.7684 12.1545C16.8011 12.0541 16.8011 11.9459 16.7684 11.8455C16.7313 11.7313 16.6323 11.6323 16.4343 11.4343L12.5657 7.56569C12.3677 7.36768 12.2687 7.26867 12.1545 7.23158C12.0541 7.19895 11.9459 7.19895 11.8455 7.23158C11.7313 7.26867 11.6323 7.36768 11.4343 7.56569Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="square"
            />
        </g>
        <defs>
            <clipPath id="clip0_5243_8038">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
//--------------------------------------------------
export const ArrowDownIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
    >
        <path
            d="M2 2L8 8L14 2"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const ChevronLeftIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M15 18L9 12L15 6"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);

export const ChevronRightIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M9 18L15 12L9 6"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="square"
        />
    </svg>
);
export const LikesIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.99364 3.27985C7.32752 1.332 4.54914 0.808035 2.46159 2.59168C0.374052 4.37532 0.0801554 7.35748 1.71951 9.467C3.08253 11.2209 7.20749 14.9201 8.55943 16.1174C8.71069 16.2513 8.78631 16.3183 8.87453 16.3446C8.95152 16.3676 9.03577 16.3676 9.11276 16.3446C9.20097 16.3183 9.2766 16.2513 9.42785 16.1174C10.7798 14.9201 14.9048 11.2209 16.2678 9.467C17.9071 7.35748 17.6491 4.35656 15.5257 2.59168C13.4023 0.826798 10.6598 1.332 8.99364 3.27985Z"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="square"
        />
    </svg>
);

export const UploadIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
    >
        <path
            d="M10.6673 43.3126C7.45136 41.1599 5.33398 37.4939 5.33398 33.3333C5.33398 27.0838 10.1113 21.9501 16.2133 21.385C17.4615 13.7924 24.0546 8 32.0007 8C39.9467 8 46.5398 13.7924 47.788 21.385C53.89 21.9501 58.6673 27.0838 58.6673 33.3333C58.6673 37.4939 56.5499 41.1599 53.334 43.3126M21.334 42.6667L32.0007 32M32.0007 32L42.6673 42.6667M32.0007 32V56"
            stroke="url(#paint0_radial_261_19015)"
            stroke-width="3"
            stroke-linecap="square"
        />
        <defs>
            <radialGradient
                id="paint0_radial_261_19015"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(12.4007 18.5) rotate(39.3999) scale(73.8503 183.596)"
            >
                <stop stop-color="#F4E0A3" />
                <stop offset="0.373682" stop-color="#DCBC65" />
                <stop offset="0.638906" stop-color="#CA9F43" />
                <stop offset="0.79386" stop-color="#FEF0A0" />
                <stop offset="1" stop-color="#8E5F1E" />
            </radialGradient>
        </defs>
    </svg>
);
