// kita akan mencoba menggunakan vanilla javascript (bukan jquery)

// mengelola dropdown agar terbuka saat dihover dan tertutup saat mouse keluar
const dropdownHover = document.getElementById("dropdownHover");
const dropdownMenu = document.getElementById("dropdownMenu"); 

// tampilkan dropdown saat krusor diarahkan
dropdownHover.addEventListener("mouseover", function () {
    dropdownMenu.classList.add("show");
});

// sembunyikan dropdown saat krusor tidak diarahkan
dropdownHover.addEventListener("mouseleave", function () {
    dropdownMenu.classList.remove("show");
});

// card slider
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');
const listboxWrapper = document.querySelector('.listbox-wrapper');
const items = document.querySelectorAll('.list-item');
// Tentukan lebar tiap item dan total jumlah item
const itemWidth = items[0].offsetWidth;
const totalItems = items.length;
let scrollPosition = itemWidth;
// clone item pertama dan terakhir
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);
// tambahkan item clone ke awal dan akhir
listboxWrapper.appendChild(firstClone);
listboxWrapper.insertBefore(lastClone, items[0]);
// atur ulang posisi scroll
listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;


// scroll ke kiri
scrollLeftButton.addEventListener('click', () => {
    scrollPosition -= itemWidth;
    listboxWrapper.style.transition = 'transform 0.5s ease';
    listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    // jika mencapai item terakhir, reset ke item asli terakhir
    if (scrollPosition <= 0) {
        setTimeout(() => {
            listboxWrapper.style.transition = 'none';
            scrollPosition = totalItems * itemWidth;    
            listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        }, 100);
    }
});

// scroll ke kanan  
scrollRightButton.addEventListener('click', () => {
    scrollPosition += itemWidth;
    listboxWrapper.style.transition = 'transform 0.5s ease';
    listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    // jika mencapai item terakhir, reset ke item asli pertama
    if (scrollPosition >= (totalItems + 1) * itemWidth) {
        setTimeout(() => {
            listboxWrapper.style.transition = 'none';
            scrollPosition = itemWidth;
            listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        }, 100);
    }
});

// form listener
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;
    // lanjutkan dengan logika penanganan formulir
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Subscribe:', subscribe);
    // reset the form fields
    form.reset();
});

// sweetalert2 checkbox
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('click', () => {
    const isSubscribed = subscribe.checked;

    swal.fire({
        title: 'Are you sure?',
        text: 'you want to submit the form and subscribe to our newsletter?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!',
    }).then((result) => {
        if (result.isConfirmed) {
            // Menggubah status checkbox menjadi sesuai dengan hasil konfirmasi
            subscribe.checked = isSubscribed;

            Swal.fire({
                title: 'Submitted!',
                text: `You ${subscribe.checked ? 'have' : 'have not'} subscribed to thr newsletter.`,
                icon: 'success',
            });
            // lanjutkan dengan logika penanganan formulir
            console.log('Email:', 'exampele@example.com');
            console.log('Message:', 'This is a test message');
            console.log('Subscribe:', subscribe.checked);
        } else {
            // jika dibatalkan, kembalikan status checkbox ke semula
            subscribe.checked = !isSubscribed;
        }
    });
}); 

// sweetalert2 submit button
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // validasi form
    if (!email || !message) {
        swal.fire({
            title: 'Oops!',
            text: 'Please fill in all the required fields',
            icon: 'error',
        });
        return;
    }

    swal.fire({
        title: 'Are you sure?',
        text: 'you want to submit the form ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!',
    }).then((result) => {
        if (result.isConfirmed) {
            swal.fire({
                title: 'Submitted!',
                text: `You ${subscribe ? 'have' : 'have not'} submit form.`,
                icon: 'success',
            });
            // lanjutkan dengan logika penanganan formulir
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('subscribe:', subscribe.checked);

            // reset the form fields
            form.reset();
        } else {
            // jika dibatalkan, kembalikan status checkbox ke semula
            document.getElementById('subscribe').checked = subscribe;
        }
    });
});


// footer
// get all the tab links
const tabLinks = document.querySelectorAll('#footer-tabs .tab-link');
// get all the tab content divs
const tabContents = document.querySelectorAll('#footer-tabs-content .tab-pane');

// add click event listener to each tab links
tabLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        // remove active class from all tab links
        tabLinks.forEach(l => l.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('show', 'active'));
            

            // add active class to the clicked tab link
            link.classList.add('active');
            tabContents[index].classList.add('show', 'active');
    });
});

