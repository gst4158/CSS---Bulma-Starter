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

<section class="section">
    <div class="container">
        <h3>Forms</h3>
        <p>Nothing has changed from Bulma's default form markup. Below is an example form that you can find <a href="http://bulma.io/documentation/form/general/" title="Bulma Forms page" target="_blank">here</a></p>


        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input">
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Text input" value="bulma">
            <span class="icon is-small is-left">
              <i class="fa fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-warning"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question">
              No
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link">Cancel</button>
          </div>
        </div>
    </div>
    <div class="container margin-top-10">
        <pre class="box">
&lt;div class=&quot;field&quot;&gt;
    &lt;label class=&quot;label&quot;&gt;Name&lt;/label&gt;
    &lt;div class=&quot;control&quot;&gt;
        &lt;input class=&quot;input&quot; type=&quot;text&quot; placeholder=&quot;Text input&quot;&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;field&quot;&gt;
    &lt;label class=&quot;label&quot;&gt;Username&lt;/label&gt;
    &lt;div class=&quot;control has-icons-left has-icons-right&quot;&gt;
        &lt;input class=&quot;input is-success&quot; type=&quot;text&quot; placeholder=&quot;Text input&quot; value=&quot;bulma&quot;&gt;
        &lt;span class=&quot;icon is-small is-left&quot;&gt;&lt;i class=&quot;fa fa-user&quot;&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class=&quot;icon is-small is-right&quot;&gt;&lt;i class=&quot;fa fa-check&quot;&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;p class=&quot;help is-success&quot;&gt;This username is available&lt;/p&gt;
&lt;/div&gt;

&lt;div class=&quot;field&quot;&gt;
    &lt;label class=&quot;label&quot;&gt;Email&lt;/label&gt;
    &lt;div class=&quot;control has-icons-left has-icons-right&quot;&gt;
        &lt;input class=&quot;input is-danger&quot; type=&quot;text&quot; placeholder=&quot;Email input&quot; value=&quot;hello@&quot;&gt;
        &lt;span class=&quot;icon is-small is-left&quot;&gt;&lt;i class=&quot;fa fa-envelope&quot;&gt;&lt;/i&gt;&lt;/span&gt;
        &lt;span class=&quot;icon is-small is-right&quot;&gt;&lt;i class=&quot;fa fa-warning&quot;&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;p class=&quot;help is-danger&quot;&gt;This email is invalid&lt;/p&gt;
&lt;/div&gt;

&lt;div class=&quot;field&quot;&gt;
    &lt;label class=&quot;label&quot;&gt;Subject&lt;/label&gt;
    &lt;div class=&quot;control&quot;&gt;
        &lt;div class=&quot;select&quot;&gt;
            &lt;select&gt;
                &lt;option&gt;Select dropdown&lt;/option&gt;
                &lt;option&gt;With options&lt;/option&gt;
            &lt;/select&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;field&quot;&gt;
    &lt;label class=&quot;label&quot;&gt;Message&lt;/label&gt;
    &lt;div class=&quot;control&quot;&gt;
        &lt;textarea class=&quot;textarea&quot; placeholder=&quot;Textarea&quot;&gt;&lt;/textarea&gt;
    &lt;/div&gt;
&lt;/div&gt;

    &lt;div class=&quot;field&quot;&gt;
        &lt;div class=&quot;control&quot;&gt;
            &lt;label class=&quot;checkbox&quot;&gt;
                &lt;input type=&quot;checkbox&quot;&gt;
                I agree to the &lt;a href=&quot;#&quot;&gt;terms and conditions&lt;/a&gt;
            &lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;

&lt;div class=&quot;field&quot;&gt;
    &lt;div class=&quot;control&quot;&gt;
        &lt;label class=&quot;radio&quot;&gt;&lt;input type=&quot;radio&quot; name=&quot;question&quot;&gt;Yes&lt;/label&gt;
        &lt;label class=&quot;radio&quot;&gt;&lt;input type=&quot;radio&quot; name=&quot;question&quot;&gt;No&lt;/label&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;field is-grouped&quot;&gt;
    &lt;div class=&quot;control&quot;&gt;
        &lt;button class=&quot;button is-primary&quot;&gt;Submit&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;control&quot;&gt;
        &lt;button class=&quot;button is-link&quot;&gt;Cancel&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
        </pre>
    </div>
</section>

<hr />

<section class="section">
    <div class="container">
        <h3>Grouped Form Items</h3>
        <p>Bulma allows you to combine buttons with form items using the <code>has-addons</code> class</p>
        <ul class="margin-vertical-25">
            <li><code>is-expanded</code> - pushes input to fill horizontal space</li>
            <li><code>has-addons</code> - merges elements with the convenience class <code>control</code></li>
            <li><code>is-horizontal</code> - tells form field to place elements side by side. On mobile these will automatically go to single lines</li>
            <li><code>has-icons-left</code> - adds padding to input that allows for an icon to be used</li>
        </ul>

        <div class="field is-horizontal">
            <div class="field-body">
                <div class="field is-expanded">
                    <div class="field has-addons">
                        <div class="control is-expanded has-icons-left">
                            <input class="input" type="text" placeholder="Find a repository">
                            <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
                        </div>
                        <div class="control">
                            <a class="button is-info">Search</a>
                        </div>
                    </div>
                </div>

                <div class="field is-expanded">
                    <div class="field has-addons">
                        <p class="control is-expanded">
                            <input class="input" type="text" placeholder="Your email">
                        </p>
                        <p class="control">
                            <a class="button is-static">
                                @gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div> <!-- END field-body -->
        </div> <!-- END is-horizontal -->

    </div>
    <div class="container margin-top-10">
        <pre class="box">
&lt;div class=&quot;field is-horizontal&quot;&gt;
    &lt;div class=&quot;field-body&quot;&gt;
        &lt;div class=&quot;field is-expanded&quot;&gt;
            &lt;div class=&quot;field has-addons&quot;&gt;
                &lt;div class=&quot;control is-expanded has-icons-left&quot;&gt;
                    &lt;input class=&quot;input&quot; type=&quot;text&quot; placeholder=&quot;Find a repository&quot;&gt;
                    &lt;span class=&quot;icon is-small is-left&quot;&gt;&lt;i class=&quot;fa fa-user&quot;&gt;&lt;/i&gt;&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class=&quot;control&quot;&gt;
                    &lt;a class=&quot;button is-info&quot;&gt;Search&lt;/a&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class=&quot;field is-expanded&quot;&gt;
            &lt;div class=&quot;field has-addons&quot;&gt;
                &lt;p class=&quot;control is-expanded&quot;&gt;
                    &lt;input class=&quot;input&quot; type=&quot;text&quot; placeholder=&quot;Your email&quot;&gt;
                &lt;/p&gt;
                &lt;p class=&quot;control&quot;&gt;
                    &lt;a class=&quot;button is-static&quot;&gt;
                        @gmail.com
                    &lt;/a&gt;
                &lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt; &lt;!-- END field-body --&gt;
&lt;/div&gt; &lt;!-- END is-horizontal --&gt;
        </pre>
    </div>
</section>

<?php
// include header
include_once('_inc/footer.php');
?>
