<script>
//S5 Runes active
  import  Header        from  '$lib/Header.svelte';
  import  Dark_Light    from  '$lib/Dark_Light.svelte';
  import  Side_Bar      from  '$lib/Side_Bar.svelte';
  import  Search_Bar    from  '$lib/Search_Bar.svelte';
  import  Content       from  '$lib/Content.svelte';

  import  {activeElement}   from  'runed';

let  Active_Itm =$derived( (activeElement.current?.nodeName==='INPUT'? 'Search...' 
                : activeElement.current?.nodeName!=='BODY'?  activeElement.current?.textContent
                : 'Doc Body - Search or click interactive items'
) );

</script>
  

<span   class ='grid  w-[100svw]  h-[100svh] place-self-center  place-content-evenly  
                      p-0  m-0  bg-muted/40   text-[calc((1ch + 2vmin + 1vw) / 3)]'
>
  <Side_Bar  {Active_Itm} />

  <header   class ='inline-grid  portrait:fixed  w-full  min-h-[6svh]  self-start  outline outline-muted  opacity-95
                    xs:gap-2  md:gap-4  items-center  content-evenly  justify-stretch   bg-background'>
        <Header >   <!-- Header component items:  Sheet menu,  Breadcrumbs... -->
                    <Dark_Light />
                    <Search_Bar  {Active_Itm} />
                    <!-- ...Avatar elements -->
        </Header>
  </header>

  <main   class ='grid  w-full items-start justify-self-center place-content-center
                  gap-y-16  gap-x-0  lg:grid-cols-3  xl:grid-cols-3 '
  > 
        <Content />
  </main> 
  
</span>
  