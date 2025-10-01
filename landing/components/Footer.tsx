export default function Footer() {
  return (
    <footer role="contentinfo" className="relative z-10">
      <section aria-label="Site footer" style={{ opacity: 1 }}>
        <div className="w-full px-16 lg:px-32">
          <ul 
            className="grid grid-cols-2 gap-32 md:flex md:justify-between md:gap-64 lg:justify-between pb-16 border-b border-black/10 w-full font-mono uppercase text-xl md:text-2xl lg:text-3xl leading-10 tracking-wider" 
            style={{ opacity: 1 }}
          >
            <li>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">Product</h3>
              <ul className="mt-8 flex flex-col gap-8">
                <li>
                  <a 
                    className="transition-colors duration-200 text-black/50 hover:text-black text-lg md:text-xl lg:text-2xl" 
                    title="Features" 
                    href="/features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    className="transition-colors duration-200 text-black/50 hover:text-black text-lg md:text-xl lg:text-2xl" 
                    title="Privacy" 
                    href="/privacy"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a 
                    className="transition-colors duration-200 text-black/50 hover:text-black text-lg md:text-xl lg:text-2xl" 
                    title="Terms of Use" 
                    href="/terms"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">Resources</h3>
              <ul className="mt-8 flex flex-col gap-8">
                <li>
                  <a 
                    className="transition-colors duration-200 text-black/50 hover:text-black text-lg md:text-xl lg:text-2xl" 
                    title="Help" 
                    href="/help"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">Company</h3>
              <ul className="mt-8 flex flex-col gap-8">
                <li>
                  <a 
                    className="transition-colors duration-200 text-black/50 hover:text-black text-lg md:text-xl lg:text-2xl" 
                    title="About Us" 
                    href="/about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    className="transition-colors duration-200 text-black/50 hover:text-black text-lg md:text-xl lg:text-2xl" 
                    title="Careers" 
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a 
                    className="transition-colors duration-200 text-black/50 hover:text-black text-lg md:text-xl lg:text-2xl" 
                    title="Newsletter" 
                    href="/newsletter"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </li>

           

            <li className="hidden lg:block ml-auto">
              <a title="AugmentOS" href="https://www.augment.cfd/">
                <svg className="w-48 h-60 object-contain" width="86" height="103" viewBox="0 0 86 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.01829 60.6241C3.58341 60.6241 3.18075 60.5273 2.8103 60.3175C2.43985 60.1239 2.13383 59.8334 1.89224 59.4785C1.65064 59.1235 1.44126 58.6878 1.2963 58.1714C1.15134 57.6551 1.08691 57.0903 1.08691 56.4771C1.08691 55.8639 1.15134 55.2992 1.2963 54.7828C1.44126 54.2664 1.63453 53.8308 1.89224 53.4758C2.14994 53.1208 2.45596 52.8303 2.8103 52.6367C3.18075 52.4269 3.56731 52.3301 4.01829 52.3301C4.46927 52.3301 4.85582 52.4269 5.22627 52.6367C5.59672 52.8464 5.90274 53.1208 6.14433 53.4758C6.40204 53.8308 6.59531 54.2826 6.74027 54.7828C6.88523 55.2992 6.94966 55.8639 6.94966 56.4771C6.94966 57.0903 6.88523 57.6551 6.74027 58.1714C6.59531 58.6878 6.40204 59.1235 6.14433 59.4785C5.88663 59.8334 5.58061 60.1239 5.22627 60.3175C4.85582 60.5112 4.45316 60.6241 4.01829 60.6241ZM4.01829 59.8819C4.59812 59.8819 5.03299 59.6237 5.3068 59.1235C5.58061 58.6232 5.72557 57.7357 5.72557 56.4771C5.72557 55.2185 5.58061 54.331 5.3068 53.8308C5.03299 53.3305 4.59812 53.0724 4.01829 53.0724C3.43845 53.0724 3.00358 53.3305 2.72977 53.8308C2.45596 54.331 2.311 55.2185 2.311 56.4771C2.311 57.7357 2.45596 58.6232 2.72977 59.1235C3.01969 59.6237 3.43845 59.8819 4.01829 59.8819Z" fill="currentColor"></path>
                  <path d="M11.2017 59.8158V60.4452H7.8999V59.8158H8.20592C8.44752 59.8158 8.62469 59.7674 8.72133 59.6706C8.81797 59.5738 8.86629 59.3963 8.86629 59.1543V53.797C8.86629 53.555 8.81797 53.3775 8.72133 53.2806C8.62469 53.1838 8.44752 53.1354 8.20592 53.1354H7.8999V52.5061H13.4888V55.3138H13.0217C12.9573 54.8781 12.8768 54.507 12.7802 54.2166C12.6835 53.9261 12.5547 53.7163 12.3936 53.555C12.2325 53.3936 12.0231 53.2806 11.7654 53.2322C11.5239 53.1677 11.2178 53.1354 10.8474 53.1354H10.332C10.187 53.1354 10.0743 53.1677 10.0098 53.2484C9.92931 53.3291 9.8971 53.4259 9.8971 53.5711V56.2659H10.3159C10.7507 56.2659 11.0407 56.1529 11.1534 55.9431C11.2823 55.7334 11.3306 55.2977 11.3306 54.6684H11.846V58.4281H11.3306C11.3306 57.7665 11.2661 57.347 11.1534 57.1372C11.0407 56.9274 10.7507 56.8306 10.3159 56.8306H9.8971V59.1543C9.8971 59.3963 9.94542 59.5738 10.0421 59.6706C10.1387 59.7674 10.3159 59.8158 10.5575 59.8158H11.2017Z" fill="currentColor"></path>
                  <circle cx="42.6258" cy="57.5742" r="24.9197" stroke="currentColor" strokeWidth="0.763822"></circle>
                  <circle cx="42.6255" cy="57.5742" r="16.458" stroke="currentColor" strokeWidth="0.763822"></circle>
                  <circle cx="42.6257" cy="57.5737" r="6.21277" stroke="currentColor" strokeWidth="0.763822"></circle>
                </svg>
              </a>
            </li>
          </ul>

          <nav 
            className="w-full h-max flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-end font-mono uppercase text-2xl md:text-3xl lg:text-4xl leading-12 tracking-wider py-24 gap-y-24 px-16 lg:px-32 relative z-10" 
            aria-label="Footer navigation"
          >
            <div 
              className="flex gap-8" 
              aria-label="Legal information" 
              style={{ opacity: 1 }}
            >
              <span className="text-2xl">Copyright</span>
              <span className="text-2xl">© 2025</span>
            </div>

            <div style={{ opacity: 1 }}>
              <div className="text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl leading-12">
                  Designed and Built by<br />
                  <a href="https://www.augment.cfd/" className="hover:text-black transition-colors">
                    Augment Team
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-8" style={{ opacity: 1 }}>
              <span className="text-2xl">Current Status:</span>
              <span className="text-2xl">Beta</span>
            </div>
          </nav>
        </div>

        {/* Spacer */}
        <div className="lg:mt-40 h-96 md:h-[50vh] lg:h-[65vh]"></div>

        {/* Animated Background SVG */}
        <div 
          className="origin-bottom flex items-end -mb-[2vh] z-20 pointer-events-none h-44 md:h-72 lg:h-[65vh] fixed bottom-0 left-0 right-0" 
          aria-hidden="true" 
          style={{ transform: "scaleY(0)" }}
        >
          <svg className="w-full h-full" viewBox="0 0 1271 599" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_3283_101175)">
              <rect x="1287" y="614" width="174" height="323" transform="rotate(180 1287 614)" fill="url(#paint0_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter1_f_3283_101175)">
              <rect x="1146" y="614" width="174" height="404" transform="rotate(180 1146 614)" fill="url(#paint1_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter2_f_3283_101175)">
              <rect x="1005" y="614" width="174" height="478" transform="rotate(180 1005 614)" fill="url(#paint2_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter3_f_3283_101175)">
              <rect width="174" height="323" transform="matrix(1 0 -5.78527e-07 -1 -16 614)" fill="url(#paint3_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter4_f_3283_101175)">
              <rect width="174" height="404" transform="matrix(1 0 -6.17385e-07 -1 125 614)" fill="url(#paint4_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter5_f_3283_101175)">
              <rect width="174" height="478" transform="matrix(1 0 -6.17385e-07 -1 266 614)" fill="url(#paint5_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter6_f_3283_101175)">
              <rect width="175" height="530" transform="matrix(1 0 -6.17385e-07 -1 407 614)" fill="url(#paint6_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter7_f_3283_101175)">
              <rect x="864" y="614" width="175" height="530" transform="rotate(180 864 614)" fill="url(#paint7_linear_3283_101175)"></rect>
            </g>
            <g filter="url(#filter8_f_3283_101175)">
              <rect width="173" height="584" transform="matrix(1 0 -6.17385e-07 -1 549 614)" fill="url(#paint8_linear_3283_101175)"></rect>
            </g>
            <defs>
              <filter id="filter0_f_3283_101175" x="1083" y="261" width="234" height="383" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter1_f_3283_101175" x="942" y="180" width="234" height="464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter2_f_3283_101175" x="801" y="106" width="234" height="538" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter3_f_3283_101175" x="-46" y="261" width="234" height="383" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter4_f_3283_101175" x="95" y="180" width="234" height="464" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter5_f_3283_101175" x="236" y="106" width="234" height="538" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter6_f_3283_101175" x="377" y="54" width="235" height="590" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter7_f_3283_101175" x="659" y="54" width="235" height="590" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <filter id="filter8_f_3283_101175" x="519" y="0" width="233" height="644" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_3283_101175"></feGaussianBlur>
              </filter>
              <linearGradient id="paint0_linear_3283_101175" x1="1374" y1="614" x2="1374" y2="937" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint1_linear_3283_101175" x1="1233" y1="614" x2="1233" y2="1018" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint2_linear_3283_101175" x1="1092" y1="614" x2="1092" y2="1092" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint3_linear_3283_101175" x1="87.0001" y1="0" x2="87.0001" y2="323" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint4_linear_3283_101175" x1="87.0001" y1="0" x2="87.0001" y2="404" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint5_linear_3283_101175" x1="87.0001" y1="0" x2="87.0001" y2="478" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint6_linear_3283_101175" x1="87.5002" y1="0" x2="87.5002" y2="530" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint7_linear_3283_101175" x1="951.5" y1="614" x2="951.5" y2="1144" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient id="paint8_linear_3283_101175" x1="86.5002" y1="0" x2="86.5002" y2="584" gradientUnits="userSpaceOnUse">
                <stop stopColor="#340B05"></stop>
                <stop offset="0.182709" stopColor="#0358F7"></stop>
                <stop offset="0.283673" stopColor="#5092C7"></stop>
                <stop offset="0.413484" stopColor="#E1ECFE"></stop>
                <stop offset="0.586565" stopColor="#FFD400"></stop>
                <stop offset="0.682722" stopColor="#FA3D1D"></stop>
                <stop offset="0.802892" stopColor="#FD02F5"></stop>
                <stop offset="1" stopColor="#FFC0FD" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </footer>
  );
}
