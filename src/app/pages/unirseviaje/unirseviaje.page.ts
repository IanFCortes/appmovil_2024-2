import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unirseviaje',
  templateUrl: './unirseviaje.page.html',
  styleUrls: ['./unirseviaje.page.scss'],
})
export class UnirseviajePage implements OnInit {

  items: { name: string; selected: boolean; icon: string }[] = [
    { name: 'Viaje 1', selected: false, icon: 'car-outline' },
    { name: 'Viaje 2', selected: false, icon: 'car-outline' }, 
    { name: 'Viaje 3', selected: false, icon: 'car-outline' },
    { name: 'Viaje 4', selected: false, icon: 'car-outline' },
    { name: 'Viaje 5', selected: false, icon: 'car-outline' },
  ];

  constructor() {}

  toggleSelection(item: any) {
    item.selected = !item.selected;
  }

  guardarSeleccion() {
    const seleccionados = this.items.find(item => item.selected);
    if (seleccionados) {
      console.log('Item seleccionado:', seleccionados);
      alert(`Item seleccionado: ${seleccionados.name}`);
    } else {
      alert('No se ha seleccionado ningún item.');
    }
  }

  selectItem(selectedItem: any) {
    this.items.forEach(item => {
      item.selected = item === selectedItem; // Solo selecciona el item actual
    });
  }

  ngOnInit() {
  }

}
