import { Attribute } from '../character';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Character } from '../character';
import { Item } from '../interfaces/item';
import { STATS } from '../mock-data';

@Component({
  selector: 'app-right-pane',
  templateUrl: './right-pane.component.html',
  styleUrls: ['./right-pane.component.css']
})
export class RightPaneComponent implements OnInit {
  selectedPage: number = 0;
  pageTitle = [ 
                {title: "Details", icon: "/assets/images/icons/menu-icons/menu24.png"},
                {title: "Attributes", icon: "/assets/images/icons/menu-icons/menu18.png"},
                {title: "Status", icon: "/assets/images/icons/menu-icons/menu31.png"},
                {title: "Weapon Proficiencies", icon: "/assets/images/icons/menu-icons/menu26.png"},
                {title: "Notes", icon: "/assets/images/icons/menu-icons/menu25.png"}
              ]

  @Input() selectedItem?: Item;
  @Input() character?: Character;
  @Output() currentItem = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageTurn(direction: number): void {
    let newPage = this.selectedPage + direction;
    this.selectedPage = (newPage > 4) ? 0 : (newPage < 0) ? 4 : newPage;
  }

  onSelectItem(select: number): void {
    this.selectedItem = STATS[select];

    this.currentItem.emit(this.selectedItem);
  }

  // onSelectItem(select: Item): void {
  //   this.selectedItem = select;
  //   this.currentItem.emit(select);
  // }

}
