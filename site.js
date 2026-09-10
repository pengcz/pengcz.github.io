const sections = [
  "home",
  "research",
  "experience",
  "publications",
  "contact"
];

async function loadSections() {
  const main = document.getElementById("content");

  for (const name of sections) {
    const response = await fetch(`sections/${name}.html`);
    if (!response.ok) {
      throw new Error(`Could not load ${name}.html`);
    }
    main.insertAdjacentHTML("beforeend", await response.text());
  }

  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
}

loadSections().catch((error) => {
  document.getElementById("content").innerHTML =
    `<div class="container section"><p>${error.message}</p></div>`;
});
