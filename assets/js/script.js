fetch("./assets/js/watchesJson.json")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const products = document.querySelector(".products")
        for (let i = 0; i <= data.watches.length; i++) {
            const newArticle = document.createElement("article")
            products.append(newArticle)
            newArticle.setAttribute("class", "product")

            const newTitle = document.createElement("h3")
            newTitle.textContent = data.watches[i].name;
            newArticle.append(newTitle)
            newTitle.setAttribute("class", "product-title")

            const newImg = document.createElement("img")
            newArticle.append(newImg)
            newImg.setAttribute("src", `./assets/img/${[i+1]}.jpg` )
            newImg.setAttribute("alt", data.watches[i].name)

            const newP = document.createElement("p")
            newArticle.append(newP)
            newP.textContent = data.watches[i].description;
            newP.setAttribute("class", "product-description")
            
            const newP1 = document.createElement("p")
            newArticle.append(newP1)
            newP1.textContent = data.watches[i].price
            newP1.setAttribute("class", "product-price")

            const newButton = document.createElement("button")
            newArticle.append(newButton)
            newButton.textContent = "Tilføj til kurv";
            const newI = document.createElement("i")
            newButton.append(newI)
            newI.classList.add("fa-solid", "fa-cart-plus")

        }
    })
    .catch(err => console.log(err))

