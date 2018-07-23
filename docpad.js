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
                "call_for_papers": true,
                "registration": true,
                "agenda": false,
                "speakers": false,
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
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
                    "link": "mailto:sponsors@mobilization.pl?subject=I%20am%20interested%20in%20a%20sponsorship%20offer%20for%20Mobilization%202018"
                },
                ],
                gold: [
                {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link": "mailto:sponsors@mobilization.pl?subject=I%20am%20interested%20in%20a%20sponsorship%20offer%20for%20Mobilization%202018"
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link": "mailto:sponsors@mobilization.pl?subject=I%20am%20interested%20in%20a%20sponsorship%20offer%20for%20Mobilization%202018"
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link": "mailto:sponsors@mobilization.pl?subject=I%20am%20interested%20in%20a%20sponsorship%20offer%20for%20Mobilization%202018"
                },
                {
                    "name" : "Free",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-free.png",
                    "link": "mailto:sponsors@mobilization.pl?subject=I%20am%20interested%20in%20a%20sponsorship%20offer%20for%20Mobilization%202018"
                },                                                
                ],
                silver: [
                {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
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
                    "link": "mailto:sponsors@mobilization.pl?subject=I%20am%20interested%20in%20a%20sponsorship%20offer%20for%20Mobilization%202018"
                },
                ],
                afterparty: [
                {
                    "name" : "Reserved",
                    "logo_url" : sponsorsImgBaseUrl + "mobilization-reserved.png",
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
                "speaker-enrique-lopez-manas": {//1
                    "firstname": "Enrique",
                    "lastname": "Lopez Manas",
                    "bio_html": "<a href='bit.ly/EnriqueLopezManas'>EnriqueLopezManas</a> GDE, Android and Mobile developer since 2007. Author of a few books and freelancer.",
                    "www": "http://lopez-manas.com",
                    "twitter": "https://twitter.com/eenriquelopez",
                    "facebook": "",
                    "github": "https://github.com/kikoso",
                    "linkedin": "https://www.linkedin.com/in/eenriquelopez/?ppe=1",
                    "photo_url": "/images/speakers/enrique-lopez-manas.jpg"
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
        }
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
