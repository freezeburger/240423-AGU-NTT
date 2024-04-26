import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatUserListComponent } from './feat-user-list.component';

describe('FeatUserListComponent', () => {
  let component: FeatUserListComponent;
  let fixture: ComponentFixture<FeatUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatUserListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
