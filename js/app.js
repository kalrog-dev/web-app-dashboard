// Alert banner
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

// Send a message with a simple check if none of the required fields is blank
document.getElementById("send").addEventListener('click', (e) => {
  const user = document.getElementById("userField").value;
  const msg = document.getElementById("messageField").value;
  const regex = /^\s*$/;
  
  if (regex.test(user) && regex.test(msg)) {
    alert("Please fill out user and msg fields before sending");
  } else if (regex.test(user)) {
    alert("Please fill out user field before sending");
  } else if (regex.test(msg)) {
    alert("Please fill out msg field before sending");
  } else {
    alert(`Message successfully sent to: ${user}`);
  }
});

// Save settings to local storage
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

// Update on reload
emailCheckbox.checked = localStorage.getItem("Email") === "true";
publicCheckbox.checked = localStorage.getItem("Public") === "true";
timezone.selectedIndex = Number(localStorage.getItem("Timezone"));

// Notifications
const bell = document.getElementById("bell-icon");
const notifications = document.querySelector(".notification-container");
const notifDot = document.getElementById("notification-dot");

bell.addEventListener("click", () => {
  notifications.classList.toggle('hide')
  notifDot.style.display = "none";
})

