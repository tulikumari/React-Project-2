import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './components/async.component';
import Toolbar from './layouts/layout-toolbar/layout-toolbar.component';
import Home from '../src/layouts/HomePage';
import NoLayout from './layouts/layout-none/layout-none.component';

// DASHBOARD ROUTE
const AsyncAnalyticsDashboard = asyncComponent(() => import('./containers/dashboards/analytics/analytics.component'));
const AsyncEcommerceDashboard = asyncComponent(() => import('./containers/dashboards/ecommerce/ecommerce.component'));
const AsyncCryptoDashboard = asyncComponent(() => import('./containers/dashboards/crypto/crypto.component'));
const AsyncProjectDashboard = asyncComponent(() => import('./containers/dashboards/project/project.component'));
const AsyncTheming = asyncComponent(() => import('./containers/theming/theming.component'));

{/* new pages*/}
const HomePage = asyncComponent(() => import('./layouts/HomePage/index'));
const EmailVerification = asyncComponent(() => import('./containers/dashboards/EmailVerification/EmailVerification.component'));
const CreatePassword = asyncComponent(() => import('./containers/dashboards/CreatePassword/CreatePassword.component'));
const BestDescribes = asyncComponent(() => import('./containers/dashboards/BestDescribes/BestDescribes.component'));
const LetsGetStarted = asyncComponent(() => import('./containers/dashboards/LetsGetStarted/LetsGetStarted.component'));
const Search = asyncComponent(() => import('./containers/dashboards/Search/Search.component'));
const About = asyncComponent(() => import('./containers/dashboards/About/About.component'));
const JobBoard = asyncComponent(() => import('./containers/dashboards/JobBoard/Jobboard.component'));
const Travel = asyncComponent(() => import('./containers/dashboards/Travel/Travel.component'));
const Coupans = asyncComponent(() => import('./containers/dashboards/Coupans/Coupans.component'));
const News = asyncComponent(() => import('./containers/dashboards/News/news.component'));
const AddressVerification = asyncComponent(() => import('./containers/dashboards/AddressVerification/AddressVerification.component'));
const CommunityAddress = asyncComponent(() => import('./containers/dashboards/CommunityAddress/CommunityAddress.component'));
const ABCSeniorLiving = asyncComponent(() => import('./containers/dashboards/ABCSeniorLiving/ABCSeniorLiving.component'));
const SendCodeChat = asyncComponent(() => import('./containers/dashboards/SendCodeChat/SendCodeChat.component'));
const EnterCode = asyncComponent(() => import('./containers/dashboards/EnterCode/EnterCode.component'));
const CreateCompany = asyncComponent(() => import('./containers/dashboards/CreateCompany/CreateCompany.component'));
const ConfirmationCode = asyncComponent(() => import('./containers/dashboards/ConfirmationCode/ConfirmationCode.component'));
const AccessCommunity = asyncComponent(() => import('./containers/dashboards/AccessCommunity/AccessCommunity.component'));
const AlreadyUsed = asyncComponent(() => import('./containers/dashboards/AlreadyUsed/AlreadyUsed.component'));
const AlternateEmail = asyncComponent(() => import('./containers/dashboards/AlternateEmail/AlternateEmail.component'));
const CSVPage = asyncComponent(() => import('./containers/dashboards/CSVPage/CSVPage.component'));
const ChatSystem = asyncComponent(() => import('./containers/dashboards/ChatSystem/ChatSystem.component'));
const ThanksSingingUp = asyncComponent(() => import('./containers/dashboards/ThanksSingingUp/ThankSingingup.component'));
const CommunitiesAdded = asyncComponent(() => import('./containers/dashboards/CommunitiesAdded/CommunitiesAdded.component'));
const AddUser = asyncComponent(() => import('./containers/dashboards/AddUser/AddUser.component'));
const ViewUpdateCommunities = asyncComponent(() => import('./containers/dashboards/ViewUpdateCommunities/ViewUpdateCommunities.component'));
const UserInformation = asyncComponent(() => import('./containers/dashboards/UserInformation/UserInformation.componenet'));
{/*End of new pages*/}

