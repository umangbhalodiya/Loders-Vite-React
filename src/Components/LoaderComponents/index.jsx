import { Loader1 } from "./Loaders/Loader1";
import { Loader2 } from "./Loaders/Loader2";
import { Loader3 } from "./Loaders/Loader3";
import { Loader4 } from "./Loaders/Loader4";
import { Loader5 } from "./Loaders/Loader5";
import { Loader6 } from "./Loaders/Loader6";

const loaders = [
  {
    id: 1,
    html: `<span class="loader1"></span>`,
    component: <Loader1 />,
    css: `
    .loader {
      width: 48px;
      height: 48px;
      border: 5px solid #FFF;
      border-bottom-color: #FF3D00;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
      }
    
      @keyframes rotation {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
    `,
  },
  {
    id: 2,
    html: `<span class="loader2"></span>`,
    component: <Loader2 />,
    css: "",
  },
  {
    id: 3,
    html: `<span class="loader3"></span>`,
    component: <Loader3 />,
    css: "",
  },
  {
    id: 4,
    html: `<span class="loader4"></span>`,
    component: <Loader4 />,
    css: "",
  },
  {
    id: 5,
    html: `<span class="loader5"></span>`,
    component: <Loader5 />,
    css: "",
  },
  {
    id: 6,
    html: `<span class="loader6"></span>`,
    component: <Loader6 />,
    css: "",
  },
];

export default loaders;
