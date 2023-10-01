import { Reveal } from "@/containers/Animation/Reveal";
import styles from "../../app/page.module.css";
import { usePathname } from "next/navigation";
import { greatvibes, notosans, playfair } from "../../global/fonts";

export default function Invite({view}) {
  const pathname = usePathname();

  return (
    <>
      <div className={`${styles["invite-text"]}`}>
        <Reveal>
          <div
            className={view == "large" ? `${styles["invite-text-heading-lg"]}` : `${styles["invite-text-heading"]}`}
          >
            <span className={`${playfair.className}`}>
              Join us on our special day
            </span>
          </div>
        </Reveal>
        <Reveal customClass={"text-reveal"}>
          <span className={`${notosans.className}`}>
            Dr. and Mrs. Vishwakarma request the pleasure of your company <br />
            to celebrate the wedding of their son
          </span>
        </Reveal>
        <br />

        <Reveal>
          <span
            className={ view == "large" ? `${notosans.className} ${styles["fancy-text-large"]}` : `${greatvibes.className} ${styles["invite-fancy-text"]}`}
          >
            Aaron (Akshat) Vishwakarma
          </span>
          {/* <br /> */}
          <span className={`${notosans.className}`}> with</span>{" "}
          <span
            className={ view == "large" ? `${notosans.className} ${styles["fancy-text-large"]}` : `${greatvibes.className} ${styles["invite-fancy-text"]}`}
          >
            Louise Qingxin Gagnon
          </span>
        </Reveal>
        <br />
        <Reveal customClass={"text-reveal"}>
          <span className={`${notosans.className}`}>
            daughter of Mr. Gagnon and Mrs. Girard on{" "}
            {pathname == "/baroque" ? "Wednesday" : "Saturday"}, <br />
            <span style={{ fontWeight: 300 }}>
              {pathname == "/baroque" ? `October 18, 2023` : `October 14, 2023`}
            </span>
          </span>
        </Reveal>
      </div>
    </>
  );
}
