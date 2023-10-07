const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  textarea.select();
  let textvalue = textarea.value;

  navigator.clipboard.writeText(textvalue);
  copyBtn.innerHTML = "کپی شد ";
  copyBtn.style.backgroundColor = "#03A9F4";

  setTimeout(() => {
    copyBtn.innerHTML = "کپی کن";
    copyBtn.style.backgroundColor = "#B3E5FC";
  }, 1500);
});
