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

    // Navbar transparent if in the top

    if(window.scrollY < 100) {
        makeNavbarTransparent()
    }else {
        makeNavbarDark()
    }

    document.addEventListener('scroll', function(e) {
        if(window.scrollY < 100) {
            makeNavbarTransparent()
        }else {
            makeNavbarDark()
        }
    });

    function makeNavbarTransparent() {
        Array.prototype.slice.call(document.getElementById("socialMediaBtns").children)
            .forEach(elem => {
                elem.classList.add('fill-white')
            })
        document.getElementById('navbar').classList.remove('md:bg-gray-200')
        document.getElementById('navbar').classList.add('text-white')
    }

    function makeNavbarDark() {
        Array.prototype.slice.call(document.getElementById("socialMediaBtns").children)
            .forEach(elem => {
                elem.classList.remove('fill-white')
            })
        document.getElementById('navbar').classList.add('md:bg-gray-200')
        document.getElementById('navbar').classList.remove('text-white')
    }


    //Show or Hide Content section

    Array.prototype.slice.call(document.getElementsByClassName('contentBlock'))
        .forEach(block => {
            block.querySelector('.btnContent').addEventListener('click', function (e) {
                e.preventDefault()
                showOrHideContent()
            })

            function showOrHideContent() {
                if(block.querySelector('.contentText').classList.contains('hidden')) {
                    block.querySelector('.contentText').classList.remove('hidden')
                    block.querySelector('.btnContent').text = '_View Less'
                }else {
                    block.querySelector('.contentText').classList.add('hidden')
                    block.querySelector('.btnContent').text = '_View More'
                }
            }
        })


})

