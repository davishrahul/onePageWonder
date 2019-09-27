import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smallbanner',
  templateUrl: './smallbanner.component.html',
  styleUrls: ['./smallbanner.component.css']
})
export class SmallbannerComponent implements OnInit {
  content=[
{
  title:"For those about to rock...",
  image:"/assets/img/01.jpg",
  desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
},
{
  title:"We salute you!",
  image:"/assets/img/02.jpg",
  desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
},
{
  title:"Let there be rock!",
  image:"/assets/img/03.jpg",
  desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
}
];

  constructor() { }

  ngOnInit() {
  }

}
 