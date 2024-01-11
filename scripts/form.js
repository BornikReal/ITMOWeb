(() => {
  const contacts = JSON.parse(localStorage.getItem("contacts"));
  const contactsList = document.querySelector(".contact-list");
  if (contacts) {
    Object.keys(contacts).forEach((id) => {
      const newContact = document.createElement("div");
      newContact.innerHTML = `
        <div class="contact-card">
          <h3 class="contact-card__title">${contacts[id].title}</h3>
          <a class="contact-card__link" href="${contacts[id].link}">Click</a>
        </div>
      `;
      contactsList.append(newContact);
    });
  }
})();

const onSubmit = (event) => {
  event.preventDefault();
  const inputs = document.querySelectorAll(".add-contact__input");
  const contactsList = document.querySelector(".contact-list");
  const newContact = document.createElement("div");
  newContact.innerHTML = `
    <div class="contact-card">
      <h3 class="contact-card__title">${inputs[0].value}</h3>
      <a class="contact-card__link" href="${inputs[1].value}">Click</a>
    </div>
  `;
  contactsList.append(newContact);
  localStorage.setItem(
    "contacts",
    JSON.stringify({
      ...JSON.parse(localStorage.getItem("contacts")),
      [inputs[0].value]: {
        title: inputs[0].value,
        link: inputs[1].value,
      },
    })
  );
};

const form = document.querySelector(".add-contact");
form.addEventListener("submit", onSubmit);
