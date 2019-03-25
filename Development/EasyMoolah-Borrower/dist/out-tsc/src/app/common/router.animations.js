import { trigger, animate, style, group, query, transition } from '@angular/animations';
export var routerTransition = trigger('routerTransition', [
    // Next
    //   transition('* => q1', [
    //     query(':enter, :leave', style({ position: 'fixed', width: '100%' })
    //       , { optional: true }),
    //     group([
    //       query(':enter', [
    //         style({ transform: 'translateX(-100%)' }),
    //         animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    //       ], { optional: true }),
    //       query(':leave', [
    //         style({ transform: 'translateX(0%)' }),
    //         animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
    //       ], { optional: true }),
    //     ])
    //   ]),
    transition('* => q2', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q3', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q4', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q5', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q6', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q7', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q8', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q9', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q10', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q11', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q12', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q13', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q14', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q15', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => q16', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    //   Back
    transition('* => bq1', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq2', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq3', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq4', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq5', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq6', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq7', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq8', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq9', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq10', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq11', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq12', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq13', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq14', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq15', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
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
    transition('* => bq16', [
        group([
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ])
]);
//# sourceMappingURL=router.animations.js.map