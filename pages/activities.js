document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  // Function to reset all tabs and contents
  const resetTabs = () => {
    tabs.forEach(tab => {
      tab.classList.remove("active", "text-white", "box-shadow-btn", "rounded-full", "sm:text-[12px]", "font-[200]", "bg-[#09062C]");
      tab.classList.add("text-[#f3f3f3]");
    });
    contents.forEach(content => content.classList.remove("active"));
  };

  // Set the default active tab dynamically (e.g., index 0 for the first tab)
  const setActiveTab = (index) => {
    resetTabs(); // Reset all tabs and contents first
    tabs[index].classList.add("active", "text-white", "box-shadow-btn", "rounded-full", "sm:text-[12px]", "font-[200]", "bg-[#09062C]");
    const targetContent = document.getElementById(tabs[index].getAttribute("data-tab"));
    if (targetContent) {
      targetContent.classList.add("active");
    }
  };

  // Set the default active tab (for example, tab 0)
  setActiveTab(0);

  // Tab switching functionality
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      setActiveTab(index); // Switch to the clicked tab
    });
  });
});
