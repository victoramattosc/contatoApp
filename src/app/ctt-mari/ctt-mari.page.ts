import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ctt-mari',
  templateUrl: './ctt-mari.page.html',
  styleUrls: ['./ctt-mari.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CttMariPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
