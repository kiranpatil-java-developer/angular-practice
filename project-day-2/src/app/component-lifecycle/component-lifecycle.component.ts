import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html'
})
export class ComponentLifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() data!: string;

  constructor() {
    console.log(
      'constructor → Component instance created (DI only, no bindings yet)'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'ngOnChanges → @Input values changed or set for the first time',
      changes
    );
  }

  ngOnInit(): void {
    console.log(
      'ngOnInit → Component initialized; safe place for API calls'
    );
  }

  ngDoCheck(): void {
    console.log(
      'ngDoCheck → Custom change detection runs on every change detection cycle'
    );
  }

  ngAfterContentInit(): void {
    console.log(
      'ngAfterContentInit → Projected content (ng-content) initialized'
    );
  }

  ngAfterContentChecked(): void {
    console.log(
      'ngAfterContentChecked → Projected content checked'
    );
  }

  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit → Component view & child views initialized (DOM ready)'
    );
  }

  ngAfterViewChecked(): void {
    console.log(
      'ngAfterViewChecked → Component view & child views checked'
    );
  }

  ngOnDestroy(): void {
    console.log(
      'ngOnDestroy → Component destroyed; cleanup subscriptions & timers'
    );
  }
}
