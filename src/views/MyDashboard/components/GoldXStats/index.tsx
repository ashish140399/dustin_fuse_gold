import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CustomDropdownIcon,
    LayoutDistributeIcon,
    LayoutGridIcon,
    ThreeDotsIcon,
} from "../../../../assets/icons";
import {
    DashboardBalanceBG,
    DashboardBalanceMobileBG,
    GoldXRewardsBG,
    GoldXRewardsMobileBG,
    MiningPowerBG,
    MiningPowerMobileBG,
} from "../../../../assets/BG/BG";
import { PieChart, Pie, Sector, Cell } from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createGlobalStyle } from "styled-components";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { mobileBreakpoint } from "../../../../const";
import SiteVariablesContext from "../../../../contexts/SiteVariablesContext";
const GlobalStyle = createGlobalStyle`
  body {
 background: url(/images/common/dashboard_distribute_bg.png);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 100% 80vh;
    background-size: cover;
    min-height:100vh
  }


`;
const dataarea = [
    {
        name: "",
        uv: 1200,
        amt: 2400,
    },
    {
        name: "MON",
        uv: 1000,
        amt: 2400,
    },
    {
        name: "TUE",
        uv: 3000,
        amt: 2210,
    },
    {
        name: "WED",
        uv: 2000,
        amt: 2290,
    },
    {
        name: "THU",
        uv: 2780,
        amt: 2000,
    },
    {
        name: "FRI",
        uv: 1890,
        amt: 2181,
    },
    {
        name: "SAT",
        uv: 2390,
        amt: 2500,
    },
    {
        name: "SUN",
        uv: 700,
        amt: 2100,
    },
    {
        name: "",
        uv: 850,
        amt: 2400,
    },
];
const data = [
    { name: "Global", value: 70 },
    { name: "Personal", value: 10 },
    { name: "", value: 20 },
];

const COLORS = ["#B5FDF7", "#98BFFF", "#212223"];

interface NFTsListProps {}

const BalanceBox = () => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    return (
        <BalanceBoxWrapper>
            <DotIconWrapper>
                <ThreeDotsIcon />
            </DotIconWrapper>
            <div className="cardbg">
                {windowDimensions?.width > mobileBreakpoint ? (
                    <DashboardBalanceBG />
                ) : (
                    <DashboardBalanceMobileBG />
                )}
            </div>
            <ContentWrapper>
                <BoxHeader>
                    <h3>BALANCES</h3>
                    <h6>Last updated 2h ago</h6>
                </BoxHeader>
                <BalanceDataRow>
                    <Col>
                        <h1>
                            1,429.<span>4</span>
                        </h1>
                        <h6>GOLDX</h6>
                    </Col>
                    <Col>
                        <h1>
                            469.<span>4</span>
                        </h1>
                        <h6>USDX</h6>
                    </Col>
                    <Col>
                        <h1>
                            422.<span>1</span>
                        </h1>
                        <h6>FUSEG</h6>
                    </Col>
                </BalanceDataRow>
            </ContentWrapper>
        </BalanceBoxWrapper>
    );
};

