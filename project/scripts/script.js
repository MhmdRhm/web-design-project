let btn = document.getElementById('btnBuy');
let spinner = document.getElementById('spinner');
let counter = document.querySelector('.cart-counter');
let rmeChk = document.getElementById("rememberMeChk");
let btnLogin = document.getElementById('loginBtn');

btn?.addEventListener('click', function(){
    this.disabled = true;
    spinner.hidden = false;

    setTimeout(() => {
        this.disabled = false;
        spinner.hidden = true;
        let current = +counter.textContent;
        console.log(counter.textContent);
        counter.textContent = (current + 1).toString();
    }, 2000);
});

rmeChk.addEventListener('change', function() {
    if(this.checked) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }
});