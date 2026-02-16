// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Mobile Toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close navbar on link click (mobile)
document.querySelectorAll('.nav-menu li a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animasi Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Form Submit (Basic - Alert for demo)
const contactForm = document.querySelector('.kontak-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah dikirim.');
    });
}

// --- MULTI-LANGUAGE LOGIC ---
const translations = {
    en: {
        nav_home: "Home",
        nav_packages: "Packages",
        nav_gallery: "Gallery",
        nav_about: "About Us",
        nav_contact: "Contact",
        btn_book_nav: "Book Now",
        hero_title: "Explore the Beauty of Bali With Us",
        hero_desc: "Complete tour packages, affordable prices, professional service",
        hero_btn: "View Packages",
        sect_packages: "Bali Tour Packages",
        lbl_duration: "Duration:",
        lbl_dest: "Destination:",
        lbl_facilities: "Facilities:",
        btn_detail: "View Detail",
        sect_gallery: "Bali Destinations Gallery",
        sect_adv: "Our Advantages",
        adv_price: "Affordable Price",
        adv_price_desc: "Competitive prices without compromising quality.",
        adv_driver: "Experienced Driver",
        adv_driver_desc: "Professional and friendly team for a safe trip.",
        adv_car: "Comfortable Car",
        adv_car_desc: "Clean and AC-equipped fleet for your comfort.",
        adv_service: "Professional Service",
        adv_service_desc: "24/7 service committed to customer satisfaction.",
        sect_about: "About Us",
        about_desc: "Harmony Bali Tour is a professional travel agency committed to providing the best travel experience in Bali. With an experienced team, we offer complete tour packages, from daily tours to private trips. We ensure every journey is full of beautiful memories with affordable prices and excellent service.",
        sect_contact: "Contact Us",
        addr_title: "Address:",
        form_name: "Name",
        form_email: "Email",
        form_msg: "Message",
        form_btn: "Send Message",
        footer_copy: "&copy; 2023 Harmony Bali Tour. All rights reserved.",
        // Detail Page
        detail_desc: "Description",
        detail_itinerary: "Itinerary",
        detail_facilities: "Facilities Included",
        detail_wa_btn: "Book This Package via WhatsApp",
        loading: "Loading package details...",
        not_found: "Package not found. <a href='index.html'>Back to Home</a>",
        // Card Specifics (Simple mapping for index)
        card_uluwatu_title: "Bali 1 Day Package (Uluwatu Tour)",
        card_uluwatu_dest: "Uluwatu, Kecak Dance, Jimbaran Beach",
        card_uluwatu_fac: "Transport, Entrance Tickets, Lunch",
        card_2d1n_title: "Bali 2 Days 1 Night Package",
        card_2d1n_dest: "Tanah Lot, Ubud, Tegallalang Rice Terrace",
        card_2d1n_fac: "Hotel, Transport, 3x Meals, Guide",
        card_3d2n_title: "Bali 3 Days 2 Nights Package",
        card_3d2n_dest: "Nusa Dua, Uluwatu, Kintamani, Ubud",
        card_3d2n_fac: "Hotel, Transport, Meals, Guide, Spa",
        card_honey_title: "Bali Honeymoon Package",
        card_honey_dest: "Jimbaran, Ubud, Nusa Penida",
        card_honey_fac: "Resort, Romantic Dinner, Spa, Private Guide",
        card_family_title: "Bali Family Package",
        card_family_dest: "Waterbom, Safari Park, Sanur Beach",
        card_family_fac: "Family Hotel, Transport, Kids Activities",
        card_private_title: "Bali Private Tour Package",
        card_private_dest: "Custom (Ubud, Mt. Batur, etc)",
        card_private_fac: "Private Driver, Guide, VIP Transport"
    },
    id: {
        nav_home: "Beranda",
        nav_packages: "Paket Wisata",
        nav_gallery: "Galeri",
        nav_about: "Tentang Kami",
        nav_contact: "Kontak",
        btn_book_nav: "Pesan Sekarang",
        hero_title: "Jelajahi Keindahan Bali Bersama Kami",
        hero_desc: "Paket wisata lengkap, harga terjangkau, pelayanan profesional",
        hero_btn: "Lihat Paket Wisata",
        sect_packages: "Paket Wisata Bali",
        lbl_duration: "Durasi:",
        lbl_dest: "Destinasi:",
        lbl_facilities: "Fasilitas:",
        btn_detail: "Lihat Detail",
        sect_gallery: "Galeri Destinasi Bali",
        sect_adv: "Keunggulan Kami",
        adv_price: "Harga Terjangkau",
        adv_price_desc: "Paket wisata dengan harga kompetitif tanpa mengurangi kualitas.",
        adv_driver: "Driver Berpengalaman",
        adv_driver_desc: "Tim driver profesional dan ramah untuk perjalanan aman.",
        adv_car: "Mobil Nyaman",
        adv_car_desc: "Armada mobil AC dan nyaman untuk kenyamanan Anda.",
        adv_service: "Pelayanan Profesional",
        adv_service_desc: "Layanan 24/7 dengan komitmen kepuasan pelanggan.",
        sect_about: "Tentang Kami",
        about_desc: "Harmony Bali Tour adalah travel agency profesional yang berkomitmen untuk memberikan pengalaman wisata terbaik di Bali. Dengan tim berpengalaman, kami menawarkan paket wisata yang lengkap, mulai dari tur harian hingga perjalanan pribadi. Kami memastikan setiap perjalanan Anda penuh kenangan indah dengan harga terjangkau dan pelayanan prima.",
        sect_contact: "Kontak Kami",
        addr_title: "Alamat:",
        form_name: "Nama",
        form_email: "Email",
        form_msg: "Pesan",
        form_btn: "Kirim Pesan",
        footer_copy: "&copy; 2023 Harmony Bali Tour. All rights reserved.",
        // Detail Page
        detail_desc: "Deskripsi",
        detail_itinerary: "Itinerary (Jadwal Perjalanan)",
        detail_facilities: "Fasilitas Termasuk",
        detail_wa_btn: "Pesan Paket Ini via WhatsApp",
        loading: "Memuat detail paket...",
        not_found: "Paket tidak ditemukan. <a href='index.html'>Kembali ke Beranda</a>",
        // Card Specifics
        card_uluwatu_title: "Paket Bali 1 Hari (Uluwatu Tour)",
        card_uluwatu_dest: "Uluwatu, Kecak Dance, Pantai Jimbaran",
        card_uluwatu_fac: "Transportasi, Tiket Masuk, Makan Siang",
        card_2d1n_title: "Paket Bali 2 Hari 1 Malam",
        card_2d1n_dest: "Tanah Lot, Ubud, Tegallalang Rice Terrace",
        card_2d1n_fac: "Hotel, Transportasi, Makan 3x, Guide",
        card_3d2n_title: "Paket Bali 3 Hari 2 Malam",
        card_3d2n_dest: "Nusa Dua, Uluwatu, Kintamani, Ubud",
        card_3d2n_fac: "Hotel, Transportasi, Makan, Guide, Spa",
        card_honey_title: "Paket Honeymoon Bali",
        card_honey_dest: "Jimbaran, Ubud, Nusa Penida",
        card_honey_fac: "Resort, Romantis Dinner, Spa, Private Guide",
        card_family_title: "Paket Family Bali",
        card_family_dest: "Waterbom, Safari Park, Pantai Sanur",
        card_family_fac: "Hotel Keluarga, Transportasi, Aktivitas Anak",
        card_private_title: "Paket Private Tour Bali",
        card_private_dest: "Custom (Ubud, Gunung Batur, dll)",
        card_private_fac: "Private Driver, Guide, Transportasi VIP"
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateContent();
}

function updateContent() {
    // Update static elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });

    // Update buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${currentLang}'`)) {
            btn.classList.add('active');
        }
    });

    // Re-render detail if on detail page
    const detailContainer = document.getElementById('tour-detail-container');
    if (detailContainer) {
        renderDetail();
    }
}

