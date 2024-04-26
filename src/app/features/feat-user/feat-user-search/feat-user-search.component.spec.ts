import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatUserSearchComponent } from './feat-user-search.component';

describe('FeatUserSearchComponent', () => {
  let component: FeatUserSearchComponent;
  let fixture: ComponentFixture<FeatUserSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatUserSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatUserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
