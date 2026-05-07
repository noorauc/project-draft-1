document.addEventListener('DOMContentLoaded', () => {
    const tripForm = document.getElementById('tripForm');
    const feedback = document.getElementById('formFeedback');
    const destInput = document.getElementById('destInput');

    if (tripForm) {
        tripForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (destInput.value.trim() === '') return;
            feedback.classList.remove('hidden');
            setTimeout(() => {
                feedback.innerText = `Itinerary for ${destInput.value} is ready in your email.`;
            }, 2000);
        });
    }
});
