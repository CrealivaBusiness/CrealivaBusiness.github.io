// script.js
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    const viewDetailBtns = document.querySelectorAll('.view-detail-btn');
    
	// Variabel baru untuk overlay gambar
    const fullImageOverlay = document.getElementById('full-image-overlay');
    const fullImage = document.getElementById('full-image');
    const overlayCloseBtn = document.getElementById('overlay-close-btn');
	
    // Data proyek (Anda bisa kustomisasi ini)
    const projects = {
        1: {
            title: "Landing Page Design Citra Kuliner - Desember 2025",
            description: "This project focused on designing a high-converting landing page for Citra Kuliner to support their digital marketing efforts. The main challenge was presenting diverse catering services in a clear and persuasive layout while maintaining brand consistency. The solution involved structuring a conversion-driven layout with clear value propositions, strong call-to-action placement, and visual hierarchy optimized for user engagement and lead generation. Check This Link for more detail up to date:",
            images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
                "https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/nasibakulpost.jpg?raw=true",
                "https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true",
				"https://github.com/PolluxTheGreatStar/PolluxTheGreatStar.github.io/blob/main/hari%20anak%20nasional.jpg?raw=true"
            ]
        },
        2: {
            title: "Marketplace Layout Design Citra Kuliner - Oktober 2025",
            description: "This marketplace layout design aimed to improve product visibility and user navigation for Citra Kuliner’s online marketplace presence. The primary issue was overcrowded product information that reduced user focus and purchase intent. To address this, the layout was redesigned with cleaner product grouping, improved spacing, and a more intuitive browsing flow, resulting in a more user-friendly and conversion-oriented marketplace experience. Check This Link for more detail up to date: https://shopee.co.id/citrakulinerid ",
            link: "https://www.arindafood.com/",
			images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/kue%20kukusan%20nusantara.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Paket%20Bento%20Anak%20Citra%20Kuliner.jpg?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Slide%201%20Tumini%20Citra%20Kuliner.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Tumpeng%20Premium%201.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Liwet%20Bakul%20Custom%20harga%20citra%20kuliner%201.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Kebuli%20kambing.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/asinan%20betawi%201.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Cover%20Promo%20Tumpeng%20250K.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Promo%20tumpeng%20hari%20guru.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/banner%20citra%20kuliner%2012.12%20promo.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Gorengan%20Tampah%201.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Pecel%20Sayur%20Citra%20Kuliner1.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Paket%20Liwet%20Gulung%20Citra%20Kuliner.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Rujak%20Tampah.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/promo%20awal%20tahun%20citra%20kuliner%201.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Menu%20Takjil%20Citra%20Kuliner.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Promo%20natal%20citra%20kuliner-min.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Imlek%202026%20Kue%20Tampah%20Citra%20Kuliner%201.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Imlek%202026%20Kue%20Tampah%20Citra%20Kuliner%207.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Rebusan%20Tampah%20citra%20kuliner%201.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Menu%20Nasi%20Besek%20%20Citra%20Kuliner.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/citrakulinermld/Fruit%20Platter%20Citra%20Kuliner.png?raw=true"
            ]
        },
        3: {
            title: "Interior Office 3D Modelling & Visualization - November 2025",
            description: "This project involved creating a realistic 3D interior office visualization to help the client better understand spatial planning and design intent before execution. The challenge was translating conceptual ideas into a clear and immersive visual representation. The solution was achieved through accurate 3D modeling, realistic lighting, and material composition, allowing the client to visualize the office environment with proper scale, atmosphere, and functionality..",
            images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20skp%201.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20skp%202.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20skp%203.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20skp%204.png?raw=true",
			    "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20ens%201.png?raw=true",
			    "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20ens%202.png?raw=true",
			    "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20ens%203.png?raw=true",
			    "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/mahmud3dm&v/mahmud3dm&v%20ens%204.png?raw=true"
            ]
        },
		4: {
            title: "Instagram Feeds | Arinda Food | August 2025",
            description: "This Instagram Feeds Project aims to enhance Arinda Food brand's image through a consistent and appealing visual design. The main challenge was to create appetizing content that would grab the audience's attention amidst tough competition, which we tackled by developing a visual style guide, designing a variety of content such as recipes and testimonials, and utilizing professional photography techniques. The results of this project were increased engagement, significant follower growth, and the establishment of a more professional and trustworthy brand presence on Instagram..",
            images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/hari%20anak%20nasional.jpg?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/pesanan320paks.jpg?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/endingtemplatecsarindafood.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/kumpul%20arisan.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/Ayam%20Bakar%20Arinda%20Food.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/Merdeka%20Di%20Satu%20Rasa%20Nusantara.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/Giveaway%20Merdeka%20Arinda%20Food.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/Copy%20of%20Merah%20Krem%20Fotosentris%20Ilustratif%20Promo%20Merdeka%20Ayam%20Goreng%20Kiriman%20Instagram.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/Merah%20Krem%20Fotosentris%20Ilustratif%20Promo%20Merdeka%20Ayam%20Goreng%20Kiriman%20Instagram.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/CATERING%20REV.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/PRASMANAN%20REV.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/TUMPENG%20REV.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/Sate%20Tampah%20n.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/buah2an%20post.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/jajanan%20tradisional.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/kreasi%20tumpeng.jpg?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodld/nunda%20laper,arinda.jpg?raw=true"
            ]
        },
		5: {
            title: "Poliklinik 3D Visualization",
            description: "The Poliklinik 3D Visualization project was designed to present a clean, professional, and reassuring healthcare environment. The main challenge was conveying a realistic clinical atmosphere while maintaining visual comfort for patients. This was solved through detailed 3D rendering, balanced lighting, and realistic material application, resulting in a visual output that effectively communicates professionalism and trust.",
            images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/poliklinik3dv/poliklinik3dv1.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/poliklinik3dv/poliklinik3dv2.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/poliklinik3dv/poliklinik3dv3.png?raw=true",
            ]
        },
		6: {
            title: "Exterior Render Visualization Gideon's Project - June 2025",
            description: "This exterior render visualization aimed to showcase architectural details and overall building aesthetics in a realistic manner. The challenge was achieving a natural outdoor atmosphere that accurately represented lighting, textures, and environmental context. The solution involved high-quality exterior rendering and compositing techniques, producing a realistic visualization suitable for presentations and architectural reviews.",
            images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/gideon3dv/gideon3dv1.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/gideon3dv/gideon3dv2.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/gideon3dv/gideon3dv3.png?raw=true"
            ]
        },
		7: {
            title: "Website Design | Arinda Food | July 2025",
            description: "This project is an enhanced website design for Arinda Food. It was developed using the Hostinger platform to create a modern and functional digital platform that showcases the brand's image, improving its discoverability on search engines and through other SEO efforts. We focused on an engaging user interface (UI) design, intuitive user experience (UX), and simple navigation, allowing customers to easily browse the site and learn more about this dynamic brand. You can access the website by clicking the link below:.",
            images: [
                "https://via.placeholder.com/800x600?text=Proyek+3-1",
                "https://via.placeholder.com/800x600?text=Proyek+3-2",
                "https://via.placeholder.com/800x600?text=Proyek+3-3",
                "https://via.placeholder.com/800x600?text=Proyek+3-4"
            ]
        },
	    8: {
            title: "Interior Render Visualization Azzhura's Project - Mei 2025",
            description: "This project focused on interior render visualization to help the client visualize spatial layout, materials, and ambiance. The key challenge was ensuring the design felt both detailed and cohesive. Through precise compositing, realistic lighting, and careful material selection, the final render successfully delivered a clear and immersive interior visualization aligned with the client’s design objectives.",
            images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/azhura3dv/Azhura3dv1.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/azhura3dv/Azhura3dv2.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/azhura3dv/Azhura3dv3.png?raw=true"
            ]
        },
		9: {
            title: "Arinda Food's Packaging Box Design - February 2025",
            description: "This packaging design project aimed to strengthen Arinda Food’s brand identity through a visually appealing and functional box design. The main challenge was creating packaging that stood out while remaining practical for food delivery. The solution combined brand-aligned visuals, clear information hierarchy, and packaging functionality, resulting in a design that enhances brand recognition and customer experience.",
            images: [
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodpd/arindafoodpd1.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodpd/arindafoodpd2.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodpd/arindafoodpd3.png?raw=true",
                "https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodpd/arindafoodpd4.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodpd/arindafoodpd5.png?raw=true",
				"https://github.com/CrealivaBusiness/CrealivaBusiness.github.io/blob/main/arindafoodpd/arindafoodpd6.png?raw=true",
            ]
        },
    };

    // Fungsi untuk menampilkan modal
    function showModal(projectId) {
        const project = projects[projectId];
        if (!project) return;

		document.body.classList.add('modal-open'); 
        
        modal.classList.add('show');
    
	
        // Isi konten modal
        document.getElementById('modal-title').innerText = project.title;
        document.getElementById('modal-description').innerText = project.description;
        
        const gallery = document.getElementById('modal-gallery');
        gallery.innerHTML = ''; // Kosongkan galeri sebelumnya
		

        // Buat dan tambahkan gambar-gambar ke galeri
        project.images.forEach((imgSrc, index) => {
            const link = document.createElement('a');
            link.href = '#';
            //link.setAttribute('data-lightbox', 'modal-gallery');
            link.setAttribute('data-title', `${project.title} - Foto ${index + 1}`);

            const img = document.createElement('img');
            img.setAttribute('data-full-img', imgSrc);
			img.classList.add('can-overlay-img');
            img.src = imgSrc.replace("800x600", "400x300"); // Gunakan thumbnail
            img.alt = `Foto ${index + 1} dari ${project.title}`;
			
			img.addEventListener('click',()=>{
				const fullImageUrl = img.getAttribute('data-full-img');
				console.log(fullImageUrl);
				fullImage.src = fullImageUrl;
				fullImageOverlay.classList.add('show');
			})

            link.appendChild(img);
            gallery.appendChild(link);
        });

        // Tampilkan modal
        modal.classList.add('show');
    }

    // Fungsi untuk menyembunyikan modal
    function hideModal() {
        modal.classList.remove('show');
    
	
	document.body.classList.remove('modal-open');
    
    modal.classList.remove('show');
}

   overlayCloseBtn.addEventListener('click', function() {
        fullImageOverlay.classList.remove('show');
    });
    
    // Event listener untuk menutup overlay jika area di luar gambar diklik
    fullImageOverlay.addEventListener('click', function(e) {
        if (e.target === this || e.target === overlayCloseBtn) {
            fullImageOverlay.classList.remove('show');
        }
    });

    // Event listener untuk tombol "Lihat Detail"
    viewDetailBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            showModal(projectId);
        });
    });

    // Event listener untuk tombol close
    closeBtn.addEventListener('click', function() {
        hideModal();
    });

    // Menutup modal jika area di luar modal diklik
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
});

