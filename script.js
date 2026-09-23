const track = document.querySelector(".farmer-track");
const nextButton = document.querySelector('#nextFarmer');
const prevButton = document.querySelector("#prevFarmer");

let currentFarmer = 0;
let autoSlide;
let previousFarmer = 0;
let modalOpen = false;
const totalFarmers = 4;

function showFarmer() {
    const percentage = currentFarmer * (100 / totalFarmers);
    const isWarp = Math.abs(currentFarmer - previousFarmer) > 1;
    track.style.transition = isWarp ? "none" : "";
    track.style.transform = "translateX(-" + percentage + "%)";
    previousFarmer = currentFarmer;
}

nextButton.addEventListener("click", function () {
    currentFarmer = (currentFarmer + 1) % totalFarmers;
    showFarmer();
    clearInterval(autoSlide);
    startAutoSlide();
});

prevButton.addEventListener("click", function () {
    currentFarmer = (currentFarmer - 1 + totalFarmers) % totalFarmers;
    showFarmer();
    clearInterval(autoSlide);
    startAutoSlide();
});

function startAutoSlide() {
    autoSlide = setInterval(function (){
        currentFarmer = (currentFarmer + 1) % totalFarmers;
        showFarmer();
    }, 8000);
}

startAutoSlide();

const farmerContainer = document.querySelector(".farmer-container");

farmerContainer.addEventListener("mouseenter", function () {
    clearInterval(autoSlide);
});

farmerContainer.addEventListener("mouseleave", function () {
    if (!modalOpen) {
    clearInterval(autoSlide);
    startAutoSlide();
    }
});

const farmerData = {
    daniel: {
            title: "Daniel Carter",
            profile: "Daniel Carter sees coffee as a product of patience, place, and craftsmanship. He believes good coffee should preserve the character of where it comes from, rather than hiding it behind excessive processing or roasting.",
            production: "Daniel mainly grows Arabica coffee suited to high-altitude environments. He prefers smaller harvests and selectively picks fully ripe cherries to preserve their natural sweetness and complexity.",
            storage: "Daniel stores properly dried beans in a cool, dry environment with minimal exposure to moisture, sunlight, and oxygen. He prefers smaller batches to maintain the coffee's original character.",
            distribution: "Daniel distributes his coffee through limited arrangements and direct connections with buyers. He prefers meeting customers personally and explaining the story behind the beans.",
    },
    marcus: {
        title: "Marcus William",
        profile: "Marcus William believes coffee should be accessible to everyone. He focuses on consistency, freshness, and creating a good cup that can be enjoyed by both experienced coffee drinkers and beginners.",
        production: "Marcus focuses on Arabica coffee and larger harvests to maintain a consistent flavor profile. His beans are processed efficiently and designed to work well with different brewing methods.",
        storage: "Marcus stores his beans in airtight containers or coffee bags to protect them from oxygen, humidity, heat, and sunlight. He focuses on maintaining freshness throughout the supply chain.",
        distribution: "Marcus wants his coffee to reach as many people as possible. His beans are distributed through cafés, local shops, online orders, and other channels, making his coffee accessible to everyone.",
    },
    arif: {
        title: "Arif Rahman",
        profile: "Arif Rahman is a smallholder coffee farmer who has spent years working with the land and learning through experience. He believes that good coffee starts with healthy plants, careful cultivation, and patience. For Arif, farming is not about chasing the highest production, but maintaining quality and consistency from season to season.",
        production: "Arif focuses on maintaining the health of his coffee plants through regular pruning, proper shade management, and careful harvesting. He prefers picking cherries at the right level of ripeness rather than harvesting everything at once.",
        storage: "After processing, Arif pays close attention to how the beans are dried and stored. He believes proper storage is essential to protecting the coffee's quality, especially before the beans are delivered to buyers.",
        distribution: "Arif mainly distributes his coffee through local buyers and small coffee businesses. He hopes that stronger connections between farmers and local coffee shops can create better opportunities for Wonosobo coffee.",
    },
    sinta: {
        title: "Sinta Wulandari",
        profile: "Sinta Wulandari is a young coffee farmer who sees farming as a continuous process of learning and experimentation. She is interested in understanding how different cultivation and processing methods can influence the final character of coffee. For Sinta, every harvest brings a new opportunity to learn something different.",
        production: "Sinta experiments with different approaches to cultivation and harvesting while still considering the conditions of the local environment. She pays attention to the development of her plants and carefully selects ripe cherries to maintain consistency in the harvest.",
        storage: "Sinta believes that proper drying and storage are just as important as cultivation. She carefully monitors the condition of the beans after processing to prevent moisture and environmental factors from affecting their quality.",
        distribution: "Sinta is interested in connecting directly with local coffee shops and coffee enthusiasts. She believes that farmers should have a greater role in understanding where their coffee goes and how its value develops beyond the farm.",
    }
};

