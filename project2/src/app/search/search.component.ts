import { Component, OnInit } from '@angular/core';
import { HostserviceService} from "../hostservice.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public search;
public result: object;

  constructor(private host: HostserviceService) { }

  ngOnInit() {
  }
  gosearch() {
    this.host.go(this.search).subscribe(data => {
      this.result = data;
      console.log(data);
    })
  }
}