// Job Board Inner new pages 
const JobBoardCommunity = asyncComponent(() => import('./containers/dashboards/JobBoard/Community/index'));
const JobBoardConnections = asyncComponent(() => import('./containers/dashboards/JobBoard/Connections/index'));
const JobBoardMessages = asyncComponent(() => import('./containers/dashboards/JobBoard/Messages/index'));
const JobBoardIncentives = asyncComponent(() => import('./containers/dashboards/JobBoard/Incentives/index'));
const emailyourConnection = asyncComponent(() => import('./containers/dashboards/JobBoard/EmailYourConnection/emailyourConnection'));
// End of Job Board Inner new pages 

// APP ROUTES
const AsyncEmailApp = asyncComponent(() => import('./containers/apps/email/email.component'));
const AsyncTodoApp = asyncComponent(() => import('./containers/apps/todo/todo.component'));
const AsyncMapsApp = asyncComponent(() => import('./containers/apps/maps/maps.component'));
const AsyncNotesApp = asyncComponent(() => import('./containers/apps/notes/notes.component'));
const AsyncContactsApp = asyncComponent(() => import('./containers/apps/contacts/contacts.component'));
const AsyncChatApp = asyncComponent(() => import('./containers/apps/chat/chat.component'));
const AsyncCalendarApp = asyncComponent(() => import('./containers/apps/calendar/calendar.component'));

// EXAMPLE ROUTES
const AsyncAutocompleteExample = asyncComponent(() => import('./containers/elements/autocomplete/autocomplete.component'));
const AsyncSelectionControlsExample = asyncComponent(() => import('./containers/elements/selection-controls/selection-controls.component'));
const AsyncPickerExample = asyncComponent(() => import('./containers/elements/picker/picker.component'));
const AsyncSelectExample = asyncComponent(() => import('./containers/elements/select/select.component'));
const AsyncTextFieldExample = asyncComponent(() => import('./containers/elements/text-field/text-field.component'));
const AsyncAppBarExample = asyncComponent(() => import('./containers/elements/app-bar/app-bar.component'));
const AsyncMenuExample = asyncComponent(() => import('./containers/elements/menu/menu.component'));
const AsyncListExample = asyncComponent(() => import('./containers/elements/list/list.component'));
const AsyncCardExample = asyncComponent(() => import('./containers/elements/card/card.component'));
const AsyncPaperExample = asyncComponent(() => import('./containers/elements/paper/paper.component'));
const AsyncAvatarExample = asyncComponent(() => import('./containers/elements/avatars/avatars.component'));
const AsyncSteppersExample = asyncComponent(() => import('./containers/elements/steppers/steppers.component'));
const AsyncButtonExample = asyncComponent(() => import('./containers/elements/button/button.component'));
const AsyncProgressExample = asyncComponent(() => import('./containers/elements/progress/progress.component'));

// AUTHENTICATION ROUTES
const AsyncLogin = asyncComponent(() => import('./containers/authentication/login/login.component'));
const AsyncRegister = asyncComponent(() => import('./containers/authentication/register/register.component'));
const AsyncProfile = asyncComponent(() => import('./containers/authentication/profile/profile.component'));
const AsyncLock = asyncComponent(() => import('./containers/authentication/lock/lock.component'));
const AsyncForgot = asyncComponent(() => import('./containers/authentication/forgot-password/forgot-password.component'));

// ERROR ROUTES
const AsyncError404 = asyncComponent(() => import('./containers/errors/404.component'));
const AsyncError500 = asyncComponent(() => import('./containers/errors/500.component'));
const AsyncNotFound = asyncComponent(() => import('./containers/not-found/not-found.component'));

// PAGES ROUTES
const AsyncTypography = asyncComponent(() => import('./containers/pages/typography.component'));
const AsyncColors = asyncComponent(() => import('./containers/pages/colors.component'));

// CUSTOM ROUTES
const AsyncCustom = asyncComponent(() => import('./containers/pages/custom.component'));
const AsyncCustom2 = asyncComponent(() => import('./containers/pages/custom.component2'));
const AsyncCustom3 = asyncComponent(() => import('./containers/pages/custom.component3'));
const AsyncCustom4 = asyncComponent(() => import('./containers/pages/custom.component4'));

