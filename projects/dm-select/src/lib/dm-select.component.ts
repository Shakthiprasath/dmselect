import { Component, OnInit, ElementRef, HostListener, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'dm-select',
  templateUrl: './dm-select.component.html',
  styleUrls: ['./dm-select.component.css'],
  host: {
    '(document:click)': 'onClick($event)'
  },
  animations: [
    trigger('animationOption2',
      [transition(':enter', [style({ transform: 'translate(-50%, -20%)', opacity: 0 }),
      animate('200ms', style({ transform: 'translate(-50%, 0)', opacity: 1 }))]),
      transition(':leave', [style({ transform: 'translate(-50%, 0)', opacity: 1 }),
      animate('200ms', style({ transform: 'translate(-50%, -20%)', opacity: 0 }))])])
  ]
})
export class DmSelectComponent implements OnInit {

  @ViewChild('dropdown') drop: ElementRef
  @ViewChild('label_select') label: ElementRef
  @Input() data = []
  @Input('letter') letter: String
  @Input() defaultvalue: String
  selectValue: String
  @Output() getValue = new EventEmitter<string>();
  values = []
  showDown = false
  constructor() { }

  ngOnInit() {
    console.log("icon select", this.letter)
    this.values = this.data
    this.selectValue = this.defaultvalue
  }

  onClick(event) {
    if (this.drop) {
      if (this.label.nativeElement != event.target) {
        //console.log("--------", this.drop.nativeElement, event.target, event.target.parentNode)
        if (this.drop.nativeElement != event.target && this.drop.nativeElement != event.target.parentNode) {
          console.log("same")
          this.showDown = false
        }
      }
    }
  }

  showDropDown() {
    console.log("----------------------")
    if (this.showDown == true) {
      this.showDown = false
    } else {
      this.showDown = true
    }
  }

  optionClick(event, value) {
    console.log("option click", event, value)
    this.defaultvalue = value
    this.getValue.emit(value)
    this.showDown = false
  }
}
