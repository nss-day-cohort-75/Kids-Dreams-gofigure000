import { getCelebrities } from "./database.js";

const celebrities = getCelebrities();

export const Celebrities = () => {
  let html = "<ol>";

  for (const celebrity of celebrities) {
    html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-name="${celebrity.name}"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`;
  }

  html += "</ol>";
  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "celebrity") {
    const celebSport = itemClicked.dataset.sport;

    window.alert(`${itemClicked.dataset.name} is a ${celebSport} star`);
  }
});
