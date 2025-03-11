export const accordionItems = [
  {
    id: 1,
    question: "What is peering?",
    answer:
      "Peering is the exchange of internet traffic directly between networks (ISPs, content providers, etc.) without intermediaries, improving performance and reducing costs.",
    controls: "uc-accordion-1",
    expanded: true,
  },
  {
    id: 2,
    question: "What’s the difference between public and private peering?",
    answer:
      "Public peering occurs over a shared switch fabric, while private peering is a direct point-to-point connection between two networks for higher bandwidth and privacy.",
    controls: "uc-accordion-2",
    expanded: false,
  },
  {
    id: 3,
    question: "Who can join the internet exchange for peering?",
    answer:
      "Any network with an Autonomous System Number (ASN), such as ISPs, CDNs, content providers, and enterprise networks.",
    controls: "uc-accordion-3",
    expanded: false,
  },
  {
    id: 4,
    question: "What IP addressing is used for peering?",
    answer:
      "Members receive IPv4 and IPv6 addresses for the peering LAN.",
    controls: "uc-accordion-4",
    expanded: false,
  },
  {
    id: 5,
    question: "Do I need my own ASN (Autonomous System Number)?",
    answer:
      "Yes, an ASN is required for participating in BGP peering sessions.",
    controls: "uc-accordion-5",
    expanded: false,
  },
  {
    id: 6,
    question: "Do you offer DDoS protection?",
    answer:
      "Yes, we provide blackholing services to mitigate DDoS attacks.",
    controls: "uc-accordion-6",
    expanded: false,
  },
  {
    id: 7,
    question: "Can I peer remotely without a physical presence?",
    answer:
      "Yes, we offer Remote Peering through trusted partners.",
    controls: "uc-accordion-7",
    expanded: false,
  },
  {
    id: 8,
    question: "How do I become a member?",
    answer:
      "Submit a membership application, provide your ASN, and agree to our peering policy.",
    controls: "uc-accordion-8",
    expanded: false,
  },
  {
    id: 9,
    question: "What fees are involved?",
    answer:
      "Fees vary based on port speed, colocation needs, and additional services.",
    controls: "uc-accordion-9",
    expanded: false,
  },
  {
    id: 10,
    question: "Do you provide 24/7 support?",
    answer:
      "Yes, we offer round-the-clock support for critical issues.",
    controls: "uc-accordion-10",
    expanded: false,
  },
];


export const accordionItems2 = [
  {
    id: 23,
    title: "Manage tasks",
    icon: "/assets/images/common/icons/zap.svg",
    content:
      "Offers a unified platform that fosters innovation while providing end-to-end data management.",
    isOpen: false,
  },
  {
    id: 25,
    title: "Set priorities",
    icon: "/assets/images/common/icons/target.svg",
    content:
      "Providing end-to-end data management. See how we help your team solve today’s biggest challenges.",
    isOpen: false,
  },
  {
    id: 27,
    title: "Collaborate with your team",
    icon: "/assets/images/common/icons/settings.svg",
    content:
      "Our shared team inboxes keep everyone on the same page and in the loop.",
    isOpen: true,
  },
];
