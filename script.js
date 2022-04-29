// *** اختيار العناصر
const headerById = document.getElementById("header"); // عن طريق الآي دي
const paragraph = document.querySelector("p"); // عن طريق اسم العنصر
const paragraph2 = document.querySelector(".paragraph"); // عن طريق الكلاس
const parahraphs = document.querySelectorAll("p"); // تحديد كافة العناصر
const header = document.querySelector("#header"); // عن طريق الآي دي
const item1 = document.querySelector("ul li"); // عناصر بداخل عناصر
const itemsList = document.querySelector("ul");

// *** إنشاء، اضافة وحذف العناصر
const body = document.body;
const h1 = document.createElement("h1"); // انشاء عنصر
body.appendChild(h1); // اضافة عنصر
body.append("تمت الاضافة عن طريق جافا سكريبت"); // اضافة عنصر او كلام
paragraph.remove();

// تعديل محتوى العناصر
headerById.textContent = "ترويسة معدلة"; //تعديل النص
headerById.innerText = "ترويسة معدلة مرة اخرى"; // تعديل النص
headerById.innerHTML = "<strong> ترويسة </strong>"; // تعديل ال HTML

// تعديل سمات العناصر
const img = document.createElement("img");
body.appendChild(img);
img.src = // تعديل السمة
  "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1000,c_scale,q_auto/cnnarabic/2020/09/27/images/166028.jpg";

// تعديل الكلاس للعناصر
paragraph2.classList.remove("paragraph"); // حذف كلاس
itemsList.classList.add("red"); // اضافة كلاس

// تعديل styling للعناصر
headerById.style.backgroundColor = "green"; // تعديل لون الخلفية
const box = document.querySelector(".box");
box.style.backgroundColor = "yellow";
box.style.width = "100px"; // تعديل العرض
box.style.height = "100px"; // تعديل الارتفاع
