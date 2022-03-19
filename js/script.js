document.addEventListener("DOMContentLoaded", function() {
    // mobile menu
    navToggle.onclick = function() {
        let menu = document.getElementById('header');
        if (menu.className === 'header') {
            menu.className += " show"
        } else {
            menu.className = 'header';
        }
    }

    //
    // link anchors
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function(e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    // form validation
    function isVaildInfo() {
        var emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var telReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        //var pwdReg=/^[a-zA-Z0-9]{6,18}$/;

        var email = document.getElementById("input_2").value;
        var tel = document.getElementById("input_3").value;
        //var pwd=document.getElementById("pwd").value;

        if (emailReg.test(email) && telReg.test(tel)) {
            return true;
        } else {
            return false;
        }
    }

    //
    //burgers section animation
    const animItems = document.querySelectorAll('.anim-items');
    //const animItems767 = document.querySelectorAll('.anim-items767');

    //console.log(animItems);
    if (document.documentElement.clientWidth > 267) {

        if (animItems.length > 0) {
            window.addEventListener("scroll", animOnScroll);

            function animOnScroll(params) {
                for (let index = 0; index < animItems.length; index++) {
                    const animItem = animItems[index];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;

                    let animItemPoint = window.innerHeight - animItemHeight / animStart;

                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }

                    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                        animItem.classList.add('_active');
                    } else {
                        //animItem.classList.remove('_active');
                    }

                }
            }

            function offset(el) {
                var rect = el.getBoundingClientRect(),
                    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
            }
        }
    }



});