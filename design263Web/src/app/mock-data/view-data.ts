import {View} from "../models/views";

export const VIEWS: View[] = [
  {
    id:1,
    name:"corporate",
    ref:"corporate",
    type:"main page",
    index: 1,
    url:"home",
    sections:[
      {
        id:2,
        name:"Who we are!",
        ref:"about",
        type:"main page",
        index:1,
        url:"",
        about:[
          {
            id:1,
            name:"Website development",
            ref:"development",
            type:"section",
            index: 1,
            url:"",
            children:[],
            composition:{

              title:"Web and App Development",
              tags:[ "app development", "web development"],
              description:"Rich, Robust solutions give users a more well rounded experience when they are using any website or application. We help you develop a well thought out product for all your users",
              heading:"Lets build something useful!",
              subheading:"Give the people what they want",
              synopsis:"Design263 takes what you currently have and builds on it, it is not worth much just having a website with content which does not create the desire effect. We take your lead on what you need for your website on the basis of what you currently have on your website and redefine it to achieve your online objectives."

            }
          },
        ]
      }
    ],
    composition:{
      title:"Web development consultants",
      imgUrl:"",
      refIcon:"",
      tags:["web development", "web developer", "web design", "search engine optimisation", "Analytics and tracking","User experience" , "Web content auditing", "web content authoring"],
      description:"Design263 specialises in web consultancy, we focus on achieving what your website was intended to do by focusing on fixing what it is not currently doing for you",
      heading:"We make web development easy",
      subheading:"Take a leaf out of our book.",
      synopsis:"Design263 takes websites you currently have and builds on that. Having a website with irrelevant content is detrimental to your business objectives unless you are intentionally setting up to fail.Design263 takes your lead, your ideas and your ethos and we build unique solutions for you based on what your pages are actually mean to achieve by simplifying how you approach the web."
    }
  },
  {
    id:2,
    name:"Services",
    ref:"services",
    type:"main page",
    index:1,
    url:"services",
    sections:[
      {
        id: 1,
        name: 'Web consultancy',
        ref:'consultancy',
        url:'web-consultancy',
        summary:'Design263 offer a wide range of web services . We specialise in web design and development as well as application architecture and development. Our process ensures we get you the best possible result for your project.',
        services:[
          {
            id:1,
            name:"Website development",
            ref:"development",
            type:"main page",
            index: 1,
            url:"web-development",
            avatar:'fab fa-dev',
            img:'coding',
            summary:'Web development is the cornerstone of our work, we can help you build your project.',
            children:[],
            composition:{

              title:"Web and App Development",
              tags:[ "app development", "web development"],
              description:"Rich, Robust solutions give users a more well rounded experience when they are using any website or application. We help you develop a well thought out product for all your users",
              heading:"Lets build something useful!",
              subheading:"Give the people what they want",
              synopsis:"Design263 takes what you currently have and builds on it, it is not worth much just having a website with content which does not create the desire effect. We take your lead on what you need for your website on the basis of what you currently have on your website and redefine it to achieve your online objectives."

            }
          },
          {
            id:2,
            name:"Website content auditing",
            ref:"auditing",
            type:"main page",
            index: 1,
            url:"content-auditing",
            avatar:'',
            img:'brainstorm',
            summary:'We unravel the mystery of what it is that makes you unique by helping focus your ideas',
            children:[],
            composition:{
              title:"Website content auditing - Design263",
              tags:[ "Web content auditing", "web content authoring"," content management"],
              description:"Design263 will help you compose relevant content which get the right clients and customers viewing the right pages on your website. Our content authors have a wealth of experience making content that paints a picture that is clear and concise",
              heading:"Make your product better",
              subheading:"Learn what actually works for your users",
              synopsis:"Structure your content for maximum impact, adapt to your users by utilising the most trusted methods and learn to hit the right tone everytime. With our content auditing service , we can expose any weaknesses within your current strategy and more importantly, show you how to evolve it and make it better.",
              packages:[
                {
                  id:1,
                  name:"economy",
                  packageInfo:{
                    title:"Economy Audit",
                    description:"Simple audit of your project, checking for standard accessibility markers ",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:150,
                  tags:[],

                },
                {
                  id:2,
                  name:"standard",
                  packageInfo:{
                    title:"Standard Audit",
                    description:"A more in-depth audit of your project, checking for standard web project markers which includes accessibility and a standard seo audit",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:350,
                  tags:[],

                },
                {
                  id:2,
                  name:"deluxe",
                  packageInfo:{
                    title:"Deluxe audit",
                    description:"Our most robust audit,  checking for web standards conformity, content relevance, accessibility and an in-depth SEO audit",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:600,
                  tags:[],

                }

              ]
            }
          },
          {
            id:3,
            name:"Search Engine Optimisation",
            ref:"seo",
            type:"main page",
            index: 2,
            url:"seo",
            avatar:'',
            img:'optimisation',
            summary:'Relevant content makes for a better experience , let us help you figure out what works for you',
            children:[],
            composition:{
              title:"Search Engine Optimisation - Design263",
              tags:[" Search Engine Optimisation"," seo "],
              description:"Design263 will not only set you up the right way , we teach you how to continue being visible, search engine optimisation was never meant to be difficult. ",
              heading:"Become more visible",
              subheading:"",
              synopsis:"Over the years the world wide web has become more sophisticates and the way in which we view web content has changed and become more complicated as we all have individual tastes. this however has meant that search engines and they way they look at what is relevant has had to evolve to serve up the right content which is right for our individual and unique consumers values, in essence , search engines now view our websites our web pages in a much more simplistic, and are now able to tell the difference between what is good relevant content, and what is useless and time wasting rubbish.A simple consultation will leave your web pages in either in a better state as we will make recommendations as to how they can be presented better so you can move closer to the top listings, or leave you more secure in the knowledge that your website works just fine and there is nothing more you need to do except wait and see yourself climb to the top of the search  engine",
              packages:[
                {
                  id:1,
                  name:"standard",
                  packageInfo:{
                    title:"Standard SEO audit",
                    description:"Standard audit of your project, implementing standard SEO markers and patterns ",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:150,
                  tags:[],

                },
                {
                  id:2,
                  name:"deluxe",
                  packageInfo:{
                    title:"Deluxe SEO Audit",
                    description:"A more in-depth SEO dive of your project, checking and implementing more advanced methods to optimise your project",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:350,
                  tags:[],
                }
              ]
            }
          },
          {
            id:4,
            name:"Analytics and tracking",
            ref:"analytics",
            type:"main page",
            index: 2,
            url:"analytics",
            avatar:'',
            img:'analytics',
            summary:'Know how your users are interacting with your content every time by setting up the right tests',
            children:[],
            composition:{

              title:"Analytics and tracking - Design263",
              imgUrl:"",
              refIcon:"",
              tags:[" Google analytics"," analytics"," google tracking", "tracking scripts"],
              description:"Be aware of your visitors’ habits and know what to prioritise and focus your online strategy on. knowing what works for your audience is always half the battle won.",
              subheading:"Give the people what they want",
              synopsis:"Knowing what a consumer wants puts you in a very advantageous position, it creates a predictable certainty that gives you an edge over your competitors and those around you because it makes consumers feel special, like they belong on your page, like you have struck a connection that the other websites have not, because you shave the thing that they want, or at least something very close to it.Design263 can help your web pages be set up in such a way that your visitors will leave a telling story of why some things on your website work, and why others may have been great ideas in theory, but they just did not work in practice, we will help you analyse your visitors’ habits on your website and point out what to lead with and invest more off, and look for solutions to why some ideas just don’t work in practice."

            }
          },
          {
            id:5,
            name:"UX(user experience)",
            ref:"ux",
            type:"main page",
            index:2,
            url:"user-experience",
            avatar:'',
            img:'graphics',
            summary:'Dont you wish they stayed a little longer, two words come to mind. User Experience.',
            children:[],
            composition:{

              title:"User Experience - Design263",
              imgUrl:"",
              refIcon:"",
              tags:[" Web content auditing"," web content authoring"," content management"],
              description:"A seamless website experience makes for happier customers who will frequent your website more often, make your website accessible, understandable and easy to use .",
              subheading:"This maybe be the day when your website is just right",
              synopsis:"Knowing what attracts your website visitors to your website is just as important as knowing the things about the same site that may be turning them off. This is a concept that most large firms and companies have known for a long time and having this in their armoury has proved a lethal weapon to wield in the battle for online customers and market share.Simply put, the better and easier you make your website to navigate , the more enjoyable it becomes for the end user and therefore the longer people are willing to tolerate whatever it is that you are trying to sell because they don’t have the added burden of tolerating a tedious and unthoughtful customer experience.From simple wording of statements, to positioning of buttons on a page, a lacklustre	focus on user experience issues can cause great angst while a well thought out strategy could prove to be just right  if you know what is needed to make a great website work.Making a website is like making a great dish, adding too much seasoning could prove costly while too little could be seen as boring, lacking inspiration and mundane. You need a website which if you take time and invest a little bit of effort, turns out just right."

            }
          },
          {
            id:6,
            name:"Website design",
            ref:"development",
            type:"main page",
            index:2,
            url:"web-development",
            avatar:'',
            img:'web-design',
            summary:'Beautiful, inspiring and eye catching designs can drive engagement and transform your project ',
            children:[],
            composition:{

              title:"Website design and development - Design263",
              imgUrl:"",
              refIcon:"",
              tags:[" Website development"," web design"," wireframes"," webpage mockup"," cms"],
              description:"Design263 can transform even the most boring uninspiring website and create an inspired piece of art that will not only visual capture imaginations but propel your business to new heights online ",
              heading:"Awesome graphics, better engagement!",
              subheading:"We development inspiring engaging websites",
              synopsis:"Web development is about taking a simple idea and creating engaging solutions which a inspire reaction, like anything else , the reaction you get is determined by how you set out to achieve your objective. At Design263 our goal is to create websites and applications that move people, and we do it right everytime, taking concepts you put in front of us and delivering fully functional , robust solutions to meet your objectives."

            }
          },
          {
            id:7,
            name:"Social Media Marketing",
            ref:"social-media",
            type:"main page",
            index:2,
            url:"social-media-marketing",
            avatar:'',
            img:'mobile-app',
            summary:'One voice! One agenda! One Campaign!',
            children:[],
            composition:{

              title:"Social Media Marketing",
              imgUrl:"",
              refIcon:"",
              tags:[" Social media marketing"],
              description:"",
              heading:"Lets talk strategy",
              subheading:"Social media Campaigns",
              synopsis:" Social media campaigning helps create a sense of continuity for organisations and getting it right is usually half the battle to getting a consistent user base. Our experience working on many social media strategies might be just what you need to kick start the growth of your online presence."

            }
          }
        ]
      },
      {
        id: 2,
        name: 'Visual media',
        ref:'visual-media',
        url:'visual-media',
        services:[
          {
            id:1,
            name:"Videography",
            ref:"videography",
            type:"main page",
            index: 1,
            url:"videography",
            avatar:'',
            img:'',
            summary:'',
            children:[],
            composition:{

              title:"Videography",
              tags:[ "video production", "video editing"],
              description:"",
              heading:"",
              subheading:"",
              synopsis:""

            }
          },
          {
            id:2,
            name:"Photography",
            ref:"photography",
            type:"main page",
            index: 1,
            url:"photography",
            avatar:'',
            img:'',
            summary:'',
            children:[],
            composition:{
              title:"Photography",
              tags:[ "photo production", "photo editing"],
              description:"",
              heading:"",
              subheading:"",
              synopsis:"",
              packages:[
                {
                  id:1,
                  name:"economy",
                  packageInfo:{
                    title:"",
                    description:"",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:0,
                  testimonials:[
                    {
                      testimonyId:1,
                      client:{
                        name:'',
                        sector:'',
                        jobs:[],
                        content:{
                          title:'',
                          description:'',
                          rating:1
                        }
                      }
                    }
                  ],
                  tags:[],

                },
                {
                  id:2,
                  name:"standard",
                  packageInfo:{
                    title:"",
                    description:"",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:0,
                  testimonials:[
                    {
                      testimonyId:1,
                      client:{
                        name:'',
                        sector:'',
                        jobs:[],
                        content:{
                          title:'',
                          description:'',
                          rating:1
                        }
                      }
                    }
                  ],
                  tags:[],

                },
                {
                  id:3,
                  name:"deluxe",
                  packageInfo:{
                    title:"",
                    description:"",
                    imgUrl:"",
                    refIcon:"",
                  },
                  price:0,
                  tags:[],

                }

              ]
            }
          },
        ]
      }
    ],
    testimonials:[
      {
        testimonyId:1,
        reference:'',
        client:{
          name:'',
          sector:'',
          jobs:[],
          content:{
            title:'',
            description:'',
            rating:1
          }
        }
      }
    ],
    composition:{

      title:"Web development consultants - Be inspired",
      imgUrl:"",
      refIcon:"",
      tags:["web development"," web developer"," web design"," search engine optimisation"," Analytics and tracking","User experience "," Web content auditing"," web content authoring"],
      description:"Design and build your web project from ground up, know what your clients like and what their habits are and stay visible to search engine.",
      heading:"We can transform your website",
      subheading:"All you have to do is ask",
      synopsis:"Whether you have a website or you need a new one, we can help you today. From concept mockups and wire-framing in the design process, to creating robust backend admin solutions or store procedures, we have the know-how, the resources and the specialists who can put you over the line, Design263 is a design agency that can take you to your destination. "

    }
  }
];

