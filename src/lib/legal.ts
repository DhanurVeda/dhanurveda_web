/*
  Mirrors LegalDocument in the app
  (DhanurVeda/Views/Components/Profile/LegalDocumentView.swift).
  Keep the two in step: App Review compares the in-app text with these pages.
*/
export type LegalDocument = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  intro:
    "DhanurVeda is built to help you train, not to collect data. This policy explains what we store and why.",
  sections: [
    {
      heading: "What we store",
      body: "Your name and email from signing in with Apple or email, your profile photo and archery details, and your practice sessions: videos, scores, posture results, written feedback and saved presets.",
    },
    {
      heading: "Where it is stored",
      body: "Your data is stored securely with Supabase, our storage provider, and is linked only to your account. In guest mode, your sessions stay on your device until you sign in.",
    },
    {
      heading: "On-device analysis",
      body: "Posture analysis and written feedback are created on your iPhone. The camera is used only to record your practice.",
    },
    {
      heading: "What we never do",
      body: "We do not sell your data, share it with third parties, use it for advertising, or process it for any purpose other than showing it back to you in the app. There is no tracking or analytics.",
    },
    {
      heading: "Your control",
      body: "You can edit your profile at any time. Deleting your account from Profile › Account Management permanently removes all of your data from our storage.",
    },
    {
      heading: "Changes",
      body: "If this policy changes, the updated version will appear here with a new date.",
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  title: "Terms and Conditions",
  intro: "By using DhanurVeda, you agree to these terms.",
  sections: [
    {
      heading: "Using the app",
      body: "DhanurVeda is a training aid. Scores, posture results and feedback are guidance only, not professional coaching or medical advice.",
    },
    {
      heading: "Practise safely",
      body: "Archery equipment can cause serious injury. Always follow your range's safety rules. You are responsible for your safety, your equipment and the people around you.",
    },
    {
      heading: "Your content",
      body: "Your videos and practice data belong to you. You allow us to store them only so the app can show them back to you. Only record people who have agreed to be filmed.",
    },
    {
      heading: "Fair use",
      body: "Do not misuse the app, try to access other people's data, or interfere with the service. We may suspend accounts that do.",
    },
    {
      heading: "No warranty",
      body: "The app is provided as is. We work to keep your data safe and available but cannot guarantee the service will always be uninterrupted or error-free. To the extent the law allows, we are not liable for any loss arising from its use.",
    },
    {
      heading: "Ending your use",
      body: "You can stop using DhanurVeda and delete your account at any time from Profile › Account Management.",
    },
    {
      heading: "Changes",
      body: "We may update these terms. Continuing to use the app after an update means you accept the new terms.",
    },
  ],
};

export const faqs: { q: string; a: string }[] = [
  {
    q: "Which iPhones does DhanurVeda work on?",
    a: "Any iPhone running iOS 27 or later. Written feedback needs a device that supports Apple Intelligence; everything else works on every supported iPhone.",
  },
  {
    q: "Do I need an account?",
    a: "No. Start straight away in guest mode and your sessions stay on your device. Sign in with Apple or email later to sync them across devices, and your guest sessions come with you.",
  },
  {
    q: "Which bows are supported?",
    a: "Indian, Recurve and Compound bows, shot right or left handed.",
  },
  {
    q: "Where should I place my iPhone?",
    a: "Side on to you, far enough away that your head, feet and entire bow fit inside the on-screen guide. Spoken setup guidance helps you get the framing right before you start.",
  },
  {
    q: "Does it work without internet?",
    a: "Yes. Recording, posture analysis and scoring all work offline. Your sessions sync when you are back online.",
  },
  {
    q: "How do I delete my account?",
    a: "Open Profile › Account Management in the app and choose Delete Account. This permanently removes all of your data from our storage.",
  },
];
