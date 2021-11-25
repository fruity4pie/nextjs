// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import type { ApiError, ArticlesData } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArticlesData | ApiError>
) {
  try {
    const { slug } = req.query;
    const response = await axios.get(`${process.env.SECRET_URL}/blog/${slug}`);

    res.status(200).json({ data: response.data });
  } catch (e) {
    res.status(500);
  }
}
