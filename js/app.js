(function() {
    // closure = funcion recursiva, cuando se llama el closure solo utiliza esta parte de codigo, no utiliza el resto
    var app = angular.module('store', []);

    var gem = {
    	name: "Dodecaedron",
    	price: 2.95,
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false
    }

    var gems = [
    	{name: "Ametyst",
    	price: 2.95,
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false
        img: "../public/img/ametyst.jpg"},

    	{name: "Pearl",
    	price: 3.95, 
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false
        img: "../public/img/pearl.jpg"},

    	{name: "Zaphire",
    	price: 4.95,
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false
        img: "../public/img/zaphire.jpg"}, 

        {name: "Quartz",
        price: 4.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false
        img: "../public/img/"},

        {name: "Agata",
        price: 4.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false
        img: "../public/img/"},

        {name: "Pink Diamond",
        price: 4.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: true
        img: "../public/img/"},

        {name: "White Diamond",
        price: 4.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false
        img: "../public/img/"},

        {name: "Blue Diamond",
        price: 4.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false
        img: "../public/img/"},

        {name: "Ruby",
        price: 4.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false
        img: "../public/img/"}
    ];

    app.controller('StoreController', function(){
    	this.products = gems; //Todos los datos que esten dentro de la gema se agregan a el controlador
    });
})();