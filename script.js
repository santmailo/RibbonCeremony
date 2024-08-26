let flag = false;
document.addEventListener("DOMContentLoaded", () => {
  // Use setTimeout to remove the element just before the animation ends

  const loadCssButton = document.getElementById("loadCssButton");

  loadCssButton.addEventListener("click", () => {
    confetti();
    document.getElementById("clapSound").play();

    setTimeout(() => {
      celebrate();
    }, 1000);
    setTimeout(() => {
      celebrate();
    }, 2000);
    setTimeout(() => {
      celebrate();
    }, 3000);
    setTimeout(() => {
      celebrate();
    }, 4000);
    setTimeout(() => {
      celebrate();
    }, 5000);
    setTimeout(() => {
      celebrate();
    }, 6000);
    setTimeout(() => {
      celebrate();
    }, 4000);
    setTimeout(() => {
      const redirectUrl = "https://cosmos.video/v/ivni-9ziy-t681/office";

      window.location.href = redirectUrl;
    }, 8000);

    // Create a new <link> element
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "animationStyle.css"; // Path to the CSS file you want to add

    // Add the remove functionality
    const leftRibbon = document.querySelector(".ribbon-left");

    const rightRibbon = document.querySelector(".ribbon-right");

    const imgRibbon = document.querySelector(".ribbon-img");

    const animationDuration = 1000; // Duration of the animation in milliseconds
    const removeTime = animationDuration - 100; // Time to remove the element before animation ends

    setTimeout(() => {
      if (leftRibbon) {
        leftRibbon.remove();
        rightRibbon.remove();
        imgRibbon.remove();
      }
    }, removeTime);

    // Append the <link> element to the <head>
    document.head.appendChild(link);

    // Optionally, you can disable or hide the button after adding the CSS
    loadCssButton.disabled = true; // Disable the button
    loadCssButton.textContent = "CSS Loaded"; // Change button text
  });
});

function celebrate() {
  confetti();
}
