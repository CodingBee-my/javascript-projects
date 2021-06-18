const items = [
    {
        id: 1,
        name: "Waffle",
        price: 8.0,
        description: "A waffle is a dish made from leavened batter or dough that is cooked between two plates.",
        image: "./images/item-1.jpeg",
        category: "Breakfast"
    },
    {
        id: 2,
        name: "Nasi Lemak",
        price: 13.99,
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        image: "./images/item-1.jpeg",
        category: "Lunch"
    },
    {
        id: 3,
        name: "Chicken Chop",
        price: 21.99,
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        image: "./images/item-1.jpeg",
        category: "Dinner"
    },
    {
        id: 4,
        name: "French Toast",
        price: 10.50,
        description: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        image: "./images/item-1.jpeg",
        category: "Breakfast"
    }
];

displayMenu("All");

function displayMenu(category) {

    setActiveButton(category);

    // Empty the container
    document.querySelector(".container").innerHTML = "";

    for (let index = 0; index < items.length; index++) {
        const item = items[index];

        // Add a second condition
        // OR
        if (category == "All" || category == item.category) {
            document.querySelector(".container").innerHTML += 
                `<div class="menu-item">
                    <img class="menu-image" src="${ item.image }" alt="">
                    <div class="menu-content">
                        <div class="menu-header">
                            <div class="item-name">${ item.name }</div>
                            <div class="item-price">$${ item.price }</div>
                        </div>
                        <div class="menu-desc">
                        ${ item.description }
                        </div>
                    </div>
                </div>`
        }      
    }
}


function setActiveButton(category) {
    // We loop all the buttons
    // If the category is equal
    // We add "active" button to the button
    // Other buttons we remove the class
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        if (category == button.innerHTML) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    })
}
