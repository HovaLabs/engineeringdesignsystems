export default function Footer() {
  return (
    <div id="footer">
      <p>
        Copyright Hova Labs {new Date().toJSON().slice(0, 4).replace(/-/g, "/")}
      </p>
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
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Buy Book
          </a>
        </li>
      </ul>
    </div>
  );
}
