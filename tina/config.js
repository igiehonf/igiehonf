import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Netlify ENV
  token: process.env.TINA_TOKEN, // Netlify ENV
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Home Page",
        name: "home",
        path: "content/home",
        format: "mdx",
        fields: [
          { type: "string", name: "headline", label: "Hero Headline" },
          { type: "string", name: "subtext", label: "Hero Subtext" },
          { type: "string", name: "cta", label: "CTA Button Text" },
          {
            type: "object",
            name: "features",
            label: "Features",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon (emoji or class)" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "About Section",
            fields: [
              { type: "string", name: "title", label: "About Title" },
              { type: "string", name: "text", label: "About Text" },
              { type: "image", name: "image", label: "Image" },
            ],
          },
          {
            type: "object",
            name: "cta_section",
            label: "CTA Section",
            fields: [
              { type: "string", name: "message", label: "Message" },
              { type: "string", name: "button", label: "Button Text" },
            ],
          },
        ],
      },
      {
        label: "Tournament",
        name: "tournament",
        path: "content/tournament",
        format: "mdx",
        fields: [
          { type: "string", name: "edition", label: "Edition (e.g. 4th Edition)" },
          { type: "datetime", name: "date", label: "Date" },
          { type: "string", name: "venue", label: "Venue" },
          { type: "string", name: "description", label: "Description" },
          {
            type: "rich-text",
            name: "eligibility",
            label: "Eligibility Criteria",
            isBody: true,
          },
        ],
      },
      {
        label: "Volunteers",
        name: "volunteers",
        path: "content/volunteers",
        format: "mdx",
        fields: [
          { type: "string", name: "headline", label: "Headline" },
          { type: "string", name: "subtext", label: "Subtext" },
          { type: "string", name: "form_link", label: "Form Link" },
        ],
      },
      {
        label: "Contact",
        name: "contact",
        path: "content/contact",
        format: "mdx",
        fields: [
          { type: "string", name: "address", label: "Address" },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "phone", label: "Phone" },
        ],
      },
    ],
  },
});
