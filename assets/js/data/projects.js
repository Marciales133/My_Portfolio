/**
 * ONE SOURCE OF TRUTH for the portfolio listing and the reusable detail page.
 *
 * TO CHANGE THE CURRENT PROJECT:
 * 1. Add your new project as an object in `projects` below.
 * 2. Put its id in `portfolioSettings.currentProjectId`.
 * 3. Your former current project automatically moves to Previous Projects.
 *
 * TO ADD A PREVIOUS PROJECT: just append a project object to `projects`.
 * `websiteUrl`: optional public/live website. When present, View Case Study opens
 * that URL in the same tab. When empty, it opens projectDescription.html?project=ID.
 * `details.overviewVideo`: the one featured VIDEO source (MP4/WebM/Ogg); no slider.
 * `thumbnail`: optional poster for the video and cover for the previous-project card.
 * Media paths remain as originally provided; large assets are intentionally omitted.
 *
 * No HTML editing is needed. See README.md for a copy-and-paste example.
 */
export const portfolioSettings = {
  currentProjectId: 'dmc', // No new current project was specified. Add an id here when ready.
};

export const projects = [
  {
    "id": "dmc",
    "category": "E-commerce",
    "cardDescription": "E-Commerce website for DMC Merchendices",
    "thumbnail": "../media/image/project_icons/dmc.png",
    "overviewGallery": [],
    "details": {
      "projectName": "DMC E-Shop",
      "overviewVideo": "../media/video/dmc.mp4",
      "projectOverview": "E-Commerce website for DMC Merchendices. The place where you can get Your Own Devil Trigger. Express Yourself in the Community.",
      "techStack": "React, Node, Express, MySql, VSCode, HTML, CSS(Tailwind), JavaScript",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "street-flex",
    "websiteUrl": "https://streetflex.vercel.app/index.html",
    "category": "E-commerce",
    "cardDescription": "E-Commerce website for street wear",
    "thumbnail": "../media/image/project_icons/streetFlexImg3.jpg",
    "overviewGallery": [],
    "details": {
      "projectName": "Street Flex",
      "overviewVideo": "../media/video/streetflex.mp4",
      "projectOverview": "E-Commerce website for street wear. The place where you can get Yourself Dripped-Out. Express Yourself in the streets.",
      "techStack": "VSCode, HTML, CSS, JavaScript, Node, Express, MongoDB, Mongoose",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-webapp",
    "websiteUrl": "https://marciales133.github.io/car_dealership/",
    "category": "Web App",
    "cardDescription": "Car Dealership Web System",
    "thumbnail": "../media/image/project_icons/carsell.png",
    "overviewGallery": [],
    "details": {
      "projectName": "CarSell",
      "overviewVideo": "../media/video/CarsellDemo.mp4",
      "projectOverview": "Car Dealership Web System. More information about this project will be added soon.",
      "techStack": "VSCode, HTML, CSS, JavaScript, Node, Express, SupaBase, Postgre Sql",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "myMainPortfolio",
    "category": "Portfolio",
    "cardDescription": "House For All My Projects",
    "thumbnail": "../media/image/aboutimage.jpg",
    "overviewGallery": [],
    "details": {
      "projectName": "My Portfolio",
      "overviewVideo": "",
      "projectOverview": "This is the main portfolio project for showcasing all my work and also to use all the design techniques i have learned and developed my self.\n            some of fitting functionalities from my other projects are used in this portfolio to make it better like the feature of sorting.\n            even though i could have done a more modern way of layouting and designing i have gone with a more traditional approach to make it more accessible and easier to maintain.",
      "techStack": "VSCode, HTML, CSS, JavaScript",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-flight404",
    "category": "Landing Page",
    "cardDescription": "Flight Booking Website",
    "thumbnail": "../media/image/project_icons/flight404.png",
    "overviewGallery": [],
    "details": {
      "projectName": "Flight 404",
      "overviewVideo": "../media/video/flight.mp4",
      "projectOverview": "This project was for the sole purpose of learning how to add effective animation and design choices. its a website for booking flights and for general introduction of this airline(Made-up).",
      "techStack": "VSCode, HTML, CSS, JavaScript",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-ecommerce1",
    "category": "Landing Page",
    "cardDescription": "E-commerce for Raw Goods",
    "thumbnail": "../media/image/project_icons/ecommerce.png",
    "overviewGallery": [],
    "details": {
      "projectName": "'s Crops & Materials",
      "overviewVideo": "../media/video/ecommerce.mp4",
      "projectOverview": "This project is actually a placeholder of the ecommerce im planning on making for my families farming business at our province, its purpose is to expand their area of operation not just in our region but trough out the country. its mostly just showcasing crops and potential products that will be available for transport and its also a way of honing my skills more in terms of design and polishing a website.",
      "techStack": "VSCode, HTML, CSS, JavaScript",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-ecommerce2",
    "category": "E-commerce",
    "cardDescription": "Brings Delicious Recipes to You",
    "thumbnail": "../media/image/project_icons/recipe.png",
    "overviewGallery": [],
    "details": {
      "projectName": "Simple Recipe",
      "overviewVideo": "../media/video/recipe.mp4",
      "projectOverview": "This is one of my early projects, its purpose is to learn how to make a responsive website, and it made me learn more than that. This is a simple resipe page where you can find easy to make dishes, but unfortunately its recipes are only limited due to it being just a project for improvment.",
      "techStack": "VSCode, HTML, CSS",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-desktop1",
    "category": "Desktop App",
    "cardDescription": "PlaceHolder for Desktop Application",
    "thumbnail": "../media/image/project_icons/Band Player.png",
    "overviewGallery": [
      "../media/image/BandPlayerImages/mainMenu.png",
      "../media/image/BandPlayerImages/lyrics.png",
      "../media/image/BandPlayerImages/description.png",
      "../media/image/BandPlayerImages/play.png"
    ],
    "details": {
      "projectName": "Band Player",
      "overviewVideo": "",
      "projectOverview": "Its part of my final project where i need to utilize a specific data structure technique and it being Stack. this project also requires database so i used MySqlWorkbench. this is a song player where you need to pick a band, then their album and a specific song in that album. then you are going to see the lyrics and more details about that song, finally after those steps you can now play the song, although i chould have done a local song player, i chose not to due to safty and legal stuff and ended up just using youtubes api to play those songs.",
      "techStack": "Visual Studio, Windows Forms, C#",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-desktop2",
    "category": "Desktop App",
    "cardDescription": "Desktop App",
    "thumbnail": "../media/image/project_icons/School Supply Store.png",
    "overviewGallery": [],
    "details": {
      "projectName": "School Supply Store",
      "overviewVideo": "../media/video/SchoolSupplyStoreTransactionApp.mp4",
      "projectOverview": "Its part of my final project where i need to utilize a specific data structure technique and it being Array. this project also requires database so i used MySqlWorkbench. This applications purpose is to simulate a cashiers computer where they can do transactions and see if an item is currently in stock while doing a transaction. it updates as you use it so there will be no miss informations about whether this item is in stock or not.",
      "techStack": "Visual Studio, Windows Forms, C#",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-desktop3",
    "category": "Desktop App",
    "cardDescription": "Desktop App",
    "thumbnail": "../media/image/project_icons/Song & Album Finder.png",
    "overviewGallery": [],
    "details": {
      "projectName": "Song & Album Finder",
      "overviewVideo": "../media/video/BandLookUp.mp4",
      "projectOverview": "Its part of my final project where i need to utilize a specific data structure technique and it being Graph. this project also requires database so i used MySqlWorkbench. This program is all about Graphing the places where the album and songs you are looking for are in and then show you the distance and price on that specific location, then give the best store based on what is the nearest.",
      "techStack": "Visual Studio, Windows Forms, C#",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-blog",
    "category": "Blog Page",
    "cardDescription": "PlaceHolder for Blog Page",
    "thumbnail": "../media/image/project_icons/inproduction.png",
    "overviewGallery": [],
    "details": {
      "projectName": "PlaceHolder",
      "overviewVideo": "",
      "projectOverview": "This project is planned or in progress. Details will be added here when available.",
      "techStack": "VSCode, HTML, CSS, JavaScript, Node, Express, MongoDB, Mongoose",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Concept: Define the main goal and purpose of the project.\n• Planning: Outline features, workflow, and key milestones.\n• Structure: Organize folders and setup initial files.\n• Environment: Choose tools, frameworks, or languages to use.\n• Setup: Install dependencies and verify configuration.\n• Version Control: Initialize Git and push initial commit.\n• Design: Create layout, interface, or initial wireframe."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Core Logic: Implement the main functionality or prototype.\n• Features: Add supporting modules or extended capabilities.\n• Testing: Debug errors and verify stability.\n• Optimization: Improve performance and clean up unused code.\n• Configuration: Add user settings or adjustable parameters.\n• Assets: Add visuals, icons, or supporting media."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Integrate sound effects or background audio (optional).\n• User Experience: Refine layout, feedback, and interactivity.\n• Quality Check: Ensure everything works across all conditions.\n• Build: Compile or package the final version for release.\n• Deployment: Host or publish on the chosen platform.\n• Showcase: Prepare documentation, demo, or presentation.\n• Review: Collect feedback and polish final details."
        }
      ]
    }
  },
  {
    "id": "proj-spaceShooter",
    "category": "2D Games",
    "cardDescription": "Space Shooter parody",
    "thumbnail": "../media/image/project_icons/spaceshooter.png",
    "overviewGallery": [],
    "details": {
      "projectName": "Space Shooter",
      "overviewVideo": "../media/video/spaceShooter.mp4",
      "projectOverview": "Space Shooter parody. More information about this project will be added soon.",
      "techStack": "VSCode, Python, Pygame",
      "byPartVideoExplanation": [
        {
          "videoUrl": "",
          "partExplanation": "• Idea: Define game goal and main mechanic.\n• Platform: Use Python 3 and Pygame.\n• Setup: Install Pygame and test display window.\n• Folders: Create src, assets, and build dirs.\n• Git: Init repo and push first commit.\n• Plan: Sketch game flow and feature list.\n• Assets: Collect or draw ships, lasers, and enemies.\n• Loop: Setup input, update, render, repeat."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Player: Add movement and shooting logic.\n• Enemies: Spawn and move with simple AI.\n• Collisions: Detect hits and remove sprites.\n• Health: Add lives and damage system.\n• Power-ups: Drop boosts after kills.\n• Score: Add scoring and high score save.\n• Main Menu: Add start and exit buttons.\n• Pause: Add resume and quit options."
        },
        {
          "videoUrl": "",
          "partExplanation": "• Audio: Add background music and sfx.\n• Settings: Add volume and control options.\n• Debug: Fix logic and collision issues.\n• Optimize: Cap FPS and clean memory use.\n• Export: Build .exe with PyInstaller.\n• Publish: Upload to itch.io or GitHub.\n• Showcase: Record demo and screenshots.\n• Final: Review gameplay and polish visuals."
        }
      ]
    }
  },
];

export function getProject(id) {
  return projects.find((item) => item.id === id) ?? null;
}

/** Empty currentProjectId means no featured record yet (never guess a project). */
export function getCurrentProject() {
  return getProject(portfolioSettings.currentProjectId);
}

/** All projects except the currently selected one, no duplicate featured card. */
export function getPreviousProjects() {
  const current = getCurrentProject();
  return current ? projects.filter((item) => item.id !== current.id) : [...projects];
}

/** Centralized CTA behavior; unknown or unsafe schemes fall back to the detail page. */
export function projectDestination(project) {
  const url = typeof project.websiteUrl === 'string' ? project.websiteUrl.trim() : '';
  if (/^https?:\/\/[^\s]+$/i.test(url)) return url;
  return `./projectDescription.html?project=${encodeURIComponent(project.id)}`;
}
