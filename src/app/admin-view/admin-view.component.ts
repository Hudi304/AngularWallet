import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {


  oldUser: User;
  newUser: User;

  showFiller: boolean = false;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.oldUser = new User();
    this.newUser = new User();
  }

  ngOnInit(): void {
    this.refreshTable();
  }

  refreshTable(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  removeUser(nickname: string) {
    this.userService.delete(nickname)
      .subscribe(data => {
        this.refreshTable()
      });
  }

  onUpdate(user: User) {
    this.oldUser = user
    console.log(this.oldUser)
  }

  onUpdateSideNav() {
    this.userService.save(this.newUser)
      .subscribe(data => {
        this.refreshTable()
      });
  }

}
