document.addEventListener("DOMContentLoaded", () => {
    const allLangSwitchers = document.querySelectorAll('[data-language-switcher]');
    const enBtns = document.querySelectorAll('.lang-switcher__btn--en');
    const ruBtns = document.querySelectorAll('.lang-switcher__btn--ru');

    enBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
           allLangSwitchers.forEach(function(switcher) {
               switcher.setAttribute('data-language-switcher', 'en');
               // HERE SHOULD BE THE CODE WHICH WILL CHANGE LANGUAGE TO English
           });
        });
    })

    ruBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
           allLangSwitchers.forEach(function(switcher) {
               switcher.setAttribute('data-language-switcher', 'ru');
               // HERE SHOULD BE THE CODE WHICH WILL CHANGE LANGUAGE TO Russian
           });
        });
    })
});