// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Papers, talks, and conference abstracts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Work in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae — education, research experience, publications, and awards.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-published-closed-loop-auditory-stimulation-in-phase-with-slow-waves-during-sleep-enhances-cerebrospinal-fluid-flow-in-humans-in-science-translational-medicine",
          title: 'Published Closed-loop auditory stimulation in phase with slow waves during sleep enhances cerebrospinal...',
          description: "",
          section: "News",},{id: "news-presented-modulating-cerebrospinal-fluid-pulsatility-during-sleep-with-closed-loop-auditory-stimulation-in-young-and-older-adults-at-neuroscience-2026-nanosymposium-nano42-07-sleep-systems-in-health-and-disease-in-washington-dc",
          title: 'Presented Modulating Cerebrospinal Fluid Pulsatility during Sleep with Closed-Loop Auditory Stimulation in Young...',
          description: "",
          section: "News",},{id: "projects-how-to-make-almost-anything",
          title: 'How to Make (Almost) Anything',
          description: "I am taking HTMAA and will be highlighting my fabrication projects here.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/htmaa/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%7A%65%6E%67@%6D%69%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aaronzeng-cmu", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xiangjian-zeng", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0008-4859-9055", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
