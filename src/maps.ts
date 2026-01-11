import "./style.css";

document.querySelector<HTMLDivElement>("#maps-root")!.innerHTML = /*html*/ `
  <nav>
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/maps">Maps</a>
      <a href="/gallery">Gallery</a>
    </div>
  </nav>
  <main class="maps-page">
    <section class="maps-container">
      <div class="maps-header">
        <h2 text-align=center>Azalea SMP</h2>
        <button onclick="window.open('https:\/\/maps.pyxrs.com/azalea-survival/', '_blank')">
          View Fullscreen
        </button>
      </div>
      <iframe class="map" src="https://maps.pyxrs.com/azalea-survival/" loading="lazy"
        style="border: none; border-radius: 10px;"></iframe>
    </section>
    <br>
    <br>
    <section class="maps-container">
      <div class="maps-header">
        <h2 text-align=center>Azalea SMP Creative</h2>
        <button onclick="window.open('https:\/\/maps.pyxrs.com/azalea-creative/', '_blank')">
          View Fullscreen
        </button>
      </div>
      <iframe class="map" src="https://maps.pyxrs.com/azalea-creative/" loading="lazy"
        style="border: none; border-radius: 10px;"></iframe>
    </section>
  </main>
`;
