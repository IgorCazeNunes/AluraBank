import { Printable } from "../models/index";

export function print(...objetos: Printable[]) {
    objetos.forEach(objeto => objeto.toString());
}