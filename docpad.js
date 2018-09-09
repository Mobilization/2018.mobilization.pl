var docpadConfig;
var indexOf = [].indexOf || function (item) {
    for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item) return i;
    }
    return -1;
};

var imgBaseUrl = '/assets/images/';
var sponsorsImgBaseUrl = imgBaseUrl + 'sponsors/';
var speakersImgBaseUrl = imgBaseUrl + 'speakers/';
var partnersImgBaseUrl = imgBaseUrl + 'partners/';

docpadConfig = {
    outPath: '../2018.mobilization.pl-gh-pages/',
    templateData: {
        site: {
            url: "http://2018.mobilization.pl",
            oldUrls: ['www.mobilization.pl'],
            title: "Mobilization 2018",
            description: "Mobilization is a conference dedicated to mobile technologies. The main scope is development of mobile solutions aimed at smartphones and tablets, with particular interest in Android and iOS mobile platforms.",
            keywords: "mobilization, conference, mobile conference, Łódź",
            author: "Java User Group Łódź",
            styles: [],
            scripts: [],
            visibility: {
                "call_for_papers": false,
                "registration": true,
                "agenda": false,
                "speakers": true,
                "sponsors": true,
                "partners": true
            },
            event: {
                title: 'Mobilization 2018',
                location: {
                    lat: 51.7505458,
                    lng: 19.4501351,
                    place: '(Nowa) Hala Expo',
                    street: 'al. Politechniki 4',
                    city: 'Łódź',
                    zip: '93-590',
                    country: 'Polska'
                },
                data: '20th Oct 2018',
                time: '08:00-18:00'
            },
            sponsors: {
                diamond: [
                {
                    "name" : "TomTom",
                    "logo_url" : sponsorsImgBaseUrl + "tomtom-on-white.png",
                    "link" : "https://www.tomtom.com/pl_pl/"
                },
                ],
                platinum: [
                {
                    "name" : "Glase",
                    "logo_url" : sponsorsImgBaseUrl + "glase-300px.png",
                    "link" : "https://www.glase.se/en/"
                },
                {
                        "name": "Idemia",
                        "logo_url": sponsorsImgBaseUrl + "idemia-vertical-300px.jpg",
                        "link": "https://www.idemia.com/"
                },
                {
                    "name" : "Mobica",
                    "logo_url" : sponsorsImgBaseUrl + "mobica.png",
                    "link": "https://www.mobica.com/"
                },
                {
                    "name" : "Harman",
                    "logo_url" : sponsorsImgBaseUrl + "harman.jpeg",
                    "link": "https://services.harman.com/"
                },
                ],
                gold: [
                {
                    "name" : "Allegro",
                    "logo_url" : sponsorsImgBaseUrl + "allegro.png",
                    "link" : "https://allegro.tech/"
                },
                {
                    "name" : "Fujitsu",
                    "logo_url" : sponsorsImgBaseUrl + "fujitsu.png",
                    "link" : "http://www.fujitsu.com/pl/about/local/lodz/"
                },
                {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
                },
                {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link" : "mailto:sponsors@mobilization.pl?subject=Sponsorship%20packages&body=I%20am%20nterested%20in%20the%20sponsorship%20offer%20for%20Mobilization+2018."
                },                                                
                ],
                silver: [
                {
                    "name" : "Appyourself",
                    "logo_url" : sponsorsImgBaseUrl + "appyourself.png",
                    "link" : "https://appyourself.net/en/"
                },
                {
                    "name" : "Cybercom Group",
                    "logo_url" : sponsorsImgBaseUrl + "cybercom.png",
                    "link" : "https://www.cybercom.com/pl/Poland/"
                },
                {
                    "name" : "Hycom",
                    "logo_url" : sponsorsImgBaseUrl + "hycom.png",
                    "link" : "https://www.hycom.pl/"
                },
                {
                    "name" : "IT Kontrakt",
                    "logo_url" : sponsorsImgBaseUrl + "itkontrakt.png",
                    "link" : "https://www.itkontrakt.pl/dolaczdonas/cities/lodz/"
                },
                ],
                afterparty: [
                {
                    "name" : "Digital New Agency",
                    "logo_url" : sponsorsImgBaseUrl + "dna.png",
                    "link" : "http://bit.ly/dnapoland"
                },
                ],
                copper: [
                {
                    "name" : "Mercari",
                    "logo_url" : sponsorsImgBaseUrl + "mercari.png",
                    "link": "https://about.mercari.com/en/"
                },
                {
                    "name" : "Moovel",
                    "logo_url" : sponsorsImgBaseUrl + "moovel.png",
                    "link" : "https://www.moovel.com/de/en"
                },
                {
                    "name" : "Five",
                    "logo_url" : sponsorsImgBaseUrl + "five.png",
                    "link" : "https://five.agency/"
                },
                {
                    "name" : "vpTech",
                    "logo_url" : sponsorsImgBaseUrl + "vptech.png",
                    "link" : "https://twitter.com/ventepriveetech"
                },

                
                ]
            },
            partners: {
                organizers: [
                    {
                        name: 'Java User Group Łódź',
                        logo_url: partnersImgBaseUrl + 'juglodz.jpeg',
                        "link" : "https://www.juglodz.pl",
                        description_html: 'Łódź JUG is an association of Java developers, architects and enthusiasts of Java technology from Łódź, the city in the centre of Poland. The aim of the association is to promote exchange of knowledge and competence growth among Java professionals in the Łódź area. The main activity towards this goal is organisation of IT-related seminars and meetings that usually involve a presentation about chosen topic and then follow-up discussion. LJUG cooperates with other JUGs in Poland, like Polish JUG and Warsaw JUG. We encourage everyone interested in Java technologies to join and start participating in our expertise-sharing activities! Java User Group Łódź is main organizer of Mobilization event since 2011'
                    }
                ],
                community: [
                    {
                        "name": "Android Developer Group Poznań",
                        "logo_url": partnersImgBaseUrl + 'adg-poznan-logo.png',
                        "link": "https://www.meetup.com/Poznan-Android-Developer-Group/"
                    },
                    {
                        "name": "TOAST - Android Developers Meetup",
                        "logo_url": partnersImgBaseUrl + 'toast.png',
                        "link": "https://www.meetup.com/TOAST-Android-Developers-Meetups/"
                    },
                    {
                        "name": "Challenge Rocket",
                        "logo_url": partnersImgBaseUrl + 'challenge_rocket.png',
                        "link": "http://bit.ly/MobiChallenge"
                    },
                    {
                        "name": "GDG DevFest Poland 2018 in Wrocław",
                        "logo_url": partnersImgBaseUrl + 'devfest-wroclaw.png',
                        "link": "https://wroclaw.devfest.pl/"
                    },
                    {
                        "name": "GDG Rzeszów",
                        "logo_url": partnersImgBaseUrl + 'gdg-rzeszow.png',
                        "link": "https://gdgrzeszow.pl/"
                    },
                    {
                        "name": "Let Swift",
                        "logo_url": partnersImgBaseUrl + 'let-swift.png',
                        "link": "https://www.facebook.com/letswiftwroclaw/"
                    },
                    {
                        "name": "Meet.mobile",
                        "logo_url": partnersImgBaseUrl + 'meet-mobile.png',
                        "link": "https://www.meetup.com/meet-mobile/"
                    },                    
		            {
                        "name": "Mobile Central Europe",
                        "logo_url": partnersImgBaseUrl + 'mceconf.png',
                        "link": "https://mceconf.com"
                    },
                    {
                        "name": "Mobile Warsaw",
                        "logo_url": partnersImgBaseUrl + 'mobile-warsaw.png',
                        "link": "https://mobile-warsaw.pl/"
                    },                    
                    {
                        "name": "Women Techmakers Rzeszów",
                        "logo_url": partnersImgBaseUrl + 'wtm-rzeszow.png',
                        "link": "https://www.facebook.com/WTMrzeszow/"
                    },
                ],
                media : [
                    {
                        "name": "Młodzi w Łodzi",
                        "logo_url": partnersImgBaseUrl + 'mwl-square.png',
                        "link": "https://mlodziwlodzi.pl/"
                    },
                    {
                        "name": "Programista Magazyn",
                        "logo_url": partnersImgBaseUrl + 'programistamag.png',
                        "link": "https://programistamag.pl/"
                    },
                ]
            },
            slots: {
                'slot-registration': {
                    from: '8:00',
                    to: '9:00'
                },
                'slot-hello-world': {
                    from: '9:00',
                    to: '9:10'
                },
                'slot-no-coffee-0': {
                    from: '9:10',
                    to: '9:15'
                },
                'slot-1': {
                    from: '9:15',
                    to: '10:00'
                },
                'slot-coffee-1': {
                    from: '10:00',
                    to: '10:15'
                },
                'slot-2': {
                    from: '10:15',
                    to: '11:00'
                },
                'slot-coffee-2': {
                    from: '11:00',
                    to: '11:15'
                },
                'slot-3': {
                    from: '11:15',
                    to: '12:00'
                },
                'slot-lunch': {
                    from: '12:00',
                    to: '13:00'
                },
                'slot-4': {
                    from: '13:00',
                    to: '13:45'
                },
                'slot-coffee-4': {
                    from: '13:45',
                    to: '14:00'
                },
                'slot-5': {
                    from: '14:00',
                    to: '14:45'
                },
                'slot-coffee-5': {
                    from: '14:45',
                    to: '15:00'
                },
                'slot-6': {
                    from: '15:00',
                    to: '15:45'
                },
                'slot-coffee-6': {
                    from: '15:45',
                    to: '16:00'
                },
                'slot-7': {
                    from: '16:00',
                    to: '16:45'
                },
                'slot-coffee-7': {
                    from: '16:45',
                    to: '17:00'
                },
                'slot-8': {
                    from: '17:00',
                    to: '17:45'
                },
                'slot-no-coffee-8': {
                    from: '17:45',
                    to: '17:50'
                },
                'slot-finally': {
                    from: '17:50',
                    to: '18:10'
                },
                'slot-afterparty': {
                    from: '18:30',
                    to: '23:59'
                },
            },
            speakers: {
                "speaker-artur-badretdinov": {//1
                    "firstname": "Artur",
                    "lastname": "Badretdinov",
                    "bio_html": "Artur started programming from school because it's fun! He got a Master degrees in Computer Science and Software Engineering when he understood that nowadays it is important to be a team player and to write code in a way that it will be understandable and modifiable. He is a Google Developer Group Lead in Russia, he loves to get knowledge and share his experience. He has developed backend apps on Java and then decided to be closer to users and dove into Android development: school journal, banking app. Now he makes ringtones memorable at Vyng, as a Senior Android Engineer.",
                    "www": "",
                    "twitter": "https://twitter.com/gaket",
                    "facebook": "",
                    "github": "https://github.com/gaket",
                    "linkedin": "https://www.linkedin.com/in/gaket",
                    "photo_url": speakersImgBaseUrl + "artur-badretdinov.png"
                },
                "speaker-filip-babic": {//2
                    "firstname": "Filip",
                    "lastname": "Babić",
                    "bio_html": "A 21 year old Android developer, focusing deeply on optimising code, structuring applications and testing whatever can be tested! Self pronounced Kotlin evangelist, with nearly two years of experience using Kotlin, hugely focusing on the community, giving back to everyone and teaching people, whilst learning from others all the same.  ",
                    "www": "",
                    "twitter": "https://twitter.com/filbabic",
                    "facebook": "",
                    "github": "https://github.com/filbabic",
                    "linkedin": "https://www.linkedin.com/in/filip-babić-52b73a130",
                    "photo_url": speakersImgBaseUrl + "filip-babic.png"
                },
                "speaker-louis-cad": {//3
                    "firstname": "Louis",
                    "lastname": "CAD",
                    "bio_html": "Android and Kotlin Dev. Efficiency before performance. Bike commuter, velomobile enthusiast.",
                    "www": "",
                    "twitter": "https://twitter.com/LouisCAD",
                    "facebook": "",
                    "github": "https://github.com/LouisCAD",
                    "linkedin": "",
                    "photo_url": speakersImgBaseUrl + "louis-cad.png"
                },
                "speaker-niklas-baudy": {//4
                    "firstname": "Niklas",
                    "lastname": "Baudy",
                    "bio_html": "Niklas Baudy, Senior Android Developer at moovel in Hamburg, is an affine and young developer who is passionate about Reactive Programming, testable and high quality code.",
                    "www": "",
                    "twitter": "https://twitter.com/vanniktech",
                    "facebook": "",
                    "github": "https://github.com/vanniktech",
                    "photo_url": speakersImgBaseUrl + "niklas-baudy.png"
                },
                 "speaker-yoichi-tagaya": {//5
                    "firstname": "Yoichi",
                    "lastname": "Tagaya",
                    "bio_html": "Yoichi is the original author of Swinject, which is the most popular dependency injection framework written in and for Swift. He is an iOS engineer and engineering manager working at Mercari Inc, which provides a marketplace app for anyone to sell and buy items in the UK, US and Japan.",
                    "www": "https://yoichitgy.github.io/",
                    "twitter": "https://twitter.com/yoichitgy",
                    "facebook": "",
                    "github": "https://github.com/yoichitgy",
                    "photo_url": speakersImgBaseUrl + "yoichi-tagaya.png"
                },
                "speaker-benedikt-terhechte": {//6
                    "firstname": "Benedikt",
                    "lastname": "Terhechte",
                    "bio_html": "Benedikt works as a Senior iOS Developer at the professional network XING. In previous jobs he developed solutions for customers such as Disney or Daimler-Chrysler. As an Indie Mac developer, he launched successful apps such as PhotoDesk and Hirundo. Benedikt started investigating Swift right after the 2014 release and writes about it on his popular blog. He also initiated the Core Value and SourceKittenDaemon open source projects",
                    "www": "https://appventure.me",
                    "twitter": "https://twitter.com/terhechte",
                    "facebook": "",
                    "github": "https://github.com/terhechte",
                    "linkedin" : "https://www.linkedin.com/in/benediktterhechte",
                    "photo_url": speakersImgBaseUrl + "benedikt-terhechte.png"
                },
                "speaker-hasan-hosgel": {//7
                    "firstname": "Hasan",
                    "lastname": "Hosgel",
                    "bio_html": "Hasan Hoşgel is a dedicated Android developer with professional programming experience since 2003. Since 2010 doing all day long Android application development and also is a Google Developer Expert for Android. \nContinuous improvement of the architecture, performance and also quality are his dedication. \nHe works for Lab1886, beforehand a long time for ImmobilienScout24, Germany’s real estate marketplace leader and also for Kitchen Stories, which offered a premium cooking application. \nAs a co-organizer of the “GDG Berlin Android” and as a speaker, he attended many mobile conferences and several Google Developer Groups across Europe. As well being in program committees and organization of mobile conferences.",
                    "www": "",
                    "twitter": "https://twitter.com/alosdev",
                    "facebook": "",
                    "github": "https://github.com/alosdev",
                    "linkedin" : "https://www.linkedin.com/in/hosgel",
                    "photo_url": speakersImgBaseUrl + "hasan-hosgel.png"
                },
                "speaker-joannis-orlandos": {//8
                    "firstname": "Joannis",
                    "lastname": "Orlandos",
                    "bio_html": "Long time OpenSource Swift contributor. Always reinventing the wheel to find new and better solutions.",
                    "www": "",
                    "twitter": "https://twitter.com/joannisorlandos",
                    "facebook": "",
                    "github": "",
                    "linkedin" : "",
                    "photo_url": speakersImgBaseUrl + "joannis-orlandos.png"
                },
                "speaker-piotr-wittchen": {//9
                    "firstname": "Piotr",
                    "lastname": "Wittchen",
                    "bio_html": "Piotr is a Software Engineer. He has a few years of experience in development of both server and mobile applications. He is also involved in the open-source community. He created and maintains several libraries for Java and Android, which are used by developers and companies across the globe - from Silicon Valley through Poland to Korea. He is also a member of the Silesian Java Users Group (SJUG) and shares his thoughts & experiences on the private technical blog at http://wittchen.io and posts solutions to StackOverflow. According to http://git-awards.com, he is the top 5 open source Java developer in Poland.",
                    "www": "http://wittchen.io",
                    "twitter": "https://twitter.com/piotr_wittchen",
                    "facebook": "",
                    "github": "https://github.com/pwittchen",
                    "linkedin" : "https://www.linkedin.com/in/piotrwittchen/",
                    "photo_url": speakersImgBaseUrl + "piotr-wittchen.png"
                },     
                "speaker-marcin-moskala": {//10
                    "firstname": "Marcin",
                    "lastname": "Moskała",
                    "bio_html": "Experienced Android and Kotlin developer. Co-author of the book \"Android Development with Kotlin\", founder of Kot. Academy, an active member of programming and Kotlin community, speaker at international conferences, consultant, and teacher. Except for those activities, Marcin travels and makes data science analysis. He also develops Kot. Academy portal, which is not only the place where Kotlin community shares knowledge and news, but also the biggest open-source multiplatform Kotlin project.",
                    "www": "http://marcinmoskala.com",
                    "twitter": "https://twitter.com/mmoskala",
                    "facebook": "",
                    "github": "https://github.com/MarcinMoskala",
                    "photo_url": speakersImgBaseUrl + "marcin-moskala.png"
                },
                "speaker-qian-jin": {//11
                    "firstname": "Qian",
                    "lastname": "Jin",
                    "bio_html": "Android developer, GDE IoT.",
                    "www": "http://potatobon.com/",
                    "twitter": "https://twitter.com/bonbonking",
                    "facebook": "",
                    "github": "https://github.com/jinqian",
                    "photo_url": speakersImgBaseUrl + "qian-jin.png"
                },
                 "speaker-olmo-gallegos": {//12
                    "firstname": "Olmo",
                    "lastname": "Gallegos",
                    "bio_html": "Android Developer since 2011. Speaker, OpenSource maintainer & contributor",
                    "www": "https://github.com/voghDev",
                    "twitter": "https://twitter.com/voghDev",
                    "facebook": "",
                    "github": "https://github.com/voghDev",
                    "photo_url": speakersImgBaseUrl + "olmo-gallegos.png"
                },
                 "speaker-janina-kutyn": {//13
                    "firstname": "Janina",
                    "lastname": "Kutyn",
                    "bio_html": "Janina is an iOS developer with a passion for sleek user interfaces.\nShe was part of the launch team for Apple Music and is currently\nworking for payment processing leader Adyen.",
                    "www": "",
                    "twitter": "https://twitter.com/janinakutyn",
                    "linkedin" : "https://www.linkedin.com/in/janinakutyn/",
                    "facebook": "",
                    "github": "",
                    "photo_url": speakersImgBaseUrl + "janina-kutyn.png"
                },
                 "speaker-arnaud-giuliani": {//14
                    "firstname": "Arnaud",
                    "lastname": "Giuliani",
                    "bio_html": "Mobile & backend developer for more than 11 years. He works at ekito (French tech studio) since 2012, and he has one hand in Android development and the other in Kotlin/Java backend stuff. His current hot topics are Kotlin and the reactive programming.\n\nHe is a speaker since 2016. He talks mostly about <a href='https://medium.com/@giuliani.arnaud/presentations-6b91f53899ac'>Kotlin</a>: \n\nHe's launched the <a href='https://insert-koin.io'>Koin</a> project, a lightweight dependency injection framework for Kotlin\n\nHe regularly writes articles on <a href='https://medium.com/@giuliani.arnaud/'>medium</a> or on <a href='https://www.ekito.fr/people/arnaud-giuliani/'>ekito's blog</a>.",
                    "www": "https://medium.com/@giuliani.arnaud",
                    "twitter": "https://twitter.com/arnogiu",
                    "linkedin" : "",
                    "facebook": "",
                    "github": "https://github.com/arnaudgiuliani",
                    "photo_url": speakersImgBaseUrl + "arnaud-giuliani.png"
                },
                "speaker-vasiliy-zukanov": {//15
                    "firstname": "Vasiliy",
                    "lastname": "Zukanov",
                    "bio_html": "Vasiliy is a passionate Android developer, blogger and instructor.\nAfter working as a hardware engineer for several years, he is now constantly amazed by the power that software developers have in bringing products to life. Main areas of Vasiliy's professional interests are product, architecture, testing and best practices.\nFor the past couple of years Vasiliy has been writing an Android development blog at <a href='https://www.techyourchance.com'>www.techyourchance.com</a>\n",
                    "www": "https://www.techyourchance.com",
                    "linkedin" : "",
                    "facebook": "",
                    "photo_url": speakersImgBaseUrl + "vasiliy-zukanov.png"
                },
                "speaker-rohan-taneja": {//16
                    "firstname": "Rohan",
                    "lastname": "Taneja",
                    "bio_html": "Rohan is a mobile apps enthusiast who loves talking about the latest in the mobile world, with Flutter being his most recent love affair. He’s an organiser with GDG New Delhi and a Google Certified Associate Android Developer. He contributes to open source projects, blogs about tech on Medium and mentors students at Udacity and OpenClassrooms.",
                    "www": "https://www.rohantaneja.com",
                    "github" : "https://www.github.com/rohan20",
                    "linkedin" : "https://linkedin.com/in/rohantaneja",
                    "twitter" : "https://twitter.com/rohantaneja_",
                    "facebook": "",
                    "photo_url": speakersImgBaseUrl + "rohan-taneja.png"
                },
                "speaker-laura-morinigo": {//17
                    "firstname": "Laura",
                    "lastname": "Morinigo",
                    "bio_html": "Laura is a Google Developer Expert in Firebase, entrepreneur, and mentor. She has been involved in the tech industry over 10 years, working with different technologies as a fullstack developer and getting involved with education projects teaching coding. She is one of the organizers of GDG Cloud London and Women Techmakers lead. Originally from Buenos Aires, Argentina, she has been a digital nomad for about one year, traveling around; doing talks, workshops and connecting with the local tech communities. While she was on the road she created with her co-founders DMode Labs: a software company that promotes diversity and remote working.",
                    "twitter": "https://twitter.com/lala_morinigo",
                    "linkedin" : "https://www.linkedin.com/in/laurasmorinigo/",
                    "github" : "https://github.com/lauramorinigo",
                    "photo_url": speakersImgBaseUrl + "laura-morinigo.png"
                },
                "speaker-marcin-krzyzanowski": {//18
                    "firstname": "Marcin",
                    "lastname": "Krzyżanowski",
                    "bio_html": "After programming for several years, Marcin enjoys working on mobile technologies and cryptography, more than in enterprise business solutions. He has worked on multiple projects with various technologies, currently working on a PDF framework at PSPDFKit.\nHe recently combined his passions, working with CryptoSwift for Apple's new Swift language. With a head full of ideas, in his spare time, he develops and launches new projects including Online Swift Playground, ObjectivePGP, and contributes himself back to the OSS community",
                    "twitter": "https://twitter.com/krzyzanowskim",
                    "linkedin" : "https://www.linkedin.com/in/marcinkrzyzanowski/",
                    "github" : "https://github.com/krzyzanowskim",
                    "www" : "https://krzyzanowskim.com",
                    "photo_url": speakersImgBaseUrl + "marcin-krzyzanowski.png"
                },
                "speaker-paul-hudson": {//19
                    "firstname": "Paul",
                    "lastname": "Hudson",
                    "bio_html": "Paul is the author of Hacking with Swift, Pro Swift, Swift Design Patterns, Server-Side Swift, Hacking with macOS, Hacking with watchOS, Hacking with tvOS, Swift Coding Challenges, and more. Suffice it to say, he quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)",
                    "twitter": "https://twitter.com/twostraws",
                    "github" : "https://github.com/twostraws",
                    "www" : "https://www.hackingwithswift.com",
                    "photo_url": speakersImgBaseUrl + "paul-hudson.png"
                },
                "speaker-samuel-goodwin": {//20
                    "firstname": "Samuel",
                    "lastname": "Goodwin",
                    "bio_html": "Independent software developer out of Amsterdam",
                    "twitter": "https://twitter.com/samuelgoodwin",
                    "github" : "https://github.com/sgoodwin",
                    "www" : "https://roundwallsoftware.com",
                    "photo_url": speakersImgBaseUrl + "samuel-goodwin.png"
                },
                "speaker-jeff-kelley": {//21
                    "firstname": "Jeff",
                    "lastname": "Kelley",
                    "bio_html": "Jeff Kelley is a developer at Detroit Labs, where he builds apps in Swift but still has a soft spot for Objective-C. Author of Developing Apps for Apple Watch and Learn Cocoa Touch for iOS, he’s been working with iOS since its infancy in 2008. Jeff is passionate about building usable apps, the open-source community around Apple platforms, and will talk your ear off about electric cars and clean energy. Jeff loves raising his two kids and two dogs, Detroit, and organizing the Motor City CocoaHeads group.",
                    "twitter": "https://twitter.com/SlaunchaMan",
                    "github" : "https://github.com/SlaunchaMan",
                    "linkedin" : "https://www.linkedin.com/in/jeffreyrkelley",
                    "www" : "https://jeffkelley.org",
                    "photo_url": speakersImgBaseUrl + "jeff-kelley.png"
                },
                "speaker-daniel-tull": {//22
                    "firstname": "Daniel",
                    "lastname": "Tull",
                    "bio_html": "Daniel has been a Cocoa developer since the Java Bridge existed and the height of Mac rumours was whether Lion would be the chosen cat for the next release. He has meandered through a career working with teams at Sky, Tesco, BBC and Nespresso as well as a minor British celebrity fashion guru.",
                    "twitter": "https://twitter.com/danielctull",
                    "github" : "https://github.com/danielctull",
                    "photo_url": speakersImgBaseUrl + "daniel-tull.png"
                },
                "speaker-tomasz-cholewinski": {//23
                    "firstname": "Tomasz",
                    "lastname": "Cholewiński",
                    "bio_html" : "Senior Project Manager at Harman Connected Services. Working with Daimler MBUX, cutting-edge infotainment system being deployed in current and upcoming Mercedes and Maybach cars. Passionate about technology - Automotive, Linux, embedded systems.",
                    "linkedin" : "https://www.linkedin.com/in/tomaszcholewinski",
                    "photo_url": speakersImgBaseUrl + "tomasz-cholewinski.png"
                },
                "speaker-jakub-mazur": {//24
                    "firstname": "Jakub",
                    "lastname": "Mazur",
                    "bio_html" : "Lead iOS Developer <a href='https://twitter.com/@wingu'>@wingu</a> GmbH",
                    "twitter": "https://twitter.com/jkmazur",
                    "github" : "https://github.com/JakubMazur",
                    "linkedin" : "https://www.linkedin.com/in/jakub-mazur-8350b244",
                    "www" : "https://wingu.de",
                    "photo_url": speakersImgBaseUrl + "jakub-mazur.png"
                }, 
                "speaker-oleksandr-tryshchenko": {//25
                    "firstname": "Oleksandr",
                    "lastname": "Tryshchenko",
                    "bio_html" : "Senior JavaScript developer at <a href='https://twitter.com/@dataart'>@dataart</a>. Public speaker at Poland, Austria, Germany, Ukraine. Functional Programming enthusiast.",
                    "twitter": "",
                    "github" : "https://github.com/tryshchenko",
                    "linkedin" : "https://www.linkedin.com/in/oleksandr-tryshchenko/",
                    "www" : "https://tryshchenko.com",
                    "photo_url": speakersImgBaseUrl + "oleksandr-tryshchenko.png"
                },
                "speaker-saul-diaz-gonzalez": {//26
                    "firstname": "Saul",
                    "lastname": "Diaz Gonzalez",
                    "bio_html" : "Saúl Díaz has been developing Android since 2010. Currently he is working on Chicisimo, and Android app selected as one of the best of 2015 on Spain, and featured on Google Play by the Google Play Team. \n\nPreviously he has worked as Android Lead on Fever and Android Developer on Tuenti, two renowned companies of Spain.\n\nHe is an active member of the Spanish Android Development community and regularly participates in events and conferences.",
                    "twitter": "https://twitter.com/Sefford",
                    "github" : "https://github.com/Sefford",
                    "linkedin" : "https://www.linkedin.com/in/sefford/",
                    "photo_url": speakersImgBaseUrl + "saul-diaz.png"
                },
                "speaker-paul-emanuel-garcia": {//27
                    "firstname": "Paul-Emmanuel",
                    "lastname": "Garcia",
                    "bio_html" : "Paul is an iOS developer working in the Product team at Vente-Privee, a succeeding French e-commerce with more than 900k daily and 2.8M monthly active user on iOS.",
                    "twitter": "https://twitter.com/@pemgarcia",
                    "github" : "https://github.com/paulemmanuel-garcia",
                    "photo_url": speakersImgBaseUrl + "paul-garcia.png"
                },
                "speaker-maciej-grzybowski": {//27.5
                    "firstname": "Maciej",
                    "lastname": "Grzybowski",
                    "bio_html" : "Maciek is an iOS developer working in the Core team at Vente-Privee, a succeeding French e-commerce with more than 900k daily and 2.8M monthly active user on iOS.",
                    "twitter": "https://twitter.com/@ncreated",
                    "github" : "https://github.com/ncreated",
                    "www" : "http://www.n-created.com",
                    "photo_url": speakersImgBaseUrl + "maciej-grzybowski.png"
                },
                "speaker-gautier-mechling": {//28
                    "firstname": "Gautier",
                    "lastname": "Mechling",
                    "bio_html" : "Android Developer &amp; GDE for IoT.",
                    "twitter": "https://twitter.com/nilhcem",
                    "github" : "https://github.com/nilhcem",
                    "www" : "http://nilhcem.com/",
                    "linkedin" : "https://www.linkedin.com/in/gautier-mechling-9a0a7236",
                    "photo_url": speakersImgBaseUrl + "gautier-mechling.png"
                },
                "speaker-tomasz-sapeta": {//29
                    "firstname": "Tomasz",
                    "lastname": "Sapeta",
                    "bio_html" : "True JavaScript lover, scuba diver & a photographer devoted to bicycle training but first of all Software Mansioner for more than three years. Crafted multiple React Native mobile apps. Co-creator of projects used by more than a million people. Deeply involved in Expo’s (expo.io) development (WebGL and MediaLibrary in particular). Shares his knowledge at various workshops.",
                    "twitter": "https://twitter.com/tsapeta",
                    "github" : "https://github.com/tsapeta",
                    "photo_url": speakersImgBaseUrl + "tomasz-sapeta.png"
                },              
            },
            talks: {
                "talk-tbd": {
                    "title": "TBD",
                    "description_html": "TBD",
                    "speakers_keys": [],
                    "language": "EN"
                },
				"talk-finally": {
                    "title": "Finally meeting",
                    "description_html": "Time to give thanks to all the sponsors and the organizer\'s team.",
                    "audience_level": "Advanced",
                    "language": "EN",
                    "speakers_keys": []
                },
				"talk-hello-world": {
                    "title": "Hello world!",
                    "description_html": "This is couple of words about Mobilization. For community by community.",
                    "audience_level": "Beginner",
                    "language": "EN",
                    "speakers_keys": []
                },
            },
            breaks: {
                'break-registration': {
                    title: 'Registration',
                    description_html: 'If you do not want to miss any presentation please register between 7:30-9:10. However, registration will be opened all day!'
                },
                // 'break-hello-world': {
                //     title: 'Hello World',
                //     description_html: 'This is couple of words about Mobilization. For community by community.'
                // },
                'break-coffee': {
                    title: 'Coffee Break',
                    description_html: ''
                },
                'break-lunch': {
                    title: 'Lunch Break',
                    description_html: 'VIPs (Speakers, Sponsors) have lunch in Congresowa Restaurant on base floor.<br>Attendees will have soldiers\' soup outside the building!',
                },
                'break-no-coffee': {
                    title: 'No Coffee Break',
                    description_html: ''
                },
                // 'break-finally': {
                //     title: 'Finally meeting',
                //     description_html: 'Time to give thanks to all the sponsors and the organizer\'s team.'
                // },
                'break-afterparty': {
                    title: 'AfterParty in All Star Klubokawiarnia',
                    description_html: 'Free pizza and beer and follow up talks.<br>15min from conference venue.<br>Piotrkowska 217 Łódź'
                }
            },
            venues: {
                "venue-tomtom": {
                    "title": "TomTom"
                },
                "venue-idemia": {
                    "title": "Idemia"
                },
                "venue-glase": {
                    "title": "Glase"
                },
                "venue-mobica": {
                    "title": "Mobica"
                },
                "venue-harman": {
                    "title": "Platinum"
                },
            },
            schedule: {
                "slot-registration": {"break_key": "break-registration"},
                "slot-hello-world": {
                    "venue-tomtom": {
                        "talk_key": "talk-hello-world"
                    }
                },
                "slot-no-coffee-0": {"break_key": "break-no-coffee"},
                "slot-1": {
                },
                "slot-coffee-1": {"break_key": "break-coffee"},
                "slot-2": {
                },
                "slot-coffee-2": {"break_key": "break-coffee"},
                "slot-3": {
                },
                "slot-lunch": {"break_key": "break-lunch"},
                "slot-4": {
                },
                "slot-coffee-4": {"break_key": "break-coffee"},
                "slot-5": {
                },
                "slot-coffee-5": {"break_key": "break-coffee"},
                "slot-6": {
                },
                "slot-coffee-6": {"break_key": "break-coffee"},
                "slot-7": {
                },
                "slot-coffee-7": {"break_key": "break-coffee"},
                "slot-8": {
                },
                "slot-no-coffee-8": {"break_key": "break-no-coffee"},
                "slot-finally": {
                    "venue-tomtom": {
                        "talk_key": "talk-finally"
                    },
                },
                "slot-afterparty": {"break_key": "break-afterparty"}
            },
            volunteers: {
                //1
                "volunteer-marcin-iwanicki": {
                    "firstname": "Marcin",
                    "lastname": "Iwanicki",
                    "bio_html": "Created docpad generator for mobilization webpage. Deals with iOS talks.",
                    "www": "",
                    "twitter": "https://twitter.com/marciniwanicki",
                    "photo_url": "/images/team/marcin-iwanicki.jpeg"
                },
                //2
                "volunteer-marek-defecinski": {
                    "firstname": "Marek",
                    "lastname": "Defeciński",
                    "bio_html": "Coordinates all things with Mobilization. Seeks for speakers. The brain of Mobilization conference.",
                    "www": "",
                    "twitter": "https://twitter.com/marekdef",
                    "photo_url": "/images/team/marek-defecinski.jpeg"
                },
                //3
                "volunteer-karolina-draus": {
                    "firstname": "Karolina",
                    "lastname": "Draus",
                    "bio_html": "Coordinates promotion and contact with partners. Content Manager - Facebook & Twitter. Talented copywriter.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/karolina-draus.jpeg"
                },
                //4
                "volunteer-mariusz-saramak": {
                    "firstname": "Mariusz",
                    "lastname": "Saramak",
                    "bio_html": "If Marek is the brain, he is the heart of Mobilization. Full of crazy ideas - the first one was this conference.",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/mariusz-saramak.jpeg"
                },
                //5
                "volunteer-tomasz-zielinski": {
                    "firstname": "Tomasz",
                    "lastname": "Zieliński",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/tomasz-zielinski.jpeg"
                },
                //6
                "volunteer-beata-nagorniewicz": {
                    "firstname": "Beata",
                    "lastname": "Nagórniewicz",
                    "bio_html": "Responsible for AfterParty :)",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/beata-nagorniewicz.jpeg"
                },
                //7
                "volunteer-cezary-draus": {
                    "firstname": "Cezary",
                    "lastname": "Draus",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/cezary-draus.jpeg"
                },
                //8
                "volunteer-agnieszka-saramak": {
                    "firstname": "Agnieszka",
                    "lastname": "Saramak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/agnieszka-saramak.jpeg"
                },
                //9
                "volunteer-rafal-lenarczyk": {
                    "firstname": "Rafał",
                    "lastname": "Lenarczyk",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/rafal-lenarczyk.jpeg"
                },
                //10
                "volunteer-anna-defecinska": {
                    "firstname": "Anna",
                    "lastname": "Defecińska",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/anna-defecinska.jpeg"
                },
                //11
                "volunteer-andrzej-jozwiak": {
                    "firstname": "Andrzej",
                    "lastname": "Jóźwiak",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/andrzej-jozwiak.jpeg"
                },
                //12
                "volunteer-krzysztof-gutowski": {
                    "firstname": "Krzysztof",
                    "lastname": "Gutowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krzysztof-gutowski.jpeg"
                },
                //13
                "volunteer-krystian-laskowski": {
                    "firstname": "Krystian",
                    "lastname": "Laskowski",
                    "bio_html": "",
                    "www": "",
                    "twitter": "",
                    "photo_url": "/images/team/krystian-laskowski.jpeg"
                },
            },
        },
        getPreparedTitle: function () {
            if (this.document.title) {
                return this.document.title + " | " + this.site.title;
            } else {
                return this.site.title;
            }
        },
        getPreparedDescription: function () {
            return this.document.description || this.site.description;
        },
        getPreparedKeywords: function () {
            return this.site.keywords.concat(this.document.keywords || []).join(', ');
        },
        getPreparedAuthor: function () {
            return this.site.author;
        },
        getHtmlLangImg: function (_talk) {
            if (_talk.language == "EN") {
                return "<img src=\"/assets/img/page/lang_en.png\" alt=\"English\" class=\"language\" />";
            }
            if (_talk.language == "PL") {
                return "<img src=\"/assets/img/page/lang_pl.png\" alt=\"Polish\" class=\"language\" />";
            }
            return "";
        },
        getOrderedSpeakersKeys: function () {
            var speakers = this.site.speakers;
            var items = Object.keys(speakers).map(function (key) {
                return [key, speakers[key]];
            });

            items.sort(function (a, b) {
                if (a[1].firstname < b[1].firstname) {
                    return -1;
                }
                if (a[1].firstname > b[1].firstname) {
                    return 1;
                }
                return 0;
            });

            return items.map(function (value) {
                return value[0];
            });
        },
        getSponsorLogoWidth: function(sponsor_category_key) {
            if (sponsor_category_key == "diamond") {
                return 500;
            }
            if (sponsor_category_key == "platinum") {
                return 310;
            }
            if (sponsor_category_key == "gold") {
                return 260
            }
            return 220;
        },
    },
    collections: {
        posts: function () {
            return this.getCollection('documents').findAllLive({
                relativeOutDirPath: 'posts'
            });
        }
    },
    environments: {
        development: {
            templateData: {
                site: {
                    url: false
                }
            }
        }
    },
    events: {
        serverExtend: function (opts) {
            var docpad, latestConfig, newUrl, oldUrls, server;
            server = opts.server;
            docpad = this.docpad;
            latestConfig = docpad.getConfig();
            oldUrls = latestConfig.templateData.site.oldUrls || [];
            newUrl = latestConfig.templateData.site.url;
            return server.use(function (req, res, next) {
                var ref;
                if (ref = req.headers.host, indexOf.call(oldUrls, ref) >= 0) {
                    return res.redirect(newUrl + req.url, 301);
                } else {
                    return next();
                }
            });
        }
    }
};

module.exports = docpadConfig;


// ---
// generated by coffee-script 1.9.2
