import { Directive, ElementRef, OnInit } from "@angular/core";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector";

@Directive({
  selector: '[immediateClick]'
})
export class immediateClickDirective {

  constructor(
      private element: ElementRef<any>,
      private platFormDetector: PlatformDetectorService) {}

      ngAfterViewInit(): void {
          this.platFormDetector.isPlatformBrowser &&
          this.element.nativeElement.click();

  }
}
