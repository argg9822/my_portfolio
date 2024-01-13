class DropdownMenu {
    constructor(btnId, menuId) {
      this.btn = document.getElementById(btnId);
      this.menu = document.getElementById(menuId);
      this.addEventListeners();
    }
  
    addEventListeners() {
      this.btn.addEventListener('click', () => this.toggleMenu());
    }
  
    toggleMenu() {
      const isVisible = this.menu.getAttribute("data-show") === "true";
  
      if (isVisible) {
        this.menu.style.display = "none";
      } else {
        this.menu.style.display = "block";
      }
  
      this.menu.setAttribute("data-show", !isVisible);
    }
}
  
export default DropdownMenu;