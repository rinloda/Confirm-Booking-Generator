// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the confirm booking
const villaName = words.get('villa'); 
/* <span class="word" title="id: villa">${villaName}</span> */
const guestName = words.get('guestname');
const phoneNumber = words.get('phonenumber');

const guestNumber = words.get('guestnumber');
const nightNumber = words.get('nightnumber');

const checkIn = words.get('checkindate');
const checkOut = words.get('checkoutdate');



const totalPay = words.get('totalpay');
const deposit = words.get('deposit');
const remainPayment = words.get('remainpayment');


const bbq = words.get('bbq');
const extraBed = words.get('extrabed');
const carOrder = words.get('carorder');
const anotherNote = words.get('note')

// The string containing HTML and text which will populate the story.html page
const confirmBooking = `
<p>Villa <span class="word" title="id: villa">${villaName}</span><br>
Tên khách: <span class="word" title="id: guestname">${guestName}</span><br>
Số điện thoại: <span class="word" title="id: phonenumber">${phoneNumber}</span><br>
Số lượng khách: <span class="word" title="id: guestnumber">${guestNumber}</span> người<br>
Số lượng đêm: <span class="word" title="id: nightnumber">${nightNumber}</span> đêm<br>
Check-in: 3:00PM ngày <span class="word" title="id: checkindate">${checkIn}</span><br>
Check-out: 12:00PM ngày <span class="word" title="id: checkoutdate">${checkOut}</span><br>
Tổng tiền: <span class="word" title="id: totalpay">${totalPay}</span><br>
Đã cọc: <span class="word" title="id: deposit">${deposit}</span><br>
Còn lại: <span class="word" title="id: remainpayment">${remainPayment}</span><br>
Ghi chú: <span class="word" title="id: bbq">${bbq}</span>/<span class="word" title="id: extrabed">${extraBed}</span><br>
<span class="word" title="id: note">${anotherNote}</span><br>
Villa xin cám ơn và hẹn gặp lại anh/chị<br>
Sdt: 0905 618 178 ( quản lý villa)<br>
Lưu ý:<br>
1. Sử dụng bếp vui lòng dọn, rửa lại giúp Villa. Không sẽ bị phụ thu phí dọn dẹp tuỳ theo mức độ từ 500k- 1000k<br>
2. Mọi trường hợp cancel booking không hoàn cọc.<br>
3. Không dùng chất cấm, chất cháy nổ trong Villa<br>
4. Không được làm ồn sau 21h. ( Khách thuê loa nếu cần dùng)<br>
5. Villa có bếp, chén bát, Loa nhẹ nhàng đến 21h ( khách tự mang loa/thuê loa từ villa). Khách mang gia vị và thức ăn<br>
6. Bảo quản cơ sở vật chất của villa, check in mang theo đầy đủ  giấy chứng minh ạ. Hư hỏng đền bù theo giá niên yết </li>
7. Dùng lò Bbq phụ thu 100k (lò và than)<br>
8. Không mang vật nuôi vào villa.<br>
9. Hồ bơi chung khu villa<br>
</p>
`
// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `Booking of <span class="word" title="id: guestname">${guestName}</span>`;

// Grabbing the confirmBooking element
const confirmEl = document.getElementById('confirmBooking');
confirmEl.innerHTML = confirmBooking;
