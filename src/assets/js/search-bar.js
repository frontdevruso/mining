if (document.querySelector('.search-bar__hints')) {
    const searchHintsContainer = document.querySelector('.search-bar__hints');
    const searchInput = document.querySelector('.search-bar input');
    const searchProducts = document.querySelectorAll('.search-bar__hints button');

    searchInput.addEventListener('focus', function() {
        searchHintsContainer.classList.add('active');
    })

    searchInput.addEventListener('blur', function() {
        searchHintsContainer.classList.remove('active');
    })

    searchProducts.forEach(function(product) {
        product.addEventListener('click', function() {
            const productTitle = this.getAttribute('data-product-title')
            searchInput.value = productTitle;
        });
    })
}