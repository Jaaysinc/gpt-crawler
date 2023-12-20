import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.law.cornell.edu/lii/get_the_law",
  match: "https://www.law.cornell.edu/files**",
  maxPagesToCrawl: 200000000,
  outputFileName: "output.json",
};
