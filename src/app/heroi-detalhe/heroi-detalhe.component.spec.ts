import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiDetalheComponent } from './heroi-detalhe.component';

describe('HeroiDetalheComponent', () => {
  let component: HeroiDetalheComponent;
  let fixture: ComponentFixture<HeroiDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
