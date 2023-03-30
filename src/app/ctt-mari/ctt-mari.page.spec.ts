import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CttMariPage } from './ctt-mari.page';

describe('CttMariPage', () => {
  let component: CttMariPage;
  let fixture: ComponentFixture<CttMariPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CttMariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
