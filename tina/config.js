import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // from Tina Cloud
  branch: process.env.HEAD || "main", // branch to edit
  token: process.env.TINA_TOKEN, // from Tina Cloud
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/pages",
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "rich-text",
            label: "Body",
            name: "body",
          },
        ],
      },
    ],
  },
});
