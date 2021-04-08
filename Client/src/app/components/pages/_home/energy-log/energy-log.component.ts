import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BPT } from 'src/app/models/bpt';
import * as jquery from 'jquery';
import { BPTService } from 'src/app/services/bpt.service';
const $: JQueryStatic = jquery;

@Component({
  selector: 'app-energy-log',
  templateUrl: './energy-log.component.html',
  styleUrls: ['./energy-log.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnergyLogComponent implements OnInit {

  @Input() energyElements!: BPT[];
  @Output() energyElementsChange = new EventEmitter<BPT[]>();
  energyHours!: string[];
  HourSelected!: number;

  constructor(private service:BPTService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
      // extract all hours(1-24) from the main obj 
      this.energyHours = this.energyElements.map(el => el.hour);
      // centers current hour after 10ms (cant find a more efficent way to execute that code right after .items is populated with child-components)
      setTimeout(() => this.centerCurrentHour(), 10);
      console.log('energy-log executed');
  }

  ngOnChanges() {
    console.log('onchanges energylog');
    this.energyHours = this.energyElements.map(el => el.hour);
    this.disableEnergyBar();
    this.centerCurrentHour();// need to fix 
    console.log('energyelements updated', this.energyElements);
  }

  onHourSelected(hour: number) {
    this.HourSelected = hour;
    // set border style to selected item
    document.querySelectorAll(".hours app-energy-item .element").forEach(element => {
      element.classList.remove("selected-energy-item");
    });
    document.querySelectorAll(".hours app-energy-item .element")[hour-1].classList.add("selected-energy-item");
    // enable (if disabled) and set energy bar levels
    this.enableEnergyBar();
    this.setEnergyBar(hour);
  }

  // enable energy bar if is not already enabled (the cursor is set to 'not-allowed' and opacity to 0.5)
  enableEnergyBar() {
    let element = $('.energy_bar app-energy-bar-item > .energy');
    if (element.css('cursor') == 'not-allowed' && element.css('opacity') == '0.5'){
      element.css('cursor','pointer');
      element.css('opacity','1');
    }
  }

  disableEnergyBar() {
    // set energy bar to not clickable
    let element = $('.energy_bar app-energy-bar-item > .energy');
    element.css('cursor','not-allowed');
    element.css('opacity','0.5');
    // reset energy bar color
    $('.energy_bar app-energy-bar-item > .energy svg').css('fill','#C2C6EF');
    // reset hour selected
    document.querySelectorAll(".hours app-energy-item .element").forEach(element => element.classList.remove("selected-energy-item"));
  }

  setEnergyBar(hour: number) {
    // get obj of selected hour
    let energy_item = this.energyElements.filter(el => el.hour == String(hour)+":00")[0];
    // reset all energy bar icons to default color
    $('.energy_bar app-energy-bar-item > .energy svg').css('fill','#C2C6EF');
    // set energy bar icons color to yellow (there will be as many yellow icons as the energy value of the energy obj)
    $('.energy_bar app-energy-bar-item:nth-child(-n+' + energy_item.energy + ') > .energy svg').css('fill','#FFC107');
  }

  // allow horizontal scolling on .items
  onScroll(event: WheelEvent) {
    if (event.deltaY > 0) document.querySelector('.items')!.scrollLeft += 150;
    else document.querySelector('.items')!.scrollLeft -= 150;
  }

  // scroll left
  onArrowLeftSelected() {
    document.querySelector('.items')!.scrollLeft -= 150;
  }

  // scroll right
  onArrowRightSelected() {
    document.querySelector('.items')!.scrollLeft += 150;
  }

  // visually centers the current hour item 
  centerCurrentHour() {
    let center_positon = Number($('.items').css("width").substr(0, $('.items').css("width").length-2)) / 2;
    let current_hour_item_position = 150 * new Date().getHours().valueOf() - 25;
    document.querySelector('.items')!.scrollLeft += current_hour_item_position - center_positon;
  }

  // modify, visually and in the DB, the value of energy of the selected hour item
  modifyEnergy(value: number) {
    // if user doesn't select first an hour don't let the user interact with energy bar
    if($('.energy_bar app-energy-bar-item > .energy').css('cursor') != 'not-allowed') {
      // reset all energy bar icons to default color
      $('.energy_bar app-energy-bar-item > .energy svg').css('fill','#C2C6EF');
      // set energy bar icons color to yellow (there will be as many yellow icons as the energy value of the energy obj)
      $('.energy_bar app-energy-bar-item:nth-child(-n+' + value + ') > .energy svg').css('fill','#FFC107');
      // update energy levels of selected obj (send data to parent component to sinchronize data)
      // Update BPT on the Client
      this.energyElements.forEach(element => {
        if(element.hour == String(this.HourSelected)+':00') element.energy = value;});// update visually
      this.energyElementsChange.emit(this.energyElements);// update value in parent component
      console.log('energylog modifyEnergy', this.HourSelected,value);
      console.log(this.energyElements.filter( value => value.hour == String(this.HourSelected)+':00')[0]);
      // Update BPT on the Server

    }
  }

}