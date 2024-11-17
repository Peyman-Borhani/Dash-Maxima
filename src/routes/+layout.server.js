// Global App data and settings - on all routes by sveltekit data loading

export  const  prerender  =true;   

export function  load(){
    
  return{
    cfg:{//___UI settings, set's Dash state in all routes________ 
        fixed :  true,      // T-> fixed header   F-> scroll away
        Right :  false,     // T-> Right    F->Left  (Side_Bar's side)
        H_bar :  true,      // T-> Header   F->  none/hidden
        F_bar :  false,     // T-> Footer   F->  none/hidden
        S_bar :  true,      // T-> S_bar    F->  no Side_Bar at all
        P_sbar:  true,      // T-> force Side_Bar in portrait
        Hide  :  false,     // T-> hides Dashboard (no Side_Bar, no Header... Just Content)
        menu  :  true,      // T-> Menu panel   F->  hidden/no menu
        no_menu : false,    // T-> no Menu panelin any condition
        Srch_top: true,     // T-> Searchbar Always on Top (also Portrait)
        On_Page : 'Home',   // current landing item/page focus
    }
    ,//___________Sidebar items__________________________________
    items: ['Home', 'Orders', 'Products', 'Customers', 'Analytics', 'Tag', 'Settings']
    ,
    table: [//____Data table_____________________________________
        [ 'Ariel Hermes', 'ariel@example.com',  'Sale',     'J', '2024-06-23', '250',   '+1 234 567 890', 'Unit 12, Main St. Anytown, CA 12345'],
        [ 'Olivia Smith', 'olivia@example.com', 'Refund',   'X', '2024-06-24', '150',   '+1 325 540 400', 'Unit 23, 2nd St. Bankstown, AL 723000'],
        [ 'Noah Nollen',  'noah@example.com',   'Subscribe','J', '2024-06-25', '100',   '+1 214 766 801', 'Unit 31, 3rd St. Town Center, FL 88800'],
        [ 'Emma Brown',   'emma@example.com',   'Sale',     'P', '2024-06-26', '450',   '+1 222 521 421', 'Unit 40, 4th St. Down Town, WT 12222'],
        [ 'Nick Barry',   'nick@example.com',   'Sale',     'J', '2024-06-23', '50',    '+1 354 168 323', 'Unit 55, 5th St. North East, MS 15000'],
        [ 'Alec Bret',    'alec@example.com',   'Sale',     'J', '2024-06-23', '250',   '+1 620 412 558', 'Unit 64, 6th St. Dockyard, PL 23435'],
        [ 'Matt Willis',  'matt@example.com',   'Refund',   'J', '2024-06-24', '150',   '+1 264 650 723', 'Unit 73, 7th St. Bazar, CA 34501'],
        [ 'Anna Jensen',  'anna@example.com',   'Sale',     'P', '2024-06-26', '750',   '+1 140 227 929', 'Unit 82, 8th St. Crossway, TX 5600'],
]
}}
