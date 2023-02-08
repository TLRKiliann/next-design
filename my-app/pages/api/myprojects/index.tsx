import type { NextApiRequest, NextApiResponse } from 'next'
import { myprojects } from './../../../data/myprojects'
//http://localhost:3000/api/myprojects

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(myprojects)
}