// ===== Mobile Menu =====
const menuBtn = document.getElementById("menu-open");
/*🔹 جلب زر القائمة (أيقونة الثلاثة خطوط ☰) من الـ HTML
  🔹 نخزّنه بمتغير اسمه menuBtn*/
menuBtn.addEventListener("click", () => {
    /*🔹 إضافة مستمع حدث
🔹 يعني: عند الضغط على الزر*/
    document.body.classList.toggle("menu-open");
    /*🔹 إضافة أو إزالة كلاس menu-open من <body>
🔹 هذا الكلاس يتحكم بفتح وإغلاق القائمة في CSS (right: 0 / -100%)*/
});

// ===== Dark Mode =====
/*const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.innerHTML = document.body.classList.contains("dark")
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
});*/

/* اضافي */
const themeToggle = document.getElementById("theme-toggle");
//🔹🔹 جلب زر الدارك مود و ربط زر الدارك مود بالكود

// عند تحميل الصفحة
if (localStorage.getItem("theme") === "dark") {
    // 🔹 عند تحميل الصفحة
    //🔹 فحص: هل المستخدم اختار الدارك مود سابقًا؟
    document.body.classList.add("dark");
    //🔹 إذا نعم → تفعيل الدارك مود مباشرة
}

// عند الضغط على الزر
themeToggle.addEventListener("click", () => {
    //🔹 تنفيذ كود عند الضغط على زر الدارك مود
    document.body.classList.toggle("dark");
    //🔹 تبديل الوضع:
    //من عادي → داكن
    //من داكن → عادي

    //🔹 حفظ الوضع المختار
    if (document.body.classList.contains("dark")) {

        //🔹 التحقق إذا الدارك مود مفعّل
        localStorage.setItem("theme", "dark");
        //🔹 حفظ الاختيار كـ dark
    } else {
        localStorage.setItem("theme", "light");
    }
    //🔹 حفظ الوضع العادي
});
/*لهون*/

// ===== Testimonials Slider =====
//▶️ زر التالي
const slides = document.querySelector(".slides");
//🔹 جلب العناصر
//🔹 العنصر الذي يحتوي كل التعليقات
const next = document.querySelector(".next");
//🔹 زر السهم اليمين
const prev = document.querySelector(".prev");
//🔹 زر السهم اليسار
let index = 0;
//🔹 متغير لتتبع أي تعليق ظاهر حاليًا

next.addEventListener("click", () => {
    //🔹 عند الضغط على السهم اليمين
    index++;
    //🔹 الانتقال للتعليق التالي
    if (index > 3) index = 0;
    //🔹 إذا وصلنا لآخر تعليق:
    //➡️ نرجع لأول واحد (Loop)
    slides.style.transform = `translateX(-${index * 320}px)`;
    //🔹 تحريك السلايدر أفقياً
    //🔹 320px = عرض كل بطاقة تعليق
});

//◀️ زر السابق
prev.addEventListener("click", () => {
    //🔹 عند الضغط على السهم اليسار
    index--;
    if (index < 0) index = 3;
    slides.style.transform = `translateX(-${index * 320}px)`;
});
