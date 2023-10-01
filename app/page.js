"use client";

import styles from "./page.module.css";
import { roboto, playfair, notosans } from "../global/fonts";
import Hanger from "../public/icons/Hanger.js";
import { usePathname } from "next/navigation";
import { Reveal } from "@/containers/Animation/Reveal";
import { useEffect } from "react";
import Invite from "@/components/Invite/Invite";
import Image from "next/image";
import { Card, CardContent, CardMedia } from "@mui/material";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    console.log({ path: pathname });
  });

  return (
    <main className={`${styles.main} ${roboto.className}`}>
      <section className={`${styles["main-section"]}`}>
        <video autoPlay muted loop className={`${styles["main-video"]}`}>
          <source
            // src="https://la-wedding-rsvp.s3.ap-south-1.amazonaws.com/wedding_header_cmp.mp4"
            src="https://la-wedding-rsvp.s3.ap-south-1.amazonaws.com/main-video-cmp.mp4"
            type="video/mp4"
          />
        </video>
        <video autoPlay muted loop className={`${styles["main-video-mobile"]}`}>
          <source
            src="https://la-wedding-rsvp.s3.ap-south-1.amazonaws.com/mainvid_compressed_3.mp4"
            type="video/mp4"
          />
        </video>
        <div className={`${styles["main-section-wrapper"]}`}>
          <Reveal>
            <div className={`${styles["main-text-container"]}`}>
              <p className={`${styles["main-text"]} ${playfair.className}`}>
                Aaron & Louise
              </p>
              <p
                className={`${styles["main-text-date"]} ${notosans.className}`}
              >
                {pathname == "/baroque" ? `18 . 10 . 2023` : `14 . 10 . 2023`}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <div className={`${styles["invite-text-container"]}`}>
        <div className={`${styles["invite-text-sm"]}`}>
          <Invite />
        </div>
        {/* <div className={`${styles["invite-text-lg"]}`}>
          <div className={`${styles["invite-text-background-lg"]}`}></div>
          <Invite />
        </div> */}
      </div>
      <section className={`${styles["details-section"]}`}>
        <div className={`${styles["details-section-grid"]}`}>
          <div className={`${styles["venue-image-grid"]}`}>
            <img
              className={`${styles["venue-image-grid"]}`}
              src={
                pathname == "/baroque"
                  ? "https://la-wedding-rsvp.s3.ap-south-1.amazonaws.com/baroque.jpg"
                  : "https://la-wedding-rsvp.s3.ap-south-1.amazonaws.com/asianlib_mono.jpg"
              }
            />
          </div>
          <div className={`${styles["invite-text-grid"]}`}>
            <Invite view={"large"} />
          </div>
          <div className={`${styles["venue-text-grid"]}`}>
            {/* <div className={`${styles["venue-text-container"]}`}> */}
              <div
                className={`${styles["venue-grid-text-heading"]} ${playfair.className}`}
              >
                <Reveal>Event Details</Reveal>
              </div>
              <div className={`${styles["venue-text-wrapper"]} ${notosans.className}`}>
                {pathname == "/baroque" ? (
                  <>
                    <Reveal customClass={"text-reveal"}>18 • 10 • 2023</Reveal>
                    <Reveal customClass={"text-reveal"}>Baroque</Reveal>
                    <Reveal customClass={"text-reveal"}>Cawnpore Club, Cantonment Road</Reveal>
                    <Reveal customClass={"text-reveal"}>@19:30hrs (07:30PM IST)</Reveal>
                  </>
                ) : (
                  <>
                    <Reveal customClass={"text-reveal"}>14 • 10 • 2023</Reveal>
                    <Reveal customClass={"text-reveal"}>Asian Library</Reveal>
                    <Reveal customClass={"text-reveal"}>The Landmark Towers</Reveal>
                    <Reveal customClass={"text-reveal"}>@19:30hrs (07:30PM IST)</Reveal>
                  </>
                )}
              </div>
            {/* </div> */}
          </div>
          <div className={`${styles["dresscode-text-grid"]}`}>
              <div className={`${styles["dresscode-heading"]} ${playfair.className}`}>
                <Reveal>What to wear</Reveal>
              </div>
              {/* <div> */}
                <Reveal customClass={"text-reveal"}>
                  Feel free to wear a fancy -ish outfit of your choosing,
                  although we would encourage you to go with something black.
                </Reveal>
              {/* </div> */}
          </div>
        </div>
      </section>
      <section
        className={
          pathname == "/baroque"
            ? `${styles["venue-container-baroque"]}`
            : `${styles["venue-container"]}`
        }
      >
        <div className={`${styles["venue-wrapper"]}`}>
          <div className={`${styles["venue-text-container"]}`}>
            <div className={`${styles["venue-heading"]} ${playfair.className}`}>
              <Reveal>Event Details</Reveal>
            </div>
            <span className={`${styles["venue-text"]} ${notosans.className}`}>
              {pathname == "/baroque" ? (
                <>
                  <Reveal>18 • 10 • 2023</Reveal>
                  <Reveal>Baroque</Reveal>
                  <Reveal>Cawnpore Club, Cantonment Road</Reveal>
                  <Reveal>@19:30hrs (07:30PM IST)</Reveal>
                </>
              ) : (
                <>
                  <Reveal>14 • 10 • 2023</Reveal>
                  <Reveal>Asian Library</Reveal>
                  <Reveal>The Landmark Towers</Reveal>
                  <Reveal>@19:30hrs (07:30PM IST)</Reveal>
                </>
              )}
            </span>
          </div>
        </div>
      </section>
      <section className={`${styles["theme-container"]}`}>
        <div className={`${styles["theme-color-info"]}`}>
          <div className={`${styles["theme-icon"]}`}>
            <Hanger />
          </div>
          <div className={`${styles["theme-text"]} ${notosans.className}`}>
            <div className={`${styles["color-theme-heading"]}`}>
              <Reveal>What to wear</Reveal>
            </div>
            <div>
              <Reveal>
                Feel free to wear a fancy -ish outfit of your choosing, although
                we would encourage you to go with something black.
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles["footer-container"]}`}>
        <div className={`${styles["footer-wrapper"]}`}>
          <div className={`${styles["footer-text"]} ${notosans.className}`}>
            <Reveal>• We Hope To See You Soon •</Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
