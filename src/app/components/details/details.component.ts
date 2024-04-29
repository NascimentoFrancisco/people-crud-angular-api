import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { Peolpe } from '../../models/people/peolpe.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  people: Peolpe | undefined;
  showModalDelete: boolean = false;
  showModalEdit: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private peopleService: PeopleService) {}
  
  ngOnInit(): void {
    this.peopleDetails();
  }
  
  peopleDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.peopleService.get(id).subscribe({
      next: (data: Peolpe)=>{
        this.people = data;
      },
      error: (e) => console.log(e)
    })
  }

  deletePeople(): void {
    if (!this.people) return;
    
    const id = this.people.id;
    this.peopleService.delete(id).subscribe({
      next: () => {
        this.router.navigate(['/list']);
      },
      error: (e) => console.log(e)
    });
    this.closeConfirmationModal();
  }

  updatePeople(): void{
    if (!this.people) return; 

    const data = {
      name: this.people.name,
      date_of_birth: this.people.date_of_birth,
      gender: this.people.gender
    };
    this.peopleService.update(this.people.id, data).subscribe({
      next: (res) =>{
        console.log(res)
        this.closeEditModal();
        this.peopleDetails();
      },
      error: (e) => console.log(e)
    })
  }

  openConfirmationModal():void {
    this.showModalDelete = true;
  }
  closeConfirmationModal():void {
    this.showModalDelete = false;
  }
  openEditModal(): void {
    this.showModalEdit = true;
  }
  closeEditModal(): void {
    this.showModalEdit = false;
  }
}
