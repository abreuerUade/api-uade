// eslint-disable-next-line import/no-anonymous-default-export
export default[
    {
        id: 1,
        name: "Hamburguer",
        category:"Fast Food",
        ingredients:  [
            {
                id: 1,
                qty: "1",
                type: "Brioche Bread"
            },
            {
                id: 2,
                qty: "260 g",
                type: "Grouded Beef"
            },
            {
                id: 3,
                qty: "50 g",
                type: " Cheddar Cheese"
            },
            {
                id: 4,
                qty: "1",
                type: "Onion"
            },
            {
                id: 5,
                qty: "1",
                type: "Brioche Bread"
            },
            {
                id: 6,
                qty: "260 g",
                type: "Grouded Beef"
            },
            {
                id: 7,
                qty: "50 g",
                type: " Cheddar Cheese"
            },
            {
                id: 8,
                qty: "1",
                type: "Onion"
            }
    
            ],
        difficulty: "5",
        images:[
            {
                id:1 ,
                src: "hamburguesa.jpg"
            },
            {
                id:2,
                src: "hamburguesa2.jpg"
            },
            {
                id:3,
                src: "hamburguesa3.jpg"
            },
            {
                id:4,
                src: "hamburguesa4.jpg"
            },
        ] , 
        date: "July 18, 2019",
        rate: 4,
        creator: {
            creatorId: 1,
            name:"Donato De Santis",
            pic:"donato.jpg"
        },
        preparation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },

    {
        id: 2,
        name: "Chicken Pasta",
        category:"Italian",
        ingredients:  [
            {   
                id:1,
                qty: "250 g",
                type: "Fresh Pasta"
            },
            {
                id:2,
                qty: "150 g",
                type: "Chicken Breast"
            },
            {
                id:3,
                qty: "200 ml",
                type: "Heavy Cream"
            },
            {
                id:4,
                qty: "1",
                type: "Onion"
            }
    
            ],
        difficulty: "6",
        images:[
            {
                src: "chickenpasta.jpg"
            },
            {
                src: "chickenpasta2.jpg"
            },
            {
                src: "chickenpasta3.jpg"
            },
            {
                src: "chickenpasta4.jpg"
            },
        ] ,
        date: "September 14, 2020",
        rate: 3.5,
        creator: {
            name:"Ariel Palacios",
            pic:"palacios.jpg"
        },
        preparation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },

    {
        id: 3,
        name: "Onion Soup",
        category:"Soup",
        ingredients:  [
            {   
                id:1,
                qty: "1",
                type: "Onion"
            },
            {
                id:2,
                qty: "150 g",
                type: "Butter"
            },
            {
                id:3,
                qty: "200 g",
                type: "Cheese"
            },
        ],
        difficulty: "4",
        images:[
            {
                src: "onionsoup.jpg"
            },
            {
                src: "onionsoup.jpg"
            },
            {
                src: "onionsoup.jpg"
            },
            {
                src: "onionsoup.jpg"
            },
        ] ,
        date: "October 4, 2021",
        rate: 3,
        creator: {
            name:"Maru",
            pic:"botana.jpg"
        },
    },

    {
        id: 4,
        name: "Quesadilla",
        category:"Mexican",
        ingredients:  [
            {   
                id:1,
                qty: "1",
                type: "Tortilla"
            },
            {
                id:2,
                qty: "200 g",
                type: "Cheese"
            },
        ],
        difficulty: "3",
        images:[
            {
                src: "quesadilla.jpg"
            },
            {
                src: "quesadilla.jpg"
            },
            {
                src: "quesadilla.jpg"
            },
            {
                src: "quesadilla.jpg"
            },
        ] ,
        date: "October 8, 2021",
        rate: 4.1,
        creator: {
            name:"Doly",
            pic:"irigoyen.jpg"
        },
    },

    {
        id: 5,
        name: "Cesar Salad",
        category:"Salad",
        ingredients:  [
            {   
                id:1,
                qty: "1",
                type: "Chicken"
            },
            {
                id:2,
                qty: "2",
                type: "Lettuce"
            },
            {
                id:3,
                qty: "200 g",
                type: "Cheese"
            },
            {
                id:4,
                qty:'300 g',
                type:"Crutons"
            }
        ],
        difficulty: "6",
        images:[
            {
                src: "cesar.jpg"
            },
            {
                src: "cesar.jpg"
            },
            {
                src: "cesar.jpg"
            },
            {
                src: "cesar.jpg"
            },
        ] ,
        date: "October 4, 2021",
        rate: 4.6,
        creator: {
            name:"Doly",
            pic:"irigoyen.jpg"
        },
    },
    {
        id: 6,
        name: "Bannana Muffins",
        category:"Bakery",
        ingredients:  [
            {   
                id:1,
                qty: "1",
                type: "Muffins"
            },
            {
                id:2,
                qty: "2",
                type: "Banana"
            },
        ],
        difficulty: "7",
        images:[
            {
                src: "muffins.jpg"
            },
            {
                src: "muffins.jpg"
            },
            {
                src: "muffins.jpg"
            },
            {
                src: "muffins.jpg"
            },
        ] ,
        date: "October 4, 2021",
        rate: 4.7,
        creator: {
            name:"Maru",
            pic:"botana.jpg"
        },
    },
    {
        id: 7,
        name: "Ramen",
        category:"Japanese",
        ingredients:  [
            {   
                id:1,
                qty: "1",
                type: "Onion"
            },
            {
                id:2,
                qty: "150g",
                type: "Butter"
            },
            {
                id:3,
                qty: "250 g",
                type: "Cheese"
           },
           {
            id:4,
            qty: "250 g",
            type: "Rice spaghetti"
           },
        ],
        difficulty: "9",
        images:[
            {
                src: "ramen.jpg"
            },
            {
                src: "ramen.jpg"
            },
            {
                src: "ramen.jpg"
            },
            {
                src: "ramen.jpg"
            },
        ] ,
        date: "October 4, 2021",
        rate: 5,
        creator: {
            creatorId: 1,
            name:"Donato De Santis",
            pic:"donato.jpg"
        },
    },
    {
        id: 8,
        name: "Falafel",
        category:"Arabic",
        ingredients:  [
            {   
                id:1,
                qty: "1",
                type: "Onion"
            },
            {
                id:2,
                qty: "150g",
                type: "Butter"
            },
            {
                id:3,
                qty: "250 g",
                type: "Cheese"
           },
        ],
        difficulty: "7",
        images:[
            {
                
                src: "falafel.jpg"
            },
            {
                src: "falafel.jpg"
            },
            {
                src: "falafel.jpg"
            },
            {
                src: "falafel.jpg"
            },
        ] ,
        date: "October 4, 2021",
        rate: 4.7,
        creator: {
            name:"Ariel Palacios",
            pic:"palacios.jpg"
        },
    },

    
]