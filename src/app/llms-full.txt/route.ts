import { llmsFullTxt, markdownResponse } from "@/lib/markdown";

export const GET = () => markdownResponse(llmsFullTxt(), undefined, "text/plain");
