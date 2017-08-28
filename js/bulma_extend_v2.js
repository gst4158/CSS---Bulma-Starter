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
* Functions used multiple times throughout this lib - used to shorten amount of duplicate code
*/
bulma.functions = (function () {
    // Sets a list of public functions
    siteFunctions = {};

    // returns dom element from attribute
    siteFunctions.setTargetFromHref = function(target, trigger, attribute) {
        if ( !target ) {
            if ( trigger.attr(attribute) ) {
                var triggerHref = trigger.attr(attribute);
                return triggerHref;
            }
        } else {
            return target;
        }
    }

    // Calls callback function
    // Callback Names:
    // initStart : function() {
    //     console.log('menu init open');
    // },
    // initEnd : function() {
    //     console.log('menu init close');
    // },
    // initStartFinished : function() {
    //     console.log('menu finished opening');
    // },
    // initEndFinished : function() {
    //     console.log('menu finished closing');
    // }
    siteFunctions.fireCallbacks = function(callbackType, srcObj, functionOpen, functionClose) {
        if ( callbackType == 'open' && typeof functionOpen === 'function' ) {
            return functionOpen.call( srcObj );
        } else if ( callbackType == 'close' && typeof functionClose === 'function' ) {
            return functionClose.call( srcObj );
        }
    }

    siteFunctions.bindActions = function(_settings, object) {
        // set toggle type
        var toggleType = ( _settings.toggleType == 'fade' ? 'fadeToggle' : 'slideToggle'  );

        // toggle action
        jQuery(_settings.target).stop(true, true)[toggleType](function(){
            // callback after animation completes
            bulma.functions.fireCallbacks(
                jQuery(_settings.target).hasClass(_settings.elmClass) ? 'open' : 'close',
                object,
                _settings.initStartFinished,
                _settings.initEndFinished
            );
        }).toggleClass(_settings.elmClass);

        // callback on animation init
        bulma.functions.fireCallbacks(
            jQuery(_settings.target).hasClass(_settings.elmClass) ? 'open' : 'close',
            object,
            _settings.initStart,
            _settings.initEnd
        );
    }

    siteFunctions.resetAll = function(settings) {
        // if toggleAll set to true, close all other dropdowns on click
        if (settings.toggleAll == true) {
            // set toggle type
            var toggleType = ( settings.toggleType == 'fade' ? 'fadeOut' : 'slideUp'  );

            if ( !jQuery(settings.target).hasClass(settings.elmClass) )
                jQuery(settings.triggerParent).find(settings.dropdownTarget).removeClass(settings.elmClass)[toggleType]();
        }
    }

  // return public method
  return siteFunctions;

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
* Menu Toggles Options
* Bind events to toggle menu elements
* Will attempt to use data-target attribute; but you can add custom triggers and targets as well
* Contains 4 available callbacks. 2 on open and 2 close events
*/
bulma.menu = function(settings) {
    // kill function if no trigger set
    if ( !settings.trigger ) return false;

    // get default settings
    var thatMenu = this;
    var object = this.settings = settings;
    var _settings = {
        trigger   : settings.trigger,
        elmClass  : 'menu-active',
        bindOn    : 'click',
        toggleType : 'slide',

        // submenu/dropdown controls
        toggleAll : true, // close all other menus on click
        triggerParent : jQuery(settings.trigger).closest('.navbar-menu'),
        dropdownWrap : 'has-dropdown',
        dropdownTarget : '.navbar-dropdown',
    };

    // merge default and custom settings into one object
    var _settings = Object.assign({}, _settings, object);

    // set modal target
    if ( jQuery(_settings.trigger).hasClass(_settings.dropdownWrap) ) {
        _settings.target = jQuery(_settings.dropdownTarget, _settings.trigger);
    } else {
        _settings.target = jQuery( '#' + bulma.functions.setTargetFromHref(_settings.target, _settings.trigger, 'data-target') );
    }

    // bind event which triggers modal actions
    function _bindTriggerOpenEvent(){
        _settings.bindOn = ( _settings.bindOn === 'hover' ? 'mouseover' : _settings.bindOn );
        var triggerEvent = ( typeof _settings.bindOn === 'string' && _settings.bindOn.length ) ? _settings.bindOn : 'click';

        // opens menu when trigger is clicked
        jQuery(_settings.trigger).unbind().on( triggerEvent + ' touch', function (e) {

            // if toggleAll set to true, close all other dropdowns on click
            bulma.functions.resetAll(_settings);

            // creates toggle actions + callbacks
            bulma.functions.bindActions(_settings, thatMenu)

        });
    }

    // function to set the trigger
    this.setTrigger = function ( newTrigger ) {
        _bindTriggerOpenEvent();
        return _settings.trigger;
    };

    // finalize setup
    thatMenu.setTrigger( _settings.target );

}; // END modal

//--------------------------------------------//
/**
* Menu Toggles Options
* Bind events to toggle menu elements
* Will attempt to use data-target attribute; but you can add custom triggers and targets as well
* Contains 4 available callbacks. 2 on open and 2 close events
*/
bulma.dropdown = function(settings) {
    // kill function if no trigger set
    if ( !settings.trigger ) return false;

    // get default settings
    var thatDropdown = this;
    var object = this.settings = settings;
    var _settings = {
        trigger   : settings.trigger,
        elmClass  : 'dropdown-active',
        bindOn    : 'click',
        toggleType : 'slide',

        // submenu/dropdown controls
        toggleAll : true, // close all other menus on click
        triggerParent : jQuery(settings.trigger).closest('.dropdown-list'),
        dropdownWrap : 'has-dropdown',
        dropdownTarget : 'ul',
    };

    // merge default and custom settings into one object
    var _settings = Object.assign({}, _settings, object);

    // set modal target
    _settings.target = _settings.target ? jQuery(_settings.target) : jQuery(_settings.trigger).siblings(_settings.dropdownTarget);

    // bind event which triggers modal actions
    function _bindTriggerOpenEvent(){
        _settings.bindOn = ( _settings.bindOn === 'hover' ? 'mouseover' : _settings.bindOn );
        var triggerEvent = ( typeof _settings.bindOn === 'string' && _settings.bindOn.length ) ? _settings.bindOn : 'click';

        // opens menu when trigger is clicked
        jQuery(_settings.trigger).unbind().on( triggerEvent + ' touch', function (e) {

            // if toggleAll set to true, close all other dropdowns on click
            bulma.functions.resetAll(_settings);

            // creates toggle actions + callbacks
            bulma.functions.bindActions(_settings, thatDropdown)

        });
    }

    // function to set the trigger
    this.setTrigger = function ( newTrigger ) {
        _bindTriggerOpenEvent();
        return _settings.trigger;
    };

    // finalize setup
    thatDropdown.setTrigger( _settings.target );

}; // END modal


//--------------------------------------------//
/**
* Modal Options
* Dynamically create popup modals.
* Will attempt to use href's target; but you can add custom triggers and targets as well
* Contains 4 available callbacks. 2 on open and 2 close events
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
        toggleType : 'fade',
    };

    // merge default and custom settings into one object
    var _settings = Object.assign({}, _settings, object);

    // set modal target
    _settings.target = jQuery( bulma.functions.setTargetFromHref(_settings.target, _settings.trigger, 'href') );

    // toggle body styles to prevent window from scrolling
    function setBodyCSS() {
        jQuery('html').css({
            overflow:   jQuery('.modal').hasClass(_settings.elmClass) == false ? '' : 'hidden',
            width:      jQuery('.modal').hasClass(_settings.elmClass) == false ? '' : '100%',
        })
    }

    // Fixes safari issues with bootstrap 2.0 modals
    //Allows scrolling on elements transform in Safari
    function fixSafariScrolling(event) {
        event.target.style.overflowY = 'hidden';
        setTimeout(function () { event.target.style.overflowY = 'auto'; });
    }

    // bind event which triggers modal actions
    function _bindTriggerOpenEvent(){
        _settings.bindOn = ( _settings.bindOn === 'hover' ? 'mouseover' : _settings.bindOn );
        var triggerEvent = ( typeof _settings.bindOn === 'string' && _settings.bindOn.length ) ? _settings.bindOn : 'click';

        // opens modal when trigger is clicked
        jQuery(_settings.trigger).add('.modal-background, .btn-close, .delete', _settings.target).unbind().on( triggerEvent + ' touch', function (e) {
            e.preventDefault();

            // creates toggle actions + callbacks
            bulma.functions.bindActions(_settings, thatModal);

            // reset body css so no jumping takes place
            setBodyCSS();

            // fix scrolling in safari
            jQuery(_settings.target)[0].addEventListener('webkitAnimationEnd', fixSafariScrolling);
        });
    }

    // function to set the trigger
    this.setTrigger = function ( newTrigger ) {
        _bindTriggerOpenEvent();
        return _settings.trigger;
    };

    // finalize setup
    thatModal.setTrigger( _settings.target );

}; // END modal

//--------------------------------------------//
/**
* Create a listener to scroll between a trigger and element
* When used, allows the window or a scrollable element to initiate an animated scroll
* Useage:
    jQuery('a.smoothScroll').each( function () {
        new bulma.smoothscroll({
            trigger : jQuery(this), // required
            target : jQuery(this).attr('href'),
            wrapper : jQuery('.scrollable'),
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
    _settings.target = jQuery( bulma.functions.setTargetFromHref(_settings.target, _settings.trigger, 'href') );


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
        return _settings.wrapper ? Math.ceil( _settings.wrapper.scrollTop() ) : Math.ceil( jQuery( window ).scrollTop() );
    }

    // calculate the y coordinates to scroll to
    function _calcTargetPos() {

        // document height/widths
        var contentHeight = _settings.wrapper ? _settings.wrapper.children('.smoothScrollContainer').outerHeight() : jQuery( document ).outerHeight();
        var wrapperHeight = _settings.wrapper ? _settings.wrapper.outerHeight() : jQuery( window ).outerHeight();
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
        var wrapperEl = _settings.wrapper ? _settings.wrapper : jQuery( 'html, body' );
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
jQuery(window).on('load resize',function() {

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
        jQuery('body').attr('data-device', bulma.device.currentBreakpoint() );

    }
    // set previous value to test with
    old_var = bulma_device;

});

// jQuery
//--------------------------------------------//
// Window Load
jQuery(window).on('load', function(){
    jQuery('.flexslider').flexslider({
        animation: 'slide'
    });
});

// Document Ready
jQuery(document).ready(function() {

    // init smoothscroll on links
    jQuery('a.smoothscroll').each( function () {
        new bulma.smoothscroll({
            trigger : jQuery(this),
            offset : -10,
            callback : function() {
                console.log('callback works');
            }
        });
    });

    // init modal items
    jQuery('.modal-button').each( function () {
        new bulma.modal({
            trigger : jQuery(this),
        });
    });

    jQuery('.navbar-burger, .has-dropdown').each( function () {
        new bulma.menu({
            trigger : jQuery(this),
            initStart : function() {
                console.log('modal init open');
            },
            initEnd : function() {
                console.log('modal init close');
            },
            initStartFinished : function() {
                console.log('modal finished opening');
            },
            initEndFinished : function() {
                console.log('modal finished closing');
            }
        });
    });

    jQuery('.dropdown-list .has-dropdown').each( function () {
        new bulma.dropdown({
            trigger : jQuery(this),
        });
    });

}); // END document ready
