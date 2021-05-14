import { Component, OnInit } from '@angular/core';
import { VIEWS } from "../_mock-data/view-data";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  page = VIEWS ;
  sections = this.page;
  images: boolean = true;
  processes = [
    {
      name:'Consultation',
      id:1,
      synopsis:'At design263, we take our time to listen to our clients. Understanding your objective helps us to formulate the most appropriate strategy to meet your goals.',
      composition:[{

        title:'Lets discuss your next project!',
        description:'At design263, we take our time to listen to our clients. Understanding your objective helps us to formulate the most appropriate strategy to meet your goals.',
        img:'project-management',
        icon:'',
        url:'/book-a-consultation',
        hasCTA: true,
        cta:'Book a consultation'
      }] },
    {

      name:'Wireframing',
      id:2,
      synopsis:'We will take and raw idea , draw it out, then refine it into a working visualisation of your vision.',
      composition:[
        {
          title:'Wireframing and Conceptualising',
          description:'',
          img:'ux-design',
          icon:'',
          url:'',
          hasCTA: false,
          cta:'',
        }
      ]
    },
    {
      name:'Concept design',
      id:3,
      synopsis:'Take the raw idea and create a fully formed concept which is visually engaging and well rounded',
      composition:[{
            title:'Designing your Web Application',
            description:'',
            img:'web-design',
            icon:'',
            url:'',
            hasCTA: false,
            cta:'',
          }]
    },
    {
      name:'Prototyping',
      id:4,
      synopsis:'We take a perfectly designed concept and create an end to end prototype to capture the way you should expect your application to work',
      composition:[{
        title:'Creating a working Prototype',
        description:'',
        img:'content-manager',
        icon:'',
        url:'',
        hasCTA: false,
        cta:'',
      }]
    },
    {
      name:'Development',
      id:5,
      synopsis:'Now lets put it all together with code, how it looks, how it works, how it responds to users, lets lace your project up.',
      composition:[{
        title:'Application Development and architecture',
        description:'',
        img:'programming',
        icon:'',
        url:'',
        hasCTA: false,
        cta:'',
      }]
    },
    {
      name:'Delivery',
      id:6,
      synopsis:'We hand over the project to allow you to make amendments and pick up on any parts which dont feel quite right, then we fix them for you!',
      composition:[{
        title:'Deliver and Quality Analysis',
        description:'',
        img:'online-support',
        icon:'',
        url:'',
        hasCTA: false,
        cta:'',
      }]
    },
    {
      name:'Deploy',
      id:7,
      synopsis:'Go live with your final product.',
      composition:[{
        title:'Deployment and Go live.',
        description:'',
        img:'backend-development',
        icon:'',
        url:'',
        hasCTA: false,
        cta:'',
      }],
    }
  ];

  ethos = [
    {
      title:'What we do',
      description:'',
      img:'',
      icon:'',
      url:''
    },
    {
      title:'How we do it',
      description:'',
      img:'',
      icon:'',
      url:''
    },
  ];
  clients = [];
  processInfo: any;
  constructor() { }

  ngOnInit(): void {
    //console.log(this.sections);
    console.log(this.processes);

  }

}
