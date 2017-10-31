import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
	nombre:string = "";
	edad:number = 0;
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
		this.nombre = this.navParams.get("nombre");
		this.edad = this.navParams.get("edad");
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ModalPage');
	}
	cerrarParametros(){
		let data = {nombre:"miguel", edad:"22"};
		this.viewCtrl.dismiss(data);
		
	}
	cerrar(){
		this.viewCtrl.dismiss();
	}
}
