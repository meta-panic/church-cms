import { Metadata } from "next";

export const favSettings: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  ],
  apple: "/apple-touch-icon.png",
};
