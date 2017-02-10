# zeit-webpage
zeit-webpage is a website build to showcase the work of a friend of mine for his diploma project.
In the following I am going to explain how to modify content on the webpage. In order to do so some tools must be installed:

- [Sublime Text 3] (https://www.sublimetext.com/3) (text editor for code)
- [Node.js and npm] (https://docs.npmjs.com/getting-started/installing-node) (npm is a package manager that allows you to share and reuse chunks of code written by other developers)

If these two tools are installed a last one has to be installed.
In order to do so just open up the console of your computer and enter:

```sh
npm install --global gulp-cli
```
We used the freshly installed npm package manager to install the 'gulp' command.
Gulp is a tool for automatating tasks in your development workflow. In this project it is used to run the project on a local webserver,
as well as preparing code and assets to be uploaded on a webserver.

## Get the project running
When these tools are installed it is time to download the repository. Use Sublime text editor and open the entire folder 'zeit-webpage'.
No you can see the contents of the project.

The file 'package.json' specifies which modules (chunks of code from other developers) the project relies on.
In order to install all required modules do the following:
- open the console of your computer
- use the command `cd <folder>/<folder>/zeit-webpage` to get into the folder "zeit-webpage"
- run the command `npm install`

Now all required modules are installed.

### Run project on a local server
Run `gulp` command from within the "zeit-webpage" folder.

The command will run all tasks specified in 'gulpfile.js'. These include visualizing the code in a browser window and refreshing the page
whenever the code changes.

### Prepare files for being distributed on a web server
Run the command `gulp build` inside of the console from within the "zeit-webpage" folder. This will optimize all assets (images, css, javascript) and create
an optimized version ready for distribution inside the folder 'zeit-webpage/dist'.

### Get website online
Just copy content of 'zeit-webpage/dist' onto the webserver.

# Modify content
### Folder structure
All files that are relevant for the content of the webpage are found within "zeit-webpage/app" folder.
To modify content of the webpage it is necessary to modify templates with ".nunjucks" extension found inside of "/pages" and "/templates" folder. Images are placed inside of the "image" folder. Never modify ".html" files directly. These files are automatically constructed from the template files.

```
zeit-webpage/
├── images/
├── pages/
└── templates/
```
Inside of the "pages" folder all pages are to be found. Common contents are placed within "templates" folder to be imported from a page template. Therefore common page contents (such as page layout or menu) can be defined once and reused on different pages.

### Modify teaser texts
To modify the teaser text of an article go to the file `zeit-webpage/templates/teaseritems.nunjucks`.

```
{% call element.textualteaser('Sand', 'sand.html') -%}
  Sand ist ein Material, das in direktem Zusammenhang mit der Zeit steht. Man könnte ihn fast als materialisierte Zeit bezeichnen. Auf     natürliche Weise entsteht Sand nur in sehr langer Zeit..
{%- endcall %}
```
The function takes as an input the headline and the filename of the article as well as the text to be displayed as a teaser.

The teaser for "Einleitung" is to be found in the file `zeit-webpage/pages/index.nunjucks`.

```
<div class="introduction teaser">
  <span class="introduction__dropcap">M</span>
  <div>
    einer Arbeit zur Zeit möchte ich ein kleines Gedankenspiel voranstelllen:
    Als Kind hatte ich mir einmal ausgemalt, dass wenn ich rückwärts denken könnte es mir möglich wäre die Zeit zurückspulen zu können.     Aus Hallo wird ollaH usw. Ich nahm meine Stimme auf, spielte sie rückwärts ab und ahmte das gehörte nach..
  </div>
  <a class="teaser__readmore" href="einleitung.html">WEITERLESEN</a>
</div>
```

### Modify article text
All articles are found in `zeit-webpage/pages` folder. The content of an article is surrounded by the `<article> </article>` tags.

An article has the following style elements:

#### Heading Big
This heading is only to be used for the introductory heading.
```
<h1>Sand</h1>
```
#### Heading Small
This heading is used for in-text headlines.
```
<h2>Erfahrungen aus der Wüste</h2>
```
#### Paragraph
```
<p>
  Die Müslipackung trotzt also nicht dem fortschreiten der Zeit, sondern ist nur Teil eines größeren Systems dessen Unordnung anwächst.
</p>
```
#### Link
```
<p>
  Meiner Meinung nach ist diese Uhr viel eher eine künstlerische als gestalterische Arbeit, 
  da sie sich jeglichem effizienten Denken widersetzt. 
  <a target="_blank" href="http://www.uhrsachen.ch/tickdifferent/?p=56">(Link Hersteller)</a>
</p>
```
The attribute `target="_blank"` specifies that the referenced webpage is going to be opened from within a new tab.
The attribute `href="..."` specifies the URL of the webpage to be referenced.
Inside of the tags link text can be specified: `<a target="_blank" href="..."> LINK TEXT HERE </a>`

#### In-text citation
```
<p>
  Erst dadurch ist der Computer in der Lage schnelle Rechenvorgänge zu tätigen die
  dann wiederum von einer Quarzuhr getaktet werden. <sup><a href="#cite-note-1">[1]</a></sup>
</p>
```
`href="#cite-note-1"` is an intern link to an element specified with the id 'cite-note-1'

#### References
```
<div class="references">
    <h2>Referenzen:</h2>
    <ol>
      <li id="cite-note-1">
        (vgl. 
        <a target="_blank" href="https://de.wikipedia.org/wiki/Silicium">https://de.wikipedia.org/wiki/Silicium</a> 
        27.12.2016, 11:45)
      </li>
      <li id="cite-note-2">
        Sanduhr Buch Seite 50, Schleswig Holstein Verlag
      </li>
    </ol>
  </div>
```
In the reference section at the end of the page all references are listed. Here it is specified where the user jumps to
when clicking on an In-text citation. The field `id="cite-note-1"` specifies the pairing with a citation. The content of of a reference can be text only `<li id="cite-note-2> TEXT </li>` or with a link included `<li id="cite-note-2> TEXT <a target="_blank" href="http.."> LINK TEXT HERE </a></li>`


#### Quote
```
<div class="quote-container">
  <div class="quote">
    „In offenen Systemen kann die Komplexität lokal anwachsen.”
  </div>
  <a class="caption" href="#cite-note-4">Prof. Dr. Gernot Münster</a>
</div>
```
#### Image
```
<div class="image-container">
  <img class="image-medium" src="images/die-sanduhr-roman-signer.jpg" alt="Die Sanduhr von Roman Signer">
  <a class="caption" href="#cite-note-5">Roman Signer, Sand</a>
</div>
```

An image can have different sizes. Image sizes are specified by the `class="image-medium"` attribute.
There are the following image sizes:
- image-xs
- image-small
- image-medium
- image-large

#### Video
```
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/g9BqqVRJFXE" frameborder="0" allowfullscreen></iframe>
  <span class="caption">Die Wüste von Chile, Maurits Boettger, 2017</span>
</div>
```
To change the video just enter another url at the `src=" "` attribute.
There is just one size of videos.

#### Caption
A caption can belong to a quote, a image or a video.

A caption can either be a link to a reference:
```
<a class="caption" href="#cite-note-4">Prof. Dr. Gernot Münster</a>
```

A link to an external webpage:
```
<a class="caption" target="_blank" href="https://github.com/twbs/">Prof. Dr. Gernot Münster</a>
```

Or not clickable at all:
```
<span class="caption">Prof. Dr. Gernot Münster</span>
```


