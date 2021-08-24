$(document).ready(()=>{
    //hover review to show up scroll bar
    $('.review').mouseenter((e)=>{
        $(e.currentTarget).addClass('showScrollbar');
    })

    $('.review').mouseleave((e)=>{
        $(e.currentTarget).removeClass('showScrollbar');
    })

    //Review Silder event

    $('.reviewSlider').ready(()=>{
        let count = 0;
        let length = $('.review').length;

        //click event to slide
        $('.rightButton i').on('click', ()=>{
            SildingForward(count);
            count++;
            if(count== length-1){
                $('.rightButton i').css({
                    display: 'none'
                })

            }

            else{
                $('.rightButton i').css({
                    display: 'block'
                });

                $('.leftButton i').css({
                    display: 'block'
                })

            }
        })

        

        $('.leftButton i').on('click',()=>{
            SlidingBackward(count);
            count--;
            if(count== 0){
                $('.leftButton i').css({
                    display: 'none'
                })

            }

            else{
                $('.rightButton i').css({
                    display: 'block'
                });

                $('.leftButton i').css({
                    display: 'block'
                })

            }
        })

        //swipe right to see review


        // click to zoom image

        $('.imageContainer img').on('click',(e)=>{
            //set image src for zoom image
            let source = $(e.currentTarget).attr('src');
            $('.imageZoomContainer img').attr('src',source);
            $('.blurBackgroundImageContainer').css({
                backgroundImage: 'url('+source+')'
            })

            $('.imageZoomContainer img').ready(()=>{
                $('.imageZoom').css({
                    display: 'flex'
                })
            })
            


        })

        //click to close Zoom Image
        $('.imageZoomContainer i').on('click',()=>{
            $('.imageZoom').css({
                display: 'none'
            })
        })
    })

    //funtion of review sliding
    let SildingForward = (count) =>{
        $('.review').eq(count).css({
            transform: 'scale(0.9,0.9)',
            pointerEvents: 'none',
            });
        $('.review').eq(count).find('.fadedBackground').css({
            opacity: 1,
        });

        count++;

        $('.review').eq(count).css({
            transform: 'scale(1,1)',
            pointerEvents: 'auto',
            filter: 'none'
        });

        
        $('.review').eq(count).find('.fadedBackground').css({
            opacity: 0,
        });

        $('.reviewSlider').css({
            transform: 'translateX(-'+100*count+'%)'
        })
    }

    let SlidingBackward = (count) => {
        $('.review').eq(count).css({
            transform: 'scale(0.9,0.9)',
            pointerEvents: 'none',
        });

        $('.review').eq(count).find('.fadedBackground').css({
            opacity: 1
        });

        count--;

        $('.review').eq(count).css({
            transform: 'scale(1,1)',
            pointerEvents: 'auto',
            filter: 'none'

        });

        $('.review').eq(count).find('.fadedBackground').css({
            opacity: 0
        });

        $('.reviewSlider').css({
            transform: 'translateX(-'+100*count+'%)'
        })
    }

    // click to show reviewUS on mobile

    $('.reviewUsMobile').on('click',()=>{
        $('.reviewUs').css({
            transform: 'translateY(-100%)'
        });
        $('.reviewUsMobile').css({
            opacity:0,
            transitionDelay: '0.25s'
        })
        $('.outFocusBodyContent').css({
            display: 'block'
        })
    })

    //click to close reviewUs on mobile

    $('.reviewUs > div > i').on('click',()=>{
        hideReviewUs();
    })

    $('.outFocusBodyContent').on('click',()=>{
        hideReviewUs();
    })

    let hideReviewUs = ()=>{
        $('.reviewUs').css({
            transform: 'translateY(0%)'
        });
        $('.reviewUsMobile').css({
            opacity: 1,
            transition: '0.5s ease-in-out 0.3s'
        })
        $('.outFocusBodyContent').css({
            display: 'none'
        })
    }
})