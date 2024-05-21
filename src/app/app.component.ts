import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'besant-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';

  @ViewChild(ChildComponent,{static:false})
  child !: ChildComponent

  @ViewChild('wrapper')
  child1 !: ElementRef
  word: String | undefined;

  constructor() {
    console.log("cons")
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.child?.val)
    console.log("hello onit")
    console.log(this.child?.val)
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("AFTER VIEW INIT")
    console.log(this.child?.val)
    console.log(this.child1)
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("hello do check")
  }

  style = "new1";

  flag = true;
  arr=[1,2,3]
  changeFlag() {
    this.flag = !this.flag;
    this.style = "new2"
    console.log(this.child?.val)
  }
  getData(e:any) {
    this.title=e
  }
}
