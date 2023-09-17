const serviceSelect = document.getElementById('service');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const bookButton = document.getElementById('book-button');
const bookingsList = document.getElementById('bookings');

bookButton.addEventListener('click', () => {
    const service = serviceSelect.value;
    const date = dateInput.value;
    const time = timeInput.value;

    if (service && date && time) {
        const bookingItem = document.createElement('li');
        bookingItem.textContent = `Hizmet: ${service}, Tarih: ${date}, Saat: ${time}`;
        bookingsList.appendChild(bookingItem);

     
        serviceSelect.value = '';
        dateInput.value = '';
        timeInput.value = '';
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});
// ... Diğer kodlar ...

const reviewForm = document.getElementById('review-form');
const ratingSelect = document.getElementById('rating');
const commentTextarea = document.getElementById('comment');
const submitReviewButton = document.getElementById('submit-review');
const reviewsList = document.getElementById('reviews-list');

submitReviewButton.addEventListener('click', () => {
    const rating = ratingSelect.value;
    const comment = commentTextarea.value;

    if (rating && comment) {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
            <p class="rating">Değerlendirme: ${rating} Yıldız</p>
            <p class="comment">${comment}</p>
        `;
        reviewsList.appendChild(reviewItem);


        // Verileri temizle
        ratingSelect.value = '';
        commentTextarea.value = '';
    } else {
        alert('Lütfen değerlendirme ve yorum alanlarını doldurun.');
    }
});