const MiningPowerBox = ({ setChartContainersHeight }: any) => {
    const pieChartWrapperRef = useRef(null); // Ref to attach to the CardWrapper
    const { windowDimensions } = useContext(SiteVariablesContext);
    const [piechartwidth, setPiechartwidth] = useState(0); // State for bottom icon width
    useEffect(() => {
        // Function to update width
        const updateWidth = () => {
            const width = pieChartWrapperRef.current
                ? // @ts-ignore
                  pieChartWrapperRef.current.offsetWidth
                : 0;
            setPiechartwidth(width); // Example: set bottom icon width as half of card wrapper
        };

        updateWidth(); // Initial check

        window.addEventListener("resize", updateWidth); // Adjust on window resize

        return () => {
            window.removeEventListener("resize", updateWidth); // Cleanup listener
        };
    }, []);
    return (
        <MiningPowerBoxWrapper>
            <DotIconWrapper>
                <ThreeDotsIcon />
            </DotIconWrapper>
            <div className="cardbg">
                {windowDimensions?.width > mobileBreakpoint ? (
                    <MiningPowerBG />
                ) : (
                    <MiningPowerMobileBG />
                )}
            </div>
            <ContentWrapper>
                <BoxHeader>
                    <h3>Total Global Mining Power</h3>
                    <h6>Last updated 2h ago</h6>
                </BoxHeader>
                <MiningPowerRow>
                    <div className="leftchart" ref={pieChartWrapperRef}>
                        <PieChartBox
                            width={piechartwidth}
                            setChartContainersHeight={setChartContainersHeight}
                        />
                    </div>
                    <div className="rightdetails">
                        {data.map(
                            (item, index) =>
                                index < data.length - 1 && (
                                    <div className="row" key={index}>
                                        <div className="perc">
                                            {item.value} %
                                        </div>
                                        <div className="flex">
                                            <div className="label">
                                                {item.name}
                                            </div>
                                            <div
                                                className="box"
                                                style={{
                                                    background: `${COLORS[index]}`,
                                                    boxShadow: `0px 0px 94.831px 0px ${COLORS[index]}, 0px 0px 54.189px 0px ${COLORS[index]}, 0px 0px 31.61px 0px ${COLORS[index]}, 0px 0px 15.805px 0px ${COLORS[index]}, 0px 0px 4.516px 0px ${COLORS[index]}, 0px 0px 2.258px 0px ${COLORS[index]}`,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                )
                        )}
                    </div>
                </MiningPowerRow>
            </ContentWrapper>
        </MiningPowerBoxWrapper>
    );
};
const MiningPowerRow = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 40px;
    .leftchart {
        width: calc(100% - 180px);
    }
    .rightdetails {
        width: 170px;
        .row {
            margin-bottom: 30px;
            .perc {
                color: var(--UI-White, var(--Typography-Primary-white, #fff));
                font-family: Conthrax;
                font-size: 30px;
                font-style: normal;
                font-weight: 600;
                text-transform: uppercase;
            }
            .flex {
                display: flex;
                justify-content: space-between;
                .label {
                    color: var(--Text-Tertiary, #969696);
                    font-family: Telegraf;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                }
                .box {
                    width: 12px;
                    height: 12px;
                    border-radius: 2px;
                }
            }
        }
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: column;
        display: flex;

        .leftchart {
            width: calc(100% - 0px);
        }
        .rightdetails {
            width: 100%;
            .row {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .flex {
                    .label {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
`;
const GoldXRewardsBox = ({ chartContainersHeight }: any) => {
    const { windowDimensions } = useContext(SiteVariablesContext);
    const areachartWrapperRef = useRef(null); // Ref to attach to the CardWrapper
    const [areachartwidth, setAreachartwidth] = useState(0); // State for bottom icon width
    const [timeframe, setTimeframe] = React.useState("");
    useEffect(() => {
        // Function to update width
        const updateWidth = () => {
            const width = areachartWrapperRef.current
                ? // @ts-ignore
                  areachartWrapperRef.current.offsetWidth
                : 0;
            setAreachartwidth(width - 0); // Example: set bottom icon width as half of card wrapper
        };

        updateWidth(); // Initial check
        window.addEventListener("resize", updateWidth); // Adjust on window resize

        return () => {
            window.removeEventListener("resize", updateWidth); // Cleanup listener
        };
    }, []);

    return (
        <GoldXRewardsBoxWrapper>
            <div className="graphcontrols">
                <Select
                    labelId="dropdownCategory-select-label"
                    id="dropdownCategory-simple-select"
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                    displayEmpty
                    renderValue={
                        timeframe !== ""
                            ? undefined
                            : () => <span style={{ color: "#fff" }}>Daily</span>
                    }
                    IconComponent={CustomDropdownIcon}
                >
                    <MenuItem value={1}>Daily</MenuItem>
                    <MenuItem value={2}>Monthly</MenuItem>
                    <MenuItem value={3}>Weekly</MenuItem>
                </Select>
                <DotIconWrapper>
                    <ThreeDotsIcon />
                </DotIconWrapper>
            </div>
            <div className="cardbg">
                {windowDimensions?.width > mobileBreakpoint ? (
                    <GoldXRewardsBG />
                ) : (
                    <GoldXRewardsMobileBG />
                )}
            </div>
            <ContentWrapper>
                <BoxHeader>
                    <h3>GOLDX Rewards earned</h3>
                    <h6>Last updated 2h ago</h6>
                </BoxHeader>
                <GoldXrewardChartRow
                    ref={areachartWrapperRef}
                    style={{ height: `${chartContainersHeight}px` }}
                >
                    {chartContainersHeight && (
                        <AreaChartBox
                            width={areachartwidth}
                            height={chartContainersHeight}
                        />
                    )}
                </GoldXrewardChartRow>
            </ContentWrapper>
        </GoldXRewardsBoxWrapper>
    );
};

const AreaChartBox = ({ width, height }: any) => {
    console.log("chartContainersHeight", height);
    if (height) {
        return (
            <AreaChartBoxWrapper>
                <AreaChart
                    width={width}
                    height={height}
                    data={dataarea}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />

                    {/* <Tooltip /> */}
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="rgba(181, 253, 247, 1)"
                        fill="rgba(181, 253, 247, 0.06)"
                        strokeWidth={3}
                        style={{
                            filter: `drop-shadow(0px 0px 5px rgba(181, 253, 247, 1)) drop-shadow(0px 0px 10px rgba(181, 253, 247, 1))`,
                        }}
                    />
                </AreaChart>
            </AreaChartBoxWrapper>
        );
    } else {
        return <>hi</>;
    }
};
const AreaChartBoxWrapper = styled.div`
    svg {
        overflow: visible !important;
    }
`;
const GoldXrewardChartRow = styled.div`
    transform: translateX(0px);

    padding-top: 70px;
    padding-bottom: 10px;
    overflow: visible !important;
`;
const PieChartBox = ({ width, setChartContainersHeight }: any) => {
    const chartheightRowRef = useRef(null);

    useEffect(() => {
        let timeoutId: any; // Declare a variable to hold the timeout ID

        const updateHeight = () => {
            // Clear any existing timeout to prevent overlapping calls
            clearTimeout(timeoutId);

            // Add a delay before updating the height
            timeoutId = setTimeout(() => {
                if (chartheightRowRef.current && setChartContainersHeight) {
                    // @ts-ignore
                    const height = chartheightRowRef.current.offsetHeight;
                    setChartContainersHeight(height);
                }
            }, 1000); // Delay of 100 milliseconds
        };

        updateHeight();

        window.addEventListener("resize", updateHeight);

        return () => {
            clearTimeout(timeoutId);
            window.addEventListener("resize", updateHeight);
        };
    }, []);
    return (
        <PieChartBoxWrapper ref={chartheightRowRef}>
            <PieChart
                width={width}
                height={width}
                style={{ transform: "rotate(-90deg)scaleY(-1)" }}
                ref={chartheightRowRef}
            >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    // outerRadius={0}
                    innerRadius={width / 3}
                    stroke="transparent"
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                            style={{
                                filter: `drop-shadow(0px 0px 1px ${
                                    COLORS[index % COLORS.length]
                                }) 
                                       drop-shadow(0px 0px 4px ${
                                           COLORS[index % COLORS.length]
                                       }) 
                                         drop-shadow(0px 0px 10px ${
                                             COLORS[index % COLORS.length]
                                         }) 
                                        drop-shadow(0px 0px 40px ${
                                            COLORS[index % COLORS.length]
                                        }) 
                                      `,
                            }}
                        />
                    ))}
                </Pie>
            </PieChart>
        </PieChartBoxWrapper>
    );
};
const PieChartBoxWrapper = styled.div`
    svg {
        overflow: visible !important;
    }
`;

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow arrow-next`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ChevronRightIcon />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow arrow-prev`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <ChevronLeftIcon />
        </div>
    );
}
const GoldXStats: React.FC<NFTsListProps> = ({}) => {
    const [layoutSelector, setLayoutSelector] = React.useState("grid");
    const [chartContainersHeight, setChartContainersHeight] = useState(null);

    const sliderRef = useRef(null);
    const settings = {
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: mobileBreakpoint, // For tablets and small desktops
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const handleNext = () => {
        // @ts-ignore
        sliderRef?.current.slickNext();
    };

    const handlePrev = () => {
        // @ts-ignore
        sliderRef?.current.slickPrev();
    };
    const [activeButtons, setActiveButtons] = useState(["All"]);

    const buttons = [
        "All",
        "Global Stats",
        "My Stats",
        "Balances",
        "Total Global Mining Power",
        "GOLDX Rewards Earned",
        "Global Stats 2",
    ];

    const handleButtonClick = (buttonName: string) => {
        if (buttonName === "All") {
            if (activeButtons.includes("All")) {
                // Uncheck all if "All" is already selected
                setActiveButtons([]);
            } else {
                // Check all buttons when "All" is clicked
                setActiveButtons(buttons);
            }
        } else {
            // Handle individual button selection
            if (activeButtons.includes(buttonName)) {
                // Remove the button if it is already selected
                setActiveButtons(
                    activeButtons.filter((btn) => btn !== buttonName)
                );
            } else {
                // Add the button if it is not selected
                setActiveButtons([
                    ...activeButtons.filter((btn) => btn !== "All"),
                    buttonName,
                ]);
            }
        }
    };

    return (
        <Layout>
            {layoutSelector === "distribute" && <GlobalStyle />}
            <OptionsWrapper className="paddinglayoutx paddinglayouty">
                {layoutSelector === "grid" ? (
                    <SelectBoxWrapper>
                        {buttons.map((buttonName) => (
                            <MuiButtonStyle
                                key={buttonName}
                                variant="contained"
                                className={
                                    activeButtons.includes(buttonName)
                                        ? "active"
                                        : ""
                                }
                                onClick={() => handleButtonClick(buttonName)}
                            >
                                {buttonName}
                            </MuiButtonStyle>
                        ))}
                    </SelectBoxWrapper>
                ) : (
                    <SliderButtonWrapper>
                        <SamplePrevArrow onClick={handlePrev} />
                        <SampleNextArrow onClick={handleNext} />
                    </SliderButtonWrapper>
                )}
                <LayoutSelectorWrapper>
                    <div
                        className={`iconwrapper ${
                            layoutSelector === "grid" ? "active" : ""
                        }`}
                        onClick={() => setLayoutSelector("grid")}
                    >
                        <LayoutGridIcon />
                    </div>

                    <div
                        className={`iconwrapper ${
                            layoutSelector === "distribute" ? "active" : ""
                        }`}
                        onClick={() => setLayoutSelector("distribute")}
                    >
                        <LayoutDistributeIcon />
                    </div>
                </LayoutSelectorWrapper>
            </OptionsWrapper>
            {layoutSelector === "grid" ? (
                <>
                    <DataRows className="paddinglayoutx">
                        <BalanceRow>
                            <LeftColumn>
                                <BalanceBox />
                            </LeftColumn>
                            <RightColumn>
                                <div className="imgwrapper">
                                    <img
                                        src="/images/common/goldimg.png"
                                        alt=""
                                    />
                                </div>
                            </RightColumn>
                        </BalanceRow>
                    </DataRows>
                    <DataRows className="row2 paddinglayoutx">
                        <ChartDataRow>
                            <LeftColumn>
                                <MiningPowerBox
                                    setChartContainersHeight={
                                        setChartContainersHeight
                                    }
                                />
                            </LeftColumn>
                            <RightColumn>
                                <GoldXRewardsBox
                                    chartContainersHeight={
                                        chartContainersHeight
                                    }
                                />
                            </RightColumn>
                        </ChartDataRow>
                    </DataRows>
                </>
            ) : (
                <>
                    <div className="slider-container">
                        <SliderStyled ref={sliderRef} {...settings}>
                            <SliderCardWrapper className="balancebox">
                                <BalanceBox />
                            </SliderCardWrapper>
                            <SliderCardWrapper>
                                <MiningPowerBox
                                    setChartContainersHeight={
                                        setChartContainersHeight
                                    }
                                />
                            </SliderCardWrapper>
                            <SliderCardWrapper>
                                <GoldXRewardsBox
                                    chartContainersHeight={
                                        chartContainersHeight
                                    }
                                />
                            </SliderCardWrapper>
                            <SliderCardWrapper className="balancebox">
                                <BalanceBox />
                            </SliderCardWrapper>
                            <SliderCardWrapper>
                                <MiningPowerBox
                                    setChartContainersHeight={
                                        setChartContainersHeight
                                    }
                                />
                            </SliderCardWrapper>
                            <SliderCardWrapper>
                                <GoldXRewardsBox
                                    chartContainersHeight={
                                        chartContainersHeight
                                    }
                                />
                            </SliderCardWrapper>
                        </SliderStyled>
                    </div>
                </>
            )}
        </Layout>
    );
};

const SliderButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    .arrow-prev {
        margin-right: 20px;
    }
`;
const SliderCardWrapper = styled.div``;

const SliderStyled = styled(Slider)`
    margin-top: 4vh;
    margin-bottom: 7vh;
    .slick-arrow {
        display: none !important;
    }
    .slick-slide {
        opacity: 0;
    }
    .slick-active {
        opacity: 1;
        transition: all 0.2s ease;
    }
    .slick-active {
        transform: skewY(10deg) scale(0.82);
        opacity: 0.6;
    }
    .slick-active.slick-center {
        transform: skewY(0deg) scale(1);
        opacity: 1;
    }

    .slick-center + .slick-active {
        transform: skewY(-10deg) scale(0.82);
        opacity: 0.6;
    }
    .slick-track {
        display: flex;
        align-items: center;
    }
    ${SliderCardWrapper} {
        margin: auto;
        // display: flex !important;
        // justify-content: center;
    }
`;

const OptionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        flex-direction: row-reverse;
        overflow-x: auto;
        scrollbar-width: none;
        white-space: nowrap;
    }
`;
const LayoutSelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 3px;
    border-radius: 32px;
    border: 1px solid var(--Lines-Divider, #383838);
    background: var(--background-surface-1, #232323);
    .iconwrapper {
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        &.active {
            background: #fff;
            svg {
                path {
                    stroke: #111111;
                }
            }
        }
    }
`;
const MuiButtonStyle = styled(Button)`
    border-radius: 100px !important;
    padding: 14px 28px !important;
    background: var(--background-surface-2, #2e2d2a) !important;
    color: var(--Text-Tertiary, #969696) !important;
    font-family: "Telegraf", sans-serif !important;
    text-transform: none !important;
    box-shadow: none !important;
    flex: 1 1 auto; /* Let buttons grow but not shrink */
    flex-shrink: 0;
    &.active {
        background: var(--Typography-Primary-white, #fff) !important;
        color: var(--Brand-Dark, #111) !important;
    }
`;
const SelectBoxWrapper = styled.div`
    @media screen and (max-width: ${mobileBreakpoint}px) {
        display: flex;
        margin-left: 20px;
    }
`;
const LeftColumn = styled.div``;
const RightColumn = styled.div``;

const BoxHeader = styled.div`
    border-bottom: 1px solid #383838;
    padding: 40px;
    box-sizing: border-box;
    h3 {
        overflow: hidden;
        color: var(--Text-Primary, var(--Typography-Primary-white, #fff));
        font-feature-settings: "liga" off, "clig" off;
        text-overflow: ellipsis;
        font-family: Conthrax;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 12px;
        line-height: 32px;
    }
    h6 {
        color: var(--Text-Tertiary, #969696);
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
    }
`;
const Col = styled.div`
    padding: 40px;
    h1 {
        color: var(--UI-White, var(--Typography-Primary-white, #fff));
        font-feature-settings: "liga" off, "clig" off;

        /* Title/H3 */
        font-family: Conthrax;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: 56px; /* 116.667% */
        text-transform: uppercase;
        margin: 0;
        margin-bottom: 12px;
        span {
            color: var(--UI-White, var(--Typography-Primary-white, #fff));
            font-feature-settings: "liga" off, "clig" off;

            /* Title/H5 */
            font-family: Conthrax;
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            text-transform: uppercase;
        }
    }
    h6 {
        color: var(--Text-Tertiary, #969696);
        font-family: Telegraf;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
    }
`;
const BalanceDataRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${Col} {
        width: 33.33%;
        border-right: 1px solid #383838;
        &:last-child {
            border-right: 0;
        }
    }
`;

const BoxWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    background: linear-gradient(to left, transparent 35%, #121212 25%),
        linear-gradient(to bottom, transparent 35%, #121212 25%);
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    overflow: hidden;
    .cardbg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${BoxHeader} {
            h3 {
                max-width: 70%;
            }
        }
    }
`;
const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
`;
const BalanceBoxWrapper = styled(BoxWrapper)`
    min-width: 1000px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        min-width: 85vw;
        ${BalanceDataRow} {
            flex-direction: column;
            ${Col} {
                width: 100%;
                box-sizing: border-box;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                h1 {
                    margin: 0;
                }
                h6 {
                    transform: translateY(-10px);
                }
            }
        }
    }
`;

const MiningPowerBoxWrapper = styled(BoxWrapper)`
    min-width: 600px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        min-width: 85vw;
    }
`;
const BalanceRow = styled.div`
    display: flex;
    justify-content: space-between;
    ${LeftColumn} {
        width: calc(80% - 10px);
    }
    ${RightColumn} {
        width: calc(20% - 10px);
        .imgwrapper {
            border-radius: 24px;
            overflow: hidden;
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
`;
const ChartDataRow = styled.div`
    display: flex;
    justify-content: space-between;
    ${LeftColumn} {
        width: calc(40% - 10px);
    }
    ${RightColumn} {
        width: calc(60% - 10px);
    }
`;

const DotIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    align-self: stretch;
    margin: auto 0;
    cursor: pointer;
    border-radius: 32px;
    border: 1.5px solid var(--Lines-Divider, #383838);
    background: var(--Brand-Dark, #111);
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
`;
const GoldXRewardsBoxWrapper = styled(BoxWrapper)`
    min-width: 775px;
    .graphcontrols {
        position: absolute;
        z-index: 2;
        right: 0;
        top: 0;
        display: flex;
        .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
            background: #111;
            z-index: -3;
        }
        .MuiSelect-select {
            color: #fff;
        }
        ${DotIconWrapper} {
            position: relative;
            margin-left: 20px;
        }
    }
    ${ContentWrapper} {
        overflow: hidden;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        min-width: 85vw;
        .graphcontrols {
            .MuiInputBase-root {
                display: none;
            }
        }
    }
`;
const DataRows = styled.div`
    &.row2 {
        margin-top: 40px;
    }
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${BalanceRow} {
            flex-direction: column;
            ${LeftColumn} {
                width: 100%;
            }
            ${RightColumn} {
                width: 100%;
                margin-top: 40px;
            }
        }
        ${ChartDataRow} {
            flex-direction: column;
            ${LeftColumn} {
                width: 100%;
            }
            ${RightColumn} {
                width: 100%;
                margin-top: 40px;
            }
        }
    }
`;
const Layout = styled.section`
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
    @media screen and (max-width: ${mobileBreakpoint}px) {
        ${SliderStyled} {
            .slick-track {
                align-items: flex-start;
            }
        }
    }
`;
export default GoldXStats;
