    $(document).ready(function(){
		
		$('.btn.Page-Transition').click(function(){$("#iframe1").html("");$("#iframe2").html("");});
		$('a').click(function(){ $('video').each(function() { $(this).get(0).pause(); }); });
	
	
		$(".grid a.span2.bg0").click(function() {fadePage(1);});
		$(".grid a.span2.bg1").click(function() {fadePage(2);});
		$(".grid a.span3.bg2").click(function() {fadePage(3);});
		$(".grid a.span3.bg3").click(function() {fadePage(4);setTimeout(loadIframes,1000);});
		$(".grid a.span3.bg4").click(function() {fadePage(5);});
		$(".grid a.span2.bg5").click(function() {fadePage(6);});
		$(".grid a.span2.bg6").click(function() {fadePage(7);loadScript();});
		//$(".grid a.span2.bg2").click({pagenumber:3}, pageFade);
        
        var dheight = $('html').height(),
            cbody = $('body').height(),
            wheight = $(window).height(),
            cheight = wheight - dheight + cbody;
            
        if (wheight > dheight){
            $('body').height(cheight);
        }
        
        $(window).resize(function(){
            wheight = $(window).height();
            noscroll();
            changepush();
        });

        function noscroll(){
           if (wheight > dheight) {
                $('html').addClass('noscroll');
           }

            else if (wheight <= dheight) {
                $('html').removeClass('noscroll');
            }
            
            else {}

        }

        function changepush(){
           if (wheight > dheight) {
                   $('body').height(wheight-dheight+cbody);
           }
            
        }

	});

    var $main = $( '#pt-main' ),
		$pages = $main.children( 'div.pt-page' ),
		$iterate = $( 'a.Page-Transition' ),
		pagesCount = $pages.length,
		current = 0,
		isAnimating = false,
		endCurrPage = false,
		endNextPage = false,
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations;
		
		 $pages.each( function() {
			var $page = $( this );
			$page.data( 'originalClassList', $page.attr( 'class' ) );
		} );

		$pages.eq( current ).addClass( 'pt-page-current' );
    
    
    function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
    }


// -------------------------------------------------------------------------------------- // 
//                          loadNextPage
// -------------------------------------------------------------------------------------- //


function loadNextPage() {

        if( isAnimating ) {
			return false;
		}

		isAnimating = true;
		
		var $currPage = $pages.eq( current );

		if( current < pagesCount - 1 ) {
			++current;
		}
		else {
			current = 0;
		}

		var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = 'pt-page-moveToRight', inClass = 'pt-page-moveFromLeft';
    

		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		$nextPage.addClass( inClass ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

    }

// -------------------------------------------------------------------------------------- // 
//                          loadPreviousPage
// -------------------------------------------------------------------------------------- // 


    function loadPreviousPage() {

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;

		var $currPage = $pages.eq( current );

        
        if( current == 0 ) {
			current = 3; //Number of pages - 1
		}
        else if( current <= pagesCount ) {
			--current;
		}
        else {
            current = 0;
        }


		var $prevPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = 'pt-page-rotateRoomRightOut pt-page-ontop', inClass = 'pt-page-rotateRoomRightIn';


		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $prevPage );
			}
		} );

		$prevPage.addClass( inClass ).on( animEndEventName, function() {
			$prevPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $prevPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $prevPage );
		}

		setTimeout(function() { $('a').fadeTo("slow", 1); }, 700);	

	}

// -------------------------------------------------------------------------------------- // 
//                          ROOM ROTATE
// -------------------------------------------------------------------------------------- //

function fadePage(pagenumber) {

		var $target = $(event.target);
		$target.addClass('selected');
		$('.grid a:not(.selected)').fadeTo("slow", 0);
		// $('.tile').fadeOut('slow');
		$target.removeClass('selected');
		setTimeout(function() { gotoPage(pagenumber); }, 800);

}

 function gotoPage(pagenumber) {

		if(current == pagenumber) {return true;}
     	else {

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;

		var $currPage = $pages.eq( current );

        if( current  != pagenumber ) {
			current = pagenumber;
		}

		var $prevPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop', inClass = 'pt-page-rotateRoomLeftIn';


		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $prevPage );
			}
		} );

		$prevPage.addClass( inClass ).on( animEndEventName, function() {
			$prevPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $prevPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $prevPage );
		}
     }
 }


  function goBackPage(pagenumber) {

		if(current == pagenumber) {return true;}
     	else {

		if( isAnimating ) {
			return false;
		}

		isAnimating = true;

		var $currPage = $pages.eq( current );

        if( current  != pagenumber ) {
			current = pagenumber;
		}

		var $prevPage = $pages.eq( current ).addClass( 'pt-page-current' ),
			outClass = 'pt-page-rotateRoomRightOut pt-page-ontop', inClass = 'pt-page-rotateRoomRightIn';


		$currPage.addClass( outClass ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $prevPage );
			}
		} );

		$prevPage.addClass( inClass ).on( animEndEventName, function() {
			$prevPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $prevPage );
			}
		} );

		if( !support ) {
			onEndAnimation( $currPage, $prevPage );
		}

		setTimeout(function() { $('.grid a').fadeTo("slow", 1); }, 700);
     }
 }






    
