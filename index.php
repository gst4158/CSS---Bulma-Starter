<?php
/*
Threme Name: Monkeysports Playground
Threme URI:
Description: 2017 Monkeysports Playground
Version: 1.0
Author: Gregory Thomason
Author URI: http://gregory-thomason.com/
Tags: minimalist, tremplate, html5
*/

// include header
include_once('_inc/header.php');
?>

<section class="hero is-primary">
  <div class="hero-head">
    <div class="container">
      {% include header.html %}
    </div>
  </div>

  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Templates
      </h1>
      <h2 class="subtitle">
        <strong>Free</strong> HTML templates that make use of Bulma <strong>out of the box</strong>
      </h2>
    </div>
  </div>
</section>

<!-- grid example -->
<section class="section">
    <div class="container">
        <h3>Breakpoints</h3>
        <p>Bulma reponsive allow for an unsemantic grid based model. Columns will adjust the same size depending on the number if items in the <code>columns</code> wrapper.</p>
        <p>If you want to control a specific element's width you can add a convenience class such as <code>grid-6</code> or on particular breakpoint, <code>tablet-grid-4</code></p>
        <div class="columns is-mobile has-text-centered">
            <div class="column desktop-grid-4 tablet-grid-2 mobile-grid-3"><span class="box">desktop</span></div>
            <div class="column desktop-grid-4 tablet-grid-2 mobile-grid-3"><span class="box">desktop</span></div>
            <div class="column desktop-grid-2 tablet-grid-6 mobile-grid-3"><span class="box">tablet</span></div>
            <div class="column desktop-grid-2 tablet-grid-2 mobile-grid-3"><span class="box">mobile</span></div>
        </div>
    </div>
    <div class="container margin-top-10">
        <pre class="box">
&lt;section class=&quot;section&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;div class=&quot;columns is-mobile has-text-centered&quot;&gt;
            &lt;div class=&quot;column desktop-grid-4 tablet-grid-2 mobile-grid-3&quot;&gt;&lt;span class=&quot;box&quot;&gt;desktop&lt;/span&gt;&lt;/div&gt;
            &lt;div class=&quot;column desktop-grid-4 tablet-grid-2 mobile-grid-3&quot;&gt;&lt;span class=&quot;box&quot;&gt;desktop&lt;/span&gt;&lt;/div&gt;
            &lt;div class=&quot;column desktop-grid-2 tablet-grid-6 mobile-grid-3&quot;&gt;&lt;span class=&quot;box&quot;&gt;tablet&lt;/span&gt;&lt;/div&gt;
            &lt;div class=&quot;column desktop-grid-2 tablet-grid-2 mobile-grid-3&quot;&gt;&lt;span class=&quot;box&quot;&gt;mobile&lt;/span&gt;&lt;/div&gt;            
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/section&gt;
        </pre>
    </div>
</section>

<!-- icons example -->
<section class="hero is-info">
    <section class="section">
        <div class="container">
            <h3>Icons</h3>
            <p>This customized Bulma has <a href="http://fontawesome.io/" tilte="font-awesome">font-awesome</a> baked in.</p>
            <div class="columns">
                <div class="column">
                    <h6><i class="fa fa-flag" aria-hidden="true"></i> One Font, 675 Icons</h6>
                    <p>In a single collection, Font Awesome is a pictographic language of web-related actions.</p>
                </div>
                
                <div class="column">
                    <h6><i class="fa fa-ban" aria-hidden="true"></i> No JavaScript Required</h6>
                    <p>Fewer compatibility concerns because Font Awesome doesn't require JavaScript.</p>
                </div>
                
                <div class="column">
                    <h6><i class="fa fa-arrows-alt" aria-hidden="true"></i> Infinite Scalability</h6>
                    <p>Scalable vector graphics means every icon looks awesome at any size.</p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h6><i class="fa fa-microphone" aria-hidden="true"></i> Free, as in Speech</h6>
                    <p>Font Awesome is completely free for commercial use. Check out the <a href="http://fontawesome.io/license/">license</a>.</p>
                </div>
                <div class="column">
                    <h6><i class="fa fa-pencil" aria-hidden="true"></i> CSS Control</h6>
                    <p>Easily style icon color, size, shadow, and anything that's possible with CSS.</p>
                </div>
                <div class="column">
                    <h6><i class="fa fa-eye" aria-hidden="true"></i> Perfect on Retina Displays</h6>
                    <p>Font Awesome icons are vectors, which mean they're gorgeous on high-resolution displays.</p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h6><i class="fa fa-gamepad" aria-hidden="true"></i> Plays Well with Others</h6>
                    <p>Font Awesome works great with all frameworks.</p>
                </div>
                <div class="column">
                    <h6><i class="fa fa-desktop" aria-hidden="true"></i> Desktop Friendly</h6>
                    <p>To use on the desktop or for a complete set of vectors, check out the <a href="http://fontawesome.io/cheatsheet/" target="_blank">cheatsheet</a>.</p>
                </div>
                <div class="column">
                    <h6><i class="fa fa-wheelchair" aria-hidden="true"></i> Accessibility-minded</h6>
                    <p>Font Awesome <i class="fa fa-heart" aria-hidden="true"></i><span class="sr-only">loves</span> screen readers and <a href="http://fontawesome.io/accessibility/">helps make your icons accessible</a> on the web.</p>
                </div>
            </div>
        </div>
        <div class="container margin-top-10">
            <pre class="box">
    &lt;p&gt;
        &lt;i class=&quot;fa fa-github&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;
        Example Text
    &lt;/p&gt;    
            </pre>
        </div>
    </section>
