import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...input) => {
    // buat passing banyak classname
    return twMerge(clsx(input));
}