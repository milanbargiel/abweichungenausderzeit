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
