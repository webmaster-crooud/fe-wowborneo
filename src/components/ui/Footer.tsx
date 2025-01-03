import React from "react";
import Container from "./Container";
import { cx } from "class-variance-authority";
import TransitionLink from "./TransitionLink";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import Link from "next/link";
import Phone from "./Phone";
import Mail from "./MailIcon";
import LocationIcon from "./LocationIcon";
import Star from "./Star";

interface ServiceCategoryName {
  id: string;
  name: string;
}

interface ServiceCategoryNameResponse {
  data: {
    items: ServiceCategoryName[];
  };
}

export default function Footer() {
  const { data, error, isLoading } = useQuery<ServiceCategoryNameResponse>({
    queryKey: ["navbarOurServices"],
    queryFn: () => fetchData("service-category/show-all"),
  });

  const { data: dataAddress } = useQuery({
    queryKey: ["contact"],
    queryFn: () => fetchData("/location/show-all"),
  });

  return (
    <div className={cx("landscape:min-lg:text-18-d relative", "text-14-m")}>
      <div className={cx("w-full h-[0.052vw] bg-secondary")}></div>
      <div className={cx("mt-128-landscape w-full")}>
        <Container
          className={cx(
            "flex landscape:min-lg:gap-0 landscape:min-lg:flex-row landscape:min-lg:justify-between",
            "flex-col gap-40-m"
          )}
        >
          <div
            className={cx(
              "flex landscape:min-lg:flex-row landscape:min-lg:justify-normal landscape:min-lg:gap-240-d flex-shrink-0",
              "flex-col gap-40-m justify-between"
            )}
          >
            <div className={cx("landscape:min-lg:text-48-d")}>
              <TransitionLink href="/news" opacity={false}>
                <p className={cx("leading-none")}>News</p>
              </TransitionLink>
              <TransitionLink href="/contact" opacity={false}>
                <p className={cx("leading-none")}>Contact</p>
              </TransitionLink>
              <TransitionLink href="/reservation" opacity={false}>
                <p className={cx("leading-none")}>Reservation</p>
              </TransitionLink>
            </div>
            <div
              className={cx(
                "flex flex-col landscape:min-lg:gap-16-d",
                "gap-8-m"
              )}
            >
              <p className={cx("font-medium")}>Our Services</p>
              <div>
                {data?.data?.items?.map((item, key) => (
                  <TransitionLink
                    key={key}
                    href={`/our-services/${item.id}`}
                    opacity={false}
                  >
                    {item.name}
                  </TransitionLink>
                ))}
              </div>
            </div>
          </div>
          <div
            className={cx(
              "flex landscape:min-lg:flex-row landscape:min-lg:gap-240-d",
              "flex-col gap-40-m"
            )}
          >
            <div
              className={cx(
                "flex flex-col landscape:min-lg:gap-16-d",
                "gap-8-m"
              )}
            >
              <p className={cx("font-medium")}>Contact</p>
              <div className={cx("flex flex-col gap-8-d")}>
                <div className={cx("flex flex-row items-center gap-8")}>
                  <p>
                    <Phone />
                  </p>
                  <p>:</p>
                  {dataAddress?.data?.items[0]?.phoneNumber && (
                    <Link
                      target="_blank"
                      href={`https://api.whatsapp.com/send?phone=${dataAddress?.data?.items[0]?.phoneNumber}`}
                    >
                      {dataAddress?.data?.items[0]?.phoneNumber}
                    </Link>
                  )}
                </div>
                <div className={cx("flex flex-row items-center gap-8")}>
                  <p>
                    <Mail />
                  </p>
                  <p>:</p>
                  {dataAddress?.data?.items[0]?.email && (
                    <Link
                      target="_blank"
                      href={`mailto:${dataAddress?.data?.items[0]?.email}`}
                    >
                      {dataAddress?.data?.items[0]?.email}
                    </Link>
                  )}
                </div>
                <div className={cx("flex flex-row items-center gap-8")}>
                  <p>
                    <LocationIcon />
                  </p>
                  <p>:</p>
                  {dataAddress?.data?.items[0]?.url && (
                    <Link
                      target="_blank"
                      href={dataAddress?.data?.items[0]?.url}
                      className={cx("landscape:min-lg:w-[16.667vw]")}
                    >
                      {dataAddress?.data?.items[0]?.address}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div
              className={cx(
                "flex flex-col landscape:min-lg:gap-16-d",
                "gap-8-m"
              )}
            >
              <p className={cx("font-medium")}>Social Media</p>
              <div className="flex flex-col">
                {dataAddress?.data?.items[0]?.facebook && (
                  <Link
                    target="_blank"
                    href={dataAddress?.data?.items[0]?.facebook}
                  >
                    Facebook
                  </Link>
                )}
                {dataAddress?.data?.items[0]?.instagram && (
                  <Link
                    target="_blank"
                    href={dataAddress?.data?.items[0]?.instagram}
                  >
                    Instagram
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
        <Container
          className={cx(
            "landscape:min-lg:pt-0 landscape:min-lg:pb-0",
            "pt-[11.163vw] pb-[4.651vw]"
          )}
        >
          <div
            className={cx(
              "flex landscape:min-lg:flex-row w-full landscape:min-lg:justify-between pb-[1.667vw] mt-[13.125vw]",
              "flex-col items-center"
            )}
          >
            <p>Copyright © 2024. All rights reserved</p>
            <p>Copyright © 2024. All rights reserved</p>
          </div>
        </Container>
      </div>
    </div>
  );
}
