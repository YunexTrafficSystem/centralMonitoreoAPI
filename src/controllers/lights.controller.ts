import { Request, Response } from "npm:express";
import Light from "../models/lights.model.ts";

const Lights = {
  list: async (_req: Request, res: Response): Request => {
    const lights = await Light.find();
    res.status(200).send(lights);
  },

  create: async (req: Request, res: Response): Request => {
    const { body } = req;
    const newLight = new Light({
      type: body.type,
      commet: body.comment,
      message: body.message,
      code: body.code,
      addr: body.addr,
      msgID: body.msgID,

      state: body.state,
      coords: body.coords,
    });
    const light = await Light.create(newLight);
    res.status(200).send(light._id);
  },
};

export default Lights;
