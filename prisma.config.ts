import "dotenv/config"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Point to your schema file
  schema: "prisma/schema.prisma",
  
  // Define the connection here
  datasource: {
    url: env("DATABASE_URL"),
  },
  
});