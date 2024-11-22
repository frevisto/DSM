import { Request,Response } from "express";

export function concatenar(req:Request, res:Response){
    const {first, last} = req.params;
    const r = first + last;
    res.send({r});
};

export function primeiro(req:Request, res:Response){
    const {name} = req.params;
    const r = name[0];
    res.send({r});
};