import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatUserCreationComponent } from './feat-user-creation.component';

describe('FeatUserCreationComponent', () => {
  let component: FeatUserCreationComponent;
  let fixture: ComponentFixture<FeatUserCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatUserCreationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatUserCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
