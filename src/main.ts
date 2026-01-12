import "./style.css";
import azaleaLogo from "/azalea.png";
import discordLogo from "./discord.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <nav>
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="https://maps.pyxrs.com/azalea-creative">Maps</a>
      <a href="/">Gallery</a>
    </div>
  </nav>

  <section class="logo-container">
    <img src="${azaleaLogo}" alt="Azalea Logo" class="logo" />
    <h1>Azalea SMP</h1>
    <div class="ad-banner">SEASON 3 STARTS JAN 12!</div>
    <br>
    <br>
    <button class="join" onclick="window.open('https:\/\/discord.gg/bdF8vZzP8f', '_blank')">
      <img src="${discordLogo}" alt="Discord Logo" />
      Discord
    </button>
  </section>
`;
