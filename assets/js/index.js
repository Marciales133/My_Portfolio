window.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector('#burger-nav');
    const mainNav  = document.querySelector('.main-nav');
    const navs  = mainNav.querySelector('a');
    const asideNav = document.querySelector('.in-page-content-navigation');
    toggleBtn.addEventListener('click', ()=>{
        mainNav.classList.toggle('show');
        asideNav.classList.toggle('slide-nav');
        const isopen = mainNav.classList.contains('show');
        toggleBtn.setAttribute('class',isopen? 'ri-close-line':'ri-menu-line')
    });
    navs.addEventListener('click', ()=>{
        toggleBtn.setAttribute('class','ri-menu-line')
        mainNav.classList.remove('show');
    });



    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
        }
    });
    }, { threshold: 0.2 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));



    const paragraph = document.querySelectorAll('p');
    const navLink = document.querySelectorAll('a');
    const root = document.documentElement;
    const dark = document.getElementById("dark");
    const light = document.getElementById("light");
    let mode = localStorage.getItem("mode") || "light";
    root.setAttribute("data-theme", mode);
    toggleButtons(mode);

    dark.addEventListener("click", () => {
        setTheme("dark");
    });

    light.addEventListener("click", () => {
        setTheme("light");
    });

    function setTheme(theme) {
        root.setAttribute("data-theme", theme);
        localStorage.setItem("mode", theme);
        toggleButtons(theme);
    }

    function toggleButtons(theme) {
        if (theme === "dark") {
            dark.style.display = "none";
            light.style.display = "block";
            
            navLink.forEach(a =>{
                a.style.color = "#000000ff";
            })
        } else {
            dark.style.display = "block";
            light.style.display = "none";
            
            navLink.forEach(a =>{
                a.style.color = "#dfdfdfff";
            })
        }
    }

    const home = document.getElementById('home');
    const project = document.getElementById('project');
    const resume = document.getElementById('resume');
    const contact = document.getElementById('contact');

    if( home){

        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 300,
            spaceBetween: 10,
            slidesPerView: 1, // base fallback
            
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },

            breakpoints: {
                420: {
                slidesPerView: 2,
                },
                768: {
                slidesPerView: 3,
                },
                1280: {
                slidesPerView: 4,
                },
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

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });

        
    }
    if(project){
        const container = document.querySelector(".other-projects-container .other-projects-wrapper");
        const myPortfolioProject = new ProjectCard( 
            "My Portfolio", 
            "House For All My Projects", 
            "../media/image/aboutimage.jpg", 
            "Portfolio", 
            "myMainPortfolio",
            `
            <span>This is the main portfolio project for showcasing all my work and also to use all the design techniques i have learned and developed my self.
            some of fitting functionalities from my other projects are used in this portfolio to make it better like the feature of sorting.
            even though i could have done a more modern way of layouting and designing i have gone with a more traditional approach to make it more accessible and easier to maintain.</span>
            `,
            `<video src="#" class="img" controls poster="../media/image/aboutimage.jpg"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
                <li><h6>JavaScript</h6></li>
            `
        );
        const Flight404Project = new ProjectCard( 
            "Flight 404", 
            "Flight Booking Website", 
            "../media/image/project_icons/flight404.png", 
            "Landing Page", 
            "proj-flight404",
            `
            <span>This project was for the sole purpose of learning how to add effective animation and design choices. its a website for booking flights and for general introduction of this airline(Made-up).</span>
            `,
            `<video src="../media/video/flight.mp4" class="img" controls poster="../media/image/project_icons/flight404.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
                <li><h6>JavaScript</h6></li>
            `
        );
        const ECommerceProject = new ProjectCard( 
            "Mortiz's Crops & Materials", 
            "E-commerce for Raw Goods", 
            "../media/image/project_icons/ecommerce.png", 
            "E-commerce", 
            "proj-ecommerce1",
            `
            <span>This project is actually a placeholder of the ecommerce im planning on making for my families farming business at our province, its purpose is to expand their area of operation not just in our region but trough out the country. its mostly just showcasing crops and potential products that will be available for transport and its also a way of honing my skills more in terms of design and polishing a website.</span>
            `,  
            `<video src="../media/video/ecommerce.mp4" class="img" controls poster="../media/image/project_icons/ecommerce.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
                <li><h6>JavaScript</h6></li>
            `
        );
        const BestRecipe = new ProjectCard( 
            "Simple Recipe", 
            "Brings Delicious Recipes to You", 
            "../media/image/project_icons/recipe.png", 
            "E-commerce", 
            "proj-ecommerce2",
            `
            <span>This is one of my early projects, its purpose is to learn how to make a responsive website, and it made me learn more than that. This is a simple resipe page where you can find easy to make dishes, but unfortunately its recipes are only limited due to it being just a project for improvment.</span>
            `,
            `<video src="../media/video/recipe.mp4" class="img" controls poster="../media/image/project_icons/recipe.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
            `
        );
        const BandPlayer = new ProjectCard( 
            "Band Player", 
            "PlaceHolder for Desktop Application", 
            "../media/image/project_icons/Band player.png", 
            "Desktop App", 
            "proj-desktop1",
            `
            <span>Its part of my final project where i need to utilize a specific data structure technique and it being Stack. this project also requires database so i used MySqlWorkbench. this is a song player where you need to pick a band, then their album and a specific song in that album. then you are going to see the lyrics and more details about that song, finally after those steps you can now play the song, although i chould have done a local song player, i chose not to due to safty and legal stuff and ended up just using youtubes api to play those songs.</span>
            `,
            `<div id="swiper">   
                <div class="swiper">
                    <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <div class="image-container">
                                <img src="../media/image/BandPlayerImages/mainMenu.png" alt="">
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="image-container">
                                <img src="../media/image/BandPlayerImages/lyrics.png" alt="">
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="image-container">
                                <img src="../media/image/BandPlayerImages/description.png" alt="">
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="image-container">
                                <img src="../media/image/BandPlayerImages/play.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>Visual Studio</h6></li>
                <li><h6>Windows Forms</h6></li>
                <li><h6>C#</h6></li>
            `
        );
        const SchoolSupplyStore = new ProjectCard( 
            "School Supply Store", 
            "Desktop App", 
            "../media/image/project_icons/School Supply Store.png", 
            "Desktop App", 
            "proj-desktop2",
            `
            <span>Its part of my final project where i need to utilize a specific data structure technique and it being Array. this project also requires database so i used MySqlWorkbench. This applications purpose is to simulate a cashiers computer where they can do transactions and see if an item is currently in stock while doing a transaction. it updates as you use it so there will be no miss informations about whether this item is in stock or not.</span>
            `,
            `<video src="../media/video/SchoolSupplyStoreTransactionApp.mp4" class="img" controls poster="../media/image/project_icons/School Supply Store.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>Visual Studio</h6></li>
                <li><h6>Windows Forms</h6></li>
                <li><h6>C#</h6></li>
            `
        );
        const FindAlbum = new ProjectCard( 
            "Song & Album Finder", 
            "Desktop App", 
            "../media/image/project_icons/Song & Album Finder.png", 
            "Desktop App", 
            "proj-desktop3",
            `
            <span>Its part of my final project where i need to utilize a specific data structure technique and it being Graph. this project also requires database so i used MySqlWorkbench. This program is all about Graphing the places where the album and songs you are looking for are in and then show you the distance and price on that specific location, then give the best store based on what is the nearest.</span>
            `,
            `<video src="../media/video/BandLookUp.mp4" class="img" controls poster="../media/image/project_icons/Song & Album Finder.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>Visual Studio</h6></li>
                <li><h6>Windows Forms</h6></li>
                <li><h6>C#</h6></li>
            `
        );
        const CarSell = new ProjectCard( 
            "CarSell", 
            "Car Dealership Web System", 
            "../media/image/project_icons/carsell.png", 
            "Web App", 
            "proj-webapp",
            `
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            `,
            `<video src="../media/video/CarsellDemo.mp4" class="img" controls poster="../media/image/project_icons/carsell.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
                <li><h6>JavaScript</h6></li>
                <li><h6>Node</h6></li>
                <li><h6>Express</h6></li>
                <li><h6>MongoDB</h6></li>
                <li><h6>Mongoose</h6></li>
            `
        );
        const LandingPlaceholder = new ProjectCard( 
            "PlaceHolder", 
            "PlaceHolder for Landing Page", 
            "../media/image/project_icons/inproduction.png", 
            "Landing Page", 
            "proj-landing",
            `
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            `,
            `<video src="#" class="img" controls poster="../media/image/project_icons/inproduction.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
                <li><h6>JavaScript</h6></li>
            `
        );
        const PortfolioPlaceholder = new ProjectCard( 
            "PlaceHolder", 
            "PlaceHolder for Client Portfolio", 
            "../media/image/project_icons/inproduction.png", 
            "Portfolio", 
            "proj-portfolio",
            `
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            `,
            `<video src="#" class="img" controls poster="../media/image/project_icons/inproduction.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
                <li><h6>JavaScript</h6></li>
                <li><h6>Node</h6></li>
                <li><h6>Express</h6></li>
                <li><h6>MongoDB</h6></li>
                <li><h6>Mongoose</h6></li>
            `
        );
        const BlogPlaceholder = new ProjectCard( 
            "PlaceHolder", 
            "PlaceHolder for Blog Page", 
            "../media/image/project_icons/inproduction.png", 
            "Blog Page", 
            "proj-blog",
            `
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            `,
            `<video src="#" class="img" controls poster="../media/image/project_icons/inproduction.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>HTML</h6></li>
                <li><h6>CSS</h6></li>
                <li><h6>JavaScript</h6></li>
                <li><h6>Node</h6></li>
                <li><h6>Express</h6></li>
                <li><h6>MongoDB</h6></li>
                <li><h6>Mongoose</h6></li>
            `
        );
        const spaceShooter = new ProjectCard( 
            "Space Shooter", 
            "Space Shooter parody", 
            "../media/image/project_icons/inproduction.png", 
            "2D Games", 
            "proj-spaceShooter",
            `
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            `,
            `<video src="#" class="img" controls poster=""../media/image/project_icons/inproduction.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Idea:</span> Define game goal and main mechanic.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Platform:</span> Use Python 3 and Pygame.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install Pygame and test display window.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Folders:</span> Create src, assets, and build dirs.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Git:</span> Init repo and push first commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Plan:</span> Sketch game flow and feature list.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Collect or draw ships, lasers, and enemies.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-refresh-line"></i> Loop:</span> Setup input, update, render, repeat.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-rocket-2-line"></i> Player:</span> Add movement and shooting logic.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Enemies:</span> Spawn and move with simple AI.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-collision-line"></i> Collisions:</span> Detect hits and remove sprites.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-heart-3-line"></i> Health:</span> Add lives and damage system.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-star-line"></i> Power-ups:</span> Drop boosts after kills.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-star-smile-line"></i> Score:</span> Add scoring and high score save.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-home-8-line"></i> Main Menu:</span> Add start and exit buttons.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-pause-circle-line"></i> Pause:</span> Add resume and quit options.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Add background music and sfx.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Settings:</span> Add volume and control options.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-2-line"></i> Debug:</span> Fix logic and collision issues.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimize:</span> Cap FPS and clean memory use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Export:</span> Build .exe with PyInstaller.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Publish:</span> Upload to itch.io or GitHub.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Record demo and screenshots.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Final:</span> Review gameplay and polish visuals.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>Python</h6></li>
                <li><h6>Pygame</h6></li>
            `
        );
        const GamePlaceholder2 = new ProjectCard( 
            "PlaceHolder", 
            "PlaceHolder for 2D Game", 
            "../media/image/project_icons/inproduction.png", 
            "2D Games", 
            "proj-game2",
            `
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, placeat delectus voluptatibus assumenda, molestias numquam dolorem facere magni, consequuntur ducimus aspernatur explicabo repudiandae velit! Alias totam quis tempore odio quaerat, molestiae vero. </span>
            `,
            `<video src="#" class="img" controls poster=""../media/image/project_icons/inproduction.png"></video>`,
            `
            <div class="circle-bullet"></div>
            <p><span><i class="ri-lightbulb-flash-line"></i> Concept:</span> Define the main goal and purpose of the project.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-draft-line"></i> Planning:</span> Outline features, workflow, and key milestones.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-folder-2-line"></i> Structure:</span> Organize folders and setup initial files.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-macbook-line"></i> Environment:</span> Choose tools, frameworks, or languages to use.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-terminal-box-line"></i> Setup:</span> Install dependencies and verify configuration.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-git-branch-line"></i> Version Control:</span> Initialize Git and push initial commit.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-layout-line"></i> Design:</span> Create layout, interface, or initial wireframe.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-code-box-line"></i> Core Logic:</span> Implement the main functionality or prototype.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-function-line"></i> Features:</span> Add supporting modules or extended capabilities.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-bug-line"></i> Testing:</span> Debug errors and verify stability.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-speed-up-line"></i> Optimization:</span> Improve performance and clean up unused code.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-settings-4-line"></i> Configuration:</span> Add user settings or adjustable parameters.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-image-line"></i> Assets:</span> Add visuals, icons, or supporting media.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-sound-module-line"></i> Audio:</span> Integrate sound effects or background audio (optional).</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-user-line"></i> User Experience:</span> Refine layout, feedback, and interactivity.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-shield-check-line"></i> Quality Check:</span> Ensure everything works across all conditions.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-file-zip-line"></i> Build:</span> Compile or package the final version for release.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-upload-cloud-2-line"></i> Deployment:</span> Host or publish on the chosen platform.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-presentation-line"></i> Showcase:</span> Prepare documentation, demo, or presentation.</p>

            <div class="line-spacer"></div><div class="spacer"></div><div class="circle-bullet"></div>
            <p><span><i class="ri-trophy-line"></i> Review:</span> Collect feedback and polish final details.</p>
            `,
            `
                <li><h6>VSCode</h6></li>
                <li><h6>Python</h6></li>
                <li><h6>Pygame</h6></li>
            `
        );

        let projectCard = null;

        let newTab = null;

        const allProjects = [
            myPortfolioProject,
            Flight404Project,
            ECommerceProject,
            BestRecipe,
            BandPlayer,
            SchoolSupplyStore,
            FindAlbum,
            CarSell,
            LandingPlaceholder,
            PortfolioPlaceholder,
            BlogPlaceholder,
            spaceShooter,
            GamePlaceholder2
        ];

        

        allProjects.forEach(project => {
            ProjectCard.accumulatecardBluePrint(
                project.cardType,
                project.renderCardBluePrint()
            );
        });

        ProjectCard.oneGoRendering(ProjectCard.dictionaryOfCards, container);

        window.addEventListener("message", (e) => {
            if (e.data.state !== "ready") return;
            
            const sourceTab = e.source; 
            const targetID = e.data.tabID;
            const projectOvervew = allProjects.find(p => targetID  == `${p.cardID}NewTab`);
            if (projectOvervew) {
                sourceTab.postMessage({
                title: projectOvervew.projectName,
                description: projectOvervew.projectDescription,
                step: projectOvervew.stepByStepPlan,
                demo: projectOvervew.demo,
                tech: projectOvervew.tech
                }, window.origin);
            }
        });
        
        let otherProjectCard = document.querySelectorAll(".newTab");

        otherProjectCard.forEach(projectCard => {
            projectCard.addEventListener('click', ()=>{
                const tabID = `${projectCard.id}NewTab`;
                const newTab = window.open(`projectDescription.html?tab=${tabID}`, "_blank");

            })
        })

        let WhatToSort = "";
        let typePlaceholder = "";
        const projectSort = document.querySelectorAll("#projectSort li");
        projectSort.forEach(PS =>{
            PS.addEventListener("click", ()=>{
                projectCard = null;
                WhatToSort = PS.firstChild.textContent.trim();
                ProjectCard.sortPorject(WhatToSort, ProjectCard.dictionaryOfCards, container);
                typePlaceholder = ProjectCard.checkType(WhatToSort);

                projectCard = document.querySelectorAll(`.other-projects-card.${typePlaceholder}`);

                otherProjectCard = document.querySelectorAll(".newTab");
                otherProjectCard.forEach(projectCard => {
                    projectCard.addEventListener('click', ()=>{
                        const tabID = `${projectCard.id}NewTab`;
                        const newTab = window.open(`projectDescription.html?tab=${tabID}`, "_blank");

                    })
                })

                projectCard.forEach(card => {
                    card.style.border = "solid var(--tertiary-400)";
                });
            })
        })






        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 1000,
            spaceBetween: 40,
            slidesPerView: 1, // base fallback
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
        });
    }
    if(resume){
        
        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 1000,
            spaceBetween: 20,
            slidesPerView: 1, // base fallback
            breakpoints: {
                420: {
                slidesPerView: 2,
                },
                768: {
                slidesPerView: 3,
                },
                1280: {
                slidesPerView: 4,
                },
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
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
        });
        
    }
    if(contact){
        const form = document.getElementById("contact-form");

        function sanitize(input) {
            return input
                .replace(/[<>]/g, "")
                .replace(/script/gi, "")
                .trim();
        }

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            // Honeypot bot trap
            if (document.getElementById("company").value) return;

            const name = sanitize(document.getElementById("client-name").value);
            const email = sanitize(document.getElementById("client-email").value);
            const message = sanitize(document.getElementById("client-message").value);

            if (!name || !email || !message) {
                alert("Please complete all fields correctly.");
                return;
            }

            const subject = encodeURIComponent("Portfolio Inquiry from " + name);
            const body = encodeURIComponent(
                "Hi Rushell,\n\n" +
                message + "\n\n" +
                "Sender Name: " + name + "\n" +
                "Sender Email: " + email
            );

            const mailtoLink = `mailto:your@email.com?subject=${subject}&body=${body}`;

            // Try to open mail app
            window.location.href = mailtoLink;

            // Fallback message if nothing happens
            setTimeout(() => {
                alert("Having trouble opening your email app? You can contact me via the social links on the left.");
            }, 5000);
        });
    }
});

