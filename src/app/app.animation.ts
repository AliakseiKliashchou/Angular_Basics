import { 
    animate,
    state, 
    style, 
    transition, 
    trigger,
    group, 
    sequence,
    query,
    keyframes
  } from '@angular/animations';
  

export const boxAnimation = trigger('box', [
    state('start', style({ background: 'blue' })),
    state('end', style({
      background: 'red',
      transform: 'scale(1.2)'
    })),
    state('special', style({
      background: 'orange',
      transform: 'scale(0.5)',
      borderRadius: '50%'
    })),
    transition('start => end', animate(450)),
    transition('end => start', animate('800ms ease-in-out')),
    transition('special <=> *', [
      group([
        query('h4', animate(1500, style({
          fontSize: '.5rem'
        }))),
        style({
          background: 'green'
        }),
        animate(1000, style({
          background: 'pink'
        })),
        animate(750)  
      ])
    ]),
    //void => *    :enter
    transition(':enter', [
      animate('4s', keyframes([
        style({ background: 'red', offset: 0 }),
        style({ background: 'black', offset: 0.2 }),
        style({ background: 'orange', offset: 0.3 }),
        style({ background: 'blue', offset: 1 }),
      ]))
      // style({ opacity: 0 }),
      // animate('850ms ease-out')
    ]),
    //* => void      :leave
    transition(':leave', [
      style({ opacity: 1 }),
      group([
        animate(750, style({
          opacity: 0,
          transform: 'scale(1.2)'
        })),
        animate(300, style({
          color: '#000',
          fontWeight: 'bold'
        }))  
      ])
    ]),
  ])