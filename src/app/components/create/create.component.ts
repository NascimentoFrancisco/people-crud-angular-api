import { Component } from '@angular/core';
import { Peolpe } from '../../models/people/peolpe.model';
import { PeopleService } from '../../services/people.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  people: Peolpe = {
    name: '',
    date_of_birth: '',
    gender: ''
  }
  response: any; 

  constructor(private router: Router, private peopleService: PeopleService){}

  createPeople(): void{
    const data = {
      name: this.people.name,
      date_of_birth: this.people.date_of_birth,
      gender: this.people.gender
    }
    
    this.peopleService.create(data).subscribe({
      next: (res) =>{      
        this.router.navigate(['/details', res.id]);
      },
      error: (err) =>{
        console.log("Erro no cadastro");
        console.log(err);
      }
    })
  }

}
