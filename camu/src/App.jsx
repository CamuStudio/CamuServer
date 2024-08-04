import './App.css'
import NavBar from "./components/Navbar.jsx";
import HeroPage from "./pages/HeroPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import StrengthPage from "./pages/StrengthPage.jsx";
import TutorPage from "./pages/TutorPage.jsx";

function App() {

  return (
      <div className="wrapper">
          <NavBar/>
          <div className='app'>
              <HeroPage/>
          </div>
          <div className='background'>
              <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="709" viewBox="0 0 1440 709" fill="none">
                  <g filter="url(#filter0_dd_840_10750)">
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M1440 495.5C1440 559.5 1374 679.41 1087.5 679.41C927.9 683.203 639.6 676.032 480 660.861C320.4 645.69 79.2 622.934 5.68791e-06 615.348L5.94834e-05 -3.81849e-06L80.4 3.2103e-06C159.6 1.01342e-05 320.4 2.41918e-05 480 3.81444e-05C639.6 5.20971e-05 800.4 6.61547e-05 960 8.01074e-05C1119.6 9.40601e-05 1280.4 0.000108118 1359.6 0.000115042L1440 0.00012207L1440 495.5Z"
                            fill="url(#paint0_linear_840_10750)"/>
                  </g>
                  <defs>
                      <filter id="filter0_dd_840_10750" x="-17.1" y="-6.1" width="1474.2" height="714.61"
                              filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                         result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1.5"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_840_10750"/>
                          <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                         result="hardAlpha"/>
                          <feOffset dy="11"/>
                          <feGaussianBlur stdDeviation="8.55"/>
                          <feColorMatrix type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0.319743 0 0 0 0 0.5 0 0 0 0.08 0"/>
                          <feBlend mode="normal" in2="effect1_dropShadow_840_10750"
                                   result="effect2_dropShadow_840_10750"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_840_10750"
                                   result="shape"/>
                      </filter>
                      <linearGradient id="paint0_linear_840_10750" x1="-1116.5" y1="856.504" x2="-331.6"
                                      y2="-826.601"
                                      gradientUnits="userSpaceOnUse">
                          <stop offset="0.270115" stopColor="#FAF5E9"/>
                          <stop offset="0.75517" stopColor="#DFECFA"/>
                      </linearGradient>
                  </defs>
              </svg>
          </div>
          <ServicePage/>
          <StrengthPage />
          <TutorPage />
      </div>
  )
}

export default App
