const button = document.querySelector("#b");
const bottomRow = document.querySelector(".bottom-row");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

button.addEventListener("click", (e) => {
    e.preventDefault();
    // Thêm transition để trình duyệt biết có hiệu ứng
    button.style.transition = "all 0.6s ease";
    button.style.transformOrigin = "center center";
    button.textContent="CHÚC MỪNG SINH NHẬT MẸ";
    img1.src="https://tse1.mm.bing.net/th/id/OIP.WOfwNGxOqomcaT1UmLjlbgHaHa?pid=Api&P=0&h=180";
    img2.src="img.png";
    img3.src="img.png";

    // ép trình duyệt render lại 1 frame để đảm bảo có hiệu ứng
    void button.offsetWidth;

    // Phóng to mượt
    button.style.transform = "scale(1.001)";
    bottomRow.classList.add("active");
});
