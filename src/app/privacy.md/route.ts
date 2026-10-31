import { privacyPolicy } from "@/lib/legal";
import { legalMarkdown, markdownResponse } from "@/lib/markdown";

export const GET = () => markdownResponse(legalMarkdown(privacyPolicy), "/privacy");
