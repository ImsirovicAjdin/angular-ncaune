import { Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-child',
    template: `
        <div style="display: inline-block; width: 140px; background: plum; color: white; margin:10px; padding: 20px;">
            Child component
            <div>ID: {{car.id}}</div>
            <div>MAKE: {{car.make}}</div>
            <!--
            <div>ID: {{car?.id}}</div>
            <div>MAKE: {{car?.make}}</div>
            -->
        </div>
    `
})
export class AppChildComponent implements OnInit {

    @Input() car;

    logCars(){
        console.log(this.car);
    }

    ngOnInit() {
        this.logCars();
        /*
            Will log out:
            {id: 1, make: "Toyota"}
            {id: 2, make: "Subaru"}
            {make: "VW"}
            {} // an empty object (but no null entries!) - so it seems that the Elvis operator (safeNavigation) operator is redundant/obsolete
        */
    }
}