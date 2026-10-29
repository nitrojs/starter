const button = document.querySelector<HTMLButtonElement>("#hello")!;

button.addEventListener("click", async () => {
  const res = await fetch("/api/hello");
  button.textContent = await res.text();
});
