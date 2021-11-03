import Header from "./components/Header";
import Body from "./components/Body";
import MobileNavLinks from "./components/MobileNavLinks";

function App() {
  window.onload = () => {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav")
    menu_btn.addEventListener("click", () => {
      menu_btn.classList.toggle("is-active");
      mobile_menu.classList.toggle("is-active")
    });
  };
  return (
    <div className="container">
      <MobileNavLinks />
      <Header />
      <Body />
    </div>
  );
}

export default App;
