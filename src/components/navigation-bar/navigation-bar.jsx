import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export const NavigationBar = ({user, onLoggedOut}) => {
    return (
       <Navbar className="my-navbar shadow-lg ">

        <Navbar.Brand>
        <svg
  width="300"
  height="95"
  viewBox="0 0 354 95"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_304_4)">
    <path
      d="M5.52 63V7H14.08L38.56 47.88H34.08L58.16 7H66.72L66.8 63H56.96L56.88 22.44H58.96L38.48 56.6H33.84L13.04 22.44H15.44V63H5.52ZM100.486 79.08C98.4063 79.08 96.3263 78.7333 94.2463 78.04C92.1663 77.3467 90.4329 76.3867 89.0462 75.16L93.0462 67.8C94.0596 68.7067 95.2063 69.4267 96.4863 69.96C97.7663 70.4933 99.0729 70.76 100.406 70.76C102.22 70.76 103.686 70.3067 104.806 69.4C105.926 68.4933 106.966 66.9733 107.926 64.84L110.406 59.24L111.206 58.04L127.366 20.28H136.966L116.966 66.44C115.633 69.64 114.14 72.1733 112.486 74.04C110.886 75.9067 109.073 77.2133 107.046 77.96C105.073 78.7067 102.886 79.08 100.486 79.08ZM109.286 64.52L90.0062 20.28H100.406L116.086 57.16L109.286 64.52ZM169.696 32.76H197.616V41.56H169.696V32.76ZM170.576 63H160.176V7H201.056V15.72H170.576V63ZM226.154 63V3.64H236.154V63H226.154ZM265.279 63V20.28H275.279V63H265.279ZM270.319 13.24C268.452 13.24 266.905 12.6533 265.679 11.48C264.505 10.3067 263.919 8.89333 263.919 7.24C263.919 5.53333 264.505 4.12 265.679 3C266.905 1.82666 268.452 1.24 270.319 1.24C272.185 1.24 273.705 1.8 274.879 2.92C276.105 3.98667 276.719 5.34667 276.719 7C276.719 8.76 276.132 10.2533 274.959 11.48C273.785 12.6533 272.239 13.24 270.319 13.24ZM298.564 63L317.364 38.52L317.204 43.88L299.284 20.28H310.404L322.964 37.08H318.724L331.364 20.28H342.164L324.084 43.88L324.164 38.52L342.884 63H331.604L318.404 45.16L322.564 45.72L309.604 63H298.564Z"
      fill="#BC4B51"
    />
    <path
      d="M5.52 63H3.52V65H5.52V63ZM5.52 7V5H3.52V7H5.52ZM14.08 7L15.7959 5.97249L15.2135 5H14.08V7ZM38.56 47.88V49.88H42.0888L40.2759 46.8525L38.56 47.88ZM34.08 47.88L32.3567 46.8649L30.5807 49.88H34.08V47.88ZM58.16 7V5H57.0169L56.4367 5.98492L58.16 7ZM66.72 7L68.72 6.99714L68.7171 5H66.72V7ZM66.8 63V65H68.8029L68.8 62.9971L66.8 63ZM56.96 63L54.96 63.0039L54.9639 65H56.96V63ZM56.88 22.44V20.44H54.8761L54.88 22.4439L56.88 22.44ZM58.96 22.44L60.6753 23.4684L62.491 20.44H58.96V22.44ZM38.48 56.6V58.6H39.6128L40.1953 57.6284L38.48 56.6ZM33.84 56.6L32.1318 57.6401L32.7162 58.6H33.84V56.6ZM13.04 22.44V20.44H9.48061L11.3318 23.4801L13.04 22.44ZM15.44 22.44H17.44V20.44H15.44V22.44ZM15.44 63V65H17.44V63H15.44ZM7.52 63V7H3.52V63H7.52ZM5.52 9H14.08V5H5.52V9ZM12.3641 8.02751L36.8441 48.9075L40.2759 46.8525L15.7959 5.97249L12.3641 8.02751ZM38.56 45.88H34.08V49.88H38.56V45.88ZM35.8033 48.8951L59.8833 8.01507L56.4367 5.98492L32.3567 46.8649L35.8033 48.8951ZM58.16 9H66.72V5H58.16V9ZM64.72 7.00285L64.8 63.0029L68.8 62.9971L68.72 6.99714L64.72 7.00285ZM66.8 61H56.96V65H66.8V61ZM58.96 62.9961L58.88 22.4361L54.88 22.4439L54.96 63.0039L58.96 62.9961ZM56.88 24.44H58.96V20.44H56.88V24.44ZM57.2447 21.4116L36.7647 55.5716L40.1953 57.6284L60.6753 23.4684L57.2447 21.4116ZM38.48 54.6H33.84V58.6H38.48V54.6ZM35.5482 55.5599L14.7482 21.3998L11.3318 23.4801L32.1318 57.6401L35.5482 55.5599ZM13.04 24.44H15.44V20.44H13.04V24.44ZM13.44 22.44V63H17.44V22.44H13.44ZM15.44 61H5.52V65H15.44V61ZM94.2463 78.04L93.6138 79.9374L93.6138 79.9374L94.2463 78.04ZM89.0462 75.16L87.289 74.205L86.529 75.6034L87.7211 76.658L89.0462 75.16ZM93.0462 67.8L94.3798 66.3095L92.496 64.624L91.289 66.845L93.0462 67.8ZM96.4863 69.96L97.2555 68.1138L97.2555 68.1138L96.4863 69.96ZM104.806 69.4L106.065 70.9545L106.065 70.9545L104.806 69.4ZM107.926 64.84L109.75 65.6607L109.755 65.6499L107.926 64.84ZM110.406 59.24L108.742 58.1306L108.647 58.2733L108.578 58.4301L110.406 59.24ZM111.206 58.04L112.87 59.1494L112.972 58.9962L113.045 58.8269L111.206 58.04ZM127.366 20.28V18.28H126.047L125.528 19.4931L127.366 20.28ZM136.966 20.28L138.801 21.0751L140.012 18.28H136.966V20.28ZM116.966 66.44L115.131 65.6449L115.126 65.6578L115.12 65.6708L116.966 66.44ZM112.486 74.04L110.989 72.7139L110.978 72.7261L110.968 72.7384L112.486 74.04ZM107.046 77.96L106.355 76.0833L106.347 76.0863L106.338 76.0894L107.046 77.96ZM109.286 64.52L107.453 65.319L108.677 68.1271L110.755 65.8772L109.286 64.52ZM90.0062 20.28V18.28H86.953L88.1728 21.079L90.0062 20.28ZM100.406 20.28L102.247 19.4975L101.729 18.28H100.406V20.28ZM116.086 57.16L117.555 58.5172L118.433 57.5675L117.927 56.3775L116.086 57.16ZM100.486 77.08C98.6326 77.08 96.7659 76.7717 94.8787 76.1426L93.6138 79.9374C95.8866 80.695 98.1799 81.08 100.486 81.08V77.08ZM94.8787 76.1426C93.0078 75.519 91.5228 74.6806 90.3714 73.662L87.7211 76.658C89.343 78.0928 91.3247 79.1743 93.6138 79.9374L94.8787 76.1426ZM90.8035 76.115L94.8035 68.755L91.289 66.845L87.289 74.205L90.8035 76.115ZM91.7127 69.2905C92.8962 70.3494 94.2345 71.1884 95.717 71.8062L97.2555 68.1138C96.178 67.6649 95.223 67.0639 94.3798 66.3095L91.7127 69.2905ZM95.717 71.8062C97.2308 72.4369 98.7983 72.76 100.406 72.76V68.76C99.3475 68.76 98.3017 68.5498 97.2555 68.1138L95.717 71.8062ZM100.406 72.76C102.557 72.76 104.505 72.2173 106.065 70.9545L103.548 67.8455C102.868 68.396 101.883 68.76 100.406 68.76V72.76ZM106.065 70.9545C107.534 69.765 108.733 67.9216 109.75 65.6607L106.102 64.0193C105.2 66.0251 104.318 67.2217 103.548 67.8455L106.065 70.9545ZM109.755 65.6499L112.235 60.0499L108.578 58.4301L106.098 64.0301L109.755 65.6499ZM112.07 60.3494L112.87 59.1494L109.542 56.9306L108.742 58.1306L112.07 60.3494ZM113.045 58.8269L129.205 21.0669L125.528 19.4931L109.368 57.2531L113.045 58.8269ZM127.366 22.28H136.966V18.28H127.366V22.28ZM135.131 19.4849L115.131 65.6449L118.801 67.2351L138.801 21.0751L135.131 19.4849ZM115.12 65.6708C113.841 68.7406 112.451 71.0629 110.989 72.7139L113.983 75.3661C115.828 73.2838 117.425 70.5395 118.812 67.2092L115.12 65.6708ZM110.968 72.7384C109.559 74.3823 108.019 75.4701 106.355 76.0833L107.738 79.8367C110.127 78.9565 112.214 77.431 114.005 75.3416L110.968 72.7384ZM106.338 76.0894C104.62 76.7396 102.677 77.08 100.486 77.08V81.08C103.095 81.08 105.526 80.6737 107.754 79.8306L106.338 76.0894ZM111.12 63.721L91.8397 19.481L88.1728 21.079L107.453 65.319L111.12 63.721ZM90.0062 22.28H100.406V18.28H90.0062V22.28ZM98.5657 21.0625L114.246 57.9425L117.927 56.3775L102.247 19.4975L98.5657 21.0625ZM114.617 55.8028L107.817 63.1628L110.755 65.8772L117.555 58.5172L114.617 55.8028ZM169.696 32.76V30.76H167.696V32.76H169.696ZM197.616 32.76H199.616V30.76H197.616V32.76ZM197.616 41.56V43.56H199.616V41.56H197.616ZM169.696 41.56H167.696V43.56H169.696V41.56ZM170.576 63V65H172.576V63H170.576ZM160.176 63H158.176V65H160.176V63ZM160.176 7V5H158.176V7H160.176ZM201.056 7H203.056V5H201.056V7ZM201.056 15.72V17.72H203.056V15.72H201.056ZM170.576 15.72V13.72H168.576V15.72H170.576ZM169.696 34.76H197.616V30.76H169.696V34.76ZM195.616 32.76V41.56H199.616V32.76H195.616ZM197.616 39.56H169.696V43.56H197.616V39.56ZM171.696 41.56V32.76H167.696V41.56H171.696ZM170.576 61H160.176V65H170.576V61ZM162.176 63V7H158.176V63H162.176ZM160.176 9H201.056V5H160.176V9ZM199.056 7V15.72H203.056V7H199.056ZM201.056 13.72H170.576V17.72H201.056V13.72ZM168.576 15.72V63H172.576V15.72H168.576ZM226.154 63H224.154V65H226.154V63ZM226.154 3.64V1.64H224.154V3.64H226.154ZM236.154 3.64H238.154V1.64H236.154V3.64ZM236.154 63V65H238.154V63H236.154ZM228.154 63V3.64H224.154V63H228.154ZM226.154 5.64H236.154V1.64H226.154V5.64ZM234.154 3.64V63H238.154V3.64H234.154ZM236.154 61H226.154V65H236.154V61ZM265.279 63H263.279V65H265.279V63ZM265.279 20.28V18.28H263.279V20.28H265.279ZM275.279 20.28H277.279V18.28H275.279V20.28ZM275.279 63V65H277.279V63H275.279ZM265.679 11.48L264.265 12.8942L264.28 12.9099L264.296 12.9253L265.679 11.48ZM265.679 3L267.06 4.44671L267.061 4.44528L265.679 3ZM274.879 2.92L273.498 4.36671L273.531 4.39875L273.566 4.42921L274.879 2.92ZM274.959 11.48L276.373 12.8942L276.389 12.8785L276.404 12.8624L274.959 11.48ZM267.279 63V20.28H263.279V63H267.279ZM265.279 22.28H275.279V18.28H265.279V22.28ZM273.279 20.28V63H277.279V20.28H273.279ZM275.279 61H265.279V65H275.279V61ZM270.319 11.24C268.911 11.24 267.877 10.8151 267.061 10.0347L264.296 12.9253C265.934 14.4916 267.993 15.24 270.319 15.24V11.24ZM267.093 10.0658C266.293 9.26599 265.919 8.36073 265.919 7.24H261.919C261.919 9.42593 262.718 11.3473 264.265 12.8942L267.093 10.0658ZM265.919 7.24C265.919 6.04796 266.304 5.16782 267.06 4.44671L264.298 1.55329C262.707 3.07218 261.919 5.01871 261.919 7.24H265.919ZM267.061 4.44528C267.877 3.66489 268.911 3.24 270.319 3.24V-0.760001C267.993 -0.760001 265.934 -0.0115621 264.296 1.55471L267.061 4.44528ZM270.319 3.24C271.755 3.24 272.753 3.65559 273.498 4.36671L276.26 1.47328C274.658 -0.0555955 272.616 -0.760001 270.319 -0.760001V3.24ZM273.566 4.42921C274.348 5.10864 274.719 5.91419 274.719 7H278.719C278.719 4.77914 277.863 2.86469 276.191 1.41079L273.566 4.42921ZM274.719 7C274.719 8.26598 274.317 9.25801 273.513 10.0976L276.404 12.8624C277.948 11.2486 278.719 9.25401 278.719 7H274.719ZM273.545 10.0658C272.806 10.8047 271.799 11.24 270.319 11.24V15.24C272.679 15.24 274.765 14.5019 276.373 12.8942L273.545 10.0658ZM298.564 63L296.978 61.7818L294.506 65H298.564V63ZM317.364 38.52L319.363 38.5797L319.548 32.3928L315.778 37.3018L317.364 38.52ZM317.204 43.88L315.611 45.0895L319.034 49.5975L319.203 43.9397L317.204 43.88ZM299.284 20.28V18.28H295.254L297.691 21.4895L299.284 20.28ZM310.404 20.28L312.006 19.0824L311.406 18.28H310.404V20.28ZM322.964 37.08V39.08H326.956L324.566 35.8824L322.964 37.08ZM318.724 37.08L317.126 35.8776L314.716 39.08H318.724V37.08ZM331.364 20.28V18.28H330.366L329.766 19.0776L331.364 20.28ZM342.164 20.28L343.751 21.4963L346.215 18.28H342.164V20.28ZM324.084 43.88L322.084 43.8502L321.994 49.8968L325.671 45.0963L324.084 43.88ZM324.164 38.52L325.752 37.3051L322.25 32.725L322.164 38.4902L324.164 38.52ZM342.884 63V65H346.931L344.472 61.7851L342.884 63ZM331.604 63L329.996 64.1896L330.596 65H331.604V63ZM318.404 45.16L318.671 43.1779L313.982 42.5468L316.796 46.3496L318.404 45.16ZM322.564 45.72L324.164 46.92L326.209 44.1927L322.831 43.7379L322.564 45.72ZM309.604 63V65H310.604L311.204 64.2L309.604 63ZM300.15 64.2182L318.95 39.7382L315.778 37.3018L296.978 61.7818L300.15 64.2182ZM315.365 38.4603L315.205 43.8203L319.203 43.9397L319.363 38.5797L315.365 38.4603ZM318.797 42.6705L300.877 19.0705L297.691 21.4895L315.611 45.0895L318.797 42.6705ZM299.284 22.28H310.404V18.28H299.284V22.28ZM308.802 21.4776L321.362 38.2776L324.566 35.8824L312.006 19.0824L308.802 21.4776ZM322.964 35.08H318.724V39.08H322.964V35.08ZM320.322 38.2824L332.962 21.4824L329.766 19.0776L317.126 35.8776L320.322 38.2824ZM331.364 22.28H342.164V18.28H331.364V22.28ZM340.576 19.0637L322.496 42.6637L325.671 45.0963L343.751 21.4963L340.576 19.0637ZM326.084 43.9098L326.164 38.5498L322.164 38.4902L322.084 43.8502L326.084 43.9098ZM322.575 39.7349L341.295 64.2149L344.472 61.7851L325.752 37.3051L322.575 39.7349ZM342.884 61H331.604V65H342.884V61ZM333.212 61.8104L320.012 43.9704L316.796 46.3496L329.996 64.1896L333.212 61.8104ZM318.137 47.1421L322.297 47.7021L322.831 43.7379L318.671 43.1779L318.137 47.1421ZM320.964 44.52L308.004 61.8L311.204 64.2L324.164 46.92L320.964 44.52ZM309.604 61H298.564V65H309.604V61Z"
      fill="#BC4B51"
    />
  </g>
  <defs>
    <filter
      id="filter0_d_304_4"
      x="0.52002"
      y="0.239998"
      width="353.364"
      height="93.84"
      filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dx="3" dy="7" />
      <feGaussianBlur stdDeviation="4" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_304_4"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_304_4"
        result="shape"
      />
    </filter>
  </defs>
</svg>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {!user && (
              <>
                <Nav.Link className="nav-link" as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}

      </Nav> 
      </Navbar.Collapse >
      <Nav >
            {user && (
              <>
                <Nav.Link className="nav-link" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/profile">My Profile</Nav.Link>
                <Nav.Link className="nav-link" onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}

      </Nav>
       </Navbar>

    )
}