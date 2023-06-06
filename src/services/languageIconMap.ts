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
  SiHtml5,
  SiRuby,
  SiReact,
  SiVuedotjs,
  SiPython,
  SiGnubash
  } from "react-icons/si";
  import { GrMysql } from "react-icons/gr";
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
    python: SiPython,
    vuejs: SiVuedotjs,
    typescript: SiTypescript,
    anaconda: SiAnaconda,
    cucumber: SiCucumber,
    css: SiCss3,
    html: SiHtml5,
    ruby: SiRuby,
    react: SiReact,
    bash: SiGnubash
  };