import './polyfill.js'
import { interval } from 'rxjs'
import { map } from 'rxjs/operators'

interval(1000)
  .pipe(map(() => Math.floor(Math.random() * 10)))
  .subscribe(console.log)
