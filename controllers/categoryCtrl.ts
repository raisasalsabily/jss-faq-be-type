import { Request, Response } from "express"
import Categories from "../models/categoryModel"
// import {IReqAuth} from "../config/interface"

const categoryCtrl = {
  createCategory: async (req: Request, res: Response) => {
    try {
      const name = req.body.name.toLowerCase()
      const newCategory = new Categories({ name })
      await newCategory.save()
      res.json({ newCategory })
      // console.log({ newCategory })
    } catch (err: any) {
      return res.status(500).json({ msg: err.message })
    }
  },
}

export default categoryCtrl