// --- LOGIKA HALAMAN DETAIL ---

// Data Paket Wisata (Database Sederhana)
const tourData = {
    'uluwatu': {
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 'Rp 500.000 / pax',
        en: {
            title: 'Bali 1 Day Package (Uluwatu Tour)',
            duration: '1 Day (Full Day)',
            description: 'Enjoy the beauty of South Bali in a full day. This package invites you to visit beautiful beaches, the iconic GWK statue, to enjoying a magical sunset at Uluwatu Temple while watching the Kecak Dance.',
            itinerary: [
                '09:00 - Hotel Pick up',
                '10:00 - Visit Tanjung Benoa (Watersport - Optional)',
                '12:00 - Lunch at Local Resto',
                '13:30 - Garuda Wisnu Kencana (GWK) Cultural Park',
                '15:30 - Melasti Beach / Pandawa Beach',
                '17:00 - Uluwatu Temple & Kecak Dance',
                '19:00 - Seafood Dinner at Jimbaran Beach',
                '21:00 - Back to Hotel'
            ],
            facilities: ['Private AC Transport', 'Entrance Tickets', 'Lunch & Dinner', 'Driver & Fuel', 'Mineral Water']
        },
        id: {
            title: 'Paket Bali 1 Hari (Uluwatu Tour)',
            duration: '1 Hari (Full Day)',
            description: 'Nikmati keindahan Bali Selatan dalam satu hari penuh. Paket ini mengajak Anda mengunjungi pantai-pantai indah, patung ikonik GWK, hingga menikmati sunset magis di Pura Uluwatu sambil menonton Tari Kecak.',
            itinerary: [
                '09:00 - Penjemputan di Hotel',
                '10:00 - Mengunjungi Tanjung Benoa (Watersport - Opsional)',
                '12:00 - Makan Siang di Lokal Resto',
                '13:30 - Garuda Wisnu Kencana (GWK) Cultural Park',
                '15:30 - Pantai Melasti / Pantai Pandawa',
                '17:00 - Pura Uluwatu & Menonton Tari Kecak',
                '19:00 - Makan Malam Seafood di Pantai Jimbaran',
                '21:00 - Kembali ke Hotel'
            ],
            facilities: ['Transportasi AC Privat', 'Tiket Masuk Wisata', 'Makan Siang & Malam', 'Driver & BBM', 'Air Mineral']
        }
    },
    'bali-2d1n': {
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 'Rp 1.200.000 / pax',
        en: {
            title: 'Bali 2 Days 1 Night Package',
            duration: '2 Days 1 Night',
            description: 'Short but memorable vacation. This package includes must-visit destinations like Tanah Lot and the calming nature of Ubud.',
            itinerary: [
                'Day 1: Airport Pickup, Tanah Lot Temple, Seminyak, Hotel Check-in.',
                'Day 2: Ubud Art Market, Tegalalang Rice Terrace, Souvenir Shopping, Airport Drop.'
            ],
            facilities: ['3 Star Hotel (1 Night)', 'Private Transport', '3x Meals', 'Entrance Tickets', 'Airport Transfer']
        },
        id: {
            title: 'Paket Bali 2 Hari 1 Malam',
            duration: '2 Hari 1 Malam',
            description: 'Liburan singkat namun berkesan. Paket ini mencakup destinasi wajib seperti Tanah Lot dan pesona alam Ubud yang menenangkan.',
            itinerary: [
                'Hari 1: Penjemputan Bandara, Pura Tanah Lot, Seminyak, Check-in Hotel.',
                'Hari 2: Ubud Art Market, Tegalalang Rice Terrace, Belanja Oleh-oleh, Drop Bandara.'
            ],
            facilities: ['Hotel Bintang 3 (1 Malam)', 'Transportasi Privat', 'Makan 3x', 'Tiket Wisata', 'Antar Jemput Bandara']
        }
    },
    'bali-3d2n': {
        image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 'Rp 2.500.000 / pax',
        en: {
            title: 'Bali 3 Days 2 Nights Package',
            duration: '3 Days 2 Nights',
            description: 'Best seller package! Explore the beauty of Kintamani with views of Mount Batur and the atmosphere of the traditional Penglipuran village.',
            itinerary: [
                'Day 1: Pickup, Kuta Beach, Sunset Dinner Jimbaran.',
                'Day 2: Penglipuran Village, Kintamani (Mt. Batur View), Tirta Empul.',
                'Day 3: Ulun Danu Bedugul Temple, Joger, Airport Drop.'
            ],
            facilities: ['3 Star Hotel (2 Nights)', 'Private Transport', 'Breakfast, Lunch, Dinner', 'Entrance Tickets', 'Professional Guide']
        },
        id: {
            title: 'Paket Bali 3 Hari 2 Malam',
            duration: '3 Hari 2 Malam',
            description: 'Paket terlaris! Jelajahi keindahan Kintamani dengan pemandangan Gunung Batur dan suasana desa tradisional Penglipuran.',
            itinerary: [
                'Hari 1: Penjemputan, Pantai Kuta, Sunset Dinner Jimbaran.',
                'Hari 2: Desa Penglipuran, Kintamani (View Gunung Batur), Tirta Empul.',
                'Hari 3: Pura Ulun Danu Bedugul, Joger, Drop Bandara.'
            ],
            facilities: ['Hotel Bintang 3 (2 Malam)', 'Transportasi Privat', 'Makan Pagi, Siang, Malam', 'Tiket Wisata', 'Guide Profesional']
        }
    },
    'honeymoon': {
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 'Rp 4.000.000 / couple',
        en: {
            title: 'Bali Honeymoon Package',
            duration: '4 Days 3 Nights',
            description: 'Create unforgettable romantic memories with your partner. Equipped with a romantic dinner and spa treatment.',
            itinerary: [
                'Day 1: Pickup, Check-in Private Pool Villa.',
                'Day 2: Balinese Costume Photo, Melasti Beach, Romantic Dinner Jimbaran.',
                'Day 3: Bedugul Tour, Handara Gate, Wanagiri Hidden Hill.',
                'Day 4: Spa Treatment (2 Hours), Airport Drop.'
            ],
            facilities: ['Private Villa', 'Romantic Dinner', 'Spa Package', 'Private Transport', 'Photo Documentation']
        },
        id: {
            title: 'Paket Honeymoon Bali',
            duration: '4 Hari 3 Malam',
            description: 'Ciptakan kenangan romantis tak terlupakan bersama pasangan. Dilengkapi dengan makan malam romantis dan perawatan spa.',
            itinerary: [
                'Hari 1: Penjemputan, Check-in Villa Private Pool.',
                'Hari 2: Foto Adat Bali, Pantai Melasti, Romantic Dinner Jimbaran.',
                'Hari 3: Bedugul Tour, Handara Gate, Wanagiri Hidden Hill.',
                'Hari 4: Spa Treatment (2 Jam), Drop Bandara.'
            ],
            facilities: ['Private Villa', 'Romantic Dinner', 'Spa Package', 'Transportasi Privat', 'Dokumentasi Foto']
        }
    },
    'family': {
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 'Rp 3.000.000 / pax',
        en: {
            title: 'Bali Family Package',
            duration: '3 Days 2 Nights',
            description: 'Fun kid-friendly vacation. Visiting the best zoo and water park in Bali.',
            itinerary: [
                'Day 1: Pickup, Bali Safari & Marine Park.',
                'Day 2: Waterbom Bali, Nusa Dua Beach, Devdan Show.',
                'Day 3: Souvenir Shopping, Airport Drop.'
            ],
            facilities: ['Family Room Hotel', 'Bali Safari & Waterbom Tickets', 'Meals', 'Comfortable Transport']
        },
        id: {
            title: 'Paket Family Bali',
            duration: '3 Hari 2 Malam',
            description: 'Liburan seru ramah anak. Mengunjungi kebun binatang dan taman bermain air terbaik di Bali.',
            itinerary: [
                'Hari 1: Penjemputan, Bali Safari & Marine Park.',
                'Hari 2: Waterbom Bali, Pantai Nusa Dua, Devdan Show.',
                'Hari 3: Belanja Oleh-oleh Krisna, Drop Bandara.'
            ],
            facilities: ['Hotel Family Room', 'Tiket Bali Safari & Waterbom', 'Makan', 'Transportasi Nyaman']
        }
    },
    'private': {
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        price: 'Mulai Rp 5.000.000',
        en: {
            title: 'Bali Private Tour Package',
            duration: 'Flexible',
            description: 'Determine your own dream destination. We provide luxury fleets and VIP services.',
            itinerary: [
                'Itinerary arranged by request (Custom).',
                'Consult your desired destination with our team.'
            ],
            facilities: ['Luxury Car (Alphard/Pajero)', 'Private Guide', 'Time Flexibility', 'VIP Service']
        },
        id: {
            title: 'Paket Private Tour Bali',
            duration: 'Fleksibel',
            description: 'Tentukan sendiri destinasi impian Anda. Kami sediakan armada mewah dan pelayanan VIP.',
            itinerary: [
                'Itinerary disusun berdasarkan permintaan (Custom).',
                'Konsultasikan destinasi yang Anda inginkan dengan tim kami.'
            ],
            facilities: ['Mobil Mewah (Alphard/Pajero)', 'Private Guide', 'Fleksibilitas Waktu', 'Layanan VIP']
        }
    }
};

