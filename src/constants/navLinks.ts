export interface NavLink {
  id: string;
  label: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: "timeline", label: "Schedule" },
  { id: "speaker", label: "Keynote Speaker" },
  { id: "prompt", label: "Prompt" },
  { id: "submit", label: "Submit" },
  { id: "about", label: "About" },
  { id: "register", label: "Register" },
  { id: "faq", label: "FAQ" },
  { id: "team", label: "Team" },
];

