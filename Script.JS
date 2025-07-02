const mashups = [
  { title: \"Kanye x Nirvana - Smells Like Gold Digger\", file: \"mash1.mp3\" },
  { title: \"Missy Elliott x The Strokes - Work It Reptilia\", file: \"mash2.mp3\" },
  { title: \"Eminem x Radiohead - Lose Yourself to Karma\", file: \"mash3.mp3\" },
];

function generateMashup() {
  const prompt = document.getElementById(\"prompt\").value;
  const status = document.getElementById(\"status\");
  const player = document.getElementById(\"player\");
  
  status.innerText = \"Generating mashup with LLM DJ 🤖...\";
  player.style.display = \"none\";
  
  setTimeout(() => {
    const mash = mashups[Math.floor(Math.random() * mashups.length)];
    status.innerHTML = `<strong>${mash.title}</strong><br>Done. Play or download below.`;
    player.src = `public/mashups/${mash.file}`;
    player.style.display = \"block\";
  }, 2000);
}
