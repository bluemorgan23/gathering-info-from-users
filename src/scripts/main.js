getLego().then(response => appendLegoToDom(response));

const container = document.querySelector("#lego__container");

const legoCreation = {
    id: 1,
    creator: "Per Sun",
    color: "Black",
    shape: "Animal",
    creation: "Black Cow"
};

const buildElementWithText = (element, text) => {
    const newElement = document.createElement(element);
    newElement.textContent = text;
    return newElement;
}

const buildLegoHTML = (obj) => {
    const div = document.createElement("div")
    div.appendChild(buildElementWithText("h2", obj.creator));
    div.appendChild(buildElementWithText("p", obj.color));
    div.appendChild(buildElementWithText("p", obj.shape));
    div.appendChild(buildElementWithText("p", obj.creation));

    return div;
}

const createLegoBrick = (creator, color, shape, creation) => {
    return {
        creator: creator,
        color: color,
        shape: shape,
        creation: creation
    }
};

const appendLegoToDom = (array) => {
    
    array.forEach(obj => {
        container.appendChild(buildLegoHTML(obj));
    })
    return container;
}

document.querySelector(".lego__save").addEventListener("click", event => {
    const legoCreator = document.querySelector("#lego__creator").value;
    const legoColor = document.querySelector("#lego__color").value;
    const legoShape = document.querySelector("#lego__shape").value;
    const legoCreation = document.querySelector("#lego__creation").value;
    let colorString = "";

    switch(legoColor){
        case("1"):
        colorString = "Red";
        break;
        case("2"):
        colorString = "Green";
        break;
        case("3"):
        colorString = "Yellow";
        break;
        case("4"):
        colorString = "Blue";
        break;
        case("5"):
        colorString = "Orange";
        break;
        case("6"):
        colorString = "Black"
        break;
    }

    // Once you have collected all the values, build your data structure
    const legoToSave = {
        creator: legoCreator,
        color: colorString,
        shape: legoShape,
        creation: legoCreation
    };

    while(container.firstChild){
        container.removeChild(container.firstChild)
    };

    postLego(legoToSave)
    .then(() => getLego())
    .then(response => appendLegoToDom(response));
    
})

