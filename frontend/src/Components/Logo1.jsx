import { useNavigate } from "react-router-dom";

export default function Logo1() {
  const navigate = useNavigate()
  return (
    <>
      <svg
       onClick={() => navigate(-1)}
        width="180"
        height="90"
        viewBox="0 0 340 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_219_116)">
          <path
            d="M162.258 60.5641C162.258 66.7979 160.059 72.1245 155.678 76.5356C151.19 81.0965 145.639 83.377 139.005 83.377C132.372 83.377 126.766 81.1132 122.278 76.5772C117.889 72.1911 115.698 66.8811 115.698 60.6474C115.698 54.4136 117.889 49.1036 122.278 44.7175C126.793 40.2398 132.372 38.0093 139.005 38.0093C145.639 38.0093 151.146 40.2481 155.634 44.7175C160.059 49.0703 162.267 54.3553 162.267 60.5558L162.258 60.5641ZM152.12 60.6557C152.12 57.0186 150.922 53.9142 148.517 51.3508C146.023 48.6375 142.849 47.2809 139.005 47.2809C135.161 47.2809 131.969 48.6209 129.439 51.3091C127.034 53.9059 125.836 57.0186 125.836 60.6557C125.836 64.2927 127.052 67.3389 129.484 69.9606C132.05 72.7321 135.214 74.122 138.996 74.122C142.778 74.122 145.978 72.7321 148.508 69.9606C150.913 67.3389 152.111 64.2345 152.111 60.6557H152.12Z"
            fill="#323232"
          />
          <path
            d="M215.22 19.9406C215.22 23.7858 215.032 29.5535 214.665 37.2354C214.299 44.9174 214.111 50.6685 214.111 54.4803C214.111 66.2655 214.379 75.1792 214.925 81.2382L214.969 81.8208C215.005 82.1204 214.567 82.3119 213.673 82.4034C213.065 82.4617 212.198 82.4617 211.08 82.4034C209.731 82.3119 209.105 82.2702 209.203 82.2702C208.72 82.2702 208.014 82.3119 207.084 82.4034C206.154 82.495 205.448 82.5366 204.965 82.5366C204.518 82.5366 204.25 81.5045 204.17 79.4238C204.089 77.3431 203.973 76.3028 203.812 76.2695C203.624 76.361 203.383 76.5525 203.088 76.8521C198.698 81.2632 193.656 83.4771 187.952 83.4771C181.48 83.4771 176.16 81.18 171.994 76.5858C168.052 72.2579 166.085 67.0395 166.085 60.9305C166.085 54.8216 168.07 49.237 172.048 44.9174C176.214 40.3815 181.641 38.1177 188.337 38.1177C192.378 38.1177 195.9 39.2246 198.913 41.4302C200.29 42.5371 201.649 43.6523 202.999 44.7842C203.258 44.6927 203.383 44.4846 203.383 44.16V29.645C203.383 28.6629 203.338 27.1732 203.24 25.1674C203.142 23.1699 203.097 21.6634 203.097 20.6481C203.097 19.9323 203.356 19.5744 203.866 19.5744C205.055 19.5744 206.816 19.4745 209.149 19.2831C211.492 19.0917 213.235 18.9918 214.388 18.9918C214.934 18.9918 215.202 19.3081 215.202 19.9323L215.22 19.9406ZM203.204 60.6559C203.204 57.0771 202.015 53.931 199.646 51.2178C197.116 48.3214 193.978 46.8816 190.223 46.8816C186.281 46.8816 183.035 48.3131 180.47 51.1762C178.038 53.8644 176.813 57.0854 176.813 60.839C176.813 64.5926 178.083 67.5388 180.613 70.1938C183.205 72.9986 186.415 74.3969 190.223 74.3969C194.032 74.3969 197.241 72.982 199.735 70.1439C202.042 67.4889 203.195 64.3262 203.195 60.6559H203.204Z"
            fill="#323232"
          />
          <path
            d="M236.264 28.8459C236.264 32.5162 234.065 34.3472 229.684 34.3472C225.303 34.3472 223.006 32.5162 223.006 28.8459C223.006 27.2063 223.694 25.8496 225.071 24.776C226.349 23.7606 227.887 23.2529 229.684 23.2529C231.481 23.2529 233.028 23.7773 234.324 24.8176C235.62 25.858 236.273 27.2063 236.273 28.8459H236.264ZM235.924 40.9722C235.924 43.2693 235.772 46.7399 235.468 51.3757C235.164 56.0116 235.012 59.4988 235.012 61.8209C235.012 64.0015 235.057 67.2557 235.155 71.6002C235.254 75.9364 235.298 79.1823 235.298 81.3296C235.298 81.9538 235.012 82.2701 234.431 82.2701H225.062C224.392 82.2701 224.052 81.6625 224.052 80.439C224.052 78.3833 224.105 75.2872 224.222 71.1591C224.329 67.031 224.392 63.9182 224.392 61.8292C224.392 59.5071 224.204 56.0116 223.837 51.3591C223.471 46.7066 223.283 43.2194 223.283 40.889C223.283 40.3813 223.623 40.1316 224.293 40.1316C224.874 40.1316 225.759 40.2065 226.957 40.3563C228.155 40.5061 229.067 40.581 229.675 40.581C230.283 40.581 231.186 40.5061 232.393 40.3563C233.591 40.2065 234.503 40.1316 235.111 40.1316C235.656 40.1316 235.924 40.4146 235.924 40.9805V40.9722Z"
            fill="#323232"
          />
          <path
            d="M287.786 81.4545C287.786 82.112 287.464 82.4366 286.829 82.4366C285.774 82.4366 284.192 82.42 282.1 82.395C279.999 82.3617 278.425 82.3534 277.371 82.3534C276.789 82.3534 276.503 81.9206 276.503 81.055C276.503 79.5902 276.548 77.368 276.646 74.3884C276.745 71.4089 276.789 69.17 276.789 67.6803C276.789 66.4901 276.772 64.709 276.745 62.337C276.709 59.965 276.7 58.1839 276.7 56.9937C276.7 53.598 276.173 51.1927 275.118 49.7945C273.839 48.1216 271.461 47.2893 268.001 47.2893C266.401 47.2893 264.175 48.1216 261.323 49.7945C258.31 51.5589 256.808 53.1236 256.808 54.4886V81.3297C256.808 82.0787 256.504 82.4449 255.896 82.4449C254.868 82.4449 253.331 82.4283 251.283 82.4033C249.236 82.37 247.698 82.3617 246.67 82.3617C246 82.3617 245.66 82.0205 245.66 81.3297C245.66 78.9743 245.696 75.4371 245.776 70.7264C245.857 66.0157 245.892 62.4618 245.892 60.0815C245.892 53.7312 245.168 47.8636 243.729 42.4954C243.631 42.2291 243.586 42.0293 243.586 41.9128C243.586 41.6132 243.792 41.4051 244.212 41.2886C244.435 41.2553 246.268 40.9806 249.719 40.4646C253.161 39.9403 254.967 39.6823 255.128 39.6823C255.315 39.6823 255.449 39.9236 255.512 40.398C255.673 42.2457 256.039 44.11 256.621 45.991C258.283 44.7675 260.483 43.2444 263.201 41.4301C266.562 39.5241 269.816 38.567 272.954 38.567C278.98 38.567 283.092 40.19 285.309 43.4442C286.945 45.8328 287.759 49.6946 287.759 55.0296C287.759 55.9534 287.732 57.3683 287.687 59.2825C287.643 61.1884 287.616 62.62 287.616 63.5771C287.616 65.5746 287.652 68.5625 287.714 72.5241C287.777 76.4941 287.813 79.4737 287.813 81.4712L287.786 81.4545Z"
            fill="#323232"
          />
          <path
            d="M339.255 40.656C339.255 44.2348 339.219 49.6113 339.156 56.7856C339.094 63.9599 339.058 69.3364 339.058 72.9152C339.058 80.0146 337.422 85.2496 334.159 88.6204C330.735 92.1992 325.255 93.9886 317.727 93.9886C310.199 93.9886 304.576 92.7069 300.088 90.1435C299.382 89.7273 299.033 89.3694 299.033 89.0698C299.033 89.3944 299.516 87.1889 300.473 82.4448C300.571 81.9372 300.794 81.6875 301.143 81.6875C301.304 81.6875 301.51 81.7624 301.769 81.9122C306.579 84.4756 311.397 85.7573 316.234 85.7573C319.408 85.7573 322.036 85.0998 324.119 83.7848C326.524 82.295 327.722 80.1311 327.722 77.3013C327.722 76.6771 327.659 75.2706 327.525 73.0983C323.967 77.1266 319.452 79.1407 313.972 79.1407C308.045 79.1407 303.173 77.1599 299.364 73.1899C295.708 69.3697 293.884 64.6756 293.884 59.0993C293.884 53.523 295.645 48.6126 299.167 44.6509C302.913 40.4146 307.786 38.3006 313.776 38.3006C319.059 38.3006 323.261 40.1982 326.363 43.9851C326.873 44.6093 327.248 44.9256 327.472 44.9256C327.731 44.9256 327.856 44.6592 327.856 44.1183C327.856 43.7271 327.82 43.1112 327.758 42.2623C327.695 41.4133 327.659 40.7808 327.659 40.3647C327.659 38.5753 327.847 37.6764 328.232 37.6764C328.553 37.6764 330.279 37.951 333.426 38.5004C336.564 39.0497 338.28 39.3909 338.566 39.5074C339.013 39.6572 339.237 40.0484 339.237 40.6726L339.255 40.656ZM327.722 59.091C327.722 55.7536 326.748 52.9155 324.79 50.5934C322.644 48.0549 319.819 46.7899 316.332 46.7899C312.846 46.7899 310.065 48.0716 307.92 50.635C305.962 52.9571 304.987 55.7785 304.987 59.091C304.987 62.4035 305.98 65.15 307.964 67.5054C310.11 70.0688 312.899 71.3505 316.323 71.3505C319.747 71.3505 322.51 70.0688 324.682 67.5054C326.703 65.15 327.713 62.3452 327.713 59.091H327.722Z"
            fill="#323232"
          />
        </g>
        <g clipPath="url(#clip1_219_116)" filter="url(#filter0_d_219_116)">
          <path
            d="M59.2533 112C89.7688 112 114.507 86.9279 114.507 56C114.507 25.0721 89.7688 0 59.2533 0C28.7377 0 4 25.0721 4 56C4 86.9279 28.7377 112 59.2533 112Z"
            fill="white"
          />
          <path
            d="M85.9022 88.0363C85.9022 89.5636 85.4358 90.3272 84.5029 90.3272H73.4254C72.4925 90.3272 70.0707 86.8636 66.1599 79.9363C62.8501 74.0818 60.6525 69.8545 59.5672 67.2454C58.4729 64.7454 57.845 63.3454 57.6925 63.0454C56.7328 61.4181 55.6026 60.5545 54.3199 60.4545C53.9342 60.4181 52.8579 60.409 51.0908 60.409C47.0455 60.409 45.0273 60.9181 45.0273 61.9181C45.0273 64.909 45.135 69.3818 45.3413 75.3363C45.5476 81.2909 45.6552 85.7454 45.6552 88.709C45.6552 89.7818 45.2516 90.3181 44.4533 90.3181C43.8433 90.3181 42.9284 90.2727 41.7085 90.1727C40.4887 90.0727 39.5738 90.0272 38.9638 90.0272C38.3898 90.0272 37.5287 90.0727 36.3895 90.1727C35.2504 90.2727 34.3893 90.3181 33.8152 90.3181C33.0169 90.3181 32.6133 89.9454 32.6133 89.1999C32.6133 85.6181 32.7837 80.2454 33.1156 73.0727C33.4564 65.8999 33.6179 60.5272 33.6179 56.9454C33.6179 53.1727 33.4475 47.4999 33.1156 39.9363C32.7747 32.3727 32.6133 26.709 32.6133 22.9272C32.6133 22.209 33.0169 21.8545 33.8152 21.8545C34.3893 21.8545 35.2773 21.8999 36.4613 21.9999C37.6453 22.0999 38.5512 22.1454 39.1612 22.1454C39.7352 22.1454 40.6053 22.0999 41.7624 21.9999C42.9195 21.8999 43.7805 21.8545 44.3636 21.8545C45.0991 21.8545 45.4668 22.1454 45.4668 22.7363C45.4668 25.4999 45.3771 29.6636 45.2067 35.2272C45.0273 40.7909 44.9376 44.9727 44.9376 47.7636C44.9376 49.0363 45.0184 49.8272 45.1798 50.1545C45.4399 50.7363 46.0947 51.0363 47.1531 51.0363C53.3781 51.0363 57.9347 49.8636 60.823 47.5272C63.2896 45.4454 65.6397 41.6272 67.8552 36.0636C69.4608 31.709 71.0663 27.3454 72.6719 22.9909C72.8962 22.4363 73.3985 22.0636 74.1609 21.8727C74.6722 21.7454 76.3764 21.6818 79.2646 21.6818C82.7987 21.6818 84.5568 22.1909 84.5568 23.1909C84.5568 23.7727 83.8212 26.409 82.3412 31.0999C80.6101 36.5636 78.3587 41.3818 75.605 45.5454C73.7752 48.3727 71.3534 51.2181 68.3396 54.0818C67.5682 54.7636 67.1825 55.3818 67.1825 55.9363C67.1825 56.5181 68.4831 59.4363 71.0843 64.6727C73.3267 69.1909 75.3718 72.8181 77.2016 75.5545C79.2198 78.0636 82.0452 81.9181 85.678 87.1181C85.8394 87.409 85.9201 87.7181 85.9201 88.0454L85.9022 88.0363Z"
            fill="url(#paint0_linear_219_116)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_219_116"
            x="0"
            y="0"
            width="118.507"
            height="120"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_219_116"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_219_116"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_219_116"
            x1="19.374"
            y1="10.8363"
            x2="95.9865"
            y2="97.3171"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.18" stopColor="#3FFF51" />
            <stop offset="0.34" stopColor="#36DB74" />
            <stop offset="0.8" stopColor="#1E79D7" />
            <stop offset="1" stopColor="#1552FF" />
          </linearGradient>
          <clipPath id="clip0_219_116">
            <rect
              width="280.254"
              height="74.9803"
              fill="white"
              transform="translate(59 19)"
            />
          </clipPath>
          <clipPath id="clip1_219_116">
            <rect
              width="110.507"
              height="112"
              fill="white"
              transform="translate(4)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
