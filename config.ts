import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.law.cornell.edu",
  match: "https://www.law.cornell.edu**",
  maxPagesToCrawl: 200000000,
  outputFileName: "output.json",
};