</section>

<!-- slider example -->
<section class="section">
    <div class="container">
        <h3>Image Sliders</h3>
        <p>Bulma does not come with any slider functionality. <a href="https://woocommerce.com/flexslider/" title="Flexslider" target="_blank">Flexslider</a> has been packaged in since it is responsive, mobile friendly, supports multiple types of media, and has a plethora of options</p>
        <div class="has-text-centered">
            <div class="flexslider">
                <ul class="slides">
                    <li>
                        <img src="http://via.placeholder.com/1200x400" />
                    </li>
                    <li>
                        <img src="http://via.placeholder.com/1200x400" />
                    </li>
                    <li>
                        <img src="http://via.placeholder.com/1200x400" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container margin-top-10">
        <pre class="box">
&lt;div class=&quot;flexslider&quot;&gt;
    &lt;ul class=&quot;slides&quot;&gt;
        &lt;li&gt;
            &lt;img src=&quot;http://via.placeholder.com/1200x400&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;img src=&quot;http://via.placeholder.com/1200x400&quot; /&gt;
        &lt;/li&gt;
        &lt;li&gt;
            &lt;img src=&quot;http://via.placeholder.com/1200x400&quot; /&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;
        </pre>
    </div>
</section>

<!-- modal example -->
<section class="hero is-info padding-vertical-20">
    <section class="section">
        <div class="container">
            <h3>Popup Modals</h3>
            <p>Bulma does not come with any JS by default. This customized framework contains both script and css markup to control modals with JS callback functions and more. Baked in are friendly steps taken to reduce quirks in mobile browsers such as safari.</p>

            <p><i class="fa fa-clipboard" aria-hidden="true"></i> Modals can contain several sub-sections including a <code>modal-card-head</code>, <code>modal-card-body</code>, and <code>modal-card-foot</code></p>
            <p><i class="fa fa-times-circle" aria-hidden="true"></i> There are several triggers to close a modal, including: <code>.modal-background</code>, <code>.btn-close</code>, <code>.delete</code></p>
            

            <h6>Click the button below to display the modal</h6>
            <a class="button is-primary is-large modal-button" href="#modal-ter">Launch modal card</a>

        </div>
        <div class="container margin-top-10">
            <pre class="box">
    &lt;div class=&quot;modal&quot;&gt;
        &lt;div class=&quot;modal-background&quot;&gt;&lt;/div&gt;
        &lt;div class=&quot;modal-card&quot;&gt;
            &lt;header class=&quot;modal-card-head&quot;&gt;
                &lt;p class=&quot;modal-card-title&quot;&gt;Modal title&lt;/p&gt;
                &lt;button class=&quot;delete btn-close&quot;&gt;&lt;/button&gt;
            &lt;/header&gt;
            &lt;section class=&quot;modal-card-body&quot;&gt;
                &lt;!-- Content ... --&gt;
            &lt;/section&gt;
            &lt;footer class=&quot;modal-card-foot&quot;&gt;
                &lt;a class=&quot;button btn-close&quot;&gt;Cancel&lt;/a&gt;
            &lt;/footer&gt;
        &lt;/div&gt;
    &lt;/div&gt;
            </pre>
        </div>
    </section>
</section>

<section class="section">
    <div class="container margin-top-40">
        <a class="button smoothscroll" href="#top">
            <span>Back to Top</span>
            <span class="icon is-small">
                <i class="fa fa-chevron-up"></i>
            </span>
        </a>
    </div>    
</section>

