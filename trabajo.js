 (function(){
            var addCarVue = new Vue({
                el: '#app',
                data: {
                    heading: 'Vue js',
                    make: null,
                    model: null,
                    makes_options: [],
                    model_options: {}

                },

            methods:{
                init: function(){
                    var self = this;
                    //***************** Marcas ****************************/
                    self.makes_options = [{
                        text: 'Honda',
                        id: 1
                    	},
                        {
                        text: 'Toyota',
                        id: 2
                    	},
                        {
                        text: 'Nissan',
                        id: 3
                    	},
                        {
                        text: 'Suzuki',
                        id: 4
                    	}
                    ];
                    //********************  Modelos **************************///
                self.model_options = {
                    1:[{
                    		text: "Civic Sedán",
                    		id: 1
                    	},
                    	{
                    		text: "Insight",
                    		id: 2
                    		
                    	},
                        {
                            text: "Accord",
                            id: 3
                            
                        },
                        {
                            text: "Clarity Fuel Cell",
                            id: 4
                            
                        },
                        {
                            text: "Civic Hatchback",
                            id: 5
                            
                        },
                        {
                            text: "Civic Type R",
                            id: 6
                            
                        },
                    ],
                    2:[{
                    	text: "Prado",
                    	id: 1
                    	},
                    	{
                    		text: "Corolla",
                    		id: 2
                    	}
                    ],
                    3:[{
                    	text : "Altima",
                    	id: 1
                    	},
                    	{
                    	text: "Zuke",
                    	id: 2
                    	}],
                    4:[{
                    		text: "Alto",
                    		id: 1
                    	},
                    	{
                    		text: "Swift",
                    		id: 2
                    	}
                    ]
                };
            }
        }
    }); 
    

            
            addCarVue.init();
        })();


         