const modal = document.querySelector("#farmerModal");
const farmerBackgrounds = {
    daniel: "coffee-daniel.jpg",
    marcus: "coffee-marcus.jpg",
    arif: "coffee-arif.jpg",
    sinta: "coffee-sinta.jpg"
};
const modalTitle = document.querySelector("#modalTitle");
const modalProfile = document.querySelector("#modalProfile");
const modalProduction = document.querySelector("#modalProduction");
const modalStorage = document.querySelector("#modalStorage");
const modalDistribution = document.querySelector("#modalDistribution");
const modalClose = document.querySelector("#modalClose");
const learnMoreLinks = document.querySelectorAll(".learn-more");
learnMoreLinks.forEach(function (link) {
    const card = link.closest(".farmer-card");
    card.style.setProperty(
        "--farmer-bg",
        "url('" + farmerBackgrounds[link.dataset.farmer] + "')"
               );
});
learnMoreLinks.forEach(function (link) {
    link.addEventListener("click",function (e) {
        e.preventDefault();
        const farmer = farmerData[link.dataset.farmer];
        modal.style.setProperty(
            "--farmer-bg",
            "url('" + farmerBackgrounds[link.dataset.farmer] + "')"
                    );
        modalTitle.textContent = farmer.title;
        modalProfile.textContent = farmer.profile;
        modalProduction.textContent = farmer.production;
        modalStorage.textContent = farmer.storage;
        modalDistribution.textContent = farmer.distribution;
        modal.classList.add("active");
        modalOpen = true;
        clearInterval(autoSlide);
    });
});

modalClose.addEventListener("click", function () {
    modal.classList.remove("active");
    modalOpen = false;
    clearInterval(autoSlide);
    startAutoSlide();
    });

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.remove("active");
        modalOpen = false;
        clearInterval(autoSlide);
        startAutoSlide();
    }
});

const coffeeshopData = [
    { name: "SS Coffee", location: "Wonosobo, Central Java", desc: "Local Coffeeshop and the best manual brewing", myRating: "4,5", googleRating: "4,5" },
    { name: "SinSu Coffee", location: "Wonosobo, Central java", desc: "Local coffeeshop with characteristic and interesting story", myRating: "4,5,", googleRating: "4,5"},
    { name: "Marapi Coffee House", location: "Wonosobo, Central Java", desc: "A small coffe shop focused on simple brewing and locally sourced beans", myRating: "4,5", googleRating: "4,5"},
    { name: "Arunika Coffe", location: "Wonosobo, Central Java", desc: "A cozy place for enjoying local coffee with a relaxed atmosphere.", myRating: "4,5", googleRating: "4,5" },
    { name: "Dieng Brew", location: "Dieng, Wonosobo", desc: "A coffee spot inspired by the cold mountain atmosphere of the Dieng highlands.", myRating: "4,5", googleRating: "4,5" },
    { name: "Kopi Lereng", location: "Wonosobo, Central Java", desc: "A local coffee shop highlighting the character of highland-grown coffee.", myRating: "4,5", googleRating: "4,4" },
    { name: "Langit Senja Coffee", location: "Wonosobo, Central Java", desc: "A casual coffee space designed for slow afternoons, conversations, and good cups.", myRating: "4,5", googleRating: "4,5" },
    { name: "Wonosobo Roastery", location: "Wonosobo, Central Java", desc: "A small coffee space that explores different beans, roasting profiles, and brewing methods.", myRating: "4,5", googleRating: "4,4" }
];

let leftIndex = Math.floor(Math.random() * coffeeshopData.length);
let rightIndex = Math.floor(Math.random() * coffeeshopData.length);
while (rightIndex === leftIndex) {
    rightIndex = Math.floor(Math.random() * coffeeshopData.length);
}

const containerLeft = document.querySelector("#container-left");
const containerRight = document.querySelector("#container-right");

function renderShop(container, index) {
    const shop = coffeeshopData[index];
    container.querySelector(".cs-name").textContent = shop.name;
    container.querySelector(".cs-location").textContent = shop.location;
    container.querySelector(".cs-desc").textContent = shop.desc;
    container.querySelector(".cs-myrating").textContent = shop.myRating;
    container.querySelector(".cs-googlerating").textContent = shop.googleRating;
}

renderShop(containerLeft, leftIndex);
renderShop(containerRight, rightIndex);

const csNavButtons = document.querySelectorAll(".cs-nav");
csNavButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {

        const side = btn.dataset.side;
        const dir = btn.dataset.dir;
        const container = side === "left" ? containerLeft : containerRight;
    function stepIndex(current, dir, exclude) {
        let idx = dir === "up"
        ? (current - 1 + coffeeshopData.length) % coffeeshopData.length
        : (current + 1) % coffeeshopData.length;
    while (idx === exclude) {
        idx = dir === "up"
        ? (current - 1 + coffeeshopData.length) % coffeeshopData.length
        : (current + 1) % coffeeshopData.length;
    }
    return idx;
}

    if (side === "left") {
        leftIndex = stepIndex(leftIndex, dir, rightIndex);
        renderShop(container, leftIndex);
    } else {
        rightIndex = stepIndex(rightIndex, dir, leftIndex);
        renderShop(container, rightIndex);
    }

    });
});
