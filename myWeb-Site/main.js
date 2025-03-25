import { langSwitcher } from "/src/js/languageSwitcher.js";
import { setupResume } from "/src/js/resumeDownload.js";
import { notification } from "/src/js/izitoast.js";
import { sendMessageToEmail } from "/src/js/sendMessage.js";


window.addEventListener('DOMContentLoaded', async () => {
    langSwitcher();
    setupResume()
    notification()
    sendMessageToEmail()
});