import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'item-labeled-textarea',
  templateUrl: './item-labeled-textarea.component.html',
  styleUrls: ['./item-labeled-textarea.component.less']
})
export class ItemLabeledTextAreaComponent implements OnChanges {
  @Input() readonly label: string;
  @Input() readonly rows: number;
  @Input() readonly isReadOnly: boolean;
  @Input() readonly isFocused: boolean;   // TODO: Fix focus (consider https://www.npmjs.com/package/angular2-focus)
  @Input() readonly text: string;
  @Output() readonly textChange = new EventEmitter<string>();
  readonly form = this.formBuilder.group({
    text: ''
  });

  get currentText(): string {
    return this.form.value.text;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnChanges() {
    // Reset form data and flags
    this.form.reset({
      text: this.text
    });

    // Disable form if read-only
    if (this.isReadOnly) {
      this.form.disable();
    }

    // Fire event on changes
    this.form.valueChanges.subscribe(
      () => {
        this.textChange.emit(this.currentText);
      });
  }
}
