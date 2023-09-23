"use client";

import styles from "./page.module.css";
import {
  roboto,
  inter,
  playfair,
  poppins,
  montserrat,
  merriweather,
  zeyada,
  kaushan,
  greatvibes,
  notosans,
} from "../global/fonts";
import Hanger from "../public/icons/Hanger.js";
import { usePathname } from "next/navigation";
import { Reveal } from "@/containers/Animation/Reveal";
import { useEffect } from "react";

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
            src="/videos/wedding_header_cmp.mp4"
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
        <Reveal>
          <div className={`${styles["invite-text-heading"]}`}>
            <span className={`${playfair.className}`}>
              Join us on our special day
            </span>
          </div>
        </Reveal>
        <div className={`${styles["invite-text"]}`}>
          <Reveal>
            <span className={`${notosans.className}`}>
              Dr. and Mrs. Vishwakarma request the pleasure of your company{" "}
              <br />
              to celebrate the wedding of their son
            </span>
          </Reveal>
          <br />
          <br />
          <Reveal>
            <span
              className={`${greatvibes.className}`}
              style={{ fontSize: "clamp(1.1rem, 6vw, 2.5rem)" }}
            >
              Aaron (Akshat) Vishwakarma
            </span>
            <br />
            <span className={`${notosans.className}`}>with</span>{" "}
            <span
              className={`${greatvibes.className}`}
              style={{ fontSize: "clamp(1.1rem, 6vw, 2.5rem)" }}
            >
              Louise Qingxin Gagnon
            </span>
          </Reveal>
          <br />
          <br />
          <Reveal>
            <span className={`${notosans.className}`}>
              daughter of Mr. Gagnon and Mrs. Girard on {pathname == "/baroque" ? "Wednesday" : "Saturday"}, <br />
              <span style={{ fontWeight: 500 }}>
                {pathname == "/baroque" ? `October 18, 2023` : `October 14, 2023`}
              </span>
            </span>
          </Reveal>
        </div>
      </div>
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
                we would encourage you to go with something black and/or white.
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
