window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 50) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70, // Offset for fixed header height
        behavior: 'smooth'
      });
    }
  });
});

// Scroll Animation for Sections
const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Apply visible class
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2 // Trigger animation when 20% of the section is visible
});

sections.forEach((section, index) => {
  sectionObserver.observe(section);
  section.style.transitionDelay = `${index * 0.2}s`; // Staggered animation delay
  section.classList.add('hidden'); // Initially hidden with CSS
});