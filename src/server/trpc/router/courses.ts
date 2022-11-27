import {publicProcedure, router} from "../trpc";
import {z} from "zod";

export const coursesRouter = router({
   create: publicProcedure
       .input(z.object({ title: z.string(), episodes: z.string().array() }))
       .mutation(({ctx, input}) => {
           const a = ctx.prisma.course.create({
               data: input
           });

           console.log('qui', a);

           return a;
       })
});