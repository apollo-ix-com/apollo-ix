export const openMobileMenu = (): void => {
  const menuPanel = document.getElementById("uc-menu-panel");
  if (menuPanel) {
    menuPanel.classList.add("uc-offcanvas-overlay", "uc-open");
  } else {
    console.warn("Menu panel not found.");
  }
};

export const closeMobileMenu = (): void => {
  const menuPanel = document.getElementById("uc-menu-panel");
  if (menuPanel) {
    menuPanel.classList.remove("uc-offcanvas-overlay", "uc-open");
  } else {
    console.warn("Menu panel not found.");
  }
};
