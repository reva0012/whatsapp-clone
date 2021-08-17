import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRooomComponent } from './chat-rooom.component';

describe('ChatRooomComponent', () => {
  let component: ChatRooomComponent;
  let fixture: ComponentFixture<ChatRooomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatRooomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRooomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
