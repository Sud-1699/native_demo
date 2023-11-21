import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOfficeAgendaPage } from './my-office-agenda.page';

describe('MyOfficeAgendaPage', () => {
  let component: MyOfficeAgendaPage;
  let fixture: ComponentFixture<MyOfficeAgendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyOfficeAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
