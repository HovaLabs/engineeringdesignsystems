import BroughtToYouBy from "../components/BroughtToYouBy";
import Definition from "../components/Definition";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

import SignUp from "../components/SignUp";
import TableOfContents from "../components/TableOfContents";

export default function Index() {
  return (
    <>
      <Hero />
      <Definition />
      <TableOfContents />
      <BroughtToYouBy />
      <SignUp />
      <Footer />
    </>
  );
}
