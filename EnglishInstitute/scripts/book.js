document.addEventListener('DOMContentLoaded', function() {
    const bookButtons = document.querySelectorAll('.book-btn');
    const modal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModal');
    const teacherNameElement = document.getElementById('teacherName');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const paymentInfo = document.getElementById('paymentInfo');
    const paymentInstructions = document.getElementById('paymentInstructions');
    const nextStep1 = document.getElementById('nextStep1');
    const nextStep2 = document.getElementById('nextStep2');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const emailBtn = document.getElementById('email-btn');
    let selectedAmount = null;
    let selectedDate = null;
    let selectedPaymentMethod = null;

    // Event listener for booking buttons
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const teacherName = this.getAttribute('data-teacher');
            teacherNameElement.textContent = teacherName;
            modal.style.display = 'flex';  // Show the modal
            step1.style.display = 'block';
            step2.style.display = 'none';
            step3.style.display = 'none';
            nextStep1.classList.remove('hidden');
            paymentInstructions.classList.add('hidden');
        });
    });

    // Event listener for closing the modal
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';  // Hide the modal
    });

    // Step 1: Handle amount and date selection
    const amountOptions = document.querySelectorAll('.amount-option');
    const bookingDateInput = document.getElementById('bookingDate');

    amountOptions.forEach(option => {
        option.addEventListener('change', function() {
            selectedAmount = this.value;
        });
    });

    bookingDateInput.addEventListener('change', function() {
        selectedDate = this.value;
    });

    // Show next button only when both amount and date are selected
    nextStep1.addEventListener('click', function() {
        if (selectedAmount && selectedDate) {
            step1.style.display = 'none';
            step2.style.display = 'block';
            nextStep1.classList.add('hidden');
            nextStep2.classList.remove('hidden');
        } else {
            alert("Please select both amount and date.");
        }
    });

    // Step 2: Handle payment method selection
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            selectedPaymentMethod = this.value;
            if (this.value === 'orange') {
                paymentInfo.textContent = 'Please pay to: +243 843-383-352 (Orange Money)';
            } else if (this.value === 'mpesa') {
                paymentInfo.textContent = 'Please pay to: +243 830-526-277 (M-Pesa)';
            }
        });
    });

    // Show next button only when a payment method is selected
    nextStep2.addEventListener('click', function() {
        if (selectedPaymentMethod) {
            step2.style.display = 'none';
            step3.style.display = 'block';
            nextStep2.classList.add('hidden');
            paymentInstructions.classList.remove('hidden');
        } else {
            alert("Please select a payment method.");
        }
    });

    // Send the email
    emailBtn.addEventListener('click', function() {
        const emailBody = `I have booked a session with ${teacherNameElement.textContent}.\nAmount: $${selectedAmount}\nDate: ${selectedDate}\nPayment Method: ${selectedPaymentMethod}`;
        emailBtn.href = `mailto:ampikalgede@gmail.com?subject=Session Booking&body=${encodeURIComponent(emailBody)}`;
    });

    // Close the modal if clicked outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
