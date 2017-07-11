import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from "@angular/core";
import {FormArray, FormBuilder} from "@angular/forms";
import {ItemOption} from "../../../../services/item.service/item-option";

@Component({
  selector: 'item-mc-options',
  templateUrl: './item-mc-options.component.html',
  styleUrls: ['./item-mc-options.component.less']
})
export class ItemMcOptionsComponent implements OnInit {
  @Input() readonly isReadOnly: boolean;
  @Input() readonly options: ItemOption[];
  @Output() readonly optionsChange = new EventEmitter<ItemOption[]>();
  form = this.fb.group({options: this.fb.array([])});

  get formOptions(): FormArray {
    return this.form.get('options') as FormArray;
  }

  get currentOptions(): ItemOption[] {
    return this.form.get('options').value.map((object: {correctAnswer: boolean, text: string}) => {
      const option = new ItemOption();
      option.correctAnswer = object.correctAnswer;
      option.text = object.text;
      return option;
    });
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // Reset form data and flags
    this.form.reset();
    this.form.setControl('options', this.fb.array(this.options.map(option => this.fb.group(option))));

    // Disable form if read-only
    if (this.isReadOnly) {
      this.form.disable();
    }

    // // Fire event on changes
    this.form.valueChanges.subscribe(
      () => {
        this.optionsChange.emit(this.currentOptions);
      });
  }

  addOption(): void {
    const option = new ItemOption();
    option.correctAnswer = false;
    option.text = '';
    this.formOptions.push(this.fb.group(option));
  }

  removeOption(index: number): void {
    this.formOptions.removeAt(index);
  }
}