<!-- page modals -->
<section aria-hidden>
    <!-- modal one -->
    <div id="modal-ter" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete btn-close"></button>
            </header>
            <section class="modal-card-body">
                <a class="button is-primary is-large modal-button btn-close" href="#modal-ter2">I heard you like modals, so I put a modal button in your modal so you could have a modal</a>
                <!-- Content ... -->
                <p>Icing brownie danish lemon drops sweet topping wafer candy canes icing. Pastry bear claw liquorice chocolate danish lemon drops oat cake. Pastry topping pie caramels. Croissant tart chocolate cake jelly beans. Liquorice brownie cookie lemon drops chocolate. Chocolate bar cotton candy lemon drops jelly cake halvah. Pie donut jelly beans bonbon chupa chups tiramisu. Tart carrot cake brownie macaroon. Dragée gummi bears caramels. Gummi bears cotton candy sweet roll jelly-o bear claw danish. Marshmallow gingerbread jujubes candy bear claw wafer muffin. Carrot cake cotton candy gummies.</p>
                <p>Icing brownie danish lemon drops sweet topping wafer candy canes icing. Pastry bear claw liquorice chocolate danish lemon drops oat cake. Pastry topping pie caramels. Croissant tart chocolate cake jelly beans. Liquorice brownie cookie lemon drops chocolate. Chocolate bar cotton candy lemon drops jelly cake halvah. Pie donut jelly beans bonbon chupa chups tiramisu. Tart carrot cake brownie macaroon. Dragée gummi bears caramels. Gummi bears cotton candy sweet roll jelly-o bear claw danish. Marshmallow gingerbread jujubes candy bear claw wafer muffin. Carrot cake cotton candy gummies.</p>
                <p>Icing brownie danish lemon drops sweet topping wafer candy canes icing. Pastry bear claw liquorice chocolate danish lemon drops oat cake. Pastry topping pie caramels. Croissant tart chocolate cake jelly beans. Liquorice brownie cookie lemon drops chocolate. Chocolate bar cotton candy lemon drops jelly cake halvah. Pie donut jelly beans bonbon chupa chups tiramisu. Tart carrot cake brownie macaroon. Dragée gummi bears caramels. Gummi bears cotton candy sweet roll jelly-o bear claw danish. Marshmallow gingerbread jujubes candy bear claw wafer muffin. Carrot cake cotton candy gummies.</p>
                <p>Icing brownie danish lemon drops sweet topping wafer candy canes icing. Pastry bear claw liquorice chocolate danish lemon drops oat cake. Pastry topping pie caramels. Croissant tart chocolate cake jelly beans. Liquorice brownie cookie lemon drops chocolate. Chocolate bar cotton candy lemon drops jelly cake halvah. Pie donut jelly beans bonbon chupa chups tiramisu. Tart carrot cake brownie macaroon. Dragée gummi bears caramels. Gummi bears cotton candy sweet roll jelly-o bear claw danish. Marshmallow gingerbread jujubes candy bear claw wafer muffin. Carrot cake cotton candy gummies.</p>
                <p>Icing brownie danish lemon drops sweet topping wafer candy canes icing. Pastry bear claw liquorice chocolate danish lemon drops oat cake. Pastry topping pie caramels. Croissant tart chocolate cake jelly beans. Liquorice brownie cookie lemon drops chocolate. Chocolate bar cotton candy lemon drops jelly cake halvah. Pie donut jelly beans bonbon chupa chups tiramisu. Tart carrot cake brownie macaroon. Dragée gummi bears caramels. Gummi bears cotton candy sweet roll jelly-o bear claw danish. Marshmallow gingerbread jujubes candy bear claw wafer muffin. Carrot cake cotton candy gummies.</p>
                <p>Icing brownie danish lemon drops sweet topping wafer candy canes icing. Pastry bear claw liquorice chocolate danish lemon drops oat cake. Pastry topping pie caramels. Croissant tart chocolate cake jelly beans. Liquorice brownie cookie lemon drops chocolate. Chocolate bar cotton candy lemon drops jelly cake halvah. Pie donut jelly beans bonbon chupa chups tiramisu. Tart carrot cake brownie macaroon. Dragée gummi bears caramels. Gummi bears cotton candy sweet roll jelly-o bear claw danish. Marshmallow gingerbread jujubes candy bear claw wafer muffin. Carrot cake cotton candy gummies.</p>
            </section>
            <footer class="modal-card-foot">
                <a class="button is-success">Save changes</a>
                <a class="button btn-close">Cancel</a>
            </footer>
        </div>
    </div>
    
    <!-- modal two -->
    <div id="modal-ter2" class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete btn-close"></button>
            </header>
            <section class="modal-card-body">
                <!-- Content ... -->
                <p>Icing brownie danish lemon drops sweet topping wafer candy canes icing. Pastry bear claw liquorice chocolate danish lemon drops oat cake. Pastry topping pie caramels. Croissant tart chocolate cake jelly beans. Liquorice brownie cookie lemon drops chocolate. Chocolate bar cotton candy lemon drops jelly cake halvah. Pie donut jelly beans bonbon chupa chups tiramisu. Tart carrot cake brownie macaroon. Dragée gummi bears caramels. Gummi bears cotton candy sweet roll jelly-o bear claw danish. Marshmallow gingerbread jujubes candy bear claw wafer muffin. Carrot cake cotton candy gummies.</p>
            </section>
            <footer class="modal-card-foot">
                <a class="button btn-close">Cancel</a>
            </footer>
        </div>
    </div>
</section>


<?php
// include header
include_once('_inc/footer.php');
?>
