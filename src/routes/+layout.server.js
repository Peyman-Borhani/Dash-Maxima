// Global(server default) data and settings
// accessible to all routes by sveltekit data loading
export  const  prerender  =true;
import  {DB}    from  './data.server.js';


export  function  load({cookies}){ 

  const   visited = cookies.get('visited');

  return {
    DB
    ,
    CONFIG:     //___UI settings, set's Dash state in all routes________ 
    {   
        fixed :  true,     // T-> fixed header   F-> scroll away
        Right :  false,     // T-> Right    F->Left  (Side_Bar's side)
        H_bar :  true,      // T-> Header   F->  none/hidden
        F_bar :  false,     // T-> Footer   F->  none/hidden
        L_sbar:  true,      // T-> L_sbar    F->  no Side_Bar at all
        P_sbar:  true,      // T-> force Side_Bar in portrait
        No_bar:  false,     // T-> No Dashboard (no Side_Bar, no Header... just an exit full Content button)
        Hide  :  false,     // T-> hides Dashboard by the edge (Bars trigger by scroll-down & pointer near the edge)
        menu  :  true,      // T-> Menu panel   F->  hidden/no menu
        no_menu : false,    // T-> no Menu panelin any condition
        SrBtn_Up: true,    // T-> Searchbar Always on Top (also Portrait)
        On_Page : 'Home',   // current landing item/page focus
        User    : {name:'Peyman', logged: false, input: ''},
        visited : visited===true
    }
    ,//____Sidebar items________________
    NAV_ITEMS: ['Home', 'Orders', 'Products', 'Customers', 'Analytics', '', '', 'Settings']
  }
}
