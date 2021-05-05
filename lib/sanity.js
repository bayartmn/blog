const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.NODE_ENV === "production",
});

export const previewClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token:
    "skjhxsaEJZcGIjIZw1iKTEF2qPrX8JaL7BRZix5x4qTze3RaadJuhEuOACzvvpXE6oWoATfRr3x9SihhHilQ6i2g8CpTfbMdye26CjBTUAbkbakWpsL59WoP9HTJawDHnDHckRgb4CdswY9sEw6Y3ulrizJSXTHv9GvFU3VTVofNnm1EFjkH",
});

export default client;
