/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FormCheck, FormInput, FormLabel } from "@/components/Base/Form";
import Tippy from "@/components/Base/Tippy";
import users from "@/fakers/users";
import Button from "@/components/Base/Button";
import clsx from "clsx";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { postApi } from "../../stores/api";
import { jwtDecode } from "jwt-decode";
import Lucide from "@/components/Base/Lucide";
import Notification from "@/components/Base/Notification";
import { NotificationElement } from "@/components/Base/Notification";

interface CustomJwtPayload {
  user_name: string;
  designation: string;
  role: string;
  code: string[];
  id: string;
  session_id: string;
}

function Main() {
  const { pathname } = useLocation();
  const token = localStorage.getItem("accessToken");
  const path = window.location.pathname;

  useEffect(() => {
    if (token) {
      if (path === "/") {
        navigate("/layout/dashboard");
      }
    } else {
      // if (
      //   !(
      //     path === "/forgot-password" ||
      //     path === "/reset-password" ||
      //     path === "/on-boarding"
      //   )
      // ) {
      logout();
      // }
    }
  }, [pathname]);

  // Basic non sticky notification
  const basicNonStickyNotification = useRef<NotificationElement>();
  const basicNonStickyNotificationToggle = () => {
    // Show notification
    basicNonStickyNotification.current?.showToast();
  };

  const navigate = useNavigate();

  const INITIAL_LOGIN_OBJ = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);
  const [notificationMessage, setNotificationMessage] = useState("");

  const updateFormValue = ({ updateType, value }: { updateType: string; value: string | boolean }) => {
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginObj.username.trim() === "") {
      setNotificationMessage("UserName is required!");
      basicNonStickyNotificationToggle();
    }
    else if (loginObj.password.trim() === "") {
      setNotificationMessage("Password is required!");
      basicNonStickyNotificationToggle();
    }
    else {
      delete (loginObj as { rememberMe?: boolean }).rememberMe;
      await postApi('/auth/login', loginObj, false).then((res) => {
        if (res?.data?.data?.accessToken) {
          localStorage.setItem("accessToken", res?.data?.data?.accessToken);
          const userData = jwtDecode<CustomJwtPayload>(res?.data?.data?.accessToken);

          localStorage.setItem("userData", JSON.stringify({
            name: userData?.user_name,
            // designation: userData?.designation?.designation,
            // role: userData?.role.role,
          }));
          sessionStorage.setItem("userSession", JSON.stringify(userData?.session_id));

          navigate("layout/dashboard");
        }
        else {
          if (res?.error?.error?.status === 404) {
            setNotificationMessage(res?.error?.message === "User not found" ? "Wrong credentials" : res?.error?.message);
            basicNonStickyNotificationToggle();
          }
          else {
            setNotificationMessage("Fail to login");
            basicNonStickyNotificationToggle();
          }
        }
      }).catch((err) => {
        setNotificationMessage(err?.response?.data?.error?.message);
        basicNonStickyNotificationToggle();
      })
    }
  };

  const logout = async () => {
    const session_id = sessionStorage.getItem("UserSession");
    if (session_id) {
      await postApi('/auth/logout', { session_id }, true);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userData");
      sessionStorage.removeItem("userSession");
      navigate("/");
    }
  };

  return (
    <>
      <div className="container grid lg:h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] py-10 px-5 sm:py-14 sm:px-10 md:px-36 lg:py-0 lg:pl-14 lg:pr-12 xl:px-24">
        <div
          className={clsx([
            "relative z-50 h-full col-span-12 p-7 sm:p-14 bg-white rounded-2xl lg:bg-transparent lg:pr-10 lg:col-span-5 xl:pr-24 2xl:col-span-4 lg:p-0 dark:bg-darkmode-600",
            "before:content-[''] before:absolute before:inset-0 before:-mb-3.5 before:bg-white/40 before:rounded-2xl before:mx-5 dark:before:hidden",
          ])}
        >
          <div className="relative z-10 flex flex-col justify-center w-full h-full py-2 lg:py-32">
            <div className="rounded-[0.8rem] w-[55px] h-[55px] border border-primary/30 flex items-center justify-center">
              <div className="relative flex items-center justify-center w-[50px] rounded-[0.6rem] h-[50px] bg-gradient-to-b from-theme-1/90 to-theme-2/90 bg-white">
                <div className="w-[26px] h-[26px] relative -rotate-45 [&_div]:bg-white">
                  <div className="absolute w-[20%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                  <div className="absolute w-[20%] inset-0 m-auto h-[120%] rounded-full"></div>
                  <div className="absolute w-[20%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]"></div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-2xl font-medium">Sign In</div>
              <div className="mt-2.5 text-slate-600 dark:text-slate-400">
                Don't have an account?{" "}
                <a className="font-medium text-primary" href="/register">
                  Sign Up
                </a>
              </div>
              <div className="mt-6">
                <form onSubmit={submitForm} className="mt-6 space-y-4">
                  <FormLabel>UserName<span className="text-danger">*</span></FormLabel>
                  <FormInput
                    type="text"
                    className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                    placeholder={"Enter your username"}
                    value={loginObj.username}
                    onChange={(e) => updateFormValue({ updateType: 'username', value: e.target.value })}
                    required
                  />
                  <FormLabel className="mt-4">Password<span className="text-danger">*</span></FormLabel>
                  <FormInput
                    type="password"
                    className="block px-4 py-3.5 rounded-[0.6rem] border-slate-300/80"
                    placeholder="************"
                    value={loginObj.password}
                    onChange={(e) => updateFormValue({ updateType: 'password', value: e.target.value })}
                    required
                  />
                  <div className="flex mt-4 text-xs text-slate-500 sm:text-sm">
                    <div className="flex items-center mr-auto">
                      <FormCheck.Input
                        id="remember-me"
                        type="checkbox"
                        className="mr-2.5 border"
                        checked={loginObj.rememberMe}
                        onChange={(e) => updateFormValue({ updateType: 'rememberMe', value: e.target.value })}
                      />
                      <label
                        className="cursor-pointer select-none"
                        htmlFor="remember-me"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="">Forgot Password?</a>
                  </div>
                  <div className="mt-5 text-center xl:mt-8 xl:text-left">
                    <Button
                      variant="primary"
                      rounded
                      className="bg-gradient-to-r from-theme-1/70 to-theme-2/70 w-full py-3.5 xl:mr-3 dark:border-darkmode-400"
                    // loading={loading ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} /> : ""}
                    >
                      Sign In
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed container grid w-screen inset-0 h-screen grid-cols-12 lg:max-w-[1550px] 2xl:max-w-[1750px] pl-14 pr-12 xl:px-24">
        <div
          className={clsx([
            "relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20",
            "after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] dark:after:bg-darkmode-600 dark:after:from-darkmode-600 dark:after:to-darkmode-600",
            "before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] dark:before:from-darkmode-300 dark:before:to-darkmode-300",
          ])}
        >
        </div>
        <div
          className={clsx([
            "h-full col-span-7 2xl:col-span-8 lg:relative",
            "before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:w-screen before:lg:w-[800%]",
            "after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-screen after:lg:w-[800%] after:bg-texture-white after:bg-fixed after:bg-center after:lg:bg-[25rem_-25rem] after:bg-no-repeat",
          ])}
        >
          <div className="sticky top-0 z-10 flex-col justify-center hidden h-screen ml-16 lg:flex xl:ml-28 2xl:ml-36">
            <div className="leading-[1.4] text-[2.6rem] xl:text-5xl font-medium xl:leading-[1.2] text-white">
              Embrace Excellence <br /> in Dashboard Development
            </div>
            <div className="mt-5 text-base leading-relaxed xl:text-lg text-white/70">
              Unlock the potential of Tailwise, where developers craft
              meticulously structured, visually stunning dashboards with
              feature-rich modules. Join us today to shape the future of your
              application development.
            </div>
            <div className="flex flex-col gap-3 mt-10 xl:items-center xl:flex-row">
              <div className="flex items-center">
                <div className="w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="Tailwise - Admin Dashboard Template"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0]?.photo}
                    content={users.fakeUsers()[0]?.name || ""}
                  />
                </div>
                <div className="-ml-3 w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="Tailwise - Admin Dashboard Template"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0]?.photo}
                    content={users.fakeUsers()[0]?.name || ""}
                  />
                </div>
                <div className="-ml-3 w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="Tailwise - Admin Dashboard Template"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0]?.photo}
                    content={users.fakeUsers()[0]?.name || ""}
                  />
                </div>
                <div className="-ml-3 w-9 h-9 2xl:w-11 2xl:h-11 image-fit zoom-in">
                  <Tippy
                    as="img"
                    alt="Tailwise - Admin Dashboard Template"
                    className="rounded-full border-[3px] border-white/50"
                    src={users.fakeUsers()[0]?.photo}
                    content={users.fakeUsers()[0]?.name || ""}
                  />
                </div>
              </div>
              <div className="text-base xl:ml-2 2xl:ml-3 text-white/70">
                Over 7k+ strong and growing! Your journey begins here.
              </div>
            </div>
          </div>
        </div>
      </div>
      {notificationMessage}
      {notificationMessage && (
        <div className="text-center">
          {/* BEGIN: Basic Non Sticky Notification Content */}
          <Notification getRef={(el) => {
            basicNonStickyNotification.current = el;
          }}
            options={{
              duration: 3000,
            }}
            className="flex flex-col sm:flex-row"
          >
            <Lucide icon="X" className="text-danger" />
            <div className="font-medium ml-4 mr-4">
              <div className="font-medium">{notificationMessage}</div>
            </div>
          </Notification>
        </div>
      )}
      <ThemeSwitcher />
    </>
  );
}

export default Main;
