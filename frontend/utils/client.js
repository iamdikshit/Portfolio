import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// import { createClient } from "@sanity/client";
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-10-21", // Update to the latest API version
  useCdn: true, // Enable CDN caching
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
