interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "https://www.svgrepo.com/show/322479/half-log.svg",
    alt: "Joblog",
    title: "Joblog",
    url: "/",
  },
  tagline = "Find your dream job today.",
  menuItems = [
    {
      title: "Jobs",
      links: [
        { text: "Browse Jobs", url: "/jobs" },
        { text: "Post a Job", url: "/jobs/post" },
        { text: "Saved Jobs", url: "/jobs/saved" },
        { text: "Job Alerts", url: "/jobs/alerts" },
      ],
    },
    {
      title: "Companies",
      links: [
        { text: "Top Companies", url: "/companies/top" },
        { text: "Browse Companies", url: "/companies" },
        { text: "Company Reviews", url: "/companies/reviews" },
        { text: "Featured Employers", url: "/companies/featured" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help Center", url: "/help" },
        { text: "Contact Us", url: "/contact" },
        { text: "System Status", url: "/status" },
        { text: "Terms of Service", url: "/terms" },
      ],
    },
    {
      title: "Connect",
      links: [
        { text: "Twitter", url: "https://twitter.com" },
        { text: "LinkedIn", url: "https://linkedin.com" },
        { text: "Instagram", url: "https://instagram.com" },
        { text: "Blog", url: "/blog" },
      ],
    },
  ],
  copyright = "© 2025 Joblog. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="https://shadcnblocks.com">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
