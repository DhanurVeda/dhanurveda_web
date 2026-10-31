/*
  Marketing copy shared by the home page, the JSON-LD and the Markdown /
  llms.txt versions served to AI agents, so all three always say the same
  thing. Kept in line with the App Store listing in ~/Desktop/DhanurVeda/AppStore.
*/

export const postureAreas = ["Shoulders", "Wrists", "Hips", "Stance", "Torso"] as const;

export const features = {
  posture: {
    title: "Posture analysis, joint by joint",
    body: "Set your iPhone side on and shoot. DhanurVeda tracks your body through the session, draws your posture over the video and scores each area of your form.",
  },
  scoring: {
    title: "Score every arrow",
    body: "Tap where each arrow landed. See your groups by quadrant and your average over time.",
  },
  feedback: {
    title: "Written feedback, on device",
    body: "On iPhones with Apple Intelligence, your measurements become plain-language advice, generated privately on your phone.",
  },
  modes: {
    title: "Practice your way",
    body: "Train Mode, Time Run Mode or your own presets, with crowd noise simulation and spoken setup guidance.",
  },
  archers: {
    title: "Made for every archer",
    body: "Indian, Recurve and Compound bows, right or left handed. Works offline and syncs when you are back online.",
  },
} as const;

export const steps = [
  {
    title: "Set up",
    body: "Choose your bow hand and place your iPhone side on. Spoken guidance helps you frame yourself.",
  },
  {
    title: "Shoot",
    body: "Step into the outline and start. DhanurVeda records your session and tracks your form.",
  },
  {
    title: "Improve",
    body: "Replay with your posture drawn in, score each arrow and see what to work on next.",
  },
] as const;

export const privacyPoints = [
  {
    title: "Analysed on your iPhone",
    body: "Posture analysis and written feedback are created on device. The camera only records your practice.",
  },
  {
    title: "Never sold or shared",
    body: "No advertising, no third parties, no tracking or analytics. Your data is only shown back to you.",
  },
  {
    title: "Yours to delete",
    body: "Start in guest mode with nothing leaving your phone. Delete your account any time and everything goes with it.",
  },
] as const;

/** Facts an agent or search engine can quote directly. */
export const appFacts = {
  platform: "iPhone",
  requirements: "iOS 27 or later. Written feedback needs an iPhone that supports Apple Intelligence.",
  category: "Sports",
  bows: ["Indian", "Recurve", "Compound"],
  modes: ["Train Mode", "Time Run Mode", "Custom presets"],
  keywords: [
    "archery app",
    "archery coach",
    "archery posture analysis",
    "archery form",
    "archery scoring",
    "arrow score tracker",
    "recurve",
    "compound bow",
    "Indian bow",
    "archery training",
    "iPhone archery app",
  ],
} as const;
