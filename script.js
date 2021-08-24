$(document).ready(()=>{
    setTimeout(()=>{
        let browserWidth = window.innerWidth;
        let translateDistance = browserWidth/2;
        $('.loaderContainer > div:first-of-type').css({
            opacity: 0,
            transform: 'translate(-'+translateDistance+'px)'
        })
        $('.loaderContainer > div:nth-of-type(2)').css({
            opacity: 0,
            transform: 'translate('+translateDistance+'px)'
        })

        $('.loader1').css({
            opacity: 0,
            transform: 'translate('+translateDistance+'px)'
        })

        setTimeout(()=>{
            $('.loaderContainer').hide();
        },500)

    },2000)

    let menuExpand = false;
    $('#menuIcon').on('click',()=>{
        if(!menuExpand){
            expandMenu();
        $('.contactPopUpContainer').css({
            display: 'none'

        })
        menuExpand = true;
        }

        else{
            collapseMenu();
            $('.contactPopUpContainer').css({
                display: 'none'
    
            })
            menuExpand = false;
        }
       
    });

    $('.outFocusMenu').on('click',()=>{
        collapseMenu();
        $('.contactPopUpContainer').css({
            display: 'none'

        })
        menuExpand = false;
    })


    let expandMenu = ()=> {
            $('.outFocusMenu').css({
                display: 'block',
            })
            $('.navigationCollapse').css({
                boxShadow: 'none',
            });

            $('.navRunningBackground').css({
                width: '100%'
            })
    
            $('.navRight div:first-of-type a').css({
                color: 'white',
                transition: 'none',
                textDecoration: 'underline'
            })
    
            $('.navRight div:nth-of-type(2) i').css({
                color: 'white',
                transform: 'rotate(180deg)',
                transition: '0.2s linear 0.5s'
            })
            $('.navigationExpand').css({
                height: '30vh',
                transition: '0.5s ease-in-out'
            })
            $('#navigationLinksContainer ul').css({
                opacity: 1,
                transition: '0.5s ease-in-out 0.5s'
            })
            $('.illustrateImage').css({
                opacity:1,
                transition: '0.5s ease-in-out 0.5s'
            })
            setTimeout(()=>{
                $('.navRight div:nth-of-type(2) i').removeClass('far fa-plus-square');
                $('.navRight div:nth-of-type(2) i').addClass('far fa-minus-square');
                
            },600)

    }

    let collapseMenu = ()=>{
        $('.outFocusMenu').css({
            display: 'none',
        })
        $('.navigationCollapse').css({
            boxShadow: '1px 1px 10px -2px grey',
        }); 

        $('.navRunningBackground').css({
            width: '50%'
        })

        $('.navRight div:first-of-type a').css({
            color: 'rgb(161, 101, 74)',
            transition: '0.2s linear 0.4s',
            textDecoration: 'none'
        })

        $('.navRight div:nth-of-type(2) i').css({
            color: 'rgb(161, 101, 74)',
            transform: 'rotate(0deg)',
            transition: '0.2s linear'
        })
        $('.navRight div:nth-of-type(2) i').removeClass('far fa-minus-square');
        $('.navRight div:nth-of-type(2) i').addClass('far fa-plus-square');
        $('.navigationExpand').css({
            height: '0vh',
            transition: '0.5s ease-in-out'
        })
        $('#navigationLinksContainer ul').css({
            opacity: 0,
            transition: 'none'
        })
        $('.illustrateImage').css({
            opacity:0,
            transition: 'none'
        })
    }

    // Hover function of Navigation Links
    $('#navigationLinksContainer li').on('mouseenter',(event)=>{
        let index = $('#navigationLinksContainer li').index($(event.currentTarget));
        let illustrateImage = index + '.png';
        $('.illustrateImage img').attr('src',illustrateImage);
    });

    $('#navigationLinksContainer li').on('mouseleave',(event)=>{

        $(event.currentTarget).children().css({
            textDecoration: 'none'
        })
    })

    //Click to open the contact tab
    $('#navigationLinksContainer ul li:last-of-type').on('click',()=>{
        collapseMenu();
        $('.outFocusMenu').css({
            display: 'block'
        })
        $('.contactPopUpContainer').css({
            display: 'block'
        })
        menuExpand = false
    })


    //Click to close Contact Popup
    $('.iconRow > div:nth-of-type(2) i').on('click',()=>{
        $('.contactPopUpContainer').css({
            display: 'none'
        })
        $('.outFocusMenu').css({
            display: 'none'
        })
    })

})