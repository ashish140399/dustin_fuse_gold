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