// Tambahan untuk section Portofolio

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ... (kode Anda yang lain, seperti untuk modal) ...

    const allProjectsGrid = document.getElementById('all-projects');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const itemsPerLoad = 3; // Jumlah item yang ditampilkan per klik

    function showItems() {
        const hiddenProjects = allProjectsGrid.querySelectorAll('.portfolio-item.hidden');
        
        for (let i = 0; i < itemsPerLoad && i < hiddenProjects.length; i++) {
            hiddenProjects[i].classList.remove('hidden');
        }

        const remainingHidden = allProjectsGrid.querySelectorAll('.portfolio-item.hidden').length;
        if (remainingHidden === 0) {
            seeMoreBtn.style.display = 'none';
        }
    }

    // Tampilkan 3 item pertama saat halaman dimuat
    showItems();

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', function() {
            showItems();
        });
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Target semua elemen dengan kelas 'animated-char'
    const animatedChars = document.querySelectorAll('.animated-char');

    // Loop melalui setiap karakter dan terapkan animasi
    animatedChars.forEach((char, index) => {
        // Atur jeda (delay) untuk setiap huruf agar muncul berurutan
        char.style.transitionDelay = `${index * 0.05}s`;
        
        // Atur timeout untuk memicu animasi
        setTimeout(() => {
            char.style.opacity = '1';
            char.style.transform = 'translateX(0)';
        }, 50);
    });
});


