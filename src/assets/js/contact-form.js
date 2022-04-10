document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        const formPhone = document.querySelector('[data-validate-field="tel"]');
        const formName = document.querySelector('[data-validate-field="name"]');
        const formMail = document.querySelector('[data-validate-field="mail"]');
        const formCheckbox = document.querySelector('[data-validate-field="checkbox"]');
        const formCheckboxWrapper = document.querySelector('#policyCheckboxWrapper');
    
        const formAllInput = document.querySelectorAll('[data-validate-field]');
        const contactFormSubmitBtn = document.getElementById('contactFormBtn');
    
        let regx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
        
        formAllInput.forEach(function(item) {
            item.addEventListener('focus', function() {
                item.classList.remove('g-input-error');
                item.classList.remove('policy-error');
            })
        });
        
        formCheckbox.addEventListener('change', function() {
            if(this.checked) {
                formCheckboxWrapper.classList.remove('policy-error');
            }
        });

        const thankYou = () => document.querySelector('.thx__message h2 span').innerHTML = `, ${formName.value}`;
    
        contactFormSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            let errCount = 0;
            const formCheckbox = document.querySelector('[data-validate-field="checkbox"]');

            if (formName.value.length === 0) {
                formName.classList.add('g-input-error');
                errCount++;
            } else { formName.classList.remove('g-input-error') }

            if (formMail.value.length === 0 || !regx.test(formMail.value)) {
                formMail.classList.add('g-input-error');
                errCount++;
            } else { formMail.classList.remove('g-input-error') }
    
            if (formPhone.value.length >= 24 || formPhone.value.length === 0 || formPhone.value.length < 15) {
                formPhone.classList.add('g-input-error');
                errCount++;
            } else { formPhone.classList.remove('g-input-error') }

            if (formCheckbox.checked == false) {
                errCount++;
                formCheckboxWrapper.classList.add('policy-error');
            } else { formCheckbox.classList.remove('policy-error') }

            if (errCount === 0) {
                document.querySelector('.card360deg').classList.add('card360deg--active');
                thankYou();
                // HERE YOU CAN ADD A AJAX REQUEST TO SEND THE FORM
                console.log(errCount);
            }
        });
    }
});