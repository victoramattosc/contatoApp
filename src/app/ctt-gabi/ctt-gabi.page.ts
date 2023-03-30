import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-ctt-gabi',
  templateUrl: './ctt-gabi.page.html',
  styleUrls: ['./ctt-gabi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CttGabiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
