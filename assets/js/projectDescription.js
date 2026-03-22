window.addEventListener("DOMContentLoaded", () => {
    // Extract tabID from URL
    const params = new URLSearchParams(window.location.search);
    const tabID = params.get('tab');
    const savedMode = localStorage.getItem("mode") || "light";
    document.documentElement.setAttribute("data-theme", savedMode);

    if (window.opener) {
        window.opener.postMessage({ state: "ready", tabID }, window.origin);
    }

    // Continue as before...
    const projectTitle = document.getElementById('projectTitle');
    const description = document.getElementById('description');
    const plan = document.querySelector('.step-by-step-plan');
    const demo = document.querySelector('.demo-container');
    const technologies = document.querySelector(".technologies-list");


    window.addEventListener("message", (e) => {
        const { title, description: desc, step, demo: dem, tech } = e.data;
        console.log(e.data.demo)
        projectTitle.textContent = title;
        description.innerHTML = desc;
        plan.innerHTML = step;
        demo.innerHTML += dem;
        technologies.innerHTML += tech;

        // Initialize Swiper after content is added
        const swiperElement = document.getElementById('swiper');
        if(swiperElement){
            console.log("swiper active");
            
            // Hide swiper initially to prevent flicker
            swiperElement.style.opacity = '0';
            
            // Wait for images to load before initializing
            const images = swiperElement.querySelectorAll('img');
            let loadedCount = 0;
            const totalImages = images.length;
            
            const initSwiper = () => {
                const swiper = new Swiper('.swiper', {
                    loop: true,
                    speed: 1000,
                    spaceBetween: 40,
                    slidesPerView: 1,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    lazy: {
                        loadOnTransitionStart: true,
                        loadPrevNext: true,
                    },
                    keyboard: {
                        enabled: true,
                    },
                    simulateTouch: true,
                    grabCursor: true,
                    observer: true,
                    observeParents: true,
                });
                
                // Fade in after initialization
                setTimeout(() => {
                    swiperElement.style.transition = 'opacity 0.3s ease';
                    swiperElement.style.opacity = '1';
                }, 100);
            };
            
            if (totalImages === 0) {
                // No images, initialize immediately
                setTimeout(initSwiper, 50);
            } else {
                // Wait for all images to load
                images.forEach(img => {
                    if (img.complete) {
                        loadedCount++;
                    } else {
                        img.addEventListener('load', () => {
                            loadedCount++;
                            if (loadedCount === totalImages) {
                                initSwiper();
                            }
                        });
                        img.addEventListener('error', () => {
                            loadedCount++;
                            if (loadedCount === totalImages) {
                                initSwiper();
                            }
                        });
                    }
                });
                
                // If all images were already loaded
                if (loadedCount === totalImages) {
                    initSwiper();
                }
                
                // Fallback timeout in case images take too long
                setTimeout(() => {
                    if (loadedCount < totalImages) {
                        console.log('Timeout: initializing anyway');
                        initSwiper();
                    }
                }, 2000);
            }
        }
    });
    

    window.addEventListener("storage", (e) => {
    if (e.key === "mode") {
        document.documentElement.setAttribute("data-theme", e.newValue);
    }
});
});

