type IconProps = React.HTMLAttributes<SVGElement>;
import { FaPlus } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export const Icons = {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaPlus,
  box: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="28"
      viewBox="0 0 26 28"
      fill="none"
      {...props}
    >
      <path
        d="M24.96 6.26633L13.96 0.247581C13.6661 0.0851839 13.3358 0 13 0C12.6642 0 12.3339 0.0851839 12.04 0.247581L1.04 6.26883C0.725861 6.44071 0.463629 6.69378 0.28069 7.00161C0.0977502 7.30944 0.000812822 7.66074 0 8.01883V19.9738C0.000812822 20.3319 0.0977502 20.6832 0.28069 20.9911C0.463629 21.2989 0.725861 21.552 1.04 21.7238L12.04 27.7451C12.3339 27.9075 12.6642 27.9927 13 27.9927C13.3358 27.9927 13.6661 27.9075 13.96 27.7451L24.96 21.7238C25.2741 21.552 25.5364 21.2989 25.7193 20.9911C25.9023 20.6832 25.9992 20.3319 26 19.9738V8.02008C25.9999 7.66136 25.9032 7.30927 25.7203 7.00073C25.5373 6.69218 25.2747 6.43852 24.96 6.26633ZM13 1.99758L23.0425 7.49758L19.3213 9.53508L9.2775 4.03508L13 1.99758ZM13 12.9976L2.9575 7.49758L7.195 5.17758L17.2375 10.6776L13 12.9976ZM2 9.24758L12 14.7201V25.4438L2 19.9751V9.24758ZM24 19.9701L14 25.4438V14.7251L18 12.5363V16.9976C18 17.2628 18.1054 17.5172 18.2929 17.7047C18.4804 17.8922 18.7348 17.9976 19 17.9976C19.2652 17.9976 19.5196 17.8922 19.7071 17.7047C19.8946 17.5172 20 17.2628 20 16.9976V11.4413L24 9.24758V19.9701Z"
        fill="#064789"
      />
    </svg>
  ),
  coins: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="27"
      viewBox="0 0 30 27"
      fill="none"
      {...props}
    >
      <path
        d="M22 7.40161V6.56992C22 2.82507 17.2712 0 11 0C4.72875 0 0 2.82507 0 6.56992V12.5426C0 15.6618 3.28125 18.1405 8 18.8826V19.7098C8 23.4546 12.7288 26.2797 19 26.2797C25.2712 26.2797 30 23.4546 30 19.7098V13.7371C30 10.6463 26.8225 8.16462 22 7.40161ZM28 13.7371C28 15.7111 24.1512 17.918 19 17.918C18.5338 17.918 18.0712 17.8986 17.615 17.8627C20.3112 16.6891 22 14.7823 22 12.5426V9.81606C25.7337 10.4805 28 12.2843 28 13.7371ZM8 16.4621V12.9099C8.99472 13.0647 9.99687 13.1415 11 13.1398C12.0031 13.1415 13.0053 13.0647 14 12.9099V16.4621C13.0068 16.6374 12.004 16.7248 11 16.7234C9.99598 16.7248 8.99324 16.6374 8 16.4621ZM20 10.4417V12.5426C20 13.7953 18.4487 15.1407 16 15.9574V12.4679C17.6138 12.0006 18.98 11.3047 20 10.4417ZM11 2.38906C16.1512 2.38906 20 4.59596 20 6.56992C20 8.54389 16.1512 10.7508 11 10.7508C5.84875 10.7508 2 8.54389 2 6.56992C2 4.59596 5.84875 2.38906 11 2.38906ZM2 12.5426V10.4417C3.02 11.3047 4.38625 12.0006 6 12.4679V15.9574C3.55125 15.1407 2 13.7953 2 12.5426ZM10 19.7098V19.0871C10.3287 19.102 10.6613 19.1125 11 19.1125C11.485 19.1125 11.9587 19.0931 12.4237 19.0602C12.9403 19.2811 13.4665 19.4686 14 19.6217V23.1246C11.5513 22.3079 10 20.9625 10 19.7098ZM16 23.6293V20.0681C16.9944 20.2278 17.9967 20.3076 19 20.307C20.0031 20.3087 21.0053 20.2319 22 20.0771V23.6293C20.0106 23.9777 17.9894 23.9777 16 23.6293ZM24 23.1246V19.6351C25.6138 19.1677 26.98 18.4719 28 17.6089V19.7098C28 20.9625 26.4487 22.3079 24 23.1246Z"
        fill="#064789"
      />
    </svg>
  ),
  arrowStock: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M30 7.99997V15.9997C30 16.2649 29.8946 16.5193 29.7071 16.7068C29.5196 16.8943 29.2652 16.9997 29 16.9997C28.7348 16.9997 28.4805 16.8943 28.2929 16.7068C28.1054 16.5193 28 16.2649 28 15.9997V10.4136L17.7077 20.7071C17.6149 20.8001 17.5046 20.8738 17.3832 20.9241C17.2618 20.9745 17.1317 21.0004 17.0003 21.0004C16.8688 21.0004 16.7387 20.9745 16.6173 20.9241C16.4959 20.8738 16.3856 20.8001 16.2928 20.7071L12.0004 16.4135L3.70802 24.707C3.52039 24.8946 3.26589 25 3.00054 25C2.73518 25 2.48069 24.8946 2.29305 24.707C2.10541 24.5193 2 24.2648 2 23.9995C2 23.7341 2.10541 23.4796 2.29305 23.292L11.2929 14.2923C11.3857 14.1993 11.496 14.1255 11.6174 14.0752C11.7388 14.0249 11.8689 13.999 12.0004 13.999C12.1318 13.999 12.2619 14.0249 12.3833 14.0752C12.5047 14.1255 12.615 14.1993 12.7078 14.2923L17.0003 18.5859L26.5863 8.99994H21.0002C20.735 8.99994 20.4806 8.89458 20.2931 8.70705C20.1056 8.51952 20.0002 8.26518 20.0002 7.99997C20.0002 7.73476 20.1056 7.48041 20.2931 7.29288C20.4806 7.10535 20.735 7 21.0002 7H29C29.2652 7 29.5196 7.10535 29.7071 7.29288C29.8946 7.48041 30 7.73476 30 7.99997Z"
        fill="#064789"
      />
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),

  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M19.575 10.2247C19.575 9.56634 19.5167 8.94134 19.4167 8.33301H10V12.0913H15.3917C15.15 13.3247 14.4417 14.3663 13.3917 15.0747V17.5747H16.6083C18.4917 15.833 19.575 13.2663 19.575 10.2247Z"
        fill="#4285F4"
      />
      <path
        d="M10.0002 19.9999C12.7002 19.9999 14.9585 19.0999 16.6085 17.5749L13.3919 15.0749C12.4919 15.6749 11.3502 16.0415 10.0002 16.0415C7.39186 16.0415 5.18353 14.2832 4.39186 11.9082H1.0752V14.4832C2.71686 17.7499 6.09186 19.9999 10.0002 19.9999Z"
        fill="#34A853"
      />
      <path
        d="M4.39167 11.9083C4.18333 11.3083 4.075 10.6666 4.075 9.99993C4.075 9.33327 4.19167 8.6916 4.39167 8.0916V5.5166H1.075C0.391666 6.8666 0 8.38327 0 9.99993C0 11.6166 0.391666 13.1333 1.075 14.4833L4.39167 11.9083Z"
        fill="#FBBC05"
      />
      <path
        d="M10.0002 3.95833C11.4752 3.95833 12.7919 4.46667 13.8335 5.45834L16.6835 2.60833C14.9585 0.991667 12.7002 0 10.0002 0C6.09186 0 2.71686 2.25 1.0752 5.51667L4.39186 8.09167C5.18353 5.71667 7.39186 3.95833 10.0002 3.95833Z"
        fill="#EA4335"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  Money: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_346_1094)">
        <path
          d="M28.125 8.4375H16.875L12.709 2.18848C12.085 1.24805 12.7529 0 13.8779 0H31.1221C32.2471 0 32.915 1.24805 32.291 2.18848L28.125 8.4375ZM16.875 11.25H28.125C28.459 11.4697 28.8369 11.7158 29.2676 11.9883C34.251 15.1787 45 22.0518 45 36.5625C45 41.2207 41.2207 45 36.5625 45H8.4375C3.7793 45 0 41.2207 0 36.5625C0 22.0518 10.749 15.1787 15.7324 11.9883C16.1543 11.7158 16.541 11.4697 16.875 11.25ZM24.2578 18.9844C24.2578 18.0176 23.4668 17.2266 22.5 17.2266C21.5332 17.2266 20.7422 18.0176 20.7422 18.9844V20.2148C20.0742 20.3643 19.4062 20.6016 18.791 20.9619C17.5693 21.6914 16.5146 22.9658 16.5234 24.8203C16.5322 26.6045 17.5781 27.7295 18.6943 28.3975C19.6611 28.9775 20.8652 29.3467 21.8232 29.6279L21.9727 29.6719C23.0801 30.0059 23.8887 30.2695 24.4336 30.6123C24.8818 30.8936 24.9434 31.0869 24.9521 31.333C24.9609 31.7725 24.7939 32.0361 24.4336 32.2559C23.9941 32.5283 23.2998 32.6953 22.5527 32.6689C21.5771 32.6338 20.6631 32.3262 19.4678 31.9219C19.2656 31.8516 19.0547 31.7812 18.835 31.7109C17.9121 31.4033 16.9189 31.9043 16.6113 32.8184C16.3037 33.7324 16.8047 34.7344 17.7188 35.042C17.8857 35.0947 18.0703 35.1562 18.2549 35.2266C18.9844 35.4814 19.8281 35.7715 20.7334 35.9648V37.2656C20.7334 38.2324 21.5244 39.0234 22.4912 39.0234C23.458 39.0234 24.249 38.2324 24.249 37.2656V36.0527C24.9521 35.9033 25.6553 35.6572 26.2881 35.2617C27.5449 34.4795 28.4941 33.1436 28.4678 31.3066C28.4414 29.5225 27.4395 28.3711 26.3057 27.6504C25.2949 27.0176 24.0293 26.6309 23.0449 26.332L22.9834 26.3145C21.8584 25.9717 21.0586 25.7256 20.4961 25.3916C20.0391 25.1191 20.0303 24.9609 20.0303 24.8027C20.0303 24.4775 20.1533 24.2314 20.5752 23.9854C21.0498 23.7041 21.7705 23.5371 22.4648 23.5459C23.3086 23.5547 24.2402 23.7393 25.207 24.0029C26.1475 24.249 27.1055 23.6953 27.3603 22.7549C27.6152 21.8145 27.0527 20.8564 26.1123 20.6016C25.541 20.4521 24.9082 20.3027 24.2578 20.1885V18.9844Z"
          fill="#064789"
        />
      </g>
      <defs>
        <clipPath id="clip0_346_1094">
          <rect width="45" height="45" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  puzzel: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="43"
      viewBox="0 0 56 43"
      fill="none"
      {...props}
    >
      <path
        d="M39.0631 23.1763H25.2761V12.4796C25.2761 9.53082 22.1832 7.13118 18.3826 7.13118H9.19131C4.1223 7.13118 0 10.3295 0 14.2624V35.6559C0 39.5887 4.1223 42.7871 9.19131 42.7871H36.7652C41.8343 42.7871 45.9566 39.5887 45.9566 35.6559V28.5247C45.9566 25.576 42.8637 23.1763 39.0631 23.1763ZM4.59566 14.2624C4.59566 12.2959 6.65681 10.6968 9.19131 10.6968H18.3826C19.6487 10.6968 20.6805 11.4955 20.6805 12.4796V23.1763H15.4299C15.8389 22.1298 16.0848 21.0869 16.0848 20.5021C16.0848 19.026 14.5407 17.8279 12.6381 17.8279C10.7355 17.8279 9.19131 19.026 9.19131 20.5021C9.19131 21.0869 9.43488 22.1298 9.84619 23.1763H4.59566V14.2624ZM20.6805 39.2215H9.19131C6.65681 39.2215 4.59566 37.6223 4.59566 35.6559V26.7419H20.6805V30.8156C19.3316 30.4983 17.9874 30.3075 17.2337 30.3075C15.3311 30.3075 13.787 31.5056 13.787 32.9817C13.787 34.4579 15.3311 35.6559 17.2337 35.6559C17.9874 35.6559 19.3316 35.4669 20.6805 35.1478V39.2215ZM41.3609 35.6559C41.3609 37.6223 39.2998 39.2215 36.7652 39.2215H25.2761V26.7419H30.5266C30.1176 27.7884 29.8718 28.8314 29.8718 29.4161C29.8718 30.8923 31.4159 32.0903 33.3185 32.0903C35.2211 32.0903 36.7652 30.8923 36.7652 29.4161C36.7652 28.8314 36.5217 27.7884 36.1104 26.7419H39.0631C40.3292 26.7419 41.3609 27.5406 41.3609 28.5247V35.6559ZM55.1479 7.13118V13.371C55.1479 14.8471 53.6037 16.0452 51.7011 16.0452H47.5995C48.0085 17.0917 48.2544 18.1346 48.2544 18.7193C48.2544 20.1955 46.7102 21.3935 44.8076 21.3935C42.905 21.3935 41.3609 20.1955 41.3609 18.7193C41.3609 18.1346 41.6045 17.0917 42.0158 16.0452H37.9142C36.0116 16.0452 34.4674 14.8471 34.4674 13.371V10.1887C35.8162 10.506 37.1605 10.6968 37.9142 10.6968C39.8168 10.6968 41.3609 9.49873 41.3609 8.02258C41.3609 6.54642 39.8168 5.34838 37.9142 5.34838C37.1605 5.34838 35.8162 5.53736 34.4674 5.85648V2.67419C34.4674 1.19804 36.0116 0 37.9142 0H45.9566C51.0325 0 55.1479 3.19299 55.1479 7.13118Z"
        fill="#064789"
      />
    </svg>
  ),
  Chart: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M5.75 5.75C5.75 4.15977 4.46523 2.875 2.875 2.875C1.28477 2.875 0 4.15977 0 5.75V35.9375C0 39.9086 3.21641 43.125 7.1875 43.125H43.125C44.7152 43.125 46 41.8402 46 40.25C46 38.6598 44.7152 37.375 43.125 37.375H7.1875C6.39687 37.375 5.75 36.7281 5.75 35.9375V5.75ZM42.2805 13.5305C43.4035 12.4074 43.4035 10.5836 42.2805 9.46055C41.1574 8.3375 39.3336 8.3375 38.2105 9.46055L28.75 18.9301L23.593 13.773C22.4699 12.65 20.6461 12.65 19.523 13.773L9.46055 23.8355C8.3375 24.9586 8.3375 26.7824 9.46055 27.9055C10.5836 29.0285 12.4074 29.0285 13.5305 27.9055L21.5625 19.8824L26.7195 25.0395C27.8426 26.1625 29.6664 26.1625 30.7895 25.0395L42.2895 13.5395L42.2805 13.5305Z"
        fill="#064789"
      />
    </svg>
  ),
  SandWatch: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="56"
      viewBox="0 0 42 56"
      fill="none"
    >
      <path
        d="M4 7.10938C4 5.94043 4.9474 5 6.125 5H35.875C37.0526 5 38 5.94043 38 7.10938C38 8.27832 37.0526 9.21875 35.875 9.21875H35.1667V10.8887C35.1667 14.4307 33.75 17.832 31.2266 20.3369L24.0016 27.5L31.2177 34.6631C33.75 37.168 35.1667 40.5693 35.1667 44.1113V45.7812H35.875C37.0526 45.7812 38 46.7217 38 47.8906C38 49.0596 37.0526 50 35.875 50H6.125C4.9474 50 4 49.0596 4 47.8906C4 46.7217 4.9474 45.7812 6.125 45.7812H6.83333V44.1113C6.83333 40.5693 8.25 37.168 10.7734 34.6631L17.9984 27.5L10.7734 20.3369C8.25 17.832 6.83333 14.4307 6.83333 10.8887V9.21875H6.125C4.9474 9.21875 4 8.27832 4 7.10938ZM13.7839 37.6514C13.4385 37.9941 13.1198 38.3633 12.8365 38.75H29.1635C28.8802 38.3633 28.5615 37.9941 28.2161 37.6514L21 30.4795L13.7839 37.6426V37.6514ZM29.1635 16.25C30.2969 14.7031 30.9167 12.8223 30.9167 10.8887V9.21875H11.0833V10.8887C11.0833 12.8311 11.7031 14.7031 12.8365 16.25H29.1635Z"
        fill="#064789"
      />
    </svg>
  ),
  victor: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="1722"
      height="200"
      viewBox="0 0 1722 200"
      fill="none"
    >
      <path
        d="M1.00031 0.859513C1.00031 0.859513 286.461 187.38 504.994 197.94C769.89 210.741 858.183 72.875 1123.51 76.8809C1376.49 80.7002 1721 197.941 1721 197.941"
        stroke="#45A9E5"
      />
    </svg>
  ),
};
