import type { TChapter } from "../copy/tableOfContents";
import { tableOfContentsCopy } from "../copy/tableOfContents";
export default function TableOfContents() {
  const copy = tableOfContentsCopy.map((value: TChapter) => {
    const description = value.description
      ? value.description.map((item) => {
          return <li key={item}>- {item}</li>;
        })
      : null;
    return (
      <li key={value.title}>
        <strong>{value.title}</strong>
        <ul>{description}</ul>
      </li>
    );
  });
  return (
    <div id="TableOfContents">
      <h1>Table of Contents</h1>
      <ul>{copy}</ul>
    </div>
  );
}
