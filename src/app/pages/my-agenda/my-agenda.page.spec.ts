import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAgendaPage } from './my-agenda.page';

describe('MyAgendaPage', () => {
  let component: MyAgendaPage;
  let fixture: ComponentFixture<MyAgendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
