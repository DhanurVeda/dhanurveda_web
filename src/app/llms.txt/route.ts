import { llmsTxt, markdownResponse } from "@/lib/markdown";

export const GET = () => markdownResponse(llmsTxt(), undefined, "text/plain");
