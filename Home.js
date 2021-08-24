// Show up body content when page finish loading
$(document).ready(()=>{
    let showUpBodyContent = () =>{
        $('.headerBackground').css({
            transform: 'rotate(0deg)'
        })

        $('.headerBody > div:first-of-type').css({
            opacity:1
        })

        $('.headerContent > div:first-of-type p').css({
            transform: 'translateY(0px)',
            opacity: 1
        })

        $('.seperator').css({
            width: '40%'
        })

        $('.missionDetail').css({
            opacity: 1
        })

    }
    setTimeout(showUpBodyContent,2000);

    // Show bodyContent when Scroll....
    let reviewInforContainerTop = $('.reviewInfoContainer').offset().top;
    let covid19ContainerTop = $('.covid19Container').offset().top;
    let lastScroll = 0;
    let covid19ContainerIsShowed = false;
    $('.bodyContent').scroll(function(){
        // let currentScroll = $(this).scrollTop();
        // if(currentScroll > lastScroll){
        //     // $('.navigationCollapse').css({
        //     //     transform: 'translateY(-100%)',
        //     //     opacity: 0
        //     // });
        //     // $('.bodyContent').css({
        //     //     top: '0%',
        //     //     height: '100%'
        //     // });
            
        // }

        // else{
        //     $('.navigationCollapse').css({
        //         transform: 'translateY(0%)',
        //         opacity: 1
        //     });
        //     $('.bodyContent').css({
        //         top: '12%',
        //         height: '88%'
        //     });
        // }

        // lastScroll = currentScroll;
        showReviewInfoContainer(reviewInforContainerTop);
        showCovid19Container(covid19ContainerTop);
        
    });
    let showReviewInfoContainer = (fixedTop) => { 
        let top = $('.reviewInfoContainer').offset().top;
        if(top <= fixedTop*0.5){
            $('.randomSplatterPaint img').css({
                opacity: 0.6
            })
    
            $('.facebookReview p').css({
                opacity:1
            })
    
            $('.facebookReview p:first-of-type').css({
                transform: 'translate(0px)'
            })

            $('.reviewInfo > div:nth-of-type(2)').css({
                opacity:1
            })
        }
    }

    let showCovid19Container = (fixedTop) => {
        let top = $('.covid19Container').offset().top;
        if(top <= fixedTop*0.3 && covid19ContainerIsShowed == false){
            $('.annoucementTitle p').css({
                opacity:1,
                transform: 'translateY(0px)'
            })
            $('.coverContainer > div').css({
                transform: 'translateX(0%)',
                transform: 'translateY(0%)',
                opacity: 1
            })
            
            covid19ContainerIsShowed = true;

        }

        
    }



//Review photo hover
    $('.reviewPhotoContainer').on('mouseenter',(e)=>{
        $(e.currentTarget).css({
            transform: 'rotate3d(0,-1,0,20deg)'
        })

        $('.reviewPhotoContainer img:nth-of-type(1)').css({
            transform: 'translate3d(-10px,20px,20px)'
        })

        $('.reviewPhotoContainer img:nth-of-type(2)').css({
            transform: 'translate3d(-20px,15px,30px)'
        })

        $('.reviewPhotoContainer img:nth-of-type(3)').css({
            transform: 'translate3d(-40px,10px,40px)'
        })

        $('.reviewPhotoContainer img:nth-of-type(4)').css({
            transform: 'translate3d(-60px,5px,60px)'
        })
    })

    $('.reviewPhotoContainer').on('mouseleave',(e)=>{
        $(e.currentTarget).css({
            transform: 'rotate3d(0,0,0,0deg)'
        })

        $('.reviewPhotoContainer img:nth-of-type(1)').css({
            transform:'translate3d(20px,20px,0px)'
        })

        $('.reviewPhotoContainer img:nth-of-type(2)').css({
            transform:'translate3d(15px,15px,0px)'
        })

        $('.reviewPhotoContainer img:nth-of-type(3)').css({
            transform:'translate3d(10px,10px,0px)'
        })

        $('.reviewPhotoContainer img:nth-of-type(4)').css({
            transform:'translate3d(5px,5px,0px)'
        })
    })

//Pause animation hover marquee

    $('.blurMarqueeBackground').on('mouseenter',()=>{
        $('.blurMarqueeBackground').css({
            zIndex: 3
        })

        $('.list').css({
            zIndex: 4
        })
        $('.list').on('mouseenter',(e)=>{
        
            $(e.currentTarget).css({
                animationPlayState: 'paused'
            });
            $(e.currentTarget).siblings().css({
                animationPlayState: 'paused'
            });
        })

        $('.list').on('mouseleave',(e)=>{
            $(e.currentTarget).css({
                animationPlayState: 'running'
            });
            $(e.currentTarget).siblings().css({
                animationPlayState: 'running'
            });

            $('.blurMarqueeBackground').css({
                zIndex: 4
            })
    
            $('.list').css({
                zIndex: 3
            })
        })
    })
    

    

//Hover Covid-19
let descriptionIsShowed = false;
    $('.coverContainer > div').on('click',(e)=>{
        showDescription(e);
        
    })

    let showDescription = (e) =>{
        $(e.currentTarget).css({
            transform: 'rotate3d(0,-1,0,90deg)',
            opacity: 0,
        })
        

        $(e.currentTarget).siblings().css({
            transform: 'rotate3d(0,0,0,0deg)',
            opacity: 1,
        })

        let index = $('.coverContainer > div').index($(e.currentTarget));

        $('.description').eq(index).css({
            opacity:1
        })

        $('.description').eq(index).siblings().css({
            opacity:0
        })

    }

//click on bookUs
$('.missionDetail button').on('click',()=>{
    $('.contactPopUpContainer').css({
        display: 'block'
    })
    $('.outFocusMenu').css({
        display: 'block'
    })
})

$('.contactDetail button').on('click',()=>{
    $('.contactPopUpContainer').css({
        display: 'block'
    })
    $('.outFocusMenu').css({
        display: 'block'
    })
    $('.bodyContent').scrollTop(0);
})

    
})