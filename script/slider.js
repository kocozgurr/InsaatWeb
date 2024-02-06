const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide-text');
let currentIndex = 0;



function showSlide(index)
{
    slides.forEach((slide, i) =>
    {
        if (i === index)
        {
            slide.style.display = 'block';
        } else
        {
            slide.style.display = 'none';
        }
    });
}

function nextSlide()
{
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
function prevSlide()
{
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 5000); // 5 saniyede bir slayt geçişi
showSlide(currentIndex);


///////////  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script> istediğimiz sayfaya sunu ekledık//////


const observer = new IntersectionObserver((entries) =>
{
    entries.forEach((entry) =>
    {
        if (entry.isIntersecting)
        {
            // Bölüm görüntülendiğinde animasyonu başlatın
            gsap.from(entry.target, {
                duration: 2,
                opacity: 0,
                y: 1000,
                stagger: 0.2,
                ease: "power2.out",
            });

            // Observer'ı kapatın (animasyon sadece bir kez çalışsın)
            observer.unobserve(entry.target);
        }
    });
});

// Gözlemlemek istediğiniz bölümleri seçin ve observer'a ekleyin
const sections = document.querySelectorAll(".cont");

sections.forEach((section) =>
{
    observer.observe(section);

});


