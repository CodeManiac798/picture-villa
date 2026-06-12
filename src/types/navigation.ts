export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavConfig {
  primary: NavItem[];
  cta: {
    label: string;
    href: string;
  };
}
