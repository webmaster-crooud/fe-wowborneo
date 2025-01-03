import React, { useRef, useState } from "react";
import Container from "./Container";
import Button from "./button";
import { cx } from "class-variance-authority";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { toggleNavbar } from "@/stores/navbar";
import gsap from "gsap";
import Image from "next/image";
import ArrowDown from "./ArrowDown";
import { useLenis } from "@studio-freight/react-lenis";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import GradientImage from "./GradientImage";

interface ServiceCategoryName {
  id: string;
  name: string;
}

interface ServiceCategoryNameResponse {
  data: {
    items: ServiceCategoryName[];
  };
}

export default function Navbar() {
  const state = toggleNavbar();
  const container = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { contextSafe } = useGSAP({ scope: container });
  const lenis = useLenis();

  const menuItems = [
    { label: "Message", href: "/our-services/message" },
    { label: "Beauty", href: "/our-services/beauty" },
    { label: "Woman Treatments", href: "/our-services/woman-treatments" },
    { label: "Spa-Packages", href: "/our-services/spa-packages" },
  ];

  useGSAP(() => {
    gsap.to(".navbar-link", {
      ease: "power1.inOut",
      color: state.navbarColorNew2 ? "#0D0D0D" : "#FFFFFF",
      borderColor: state.navbarColorNew2 ? "#0D0D0D" : "#FFFFFF",
    });
    gsap.to(".arrow-down", {
      ease: "power1.inOut",
      stroke: state.navbarColorNew2 ? "#0D0D0D" : "#FFFFFF",
    });
  }, [state.navbarColorNew2]);

  const pathname = usePathname();

  const clickToggle = contextSafe(() => {
    setToggle(!toggle);

    gsap.to(".details-our-services", {
      opacity: !toggle ? 1 : 0,
      display: !toggle ? "block" : "hidden",
      duration: 0.4,
      ease: "power1.inOut",
    });
  });

  const clickToggleMenu = contextSafe(() => {
    setToggleMenu(!toggleMenu);

    gsap.to(".container-menu-navbar", {
      x: !toggleMenu ? 0 : "-100%",
      duration: 0.4,
      ease: "power1.inOut",
    });

    if (!toggleMenu) {
      state.updateNavbarColorNew2(1);
      lenis?.stop();
    } else {
      lenis?.start();
      state.updateNavbarColorNew2(state.navbarColorNew);
    }
  });

  const { data, error, isLoading } = useQuery<ServiceCategoryNameResponse>({
    queryKey: ["navbarOurServices"],
    queryFn: () => fetchData("service-category/show-all"),
  });

  return (
    <div ref={container} className="h-1 fixed top-0 z-40 w-full">
      <Container
        className={cx(
          "relative z-20 flex flex-row justify-between items-center landscape:min-lg:py-48-d w-full text-white bg-white/5 backdrop-blur-sm",
          "py-16-m"
        )}
      >
        <div
          className={cx(
            "landscape:min-lg:flex flex-row gap-32 text-18-d",
            "hidden"
          )}
        >
          <TransitionLink href={"/river-cruise"} className={cx("navbar-link")}>
            River Cruise
          </TransitionLink>
          <TransitionLink href={"/boats"} className={cx("navbar-link")}>
            Boats
          </TransitionLink>
          <TransitionLink href={"/explore"} className={cx("navbar-link")}>
            Explore
          </TransitionLink>
          <TransitionLink href={"/explore"} className={cx("navbar-link")}>
            Resources
          </TransitionLink>
          <TransitionLink href={"/explore"} className={cx("navbar-link")}>
            Testimonials
          </TransitionLink>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className={cx("w-[9.375vw] h-[4.688vw]")}>
            <GradientImage src="/images/logo.png" />
          </div>
        </div>
        <div
          className={cx(
            "text-secondary cursor-pointer landscape:min-lg:hidden text-16-m",
            "navbar-link"
          )}
          onClick={clickToggleMenu}
        >
          Menu
        </div>
        <TransitionLink href="/reservation" opacity={false}>
          <Button className="text-18-d bg-white/30 backdrop-blur-md hover:bg-white/50">
            Book your cruise
          </Button>
        </TransitionLink>
      </Container>

      <div
        className={cx(
          "z-10 w-full h-screen bg-white absolute -translate-x-full landscape:min-lg:hidden top-0 left-0",
          "container-menu-navbar"
        )}
      >
        <Container
          className={cx(
            "py-80-m text-40-m flex flex-col justify-center h-full gap-40-m"
          )}
        >
          <TransitionLink href={"/"} className={cx("")}>
            Reservation
          </TransitionLink>
          <div
            className={cx(
              "flex flex-row items-center landscape:min-lg:gap-8 cursor-pointer relative",
              "gap-16-m"
            )}
          >
            <div
              className={cx(
                menuItems.some((item) => pathname === item.href)
                  ? "opacity-100"
                  : "opacity-50",
                ""
              )}
              onClick={clickToggle}
            >
              Our Services
            </div>
            <div
              className={cx(
                menuItems.some((item) => pathname === item.href)
                  ? "opacity-100"
                  : "opacity-50",
                "w-[0.833vw] h-[0.521vw] relative",
                "w-[20px] h-[20px]"
              )}
              onClick={clickToggle}
            >
              <ArrowDown />
            </div>
            <div
              className={cx(
                "landscape:min-lg:p-20 bg-white w-max absolute z-10 landscape:min-lg:top-[150%] rounded-lg text-secondary hidden opacity-0 shadow-md border border-secondary/5",
                "p-24-m text-14-m top-[120%]",
                "details-our-services"
              )}
            >
              {data?.data?.items.map((item, key) => (
                <TransitionLink
                  key={key}
                  href={`/our-services/${item.id}`}
                  className={cx(
                    pathname === `/our-services/${item.id}`
                      ? "font-bold"
                      : "font-normal",
                    "py-[0.93vw]"
                  )}
                  opacity={false}
                >
                  {item.name}
                </TransitionLink>
              ))}
            </div>
          </div>
          <TransitionLink href={"/news"} className={cx("")}>
            News
          </TransitionLink>
          <TransitionLink href={"/contact"} className={cx("")}>
            Contact
          </TransitionLink>
        </Container>
      </div>
    </div>
  );
}