//Custom find mom
const AsyncFindMomCustom = asyncComponent(() => import('./containers/findMom/custom.component'));

//Custom senior community
const AsyncSeniorCommunity = asyncComponent(() => import('./containers/seniorCommunity/seniorCommunity'));
const AsyncSeniorCommunity2 = asyncComponent(() => import('./containers/seniorCommunity/seniorCommunity2'));
const AsyncSeniorCommunity3 = asyncComponent(() => import('./containers/seniorCommunity/seniorCommunity3'));
const AsyncSeniorCommunity4 = asyncComponent(() => import('./containers/seniorCommunity/seniorCommunity4'));
const AsyncSeniorCommunity5 = asyncComponent(() => import('./containers/seniorCommunity/seniorCommunity5'));
const AsyncSeniorCommunity6 = asyncComponent(() => import('./containers/seniorCommunity/seniorCommunity6'));
const AsyncSeniorCommunity7 = asyncComponent(() => import('./containers/seniorCommunity/seniorCommunity7'));
const AsyncCommunityDisplay = asyncComponent(() => import('./containers/seniorCommunity/communityDisplay'));
const AsyncCommunityDisplay2 = asyncComponent(() => import('./containers/seniorCommunity/communityDisplay2'));

const AsyncVolunterType = asyncComponent(() => import('./containers/seniorCommunity/volunterType'));
const AsyncForwardSearch = asyncComponent(() => import('./containers/seniorCommunity/forwardSearch'));


//Custom start process
const AsyncStartProcess = asyncComponent(() => import('./containers/startProcess/startProcess'));

const AsyncBanner = asyncComponent(() => import('./containers/banner/banner1'));
const AsyncBanner2 = asyncComponent(() => import('./containers/banner/banner2'));
const AsyncBanner3 = asyncComponent(() => import('./containers/banner/banner3'));
const AsyncDisplaySettings = asyncComponent(() => import('./containers/banner/displaySettings'));
const AsyncPayment = asyncComponent(() => import('./containers/banner/payment'));

const AsyncAdminPage1 = asyncComponent(() => import('./containers/adminPage/adminPage1'));
const AsyncAdminPage2 = asyncComponent(() => import('./containers/adminPage/adminPage2'));
const AsyncAdminPage3 = asyncComponent(() => import('./containers/adminPage/adminPage3'));
const AsyncAdminPage4 = asyncComponent(() => import('./containers/adminPage/adminPage4'));
const AsyncAdminPage5 = asyncComponent(() => import('./containers/adminPage/adminPage5'));
const AsyncAdminPage6 = asyncComponent(() => import('./containers/adminPage/adminPage6'));
const AsyncAdminPage7 = asyncComponent(() => import('./containers/adminPage/adminPage7'));
const AsyncAdminPage8 = asyncComponent(() => import('./containers/adminPage/adminPage8'));
const AsyncAdminPage9 = asyncComponent(() => import('./containers/adminPage/adminPage9'));

const AsyncAdminPage1_26th = asyncComponent(() => import('./containers/adminPage/adminPage1_26th'));
const AsyncAdminPage2_26th = asyncComponent(() => import('./containers/adminPage/adminPage2_26th'));
const AsyncAdminPage3_26th = asyncComponent(() => import('./containers/adminPage/adminPage3_26th'));
const AsyncAdminPage5_26th = asyncComponent(() => import('./containers/adminPage/adminPage5_26th'));
const AsyncAdminPage6_26th = asyncComponent(() => import('./containers/adminPage/adminPage6_26th'));



const AsyncUploadImage = asyncComponent(() => import('./containers/banner/uploadImage'));



const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
   <Layout>   
        <Component {...props} />
      </Layout>
    )}
  />
);

const ToolbarLayout = props => (
  <Toolbar>{props.children}</Toolbar>
);


