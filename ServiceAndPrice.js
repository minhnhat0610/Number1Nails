$(document).ready(()=>{
    //Handlebars to fill in the service title
    const serviceTemplateSource = $('#serviceTemplate').html();
    const priceTemplateSource = $('#priceTemplate').html();
    const template = Handlebars.compile(serviceTemplateSource);
    const priceTemplate = Handlebars.compile(priceTemplateSource);

    let serviceTitle = {
        serviceArray: [
            {name1: 'Hand', name2: 'Treatments'},
            {name1: 'Foot', name2: 'Treatments'},
            {name1: 'Dip', name2: 'Nails'},
            {name1: 'Nails', name2: 'Enhancements'},
            {name1: 'Additional', name2: 'Services'},
            {name1: 'Waxing', name2: 'Services'},
            {name1: 'Removal', name2: 'Services'},
            {name1: 'Children 10', name2: '& Under'},

        ]
    }

    let price = {
        priceArray: [

            {
                serviceName: 'Hand Treatments',
                serviceDescription: [
                    {
                        description: 'Basic Manicure',
                        price: '$18'
                    },
                    {
                        description: 'Paraffin Manicure',
                        price: '$25'
                    },
                    {
                        description: 'Gel/Shellac Manicure',
                        price: '$40'
                    },
                ]
            },

            {
                serviceName: 'Foot Treatments',
                serviceDescription: [
                    {
                        description: 'Basic Pedicure',
                        price: '$30'
                    },
                    {
                        description: 'Deluxe Spa Pedicure',
                        price: '$40'
                    },

                    {
                        description: 'Paraffin Spa Pedicure',
                        price: '$55'
                    },

                    {
                        description: 'Big Toe Repair With Acylic',
                        price: '$5'
                    },

                    {
                        description: 'French Polish',
                        price: '$5 add'
                    },

                    {
                        description: 'Add Paraffin Wrap',
                        price: '$15'
                    },

                    {
                        description: 'Add Gel/Shellac Polish',
                        price: '$20 add'
                    },

                    {
                        description: 'Shellac Remove',
                        price: '$10'
                    },

                ]
            },

            


            {
                serviceName: 'Dip Nails',
                serviceDescription: [
                    {
                        description: 'Dip Powder Nails',
                        price: '$40 & up'
                    },
                    {
                        description: 'Dip Powder Nails w. White Tip',
                        price: '$50'
                    },
                  
                ]
            },

            {
                serviceName: 'Nails Enhancements',
                serviceDescription: [
                    {
                        description: 'Acrylic Full Set',
                        price: '$30'
                    },
                    {
                        description: 'Acrylic Overlays',
                        price: '$30'
                    },
                    {
                        description: 'Acrylic Fill-in',
                        price: '$20'
                    },
                    {
                        description: 'Acrylic Full Set Gel Powder',
                        price: '$40'
                    },

                    {
                        description: 'Overlays Gel Powder',
                        price: '$40'
                    },
                    {
                        description: 'Fill-in Gel Powder',
                        price: '$25'
                    },
                    {
                        description: 'Pink & White Full Set',
                        price: '$55'
                    },
                    {
                        description: 'Pink & White Fill-In',
                        price: '$45'
                    },
                    {
                        description: 'Pink Fill-In',
                        price: '$30'
                    },
                ]
            },
            {
                serviceName: 'Additional Services',
                serviceDescription: [
                    {
                        description: 'French / Color Tips',
                        price: '$5'
                    },
                    {
                        description: '(1) Nail Repair',
                        price: '$3'
                    },
                    {
                        description: 'Nails Cut/File Down',
                        price: '$3'
                    },
                    {
                        description: 'Take Off Gel Topcoat',
                        price: '$5'
                    },
                    {
                        description: 'Paraffin Hand Dip',
                        price: '$7'
                    },
                ]
            },
            {
                serviceName: 'Waxing Services',
                serviceDescription: [
                    {
                        description: 'Eyebrows',
                        price: '$12'
                    },
                    {
                        description: 'Upper Lip',
                        price: '$8'
                    },
                    {
                        description: 'Chin',
                        price: '$10'
                    },
                    {
                        description: 'Full Face',
                        price: '$35'
                    },
                    
                ]
            },
            {
                serviceName: 'Removal Services',
                serviceDescription: [
                    {
                        description: 'Soak off set',
                        price: '$15'
                    },
                    {
                        description: 'Soak off Shellac',
                        price: '$10'
                    },
                    {
                        description: 'Remove Polish',
                        price: '$5'
                    },
                    
                ]
            },
            {
                serviceName: 'Polish Change',
                serviceDescription: [
                    {
                        description: 'Nails',
                        price: '$10'
                    },
                    {
                        description: 'French Nails',
                        price: '$12'
                    },
                    {
                        description: 'toes',
                        price: '$15'
                    },
                    {
                        description: 'French Toes',
                        price: '$18'
                    },
                    
                ]
            },
            {
                serviceName: 'Children 10 And Under',
                serviceDescription: [
                    {
                        description: 'Pedicure',
                        price: '$25'
                    },
                    {
                        description: 'Manicure',
                        price: '$12'
                    },
                    {
                        description: 'Shellac',
                        price: '$25'
                    },
                    {
                        description: 'Polish Nails',
                        price: '$5'
                    },
                    {
                        description: 'Polish Toes',
                        price: '$10'
                    },
                    
                ]
            },
        ],

        priceArrayIndex: 0
    }



    let fill = template(serviceTitle);
    $('.serviceGroupContent').append(fill);


    $('.serviceGroupContent').ready(()=>{
            // click event for service name
    $('.serviceName > div:nth-of-type(2) p').on('click',(e) =>{
        // get the icon
        let icon = $(e.currentTarget).parent().siblings().find('i');

        $(icon).css({
            transform: 'rotate(360deg)',
            transition: '0.5s ease-in-out'
        });

        $(e.currentTarget).parents('.service').css({
            height: '20vh',
            transition: '0.5s ease-in-out'

        });

        $(e.currentTarget).css({
            color: 'rgb(204,135,96)',
            transform: 'scale(1.2,1.2)',
            transition: '0.5s ease-in-out 0.5s'

        });

        $(e.currentTarget).parents('.service').children('.runningBackground').css({
            width: '99.5%',
            height: '20vh',
            transition: 'width 0.5s ease-in-out 0.5s'

        });

        $(e.currentTarget).parents('.service').children('.runningBackground').find('.textShadow').css({
            transform: 'translateX(0%)',
            transition: 'transform 0.5s ease-in-out 1s'

        })

        //get service title of the current clicked element
        let serviceNameString = $(e.currentTarget).text();

        if(window.innerWidth <= 1024){
            let runningBackgroundWidth = $(e.currentTarget).parents('.service').children('.runningBackground').css('width');
            if(runningBackgroundWidth > '0px'){
                $('.serviceGroup').css({
                    transform: 'translateX(-100%)',
                    transition: '1s ease-in-out'
    
                })
            }

            else{
                $('.serviceGroup').css({
                    transform: 'translateX(-100%)',
                    transition: '1s ease-in-out'
    
                })
            }

            //Change ServiceTitle in div.detail in mobile
            $('.serviceTitle p').text(serviceNameString);
           
        }


        // close any service name open
        let currentService = $(e.currentTarget).parents('.service');
        let serviceContainer = currentService.parent();
        // collection of the rest div.service
        let service = serviceContainer.siblings('.serviceContainer').children();
        

        // make the icon rotate
        $(service.find('i')).css({
            transform: 'rotate(0deg)',
            transition: '0.5s ease-int-out'
        })

        //translate textShadow back to origin position
        $(service.children('.runningBackground').find('.textShadow:nth-of-type(1)')).css({
            transform: 'translateX(100%)',
            transition: 'transform 0.5s ease-in-out'
        });

        $(service.children('.runningBackground').find('.textShadow:nth-of-type(2)')).css({
            transform: 'translateX(-100%)',
            transition: 'transform 0.5s ease-in-out'

        });

        // close runningBackground
        $(service.children('.runningBackground')).css({
            width: '0%',
            height: '15vh',
            transition: '0.5s ease-in-out 0.5s'
        });
        
        //change color of the service name to white
        $(service.find('.serviceName p')).css({
            color:'white',
            transform: 'scale(1,1)',
            transition: '0.5s ease-in-out 0.5s'

        });

        $(service).css({
            height: '15vh',
            transition: '0.5s ease-in-out 0.5s'
        });

        $('.bookUs button').css({
            opacity: 0,
            transition: 'none',
        })


        //load the price and detail
        price.priceArray.forEach((element, index) => {
            if(element.serviceName == serviceNameString){
                price.priceArrayIndex = index;
                return;
            }
        })

        let fillPriceDetail = priceTemplate(price.priceArray[price.priceArrayIndex]);
        $('.detailRowContainer').html(fillPriceDetail);

        $('.detailRowContainer').ready(()=>{
            $('.detailRow').css({
                opacity: 1,
                transform: 'scale(1,1)'
            })

            if($('.detailRowContainer').css('height') > $('.detail').css('height')){
                $('.detail').css({
                    justifyContent: 'flex-start'
                })
            }

            else{
                $('.detail').css({
                    justifyContent: 'center'
                })
            }

            // $('.priceContainer').css({
            //     transform: 'translateX(0%)',
            //     opacity: 1
            // })

            $('.bookUs button').css({
                opacity: 1,
                transition: 'opacity 0.5s ease-in-out 0.5s'
            })
        })
        

        
    })
    })
    


    // click event to open the service list menu on mobile
    $('.serviceNameMenuIcon i').on('click',()=>{
        $('.serviceGroup').css({
            transform: 'translateX(0%)',
            transition: '1s ease-in-out'
        })
    })

    $('.clickTriggerMobile').on('click',()=>{
        $('.serviceGroup').css({
            transform: 'translateX(-100%)',
            transition: '1s ease-in-out'
        })
    })

    //click BookUs button
    $('.bookUs button').on('click',()=>{
        $('.contactPopUpContainer').css({
            display: 'block'
        })
        $('.outFocusMenu').css({
            display: 'block'
        })
    })

    
})