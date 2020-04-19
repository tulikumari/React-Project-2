import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ExtensionIcon from '@material-ui/icons/Extension';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import BuildIcon from '@material-ui/icons/Build';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import PaletteIcon from '@material-ui/icons/Palette';
import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import themes from './themes';
export const configuredTheme = themes[0].theme;
export const configuredLayout = {
  currentLayout: 'classic',
  notificationsOpen: false
};

const iconStyle = {
  fontSize: 16
};

export const menuItems = [
  {
    title: 'HOME',
    href: '/',
    icon: <HomeIcon style={iconStyle} />,
  },
  {
    title: 'COMMUNITY',
    icon: <PaletteIcon style={iconStyle} />,
    children: [
      {
        title: 'Home',
        href: '/home',
        icon: <HomeIcon style={iconStyle} />,
      },
      {
        title: 'Best Describes',
        href: '/dashboards/bestdescribes',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Form 1',
        href: '/dashboards/ecommerce',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Form 2',
        href: '/dashboards/emailverification',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Form 3',
        href: '/dashboards/createpassword',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Form 4',
        href: '/dashboards/letsgetstarted',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Address Verification',
        href: '/dashboards/addressverification',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Community Address',
        href: '/dashboards/communityaddress',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'ABC Senior Living',
        href: '/dashboards/abcseniorliving',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Send Code Start Chat',
        href: '/dashboards/sendcodechat',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Enter Code',
        href: '/dashboards/entercode',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Create Company',
        href: '/dashboards/createcompany',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Confirmation Code',
        href: '/dashboards/confirmationcode',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Access Community',
        href: '/dashboards/accesscommunity',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Already Used',
        href: '/dashboards/alreadyused',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Alternate Email',
        href: '/dashboards/alternateemail',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'CSV Docs',
        href: '/dashboards/csvpage',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Chat System',
        href: '/apps/chat',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Thanks singing up',
        href: '/dashboards/thanksingingup',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Communities Added',
        href: '/dashboards/communitiesadded',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'Add User',
        href: '/dashboards/AddUser',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'View Update Communities',
        href: '/dashboards/viewupdatecommunities',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'User Information',
        href: '/dashboards/userinformation',
        icon: <FaceIcon style={iconStyle} />
      },
    ]
  },
  {
    title: 'SEARCH',
    href: '/dashboards/search',
    icon: <BuildIcon style={iconStyle} />,
  },
  {
    title: 'ABOUT',
    icon: <DesktopWindowsIcon style={iconStyle} />,
    href: '/dashboards/about',
  },
  // Job Board Pages
  {
    title: 'JOB BOARD',
    icon: <TextFormatIcon style={iconStyle} />,
    children: [
      {
        title: 'COMMUNITY',
        href: '/dashboards/JobBoardCommunity',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'CONNECTIONS',
        href: '/dashboards/JobBoardConnections',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'MESSAGES',
        href: '/dashboards/JobBoardMessages',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'INCENTIVES',
        href: '/dashboards/JobBoardIncentives',
        icon: <FaceIcon style={iconStyle} />
      },
      {
        title: 'EMAIL YOUR CONNECTION',
        href: '/dashboards/emailyourConnection',
        icon: <FaceIcon style={iconStyle} />
      },
    ]
  },
  // End of Job Board Pages
  {
    title: 'TRAVEL',
    href: '/dashboards/travel',
    icon: <PaletteIcon style={iconStyle} />
  },
  {
    title: 'COUPANS',
    href: '/dashboards/coupans',
    icon: <ExtensionIcon style={iconStyle} />,
  },
  {
    title: 'NEWS',
    icon: <MenuIcon style={iconStyle} />,
    href: '/dashboards/news',
  },
  {
    title: 'BLOG',
    icon: <ViewModuleIcon style={iconStyle} />,
    href: '/elements/cards',
  },
  // { 
  //   title: 'PROFILE', 
  //   icon: <PersonIcon style={iconStyle} />,
  //   children: [{
  //     title: 'Login',
  //     href: '/login'
  //   }, {
  //     title: 'Register',
  //     href: '/register'
  //   }, {
  //     title: 'Forgot Password',
  //     href: '/forgot-password'
  //   }, {
  //     title: 'Profile',
  //     href: '/profile'
  //   }, {
  //     title: 'Lock Screen',
  //     href: '/lock'
  //   }]
  // },
];
