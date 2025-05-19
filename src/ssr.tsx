import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/react-start-server";
import { getRouterManifest } from "@tanstack/react-start-router-manifest";
import { createRouter } from "./router";

import "../src/styles/globals.css";

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
