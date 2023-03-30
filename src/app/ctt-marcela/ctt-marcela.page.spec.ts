import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CttMarcelaPage } from './ctt-marcela.page';

describe('CttMarcelaPage', () => {
  let component: CttMarcelaPage;
  let fixture: ComponentFixture<CttMarcelaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CttMarcelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
