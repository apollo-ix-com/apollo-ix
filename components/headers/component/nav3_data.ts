interface featuresType {
    id: number;
    iconClass: string;
    title: string;
    description: string;
}

export const features: featuresType[] = [
    {
      id: 1,
      iconClass: "unicon-lan",
      title: "Peering",
      description: "Optimize connectivity and improve network performance.",
    },
    {
      id: 2,
      iconClass: "unicon-shield",
      title: "Security",
      description: "Protect your infrastructure with advanced security solutions.",
    },
    {
      id: 3,
      iconClass: "unicon-link",
      title: "Interconnection",
      description: "Seamless data exchange across multiple networks.",
    },
    {
      id: 4,
      iconClass: "unicon-cloud",
      title: "Cloud",
      description: "Empower your business with scalable cloud solutions.",
    },
    {
      id: 5,
      iconClass: "unicon-data",
      title: "Infrastructure",
      description: "Robust infrastructure to support your digital transformation.",
    },
    {
      id: 6,
      iconClass: "unicon-grid",
      title: "See all products",
      description: "Discover our comprehensive range of products and services.",
    },
  ];
  

  export const services = [
    "Service-based Business",
    "Marketing Automation",
    "Project Management Software",
    "Cloud-Based Solutions",
    "Start-ups",
    "Developers",
  ];
  
export const links = [
    {
      id: 1,
      href: "/page-career",
      label: "Hire an Expert",
      isInternal: true,
    },
    {
      id: 2,
      href: "#",
      label: "Customer stories",
      isInternal: false,
    },
    {
      id: 3,
      href: "#",
      label: "Ressources",
      isInternal: false,
    },
    {
      id: 4,
      href: "/blog",
      label: "Blog",
      isInternal: true,
    },
    {
      id: 5,
      href: "/page-career",
      label: "Career",
      isInternal: true,
    },
    {
      id: 6,
      href: "/page-team",
      label: "Team",
      isInternal: true,
    },
    {
      id: 7,
      href: "/page-contact",
      label: "Get in touch",
      isInternal: true,
    },
  ];