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
  

<div  class='flex min-h-screen w-full flex-col bg-muted/40'>
  <Side_Bar  {Active_Itm} />

  <div  class='flex top-0 flex-col sm:gap-4 sm:py-4 sm:pl-14 h-26 rounded-b-md'>
    <Header >   <!-- Header component items:  Sheet menu,  Breadcrumbs... -->
                <Search_Bar  {Active_Itm} />
                <Dark_Light />
                <!-- ...Avatar elements -->
    </Header>
  </div>

  <main
        class ='grid flex-1 items-start gap-4 p-6 sm:pl-20 sm:py-0
                md:gap-8 lg:grid-cols-3 xl:grid-cols-3'
  > 
    <Content />
  </main> 
</div>
  