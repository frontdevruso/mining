const allPrivacyBtns = document.querySelectorAll('[data-article]');
const allArticles = document.querySelectorAll('.privacy__articles article');
if (allPrivacyBtns) {
    allPrivacyBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            allPrivacyBtns.forEach(function(everyBtn) { everyBtn.classList.remove('active')});
            btn.classList.add('active');
            allArticles.forEach(function(everyBtn) { everyBtn.classList.remove('active')});
            document.getElementById(`${this.getAttribute('data-article')}`).classList.add('active');
        });
    });
}