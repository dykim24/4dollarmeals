//섹션 1: 햄버거 버튼

const toggle = document.querySelector(".toggle-button");
const nav = document.querySelector(".navbar-links");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("scroll", () => {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
    }
});

// 섹션2: 이미지 슬라이드
const container = document.querySelector("#slide");
const pics = [`마크정식.png`, "밴쯔정식.png", "불닭게티1.png", "불닭게티2.png", "불새라면1.png", "불새라면2.png", "사리곰탕만둣국.png", "오지치즈후라이.png", "틈새칼국수1.png", "틈새칼국수2-2.png"];

container.style.backgroundImage = `url(images/${pics[0]})`;

const arrows = document.querySelectorAll(".arrow");
let i = 0;

arrows.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        if (e.target.id === "left") {
            i--;
            if (i < 0) {
                i = pics.length - 1;
            }
        }
        else if (e.target.id == "right") {
            i++;
            if (i >= pics.length) {
                i = 0;
            }
        }
        container.style.backgroundImage = `url(images/${pics[i]})`;
    });
});