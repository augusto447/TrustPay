import { defineConfig } from "eslint/config";
import rocketseat from "@rocketseat/eslint-config/react";

export default defineConfig([
  ...rocketseat, // aqui espalha as configs da Rocketseat
]);