// const Homepage = props=>
// (
//   <Home>{props.children}</Home>
// )
// TODO: Consider looping through an object containing all routes
export default ({ childProps, layout }) => {
  let activeLayout;
  switch (layout.currentLayout) {
    case 'classic':
      activeLayout = ToolbarLayout;
      break;
    case 'HOME':
      activeLayout = Home;
      break;
    case 'toolbar':
      activeLayout = ToolbarLayout;
      break;
    
    // case 'boxed':
    //   activeLayout = BoxedLayout;
    //   break;
    // case 'funky':
    //   activeLayout = FunkyLayout;
    //   break;
    // case 'tabbed':
    //   activeLayout = TabbedLayout;
    //   break;
    default:
      activeLayout = ToolbarLayout;
  }
  

  return (
    <Switch>
      <AppRoute path="/" exact component={AsyncAnalyticsDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/ecommerce" exact component={AsyncEcommerceDashboard} props={childProps} layout={activeLayout} />

      {/* new pages  */}
      <Route path="/home" render={props => <Home {...props} />} />
      {/* <AppRoute path="/home" exact component={HomePage} props={childProps} layout={activeLayout} /> */}
      <AppRoute path="/dashboards/emailverification" exact component={EmailVerification} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/createpassword" exact component={CreatePassword} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/bestdescribes" exact component={BestDescribes} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/letsgetstarted" exact component={LetsGetStarted} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/travel" exact component={Travel} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/coupans" exact component={Coupans} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/search" exact component={Search} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/about" exact component={About} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/jobboard" exact component={JobBoard} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/news" exact component={News} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/addressverification" exact component={AddressVerification} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/communityaddress" exact component={CommunityAddress} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/abcseniorliving" exact component={ABCSeniorLiving} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/sendcodechat" exact component={SendCodeChat} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/entercode" exact component={EnterCode} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/createcompany" exact component={CreateCompany} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/confirmationcode" exact component={ConfirmationCode} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/accesscommunity" exact component={AccessCommunity} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/alreadyused" exact component={AlreadyUsed} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/alternateemail" exact component={AlternateEmail} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/csvpage" exact component={CSVPage} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/chatsystem" exact component={ChatSystem} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/thanksingingup" exact component={ThanksSingingUp} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/communitiesadded" exact component={CommunitiesAdded} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/AddUser" exact component={AddUser} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/viewupdatecommunities" exact component={ViewUpdateCommunities} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/userinformation" exact component={UserInformation} props={childProps} layout={activeLayout} />
      {/* End of new pages  */}

      {/* Job Board Inner new pages  */}
      <AppRoute path="/dashboards/JobBoardCommunity" exact component={JobBoardCommunity} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/JobBoardConnections" exact component={JobBoardConnections} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/JobBoardMessages" exact component={JobBoardMessages} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/JobBoardIncentives" exact component={JobBoardIncentives} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/emailyourConnection" exact component={emailyourConnection} props={childProps} layout={activeLayout} />
      {/* End of Job Board Inner new pages76  */}

      <AppRoute path="/dashboards/crypto" exact component={AsyncCryptoDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/dashboards/project" exact component={AsyncProjectDashboard} props={childProps} layout={activeLayout} />
      <AppRoute path="/theming" exact component={AsyncTheming} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/email" exact component={AsyncEmailApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/todo" exact component={AsyncTodoApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/maps" exact component={AsyncMapsApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/notes" exact component={AsyncNotesApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/contacts" exact component={AsyncContactsApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/chat" exact component={AsyncChatApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/apps/calendar" exact component={AsyncCalendarApp} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/autocomplete" exact component={AsyncAutocompleteExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/selection-controls" exact component={AsyncSelectionControlsExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/picker" exact component={AsyncPickerExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/selects" exact component={AsyncSelectExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/text-fields" exact component={AsyncTextFieldExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/app-bar" exact component={AsyncAppBarExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/menu" exact component={AsyncMenuExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/list" exact component={AsyncListExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/cards" exact component={AsyncCardExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/paper" exact component={AsyncPaperExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/avatars" exact component={AsyncAvatarExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/steppers" exact component={AsyncSteppersExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/buttons" exact component={AsyncButtonExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/elements/progress" exact component={AsyncProgressExample} props={childProps} layout={activeLayout} />
      <AppRoute path="/login" exact component={AsyncLogin} props={childProps} layout={NoLayout} />
      <AppRoute path="/register" exact component={AsyncRegister} props={childProps} layout={NoLayout} />
      <AppRoute path="/profile" exact component={AsyncProfile} props={childProps} layout={activeLayout} />
      <AppRoute path="/lock" exact component={AsyncLock} props={childProps} layout={NoLayout} />
      <AppRoute path="/forgot-password" exact component={AsyncForgot} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/404" exact component={AsyncError404} props={childProps} layout={NoLayout} />
      <AppRoute path="/errors/500" exact component={AsyncError500} props={childProps} layout={NoLayout} />
      <AppRoute path="/pages/typography" exact component={AsyncTypography} props={childProps} layout={activeLayout} />
      <AppRoute path="/pages/colors" exact component={AsyncColors} props={childProps} layout={activeLayout} />

      <AppRoute path="/pages/custom" exact component={AsyncCustom} props={childProps} layout={activeLayout} />
      <AppRoute path="/pages/custom2" exact component={AsyncCustom2} props={childProps} layout={activeLayout} />
      <AppRoute path="/pages/custom3" exact component={AsyncCustom3} props={childProps} layout={activeLayout} />
      <AppRoute path="/pages/custom4" exact component={AsyncCustom4} props={childProps} layout={activeLayout} />

      <AppRoute path="/findMom/custom" exact component={AsyncFindMomCustom} props={childProps} layout={activeLayout} />

      <AppRoute path="/seniorCommunity/seniorCommunity" exact component={AsyncSeniorCommunity} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/seniorCommunity2" exact component={AsyncSeniorCommunity2} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/seniorCommunity3" exact component={AsyncSeniorCommunity3} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/seniorCommunity4" exact component={AsyncSeniorCommunity4} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/seniorCommunity5" exact component={AsyncSeniorCommunity5} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/seniorCommunity6" exact component={AsyncSeniorCommunity6} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/seniorCommunity7" exact component={AsyncSeniorCommunity7} props={childProps} layout={activeLayout} />

      <AppRoute path="/startProcess/startProcess" exact component={AsyncStartProcess} props={childProps} layout={activeLayout} />

      <AppRoute path="/banner/banner1" exact component={AsyncBanner} props={childProps} layout={activeLayout} />
      <AppRoute path="/banner/banner2" exact component={AsyncBanner2} props={childProps} layout={activeLayout} />
      <AppRoute path="/banner/banner3" exact component={AsyncBanner3} props={childProps} layout={activeLayout} />
      <AppRoute path="/banner/displaySettings" exact component={AsyncDisplaySettings} props={childProps} layout={activeLayout} />
      <AppRoute path="/banner/uploadImage" exact component={AsyncUploadImage} props={childProps} layout={activeLayout} />
      <AppRoute path="/banner/payment" exact component={AsyncPayment} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/communityDisplay" exact component={AsyncCommunityDisplay} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/communityDisplay2" exact component={AsyncCommunityDisplay2} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/volunterType" exact component={AsyncVolunterType} props={childProps} layout={activeLayout} />
      <AppRoute path="/seniorCommunity/forwardSearch" exact component={AsyncForwardSearch} props={childProps} layout={activeLayout} />

      <AppRoute path="/adminPage/adminPage1" exact component={AsyncAdminPage1} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage2" exact component={AsyncAdminPage2} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage3" exact component={AsyncAdminPage3} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage4" exact component={AsyncAdminPage4} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage5" exact component={AsyncAdminPage5} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage6" exact component={AsyncAdminPage6} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage7" exact component={AsyncAdminPage7} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage8" exact component={AsyncAdminPage8} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage9" exact component={AsyncAdminPage9} props={childProps} layout={activeLayout} />

      <AppRoute path="/adminPage/adminPage1_26th" exact component={AsyncAdminPage1_26th} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage2_26th" exact component={AsyncAdminPage2_26th} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage3_26th" exact component={AsyncAdminPage3_26th} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage5_26th" exact component={AsyncAdminPage5_26th} props={childProps} layout={activeLayout} />
      <AppRoute path="/adminPage/adminPage6_26th" exact component={AsyncAdminPage6_26th} props={childProps} layout={activeLayout} />
      

      <AppRoute component={AsyncNotFound} layout={activeLayout} />

    </Switch>);
};