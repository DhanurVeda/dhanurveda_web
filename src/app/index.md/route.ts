import { homeMarkdown, markdownResponse } from "@/lib/markdown";

export const GET = () => markdownResponse(homeMarkdown(), "/");
