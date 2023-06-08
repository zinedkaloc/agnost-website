import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <svg
          width="auto"
          height="32"
          viewBox="0 0 1437 367"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_2)">
            <path
              d="M611.572 261.597C633.736 261.597 649.107 253.018 659.123 241.579V258.737H693.44V165.072C693.44 118.243 671.992 92.8623 625.514 92.8623C598.339 92.8623 572.958 106.446 557.944 118.601L574.388 146.126C581.895 140.049 602.629 127.18 622.654 127.18C650.537 127.18 658.044 139.334 659.116 160.068H633.378C600.133 160.068 551.867 167.575 551.867 212.259C551.867 241.936 578.32 261.597 611.572 261.597ZM586.542 212.259C586.542 196.173 601.205 188.308 630.518 188.308H659.123V203.68C656.257 216.198 642.679 232.999 617.292 232.999C600.848 232.999 586.542 225.135 586.542 212.266V212.259ZM782.326 335.959C831.664 335.959 869.557 303.071 869.557 251.588V95.7158H835.239V119.673C821.649 103.938 801.994 92.8623 779.467 92.8623C732.631 92.8623 697.598 130.755 697.598 177.233C697.598 224.062 732.631 261.604 779.467 261.604C801.988 261.604 821.649 250.879 835.239 235.15V251.594C835.239 275.188 818.432 301.283 782.326 301.283C753.007 301.283 736.206 288.057 730.844 280.907L702.96 299.86C714.4 317.019 740.496 335.965 782.326 335.965V335.959ZM734.776 177.227C734.776 149.701 757.297 127.18 785.186 127.18C812.718 127.18 835.239 149.701 835.239 177.227C835.239 205.11 812.718 227.273 785.186 227.273C757.303 227.273 734.776 205.11 734.776 177.227ZM888.02 258.737H922.338V191.526C922.338 154.699 939.497 127.174 972.027 127.174C1000.27 127.174 1018.15 148.265 1018.15 179.365V258.731H1052.47V176.505C1052.47 129.312 1030.66 92.8497 980.97 92.8497C954.868 92.8497 934.85 106.076 922.338 126.095V95.7033H888.02V258.725V258.737ZM1144.22 261.597C1192.13 261.597 1231.45 224.062 1231.45 177.227C1231.45 130.748 1192.13 92.856 1144.22 92.856C1096.32 92.856 1056.64 130.748 1056.64 177.227C1056.64 224.056 1096.32 261.597 1144.22 261.597ZM1093.81 177.227C1093.81 149.701 1116.33 127.18 1144.22 127.18C1171.76 127.18 1194.28 149.701 1194.28 177.227C1194.28 205.11 1171.76 227.273 1144.22 227.273C1116.34 227.273 1093.81 205.11 1093.81 177.227ZM1287.81 261.597C1321.06 261.597 1351.09 245.511 1351.09 210.478C1351.09 174.016 1316.77 166.145 1296.39 159.359C1273.15 151.495 1265.29 147.914 1265.29 139.334C1265.29 126.465 1279.59 123.605 1288.17 123.605C1307.12 123.605 1318.92 135.402 1322.49 139.334L1344.66 119.316C1334.29 106.089 1314.26 92.8623 1286.74 92.8623C1257.07 92.8623 1230.61 110.021 1230.61 141.479C1230.61 175.797 1264.93 185.097 1285.67 191.889C1308.55 199.396 1316.41 201.899 1316.41 211.914C1316.41 225.856 1301.75 230.503 1290.67 230.503C1267.08 230.503 1252.78 216.562 1249.56 210.842L1221.31 228.001C1229.18 244.445 1254.92 261.604 1287.81 261.604V261.597ZM1415.84 260.525C1420.13 260.525 1427.64 260.167 1431.58 259.81V226.922C1402.97 230.139 1392.97 221.202 1392.97 201.535V130.034H1436.95V95.7158H1392.97V47.8077H1358.65V95.7158V130.034V201.535C1358.65 238.355 1373.67 260.525 1415.85 260.525H1415.84Z"
              fill="#20243B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M302.882 153.238C300.085 155.966 296.266 157.641 292.057 157.641C283.484 157.641 276.542 150.692 276.542 142.119C276.542 137.114 278.906 132.668 282.581 129.833C297.162 118.337 313.613 109.745 331.129 104.352C326.939 98.4565 322.205 92.8372 317.965 88.5036C298.693 68.811 274.861 57.8923 247.078 57.8923C219.571 57.8923 195.915 68.5915 176.705 87.9893C172.253 92.486 167.361 98.262 163.052 104.327C184.764 110.974 204.839 122.552 221.653 138.525L287.523 201.096L375.663 278.907C379.162 281.578 383.377 283.002 387.792 283.002C398.836 283.002 407.786 274.059 407.786 263.008C407.786 259.835 407.052 256.743 405.609 253.921L346.268 132.241C330.583 136.167 315.845 143.273 302.895 153.232L302.882 153.238ZM99.7603 99.1024L106.471 85.5183L106.866 84.8285C114.329 71.7273 124.288 58.7766 134.818 48.0147C165.015 17.1589 203.754 0 247.084 0C290.414 0 329.153 17.1526 359.351 48.0147C369.881 58.7766 379.833 71.7273 387.297 84.8285L387.692 85.5183L394.402 99.1024L394.371 99.0961C393.148 98.9456 391.925 98.8014 390.702 98.676L390.652 98.6697L390.583 98.6634C389.404 98.5443 388.218 98.4376 387.033 98.3498L386.864 98.3373L386.732 98.3248C384.255 98.1366 381.765 98.0112 379.25 97.9485H379.194C377.908 97.9171 376.622 97.8983 375.324 97.8983H375.142H374.96H374.785H374.603H374.421H374.245H374.064H373.888H373.712H373.537L373.361 97.9046H373.186H373.01L372.834 97.9108H372.659L372.483 97.9171H372.308L372.132 97.9234L371.956 97.9296L371.781 97.9359L371.605 97.9422H371.599L371.423 97.9485L371.248 97.9547H371.241L371.066 97.961L370.89 97.9673L370.715 97.9736H370.708L370.533 97.9798L370.357 97.9861H370.351L370.175 97.9924L370 97.9986H369.993L369.818 98.0049H369.812L369.636 98.0112H369.63L369.454 98.0174H369.448L369.272 98.0237L369.097 98.03H369.09L368.915 98.0363H368.908L368.733 98.0425L368.557 98.0488H368.551L368.375 98.0551H368.369L368.194 98.0614H368.187L368.012 98.0676H368.005L367.83 98.0802H367.823L367.648 98.0864H367.642L367.466 98.0927H367.46L367.29 98.1052H367.284L367.115 98.1115H367.109L366.939 98.1241H366.933L366.764 98.1366H366.757L366.588 98.1492H366.582L366.412 98.1617H366.406L366.237 98.1742H366.231L366.061 98.1868H366.055L365.886 98.1993H365.879L365.71 98.2119H365.704L365.534 98.2244H365.528L365.359 98.237H365.352L365.183 98.2495H365.177L365.008 98.262H364.995L364.826 98.2746H364.819L364.65 98.2871H364.644L364.475 98.2997H364.462L364.293 98.3122H364.28L364.111 98.3248H364.104L363.935 98.3373L363.86 98.1805C357.406 86.8542 348.394 75.3898 340.066 66.8794C314.973 41.2352 283.189 26.9675 247.066 26.9675C210.948 26.9675 179.164 41.2352 154.065 66.8794C145.737 75.3898 136.725 86.8542 130.277 98.1805L130.202 98.3373L130.033 98.3248H130.02L129.851 98.3122H129.845L129.675 98.2997H129.669L129.5 98.2871H129.494L129.324 98.2746H129.318L129.149 98.262H129.136L128.967 98.2495H128.954L128.785 98.237H128.779L128.609 98.2244H128.603L128.434 98.2119H128.427L128.258 98.1993H128.252L128.082 98.1868H128.076L127.907 98.1742H127.901L127.731 98.1617H127.725L127.556 98.1492H127.549L127.38 98.1366H127.374L127.198 98.1303H127.192L127.016 98.1178H127.01L126.841 98.1052H126.834L126.659 98.0927H126.653L126.477 98.0864H126.471L126.301 98.0739H126.295L126.119 98.0676H126.113L125.938 98.0614H125.931L125.762 98.0551H125.756L125.58 98.0425H125.574L125.398 98.0363H125.392L125.216 98.03H125.21L125.034 98.0237H125.028L124.853 98.0174H124.846L124.671 98.0112H124.664L124.489 98.0049H124.483L124.307 97.9986H124.301L124.125 97.9924H124.119L123.943 97.9861H123.937L123.761 97.9798H123.755L123.579 97.9736L123.404 97.9673L123.228 97.961H123.222L123.046 97.9547L122.871 97.9485L122.695 97.9422H122.689L122.513 97.9359H122.507L122.331 97.9296H122.325L122.15 97.9234L121.974 97.9171L121.798 97.9108H121.623L121.447 97.9046H121.272L121.096 97.8983H120.92H120.745L120.569 97.892H120.387H120.212H120.03H119.848H119.666H119.484H119.309H119.127H118.945H118.769C117.477 97.892 116.185 97.9108 114.9 97.9422H114.843C111.03 98.0425 107.255 98.2809 103.517 98.6571L103.442 98.6634C102.187 98.7951 100.939 98.9331 99.6976 99.0899L99.7603 99.1024ZM193.218 215.897C201.791 215.897 208.734 222.846 208.734 231.412C208.734 235.803 206.915 239.76 203.987 242.582L203.968 242.601C203.78 242.776 203.591 242.952 203.397 243.121L138.324 302.682L138.004 302.939C128.986 310.089 117.885 313.946 106.377 313.946C78.2553 313.946 55.4458 291.136 55.4458 263.015C55.4458 254.943 57.346 247.01 60.9522 239.954L115.182 128.742C51.2376 130.711 0.00561523 183.159 0.00561523 247.58C0.00561523 313.249 53.2319 366.482 118.907 366.482H375.243C440.918 366.482 494.144 313.256 494.144 247.58C494.144 183.159 442.912 130.711 378.968 128.742L433.198 239.954C436.81 247.01 438.71 254.937 438.71 263.015C438.71 291.136 415.907 313.946 387.779 313.946C376.271 313.946 365.171 310.089 356.152 302.939L355.832 302.682L266.614 223.924L231.061 190.146L200.343 160.958C185.479 146.841 167.411 137.083 147.907 132.229L88.5594 253.927C87.1106 256.749 86.3831 259.848 86.3831 263.015C86.3831 274.059 95.3263 283.008 106.37 283.008C110.786 283.008 115.006 281.585 118.5 278.913L181.459 221.297C184.307 217.998 188.515 215.903 193.218 215.903V215.897Z"
              fill="url(#paint0_linear_1_2)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1_2"
              x1="285.41"
              y1="57.8986"
              x2="285.41"
              y2="283.002"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#70A9FF" />
              <stop offset="1" stopColor="#004DC9" />
            </linearGradient>
            <clipPath id="clip0_1_2">
              <rect width="1436.95" height="366.488" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span> */}
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
