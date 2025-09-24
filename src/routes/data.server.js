//_____Data table______________default demo data_____
export  const DB =
{
 
Extras :
    [//  item code  item description    price
        ['all_AZ', 'All items sales',   '999' ],
        ['delivr', 'Delivery & Setup',  '70'  ],
        ['coupon', 'Cashable coupon',   '-50' ]
]
,
Items:
    [//  item code  item description    price
        ['sale00', 'Fruits (on sale)',  '30'  ],
        ['decoFL', 'Deco art flowers',  '100' ],
        ['box111', 'Box drawers set',   '100' ],
        ['tools6', 'General toolset',   '200' ],
        ['puzABC', 'Kids puzzle set',   '80'  ],
        ['kit222', 'Kitchen cabinet',   '650' ],
        ['kit123', 'Kitchen shelfs',    '150' ],
        ['cardsG', 'Cards Deck set',    '80'  ],
        ['puzSet', 'Multi puzzle set',  '120' ]
]
,
Users : 
  [//  name            email                contact         address
    [ 'Ariel Hermes', 'ariel@example.com',  '+1 234 567 890', 'Unit 12, Main St. Anytown, CA 12345'],
    [ 'Olivia Smith', 'olivia@example.com', '+1 325 540 400', 'Unit 23, 2nd St. Bankstown, AL 723000'],
    [ 'Noah Nollen',  'noah@example.com',   '+1 214 766 801', 'Unit 31, 3rd St. Town Center, FL 88800'],
    [ 'Emma Brown',   'emma@example.com',   '+1 222 521 421', 'Unit 40, 4th St. Down Town, WT 12222'],
    [ 'Nick Barry',   'nick@example.com',   '+1 354 168 323', 'Unit 55, 5th St. North East, MS 15000'],
    [ 'Alec Bret',    'alec@example.com',   '+1 620 412 558', 'Unit 64, 6th St. Dockyard, PL 23435'],
    [ 'Matt Willis',  'matt@example.com',   '+1 264 650 723', 'Unit 73, 7th St. Bazar, CA 34501'],
    [ 'Anna Jensen',  'anna@example.com',   '+1 140 227 929', 'Unit 82, 8th St. Crossway, TX 5600']
] //note: (User-ID / encrypted Map-Data-Key) will be added for new data or ramDB when each new row is inserted
, 
Records :
    [//  itm id                 status      date
        ['sale00 box111 coupon', 'S', '2024-06-23'],
        ['box111 kit123 coupon', 'S', '2024-06-24'],
        ['kit222 tools6',        'X', '2024-06-24'],
        ['all_AZ',               'P', '2024-06-25'],
        ['cardsG puzSet coupon', 'S', '2024-06-26'],
        ['sale00 puzABC puzSet', 'S', '2024-06-27'],
        ['kit222 kit123 cartAZ', 'P', '2024-06-28'],
        ['box111 sale00 cardsG', 'P', '2024-06-28']
    ]
}
    // S: sold/done/true   X: return/refund/false  P: Processing/undefined
    //Map-Key: (rid)=> to be added when creating new Map 
    //FK-ref: (iid)=> exists  (uid)=> to insert into records
 //DB: {Extras, Items, Customers, Records}