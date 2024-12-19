// Function to set banner background image
function setBannerBackground(imageURL) {
    const banner = document.getElementById("banner");
    if (banner) {
        banner.style.backgroundImage = `url('${imageURL}')`;
        banner.style.backgroundSize = "cover";
        banner.style.backgroundPosition = "center";
    }
}

// Function to set footer background image
function setFooterBackground(imageURL) {
    const footer = document.getElementById("footer");
    if (footer) {
        footer.style.backgroundImage = `url('${imageURL}')`;
        footer.style.backgroundSize = "cover";
        footer.style.backgroundPosition = "center";
    }
}

// Function to set the background of a specific card
function updateCardBackground(cardSelector, imageURL) {
    const card = document.querySelector(cardSelector);
    if (card) {
        card.style.backgroundImage = `url('${imageURL}')`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
    } else {
        // Ignore the command if no matching element is found
        console.warn(`No element found for selector "${cardSelector}". Command ignored.`);
    }
}

// Function to set the body's background image
function setBodyBackground(imageURL) {
    const body = document.body;
    if (body) {
        body.style.backgroundImage = `url('${imageURL}')`;
        body.style.backgroundSize = "cover";
        body.style.backgroundPosition = "center center";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundColor = "#c7a361";
    }
}

// Example Usage
setBannerBackground('images/Coffee_Footer.png');
setFooterBackground('images/Coffee_Footer.png');
updateCardBackground('.cafe-card:nth-child(1)', 'images/Notebook.png');
setBodyBackground('/images/Coffee_Background big.png');
