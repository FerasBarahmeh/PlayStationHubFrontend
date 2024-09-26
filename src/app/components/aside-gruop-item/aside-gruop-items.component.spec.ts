/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsideGroupItemsComponent } from './aside-gruop-items.component';

describe('ItemAsideGroupComponent', () => {
  let component: AsideGroupItemsComponent;
  let fixture: ComponentFixture<AsideGroupItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsideGroupItemsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideGroupItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
