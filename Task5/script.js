const text = document.getElementById("text");
const maxChars = 20;


if (text.innerHTML.length > maxChars) {
  const shortText = text.innerHTML.substr(0, maxChars) + "...";
  text.innerHTML = shortText;

  
  const readMoreBtn = document.createElement("span");
  readMoreBtn.innerHTML = "Read More";
  readMoreBtn.id = "read-more";
  text.parentNode.insertBefore(readMoreBtn, text.nextSibling);

  
  readMoreBtn.addEventListener("click", function () {
    text.innerHTML = longText;
    readLessBtn.style.display = "inline";
    readMoreBtn.style.display = "none";
  });

  
  const readLessBtn = document.createElement("span");
  readLessBtn.innerHTML = "Read Less";
  readLessBtn.id = "read-less";
  readLessBtn.style.display = "none";
  text.parentNode.insertBefore(readLessBtn, text.nextSibling);

  
  readLessBtn.addEventListener("click", function () {
    text.innerHTML = shortText;
    readMoreBtn.style.display = "inline";
    readLessBtn.style.display = "none";
  });
}


text.addEventListener("mouseover", function () {
  text.style.cursor = "pointer";
});
//у меня не получилось зделать но по функции все правильно там все через проверку я не понимаю почему оно не работает 