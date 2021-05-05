// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getPaginetedPosts } from "lib/api";

export default async (req, res) => {
  const page = parseInt(req.query.page, 10);
  const limit = parseInt(req.query.limit, 10);
  console.log("===========" + Math.random(), page, limit);
  const posts = await getPaginetedPosts(page, limit);
  res.status(200).json(posts);
};
