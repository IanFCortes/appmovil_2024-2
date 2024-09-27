import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {
  
  selectedBrand: string = ''; // Marca seleccionada
  selectedModel: string = ''; // Modelo seleccionado

  // Lista de marcas de vehículos
  brands: string[] = ['Toyota', 'Ford', 'Honda', 'Chevrolet', 'BMW'];

  // Lista de modelos por cada marca
  models: { [key: string]: string[] } = {
    Toyota: ['Corolla', 'Camry', 'Yaris', 'Hilux', 'Land Cruiser'],
    Ford: ['F-150', 'Mustang', 'Explorer', 'Focus', 'Ranger'],
    Honda: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Fit'],
    Chevrolet: ['Silverado', 'Malibu', 'Equinox', 'Tahoe', 'Spark'],
    BMW: ['X5', '3 Series', '5 Series', 'X3', 'Z4'],
  };

  availableModels: string[] = []; // Lista de modelos actualizados según la marca seleccionada


  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBrandChange() {
    this.availableModels = this.models[this.selectedBrand] || [];
    this.selectedModel = ''; // Reiniciar el modelo seleccionado cuando cambia la marca
  }

  guardarSeleccion() {
    console.log('Marca seleccionada:', this.selectedBrand);
    console.log('Modelo seleccionado:', this.selectedModel);
    if (this.selectedBrand && this.selectedModel) {
      alert(`Marca: ${this.selectedBrand}, Modelo: ${this.selectedModel}`);
    } else {
      alert('Por favor selecciona una marca y un modelo.');
    }
  }
  tohome() {
    this.router.navigate(["/home"]);
  }

}
