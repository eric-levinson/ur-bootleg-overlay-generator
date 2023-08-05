"use client";
import React from "react";
import { useState, useEffect } from "react";
import Select from "react-tailwindcss-select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Input,
  Code,
} from "@nextui-org/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Slider from "rc-slider";
import Range from "rc-slider";
import "rc-slider/assets/index.css";

import { LeftGraphic } from "./left";
import { RightGraphic } from "./right";
import { as } from "@directus/sdk/dist/index-0e55ee84";

export const Teamselector = (params: { teams: any }) => {
  const pathname = usePathname();

  let teamOptions = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" },
  ];

  const bestOptions = [
    { value: 1, label: "Best of 1" },
    { value: 3, label: "Best of 3" },
    { value: 5, label: "Best of 5" },
    { value: 7, label: "Best of 7" },
  ] as any;

  let teams = params! ? params.teams : null;

  if (teams) {
    teamOptions = teams.map((team: { abbreviation: any; name: any }) => {
      return { value: team.abbreviation, label: team.name };
    });
  }

  //state for home team, away team, and best of
  //const [selectedOption, setSelectedOption] = useState(options);
  const [home, setHome] = useState(teamOptions[0]);
  const [away, setAway] = useState(teamOptions[0]);
  const [bestOf, setBestOf] = useState(bestOptions[2]) as any;
  const [homeYvalue, setHomeYvalue] = useState(0) as any;
  const [awayYvalue, setAwayYvalue] = useState(0) as any;
  const [baseUrl, setBaseUrl] = useState("") as any;

  const handleChange = (e: { type: any; value: any }) => {
    //console.log(e);
    const { type, value } = e;
    if (type === "home") setHome(value);
    if (type === "away") setAway(value);
    if (type === "bestOf") setBestOf(value);
  };

  function handleYChange({
    value,
    type,
  }: {
    value: any;
    type: any;
  }): 0 | undefined {
    if (value >= -29 && value <= 29 && type === "home") {
      setHomeYvalue(value);
    } else if (value >= -29 && value <= 29 && type === "away") {
      setAwayYvalue(value);
    } else {
      return 0;
    }
  }

  function teamsFilter(value: any): any {
    //value is specific team abbreviation
    //return only specific team
    return teams.filter(
      (team: { abbreviation: any }) => team.abbreviation === value
    );
  }


  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  // three columns, one for each team, one for best of
  //tailwindcss grid
  return (
    <>
      <Card className="h-[30rem]">
        <div className="p-4 grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="text-gray-200 text-sm font-bold mb-2">
              Home Team
            </label>
            <Select
              primaryColor={"blue"}
              isSearchable={true}
              value={home}
              onChange={(currentValue) =>
                handleChange({ type: "home", value: currentValue })
              }
              options={teamOptions}
            />
          </div>
          <div>
            <label className="text-gray-200 text-sm font-bold mb-2">
              Best of
            </label>
            <Select
              primaryColor={"green"}
              value={bestOf}
              onChange={(currentValue) =>
                handleChange({ type: "bestOf", value: currentValue })
              }
              options={bestOptions}
            />
          </div>
          <div>
            <label className="text-gray-200 text-sm font-bold mb-2">
              Away Team
            </label>
            <Select
              primaryColor={"orange"}
              isSearchable={true}
              value={away}
              onChange={(currentValue) =>
                handleChange({ type: "away", value: currentValue })
              }
              options={teamOptions}
            />
          </div>
        </div>

        <Divider />
        <CardBody>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <LeftGraphic
                team={teams.filter(
                  (team: { abbreviation: any }) =>
                    team.abbreviation === home.value
                )}
                bestOf={bestOf.value}
                homeYvalue={homeYvalue}
              />
            </div>
            <div>
              <RightGraphic
                team={teams.filter(
                  (team: { abbreviation: any }) =>
                    team.abbreviation === away.value
                )}
                bestOf={bestOf.value}
                awayYvalue={awayYvalue}
              />
            </div>
          </div>
          <div className="p-4 grid grid-cols-6 gap-4 mb-4">
            <div>
              <label className="text-gray-200 text-sm font-bold mb-2">
                Home Image Verticality
              </label>
              <Slider
                min={-29}
                max={29}
                value={homeYvalue}
                onChange={(value) => setHomeYvalue(value)}
              />
            </div>
            <div>
              <Input
                type="number"
                isDisabled
                className=""
                value={homeYvalue.toString()}
              />
            </div>
            <div></div>
            <div></div>
            <div>
              <label className="text-gray-200 text-sm font-bold mb-2">
                Away Image Verticality
              </label>
              <Slider
                min={-29}
                max={29}
                value={awayYvalue}
                onChange={(value) => setAwayYvalue(value)}
              />
            </div>
            <div>
              <Input
                type="number"
                isDisabled
                className=""
                value={awayYvalue.toString()}
              />
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="container">
            <div className="text-center">
              <h2 className="text-2xl font-bold underline">Step 1</h2>
              <p className="">
                Add this URL as an OBS browser sourse.{" "}
                <strong>(Width = 1920, Height = 1080)</strong>
              </p>

              <Code className="ml-2  mr-2" color="primary">
                {baseUrl + `/gen?home=${home.value}&away=${
                  away.value
                }&bestOf=${
                  bestOf.value
                }&homeYvalue=${homeYvalue}&awayYvalue=${awayYvalue}`}
              </Code>
              <Link
                className="ml-2"
                href={{
                  pathname: "/gen",
                  query: {
                    home: home.value,
                    away: away.value,
                    bestOf: bestOf.value,
                    homeYvalue: homeYvalue,
                    awayYvalue: awayYvalue,
                  },
                }}
                target="_blank"
              >
                <Button color="primary" size="sm" variant="flat" className="">
                  Preview
                </Button>
              </Link>
            </div>
            <div></div>
            
          </div>
          <div className="container text-center">
          <h2 className="text-2xl font-bold underline">Step 2</h2>
              <p className="">
                Extract the zip and add the images in OBS for the series lights.
              </p>
              <Link href="/res/Lights.zip">
                <Button
                  color="primary"
                  size="sm"
                  variant="flat"
                  className="ml-2"
                >
                  Lights Download
                </Button>
              </Link>
            </div>
        </CardFooter>
      </Card>
    </>
  );
};
