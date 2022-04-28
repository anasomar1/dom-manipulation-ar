// *** اختيار العناصر

// عن طريق الآي دي
const header = document.getElementById("header");
// عن طريق query selector
const paragraph = document.querySelector("p");
const paragraph2 = document.querySelector(".paragraph");
const paragraphs = document.querySelectorAll("p");
const headerById = document.querySelector("#header");
const list = document.querySelector("ul");

// *** إنشاء واضافة وحذف العناصر
const body = document.body;
const h1 = document.createElement("h1"); // لإنشاء عنصر
body.append("اضافة من جافاسكريبت"); // لإضافة عناصر أو كلام
body.appendChild(h1); // لإضافة عنصر
paragraph.remove(); // لحذف عنصر

// *** تعديل محتوى العناصر
headerById.textContent = "تم التعديل على الترويسة";
headerById.innerText = "تم التعديل مرة اخرى";
headerById.innerHTML = "<strong>نص غامق</strong>";

// *** تعديل سمات العناصر
const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1000,c_scale,q_auto/cnnarabic/2020/09/27/images/166028.jpg"
);
body.appendChild(img);

// *** تعديل class العناصر
headerById.classList.add("red");
paragraph2.classList.remove("paragraph");

// *** تعديل ال Styling
list.style.backgroundColor = "green";