// Fungsi Render Detail (Dipisah agar bisa dipanggil ulang)
function renderDetail() {
    const detailContainer = document.getElementById('tour-detail-container');
    
    // Cek apakah kita berada di halaman detail dan container ada
    if (detailContainer) {
        const params = new URLSearchParams(window.location.search);
        const tourId = params.get('id');
        const data = tourData[tourId];

        if (data) {
            const content = data[currentLang]; // Ambil konten sesuai bahasa
            const labels = translations[currentLang];

            // Buat list itinerary HTML
            const itineraryHtml = content.itinerary.map(item => `<li>${item}</li>`).join('');
            const facilitiesHtml = content.facilities.map(item => `<li>${item}</li>`).join('');
            
            // Pesan WhatsApp Pre-filled
            const waMessage = `Halo, saya tertarik memesan ${content.title}. Bisa minta info lebih lanjut?`;
            const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(waMessage)}`;

            detailContainer.innerHTML = `
                <div class="detail-header-content">
                    <h2>${content.title}</h2>
                    <p class="detail-price">${data.price}</p>
                </div>
                <img src="${data.image}" alt="${content.title}" class="detail-hero-img">
                <div class="detail-info">
                    <h3>${labels.detail_desc}</h3>
                    <p>${content.description}</p>
                    
                    <h3>${labels.detail_itinerary}</h3>
                    <ul class="detail-list">${itineraryHtml}</ul>

                    <h3>${labels.detail_facilities}</h3>
                    <ul class="detail-list check-list">${facilitiesHtml}</ul>

                    <div class="detail-action">
                        <a href="${waLink}" class="btn-whatsapp-large" target="_blank">${labels.detail_wa_btn}</a>
                    </div>
                </div>
            `;
        } else {
            detailContainer.innerHTML = `<p style="text-align:center; padding: 50px;">${translations[currentLang].not_found}</p>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent(); // Set bahasa awal
});