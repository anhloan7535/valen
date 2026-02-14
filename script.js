function goPage(num) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.add("hidden");
  });

  document.getElementById("page" + num).classList.remove("hidden");

  // Nếu là trang 3 thì cho scroll
  if (num === 3) {
    document.body.style.overflow = "hidden";
  }
}
