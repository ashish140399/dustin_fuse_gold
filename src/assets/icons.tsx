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
`;
// Correctly define a custom SVG icon component
export const CustomDropdownIcon: React.ElementType = () => (
    <DropDownIconWrapper>
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
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_b_464_19879)">
            <circle cx="32" cy="32" r="32" fill="#2E2D2A" />
        </g>
        <g clip-path="url(#clip0_464_19879)">
            <path
                d="M39.6053 25.1384C38.2064 24.5076 36.707 24.0413 35.139 23.7761C35.125 23.7735 35.1106 23.7752 35.0976 23.7811C35.0847 23.787 35.0739 23.7968 35.0668 23.809C34.8748 24.1464 34.6608 24.5862 34.5109 24.9336C32.8479 24.6852 31.1572 24.6852 29.4942 24.9336C29.3272 24.5486 29.1389 24.1731 28.9301 23.809C28.923 23.7966 28.9123 23.7866 28.8994 23.7804C28.8865 23.7742 28.872 23.7721 28.8579 23.7743C27.2908 24.0394 25.7913 24.5057 24.3916 25.1375C24.3795 25.1426 24.3693 25.1512 24.3623 25.1622C21.5171 29.345 20.7372 33.4246 21.1203 37.4529C21.1213 37.4628 21.1244 37.4723 21.1293 37.481C21.1341 37.4896 21.1407 37.4972 21.1486 37.5032C22.8093 38.7123 24.6616 39.6333 26.6279 40.2278C26.6416 40.232 26.6563 40.232 26.67 40.2278C26.6837 40.2235 26.6958 40.2152 26.7047 40.204C27.1278 39.6381 27.5028 39.0378 27.8256 38.4093C27.8301 38.4007 27.8327 38.3912 27.8332 38.3815C27.8337 38.3719 27.8321 38.3622 27.8286 38.3532C27.825 38.3442 27.8196 38.336 27.8126 38.3293C27.8056 38.3226 27.7973 38.3174 27.7881 38.3142C27.1975 38.0918 26.6252 37.8234 26.0766 37.5114C26.0667 37.5058 26.0584 37.4978 26.0524 37.4882C26.0464 37.4786 26.0429 37.4676 26.0422 37.4563C26.0414 37.4449 26.0435 37.4336 26.0483 37.4233C26.053 37.413 26.0602 37.404 26.0693 37.3972C26.1845 37.3121 26.2997 37.2234 26.4094 37.1348C26.4193 37.1268 26.4312 37.1217 26.4438 37.1201C26.4563 37.1185 26.4691 37.1204 26.4807 37.1256C30.0711 38.7384 33.9596 38.7384 37.5079 37.1256C37.5195 37.1201 37.5324 37.1179 37.5452 37.1194C37.558 37.1208 37.5701 37.1258 37.5801 37.1338C37.6898 37.2234 37.8041 37.3121 37.9202 37.3972C37.9294 37.4039 37.9367 37.4127 37.9416 37.4229C37.9465 37.4332 37.9488 37.4445 37.9482 37.4558C37.9477 37.4671 37.9444 37.4781 37.9385 37.4878C37.9327 37.4975 37.9245 37.5057 37.9148 37.5114C37.368 37.826 36.7993 38.092 36.2023 38.3133C36.1931 38.3166 36.1848 38.3219 36.1778 38.3287C36.1708 38.3355 36.1654 38.3437 36.1618 38.3528C36.1583 38.3619 36.1567 38.3716 36.1572 38.3814C36.1577 38.3911 36.1603 38.4006 36.1648 38.4093C36.494 39.0374 36.8706 39.6353 37.2848 40.2031C37.2934 40.2148 37.3054 40.2235 37.3192 40.228C37.3329 40.2326 37.3477 40.2329 37.3616 40.2287C39.3313 39.6359 41.1866 38.7144 42.8492 37.5032C42.8573 37.4975 42.8641 37.4902 42.8691 37.4817C42.8742 37.4732 42.8773 37.4637 42.8784 37.4538C43.3356 32.7965 42.1122 28.7498 39.6336 25.164C39.6275 25.1524 39.6175 25.1433 39.6053 25.1384ZM28.3623 34.9999C27.2816 34.9999 26.3902 34.0225 26.3902 32.8239C26.3902 31.6244 27.2643 30.6479 28.3623 30.6479C29.4686 30.6479 30.3518 31.6326 30.3344 32.8239C30.3344 34.0234 29.4604 34.9999 28.3623 34.9999ZM35.6537 34.9999C34.5721 34.9999 33.6816 34.0225 33.6816 32.8239C33.6816 31.6244 34.5548 30.6479 35.6537 30.6479C36.76 30.6479 37.6432 31.6326 37.6259 32.8239C37.6259 34.0234 36.7609 34.9999 35.6537 34.9999Z"
                fill="white"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_464_19879"
                x="-6"
                y="-6"
                width="76"
                height="76"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_464_19879"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_464_19879"
                    result="shape"
                />
            </filter>
            <clipPath id="clip0_464_19879">
                <rect
                    width="21.9429"
                    height="21.9429"
                    fill="white"
                    transform="translate(21.0293 21.0312)"
                />
            </clipPath>
        </defs>
    </svg>
);

export const InstaIcon: React.FC = () => (
    <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_b_464_19879)">
            <circle cx="32" cy="32" r="32" fill="#2E2D2A" />
        </g>
        <g clip-path="url(#clip0_464_19879)">
            <path
                d="M39.6053 25.1384C38.2064 24.5076 36.707 24.0413 35.139 23.7761C35.125 23.7735 35.1106 23.7752 35.0976 23.7811C35.0847 23.787 35.0739 23.7968 35.0668 23.809C34.8748 24.1464 34.6608 24.5862 34.5109 24.9336C32.8479 24.6852 31.1572 24.6852 29.4942 24.9336C29.3272 24.5486 29.1389 24.1731 28.9301 23.809C28.923 23.7966 28.9123 23.7866 28.8994 23.7804C28.8865 23.7742 28.872 23.7721 28.8579 23.7743C27.2908 24.0394 25.7913 24.5057 24.3916 25.1375C24.3795 25.1426 24.3693 25.1512 24.3623 25.1622C21.5171 29.345 20.7372 33.4246 21.1203 37.4529C21.1213 37.4628 21.1244 37.4723 21.1293 37.481C21.1341 37.4896 21.1407 37.4972 21.1486 37.5032C22.8093 38.7123 24.6616 39.6333 26.6279 40.2278C26.6416 40.232 26.6563 40.232 26.67 40.2278C26.6837 40.2235 26.6958 40.2152 26.7047 40.204C27.1278 39.6381 27.5028 39.0378 27.8256 38.4093C27.8301 38.4007 27.8327 38.3912 27.8332 38.3815C27.8337 38.3719 27.8321 38.3622 27.8286 38.3532C27.825 38.3442 27.8196 38.336 27.8126 38.3293C27.8056 38.3226 27.7973 38.3174 27.7881 38.3142C27.1975 38.0918 26.6252 37.8234 26.0766 37.5114C26.0667 37.5058 26.0584 37.4978 26.0524 37.4882C26.0464 37.4786 26.0429 37.4676 26.0422 37.4563C26.0414 37.4449 26.0435 37.4336 26.0483 37.4233C26.053 37.413 26.0602 37.404 26.0693 37.3972C26.1845 37.3121 26.2997 37.2234 26.4094 37.1348C26.4193 37.1268 26.4312 37.1217 26.4438 37.1201C26.4563 37.1185 26.4691 37.1204 26.4807 37.1256C30.0711 38.7384 33.9596 38.7384 37.5079 37.1256C37.5195 37.1201 37.5324 37.1179 37.5452 37.1194C37.558 37.1208 37.5701 37.1258 37.5801 37.1338C37.6898 37.2234 37.8041 37.3121 37.9202 37.3972C37.9294 37.4039 37.9367 37.4127 37.9416 37.4229C37.9465 37.4332 37.9488 37.4445 37.9482 37.4558C37.9477 37.4671 37.9444 37.4781 37.9385 37.4878C37.9327 37.4975 37.9245 37.5057 37.9148 37.5114C37.368 37.826 36.7993 38.092 36.2023 38.3133C36.1931 38.3166 36.1848 38.3219 36.1778 38.3287C36.1708 38.3355 36.1654 38.3437 36.1618 38.3528C36.1583 38.3619 36.1567 38.3716 36.1572 38.3814C36.1577 38.3911 36.1603 38.4006 36.1648 38.4093C36.494 39.0374 36.8706 39.6353 37.2848 40.2031C37.2934 40.2148 37.3054 40.2235 37.3192 40.228C37.3329 40.2326 37.3477 40.2329 37.3616 40.2287C39.3313 39.6359 41.1866 38.7144 42.8492 37.5032C42.8573 37.4975 42.8641 37.4902 42.8691 37.4817C42.8742 37.4732 42.8773 37.4637 42.8784 37.4538C43.3356 32.7965 42.1122 28.7498 39.6336 25.164C39.6275 25.1524 39.6175 25.1433 39.6053 25.1384ZM28.3623 34.9999C27.2816 34.9999 26.3902 34.0225 26.3902 32.8239C26.3902 31.6244 27.2643 30.6479 28.3623 30.6479C29.4686 30.6479 30.3518 31.6326 30.3344 32.8239C30.3344 34.0234 29.4604 34.9999 28.3623 34.9999ZM35.6537 34.9999C34.5721 34.9999 33.6816 34.0225 33.6816 32.8239C33.6816 31.6244 34.5548 30.6479 35.6537 30.6479C36.76 30.6479 37.6432 31.6326 37.6259 32.8239C37.6259 34.0234 36.7609 34.9999 35.6537 34.9999Z"
                fill="white"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_464_19879"
                x="-6"
                y="-6"
                width="76"
                height="76"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_464_19879"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_464_19879"
                    result="shape"
                />
            </filter>
            <clipPath id="clip0_464_19879">
                <rect
                    width="21.9429"
                    height="21.9429"
                    fill="white"
                    transform="translate(21.0293 21.0312)"
                />
            </clipPath>
        </defs>
    </svg>
);

export const TelegramIcon: React.FC = () => (
    <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_b_464_19887)">
            <circle cx="32" cy="32" r="32" fill="#2E2D2A" />
        </g>
        <g clip-path="url(#clip0_464_19887)">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.1113 25.084C39.3372 24.9889 39.5845 24.9561 39.8274 24.989C40.0703 25.0219 40.3 25.1193 40.4925 25.2711C40.6849 25.4229 40.8332 25.6235 40.9219 25.852C41.0105 26.0806 41.0363 26.3287 40.9965 26.5706L38.9229 39.1484C38.7218 40.3617 37.3906 41.0574 36.2779 40.4531C35.3471 39.9475 33.9647 39.1685 32.7213 38.3557C32.0996 37.9489 30.1951 36.646 30.4292 35.7189C30.6303 34.9262 33.8303 31.9475 35.6589 30.1765C36.3766 29.4808 36.0493 29.0794 35.2018 29.7194C33.0962 31.3084 29.7179 33.7249 28.6006 34.4051C27.615 35.0049 27.1012 35.1073 26.4868 35.0049C25.3659 34.8184 24.3263 34.5294 23.4779 34.1774C22.3314 33.702 22.3871 32.1258 23.477 31.6668L39.1113 25.084Z"
                fill="white"
            />
        </g>
        <defs>
            <filter
                id="filter0_b_464_19887"
                x="-6"
                y="-6"
                width="76"
                height="76"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_464_19887"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_464_19887"
                    result="shape"
                />
            </filter>
            <clipPath id="clip0_464_19887">
                <rect
                    width="21.9429"
                    height="21.9429"
                    fill="white"
                    transform="translate(21.0293 21.0312)"
                />
            </clipPath>
        </defs>
    </svg>
);

export const TwitterIcon: React.FC = () => (
    <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_b_464_19893)">
            <circle cx="32" cy="32" r="32" fill="#2E2D2A" />
        </g>
        <path
            d="M38.4005 22.2578H41.8138L34.3564 30.7819L43.13 42.3789H36.2607L30.881 35.3444L24.724 42.3789H21.3088L29.2856 33.2612L20.8691 22.2587H27.9129L32.7759 28.6884L38.4005 22.2578ZM37.2031 40.3364H39.0943L26.8851 24.1936H24.8557L37.2031 40.3364Z"
            fill="white"
        />
        <defs>
            <filter
                id="filter0_b_464_19893"
                x="-6"
                y="-6"
                width="76"
                height="76"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_464_19893"
                />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_464_19893"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
);
