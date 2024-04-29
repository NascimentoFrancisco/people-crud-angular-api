import { Component } from '@angular/core';
import { Peolpe } from '../../models/people/peolpe.model';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  peoples?: Peolpe[];

  constructor(private router: Router, private peopleService: PeopleService){}

  ngOnInit(): void {
    this.listAllPeople();
  }
  
  listAllPeople(): void{
    this.peopleService.getAll().subscribe({
      next: (data) =>{
        this.peoples = data;
      },
      error: (e) => console.log(e)
    })
  }

  refreshList(): void {
    this.listAllPeople();
  }

  viewDwtails(peopleId: number){
    this.router.navigate(['/details', peopleId]);
  }

}
