document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll on clicking on menu links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            })
            closeMobileNavbar()
        })
    })

    // Mobile menu display after click

    var mobileOpenMenuBtn = document.getElementById("mobileOpenMenuBtn")
    var mobileCloseMenuBtn = document.getElementById("mobileCloseMenuBtn")
    var mobileMenu = document.getElementById("mobileMenu")

    mobileOpenMenuBtn.addEventListener('click', function() {
        openMobileNavbar()
    })

    mobileCloseMenuBtn.addEventListener('click', function() {
       closeMobileNavbar()
    })
    

    function openMobileNavbar() {
        mobileMenu.classList.add('-right-0')
        mobileMenu.classList.remove('-right-2/3')
    }
    function closeMobileNavbar() {
        mobileMenu.classList.add('-right-2/3')
        mobileMenu.classList.remove('-right-0')
    }

})
