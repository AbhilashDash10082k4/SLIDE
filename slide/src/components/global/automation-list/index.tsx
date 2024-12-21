"use client";
import { usePath } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import GradientButton from "../gradient-button";
import { Button } from "@/components/ui/button";

type Props = {};

const AutomationList = (props: Props) => {
  //get automation list data
  //use client used to use pathname
  //getting the full pathName

  const { pathName } = usePath();

  //chk- if no automation exist, then show no automations
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        href={`${pathName}/123123123123123`}
        className="bg-[#1D1D1D] hover:opacity-90 transition duration-100 rounded-xl p-5 border-[1px] radial--gradient--automations flex border-[#545454]"
      >
        <div className="flex flex-col flex-1 items-start">
          <h2 className="text-xl font-semibold">Automation Name</h2>
          <p className="text-[#9B9CA0] text-sm font-light mb-2">
            This is instagram automation
          </p>
          {/*Rendering the automation keywords */}
          <div className="flex gap-x-2 flex-wrap mt-3">
            <div
              className={cn(
                /*default styling*/ "rounded-full px-4 py-1 capitalize",
                1 % 1 == 0 &&
                  "bg-keyword-green/15 border-2 border-keyword-green",
                (1 + 1) % 2 == 0 &&
                  "bg-keyword-purple/15 border-2 border-keyword-purple",
                (1 + 2) % 3 == 0 &&
                  "bg-keyword-yellow/15 border-2 border-keyword-yellow",
                (3 + 1) % 4 == 0 &&
                  "bg-keyword-red/15 border-2 border-keyword-red"
              )}
            >
              {/*KEYWORD*/}
              get started
            </div>
          </div>
          <div className="rounded-full border-2 mt-3 border-dashed border-white/60 px-3 py-1">
            <p className="text-sm text-[#bfc0c3] capitalize">No keywords</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="capitalize text-sm font-light text-[#9B9CA0]">
            {/*Fetching real date*/}
            December 21st 2024
          </p>
          {/*Whether the user using Smart AI or regular plan , custom component*/}
          <GradientButton
            type="BUTTON"
            className="w-full bg-background-80 text-white hover:bg-background-80"
          >
            Smart AI
          </GradientButton>
          <Button className="bg-background-80 hover:bg-background-80 text-white">Standard</Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
