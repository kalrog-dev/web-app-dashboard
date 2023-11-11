//Alert banner
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML =
  `<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
    to complete</p>
    <p class="alert-banner-close">x</p>
  </div>`;

alertBanner.addEventListener('click', e => {
  alertBanner.style.display = e.target.closest(".alert-banner-close") ? "none" : "";
});

//Message section
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  // Ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
  alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else {
  alert(`Message successfully sent to: ${user.value}`);
  }
});

//Save settings to local storage
const emailCheckbox = document.getElementById("email-checkbox");
const publicCheckbox = document.getElementById("public-checkbox");
const timezone = document.getElementById("timezone");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");

save.addEventListener('click', () => {
  localStorage.setItem("Email", String(emailCheckbox.checked));
  localStorage.setItem("Public", String(publicCheckbox.checked));
  localStorage.setItem("Timezone", timezone.selectedIndex);
});

cancel.addEventListener('click', () => {
  localStorage.clear();
  emailCheckbox.checked = false;
  publicCheckbox.checked = false;
  timezone.selectedIndex = 0;
});

//Update on reload
emailCheckbox.checked = localStorage.getItem("Email") === "true";
publicCheckbox.checked = localStorage.getItem("Public") === "true";
timezone.selectedIndex = Number(localStorage.getItem("Timezone"));

//Notifications
const notif = document.getElementById("show-notif");
const bell = document.getElementById("bell-icon");
const notifDot = document.getElementById("notifications");
let viewed = false;

bell.addEventListener("click", () => {
  if (notif.style.display == "flex") {
    notif.style.display = "none";
    viewed = true;
  } else {
    notif.style.display = "flex";
  }

  if (viewed) {
    notifDot.style.display = "none";
  }
})

