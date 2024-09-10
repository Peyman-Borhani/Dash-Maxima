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
  

<span   class ='grid  w-[100svw]  h-[100svh]  p-0  m-0  place-self-stretch  place-content-evenly overflow-x-hidden 
                grid-rows-12  grid-cols-12  row-auto   text-[calc((1ch + 2vmin + 1vw) / 3)] '
        
>

    <Side_Bar  menu {Active_Itm} />
    <!--Attr:   right (side poisition)  -  {Active_Itm} (focused element)
                menu <-(always show)    -   fixed (placement/won't shift)   
                show/hide (forced visibility)
    -->
    <header  class ='inline-grid   portrait:fixed   col-start-1     -col-end-1    border-x-2  border-muted
                    items-center   justify-center   row-start-1     bg-transparent  w-full    grid-cols-12'
    >
        <Header />      <!--  components inside  Header: 
                Sheet menu - Breadcrumbs -  Dark_Light theme - Avatar: user/login...
                -->
        <Search_Bar  {Active_Itm} />
    </header>

    <main   class ='grid  col-start-2 col-end-12 row-start-4 row-end-auto 
                  gap-y-16  gap-x-8  lg:grid-cols-3  xl:grid-cols-3 '
    > 
                <Content />
    </main> 
  
</span>
  