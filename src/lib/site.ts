export const site = {
  name: "DhanurVeda",
  tagline: "Your pocket archery coach.",
  description:
    "Record your archery practice on iPhone, get posture analysis for your shoulders, wrists, hips, stance and torso, and map every arrow to see your progress.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  // Set once the app is live, e.g. https://apps.apple.com/app/id0000000000
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
  // Shown on the Support, Privacy and Terms pages.
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "team.dhanurveda@gmail.com",
  updated: "31 October 2026",
  year: 2026,
} as const;

export const footerLinks = [
  {
    title: "App",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Screens", href: "/#screens" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Support", href: "/support" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
  },
] as const;
