export default params => {
  let link_class = "link " + params.linkClassName;

  return (
    <nav className={params.className + " flex flex-wrap ttc"}>
      <a
        className={link_class + " h2 w2"}
        href="https://github.com/icco"
        title="GitHub"
        rel="me"
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
        >
          <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" />
        </svg>
      </a>

      <a
        className={link_class + " h2 w2"}
        href="https://instagram.com/probablynatwelch"
        title="Instagram"
        rel="me"
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
        >
          <path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z" />
        </svg>
      </a>

      <a
        className={link_class + " h2 w2"}
        href="https://keybase.io/icco"
        title="Keybase"
        rel="me"
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
        >
          <title>Keybase icon</title>
          <path d="M10.446 21.371c0 .528-.428.953-.954.953-.525 0-.954-.425-.954-.953 0-.526.428-.954.953-.954.524 0 .951.431.951.955m5.922-.001c0 .528-.428.953-.955.953-.526 0-.952-.425-.952-.953 0-.526.423-.954.949-.954s.954.431.954.955M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053-1.16-1.139-2.505-1.986-3.955-2.504l-.23-.078c.012-.027.024-.055.035-.083.41-1.064.367-2.223-.12-3.255-.491-1.035-1.356-1.8-2.438-2.16-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328-.328-.345-.766-.552-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003c-.061 1.029.727 1.915 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306-1.346.562-2.586 1.401-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06c-.833-1.114-1.419-2.426-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97.025.05.054.097.084.144.264.398.713.625 1.199.605.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003c-.279-.341-.694-.535-1.134-.535-.335 0-.664.117-.925.33-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425c-.046.036-.095.053-.146.053-.066 0-.133-.03-.177-.085l-.111-.135c-.083-.1-.067-.25.034-.334l.51-.42-1.055-1.299c-.109-.133-.091-.33.044-.436.058-.048.126-.072.194-.072.091 0 .181.038.24.113l2.963 3.645c.109.135.09.33-.042.436-.039.029-.082.053-.126.063-.023.006-.045.009-.07.009-.09 0-.178-.04-.24-.113l-.295-.365-1.045.854c-.046.037-.1.055-.154.055-.068 0-.139-.03-.186-.09l-.477-.579c-.082-.102-.068-.252.035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075c-.255-.015-.45-.235-.435-.488l.09-1.401c.014-.245.216-.436.461-.436h.024l1.401.091c.123.006.236.06.317.152.083.094.123.21.116.336l-.007.101c-.32.567-.585 1.134-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102-.183.458-.119.997.21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582c.266.325.659.513 1.079.513.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113.113 0 .222-.01.33-.035.218-.05.424-.15.598-.291.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315 1.005.445 1.954 1.1 2.771 1.897.029.03.059.055.085.083l.17.175c.038.039.076.079.111.12.079.085.16.175.239.267l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005zM7.719 4.115l-.835-.051.053-.835.834.051-.052.835z" />
        </svg>
      </a>

      <a
        className={link_class + " h2 w2"}
        href="https://linkedin.com/in/natwelch"
        title="LinkedIn"
        rel="me"
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
        >
          <path
            d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z"
            fillRule="nonzero"
          />
        </svg>
      </a>

      <a
        className={link_class + " h2 w2"}
        href="https://www.goodreads.com/author/show/18143346.Nat_Welch"
        title="Goodreads"
        rel="me"
      >
        <svg
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Goodreads icon</title>
          <path d="M19.525 15.977V.49h-2.059v2.906h-.064c-.211-.455-.481-.891-.842-1.307-.36-.412-.767-.777-1.232-1.094-.466-.314-.962-.561-1.519-.736C13.256.09 12.669 0 12.038 0c-1.21 0-2.3.225-3.246.67-.947.447-1.743 1.057-2.385 1.83-.642.773-1.133 1.676-1.47 2.711-.336 1.037-.506 2.129-.506 3.283 0 1.199.141 2.326.425 3.382.286 1.057.737 1.976 1.368 2.762.631.78 1.412 1.397 2.375 1.833.961.436 2.119.661 3.471.661 1.248 0 2.33-.315 3.262-.946s1.638-1.473 2.119-2.525h.061v2.284c0 2.044-.421 3.607-1.264 4.705-.84 1.081-2.224 1.638-4.146 1.638-.572 0-1.128-.061-1.669-.181-.542-.12-1.036-.315-1.487-.57-.437-.271-.827-.601-1.143-1.038-.316-.435-.526-.961-.632-1.593H5.064c.067.887.315 1.654.737 2.3.424.646.961 1.172 1.602 1.593.641.406 1.367.706 2.172.902.811.194 1.639.3 2.494.3 1.383 0 2.541-.195 3.486-.555.947-.376 1.714-.902 2.301-1.608.601-.708 1.021-1.549 1.293-2.556.27-1.007.42-2.134.42-3.367l-.044.062zm-7.484-.557c-.955 0-1.784-.189-2.479-.571-.697-.38-1.277-.882-1.732-1.503-.467-.621-.797-1.332-1.022-2.139s-.332-1.633-.332-2.484c0-.871.105-1.725.301-2.563.21-.84.54-1.587.992-2.24.451-.652 1.037-1.182 1.728-1.584s1.533-.605 2.51-.605 1.803.209 2.495.621c.676.415 1.247.959 1.683 1.634.436.677.751 1.429.947 2.255.195.826.285 1.656.285 2.482 0 .852-.12 1.678-.345 2.484-.226.807-.572 1.518-1.038 2.139-.465.621-1.021 1.123-1.698 1.503-.676.382-1.458.571-2.359.571h.064z"></path>
        </svg>
      </a>

      <a
        className={link_class + " h2 w2"}
        href="https://twitter.com/icco"
        title="Twitter"
        rel="me"
      >
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
        >
          <path
            d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z"
            fillRule="nonzero"
          />
        </svg>
      </a>

      <a
        className={link_class + " h2 w2"}
        title="Webring"
        href="https://webring.xxiivv.com/#random"
        target="_blank"
        rel="me"
      >
        {/* Source is at https://webring.xxiivv.com/icon.black.svg */}
        <svg
          clipRule="evenodd"
          fill="currentColor"
          fillRule="evenodd"
          height="32"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          viewBox="0 0 236 212"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>xxiivv webring</title>
          <path d="M193.479 116.847C198.558 135.805 195.899 156.003 186.086 173L179.086 185.124L154.837 171.124L161.837 159C167.937 148.434 169.59 135.878 166.433 124.094C163.275 112.31 155.566 102.263 145 96.1627C134.435 90.0628 121.879 88.4097 110.094 91.5673C98.3101 94.7249 88.2629 102.434 82.1629 113L25.1629 211.727L0.914185 197.727L57.9142 98.9999C67.7272 82.0033 83.8902 69.601 102.847 64.5214C121.805 59.4418 142.003 62.101 159 71.914C175.997 81.727 188.399 97.89 193.479 116.847Z"></path>
          <path d="M102.847 207.478C83.8901 202.399 67.7271 189.996 57.9141 173L50.9141 160.875L75.1628 146.875L82.1628 159C88.2628 169.565 98.3101 177.275 110.094 180.432C121.879 183.59 134.435 181.937 145 175.837C155.565 169.737 163.275 159.69 166.433 147.906C169.59 136.121 167.937 123.565 161.837 113L104.837 14.2729L129.086 0.272949L186.086 98.9998C195.899 115.996 198.558 136.195 193.479 155.152C188.399 174.11 175.997 190.273 159 200.086C142.003 209.899 121.805 212.558 102.847 207.478Z"></path>
          <path d="M69.6741 83.674C83.5518 69.7963 102.374 61.9999 122 61.9999H136V89.9999H122C109.8 89.9999 98.0998 94.8463 89.4731 103.473C80.8464 112.1 76 123.8 76 136C76 148.2 80.8464 159.9 89.4731 168.527C98.0998 177.154 109.8 182 122 182H236V210H122C102.374 210 83.5518 202.204 69.6741 188.326C55.7964 174.448 48 155.626 48 136C48 116.374 55.7964 97.5517 69.6741 83.674Z"></path>
        </svg>
      </a>

      <a
        className={link_class + " h2 w2"}
        title="Mastodon / merveilles.town"
        href="https://merveilles.town/@icco"
        target="_blank"
        rel="me"
      >
        <a>Mastodon</a>
        {/* Source is at https://wiki.xxiivv.com/ */}
        <svg
          clipRule="evenodd"
          fill="currentColor"
          fillRule="evenodd"
          height="32"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          viewBox="0 0 236 212"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M185,65 A60,60 0 0,0 125,125 L185,125 Z M125,245 A60,60 0 0,0 185,185 L125,185 Z M95,125 A30,30 0 0,1 125,155 A30,30 0 0,1 95,185 A30,30 0 0,1 65,155 A30,30 0 0,1 95,125 Z M155,125 A30,30 0 0,1 185,155 A30,30 0 0,1 155,185 A30,30 0 0,1 125,155 A30,30 0 0,1 155,125 Z M215,125 A30,30 0 0,1 245,155 A30,30 0 0,1 215,185 A30,30 0 0,1 185,155 A30,30 0 0,1 215,125 "></path>
          <path d="M125,65 A60,60 0 0,1 185,125 L125,125 Z M185,245 A60,60 0 0,1 125,185 L185,185 Z M65,65 A60,60 0 0,1 125,125 L65,125 Z M65,245 A60,60 0 0,0 125,185 L65,185 Z M245,65 A60,60 0 0,0 185,125 L245,125 Z M245,245 A60,60 0 0,1 185,185 L245,185 Z"></path>
        </svg>
      </a>
    </nav>
  );
};
