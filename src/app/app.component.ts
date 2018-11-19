import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

enum Unit {
  LB = 1,
  KG
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weight-selector';
  unit: Unit = Unit.LB;
  unitDisplay = GetUnitDisplay(Unit[Unit.LB]);
  numbers: any;

  weightFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(9999),
    Validators.pattern("^[0-9]*$"),
  ]);


  onUnitChange(newUnit: String){
    this.unitDisplay = GetUnitDisplay(newUnit);
  }
}

function GetUnitDisplay(unit: String)
{
  switch(unit){
    case "LB":
      return("Pounds (LB)");
    break;
    case "KG":
    return("Kilos (KG)");
    break;
  }
}
