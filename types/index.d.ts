declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: User;
  };

  declare type User = {
    profilePicture: string | undefined;
    $id: string;
    email: string;
    userId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    dateOfBirth?: string;
    status: string;
    team: string;
  };

  declare type SlideProps = {
    id: string;
    layout: string;
    title: string;
    content: string;
    images: string[];
    bulletPoints: string[];
    videoUrl: string;
    footer: string;
    backgroundColor: string;
    textColor: string;
    animation: slideAnimationProps;
    timestamp: string;
    author: string;
  }

  declare type slideAnimationProps = {
    enter: string;
    exit: string;
  }