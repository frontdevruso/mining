const selectItems = document.querySelectorAll('.partners__select-item');

if(selectItems) {
    selectItems.forEach(function(item) {
        item.addEventListener('click', function() {
            selectItems.forEach(function(item) { item.classList.remove('active')} )
            item.classList.add('active');
        });
    })
}

// WITH Placeholder

const selectBoxBlog = document.querySelector('.select-box');
if (selectBoxBlog) {
    const optionsContainer = document.getElementById("optionsContainerBlog");
    const selected = document.getElementById("selectBoxCurrentBlog");
    const selectArrow = document.getElementById("selectBoxArrowBlog");
    const optionsList = document.querySelectorAll(".option");

    document.addEventListener('click', (event) => {
        let isClickInsideElement = selected.contains(event.target); 
        if (!isClickInsideElement) {
            optionsContainer.classList.remove("active");
            selectArrow.classList.remove("select-box-arrow-opened");
            selected.classList.remove("select-box-current--open");
        }
    });

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
        selectArrow.classList.toggle("select-box-arrow-opened");
        selected.classList.toggle("select-box-current--open");
    });

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            hasSelected = false;
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
            selectArrow.classList.remove("select-box-arrow-opened");
        });
    });
}