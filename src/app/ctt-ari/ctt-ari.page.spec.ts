import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CttAriPage } from './ctt-ari.page';

describe('CttAriPage', () => {
  let component: CttAriPage;
  let fixture: ComponentFixture<CttAriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CttAriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
