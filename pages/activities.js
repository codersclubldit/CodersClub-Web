document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-link");
  const contents = document.querySelectorAll(".tab-content");

  // Add 'active' class to the first tab button and apply styling classes
  tabs[0].classList.add(
    "active",
    "text-white",
    "box-shadow-btn",
    "rounded-full",
    "sm:text-[12x]",
    "font-[200]",
    "bg-[#09062C]",
  );

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      tabs.forEach((t) => {
        t.classList.remove(
          "text-white",
          "box-shadow-btn",
          "rounded-full",
          "border-opacity-25",
          "sm:text-[12px]",
          "font-[200]",
          "bg-[#09062C]",
        );
        t.classList.add("text-[#f3f3f3]");
      });
      tab.classList.add(
        "text-white",
        "box-shadow-btn",
        "rounded-full",
        "sm:text-[12px]",
        "font-[200]",
        "bg-[#09062C]",
      );

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      document.getElementById(target).classList.add("active");
    });
  });
});
