import Link from "next/link";
import { GitBranchPlus, Network, ShieldCheck, Server, SatelliteDish } from "lucide-react";

export default function Nav2() {
  return (
    <>
      <li>
        <Link href={`/`}>Home</Link>
      </li>
      <li className="has-dd-menu" style={{ position: "relative" }}>
        <a href="#" role="button" aria-haspopup="true">
          Peering
          <span
            data-uc-navbar-parent-icon=""
            className="uc-icon uc-navbar-parent-icon"
          >
            <svg width={12} height={12} viewBox="0 0 12 12">
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="1 3.5 6 8.5 11 3.5"
              />
            </svg>
          </span>
        </a>
        <div
          className="uc-navbar-dropdown w-600px ft-primary text-unset fs-6 fw-normal p-0 hide-scrollbar rounded-0 overflow-hidden uc-drop"
          data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
        >
          <div className="row child-cols-6 g-0 col-match">
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2">
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`#`}
                  >
                    <GitBranchPlus className="icon-1 text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Bilateral Peering</b>
                      {/* <span className="fw-normal">
                      Custom agreements between networks for optimized, efficient traffic exchange.
                      </span> */}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`#`}
                  >
                    <Network className="icon-1 text-primary dark:text-secondary" />

                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Public Peering</b>
                      {/* <span className="fw-normal">
                      Direct data exchange at shared points for reduced costs and improved performance.
                      </span> */}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`#`}
                  >
                               <ShieldCheck className="icon-1 text-primary dark:text-secondary" />

                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Private Peering</b>
                      {/* <span className="fw-normal">
                      Exclusive, secure connections between networks for dedicated and high-performance traffic.
                      </span> */}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uc-nav uc-navbar-dropdown-nav p-2 h-100 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-5">
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`#`}
                  >
                    <Server className="icon-1 text-primary dark:text-secondary" />

                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">IP Peering</b>
                      {/* <span className="fw-normal">
                      Cost-effective and fast internet traffic exchange using IP addresses.
                      </span> */}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hstack items-start gap-2 p-2 hover:bg-gray-600 hover:bg-opacity-5 dark:hover:bg-white duration-150 rounded-1-5"
                    href={`/page-contact`}
                  >
                    <SatelliteDish className="icon-1 text-primary dark:text-secondary" />
                    <span className="vstack gap-narrow mt-nnarrow">
                      <b className="fw-bold dark:text-white">Remote Peering</b>
                      {/* <span className="fw-normal">
                      Remote peering access via secure internet services without the need for physical infrastructure.
                      </span> */}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <Link href={`#`}>Insights</Link>
      </li>
      <li>
        <Link href={`#`}>About</Link>
      </li>
      <li>
        <Link href={`#`}>Contact</Link>
      </li>
      <li>
        <Link href={`#`}>Pricing</Link>
      </li>
    </>
  );
}
