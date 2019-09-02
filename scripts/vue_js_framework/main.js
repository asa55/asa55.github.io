Vue.component('logocard', {
  props: [ 'me' ],
  template: `
    <div style="display:inline-block">
      <div :id='me.id' class="popup" :onclick='me.followlink'>
        {{ me.description }}
      </div>
      <div class="card" :onclick='me.togglepopper' :ondblclick='me.followlink' :onmouseout='me.hidepopper'>
        <img :src='me.logo' :alt="me.alt">
        </img>
      </div>
    </div>      
  `
});

Vue.component('nologocard', {
  props: [ 'me' ],
  template: `
    <div style="display:inline-block">
      <div style="pointer-events:visible" :onclick="me.followlink">
        <div :id="me.id" class="popup">
          {{ me.description }}
        </div>
      </div>
      <div class="card" :onclick="me.togglepopper" :onmouseout="me.hidepopper" :ondblclick="me.followlink">
        <div class="blank-image" :style="{ 'background-image':me.backgroundimage, 'background-size':'128px 128px' }">
          <table>
            <td>
              {{ me.maintext }}
            </td>
          </table>
        </div>       
      </div>          
    </div>
  `
});

var app = new Vue({ 
    el: '#app',
    data: {
        /*
            We have two primary types of (what I'm calling) "cards". Ones with unique logos, and ones without. 
            I split these up into two sections below. First is the data associated with cards that don't have
            a primary logo is shown alphabetically below:
        */

        handwrittencharacterrecognition: {
            alt: "handwritten character recognition logo",
            backgroundimage: `url('assets/matlab_neural_net_project_thumbnail.png')`,
            description: "For an ML class in university, I generated a single hidden layer neural net from pure fundamentals using Matlab to classify handwritten characters from an MNIST database. See the code and full report by double-clicking the icon or tapping this pop-up. See my TensorFlow-JS demo (on a separate button below) for a related but much more interactive demo of neural nets applied to the character recognition problem.",
            followlink: `linkto('https://github.com/asa55/NeuralNetsFromScratch')`,
            hidepopper: `hidepop($('#popup-handwritten-character-recognition'))`,
            id: "popup-handwritten-character-recognition",
            maintext: "Neural Nets From Scratch",
            togglepopper: `togglepop($(this),$('#popup-handwritten-character-recognition'))`
        },

        makeadesktopcalculator: {
            alt: "desktop calculator logo",
            backgroundimage: "url('assets/demoElectroyarnCalculatorDeployments.png')",
            description: "I was amazed the first time I heard that tools existed that let you use web app development workflows and distribute them as desktop apps using Electron (or similar tools). I had to try it for myself and was very pleased with the result. This capability speakes volumes towards the ability to hire from a large existing talent pool and integrate new personnel into your software dev workflows seamlessly. Download the calculator desktop app by following the instructions on the following page. Start by double-clicking the icon or tapping this pop-up to go to the next page.",
            followlink: `linkto('https://github.com/asa55/CalculatorApp_DistributedUsingElectron')`,
            hidepopper: `hidepop($('#popup-make-a-desktop-calculator'))`,
            id: "popup-make-a-desktop-calculator",
            maintext: "Make a Desktop Calculator",
            togglepopper: `togglepop($(this),$('#popup-make-a-desktop-calculator'))`
        },

        makeasimplecalculator: {
            alt: "simple calculator logo",
            backgroundimage: `url('assets/calculator_thumbnail.png')`,
            description: "In preparation for understanding paths to package & distribute web applications as desktop applications, I needed a simple foundation to practice on. Instead of taking pre-existing code, I whipped this calculator up in HTML/CSS/JS as a basis for the following project. See the calculator by double-clicking the icon or tapping this pop-up.",
            followlink: `linkto('https://asa55.github.io/CalculatorApp_ForDistributionTestingWithElectron/index.html')`,
            hidepopper: `hidepop($('#popup-make-a-simple-calculator'))`,
            id: "popup-make-a-simple-calculator",
            maintext: "Make a Simple Calculator",
            togglepopper: `togglepop($(this),$('#popup-make-a-simple-calculator'))`
        },

        piblocks: {
            alt: "piblocks logo",
            backgroundimage: "url('assets/piblocks_thumbnail.png')",
            description: `There is a neat phenomenon in physics where pi can be calculated to any accuracy by counting elastic collisions. A friend and I worked on the math and in the meantime I went off to validate this phenomenon using Python code. Check out our work by double-clicking the icon or tapping this pop-up to go to the next page. There, you'll find a link to a "live" version of the code, implemented as a Jupyter Notebook and accessible through your browser thanks to Binder.`,
            followlink: `linkto('https://github.com/asa55/PiBlocks')`,
            hidepopper: `hidepop($('#popup-piblocks'))`,
            id: "popup-piblocks",
            maintext: "Build a Collision Model",
            togglepopper: `togglepop($(this),$('#popup-piblocks'))`
        },

        prettypi: {
            alt: "prettypi logo",
            backgroundimage: "url('assets/prettyPi.png')",
            description: "After deriving the math behind the pi-from-collisions problem, as detailed in my PiBlocks repo, and working on some of the code to verify the results, I came across another GitHub user's code regarding this problem that was absolutely amazing. I wanted to learn from Prajwal DSouza's code base, and in the process I refactored it and organized it in a way that made the most sense to me. The original innovator has since thanked me and added a link to my efforts in his own repo! This was an awesome way to connect with someone across the globe with nothing but a common interest! As a side note, the background triangle effects on this site were re-purposed from another open-source project of his. See his reference to my work by double-clicking the icon or tapping this pop-up to go to the next page.",
            followlink: `linkto('https://github.com/prajwalsouza/Counting-Collisions')`,
            hidepopper: `hidepop($('#popup-prettypi'))`,
            id: "popup-prettypi",
            maintext: "Refactor a GitHub User's Innovative Code",
            togglepopper: `togglepop($(this),$('#popup-prettypi'))`
        },
        


        /*  Data for cards with primary logos is alphabetized below:  */    

        angular: {
            alt: "angular logo",
            description: "This is a tech I still need to dive into. Right now I stick to vanilla JS with jQuery if needed, but due to market trends I intend to add this to my toolkit immediately.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-angular'))`,
            id: "popup-angular",
            logo: "assets/Skills/Frameworks/AngularJS/angular_logo.png",
            togglepopper: `togglepop($(this),$('#popup-angular'))`
        },

        arduino: {
            alt: "arduino logo",
            description: "I've used Arduino tech for a long time, most recently in a self-study course in grad school. Due to the Arduino Sketch API officially supporting C/C++, this is the brunt of my experience with these languages outside of schoolwork. See some of my recent work using Arduino boards by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://www.dropbox.com/s/alrs82bqx5ndvv3/CartPoleProject_Update08202017.pdf?dl=0')`,
            hidepopper: `hidepop($('#popup-arduino'))`,
            id: "popup-arduino",
            logo: "assets/Skills/DIYProjects/Hardware/Arduino/arduino_logo.png",
            togglepopper: `togglepop($(this),$('#popup-arduino'))`
        },

        aws: {
            alt: "aws logo",
            description: "Amazon Web Services is how I gain access to world-class memory, storage, and compute. Implementations using AWS are fully scalable both horizontally and vertically. But you may have noticed there are tons of services offered, and it's difficult to know what to use and why. Enter AWS Elastic Beanstalk. This is the perfect tool for securely deploying scalable web apps and more without doing IT work as a primary function (if that's not what you're into). Double-click the logo or single-tap this popup to see a simple Flask application deployed on AWS using Elastic Beanstalk.",
            followlink: `linkto('http://flask-env.xwyvfmucs4.us-east-2.elasticbeanstalk.com/')`,
            hidepopper: `hidepop($('#popup-aws'))`,
            id: "popup-aws",
            logo: "assets/Skills/CloudComputing/AmazonWebServices/aws_logo.PNG",
            togglepopper: `togglepop($(this),$('#popup-aws'))`
        },

        blender: {
            alt: "blender logo",
            description: "I do all of my 3D modeling in Blender. I love this tool! To see some of my past work using Blender, double-click the logo or tap this pop-up.",
            followlink: `linkto('https://github.com/asa55/asa55.github.io/tree/master/assets/Skills/DIYProjects/GraphicDesign/Blender')`,
            hidepopper: `hidepop($('#popup-blender'))`,
            id: "popup-blender",
            logo: "assets/Skills/DIYProjects/GraphicDesign/blender_logo.png",
            togglepopper: `togglepop($(this),$('#popup-blender'))`
        },

        bootstrap: {
            alt: "bootstrap logo",
            description: "This is a simple tool that is extremely popular but losing momentum with the emergence of new frontend frameworks. A recent implementation of my site (the one you're currently on) used Bootstrap, but I canned it in favor of vanilla JS due to the tighter control with almost no added complexity (and recently rewrote again using Vue.JS for fun). See the code for the previous Bootstrap implementation of this site by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://github.com/asa55/asa55.github.io/tree/62f9a9bf4b6b3446b85c22c24f080b29b7325235')`,
            hidepopper: `hidepop($('#popup-bootstrap'))`,
            id: "popup-bootstrap",
            logo: "assets/Skills/Frameworks/Bootstrap/bootstrap_logo.png",
            togglepopper: `togglepop($(this),$('#popup-bootstrap'))`
        },

        clang: {
            alt: "clang logo",
            description: "Learned in class and later on in embedded devices, specifically multiple Arduino-based projects. Double-click the logo or tap the pop-up to see more discussion and a web accessible demo",
            followlink: `linkto('https://repl.it/@asa55/CIsForEmbeddedDevices')`,
            hidepopper: `hidepop($('#popup-clang'))`,
            id: "popup-clang",
            logo: "assets/Skills/Vanilla/CLang/c_logo.png",
            togglepopper: `togglepop($(this),$('#popup-clang'))`
        },

        cpp: {
            alt: "cpp logo",
            description: "Learned in class and later on in embedded devices, specifically multiple Arduino-based projects. Double-click the logo or tap the pop-up to see some computer vision work I started into using OpenCV in Visual Studio in an early rev of my pendulum project. (Note I didn't end up using this technique in the final rev - this sensing method using a webcam had too much time delay for stabilizing control that was even close to robust)",
            followlink: `linkto('https://www.dropbox.com/s/alrs82bqx5ndvv3/CartPoleProject_Update08202017.pdf?dl=0')`,
            hidepopper: `hidepop($('#popup-cpp'))`,
            id: "popup-cpp",
            logo: "assets/Skills/Vanilla/CPlusPlus/cpp_logo.png",
            togglepopper: `togglepop($(this),$('#popup-cpp'))`
        },

        csharp: {
            alt: "csharp logo",
            description: "Learned largely in using Unity in an industrial .NET framework wrapper called WonderWare. You can see a simple live demo on REPL.IT by double-clicking the logo or tapping this link.",
            followlink: `linkto('https://repl.it/@asa55/InLieuOfAUnityDemo')`,
            hidepopper: `hidepop($('#popup-csharp'))`,
            id: "popup-csharp",
            logo: "assets/Skills/Vanilla/CSharp/csharp_logo.png",
            togglepopper: `togglepop($(this),$('#popup-csharp'))`
        },

        css: {
            alt: "css logo",
            description: "You're looking at an implementation of my understanding of vanilla CSS right now! My preferred demonstration of my use of vanilla CSS (without the help of any CSS frameworks) is what I did for Neurobi's website implementing a mobile-first design pattern, which you can navigate to by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://github.com/asa55/asa55.github.io/tree/master/scripts')`,
            hidepopper: `hidepop($('#popup-css'))`,
            id: "popup-css",
            logo: "assets/Skills/Vanilla/CSS/css_logo.png",
            togglepopper: `togglepop($(this),$('#popup-css'))`
        },

        django: {
            alt: "django logo",
            description: "Because why wouldn't you want to use Python in your backend-driven web applications? Mine isn't but to take advantage of the built-in template engine, I made a Django-based version of this site, which you can explore through an awesome website called repl.it (the site is built to let you practice and demonstrate precisely these kinds of skills). To check it out, double-click the icon (on desktop) or single-tap this pop-up (on mobile).",
            followlink: `linkto('https://repl.it/@asa55/ExperimentsInDjango')`,
            hidepopper: `hidepop($('#popup-django'))`,
            id: "popup-django",
            logo: "assets/Skills/Frameworks/Django/django_logo.PNG",
            togglepopper: `togglepop($(this),$('#popup-django'))`
        },

        docker: {
            alt: "docker logo",
            description: "Docker is great for OS level virtualization, a relatively recent concept that supports stable and portable software distribution by packaging all OS level dependencies with the shipped product.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-docker'))`,
            id: "popup-docker",
            logo: "assets/Skills/Virtualization/OperatingSystem/Containerization/Docker/docker_logo.png",
            togglepopper: `togglepop($(this),$('#popup-docker'))`
        },

        electron: {
            alt: "electron logo",
            description: "There is some controversey over deploying HTML/CSS/JS web apps as cross-platform desktop apps, but for many applications I see this as a huge advantage. By way of example, check out the desktop calculator app I made using Electron. You can get to the repo via the project card above or by double-clicking the image / tapping this pop-up.",
            followlink: `linkto('https://github.com/asa55/CalculatorApp_DistributedUsingElectron')`,
            hidepopper: `hidepop($('#popup-electron'))`,
            id: "popup-electron",
            logo: "assets/Skills/Frameworks/ElectronJS/electron_logo.png",
            togglepopper: `togglepop($(this),$('#popup-electron'))`
        },

        flask: {
            alt: "flask logo",
            description: `When you want a Python-based backend framework but Django is too heavy. Flask does not have "batteries included", but gives the portability and modularity I've come to know and love using Python.  Double-click the logo or single-tap this popup to see a simple Flask application deployed on AWS using Elastic Beanstalk.`,
            followlink: `linkto('http://flask-env.xwyvfmucs4.us-east-2.elasticbeanstalk.com/')`,
            hidepopper: `hidepop($('#popup-flask'))`,
            id: "popup-flask",
            logo: "assets/Skills/Frameworks/Flask/flask_logo.png",
            togglepopper: `togglepop($(this),$('#popup-flask'))`
        },

        graphql: {
            alt: "graphql logo",
            description: "Graph Databases are taking the world by storm. When you're given the ability to model your data as a computational graph (arguably the most natural method out there), why wouldn't you?",
            followlink: ``,
            hidepopper: `hidepop($('#popup-graphql'))`,
            id: "popup-graphql",
            logo: "assets/Skills/Databases/GraphQL/graphql_logo.PNG",
            togglepopper: `togglepop($(this),$('#popup-graphql'))`
        },

        hadoop: {
            alt: "hadoop logo",
            description: "This is a technology I still need to dive into - distributed compute is the way of the future.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-hadoop'))`,
            id: "popup-hadoop",
            logo: "assets/Skills/DistributedComputing/Hadoop/hadoop_logo.png",
            togglepopper: `togglepop($(this),$('#popup-hadoop'))`
        },

        hive: {
            alt: "hive logo",
            description: "This is a technology I still need to dive into - distributed compute is the way of the future.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-hive'))`,
            id: "popup-hive",
            logo: "assets/Skills/DistributedComputing/Hive/hive_logo.png",
            togglepopper: `togglepop($(this),$('#popup-hive'))`
        },

        html_: {
            alt: "html logo",
            description: "You're looking at an implementation of my understanding of vanilla HTML right now! My preferred demonstration of my use of vanilla HTML (without the help of any frontend frameworks) is what I did for Neurobi's website implementing self-imposed internally consistent design patterns, which you can navigate to by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://github.com/Neurobi/Neurobi.github.io/tree/master')`,
            hidepopper: `hidepop($('#popup-html'))`,
            id: "popup-html",
            logo: "assets/Skills/Vanilla/HTML/html_logo.png",
            togglepopper: `togglepop($(this),$('#popup-html'))`
        },

        java: {
            alt: "java logo",
            description: "Java's write-once-run-anywhere design philosophy is interesting though less relevant in comparison to other languages by the day. I still vastly prefer it over Kotlin for Android app development. Double-click the logo or tap this pop-up for further discussion and a small demo.",
            followlink: `linkto('https://repl.it/@asa55/InLieuOfAnAndroidApp')`,
            hidepopper: `hidepop($('#popup-java'))`,
            id: "popup-java",
            logo: "assets/Skills/Vanilla/Java/java_logo.png",
            togglepopper: `togglepop($(this),$('#popup-java'))`
        },

        js_: {
            alt: "js logo",
            description: "You're looking at an implementation of my understanding of javascript right now! (Interact with the background by tapping or dragging your mouse). This code was refactored and repurposed from another one of Prajwal Souza's repos. You can double-click the logo or tap this pop-up to see all the JS used for this site.",
            followlink: `linkto('https://github.com/asa55/asa55.github.io/tree/master/scripts')`,
            hidepopper: `hidepop($('#popup-js'))`,
            id: "popup-js",
            logo: "assets/Skills/Vanilla/JavaScript/js_logo.png",
            togglepopper: `togglepop($(this),$('#popup-js'))`
        },

        keras: {
            alt: "keras logo",
            description: "Keras is great due to its ability to streamline AI software workflows. But sometimes even Keras has its limitations, and you need to be prepared to fall back to your backend tensor manipulation library (which in my case is TensorFlow).",
            followlink: ``,
            hidepopper: `hidepop($('#popup-keras'))`,
            id: "popup-keras",
            logo: "assets/Skills/ArtificialIntelligenceAndMachineLearning/Keras/keras_logo.PNG",
            togglepopper: `togglepop($(this),$('#popup-keras'))`
        },

        krita: {
            alt: "krita logo",
            description: "I have done substantial 2D modeling and graphic design in Krita (this tool is a lot like GIMP). I love this tool! Check out some graphics I made for the Redd Flag Company (displayed with permission) by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://github.com/asa55/asa55.github.io/tree/master/assets/Skills/DIYProjects/GraphicDesign/Krita')`,
            hidepopper: `hidepop($('#popup-krita'))`,
            id: "popup-krita",
            logo: "assets/Skills/DIYProjects/GraphicDesign/krita_logo.png",
            togglepopper: `togglepop($(this),$('#popup-krita'))`
        },

        matlab: {
            alt: "matlab logo",
            description: "I have 10+ years of experience using Matlab. I don't know everything there is to know, but I am extremely comfortable navigating the docs and doing anything that can be done using this tool (and Simulink). It has gotten to the point that the latest releases are offering functionality I need, and I can really appreciate how far it has come since I started using it back in undergrad. See an example of my work by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://github.com/asa55/NeuralNetsFromScratch')`,
            hidepopper: `hidepop($('#popup-matlab'))`,
            id: "popup-matlab",
            logo: "assets/Skills/Vanilla/Matlab/matlab_logo.png",
            togglepopper: `togglepop($(this),$('#popup-matlab'))`
        },

        node: {
            alt: "node logo",
            description: "The fact that we can implement full stacks using JS on the frontend and backend is amazing. The implications of this observation on sustainable talent acquisition couldn't be more exciting for JS developers. See a quick demo of node used for a microservice running TensorFlowJS by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://repl.it/@asa55/NodeAndTFJS')`,
            hidepopper: `hidepop($('#popup-node'))`,
            id: "popup-node",
            logo: "assets/Skills/RuntimeEngines/NodeJS/node_logo.png",
            togglepopper: `togglepop($(this),$('#popup-node'))`
        },

        postgresql: {
            alt: "postgresql logo",
            description: "My experience with PostgreSQL comes largely from Django, which integrates well with PostgreSQL as the backend database due to its official support. To demo some PostgreSQL interactions live in your browser, double-click the logo or tap this popup to start a Binder session. When it all fires up, click the .ipynb file and run each line of code one-by-one. Feel free to interact with the PostgreSQL DB yourself if you know some commands! It's a lot of fun. There are security settings and other admin concerns that can't be demonstrated with this method, but I feel it's perfect for the purpose of this interactive resume.",
            followlink: `linkto('https://mybinder.org/v2/gist/asa55/63ccb15e22f9a24edc786d56a863b2b5/master')`,
            hidepopper: `hidepop($('#popup-postgresql'))`,
            id: "popup-postgresql",
            logo: "assets/Skills/Databases/PostgreSQL/postgresql_logo.png",
            togglepopper: `togglepop($(this),$('#popup-postgresql'))`
        },

        python: {
            alt: "python logo",
            description: "Because Matlab is not a general purpose programming language, nor is it open-source and free! Python is really awesome in its own right though, and I have almost fully migrated from Matlab to Python as my primary language. See an example of my work interactively in a Jupyter Notebook from your browser (thanks to Binder) by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://github.com/asa55/PiBlocks')`,
            hidepopper: `hidepop($('#popup-python'))`,
            id: "popup-python",
            logo: "assets/Skills/Vanilla/Python/python_logo.png",
            togglepopper: `togglepop($(this),$('#popup-python'))`
        },

        raspberrypi: {
            alt: "raspberry pi logo",
            description: "Raspberry Pi is awesome! I have used Raspbian and Ubuntu MATE OS's in Pi's of my own. These make for greate experience with compute clusters and more advanced embedded devices that can be programmed easily in Python (when Arduino's won't cut it).",
            followlink: ``,
            hidepopper: `hidepop($('#popup-raspberry-pi'))`,
            id: "popup-raspberry-pi",
            logo: "assets/Skills/DIYProjects/Hardware/RaspberryPi/raspberry_pi_logo.png",
            togglepopper: `togglepop($(this),$('#popup-raspberry-pi'))`
        },

        react: {
            alt: "react logo",
            description: "This is a tech I still need to dive into. Right now I stick to vanilla JS with jQuery if needed, but due to market trends I intend to add this to my toolkit immediately.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-react'))`,
            id: "popup-react",
            logo: "assets/Skills/Frameworks/ReactJS/react_logo.png",
            togglepopper: `togglepop($(this),$('#popup-react'))`
        },

        rlang: {
            alt: "rlang logo",
            description: "R is very popular among data scientists. It's not my language of choice because I can do everything R can do using Python and/or Matlab just as beautifully, concisely, and easily. But it is an option I am aware of and familiar with. See a quick demo of plotting in R used to help visualize the Central Limit Theorem from statistics by double-clicking the logo or tapping this pop-up.",
            followlink: `linkto('https://repl.it/@asa55/CentralLimitTheoremInR')`,
            hidepopper: `hidepop($('#popup-rlang'))`,
            id: "popup-rlang",
            logo: "assets/Skills/Vanilla/Rlang/rlang_logo.png",
            togglepopper: `togglepop($(this),$('#popup-rlang'))`
        },

        semanticui: {
            alt: "semanticui logo",
            description: "An awesome CSS framework that's not Bootstrap.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-semanticui'))`,
            id: "popup-semanticui",
            logo: "assets/Skills/Frameworks/SemanticUI/semanticui_logo.png",
            togglepopper: `togglepop($(this),$('#popup-semanticui'))`
        },

        spark: {
            alt: "spark logo",
            description: "This is a technology I still need to dive into - distributed compute is the way of the future.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-spark'))`,
            id: "popup-spark",
            logo: "assets/Skills/DistributedComputing/Spark/spark_logo.png",
            togglepopper: `togglepop($(this),$('#popup-spark'))`
        },

        sqlite: {
            alt: "sqlite logo",
            description: "Because local storage is often supported with SQLite, this is critical for many applications. You can find a small interactive demo I posted on REPL.IT by double-clicking the icon (on desktop) or single-tapping this icon (on mobile).",
            followlink: `linkto('https://repl.it/@asa55/AQuickSQLiteDemoForMySite')`,
            hidepopper: `hidepop($('#popup-sqlite'))`,
            id: "popup-sqlite",
            logo: "assets/Skills/Databases/SQLite/sqlite_logo.png",
            togglepopper: `togglepop($(this),$('#popup-sqlite'))`
        },

        tailwindcss: {
            alt: "tailwindcss logo",
            description: "Another awesome CSS framework that's totally different in design philosophy than its competitors.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-tailwindcss'))`,
            id: "popup-tailwindcss",
            logo: "assets/Skills/Frameworks/TailwindCSS/tailwindcss_logo.png",
            togglepopper: `togglepop($(this),$('#popup-tailwindcss'))`
        },

        tensorflow: {
            alt: "tensorflow logo",
            description: "TensorFlow is an amazing tool for ML and AI. Solving research and engineering challenges however aren't as easy as `import tensorflow`. Understanding the manipulations and having an appreciation for the stable implementations provided by tensorflow is key to effective use. See my use of tensorflow (in the context of my MS thesis) by double-clicking the icon or tapping this pop-up.",
            followlink: `linkto('http://d-scholarship.pitt.edu/36179/')`,
            hidepopper: `hidepop($('#popup-tensorflow'))`,
            id: "popup-tensorflow",
            logo: "assets/Skills/ArtificialIntelligenceAndMachineLearning/TensorFlow/tensorflow_logo.png",
            togglepopper: `togglepop($(this),$('#popup-tensorflow'))`
        },

        tensorflowjs: {
            alt: "tfjs logo",
            description: "TFJS is a lifesaver for bringing tensorflow capability to the frontend, but amazingly it can be used on the backend in a node instance as well. For some applications, the level of performance can be dramatically improved by landing your ML code on the frontend. Train a neural net to recognize characters live in your browser by double-clicking the logo or tapping this link.",
            followlink: `linkto('https://asa55.github.io/InBrowserCharacterRecognition/index.html')`,
            hidepopper: `hidepop($('#popup-tensorflowjs'))`,
            id: "popup-tensorflowjs",
            logo: "assets/Skills/ArtificialIntelligenceAndMachineLearning/TensorFlowJS/tfjs_logo.PNG",
            togglepopper: `togglepop($(this),$('#popup-tensorflowjs'))`
        },

        unity: {
            alt: "unity logo",
            description: "A physics engine for real time simulations and VR! Among other things like cross-platform deployments of 2D and 3D mobile apps. This is the brunt of my experience with C#.",
            followlink: ``,
            hidepopper: `hidepop($('#popup-unity'))`,
            id: "popup-unity",
            logo: "assets/Skills/Frameworks/Unity/unity_logo.png",
            togglepopper: `togglepop($(this),$('#popup-unity'))`
        },

        vue: {
            alt: "vue logo",
            description: "I implemented the latest version of the webpage you're currently looking at using Vue. I couldn't be happier with how clean the new codebase is, but it's a little slower than it was in pure HTML/CSS/JS, so at least when using Vue that's a tradeoff you'll have to consider if it's worth making. See the load time on my Neurobi website for comparison's sake. Check out the main Vue components used for this site by double-clicking the image or tapping this pop-up",
            followlink: `linkto('https://github.com/asa55/asa55.github.io/tree/master/scripts/vue_js_framework')`,
            hidepopper: `hidepop($('#popup-vue'))`,
            id: "popup-vue",
            logo: "assets/Skills/Frameworks/VueJS/vue_logo.png",
            togglepopper: `togglepop($(this),$('#popup-vue'))`
        }
    }
});
