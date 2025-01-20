const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
  const logoImg = document.querySelector('.logo-img');
  logoImg.style.animationPlayState = 'running'; // Trigger the animation
});

// Add event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements within the section
  const elements = document.querySelectorAll(".first-section *");

  // Add the 'hidden' class initially
  elements.forEach((element) => {
    element.classList.add("hidden");
  });

  // Trigger animations with a slight delay for each element
  setTimeout(() => {
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("visible");
      }, index * 100); // Delay based on element index
    });
  }, 500); // Wait for 500ms before starting the animation
});

const text = "Join the Top Affiliate Network with Proven Success";
const speed = 100; // Typing speed in milliseconds

const typeEffect = async () => {
  // Use optional chaining and type guard
  const element = document.getElementById("animated-text");
  if (element) {
    let i = 0;
    while (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  } else {
    console.error("Element with ID 'animated-text' not found.");
  }
};

typeEffect();

const scrollSection = document.querySelector('.scroll-section');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const scrollAmount = 300; // Adjust how much to scroll per click
let isInteracting = false; // Flag to check user interaction
let animationFrameId; // ID to track the animation frame

// Scroll buttons functionality
leftBtn.addEventListener('click', () => {
  isInteracting = true;
  scrollSection.scrollLeft -= scrollAmount; // Scroll left
  resumeAutoScroll(); // Resume auto-scroll after interaction
});

rightBtn.addEventListener('click', () => {
  isInteracting = true;
  scrollSection.scrollLeft += scrollAmount; // Scroll right
  resumeAutoScroll(); // Resume auto-scroll after interaction
});

// Infinite scrolling animation
function startAutoScroll() {
  if (!isInteracting) {
    scrollSection.scrollLeft += 1; // Adjust speed of scrolling
    if (scrollSection.scrollLeft >= scrollSection.scrollWidth - scrollSection.clientWidth) {
      scrollSection.scrollLeft = 0; // Reset scroll position for infinite effect
    }
  }
  animationFrameId = requestAnimationFrame(startAutoScroll); // Continuously call the function
}

// Resume auto-scroll after manual interaction
function resumeAutoScroll() {
  setTimeout(() => {
    if (!isInteracting) {
      startAutoScroll();
    }
  }, 1000); // Add a delay before resuming auto-scroll
}

// Start the auto-scroll animation
startAutoScroll();

const financeCard = document.getElementById("finance-card");
const floatContainer = document.getElementById("float-container");

// Open the floating container when the "Finance" card is clicked
financeCard.addEventListener("click", () => {
  floatContainer.style.display = "block";
});

// Close the floating container when a list item is clicked
floatContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    floatContainer.style.display = "none"; // Hide the container
    console.log(`You clicked on: ${e.target.textContent}`); // Log the clicked item
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.getElementById('about');
  const heading = document.querySelector('.about-heading');
  const images = document.querySelectorAll('.about-image');
  const text = document.querySelector('.about-text');

  // Intersection Observer for detecting when the section is in view
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger animations when section is visible
          heading.style.animation = 'slideInFromTop 1s ease-out forwards';
          text.style.animation = 'slideInFromRight 1s ease-out forwards';

          images.forEach((image, index) => {
            image.style.animation = `slideInFromLeft ${0.5 + index * 0.3}s ease-out forwards`;
          });

          // Disconnect observer to prevent multiple triggers
          observer.disconnect();
        }
      });
    },
    {
      root: null, // Default is the viewport
      rootMargin: '0px', // Adjust margins for mobile if needed
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  observer.observe(aboutSection);
});

// Optional: Add any additional JavaScript interactivity
document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  const hamburger = document.getElementById('hamburger');
  const cross = document.getElementById('cross');
  
  if (hamburger.style.display === 'none') {
    hamburger.style.display = 'block';
    cross.style.display = 'none';
  } else {
    hamburger.style.display = 'none';
    cross.style.display = 'block';
  }
});

document.getElementById('close-btn').addEventListener('click', function() {
  document.getElementById('float-container').style.display = 'none';
});


document.getElementById('Legal-card').addEventListener('click', function() {
  document.getElementById('overlay-legal').style.display = 'block';
  document.getElementById('float-container-legal').style.display = 'block';
});

document.getElementById('close-btn-legal').addEventListener('click', function() {
  document.getElementById('overlay-legal').style.display = 'none';
  document.getElementById('float-container-legal').style.display = 'none';
});


document.getElementById('Business-card').addEventListener('click', function() {
  document.getElementById('overlay-business').style.display = 'block';
  document.getElementById('float-container-business').style.display = 'block';
});

document.getElementById('close-btn-business').addEventListener('click', function() {
  document.getElementById('overlay-business').style.display = 'none';
  document.getElementById('float-container-business').style.display = 'none';
});



document.getElementById('Education-card').addEventListener('click', function() {
  document.getElementById('overlay-education').style.display = 'block';
  document.getElementById('float-container-education').style.display = 'block';
});

document.getElementById('close-btn-education').addEventListener('click', function() {
  document.getElementById('overlay-education').style.display = 'none';
  document.getElementById('float-container-education').style.display = 'none';
});



document.getElementById('Real Estate').addEventListener('click', function() {
  document.getElementById('overlay-real-estate').style.display = 'block';
  document.getElementById('float-container-real-estate').style.display = 'block';
});

