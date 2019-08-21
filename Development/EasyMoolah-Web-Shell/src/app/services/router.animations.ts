import { trigger, animate, style, group, query, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  // Forward
  transition('* => step/1', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition('* => step/2', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })
        , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ]),
  // transition('* => step3', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step4', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step5', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step6', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step7', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step8', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step9', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step10', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step11', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step12', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step13', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step14', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step15', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => step16', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  //   Back
  transition('* => step/-1', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })
        , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),
  transition('* => step/-2', [
    group([
      query(':enter, :leave', style({ position: 'fixed', width: '100%' })
        , { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ]),
  // transition('* => bstep3', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep4', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep5', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep6', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep7', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep8', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep9', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep10', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep11', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep12', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep13', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep14', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep15', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ]),
  // transition('* => bstep16', [
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
  //       , { optional: true }),
  //     query(':enter', [
  //       style({ transform: 'translateX(-100%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
  //     ], { optional: true }),
  //     query(':leave', [
  //       style({ transform: 'translateX(0%)' }),
  //       animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
  //     ], { optional: true }),
  //   ])
  // ])
]);
