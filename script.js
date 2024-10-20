// Danh sách các lời chúc
const messages = [
    "Chúc bạn luôn xinh đẹp và tràn đầy năng lượng!",
    "Cảm ơn bạn vì đã luôn tỏa sáng và truyền cảm hứng!",
    "Chúc bạn một ngày 20/10 thật hạnh phúc và nhiều yêu thương!",
    "Chúc bạn luôn mạnh mẽ và thành công trong mọi việc bạn làm!",
    "Bạn là điều tuyệt vời nhất của ngày hôm nay!"
];

// Hiển thị lời chúc ngẫu nhiên khi bấm nút
document.getElementById('congratulateBtn').addEventListener('click', function() {
    var messageDiv = document.getElementById('message');
    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Hiển thị lời chúc
    document.getElementById('randomMessage').innerText = randomMessage;

    // Hiện/ẩn lời chúc với hiệu ứng
    messageDiv.classList.toggle('hidden');
    if (!messageDiv.classList.contains('hidden')) {
        messageDiv.style.animation = "fadeIn 1.5s ease";
    }

    // Tạo trái tim bay mỗi khi nhấn nút
    createFloatingHearts();
});

// Hàm tạo trái tim bay
function createFloatingHearts() {
    const heartContainer = document.getElementById('heartContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Vị trí ngẫu nhiên cho trái tim
    heart.style.left = Math.random() * 100 + 'vw'; // Ngang ngẫu nhiên
    heart.style.bottom = '0'; // Luôn xuất hiện từ dưới

    // Thêm trái tim vào container
    heartContainer.appendChild(heart);
    
    // Xóa trái tim sau khi bay lên (3 giây)
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Hàm tạo trái tim bay ngẫu nhiên từ dưới lên
function randomFloatingHearts() {
    setInterval(() => {
        createFloatingHearts();
    }, 2000); // Cứ mỗi 2 giây tạo một trái tim bay lên
}

// Gọi hàm để trái tim bay tự động
randomFloatingHearts();
