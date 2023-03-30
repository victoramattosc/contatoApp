import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CttVitaoPage } from './ctt-vitao.page';

describe('CttVitaoPage', () => {
  let component: CttVitaoPage;
  let fixture: ComponentFixture<CttVitaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CttVitaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
