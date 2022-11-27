import {publicProcedure, router} from "../trpc";
import {z} from "zod";

export const filesRouter = router({
    upload: publicProcedure
        .input(z.any())
        .mutation((e) => {
            console.log(e);
            return true;
        })
})