window.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const roomFromURL = params.get("room");
  const roomSelect = document.getElementById("roomNumber");

  if (roomFromURL && roomSelect) {
    for (let i = 0; i < roomSelect.options.length; i++) {
      if (roomSelect.options[i].value === roomFromURL) {
        roomSelect.selectedIndex = i;
        break;
      }
    }
  }
});
const form = document.getElementById("bookingForm");
const params = new URLSearchParams(window.location.search);
const roomFromURL = params.get("room");

if (roomFromURL) {
  document.getElementById("roomNumber").value = roomFromURL;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const roomNumber = document.getElementById("roomNumber").value;
  const fullName = document.getElementById("fullName").value.trim();
  const peopleCount = document.getElementById("peopleCount").value.trim();
  const day = document.getElementById("day").value;
  const date = document.getElementById("date").value;
  const startTime = document.getElementById("startTime").value;
  const notes = document.getElementById("notes").value.trim();

  if (Number(peopleCount) <= 3) {
    alert("الغرف الخاصة مخصصة للمجموعات التي يزيد عددها عن 3 أشخاص فقط.");
    return;
  }

  

  const message =
`مرحباً، أود حجز غرفة في بلستان.

رقم الغرفة: ${roomNumber}
الاسم الكامل: ${fullName}
عدد الأشخاص: ${peopleCount}
اليوم: ${day}
التاريخ: ${date}
وقت الحجز : ${startTime}
ملاحظات إضافية: ${notes || "لا توجد"}`;

  const phoneNumber = "9647807060109"; // ضع رقم واتساب بلستان هنا بدون +
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});