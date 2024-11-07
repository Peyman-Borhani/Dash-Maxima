// Global App data and settings - on all routes by sveltekit data loading

export  const  prerender  =true;   

export function  load(){
    
  return{
    cfg:{ //Dashboard UI settings to inform ui status to routes 
        Right:   false,     // T-> Right    F->Left  (Side_Bar's side)
        H_bar:   true,      // T-> Header   F->  none/hidden
        F_bar:   false,     // T-> Footer   F->  none/hidden
        S_bar:   true,      // T-> S_bar    F->  no Side_Bar at all
        P_sbar:  true,      // T-> force Side_Bar in portrait
        menu:    true,      // T-> Menu panel   F->  none/hidden
        no_menu: false,     // T-> no Menu panelin any condition
        Hide:    false,     // hides Dashboard (no Side_Bar, no Header... Just Content)
        fixed:   true,      // T-> fixed header   F-> scroll away
        On_Page: 'Home',    // current landing item/page focus
    }
    ,
    items: ['Home', 'Orders', 'Products', 'Customers', 'Analytics', 'Tag', 'Settings']
    ,
    table: [
        [ 'Ariel Hermes', 'ariel@example.com',  'Sale',     'J', '2024-06-23', '250',   '+1 234 567 890', 'Unit 1, Main St. Anytown, CA 12345'],
        [ 'Olivia Smith', 'olivia@example.com', 'Refund',   'X', '2024-06-24', '150',   '+1 325 540 400', 'Unit 2, Main St. Anytown, CA 12345'],
        [ 'Noah Nollen',  'noah@example.com',   'Subscribe','J', '2024-06-25', '100',   '+1 214 766 801', 'Unit 3, Main St. Anytown, CA 12345'],
        [ 'Emma Brown',   'emma@example.com',   'Sale',     'P', '2024-06-26', '450',   '+1 222 521 421', 'Unit 4, Main St. Anytown, CA 12345'],
        [ 'Nick Barry',   'nick@example.com',   'Sale',     'J', '2024-06-23', '50',    '+1 354 168 323', 'Unit 5, Main St. Anytown, CA 12345'],
        [ 'Alec Bret',    'alec@example.com',   'Sale',     'J', '2024-06-23', '250',   '+1 620 412 558', 'Unit 6, Main St. Anytown, CA 12345'],
        [ 'Matt Willis',  'matt@example.com',   'Refund',   'J', '2024-06-24', '150',   '+1 264 650 723', 'Unit 7, Main St. Anytown, CA 12345'],
        [ 'Anna Jensen',  'anna@example.com',   'Sale',     'P', '2024-06-26', '750',   '+1 140 227 929', 'Unit 8, Main St. Anytown, CA 12345'],
]
}}
