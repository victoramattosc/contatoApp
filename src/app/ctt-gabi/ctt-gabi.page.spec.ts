import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CttGabiPage } from './ctt-gabi.page';

describe('CttGabiPage', () => {
  let component: CttGabiPage;
  let fixture: ComponentFixture<CttGabiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CttGabiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
