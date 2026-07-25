document.addEventListener("DOMContentLoaded", () => {
  // Grab all nav links
  const navLinks = document.querySelectorAll(".nav a[id]");
  // Grab all sections inside .showpages
  const sections = document.querySelectorAll(".showpages section");

  // Hide all sections initially except the first
  sections.forEach((sec, index) => {
    sec.style.display = index === 0 ? "block" : "none";
  });

  // Add click event to each nav link
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Hide all sections
      sections.forEach(sec => (sec.style.display = "none"));

      // Find the matching section by id + "1"
      const targetId = link.id + "1";
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav a[id]");
  const sections = document.querySelectorAll(".showpages section");

  // Show only the first section initially
  sections.forEach((sec, index) => {
    sec.style.display = index === 0 ? "block" : "none";
  });

  // Add click event to each nav link
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Hide all sections
      sections.forEach(sec => (sec.style.display = "none"));

      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove("active"));

      // Add active class to the clicked link
      link.classList.add("active");

      // Show the matching section
      const targetId = link.id + "1";
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
      }
    });
  });
});
