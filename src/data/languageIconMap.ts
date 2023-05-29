import {
    SiJavascript,
    SiDotnet,
    SiCplusplus,
    SiPostgresql,
    SiAngular,
    SiCsharp,
    SiAnaconda,
    SiC,
    SiCucumber,
    SiCss3,
    SiTypescript,
  } from "react-icons/si";
  import { FaVuejs } from "react-icons/fa";
  import { GrMysql } from "react-icons/gr";
  import { DiPython } from "react-icons/di";
import { IconType } from "react-icons";

export const iconMap: { [key: string]: IconType } = {
    c: SiC,
    cpp: SiCplusplus,
    csharp: SiCsharp,
    dotnet: SiDotnet,
    dotnetcore: SiDotnet,
    angular: SiAngular,
    javascript: SiJavascript,
    mysql: GrMysql,
    postgressql: SiPostgresql,
    python: DiPython,
    vuejs: FaVuejs,
    typescript: SiTypescript,
    anaconda: SiAnaconda,
    cucumber: SiCucumber,
    css: SiCss3,
  };