document.getElementById('close-btn-real-estate').addEventListener('click', function() {
  document.getElementById('overlay-real-estate').style.display = 'none';
  document.getElementById('float-container-real-estate').style.display = 'none';
});


document.getElementById('Interior-Design').addEventListener('click', function() {
  document.getElementById('overlay-interior-design').style.display = 'block';
  document.getElementById('float-container-interior-design').style.display = 'block';
});

document.getElementById('close-btn-interior-design').addEventListener('click', function() {
  document.getElementById('overlay-interior-design').style.display = 'none';
  document.getElementById('float-container-interior-design').style.display = 'none';
});


document.getElementById('Even-Management').addEventListener('click', function() {
  document.getElementById('overlay-even-management').style.display = 'block';
  document.getElementById('float-container-even-management').style.display = 'block';
});

document.getElementById('close-btn-even-management').addEventListener('click', function() {
  document.getElementById('overlay-even-management').style.display = 'none';
  document.getElementById('float-container-even-management').style.display = 'none';
});


document.getElementById('Job-Placement').addEventListener('click', function() {
  document.getElementById('overlay-job-placement').style.display = 'block';
  document.getElementById('float-container-job-placement').style.display = 'block';
});

document.getElementById('close-btn-job-placement').addEventListener('click', function() {
  document.getElementById('overlay-job-placement').style.display = 'none';
  document.getElementById('float-container-job-placement').style.display = 'none';
});

document.getElementById('Astrology').addEventListener('click', function() {
  document.getElementById('overlay-astrology').style.display = 'block';
  document.getElementById('float-container-astrology').style.display = 'block';
});

document.getElementById('close-btn-astrology').addEventListener('click', function() {
  document.getElementById('overlay-astrology').style.display = 'none';
  document.getElementById('float-container-astrology').style.display = 'none';
});

document.getElementById('Matrimony').addEventListener('click', function() {
  document.getElementById('overlay-matrimony').style.display = 'block';
  document.getElementById('float-container-matrimony').style.display = 'block';
});

document.getElementById('close-btn-matrimony').addEventListener('click', function() {
  document.getElementById('overlay-matrimony').style.display = 'none';
  document.getElementById('float-container-matrimony').style.display = 'none';
});

document.getElementById('Repairing-Service').addEventListener('click', function() {
  document.getElementById('overlay-repairing-service').style.display = 'block';
  document.getElementById('float-container-repairing-service').style.display = 'block';
});

document.getElementById('close-btn-repairing-service').addEventListener('click', function() {
  document.getElementById('overlay-repairing-service').style.display = 'none';
  document.getElementById('float-container-repairing-service').style.display = 'none';
});

document.getElementById('Print-Media').addEventListener('click', function() {
  document.getElementById('overlay-print-media').style.display = 'block';
  document.getElementById('float-container-print-media').style.display = 'block';
});

document.getElementById('close-btn-print-media').addEventListener('click', function() {
  document.getElementById('overlay-print-media').style.display = 'none';
  document.getElementById('float-container-print-media').style.display = 'none';
});

document.getElementById('Marketing-Services').addEventListener('click', function() {
  document.getElementById('overlay-marketing-services').style.display = 'block';
  document.getElementById('float-container-marketing-services').style.display = 'block';
});

document.getElementById('close-btn-marketing-services').addEventListener('click', function() {
  document.getElementById('overlay-marketing-services').style.display = 'none';
  document.getElementById('float-container-marketing-services').style.display = 'none';
});



document.getElementById('Data-Provide').addEventListener('click', function() {
  document.getElementById('overlay-data-provide').style.display = 'block';
  document.getElementById('float-container-data-provide').style.display = 'block';
});

document.getElementById('close-btn-data-provide').addEventListener('click', function() {
  document.getElementById('overlay-data-provide').style.display = 'none';
  document.getElementById('float-container-data-provide').style.display = 'none';
});

document.getElementById('Old-Product').addEventListener('click', function() {
  document.getElementById('overlay-old-product').style.display = 'block';
  document.getElementById('float-container-old-product').style.display = 'block';
});

document.getElementById('close-btn-old-product').addEventListener('click', function() {
  document.getElementById('overlay-old-product').style.display = 'none';
  document.getElementById('float-container-old-product').style.display = 'none';
});

document.getElementById('Tour-Travel').addEventListener('click', function() {
  document.getElementById('overlay-tour-travel').style.display = 'block';
  document.getElementById('float-container-tour-travel').style.display = 'block';
});

document.getElementById('close-btn-tour-travel').addEventListener('click', function() {
  document.getElementById('overlay-tour-travel').style.display = 'none';
  document.getElementById('float-container-tour-travel').style.display = 'none';
});

document.getElementById('Laundry-Service').addEventListener('click', function() {
  document.getElementById('overlay-laundry-service').style.display = 'block';
  document.getElementById('float-container-laundry-service').style.display = 'block';
});

document.getElementById('close-btn-laundry-service').addEventListener('click', function() {
  document.getElementById('overlay-laundry-service').style.display = 'none';
  document.getElementById('float-container-laundry-service').style.display = 'none';
});


document.getElementById('Cleaning-Service').addEventListener('click', function() {
  document.getElementById('overlay-cleaning-service').style.display = 'block';
  document.getElementById('float-container-cleaning-service').style.display = 'block';
});

document.getElementById('close-btn-cleaning-service').addEventListener('click', function() {
  document.getElementById('overlay-cleaning-service').style.display = 'none';
  document.getElementById('float-container-cleaning-service').style.display = 'none';
});






