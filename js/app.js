(function() {
    // closure = funcion recursiva, cuando se llama el closure solo utiliza esta parte de codigo, no utiliza el resto
    var app = angular.module('store', []);

    var gem = {
    	name: "Dodecaedron",
    	price: 2.95,
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false
        // img: "../public/img/pearl.jpg"
    }

    var gems = [
    	{name: "Ametyst",
    	price: 2.95,
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false,
        img: "./public/img/gem-01.gif"},

    	{name: "Pearl",
    	price: 3.95, 
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false,
        img: "./public/img/gem-02.gif"},

    	{name: "Zaphire",
    	price: 4.95,
    	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
    	canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
    	soldOut: false,
        img: "./public/img/gem-03.gif"}, 

        {name: "Quartz",
        price: 1.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false,
        img: "./public/img/gem-04.gif"},

        {name: "Agata",
        price: 1.25,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false,
        img: "./public/img/gem-05.gif"},

        {name: "Pink Diamond",
        price: 10.95,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: true,
        img: "./public/img/gem-06.gif"},

        {name: "White Diamond",
        price: 7.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false,
        img: "./public/img/gem-07.gif"},

        {name: "Blue Diamond",
        price: 7.75,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false,
        img: "./public/img/gem-08.gif"},

        {name: "Ruby",
        price: .99,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque commodi, dolorum veniam ullam, explicabo deserunt, dolor soluta maxime est aliquam dignissimos, optio! Blanditiis, impedit, aliquid repudiandae vero doloremque voluptates pariatur.",
        canPurchase: false, //la forma de la que escriben es la forma en la que programa.  
        soldOut: false,
        img: "./public/img/gem-09.gif"}
    ];

    app.controller('StoreController', function(){
    	this.products = gems; //Todos los datos que esten dentro de la gema se agregan a el controlador
    });
})();