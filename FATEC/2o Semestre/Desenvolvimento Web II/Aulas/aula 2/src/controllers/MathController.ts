import { Request,Response } from "express";

export function somar(req:Request, res:Response){
    const {a, b} = req.params;
    const r = parseInt(a) + parseInt(b);
    res.send({r});
};

export function subtrair(req:Request, res:Response){
    const a = req.query.a as string;
    const b = req.query.b as string;
    const r = parseInt(a) - parseInt(b);
    res.send({r});
};