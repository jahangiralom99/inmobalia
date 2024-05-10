"use client";
import { Box } from "@mui/material";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

const Properties = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      name: "Sales",
      route: "sales",
    },
    {
      name: "Short term",
      route: "short_term",
    },
    {
      name: "Long term",
      route: "long_term",
    },
    {
      name: "All",
      route: "all",
    },
  ];

  return (
    <div>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "30px",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <HomeIcon />
          <Link href="/">Properties</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          {open ? <KeyboardArrowDownIcon /> : <RemoveIcon />}
        </Box>
        <div className={`absolute  ${!open ? "top-8  bg-[#444444] w-full rounded-md" : "hidden"}`}>
          {links.map((item, index) => {
            return (
              <div
                onClick={(e) => e.stopPropagation()}
                key={index}
                className="border-l-1 relative left-10"
              >
                <div className="border-l-2 p-3">
                  <div className=" cursor-pointer ml-10 relative flex  justify-center rounded flex-col  md:space-y-0">
                    <div className="w-6 border bg-slate-200 absolute -left-[52px] top-2 z-0"></div>
                    <Link href={`/${item.route}`} className=" ">
                      {item.name}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Box>
    </div>
  );
};

export default Properties;
