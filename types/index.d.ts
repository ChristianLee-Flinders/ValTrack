declare interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: User;
  };

  declare type User = {
    $id: string;
    email: string;
    userId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
  };

  declare type SlideProps = {
    id: string;
    layout: string;
    title: string;
    content: string;
    images: string[];
    bulletPoints?: string[][];
    bulletPointIcons?: any[];
    accentColor?: string;
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

  declare type SlideShowProps = {
    slides : SlideProps[],
  }
  
  declare interface getUserInfoProps {
    userId: string;
  }

  declare interface SiderbarProps {
    user: User;
  }

  declare interface signInProps {
    email: string;
    password: string;
  }

  declare type SignUpParams = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };