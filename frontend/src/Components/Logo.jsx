/* eslint-disable react/prop-types */
export default function Logo({ isResponsavel, className, isResponsive, isDark }) {

    

    return (
        <>
            {isResponsive ? (<svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_375_1711)">
                    <path d="M25.5 43.8038C37.3741 43.8038 47 33.998 47 21.9019C47 9.80581 37.3741 0 25.5 0C13.6259 0 4 9.80581 4 21.9019C4 33.998 13.6259 43.8038 25.5 43.8038Z" fill="white" />
                </g>
                <path d="M35.7356 32.9516C35.7356 33.5489 35.5541 33.8476 35.1912 33.8476H30.8807C30.5177 33.8476 29.5753 32.4929 28.0536 29.7836C26.7657 27.4939 25.9106 25.8406 25.4882 24.8202C25.0624 23.8424 24.8181 23.2949 24.7588 23.1775C24.3853 22.5411 23.9455 22.2033 23.4464 22.1642C23.2963 22.15 22.8775 22.1464 22.1899 22.1464C20.6158 22.1464 19.8305 22.3455 19.8305 22.7366C19.8305 23.9064 19.8724 25.6557 19.9527 27.9846C20.033 30.3134 20.0748 32.0556 20.0748 33.2147C20.0748 33.6343 19.9178 33.844 19.6071 33.844C19.3698 33.844 19.0138 33.8263 18.5391 33.7871C18.0644 33.748 17.7084 33.7303 17.4711 33.7303C17.2477 33.7303 16.9127 33.748 16.4694 33.7871C16.0261 33.8263 15.6911 33.844 15.4677 33.844C15.1571 33.844 15 33.6983 15 33.4067C15 32.0058 15.0663 29.9045 15.1955 27.0992C15.3281 24.294 15.3909 22.1927 15.3909 20.7918C15.3909 19.3163 15.3246 17.0976 15.1955 14.1394C15.0628 11.1813 15 8.96619 15 7.4871C15 7.20622 15.1571 7.06755 15.4677 7.06755C15.6911 7.06755 16.0366 7.08533 16.4973 7.12444C16.958 7.16355 17.3106 7.18133 17.5479 7.18133C17.7713 7.18133 18.1098 7.16355 18.5601 7.12444C19.0103 7.08533 19.3454 7.06755 19.5722 7.06755C19.8584 7.06755 20.0015 7.18133 20.0015 7.41244C20.0015 8.49331 19.9666 10.1217 19.9003 12.2977C19.8305 14.4737 19.7956 16.1092 19.7956 17.2007C19.7956 17.6985 19.827 18.0078 19.8899 18.1358C19.9911 18.3634 20.2459 18.4807 20.6577 18.4807C23.08 18.4807 24.853 18.0221 25.9769 17.1083C26.9367 16.2941 27.8511 14.8008 28.7132 12.6248C29.338 10.9217 29.9627 9.21508 30.5875 7.51199C30.6748 7.29511 30.8702 7.14933 31.1669 7.07467C31.3658 7.02489 32.029 7 33.1528 7C34.528 7 35.2121 7.19911 35.2121 7.59021C35.2121 7.81776 34.9259 8.84886 34.35 10.6835C33.6764 12.8204 32.8003 14.7048 31.7288 16.3332C31.0168 17.4389 30.0744 18.5518 28.9017 19.6718C28.6015 19.9385 28.4515 20.1802 28.4515 20.3971C28.4515 20.6247 28.9575 21.766 29.9697 23.814C30.8423 25.581 31.6381 26.9997 32.3501 28.0699C33.1354 29.0512 34.2348 30.5587 35.6484 32.5925C35.7112 32.7063 35.7426 32.8272 35.7426 32.9552L35.7356 32.9516Z" fill="url(#paint0_linear_375_1711)" />
                <defs>
                    <filter id="filter0_d_375_1711" x="0" y="0" width="51" height="51.8037" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_375_1711" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_375_1711" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_375_1711" x1="9.84838" y1="2.75829" x2="39.8299" y2="36.4297" gradientUnits="userSpaceOnUse">
                        <stop offset="0.18" stopColor="#FFAB15" />
                        <stop offset="0.5" stopColor="#C16574" />
                        <stop offset="0.84" stopColor="#811CD7" />
                        <stop offset="1" stopColor="#6800FF" />
                    </linearGradient>
                </defs>
            </svg>) : (
                <svg className={className?className : "scale-50"} width="340" height="121" viewBox="0 0 340 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_149_112)">
                        <path d="M162.572 67.377C162.572 73.6108 160.372 78.9374 155.992 83.3485C151.504 87.9094 145.952 90.1898 139.318 90.1898C132.685 90.1898 127.079 87.926 122.591 83.3901C118.202 79.004 116.011 73.694 116.011 67.4602C116.011 61.2264 118.202 55.9165 122.591 51.5303C127.106 47.0527 132.685 44.8221 139.318 44.8221C145.952 44.8221 151.459 47.061 155.947 51.5303C160.372 55.8832 162.58 61.1682 162.58 67.3687L162.572 67.377ZM152.433 67.4685C152.433 63.8315 151.235 60.7271 148.831 58.1636C146.336 55.4504 143.163 54.0938 139.318 54.0938C135.474 54.0938 132.282 55.4337 129.752 58.122C127.348 60.7187 126.15 63.8315 126.15 67.4685C126.15 71.1056 127.365 74.1518 129.797 76.7735C132.363 79.545 135.528 80.9349 139.309 80.9349C143.091 80.9349 146.292 79.545 148.822 76.7735C151.227 74.1518 152.425 71.0474 152.425 67.4685H152.433Z" fill={isDark ? "#FFF" : "#323232"} />
                        <path d="M215.533 26.7535C215.533 30.5986 215.345 36.3663 214.978 44.0483C214.612 51.7303 214.424 57.4813 214.424 61.2932C214.424 73.0783 214.692 81.9921 215.238 88.0511L215.282 88.6337C215.318 88.9333 214.88 89.1247 213.986 89.2163C213.378 89.2745 212.511 89.2745 211.393 89.2163C210.043 89.1247 209.418 89.0831 209.516 89.0831C209.033 89.0831 208.327 89.1247 207.397 89.2163C206.467 89.3078 205.761 89.3494 205.278 89.3494C204.831 89.3494 204.563 88.3174 204.483 86.2367C204.402 84.156 204.286 83.1156 204.125 83.0824C203.937 83.1739 203.696 83.3653 203.401 83.665C199.011 88.076 193.969 90.2899 188.265 90.2899C181.793 90.2899 176.473 87.9928 172.307 83.3986C168.365 79.0708 166.398 73.8523 166.398 67.7434C166.398 61.6344 168.383 56.0498 172.361 51.7303C176.527 47.1943 181.954 44.9305 188.65 44.9305C192.691 44.9305 196.213 46.0375 199.226 48.243C200.603 49.35 201.962 50.4652 203.312 51.5971C203.571 51.5056 203.696 51.2975 203.696 50.9729V36.4579C203.696 35.4758 203.651 33.986 203.553 31.9802C203.455 29.9827 203.41 28.4763 203.41 27.4609C203.41 26.7452 203.669 26.3873 204.179 26.3873C205.368 26.3873 207.129 26.2874 209.462 26.096C211.805 25.9046 213.548 25.8047 214.701 25.8047C215.247 25.8047 215.515 26.121 215.515 26.7452L215.533 26.7535ZM203.517 67.4687C203.517 63.8899 202.328 60.7439 199.959 58.0307C197.429 55.1343 194.291 53.6945 190.536 53.6945C186.594 53.6945 183.348 55.126 180.782 57.989C178.351 60.6773 177.126 63.8982 177.126 67.6518C177.126 71.4054 178.395 74.3517 180.925 77.0067C183.518 79.8115 186.728 81.2097 190.536 81.2097C194.345 81.2097 197.554 79.7948 200.048 76.9568C202.355 74.3018 203.508 71.1391 203.508 67.4687H203.517Z" fill={isDark ? "#FFF" : "#323232"} />
                        <path d="M236.578 35.6587C236.578 39.3291 234.378 41.1601 229.998 41.1601C225.617 41.1601 223.319 39.3291 223.319 35.6587C223.319 34.0191 224.008 32.6625 225.385 31.5889C226.663 30.5735 228.201 30.0658 229.998 30.0658C231.795 30.0658 233.341 30.5901 234.638 31.6305C235.934 32.6708 236.587 34.0191 236.587 35.6587H236.578ZM236.238 47.7851C236.238 50.0822 236.086 53.5528 235.782 58.1886C235.478 62.8244 235.326 66.3117 235.326 68.6338C235.326 70.8143 235.371 74.0686 235.469 78.4131C235.567 82.7493 235.612 85.9952 235.612 88.1424C235.612 88.7667 235.326 89.0829 234.745 89.0829H225.376C224.705 89.0829 224.365 88.4754 224.365 87.2519C224.365 85.1962 224.419 82.1001 224.535 77.972C224.643 73.8438 224.705 70.7311 224.705 68.6421C224.705 66.32 224.517 62.8244 224.151 58.172C223.784 53.5195 223.597 50.0322 223.597 47.7019C223.597 47.1942 223.936 46.9445 224.607 46.9445C225.188 46.9445 226.073 47.0194 227.271 47.1692C228.469 47.319 229.381 47.3939 229.989 47.3939C230.597 47.3939 231.5 47.319 232.707 47.1692C233.905 47.0194 234.816 46.9445 235.424 46.9445C235.97 46.9445 236.238 47.2275 236.238 47.7934V47.7851Z" fill={isDark ? "#FFF" : "#323232"} />
                        <path d="M288.1 88.2674C288.1 88.9249 287.778 89.2495 287.143 89.2495C286.088 89.2495 284.506 89.2328 282.414 89.2079C280.313 89.1746 278.739 89.1662 277.684 89.1662C277.103 89.1662 276.817 88.7335 276.817 87.8679C276.817 86.4031 276.862 84.1809 276.96 81.2013C277.058 78.2217 277.103 75.9829 277.103 74.4931C277.103 73.303 277.085 71.5219 277.058 69.1499C277.023 66.7779 277.014 64.9968 277.014 63.8066C277.014 60.4109 276.486 58.0056 275.431 56.6074C274.153 54.9345 271.775 54.1022 268.315 54.1022C266.715 54.1022 264.489 54.9345 261.637 56.6074C258.624 58.3718 257.122 59.9365 257.122 61.3014V88.1425C257.122 88.8916 256.818 89.2578 256.21 89.2578C255.182 89.2578 253.644 89.2412 251.597 89.2162C249.55 89.1829 248.012 89.1746 246.984 89.1746C246.313 89.1746 245.974 88.8333 245.974 88.1425C245.974 85.7872 246.01 82.25 246.09 77.5393C246.17 72.8285 246.206 69.2747 246.206 66.8944C246.206 60.5441 245.482 54.6765 244.043 49.3083C243.944 49.0419 243.9 48.8422 243.9 48.7257C243.9 48.426 244.105 48.218 244.525 48.1014C244.749 48.0682 246.582 47.7935 250.033 47.2775C253.475 46.7531 255.28 46.4951 255.441 46.4951C255.629 46.4951 255.763 46.7365 255.826 47.2109C255.987 49.0586 256.353 50.9229 256.934 52.8038C258.597 51.5804 260.796 50.0573 263.514 48.2429C266.876 46.337 270.13 45.3799 273.268 45.3799C279.294 45.3799 283.406 47.0028 285.623 50.2571C287.259 52.6457 288.073 56.5075 288.073 61.8424C288.073 62.7663 288.046 64.1811 288.001 66.0954C287.956 68.0013 287.93 69.4328 287.93 70.39C287.93 72.3874 287.965 75.3753 288.028 79.337C288.091 83.307 288.126 86.2865 288.126 88.284L288.1 88.2674Z" fill={isDark ? "#FFF" : "#323232"} />
                        <path d="M339.568 47.4688C339.568 51.0476 339.532 56.4242 339.469 63.5985C339.407 70.7727 339.371 76.1493 339.371 79.7281C339.371 86.8274 337.735 92.0625 334.472 95.4332C331.048 99.0121 325.567 100.801 318.04 100.801C310.512 100.801 304.889 99.5198 300.401 96.9563C299.695 96.5402 299.346 96.1823 299.346 95.8827C299.346 96.2073 299.829 94.0017 300.785 89.2577C300.884 88.75 301.107 88.5003 301.456 88.5003C301.617 88.5003 301.822 88.5752 302.082 88.725C306.891 91.2885 311.71 92.5702 316.547 92.5702C319.721 92.5702 322.349 91.9127 324.432 90.5977C326.837 89.1079 328.035 86.944 328.035 84.1142C328.035 83.49 327.972 82.0834 327.838 79.9112C324.28 83.9394 319.765 85.9536 314.285 85.9536C308.358 85.9536 303.485 83.9727 299.677 80.0027C296.02 76.1826 294.197 71.4885 294.197 65.9122C294.197 60.3359 295.958 55.4254 299.48 51.4638C303.226 47.2275 308.098 45.1135 314.088 45.1135C319.372 45.1135 323.574 47.0111 326.676 50.798C327.185 51.4222 327.561 51.7384 327.784 51.7384C328.044 51.7384 328.169 51.4721 328.169 50.9311C328.169 50.5399 328.133 49.9241 328.071 49.0751C328.008 48.2262 327.972 47.5937 327.972 47.1775C327.972 45.3881 328.16 44.4893 328.544 44.4893C328.866 44.4893 330.592 44.7639 333.739 45.3132C336.877 45.8625 338.593 46.2038 338.879 46.3203C339.326 46.4701 339.55 46.8613 339.55 47.4855L339.568 47.4688ZM328.035 65.9039C328.035 62.5664 327.06 59.7283 325.102 57.4063C322.957 54.8678 320.132 53.6027 316.645 53.6027C313.158 53.6027 310.378 54.8845 308.232 57.4479C306.275 59.77 305.3 62.5914 305.3 65.9039C305.3 69.2164 306.292 71.9629 308.277 74.3182C310.423 76.8817 313.212 78.1634 316.636 78.1634C320.06 78.1634 322.823 76.8817 324.995 74.3182C327.016 71.9629 328.026 69.1581 328.026 65.9039H328.035Z" fill={isDark ? "#FFF" : "#323232"} />
                    </g>
                    <g filter="url(#filter0_d_149_112)">
                        <path d="M59.2811 112.629C89.8121 112.629 114.562 87.4161 114.562 56.3145C114.562 25.2128 89.8121 0 59.2811 0C28.7502 0 4 25.2128 4 56.3145C4 87.4161 28.7502 112.629 59.2811 112.629Z" fill="white" />
                    </g>
                    <path d="M85.9436 88.5307C85.9436 90.0666 85.4769 90.8345 84.5436 90.8345H73.4605C72.5271 90.8345 70.1041 87.3514 66.1913 80.3853C62.8799 74.4978 60.6812 70.2468 59.5953 67.6231C58.5005 65.109 57.8723 63.7012 57.7197 63.3995C56.7595 61.7631 55.6287 60.8946 54.3454 60.794C53.9595 60.7575 52.8826 60.7483 51.1147 60.7483C47.0673 60.7483 45.0481 61.2603 45.0481 62.2659C45.0481 65.2736 45.1558 69.7714 45.3622 75.7594C45.5686 81.7474 45.6763 86.227 45.6763 89.2072C45.6763 90.286 45.2725 90.8254 44.4738 90.8254C43.8635 90.8254 42.9481 90.7797 41.7277 90.6791C40.5072 90.5785 39.5918 90.5328 38.9815 90.5328C38.4072 90.5328 37.5457 90.5785 36.406 90.6791C35.2662 90.7797 34.4047 90.8254 33.8304 90.8254C33.0316 90.8254 32.6278 90.4505 32.6278 89.7009C32.6278 86.099 32.7983 80.6961 33.1304 73.4831C33.4714 66.2701 33.6329 60.8672 33.6329 57.2652C33.6329 53.4713 33.4624 47.7667 33.1304 40.1606C32.7893 32.5545 32.6278 26.8591 32.6278 23.056C32.6278 22.3338 33.0316 21.9773 33.8304 21.9773C34.4047 21.9773 35.2931 22.023 36.4777 22.1236C37.6623 22.2241 38.5687 22.2698 39.179 22.2698C39.7533 22.2698 40.6238 22.2241 41.7815 22.1236C42.9392 22.023 43.8007 21.9773 44.384 21.9773C45.1199 21.9773 45.4878 22.2698 45.4878 22.8641C45.4878 25.6432 45.3981 29.8302 45.2276 35.4251C45.0481 41.02 44.9584 45.2253 44.9584 48.0319C44.9584 49.3117 45.0391 50.1071 45.2007 50.4362C45.4609 51.0213 46.116 51.323 47.175 51.323C53.4031 51.323 57.962 50.1437 60.8517 47.7942C63.3196 45.7007 65.6708 41.861 67.8875 36.2662C69.4939 31.8872 71.1002 27.499 72.7066 23.12C72.931 22.5624 73.4335 22.1876 74.1963 21.9956C74.7079 21.8676 76.413 21.8036 79.3027 21.8036C82.8385 21.8036 84.5974 22.3155 84.5974 23.3212C84.5974 23.9062 83.8616 26.5574 82.3808 31.2747C80.6488 36.769 78.3963 41.6142 75.6412 45.8012C73.8104 48.6444 71.3874 51.5058 68.3721 54.3855C67.6003 55.0712 67.2144 55.6928 67.2144 56.2505C67.2144 56.8356 68.5157 59.7701 71.1182 65.0359C73.3617 69.5795 75.4079 73.2271 77.2386 75.9788C79.2578 78.502 82.0847 82.3782 85.7192 87.6074C85.8808 87.8999 85.9615 88.2108 85.9615 88.5399L85.9436 88.5307Z" fill="url(#paint0_linear_149_112)" />
                    <defs>
                        <filter id="filter0_d_149_112" x="0" y="0" width="118.562" height="120.629" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_149_112" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_149_112" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_149_112" x1="19.3819" y1="10.8972" x2="96.4709" y2="97.4737" gradientUnits="userSpaceOnUse">
                            <stop offset="0.18" stopColor={isResponsavel ? "#3FFF51" : "#FFAB15"} />
                            <stop offset="0.5" stopColor={isResponsavel ? "#36DB74" : "#C16574"} />
                            <stop offset="0.84" stopColor={isResponsavel ? "#1E79D7" : "#811CD7"} />
                            <stop offset="1" stopColor={isResponsavel ? "#1552FF" : "#6800FF"} />
                        </linearGradient>
                        <clipPath id="clip0_149_112">
                            <rect width="280.254" height="74.9803" fill="white" transform="translate(59.3134 25.8129)" />
                        </clipPath>
                    </defs>
                </svg>
            )}


        </>
    )
}