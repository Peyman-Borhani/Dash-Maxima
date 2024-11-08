<script>
    
  import    * as Breadcrumb     from  '$lib/components/ui/breadcrumb/index.js'
  import    * as DropdownMenu   from  '$lib/components/ui/dropdown-menu/index.js'
  import    Dark_Light          from  '$lib/Dark_Light.svelte'
  import    Search_Bar          from  '$lib/Search_Bar.svelte'
  import    {Button}            from  '$lib/components/ui/button/index.js'
//import    Fullscreen          from  '~icons/radix-icons/enter-full-screen'
  import    Fullscreen          from  '~icons/lucide/fullscreen'
  
  
  let   {cfg,   Active_Itm=$bindable(''),     On_Page=$bindable('Home'),
         items= ['Home', 'Orders', 'Products', 'Customers', 'Analytics', '', 'Settings']
  }=$props();     //max word size among items. min: 2 (char+icon) //const menu_size = `${items.reduce((x,On_Page)=> {return On_Page.length>x? On_Page.length :x}, 2)}ch`;
      
  let  {fixed,  P_sbar,  S_bar,  Right,  menu, no_menu} = cfg;
   
  //just Content - (no Side_Bar, no Header...)
  //let  None  =$derived(!P_sbar && !H_bar && !F_bar); 
  
  //const itm  = $derived.by(()=>{ (Active_Itm?.slice(0,2)==='# '? Active_Itm?.slice(2,Active_Itm?.length-2) :Active_Itm[0]==='#'? Active_Itm?.slice(1,Active_Itm.length-1)  :On_Page) })  ;
  let itm = $derived.by(()=>((On_Page!=='Home' && Active_Itm[0]!=='#' && typeof Active_Itm==='string')? Active_Itm  :null) );
</script>
  


<span   class = "{fixed? 'fixed' :'portrait:fixed absolute'} w-full h-fit  m-0 p-0 {!S_bar? 'px-[1.2ch]' :Right? 'pr-[3.2ch]'  :'pl-[3.2ch]'} 
            inline-grid  grid-cols-12  top-0 z-50  min-h-[6ch]  hover:min-h-[7.4ch] portrait:min-h-[8ch]  border-b-2  sm:border-b  border-black
            items-center justify-stretch  place-items-center  place-content-evenly  dark:border-gray-400/70 
            grid-flow-col  col-span-full  transition-all  duration-300  bg-gray-300/60  dark:bg-[#161819] 
            gap-x-2  shadow-lg   hover:shadow-muted-foreground  shadow-stone-500/70 "
  >
  
  <Breadcrumb.Root  class ='inline-grid  invisible  md:visible   bg-muted   rounded-lg  contrast-200
                            col-start-2  col-end-8  portrait:col-start-3   px-2  py-2  justify-self-start '
  >
    <Breadcrumb.List  class= 'text-md  landscape:text-lg ' >
      <Breadcrumb.Item class='portrait:sm:hidden portrait:md:inline-flex '>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Separator class={!On_Page? 'hidden '  :'portrait:hidden '}/>
      <Breadcrumb.Item >   <!-- {activeElement.nodeName=='A' && items.includes(Active_Itm)? Active_Itm :'Dashboard'} -->
        <Breadcrumb.Link  href='#{On_Page}'  class={Active_Itm[0]!=='#'? 'hidden '  :' '}> {On_Page} </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator   class={!itm? 'hidden ' :'portrait:hidden portrait:md:inline-flex'}/>
      <Breadcrumb.Item    class={On_Page===itm? 'hidden ' :'portrait:hidden md:inline-flex'}>
        <Breadcrumb.Page  href='#{itm}'> {itm? itm :''} </Breadcrumb.Page>
      </Breadcrumb.Item>
  
    </Breadcrumb.List>
  </Breadcrumb.Root>
  
    <span  class ='inline-grid  {Right? 'col-start-8 col-end-11' :'col-start-9' } col-end-13 portrait:col-end-11 gap-2  mt-2  justify-evenly *:transition-all *:duration-300 '>
      <Search_Bar  {On_Page} {Active_Itm}/>             
      <!--  _____________________KB shortcuts____________________
                  [alt + /]   (toggle Search_Bar on/off)
                  [Escape]    (clear input text 1st time or toggle
                              Search_Bar if input text is clear) 
      -->
      <!--Fullscreen / -->

      <Dark_Light />
  
      <DropdownMenu.Root >
      <DropdownMenu.Trigger asChild let:builder>
          <Button
                  size='icon'
                  class='size-12 grid-cols-subgrid col-start-11 portrait:col-end-12 overflow-hidden rounded-full transition-all duration-200
                        hover:scale-150  border-black border select-none  shadow-xl shadow-blue-800 self-center'
                  builders={[builder]}
          >                   <!-- /images/placeholder-user.jpg' '~icons/lucide/users' -->
              <img    alt   ='Avatar'
                      src   ='https://avatars.githubusercontent.com/u/26680960?v=4'
                      class ='overflow-hidden self-stretch rounded-full'
              />
          </Button>
      </DropdownMenu.Trigger>
  
      <DropdownMenu.Content  align='end'>
          <DropdownMenu.Label> Account: </DropdownMenu.Label>  <DropdownMenu.Separator/>
          <DropdownMenu.Item>  Settings </DropdownMenu.Item>
          <DropdownMenu.Item>  Support </DropdownMenu.Item>   <DropdownMenu.Separator/>
          <DropdownMenu.Item>  Logout  </DropdownMenu.Item>
      </DropdownMenu.Content>
      </DropdownMenu.Root>
    </span>
  
  </span>