import BookImg from "../../public/images/book.jpg";
import TopNav from "../components/TopNav";

export default function Hero() {
  return (
    <div id="hero">
      <TopNav />
      <h1>A Design System Book for Engineers</h1>
      <h2>
        Normally when you’re reading about design systems it’s from the
        perspective of design or UX. What about engineers?
        <div>
          <strong>Engineering Design Systems</strong> is the book for you!
        </div>
      </h2>
      <img
        className="book"
        alt="Engineering Design Systems book cover"
        src={BookImg}
        loading="lazy"
      />
    </div>
  );
}