// script Contact Section

function kirimPesanWhatsApp() {
    // Nomor WhatsApp Anda
    const nomorWhatsApp = '6285183195474'; // Ganti dengan nomor WhatsApp Anda, tanpa tanda +

    // Ambil nilai dari input form
    const nama = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const layanan = document.getElementById('service-select').value;
    const pesan = document.getElementById('message').value;

    // Cek apakah semua field sudah terisi
    if (nama === '' || email === '' || layanan === '' || pesan === '') {
        alert('Mohon lengkapi semua data formulir!');
        return;
    }

    // Bangun pesan yang akan dikirim
    const pesanWhatsApp = `Halo, saya ${nama}.%0A%0A` +
                          `Saya tertarik dengan layanan *${layanan}*.%0A` +
                          `Email saya adalah ${email}.%0A%0A` +
                          `Berikut pesan saya: ${pesan}`;

    // Bangun URL WhatsApp
    const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanWhatsApp}`;

    // Buka link di tab baru
    window.open(urlWhatsApp, '_blank');
}

// SECTION TESTIMONIAL

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const sliderContainer = document.querySelector('.slider-container');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    let currentIndex = 0;
    let autoSlideInterval;

    function slideTo(index) {
        if (index < 0) {
            currentIndex = testimonialCards.length - 1;
        } else if (index >= testimonialCards.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        
        const cardWidth = testimonialCards[0].offsetWidth;
        const gap = 20; 
        const offset = -currentIndex * (cardWidth + gap);
        slider.style.transform = `translateX(${offset}px)`;
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            slideTo(currentIndex + 1);
        }, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        slideTo(currentIndex + 1);
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        slideTo(currentIndex - 1);
        startAutoSlide();
    });

    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
});

fetch('data-proyek.json')
    .then(response => response.json())
    .then(dataProyek => {
        // Ambil objek proyek yang ingin Anda tampilkan
        const proyekYangDipilih = dataProyek[2]; // Mengambil proyek ke-3 (indeks 2)
        
        // Dapatkan elemen tautan dari HTML
        const projectLinkElement = document.getElementById('project-link');
        
        // Pastikan elemen tautan ditemukan
        if (projectLinkElement) {
            // Mengatur properti href dengan nilai dari data JSON
            projectLinkElement.href = proyekYangDipilih.link;
        }
    })
    .catch(error => console.error('Error fetching data:', error));
	
	const selectedProject = projectsData[2];

// Periksa apakah link ada sebelum menampilkannya
if (selectedProject.link) {
    // Tampilkan tautan (contoh dengan log ke konsol)
    console.log("https://www.arindafood.com/", selectedProject.link);
    // Sekarang, gunakan kode di atas untuk menyisipkan tautan ini ke HTML
}