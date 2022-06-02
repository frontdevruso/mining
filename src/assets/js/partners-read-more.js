if(document.querySelectorAll('.partners__wrapper-item a')) {
    document.querySelectorAll('.partners__wrapper-item').forEach(function(item) {
        const btn = item.querySelector('a');
        btn.addEventListener('click', function() {
            btn.classList.add('hide');
            setTimeout(function() {
                item.querySelector('main').classList.add('show');
                btn.classList.add('h-none');
            }, 300);
        });
    });
}