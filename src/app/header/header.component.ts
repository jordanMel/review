import { Component, OnInit, EventEmitter, Output } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})


export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();



  constructor() { }

  ngOnInit() {
  }

  onSelect( feature: string ) {
    this.selectedFeature.emit(feature);
  }

}