function sendNotifOfChange(tab, id, toRender){
    tab.postMessage({ID : id, RENDER: toRender});
}


// class just for the fun of it.
class ProjectCard{
    projectName = "";
    description = "";
    imagePath = "";
    cardType = "";
    cardID = "";
    projectDescription = "";
    demo = "";
    stepByStepPlan = "";
    tech = "";
    static dictionaryOfCards = {
        "Portfolio":[],
        "E-commerce":[],
        "Landing Page":[],
        "Desktop App":[],
        "Blog Page":[],
        "Web App":[],
        "2D Games":[]
    };

    constructor( projectName, description, imagePath, cardType, cardID, projectDescription, demo, stepByStepPlan, tech){
        this.projectName = projectName;
        this.description = description;
        this.imagePath = imagePath;
        this.cardType = cardType;
        this.cardID = cardID;
        this.projectDescription = projectDescription;
        this.demo = demo;
        this.stepByStepPlan = stepByStepPlan;
        this.tech = tech;
    }

    renderCardBluePrint(){
        return `
            <div class="image-container">
                <img src="${this.imagePath}" alt="">
            </div>
            <div class="other-projects-card-label">
                <p>${this.projectName}</p>
                <h6>${this.description}</h6>
                <div id="${this.cardID}" class="btn previous-project-btn newTab"><i style="font-size: .8rem;font-weight: bold; margin-right:.1rem;" class="ri-arrow-right-up-line"></i>Check Out</div>
            </div>
        `;
    }

