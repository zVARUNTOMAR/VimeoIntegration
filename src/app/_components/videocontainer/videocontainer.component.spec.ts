import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocontainerComponent } from './videocontainer.component';

describe('VideocontainerComponent', () => {
  let component: VideocontainerComponent;
  let fixture: ComponentFixture<VideocontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideocontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
