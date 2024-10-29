import { AudioWaveform, BookOpen, Bot, ChartCandlestick, Command, GalleryVerticalEnd, House, LayoutDashboard, Route, Settings2, SquareTerminal } from "lucide-react"

export const sidebarLinks = [
    {
        title: "Dashboard ",
        url: "/",
        icon: LayoutDashboard,
        isActive: false,
      },
      {
        title: "Valuations",
        url: "#",
        icon: ChartCandlestick,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Valuation Pathway",
        url: "#",
        icon: Route,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      
      {
        title: "Settings",
        url: "/settings",
        icon: Settings2,
      },
]

export const locations = [
    {
        name: "Arnold Sales",
        logo: House,
        company: "Robert Ellis",
      },
      {
        name: "Arnold Lettings",
        logo: House,
        company: "Robert Ellis",
      },
      {
        name: "Beeston Sales",
        logo: House,
        company: "Robert Ellis",
      },
      {
        name: "Beeston Lettings",
        logo: House,
        company: "Robert Ellis",
      },
      {
        name: "Long Eaton Sales",
        logo: House,
        company: "Robert Ellis",
      },
      {
        name: "Long Eaton Lettings",
        logo: House,
        company: "Robert Ellis",
      },
]

