import {
  Sliders,
} from "react-feather";

const pagesSection = [
   {
    href: "/",
    icon: Sliders,
    title: "Landing",
    badge: "2",
    children: [
      {
        href: "/",
        title: "Home",
      },
      {
        href: "/pricing",
        title: "Pricing",
      },
      
    ],
  },
  {
    href: "/dashboard",
    icon: Sliders,
    title: "Dashboards",
    badge: "5",
    children: [
      {
        href: "/dashboard/default",
        title: "Default",
      },
      {
        href: "/dashboard/analytics",
        title: "Analytics",
      },
      {
        href: "/dashboard/saas",
        title: "SaaS",
      },
      {
        href: "/dashboard/social",
        title: "Social",
      },
      {
        href: "/dashboard/crypto",
        title: "Crypto",
      },
    ],
  },

];

const navItems = [
  {
    title: "Pages",
    pages: pagesSection,
  },
];

export default navItems;
