import type { NextApiRequest, NextApiResponse } from 'next'
import { myurls } from './../../../data/myurls'
//http://localhost:3000/api/myurls

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(myurls)
}