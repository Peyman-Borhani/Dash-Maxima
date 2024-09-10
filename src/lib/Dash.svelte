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
  

<span   class ='grid   w-[100svw]    h-[100svh]    p-0 m-0  place-self-stretch  place-content-evenly overflow-x-hidden
                fixed  grid-rows-12  grid-cols-12  text-[calc((1ch + 2vmin + 1vw) / 3)] bg-muted/75 '
        
>

    <Side_Bar  menu  fixed {Active_Itm} />
    <!-- props:  right (side poisition) -  show/hide (forced visibility)
                 menu <-(force menu)    -  fixed (placement/won't shift)   
                 {Active_Itm} (focused element)
    -->
    <header  class ='inline-grid   portrait:fixed   grid-cols-12  col-start-1  -col-end-1  
                    items-center   justify-center   row-start-1   w-full  border-x-2  border-muted  '
    >
        <Header  fixed />  <!--   props:  fixed (stays, won't scroll)  
        Header contains_____________________________________________
                        Sheet (panel menu)  -   Breadcrumbs
                        Dark_Light (theme)  -   Avatar (user/login...)
                    -->
        <Search_Bar  {Active_Itm}  />    
    </header>

    <main   class ='grid   col-start-2  col-span-10 row-start-3 row-end-auto auto-rows-auto  h-fit rounded-lg
                    gap-8  grid-cols-1  lg:grid-cols-2  xl:grid-cols-3  landscape:grid-cols-3  p-4 m-0  bg-black/25'
            style ='box-shadow: 0 0 1ch #000;'
    >       
                <Content />
    </main> 
  
</span>
  