    static accumulatecardBluePrint(type, blueprint){
        this.dictionaryOfCards[type].push(blueprint);
    }

    static oneGoRendering(data, container){
        let typePlaceholder = "";
        const fragment = document.createDocumentFragment();
        Object.entries(data).forEach(([type,projects]) => {
            typePlaceholder = ProjectCard.checkType(type);
            projects.forEach(project =>{
                const card = document.createElement('div');
                card.className = 'other-projects-card';
                card.classList.add(typePlaceholder);


                card.innerHTML = project;
                fragment.appendChild(card);
            })
        })
        container.innerHTML = '';
        container.appendChild(fragment);
        console.log('oneGo');
        console.log('Rendered Employees');
    }

    static sortPorject(sort, data, container){
        let newSortProject = {};
        if (data[sort]) newSortProject[sort] = data[sort];
        Object.entries(data).forEach(([type, projects]) => {
            if (type === sort) return;
            newSortProject[type] = projects;
        });
        ProjectCard.oneGoRendering(newSortProject, container);
    }

    static checkType(EquateTo){
        if(EquateTo === "Portfolio") return "Portfolio";
        if(EquateTo === "E-commerce") return "E-commerce";
        if(EquateTo === "Landing Page") return "Landing-Page";
        if(EquateTo === "Blog Page") return "Blog-Page";
        if(EquateTo === "Web App") return "Web-App";
        if(EquateTo === "Desktop App") return "Desktop-App";
        if(EquateTo === "2D Games") return "TD-Games";
    }
}
