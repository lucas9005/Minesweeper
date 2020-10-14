// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// Components
import { UnderConstructionComponent } from './under-construction.component';

// Test
describe('UnderConstructionComponent', () => {
  let component: UnderConstructionComponent;
  let fixture: ComponentFixture<UnderConstructionComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule(
      {
        declarations: [
          UnderConstructionComponent
        ]
      }
    ).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(UnderConstructionComponent);
    component = fixture.componentInstance;
    // Update the component
    fixture.detectChanges();
  });

  // Should create the component
  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });
});
