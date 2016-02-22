!function(){"use strict";angular.module("githubTt",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","toastr"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Material Design Lite",url:"http://www.getmdl.io/",description:"Add a Material Design look and feel to your websites.",logo:"material-design-lite.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("githubTt").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("githubTt").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,a,o,n){var r,s=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){s.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(e){s.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}function a(e,t){function a(){return o().then(function(){e.info("Activated Contributors View")})}function o(){return t.getContributors(10).then(function(e){return n.contributors=e,n.contributors})}var n=this;n.contributors=[],a()}a.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return o}e.$inject=["malarkey"],angular.module("githubTt").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function a(a){function n(e){return e.data}function r(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(o+"/contributors?per_page="+a).then(n)["catch"](r)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:o,getContributors:a};return n}e.$inject=["$log","$http"],angular.module("githubTt").factory("githubContributor",e)}(),function(){"use strict";function e(e,t){return e.toUpperCase().indexOf(t.toUpperCase())>-1?!0:!1}function t(){return function(t,a){if(""===a)return t;t=t||[];var o=[];return angular.forEach(t,function(t){(e(t.name,a)||e(t.link,a)||e(t.page,a))&&o.push(t)}),o}}function a(){return function(t,a){if(""===a)return t;t=t||[];var o=[];return angular.forEach(t,function(t){var n=a.split(" "),r=!1;angular.forEach(n,function(a){e(t.person,a)&&(r=!0)}),angular.forEach(t.quotes,function(t){e(t.quote,a)&&(r=!0)}),r&&o.push(t)}),o}}function o(e,t,a){function o(){r(),e(function(){s.classAnimation="rubberBand"},4e3)}function n(){a.info('Dance Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function r(){s.awesomeThings=t.getTec(),angular.forEach(s.awesomeThings,function(e){e.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1455695700850,s.showToastr=n,o(),s.data={rPages:[{name:"Lok",link:"https://www.facebook.com/OK-Wealthy-1125835430762291/",page:"OK-Wealthy"},{name:"Iyan",link:"https://www.facebook.com/IyanWhitewolfSacredWhispers/",page:"Iyan Whitewolf Sacred Whispers"},{name:"Jasmine",link:"https://www.facebook.com/TREND-less-1026954014033069/?fref=ts",page:"Trend-LESS"},{name:"Charity Faith",link:"https://www.facebook.com/Mysticmiraclestransformation/?fref=ts",page:"Mystic Miracles Transformation"},{name:"Nanette",link:"https://www.facebook.com/A-Moment-For-Inspiration-169944783380579/",page:"A Moment For Inspiration"},{name:"Amanda ",link:"https://www.facebook.com/AmandaChurchillSoaringHearts/?fref=ts",page:"Soaring Hearts"},{name:"Natasha A Stone",link:"https://www.facebook.com/Angels-of-Change-1688121708073407/",page:"Angels of Change"},{name:"Janice Manager",link:"https://www.facebook.com/jmangerathousandpetals/?fref=photo",page:"A Thousand Petals"},{name:"James Love Whitley",link:"https://www.facebook.com/JamesWhitleyArt/",page:"James Whitley Art"},{name:"Sharon Stahlhut ",link:"http://www.facebook.com/myliftyourspirit",page:"Lift Your Spirit"},{name:"Stephanie Hunter Carey ",link:"https://www.facebook.com/Coachingwithsteph/",page:"Coaching With Steph"},{name:"Chris Crooks",link:"https://www.facebook.com/Radiating1love/?ref=hl",page:"Chris Crooks"},{name:"Benny Bleacher",link:"https://www.facebook.com/Benjamin-F-Bleacher-III-1754071574821868",page:"Benjamin F. Bleacher, III"},{name:"Jennifer JC Atzbach",link:"https://www.facebook.com/JenniferJCAtzbach",page:"One Step Closer"},{name:"Heather Ann",link:"https://www.facebook.com/AA1Princess",page:"Heather Ann Jarman"},{name:"Brian Thompson ",link:"http://www.facebook.com/zenthinking",page:"Zen Thinking"},{name:"Helena Wetsel",link:"https://www.facebook.com/helenaottillia/",page:"Helena Ottillia.com"}],rQuotes:[{person:"Lok",quotes:[{status:null,quote:"You've made it to the other side."},{status:"shared",quote:"What you wear, eat, sleep, play, and enjoy is made out of dreams."}]},{person:"Mary Johnston",quotes:[{status:null,quote:"Tears, Love’s crystals, washing away bits of the ego, so the Heart can grow Stronger."},{status:null,quote:"The light of the golden star which burns in your heart, also, burns within mine, so be kind to us both."},{status:null,quote:"In one person there is an ocean to be explored, and in this ocean we ride the waves and gather our shells of memories."},{status:null,quote:"In the seas of Life, we find Shells with pearls and some with only sand, nurture the sand with the blessings of the Pearls."}]},{person:"Jamie Caudill Odiorne",quotes:[{status:null,quote:"It's not a competition. It's is a calling."}]},{person:"Jasmine Grayson",quotes:[{status:null,quote:"In a world full of likes, go further and be the love."}]},{person:"CiCi Ochoa",quotes:[{status:null,quote:"Faith it until you make it."}]},{person:"David Newman",quotes:[{status:null,quote:"Life is good. We're so blessed. You're all so blessed."}]},{person:"Donna T. Jones",quotes:[{status:null,quote:"Spirituality is one for the people who walked out of religion."}]},{person:"Pearli Björkman",quotes:[{status:"rs-posted",quote:"There’s always light and warmth. There’s always light around us. We just have to be open to it."}]},{person:"Carmella Whitehead, LMFT",quotes:[{status:null,quote:"I want to share with you. I want to get to know you. I want to hear you . I want to learn from you. I want to inspire you. I want to be inspired by you."},{status:null,quote:"Have a Royal Day."}]},{person:"Sam Sam",quotes:[{status:null,quote:"You reap what you sew."},{status:null,quote:"I love you, I don’t care what others think of you. Let me give you a hug."},{status:null,quote:"Random acts of kindness can make someone that is sad, really happy."}]},{person:"Nanette Mathews",quotes:[{status:null,quote:"Like this comment on fire!"}]},{person:"Holly Grace",quotes:[{status:null,quote:"Meet yourself where you are at."},{status:null,quote:"Find yourself to fill in that void of love."},{status:null,quote:"When there’s awareness. There’s no illusion."}]},{person:"Mel Rocha",quotes:[{status:null,quote:"You are loved."}]},{person:"Sarah Seed",quotes:[{status:null,quote:"Messy in the middle. Gorgeous in the end."}]},{person:"Charity Faith",quotes:[{status:null,quote:"We are all stars. If the stars make up the universe, imagine what we can do."}]},{person:"Heather LeClair",quotes:[{status:null,quote:"I don't always pay attention to how you look or the clothes you wear. Sometimes what I judge you by is the energy you carry around with you. Be aware and conscious of who you are, for that is what I really see."}]},{person:"Brooke Lillith",quotes:[{status:null,quote:"Why are you sad?"},{status:null,quote:"Hold your vision."}]},{person:"Bryant McGill",quotes:[{status:null,quote:"The light is inside of YOU."}]},{person:"Stacey Belcher",quotes:[{status:null,quote:"You are the piece of the puzzle to someone else's life you may never know where you fit but others will fill the holes of their lives  with pieces you."}]}]},s.rPages=s.data.rPages,s.rQuotes=s.data.rQuotes,s.rQuery=""}o.$inject=["$timeout","webDevTec","toastr"],angular.module("githubTt").filter("royalsPage",t).filter("royalsQuote",a).controller("MainController",o)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("githubTt").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("githubTt").config(e)}(),function(){"use strict";angular.module("githubTt").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("githubTt").config(e)}(),angular.module("githubTt").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="mdl-layout__container has-scrolling-header"><div class="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100 is-small-screen is-upgraded" data-upgraded=",MaterialLayout"><header class="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800"><div class="mdl-layout__header-row"><span class="mdl-layout-title">Together Time</span><div class="mdl-layout-spacer"></div><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input" type="text" ng-model="main.rQuery"> <label class="mdl-textfield__label">Search Name...</label></div></div></header><div class="demo-ribbon"></div><main class="demo-main mdl-layout__content"><div class="demo-container mdl-grid"><div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div><div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col"><h3>Directory of Royal\'s Pages</h3><span ng-repeat="(rPKey, rPVal) in main.rPages | royalsPage:main.rQuery">{{ rPVal.name }} - <a href="{{ rPVal.link }}">{{ rPVal.page }}</a><br></span></div></div><div class="demo-container mdl-grid"><div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div><div class="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col"><h3>Royal Quotes</h3><div ng-repeat="(rQKey, rQVal) in main.rQuotes | royalsQuote:main.rQuery track by $index"><h4>Author: {{ rQVal.person }}</h4><p ng-repeat="(erQK, erQ) in rQVal.quotes">{{ erQ.quote }}<br><span ng-show="erQ.status">Status: {{ erQ.status }} <span ng-hide="erQ.status">Haven\'t Make Poster</span></span></p><hr ng-hide="rQKey === (main.rQuotes.length - 1)"></div></div></div><footer class="demo-footer mdl-mini-footer"><div class="mdl-mini-footer--left-section"><ul class="mdl-mini-footer--link-list"><li><a href="#">Together Time is the gold of humanity.</a></li></ul></div></footer></main></div></div>'),e.put("app/components/navbar/navbar.html",'<div class="mdl-layout__header-row"><span class="mdl-layout-title mdl-badge" data-badge="♥">Gulp Angular</span><nav class="mdl-navigation mdl-layout--large-screen-only"><a class="mdl-navigation__link" href="#">Home</a> <a class="mdl-navigation__link" href="#">About</a> <a class="mdl-navigation__link" href="#">Contact</a></nav><div class="mdl-layout-spacer"></div><span class="mdl-navigation__link">Application was created {{ vm.relativeDate }}.</span></div>')}]);
//# sourceMappingURL=../maps/scripts/app-a735b80209.js.map
