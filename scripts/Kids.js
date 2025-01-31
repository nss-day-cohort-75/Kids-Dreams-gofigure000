import { getChildren } from "./database.js";

const children = getChildren();

export const Kids = () => {
  let html = "<ol>";

  for (const child of children) {
    html += `<li 
                data-id="${child.id}" 
                data-type="child" 
                data-name="${child.name}"
                data-wish="${child.wish}">
                ${child.name}
            </li>`;
  }

  html += "</ol>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "child") {
    const childWish = itemClicked.dataset.wish;

    window.alert(`${itemClicked.dataset.name}'s wish is ${childWish}`);
  }
});
