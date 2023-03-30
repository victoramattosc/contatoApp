import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ctt-ari',
  templateUrl: './ctt-ari.page.html',
  styleUrls: ['./ctt-ari.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CttAriPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
