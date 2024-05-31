const smoothScroll = () => {
  const navBar = document.querySelector(".header__nav");
  const links = navBar.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        seamless.scrollIntoView(section, {
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    });
  });
};
smoothScroll();