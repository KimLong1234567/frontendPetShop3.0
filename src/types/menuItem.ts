import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface MenuItem {
  icon: IconDefinition;
  name: string;
  link?: string;
  to?: string;
  children?: MenuItem[]; // Allow nested menu items
}
