import { url } from "inspector"
import { AudioWaveform, Bell, BookOpen, Bot, ChartArea, ChartCandlestick, CircleHelp, Command, ExternalLink, FileChartPie, GalleryVerticalEnd, Home, House, HouseIcon, Icon, LayoutDashboard, Mail, PanelsTopLeft, Route, Settings, Settings2, Sliders, SquareTerminal, User, User2, Users } from "lucide-react"
import { title } from "process"

export const loggedIn : User = {
  name: "Christian Lee-Flinders",
  firstName: "Christian",
  lastName: "Lee-Flinders",
  email: "christian.lee-flinders@robertellis.co.uk",
  $id: '',
  userId: '',
  address1: '',
  city: '',
  state: '',
  postalCode: '',
  dateOfBirth: '',
  status: "",
  team: "",
  profilePicture: undefined
}

export const sidebarLinks = [
    {
        title: "Dashboard ",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Properties",
        url: "/properties",
        icon: House,
      },
      {
        title: "Clients",
        url: "/vendors",
        icon: Users,
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
]

export const adminLinks = [
  {
    title: "Users",
    url: "/admin/users",
    icon: User2,
  },
  {
    title: "Reports",
    url: "#",
    icon: FileChartPie,
    items : [
      {
        title: "Past Reports",
        url: "admin/reports",
      },
      {
        title: "Generate Report",
        url: "admin/new-report",
      }
    ]
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
    title: "Emails",
    url: "/admin/emails",
    icon: Mail,
  },
  {
    title: "Slide Shows",
    url: "admin/slideshow",
    icon: PanelsTopLeft,
  }
]

export const footerLinks = [
  {
    title: "Support",
    url: "https://support.valtrack.com",
    icon: CircleHelp,
    secondaryIcon: ExternalLink,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
    badge: "1",
  }
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

export const teamMembers = [
  {
    $id: "1",
    email: "neill.millward@robertellis.co.uk",
    userId: "1",
    firstName: "Neill",
    lastName: "Millward",
    name: "Neill Millward",
    status: "active",
    team: "Arnold Sales",
  },
  {
    $id: "2",
    email: "lauren.willamson@robertellis.co.uk",
    userId: "2",
    firstName: "Lauren",
    lastName: "Williamson",
    name: "Lauren Williamson",
    status: "active",
    team: "Arnold Sales",
  },
  {
    $id: "3",
    email: "joe.marzano@robertellis.co.uk",
    userId: "3",
    firstName: "Joe",
    lastName: "Marzano",
    name: "Joe Marzano",
    status: "active",
    team: "Arnold Lettings",
  },
  {
    $id: "4",
    email: "megan.riley@robertellis.co.uk",
    userId: "4",
    firstName: "Megan",
    lastName: "Riley",
    name: "Megan Riley",
    status: "active",
    team: "Arnold Sales",
  },
  {
    $id: "5",
    email: "sandra.million@robertellis.co.uk",
    userId: "5",
    firstName: "Sandra",
    lastName: "Million",
    name: "Sandra Million",
    status: "active",
    team: "Arnold Sales",
  },
  {
    $id: "6",
    email: "hollie.morgan@robertellis.co.uk",
    userId: "6",
    firstName: "Hollie",
    lastName: "Morgan-Gun",
    name: "Hollie Morgan-Gun",
    status: "active",
    team: "Arnold Sales",
  },
]

const testSlide : SlideProps = {
  id: "slide-1", // Unique identifier for the slide
  layout: "layout-1", // Layout type (if applicable)
  title: "Welcome to Our Presentation", // Title of the slide
  content: "This slide introduces our topic and objectives.", // Main text content
  images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"], // Array of image URLs
  bulletPoints: ["Introduction to the topic", "Key objectives", "Overview of the agenda"], // Array of bullet points
  videoUrl: "https://www.youtube.com/embed/video_id", // URL of a video (optional)
  footer: "Presented by: Team A", // Additional notes or references
  backgroundColor: "#e0f7fa", // Background color of the slide (optional)
  textColor: "#000000", // Color of the text (optional)
  animation: { // Animation settings for the slide
    enter: "fade-in", // Animation class or type for entering
    exit: "fade-out", // Animation class or type for exiting
  },
  timestamp: new Date().toISOString(), // Timestamp for when the slide was created/updated
  author: "John Doe", // Name of the author or creator of the slide
};


