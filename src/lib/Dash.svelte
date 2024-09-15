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
                grid-rows-12  grid-cols-12  bg-muted/75  overflow-x-hidden   text-[calc((1ch + 2vmin + 1vw) / 3)] '
        
>

    <Side_Bar  menu  fixed {Active_Itm} />
    <!-- props:  right (side poisition) -  show/hide (forced visibility)
                 menu <-(force menu)    -  fixed (placement/won't shift)   
                 {Active_Itm} (focused element)
    -->
    <header  class ='sub-grid   portrait:fixed   col-start-1  col-end-12  row-start-1
                     items-center   justify-center   w-full  border-x-2   border-muted  '
    >
        <Header  fixed />  <!--   props:  fixed (stays, won't scroll)  
        Header contains_____________________________________________
                        Sheet (panel menu)  -   Breadcrumbs
                        Dark_Light (theme)  -   Avatar (user/login...)
                    -->
        <Search_Bar  {Active_Itm}  />    
    </header>

    <main   class ='grid  h-fit  col-start-2  col-end-12   col-span-10  portrait:-col-end-1 rounded-lg 
                    p-4   ml-4   row-start-3  row-end-auto auto-rows-auto bg-black/25  portrait:row-start-2  portrait:mr-10'
            style ='box-shadow: 0 0 1ch #000;'
    >       
            <Content />
    </main>
  
</span>
  