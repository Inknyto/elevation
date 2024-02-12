import * as React from "react"
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect width={204} height={60} x={4} fill="url(#b)" rx={20} />
    </g>
    <mask
      id="d"
      width={173}
      height={42}
      x={18}
      y={8}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <path
        fill="url(#c)"
        d="M18.78 49V8.823h16.071v7.761h-7.898v7.83h7.579v7.556h-7.58v9.2h8.424V49H18.781Zm19.267 0V8.823h8.036v33.329h8.263V49H38.047Zm34.265 0H55.716v-7.83h8.423v-9.2h-7.578v-7.556h7.578v-7.83h-7.898V8.823h16.07V49Zm7.282 0L74.64 8.8h7.648l2.945 27.348L87.858 8.8h7.647L90.551 49H79.594Zm16.208 0 3.88-40.177h13.629L117.123 49h-7.602l-.57-6.483h-4.84L103.609 49h-7.807Zm8.88-12.898h3.652l-1.757-20.43h-.366l-1.529 20.43ZM122.442 49V16.539h-4.771V8.823h17.577v7.716h-4.771V49h-8.035Zm14.678 0V8.823h7.762V49h-7.762Zm20.545.365c-3.211 0-5.669-.966-7.373-2.899-1.689-1.948-2.534-4.756-2.534-8.423V18.959c0-3.44.837-6.05 2.511-7.83 1.689-1.781 4.155-2.671 7.396-2.671 3.242 0 5.7.89 7.374 2.67 1.689 1.781 2.534 4.391 2.534 7.83v19.085c0 3.667-.853 6.475-2.557 8.423-1.689 1.933-4.14 2.9-7.351 2.9Zm.069-7.396c1.217 0 1.826-1.18 1.826-3.538V18.82c0-1.978-.594-2.967-1.781-2.967-1.339 0-2.008 1.012-2.008 3.036v19.586c0 1.248.152 2.146.456 2.694.304.533.807.799 1.507.799ZM170.814 49V8.823h8.264l3.698 19.244V8.823h7.761V49h-7.852l-4.018-20.088V49h-7.853Z"
      />
    </mask>
    <g mask="url(#d)">
      <path fill="url(#e)" d="M-1-6h226v68H-1V-6Z" />
    </g>
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(150.54817 .5 -.14706 44.27886 106 32)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#632C7F" />
        <stop offset={0} stopColor="#fff" />
      </radialGradient>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(149.682 0 0 39.5227 .323 30.185)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B43EB7" stopOpacity={0} />
        <stop offset={0} stopColor="#8F67A3" />
        <stop offset={1} stopColor="#fff" />
      </radialGradient>
      <pattern
        id="e"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#f" transform="matrix(.00077 0 0 .00256 0 -.722)" />
      </pattern>
      <filter
        id="a"
        width={212}
        height={68}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_235_830" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_235_830"
          result="shape"
        />
      </filter>
      <image
        xlinkHref="data:image/jpeg;base64,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
        id="f"
        width={1300}
        height={956}
      />
    </defs>
  </svg>
)
export default Logo
