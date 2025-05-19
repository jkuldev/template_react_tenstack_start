import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start-client";
import { createRouter } from "./router";
import "../src/styles/globals.css";
const router = createRouter();

hydrateRoot(document!, <StartClient router={router} />);
