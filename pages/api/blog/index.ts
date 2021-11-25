// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import type { Article } from '../../../types';

type Data = {
  data: Article[];
};

// simplified without try/catch
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await axios.get(`${process.env.SECRET_URL}/blog`);

  res.status(200).json({ data: response.data });
}
