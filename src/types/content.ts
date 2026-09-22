export interface NavLink {
  label: string;
  href: string;
}

export interface CategoryCard {
  label: string;
  image: string | null;
  href: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface QuickLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "facebook" | "x" | "youtube";
}
