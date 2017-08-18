// init bulma lib
var bulma = bulma || {};

/**
* Retrieves the site ID
*/
bulma.siteInfo = (function () {
  // Settings variable
  var siteMap = {
      // Bulma home
      'bulma.com' : {
        siteID : 'bulma-main',
        language : 'en',
        countryID : 'US'
      },
  };

  // Retrieves site Obj based off of URL
  getSiteObj = function(url){
    // trim URL, if not passed set to current location
    var url = ( url ? url : '/' /*window.location.toString()*/ );
    var urlTrimmed = typeof url === 'string' && url.length ? url.match(/[^\s\t\n\r]+/)[0] : null;
    if( urlTrimmed === null ){
      return false;
    }

    // split the URL into protocol, hostname, path, params and hash
    var urlSplit = urlTrimmed.match(/^([a-z\:]*\/\/)?(?:([a-z0-9\-\_]+)\.)?([a-z0-9\-\_]+\.[a-z\.]{2,})([^\?\&\#]*)\??([^\#]*)\#?(.*)$/i);
    if( urlSplit === null ) return false;

    for( var i = 0; i < urlSplit.length; i++ ){
        if( typeof urlSplit[i] === 'undefined' ){
            urlSplit[i] = '';
        }
    }

    // pull host name from split url object
    var domainName = urlSplit[3];

    // make sure domainName is valid from site manipulation
    var siteObj = (typeof siteMap[domainName] === 'undefined' ? null : siteMap[domainName]);
    if ( typeof siteObj === 'undefined' || siteObj === null ) return false;

    // return site object following siteMap object
    return siteObj;
  };

  // Sets a list of public functions
  sitePublic = {};

  // site object
  sitePublic.siteObj = function(url) {
    return getSiteObj(url);
  };

  // site ID
  sitePublic.siteID = function(url) {
    var siteObj = getSiteObj(url);
    return siteObj.siteID;
  };

  // site language
  sitePublic.siteLanguage = function(url) {
    var siteObj = getSiteObj(url);
    return siteObj.language;
  };

  // site country code
  sitePublic.siteCountryID = function(url) {
    var siteObj = getSiteObj(url);
    return siteObj.countryID;
  };

  // return public method
  return sitePublic;

}());

/**
* Retrives device information for current user
* bulma.device.currentBreakpoint() - returns user device by browser size (desktop/tablet/mobile)
* bulma.device.breakpointStyleMap() - returns an object of CSS breakpoints mimicing what would be called in the CSS
*/
bulma.device = (function () {
  // bulma device range
  var mediaQueries = {
    mobile: 767,
    tablet: {min: 768, max: 1199},
    desktop: {min: 1200, max: 1343},
    fullhd: 1344,
  };

  // settings to get passed into options
  var settings = {
    mediaQueries : mediaQueries,
    breakpointStyleMap: {
			mobile: 'screen and (max-width: '+ mediaQueries.mobile +'px)',
			tablet: 'screen and (min-width: '+ mediaQueries.tablet.min +'x) and (max-width: '+ mediaQueries.tablet.max +'px)',
            desktop: 'screen and (min-width: '+ mediaQueries.desktop.min +'x) and (max-width: '+ mediaQueries.desktop.max +'px)',
			fullhd: 'screen and (min-width: '+ mediaQueries.fullhd +'px)'
		}
	};

  //Returns a string of the current device based on browser width
  getBreakpoint = function() {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    browserW  = w.innerWidth || e.clientWidth || g.clientWidth,
    browserH  = w.innerHeight|| e.clientHeight|| g.clientHeight,
    device    = null;

    // get the device range
    switch(true) {
        case (browserW < mediaQueries.tablet.min):
          device = 'mobile'
          break;
        case (browserW <= mediaQueries.tablet.max && browserW >= mediaQueries.tablet.min):
          device = 'tablet'
          break;
        case (browserW <= mediaQueries.desktop.max && browserW >= mediaQueries.desktop.min):
            device = 'desktop'
            break;
        default:
          device = 'fullhd'
    }
    return device;
  };

  // Sets a list of public functions
  devicePublic = {};

  // static breakpoint
  devicePublic.currentBreakpoint = function() {
    return getBreakpoint();
  };

  // breakpoint CSS mapping
  devicePublic.breakpointStyleMap = function(size){
    return typeof size !== 'undefined' ? settings.breakpointStyleMap[size] : settings.breakpointStyleMap ;
  };

  // return public method
  return devicePublic;

}());
//--------------------------------------------//
/**
* Modal Options
* Dynamically create popup modals.
* Will attempt to use href's target; but you can add custom triggers and targets as well
* Contains callbacks on open and close events
* Useage:
    // init modal items
    $('.modal-button').each( function () {
        new bulma.modal({
            trigger : $(this),
            target : $(this).attr('href'),
            modalOpen : function() {
                console.log('modal open');
            },
            modalClose : function() {
                console.log('modal close');
            }
        });
    });
    
*/
bulma.modal = function(settings) {
    // kill function if no trigger set
    if ( !settings.trigger ) return false;

    // get default settings
    var thatModal = this;
    var object = this.settings = settings;
    var _settings = {
        trigger   : settings.trigger,
        elmClass  : 'modal-active',
        bindOn    : 'click',
        
        // modal settings & class names
        targetHook  : '.modal',

        // scroll fix settings
        overflow : 'hidden',
        width : '100%',
    };
    // merge default and custom settings into one object
    var _settings = Object.assign({}, _settings, object);

    // set modal target
    _settings.target = jQuery( _setTargetFromHref() );

    // attempts to set target from the trigger href
    function _setTargetFromHref() {
        if ( !_settings.target ) {
            // check for href
            if ( _settings.trigger && _settings.trigger.is( 'a' ) && _settings.trigger.attr( 'href' ) ) {
                var triggerHref = _settings.trigger.attr( 'href' );
                return triggerHref;
            }
        } else {
            return _settings.target;
        }
    }

    // toggle body styles to prevent window from scrolling
    function setBodyCSS() {
        jQuery('html').css({
            overflow:   jQuery(_settings.targetHook).hasClass(_settings.elmClass) == false ? '' : _settings.overflow,
            width:      jQuery(_settings.targetHook).hasClass(_settings.elmClass) == false ? '' : _settings.width, 
        })
    }

    // Fixes safari issues with bootstrap 2.0 modals
    //Allows scrolling on elements transform in Safari
    function fixSafariScrolling(event) {
        event.target.style.overflowY = 'hidden';
        setTimeout(function () { event.target.style.overflowY = 'auto'; });
    }

    // modal open function
    this.modalAction = function(callback) {
        
        // toggle modal
        jQuery(_settings.target).stop(true, true).fadeToggle().toggleClass(_settings.elmClass);
        
        // reset body css so no jumping takes place
        setBodyCSS();
        
        // callback
        _modalComplete(
            jQuery(_settings.target).hasClass(_settings.elmClass) ? 'open' : 'close'
        );
    }

    // bind event which triggers modal actions
    function _bindTriggerOpenEvent(){
        _settings.bindOn = ( _settings.bindOn === 'hover' ? 'mouseover' : _settings.bindOn );
        var triggerEvent = ( typeof _settings.bindOn === 'string' && _settings.bindOn.length ) ? _settings.bindOn : 'click';

        // opens modal when trigger is clicked
        jQuery(_settings.trigger).unbind().on( triggerEvent + ' touch', function (e) {
            e.preventDefault();
            thatModal.modalAction('open');
            
            // fix scrolling in safari
            jQuery(_settings.target)[0].addEventListener('webkitAnimationEnd', fixSafariScrolling);
        });
        
        // closes modal when target areas are clicked
        jQuery(_settings.target).find('.modal-background, .btn-close, .delete').unbind().on( triggerEvent + ' touch', function (e) {
            e.preventDefault();
            thatModal.modalAction('close');
            
            // fix scrolling in safari
            jQuery(_settings.target)[0].addEventListener('webkitAnimationEnd', fixSafariScrolling);
        });
    }

    // calls callback function
    function _modalComplete(callbackType) {

        // if a callback was supplied, fire it now
        if ( callbackType == 'open' && typeof _settings.modalOpen === 'function' ) {
            _settings.modalOpen.call( thatModal );
        } else if ( callbackType == 'close' && typeof _settings.modalClose === 'function' ) {
            _settings.modalClose.call( thatModal );
        }
    }

    // function to set the trigger
    this.setTrigger = function ( newTrigger ) {
        _bindTriggerOpenEvent();
        return _settings.trigger;
    };

    // finalize setup
    thatModal.setTrigger( _settings.target );

}; // END smoothscroll


//--------------------------------------------//
/**
* Create a listener to scroll between a trigger and element
* When used, allows the window or a scrollable element to initiate an animated scroll
* Useage:
    $('a.smoothScroll').each( function () {
        new bulma.smoothscroll({
            trigger : $(this), // required
            target : $(this).attr('href'),
            wrapper : $('.scrollable'),
            history: false,
            animateSpeed : 1250,
            bindOn : 'click',
            offset : 0,
            callback : function() {
                console.log('callback works');
            }
        });
    });
*/

bulma.smoothscroll = function(settings) {

    // Get options settings
    var thatSmoothScroll = this;
    var _settings = this.settings = settings;

    // reform target from element
    _settings.target = $( _setTargetFromHref() );

    // make sure wrapper has the proper css to enable scrolling
    function _formatWrapper() {
        if ( _settings.wrapper && _settings.wrapper.children().length && _settings.wrapper.children().first().hasClass( 'smoothScrollContainer' ) ) {
            _settings.wrapper.find('.smoothScrollContainer').attr('style','position:relative; overflow:hidden;');
        }
    }

    // function called at end of animation
    function _scrollComplete() {
        if ( !_settings.wrapper ) {
            var currentHash = window.location.hash;
            var targetHash = '';

            if ( _settings.target && typeof _settings.target.attr( 'id' ) === 'string' && _settings.target.attr( 'id' ).length ) {
                targetHash = '#' + _settings.target.attr( 'id' );
            }

            // update hash at end of animation
            if ( _settings.history != false && targetHash.length > 0 && targetHash != currentHash ) {
                // if HTML5 history pushState is not supported then window.location.hash is used to modify the history
                if ( typeof history.pushState === 'undefined' ) {
                    window.location.hash = targetHash;
                }
                else {
                    history.pushState( {}, '', targetHash );
                }
            }
        }

        // if a callback was supplied, fire it now
        if ( typeof _settings.callback === 'function' ) {
            _settings.callback.call( thatSmoothScroll );
        }
    }

    // calculate the current y coordinates of window or wrapper
    function _calcCurrentPos() {
        return _settings.wrapper ? Math.ceil( _settings.wrapper.scrollTop() ) : Math.ceil( $( window ).scrollTop() );
    }

    // calculate the y coordinates to scroll to
    function _calcTargetPos() {

        // document height/widths
        var contentHeight = _settings.wrapper ? _settings.wrapper.children('.smoothScrollContainer').outerHeight() : $( document ).outerHeight();
        var wrapperHeight = _settings.wrapper ? _settings.wrapper.outerHeight() : $( window ).outerHeight();
        var targetPos = _settings.wrapper ? _settings.target.position().top : _settings.target.offset().top;

        if ( targetPos > (contentHeight - wrapperHeight) ) {
            targetPos = contentHeight - wrapperHeight;
        }

        // set scroll length
        targetPos = targetPos < 0 ? 0 : Math.ceil( targetPos );

        // offset
        targetPos = typeof _settings.offset === 'number' ? targetPos + _settings.offset : targetPos;

        // return scroll a
        return targetPos;
    }

    // attempts to set target from the trigger href
    function _setTargetFromHref() {
        if ( !_settings.target ) {
            if ( _settings.trigger && _settings.trigger.is( 'a' ) && _settings.trigger.attr( 'href' ).length ) {
                var triggerHref = _settings.trigger.attr( 'href' );
                return triggerHref;
            }
        } else {
            return _settings.target;
        }
    }

    // bind event to trigger which invokes a scroll
    function _bindTriggerEvent(){
        if ( _settings.trigger ) {
            _settings.bindOn = ( _settings.bindOn === 'hover' ? 'mouseover' : _settings.bindOn );
            var triggerEvent = ( typeof _settings.bindOn === 'string' && _settings.bindOn.length ) ? _settings.bindOn : 'click';

            _settings.trigger.on( triggerEvent, function ( e ) {
                e.preventDefault();
                thatSmoothScroll.scrollNow();
            });
        }
    }

    // set animation arguments
    this.scrollNow = function() {
        var callbackCount = 0;
        var wrapperEl = _settings.wrapper ? _settings.wrapper : $( 'html, body' );
        var animateArgs = {
            duration : typeof _settings.animateSpeed == 'number' ? _settings.animateSpeed : 800,
            easing : 'swing',
            complete : function () {
                // make sure callback is only called once if there is more than one wrapper
                callbackCount++;
                if ( callbackCount === wrapperEl.length ) {
                    _scrollComplete();
                }
            }
        }

        // do scroll animation
        wrapperEl.stop().animate({
            scrollTop : _calcTargetPos()
        }, animateArgs);
    }

    // function to set the trigger
    this.setTrigger = function ( newTrigger ) {
        _formatWrapper();
        _bindTriggerEvent();
        return _settings.trigger;
    };

    // finalize setup
    thatSmoothScroll.setTrigger( _settings.target );

}; // END smoothscroll

// Window Resize Events
//--------------------------------------------//
var old_var = '';
$(window).on('load resize',function() {

    // get device setting
    var bulma_device = bulma.device.currentBreakpoint()

    // only do stuff if bulma_device has changed value
    if ( bulma_device != old_var ) {
        // update h1 BG color
        switch(bulma_device) {
            case ('mobile'):
                break;
            case ('tablet'):
                break;
            case ('desktop'):
                break;   
            default:
                break;
        };

        // add breakpoint to body class
        $('body').attr('data-device', bulma.device.currentBreakpoint() );

    }
    // set previous value to test with
    old_var = bulma_device;

});

// jQuery
//--------------------------------------------//
// Window Load
$(window).on('load', function(){
    $('.flexslider').flexslider({
        animation: 'slide'
    });
});

// Document Ready
$(document).ready(function() {

    // init smoothscroll on links
    $('a.smoothscroll').each( function () {
        new bulma.smoothscroll({
            trigger : $(this),
            offset : -10,
            callback : function() {
                console.log('callback works');
            }
        });
    });

    // init modal items
    $('.modal-button').each( function () {
        new bulma.modal({
            trigger : $(this),
        });
    });
    
    
}); // END document ready
