import Logo from "../../public/images/logo.png";

export default function TopNavMobile() {
  return (
    <div id="navMobile">
      <span className="logo">
        <img alt="A Book Apart Logo" src={Logo} width="32px" loading="lazy" />
        <h1> {`Engineering /n Design /n Systems`}</h1>
      </span>
      <button> Buy Book </button>
      <div id="popUp">
        <nav>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://github.com/EngineeringDesignSystems"
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
