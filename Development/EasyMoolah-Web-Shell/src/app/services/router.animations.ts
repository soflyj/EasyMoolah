import { trigger, animate, style, group, query, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  // Forward
  transition('* => step-1', [
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
  transition('* => step-2', [
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
  transition('* => step-3', [
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
  // transition('* => step-4', [
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
  // transition('* => step-5', [
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
  // transition('* => step-6', [
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
  // transition('* => step-7', [
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
  // transition('* => step-8', [
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
  // transition('* => step-9', [
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
  // transition('* => step-10', [
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
  // transition('* => step-11', [
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
  // transition('* => step-12', [
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
  // transition('* => step-13', [
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
  // transition('* => step-14', [
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
  // transition('* => step-15', [
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
  // transition('* => step-16', [
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
  //  Back
  transition('* => stepped-1', [
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
  transition('* => stepped-2', [
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
  transition('* => stepped-3', [
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
  // transition('* => step/-4', [
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
  // transition('* => step/-5', [
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
  // transition('* => step/-6', [
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
  // transition('* => step/-7', [
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
  // transition('* => step/-8', [
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
  // transition('* => step/-9', [
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
  // transition('* => step/-10', [
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
  // transition('* => step/-11', [
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
  // transition('* => step/-12', [
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
  // transition('* => step/-13', [
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
  // transition('* => step/-14', [
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
  // transition('* => step/-15', [
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
  // transition('* => step/-16', [
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
