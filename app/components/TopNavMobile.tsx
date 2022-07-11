import Logo from "../../public/images/logo.png";

export default function TopNavMobile() {
  return (
    <div id="navMobile">
      <span className="logo">
        <img
          alt="Actionable Design Systems book cover"
          src={Logo}
          width="32px"
          loading="lazy"
        />
        <h1> {`Actionable /n Design /n Systems`}</h1>
      </span>
      <button> Buy Book </button>
      <div id="popUp">
        <nav>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://github.com/ActionableDesignSystems"
                rel="noreferrer"
              >
                Github Repo
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
          </ul>
        </nav>
      </div>
    </div>
  );
}
