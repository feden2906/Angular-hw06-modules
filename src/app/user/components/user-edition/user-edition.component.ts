import {Component, OnChanges, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-edition',
  templateUrl: './user-edition.component.html',
  styleUrls: ['./user-edition.component.css']
})
export class UserEditionComponent implements OnInit, OnChanges {

  user: User;
  userId: number;
  userEditionForm: FormGroup;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private formsModule: FormsModule,
              private formBuilder: FormBuilder) {
  }


  ngOnChanges(): void {
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
      this.userService.getUserById(this.userId).subscribe(singleUser => this.user = singleUser);
    });
    this.initForm();
  }


  // Также не работает второй способ:
  // this.activatedRoute.params.subscribe(value => {
  //   this.user = this.router.getCurrentNavigation().extras.state as User;
  //   console.log(this.router.getCurrentNavigation());
  // });

  ngOnInit(): void {
  }

  private initForm(): void {
    this.userEditionForm = this.formBuilder.group({
      id: new FormControl(this.user.id),
      name: new FormControl(this.user.name),
      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email),
      city: new FormControl(this.user.address.city),
      street: new FormControl(this.user.address.street),
      latitude: new FormControl(this.user.address.geo.lat),
      longitude: new FormControl(this.user.address.geo.lng),
      phone: new FormControl(this.user.phone),
      companyName: new FormControl(this.user.company.name),
      catchPhrase: new FormControl(this.user.company.catchPhrase),
      bs: new FormControl(this.user.company.bs),
    });
  }

}
