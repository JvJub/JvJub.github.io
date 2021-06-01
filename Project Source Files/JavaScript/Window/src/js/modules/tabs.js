"use strict";

// Tabs:
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

  // Get Node Elements:
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  // Hide Tabs Content
  function hideTabsContent() {
    content.forEach((item, index, massive) => {
      item.style.display = 'none';
    });

    // Remove Active
    tab.forEach((item, index, massive) => {
      item.classList.remove(activeClass);
    });
  }

  // Show Tabs Content. N - Technical Argument
  function showTabsContent(N = 0) {
    content[N].style.display = display;

    // Set Active
    tab[N].classList.add(activeClass);
  }

  // Call Functions:
  hideTabsContent();
  showTabsContent();

  // Tab Tracking:
  header.addEventListener('click', (event) => {
    const target = event.target;

    if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || // Reg - .class => class
    target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
      tab.forEach((item, index) => {
        if (target == item || target.parentNode == item) {
          hideTabsContent();
          showTabsContent(index);
        }
      });
    }
  });
  
};

export default tabs;