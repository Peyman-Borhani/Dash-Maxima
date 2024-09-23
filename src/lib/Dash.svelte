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
</script>
  

<span   class ='grid  fixed   w-svw  h-svh  p-0 m-0 z-0  place-self-stretch  place-content-evenly    
                grid-rows-12  grid-cols-12  bg-muted/75  overflow-x-hidden   '
>

    <Side_Bar  menu  fixed  {Active_Itm} />
    <!--PROPS:  show  (force visible on portrait)
                hide  (no Side_Bar / just menu button)
                left/right    (side)  -  fixed  (stays, no shift/scroll)
                menu    (force menu)  -  {Active_Itm}  (focused element)
    -->
    <header  class ='grid   portrait:fixed  items-center justify-stretch  w-full
                     z-30   col-span-full   border-x-2  border-muted '
    >
        <Header  fixed />  <!--PROPS:  fixed (stays, no shift/scroll)  
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

    <main   class ='grid  h-fit  col-start-2  col-end-13   p-4 landscape:px-6  portrait:py-6  ml-4 portrait:mr-8
                    mr-14  z-10   row-start-3  row-end-auto auto-rows-auto bg-black/25  portrait:row-start-2   rounded-lg '
            style ='box-shadow: 0 0 1ch #000;'
    >       
            <Content />
    </main>
  
</span>
  