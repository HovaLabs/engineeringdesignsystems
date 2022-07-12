import type { TChapter } from "../copy/tableOfContents";
import { tableOfContentsCopy } from "../copy/tableOfContents";
export default function TableOfContents() {
  const copy = tableOfContentsCopy.map((value: TChapter) => {
    const description = value.description
      ? value.description.map((item) => {
          return <div key={item}>- {item}</div>;
        })
      : null;
    return (
      <li key={value.title}>
        <strong>{value.title}</strong>
        {description}
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
