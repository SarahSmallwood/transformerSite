// DOM MANIPULATION

// Goal: Retail Site 
    // Dynamically change the Entire Site with a click of a button
    // General -- Mens -- Womens -- Children


    let majorContainer ={
        mens: {
            headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
            productImages: [
                {
                    name: 'Sneakers',
                    pic: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boots',
                    pic: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Flannels',
                    pic: "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Scarves',
                    pic: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hoodies',
                    pic: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Hats',
                    pic: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80"
                },
            ],
            textDescription: 'Update your everyday wardrobe with our collection of mens pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants.',
            lowImage: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        womens: {
            headImage: "https://unsplash.com/photos/GLg0z5z8EQU",
            optionTags: ["Dresses", "Tops", "Shoes", "Jeans"],
            productImages: [
                {
                    name: 'Dresses',
                    pic: "https://plus.unsplash.com/premium_photo-1673481601147-ee95199d3896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Tops',
                    pic: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: 'Shoes',
                    pic: "https://images.unsplash.com/photo-1600054904350-1d493ae5f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                },
                {
                    name: 'Jeans',
                    pic: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                },
                {
                    name: 'Accessories',
                    pic: "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1459&q=80"
                },
                {
                    name: 'Coats',
                    pic: "https://images.unsplash.com/photo-1619473918387-2710c35e3bf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                },
            ],
            textDescription: 'Refresh your daily rotation with our womens clothing range. With the freshest styles available all in one place, you can expect everyday basics, like womens tops and skirts, as well as must-have knitwear and cozy loungewear for downtime days.',
            lowImage: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
        },
        kids: {
            headImage: "https://images.unsplash.com/photo-1560859259-fcf2b952aed8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            optionTags: ["Baby", "Girls (2 to 8y)", "Boys (2 to 8y)", "Girls (9-14y)"],
            productImages: [
                {
                    name: 'Baby',
                    pic: "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                },
                {
                    name: 'Girls (2-8y)',
                    pic: "https://images.unsplash.com/photo-1476234251651-f353703a034d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                },
                {
                    name: 'Boys (2-8y)',
                    pic: "https://images.unsplash.com/photo-1529776292731-c2246c65df5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
                {
                    name: 'Girls (9-14y)',
                    pic: "https://images.unsplash.com/photo-1541580620-23a640b30338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80"
                },
                {
                    name: 'Boys (9-14y)',
                    pic: "https://images.unsplash.com/photo-1520923179278-ee25e25e09e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                },
            ],
            textDescription: 'Refill on their everyday essentials with our kids clothes. You will find an extensive selection of kids tops and T-Shirts featuring colors that pop, plus adorable designs to suit their personality. Pair their favorite cardigan or sweater with our kids jeans and pants. You will find an array of cuts and styles, including chinos and cargo pants, to name a few.',
            lowImage: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
        },
        }
    
// -----------------------

let mainImage = document.querySelector('.mainImg')
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox= document.querySelector('.textContainer')




const changeAll = (category) => {
    console.log(category)

    if (category === 'Mens') {
        console.log('Mens')
        let newimage = document.createElement('img');
            newimage.setAttribute('src', majorContainer.mens.headImage);
            newimage.setAttribute('class','topPic')
        // replaceWith current
        mainImage.replaceWith(newimage)
        majorContainer.mens.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        });
        majorContainer.mens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        });
    } else if (category === 'Womens') {
        console.log('Womens')
        let newimage = document.createElement('img')
        newimage.setAttribute('src', majorContainer.womens.headImage)
        newimage.setAttribute('class','topPic')
    // replaceWith current
        mainImage.replaceWith(newimage)
        majorContainer.womens.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        });
        majorContainer.womens.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        });
    } else {
        console.log('Kids')
        let newimage = document.createElement('img')
        newimage.setAttribute('src', majorContainer.kids.headImage)
        newimage.setAttribute('class','topPic')
            // replaceWith current
        mainImage.replaceWith(newimage)
        majorContainer.kids.optionTags.forEach((tagname)=>{
            // CREATE ELE
            let txt = document.createElement('div')
            txt.innerHTML = tagname
            // REPLACE ELEMENT WITH NEW ELEMENT
            option.append(txt)
        });
        majorContainer.kids.productImages.forEach((obj)=>{
            let shopBox  = document.createElement('img')
            shopBox.setAttribute('src',obj.pic)
            shopBox.setAttribute('class','product')
            productBox.append(shopBox)
        });

    }
};

    // changeTopPic = () => {
    //     const changeTopPic = () =>{
    //     // createImage 
    //     console.log("sadasd")
    //     let newimage = document.createElement('img');
    //         newimage.setAttribute('src', majorContainer.mens.headImage);
    //         newimage.setAttribute('class','topPic')
    //     // replaceWith current
    //     mainImage.replaceWith(newimage)

    // };
        // let newimage = document.createElement('img')
        //     newimage.setAttribute('src', majorContainer.womens.headImage)
        //     newimage.setAttribute('class','topPic')
        // // replaceWith current
        // mainImage.replaceWith(newimage)

    
    // let newimage = document.createElement('img')
    // newimage.setAttribute('src', majorContainer.kids.headImage)
    // newimage.setAttribute('class','topPic')
    //     // replaceWith current
    // mainImage.replaceWith(newimage)

    
    // changeOptions = () => {
    //     const changeOptions = () =>{
    //         majorContainer.optionTags.forEach((tagname)=>{
    //             // CREATE ELE
    //             let txt = document.createElement('div')
    //             txt.innerHTML = tagname
    //             // REPLACE ELEMENT WITH NEW ELEMENT
    //             option.append(txt)
    //         });
    //         majorContainer.womens.optionTags.forEach((tagname)=>{
    //             // CREATE ELE
    //             let txt = document.createElement('div')
    //             txt.innerHTML = tagname
    //             // REPLACE ELEMENT WITH NEW ELEMENT
    //             option.append(txt)
    //         });
    //         majorContainer.kids.optionTags.forEach((tagname)=>{
    //             // CREATE ELE
    //             let txt = document.createElement('div')
    //             txt.innerHTML = tagname
    //             // REPLACE ELEMENT WITH NEW ELEMENT
    //             option.append(txt)
    //         });

    //     }
    // }
    // changeProduct = () => {
    //     const product= () => {
    //         majorContainer.productImages.forEach((obj)=>{
    //             let shopBox  = document.createElement('img')
    //             shopBox.setAttribute('src',obj.pic)
    //             shopBox.setAttribute('class','product')
    //             productBox.append(shopBox)
    //         });
    //     }
    // }
    //         majorContainer.womens.productImages.forEach((obj)=>{
    //             let shopBox  = document.createElement('img')
    //             shopBox.setAttribute('src',obj.pic)
    //             shopBox.setAttribute('class','product')
    //             productBox.append(shopBox)
    //         });
    //         majorContainer.kids.productImages.forEach((obj)=>{
    //             let shopBox  = document.createElement('img')
    //             shopBox.setAttribute('src',obj.pic)
    //             shopBox.setAttribute('class','product')
    //             productBox.append(shopBox)
    //         });

