import React from "react";
import { useState, useEffect, useRef } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import TuneIcon from "@mui/icons-material/Tune";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

import eth from "../assets/images/eth.png";

import History from "../components/History";
import Chart from "../components/Chart";

const organizeNumber = (param) => {
  return parseFloat(param).toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};

function Perps() {
  const [tradeType, setTradeType] = useState("long");
  const [leverage, setLeverage] = useState(1.2);
  const [collateral, setCollateral] = useState(organizeNumber(1348.23));
  const [size, setSize] = useState(organizeNumber(17809.59));

  const handleTrade = (type) => {
    setTradeType(type);
  };

  const changeLeverage = (step) => {
    if (step === -0.1) {
      if (leverage <= 1.1) return;
      else setLeverage((prev) => ((prev * 10 + step * 10) / 10).toFixed(1));
    }

    if (step === 0.1) {
      if (leverage >= 4.9) return;
      else setLeverage((prev) => ((prev * 10 + step * 10) / 10).toFixed(1));
    }
  };

  const marks = [
    {
      value: 1.1,
      label: "1.1x",
    },
    {
      value: 2,
      label: "2x",
    },
    {
      value: 3,
      label: "3x",
    },
    {
      value: 4,
      label: "4x",
    },
    {
      value: 5,
      label: "5x",
    },
  ];

  return (
    <>
      <div className="hidden lg:flex lg:flex-1 min-h-full">
        <div className="w-[calc(100vw-360px)] flex flex-col">
          <Chart />
          <History />
        </div>
        <div className="w-[360px] bg-[#1c2936] flex flex-col text-white text-[25px]">
          <div className="bg-[#304256] px-4 py-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center rounded-full bg-[#19232D]">
                <button
                  type="button"
                  className={`w-[70px] h-7 lg:h-auto lg:w-20 flex flex-row items-center justify-center font-semibold space-x-2 text-white/50 fill-current border-2 border-transparent rounded-full px-2 py-1 lg:m-1 bg-perps-green transition-all duration-200 ${
                    tradeType === "long" ? "long-trade" : ""
                  }`}
                  onClick={() => handleTrade("long")}
                >
                  <span className="text-xs lg:text-sm leading-none">Long</span>
                  <TrendingUpIcon
                    className={`${tradeType === "long" ? "long-trade" : ""}`}
                  />
                </button>
                <button
                  type="button"
                  className={`w-[70px] h-7 lg:h-auto lg:w-20 flex flex-row items-center justify-center font-semibold space-x-2 text-white/50 fill-current border-2 border-transparent rounded-full px-2 py-1 lg:m-1 bg-perps-green transition-all duration-200 ${
                    tradeType === "short" ? "short-trade" : ""
                  }`}
                  onClick={() => handleTrade("short")}
                >
                  <span className="text-xs lg:text-sm leading-none">Short</span>
                  <TrendingDownIcon
                    className={`${tradeType === "short" ? "short-trade" : ""}`}
                  />
                </button>
              </div>
              <div className="flex items-center">
                <IconButton aria-label="add an alarm">
                  <RefreshIcon />
                </IconButton>
                <IconButton aria-label="add an alarm">
                  <TuneIcon />
                </IconButton>
              </div>
            </div>
            <div>
              <div className="text-white text-xs font-[500] flex flex-row justify-between px-2 lg:px-4">
                You're paying
              </div>
              <div className="bg-[#19232D] rounded-xl h-14 pl-3 pr-2 py-2 lg:p-4 mt-2">
                <div className="flex flex-col dark:text-white h-full justify-center">
                  <div className="flex justify-between">
                    <div className="p-1 lg:p-1 lg:pr-4 rounded-lg flex items-center bg-[#304256]">
                      <img src={eth} alt="eth icon" className="w-[40px]" />
                      <div className="font-semibold text-xs lg:text-base">
                        ETH
                      </div>
                    </div>
                    <div className="text-right">
                      <input
                        placeholder="0.00"
                        className="bg-transparent text-right font-semibold dark:placeholder:text-white/25 outline-none text-lg w-[200px]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-white text-xs font-[500] flex flex-row justify-between px-2 lg:px-4">
                Size of {tradeType === "long" ? "Long" : "Short"}
              </div>
              <div className="bg-[#19232D] rounded-xl h-14 pl-3 pr-2 py-2 lg:p-4 mt-2">
                <div className="flex flex-col dark:text-white h-full justify-center">
                  <div className="flex items-center">
                    <div className="p-1 pr-2 lg:p-1 lg:pr-4 rounded-lg flex items-center bg-[#304256]">
                      <img src={eth} alt="eth icon" className="w-[40px]" />
                      <div className="font-semibold text-xs lg:text-base">
                        ETH
                      </div>
                    </div>
                    <div className="">
                      <input
                        inputMode="decimal"
                        data-lpignore="true"
                        placeholder="0.00"
                        className="h-full bg-transparent text-right font-semibold dark:placeholder:text-white/25 outline-none text-lg w-[200px]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-white text-xs font-[500] flex flex-row justify-between px-2 lg:px-4">
                Leverage
              </div>
              <div className="bg-[#19232D] rounded-xl h-14 pl-3 pr-2 py-2 lg:p-4 mt-2">
                <div className="flex dark:text-white h-full">
                  <IconButton
                    aria-label="add an alarm"
                    onClick={() => changeLeverage(-0.1)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <input
                    inputMode="decimal"
                    placeholder="0.00"
                    className="bg-transparent disabled:opacity-100 disabled:text-black dark:text-white text-right dark:placeholder:text-white/25 outline-none font-semibold text-white text-xs lg:text-sm !text-center w-full h-full"
                    type="text"
                    value={`${leverage}x`}
                    onChange={(event) => {
                      setLeverage(event.target.value.replace("x", ""));
                    }}
                  />
                  <IconButton
                    aria-label="add an alarm"
                    onClick={() => changeLeverage(0.1)}
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Box sx={{ width: 300 }}>
                <Slider
                  aria-label="Restricted values"
                  defaultValue={1.1}
                  step={0.1}
                  valueLabelDisplay="auto"
                  marks={marks}
                  max={5.0}
                  min={1.1}
                  sx={{
                    color: "#32df7b",
                  }}
                />
              </Box>
            </div>
            <div>
              <div className="border-t border-t-black/10 lg:pt-4 px-2 lg:px-4">
                <div className="hidden lg:block">
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50 ">Collateral</span>
                    <div>
                      <div
                        translate="no"
                        className="text-xs text-white/75 mt-0.5"
                      >
                        <span>{collateral} USD</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50 leading-none">
                      Size in USD
                    </span>
                    <div
                      translate="no"
                      className="text-xs text-white/75 mt-0.5"
                    >
                      <span
                        translate="no"
                        className="text-xs h-[14px] text-white/75"
                      >
                        <span>{size} USD</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full !bg-transparent css-g53se3">
              <button className="h-full rounded-xl text-white group bg-none bg-[#141519] hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(0,190,240,1)] border border-transparent hover:border hover:border-[#c7f284] w-full transition-all duration-200">
                <div className="rounded-xl bg-v2-text-gradient bg-clip-text text-transparent group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] py-5 text-lg font-medium leading-none">
                  <span>Connect Wallet</span>
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-lg p-3 w-full">
            <div className="border border-white/5 rounded-lg p-3 w-full">
              <div className="space-y-1">
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                  <span className="text-xs text-white/50">Entry price</span>
                  <span className="text-xs text-white/50">$3200</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                  <span className="text-xs text-white/50">
                    Liquidation price
                  </span>
                  <span className="text-xs text-white/50">-</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                  <span className="text-xs text-white/50">
                    Open fee (0.07%)
                  </span>
                  <span className="text-xs text-white/50">-</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                  <span className="text-xs text-white/50">Impact Fee</span>
                  <span className="text-xs text-white/50">-</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                  <span className="text-xs text-white/50">Borrow rate</span>
                  <span className="text-xs text-white/50">-</span>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                  <span className="text-xs text-white/50">
                    Available liquidity
                  </span>
                  <span className="text-xs text-white/50">
                    ${organizeNumber(15000000)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:hidden min-h-full w-100">
        <div className="flex flex-col w-full">
          <Chart />
          <div className="bg-[#1c2936] flex flex-col text-white text-[25px]">
            <div className="bg-[#304256] px-4 py-5 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center rounded-full bg-[#19232D]">
                  <button
                    type="button"
                    className={`w-[70px] h-7 lg:h-auto lg:w-20 flex flex-row items-center justify-center font-semibold space-x-2 text-white/50 fill-current border-2 border-transparent rounded-full px-2 py-1 lg:m-1 bg-perps-green transition-all duration-200 ${
                      tradeType === "long" ? "long-trade" : ""
                    }`}
                    onClick={() => handleTrade("long")}
                  >
                    <span className="text-xs lg:text-sm leading-none">
                      Long
                    </span>
                    <TrendingUpIcon
                      className={`${tradeType === "long" ? "long-trade" : ""}`}
                    />
                  </button>
                  <button
                    type="button"
                    className={`w-[70px] h-7 lg:h-auto lg:w-20 flex flex-row items-center justify-center font-semibold space-x-2 text-white/50 fill-current border-2 border-transparent rounded-full px-2 py-1 lg:m-1 bg-perps-green transition-all duration-200 ${
                      tradeType === "short" ? "short-trade" : ""
                    }`}
                    onClick={() => handleTrade("short")}
                  >
                    <span className="text-xs lg:text-sm leading-none">
                      Short
                    </span>
                    <TrendingDownIcon
                      className={`${
                        tradeType === "short" ? "short-trade" : ""
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center">
                  <IconButton aria-label="add an alarm">
                    <RefreshIcon />
                  </IconButton>
                  <IconButton aria-label="add an alarm">
                    <TuneIcon />
                  </IconButton>
                </div>
              </div>
              <div>
                <div className="text-white text-xs font-[500] flex flex-row justify-between px-2 lg:px-4">
                  You're paying
                </div>
                <div className="bg-[#19232D] rounded-xl h-14 pl-3 pr-2 py-2 lg:p-4 mt-2">
                  <div className="flex flex-col dark:text-white h-full justify-center">
                    <div className="flex justify-between">
                      <div className="p-1 lg:p-1 lg:pr-4 rounded-lg flex items-center bg-[#304256]">
                        <img src={eth} alt="eth icon" className="w-[40px]" />
                        <div className="font-semibold text-xs lg:text-base">
                          ETH
                        </div>
                      </div>
                      <div className="text-right">
                        <input
                          placeholder="0.00"
                          className="bg-transparent text-right font-semibold dark:placeholder:text-white/25 outline-none text-lg w-[200px]"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white text-xs font-[500] flex flex-row justify-between px-2 lg:px-4">
                  Size of {tradeType === "long" ? "Long" : "Short"}
                </div>
                <div className="bg-[#19232D] rounded-xl h-14 pl-3 pr-2 py-2 lg:p-4 mt-2">
                  <div className="flex flex-col dark:text-white h-full justify-center">
                    <div className="flex items-center">
                      <div className="p-1 pr-2 lg:p-1 lg:pr-4 rounded-lg flex items-center bg-[#304256]">
                        <img src={eth} alt="eth icon" className="w-[40px]" />
                        <div className="font-semibold text-xs lg:text-base">
                          ETH
                        </div>
                      </div>
                      <div className="">
                        <input
                          inputMode="decimal"
                          data-lpignore="true"
                          placeholder="0.00"
                          className="h-full bg-transparent text-right font-semibold dark:placeholder:text-white/25 outline-none text-lg w-[200px]"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-white text-xs font-[500] flex flex-row justify-between px-2 lg:px-4">
                  Leverage
                </div>
                <div className="bg-[#19232D] rounded-xl h-14 pl-3 pr-2 py-2 lg:p-4 mt-2">
                  <div className="flex dark:text-white h-full">
                    <IconButton
                      aria-label="add an alarm"
                      onClick={() => changeLeverage(-0.1)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <input
                      inputMode="decimal"
                      placeholder="0.00"
                      className="bg-transparent disabled:opacity-100 disabled:text-black dark:text-white text-right dark:placeholder:text-white/25 outline-none font-semibold text-white text-xs lg:text-sm !text-center w-full h-full"
                      type="text"
                      value={`${leverage}x`}
                      onChange={(event) => {
                        setLeverage(event.target.value.replace("x", ""));
                      }}
                    />
                    <IconButton
                      aria-label="add an alarm"
                      onClick={() => changeLeverage(0.1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label="Restricted values"
                    defaultValue={1.1}
                    // getAriaValueText={valuetext}
                    step={0.1}
                    valueLabelDisplay="auto"
                    marks={marks}
                    max={5.0}
                    min={1.1}
                    sx={{
                      color: "#32df7b",
                    }}
                  />
                </Box>
              </div>
              <div>
                <div className="border-t border-t-black/10 lg:pt-4 px-2 lg:px-4">
                  <div className="hidden lg:block">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                      <span className="text-xs text-white/50 ">Collateral</span>
                      <div>
                        <div
                          translate="no"
                          className="text-xs text-white/75 mt-0.5"
                        >
                          <span>{collateral} USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                      <span className="text-xs text-white/50 leading-none">
                        Size in USD
                      </span>
                      <div
                        translate="no"
                        className="text-xs text-white/75 mt-0.5"
                      >
                        <span
                          translate="no"
                          className="text-xs h-[14px] text-white/75"
                        >
                          <span>{size} USD</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full !bg-transparent css-g53se3">
                <button className="h-full rounded-xl text-white group bg-none bg-[#141519] hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(0,190,240,1)] border border-transparent hover:border hover:border-[#c7f284] w-full transition-all duration-200">
                  <div className="rounded-xl bg-v2-text-gradient bg-clip-text text-transparent group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] py-5 text-lg font-medium leading-none">
                    <span>Connect Wallet</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="rounded-lg p-3 w-full">
              <div className="border border-white/5 rounded-lg p-3 w-full">
                <div className="space-y-1">
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50">Entry price</span>
                    <span className="text-xs text-white/50">$3200</span>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50">
                      Liquidation price
                    </span>
                    <span className="text-xs text-white/50">-</span>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50">
                      Open fee (0.07%)
                    </span>
                    <span className="text-xs text-white/50">-</span>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50">Impact Fee</span>
                    <span className="text-xs text-white/50">-</span>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50">Borrow rate</span>
                    <span className="text-xs text-white/50">-</span>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                    <span className="text-xs text-white/50">
                      Available liquidity
                    </span>
                    <span className="text-xs text-white/50">
                      ${organizeNumber(15000000)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <History />
        </div>
      </div>
    </>
  );
}

export default Perps;
