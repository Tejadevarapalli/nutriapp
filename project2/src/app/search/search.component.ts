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
public url;

constructor(private host: HostserviceService) { }
  ngOnInit() {
  }
  gosearch() {
    this.host.go(this.search).subscribe(data => {
      this.result = data;
      console.log(data);
    })
    this.url='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=f61d1286-72ec-4d67-a0a2-16969a62acac&password=4AmGC8jSSy5G&text='+this.search+'';

  }
}
