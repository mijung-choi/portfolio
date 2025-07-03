console.log("포트폴리오 페이지에 오신 걸 환영합니다!");
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  customCursor.style.left = `${e.pageX}px`;
  customCursor.style.top = `${e.pageY}px`;
});

function toggleProjects(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

