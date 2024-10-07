<script>
//S5 Runes active
  import  Header        from  '$lib/Header.svelte';
  import  Side_Bar      from  '$lib/Side_Bar.svelte';
  import  Search_Bar    from  '$lib/Search_Bar.svelte';
  import  Content       from  '$lib/Content.svelte';

  import  {activeElement}   from  'runed';

let  Active_Itm =$derived( 
                 (activeElement.current?.nodeName==='INPUT'? 'Search...' 
                : activeElement.current?.nodeName!=='BODY'?  activeElement.current?.textContent
                : 'Doc Body - Search or click interactive items') 
);
const   Pshow =false,    // show Side_Bar on portrait ?
        Right =false;  //       Side_Bar on right ?
</script>
  

<span   class ='grid  fixed   w-svw  h-svh  p-0 m-0 z-0  place-self-stretch  place-content-evenly    
                grid-rows-12  grid-cols-12  bg-muted/75  overflow-x-hidden '
>
    <Side_Bar   menu fixed {Right} {Pshow} {Active_Itm}  />
    <!--PROPS:   (var-> a variable value, else act as boolean)
            fixed   [stays, no shift/scroll]
    var     Pshow   [force side bar visible on both (portrait too)]
            hide    [force side bar hidden on both (landscape too)]
    var     Right   [side]   -   Active_Itm  [focused element]
            menu    [force menu panel on both(landscape too)]
            no_menu [force no menu on both (portrait too)]
    -->
    <header  class ='grid   portrait:fixed  items-center justify-stretch  w-full
                     z-30   col-span-full   border-x-2  border-muted '
    >
        <Header  fixed {Active_Itm}/>  <!--PROPS:  fixed (stays, no shift/scroll)  
                    _______________Header contains_______________
                    Sheet (panel menu)  -   Breadcrumbs
                    Dark_Light (theme)  -   Avatar (user/login..)
                    -->
        <Search_Bar  {Active_Itm}  />   
                <!--_________________KB shortcuts___________________
                    [alt + /]   (toggle Search_Bar on/off)
                    [Escape]    (clear input text 1st time or toggle
                                 Search_Bar if input text is clear) 
                -->
    </header>

    <main   class ='grid-cols-subgrid  h-fit  col-start-2  col-span-10  p-4 landscape:px-6  portrait:py-6 
                    z-10  row-start-3  row-end-auto auto-rows-auto bg-black/25  rounded-lg  '
            style ='box-shadow: 0 0 1ch #000;'
    >       
            <Content  sidebar={{Pshow, Right}}/> <!--props: stating space for sidebar or not-->
    </main>
  
</span>
