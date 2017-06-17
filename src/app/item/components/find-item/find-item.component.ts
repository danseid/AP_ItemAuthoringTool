import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AlertService} from "../../../core/alert.service";
import {Logger} from "../../../core/logger.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'find-item',
  templateUrl: './find-item.component.html',
  styleUrls: ['./find-item.component.less'],
})
export class FindItemComponent implements OnInit {
  complexForm: FormGroup;

  constructor(private logger: Logger,
              private router: Router,
              private fb: FormBuilder,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.complexForm = this.fb.group({
      'query': ''
    });
  }

  submitForm(value: any) {
    this.logger.debug("Item search: " + encodeURIComponent(value.query.trim()));
    if (this.containsSpecialCharacters(value.query)) {
      this.alertService.error("Invalid Search Term", "Your search term contains special characters. Please remove them and try again");
    } else {
      this.router.navigateByUrl('/item/' + encodeURIComponent(value.query.trim()));
    }
  }

  containsSpecialCharacters(value: string): boolean {
    const exp = '[~!@#$%^&*()]';
    const searchRe = new RegExp(exp, "g");
    return searchRe.test(value);
  }

}
