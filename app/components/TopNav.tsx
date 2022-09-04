import Logo from "../../public/images/logo.png";

export default function TopNav() {
  return (
    <div id="nav">
      <span className="logo">
        <img
          alt="Engineering Design Systems book cover"
          src={Logo}
          width="32px"
          loading="lazy"
        />
        <h1>Engineering Design Systems</h1>
      </span>
      <nav>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/EngineeringDesignSystems"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://medium.com/@HovaLabs"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Mailing List
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Community
            </a>
          </li>
          <li>
            <button> Buy Book </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
