export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: any;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "ideas", path: "/ideas", isContentType: true },
  { key: "crafts", path: "/crafts", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "events", path: "/events", isContentType: true },
  { key: "care", path: "/care", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = [
  "guide",
  "ideas",
  "crafts",
  "mechanics",
  "events",
  "care",
] as const;
