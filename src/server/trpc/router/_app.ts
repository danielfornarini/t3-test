import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import {filesRouter} from "./files";
import { coursesRouter} from "./courses";

export const appRouter = router({
  // example: exampleRouter,
  auth: authRouter,
  files: filesRouter,
  courses: coursesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
