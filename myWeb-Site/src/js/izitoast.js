import * as emailjs from "emailjs-com"; 
import "izitoast/dist/css/iziToast.min.css";
import * as iziToast from "izitoast";
import i18next from "/node_modules/i18next/dist/esm/i18next.js";


export function notification() {
    const currentLang = i18next.language;

    iziToast.show({
        title: currentLang === "ua" ? "Ви можете змінити мову на Eng" : "U can change language to Ukrainian",
        message: currentLang === "ua"
            ? "Якщо мова Uk - завантажується українське резюме, якщо Eng - англійське резюме."
            : "If the language is Eng, an English resume is downloaded if the language is Uk, the Ukrainian resume is downloaded.",
        position: "topRight",
        timeout: 10000,
    });
}
