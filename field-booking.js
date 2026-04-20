const fieldForm = document.getElementById("fieldBookingForm");

fieldForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const playersCount = document.getElementById("playersCount").value.trim();
  const day = document.getElementById("day").value;
  const date = document.getElementById("date").value;
  const startTime = document.getElementById("startTime").value;
  const notes = document.getElementById("notes").value.trim();

  

  const message = `مرحباً، أود حجز ملعب في بلستان.

الاسم الكامل: ${fullName}
عدد اللاعبين: ${playersCount}
اليوم: ${day}
التاريخ: ${date}
وقت الحجز : ${startTime}
ملاحظات إضافية: ${notes || "لا توجد"}`;

  const phoneNumber = "9647807060109";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});