import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTramiteComponent } from './listar-tramite.component';

describe('ListarTramiteComponent', () => {
  let component: ListarTramiteComponent;
  let fixture: ComponentFixture<ListarTramiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTramiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
