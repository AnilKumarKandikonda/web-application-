import React from "react";

// login and register section
import Login from '../pages/Login/Login';
import Contact from "../pages/Contact/Contact";
import Resume from "../pages/Resume/Resume";
import JobPricing from "../pages/JobPricing/JobPricing";
import TermsConditions from "../pages/TermsConditions/TermsConditions";
import Faq from "../pages/Faq/Faq";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import Network from "../pages/Network/Network";
import NetworkInfo from "../pages/Network/NetworkInfo";
import Jobs from "../pages/Jobs/Jobs";
import JobPost from "../pages/JobPost/JobPost";
import Profile from "../pages/Profile/Profile";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import JobInfo from "../pages/Jobs/JobInfo";
import MessagePricing from "../pages/MessagePricing/MessagePricing";
import PaymentScreen from "../pages/PaymentScreen/PaymentScreen";
import ChatBox from "../pages/ChatBox/ChatBox";
import UserRegister from "../pages/Register/UserRegister";
// import Testing from "../pages/Testing/Testing";
import PersonalBlog from "../pages/PersonalBlog/PersonalBlog";
import CreateBlog from "../pages/CreateBlog/createBlog";


const nonAuthRoutes = [
    { path: "/signin", component: <Login />, isLayout: false },
    { path: "/signup", component: <UserRegister />, isLayout: false },
    { path: "/contact", component: <Contact />, isLayout: true },
    { path: "/termsandconditions", component: <TermsConditions />, isLayout: true },
    { path: "/faq", component: <Faq />, isLayout: true },
    { path: "/error", component: <ErrorPage />, isLayout: false },
    // { path: "/testing", component: <Testing />, isLayout: false },
    { path: "/resetpassword", component: <ResetPassword />, isLayout: false },
    { path: "/comingsoon", component: <ComingSoon />, isLayout: false },
    { path: '/:blogpath', component: <PersonalBlog />, isLayout: false }

];

const authRoutes = [
    { path: "/jobs/pricing", component: <JobPricing />, isLayout: true },
    { path: "/message/pricing", component: <MessagePricing />, isLayout: true },
    { path: "/payment", component: <PaymentScreen />, isLayout: true },
    { path: "/user/resume", component: <Resume />, isLayout: true },
    { path: "/network", component: <Network />, isLayout: true },
    { path: "/network/user/:id", component: <NetworkInfo />, isLayout: true },
    { path: "/jobs", component: <Jobs />, isLayout: true },
    { path: "/jobs/description/:id", component: <JobInfo />, isLayout: true },
    { path: "/postjob", component: <JobPost />, isLayout: true },
    { path: "/profile", component: <Profile />, isLayout: true },
    { path: "/chatroom", component: <ChatBox />, isLayout: true },
    { path: "/create/blog", component: <CreateBlog />, isLayout: false },


];

export { nonAuthRoutes, authRoutes };