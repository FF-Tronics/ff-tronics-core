// Scripts
console.log(`Hello world`);

const heroHeader = document.querySelector(".hero-header");

const targetSection = document.querySelectorAll("section");
const text = `Precision engineering, from firmware to flight.`;

function textTypingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  setTimeout(function () {
    textTypingEffect(element, text, i + 1);
  }, 50);
}

textTypingEffect(heroHeader, text);

// 1. Select the section you want to watch

// 2. Define what happens when the section comes into view
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Perform your action here (e.g., trigger an animation, load data)
      entry.target.classList.add("animate__animated animate__slideInUp");

      // OPTIONAL: Stop watching if you only want the event to trigger once
      observer.unobserve(entry.target);
    }
  });
};

// 3. Set up configuration options (optional)
const observerOptions = {
  root: null, // Defaults to the browser viewport
  threshold: 0.2, // Triggers when 20% of the section is visible
};

// 4. Create and start the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(targetSection);
