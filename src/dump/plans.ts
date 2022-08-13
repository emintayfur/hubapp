export const planFeatures = [
    {
        id: 'feature-1',
        name: 'Live Stock Updates',
    },
    {
        id: 'feature-2',
        name: 'Access to Pre and After Markets',
    },
    {
        id: 'feature-3',
        name: 'Secure Data Connection',
    },
];

export const planTabs = [
    {
        id: 'tab-monthly',
        title: 'Monthly',
        periodStr: 'month',
        currency: '£',
        plans: [
            {
                name: 'Basic Plan',
                description: 'Preferred stock may be hybrid by having the qualities of bonds of fixed returns.',
                price: 6.90,
                checkedColor: '#5e55ff',
                features: [planFeatures[0].id],
            },
            {
                name: 'Popular Plan',
                description: 'Preferred stock may be hybrid by having the qualities of bonds of fixed returns.',
                price: 12.90,
                save: 20,
                features: [planFeatures[0].id, planFeatures[1].id, planFeatures[2].id],
            },
        ],
    },
    {
        id: 'tab-annual',
        title: 'Annual - Save %40',
        periodStr: 'year',
        currency: '£',
        plans: [
            {
                name: 'Basic Plan',
                description: 'Preferred stock may be hybrid by having the qualities of bonds of fixed returns.',
                checkedColor: '#5e55ff',
                price: 66.90,
                features: [planFeatures[0].id],
            },
            {
                name: 'Popular Plan',
                description: 'Preferred stock may be hybrid by having the qualities of bonds of fixed returns.',
                price: 82.90,
                save: 40,
                features: [planFeatures[0].id, planFeatures[1].id, planFeatures[2].id],
            },
        ],
    }
]