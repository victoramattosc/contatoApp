import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ctt-vitao',
  templateUrl: './ctt-vitao.page.html',
  styleUrls: ['./ctt-vitao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CttVitaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
