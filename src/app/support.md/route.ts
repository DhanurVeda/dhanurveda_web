import { markdownResponse, supportMarkdown } from "@/lib/markdown";

export const GET = () => markdownResponse(supportMarkdown(), "/support");
