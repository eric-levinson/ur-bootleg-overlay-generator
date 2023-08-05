"use client";
import { useSearchParams } from "next/navigation";
import { LeftGraphic } from "./left";
import { RightGraphic } from "./right";

export default function Gen(params: any) {
  const teams = params! ? params.teams : null;

  const searchParams = useSearchParams();
  const search = searchParams!.get("home");

  const teamsFilter = (value: any) => {
    //value is specific team abbreviation
    //return only specific team
    return teams.filter(
      (team: { abbreviation: any }) => team.abbreviation === value
    );
  };

  const home = teamsFilter(searchParams!.get("home"));
  const away = teamsFilter(searchParams!.get("away"));
  const bestOf = searchParams!.get("bestOf");
  const homeYvalue = searchParams!.get("homeYvalue");
  const awayYvalue = searchParams!.get("awayYvalue");

  return (
    <>
      <div style={{ 
        position: "absolute", left: "345px", top: "28px" }}>
        <LeftGraphic team={home} bestOf={bestOf} homeYvalue={homeYvalue} />
      </div>
      <div style={{ position: "absolute", left: "1100px", top: "28px" }}>
        <RightGraphic team={away} bestOf={bestOf} awayYvalue={awayYvalue} />
      </div>
    </>
  );
}
