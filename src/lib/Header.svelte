<script>
    
  import    * as Breadcrumb     from  '$lib/components/ui/breadcrumb/index.js'
  import    * as DropdownMenu   from  '$lib/components/ui/dropdown-menu/index.js'
  import    Dark_Light          from  '$lib/Dark_Light.svelte'
  import    Search_Bar          from  '$lib/Search_Bar.svelte'
  import    {Button}            from  '$lib/components/ui/button/index.js'
//import    Fullscreen          from  '~icons/radix-icons/enter-full-screen'
  import    Fullscreen          from  '~icons/lucide/fullscreen'
  import    GitHub              from  '~icons/radix-icons/github-logo'
  
  
  let   {cfg,   Active_Itm=$bindable(''),     On_Page=$bindable('Home'),
         items= ['Home', 'Orders', 'Products', 'Customers', 'Analytics', '', 'Settings']
  }=$props();     //max word size among items. min: 2 (char+icon) //const menu_size = `${items.reduce((x,On_Page)=> {return On_Page.length>x? On_Page.length :x}, 2)}ch`;
      
  let  {fixed,  Right,  S_bar,  P_sbar, Srch_top,  menu, no_menu} = cfg;
   
  //just Content - (no Side_Bar, no Header...)
  //let  None  =$derived(!P_sbar && !H_bar && !F_bar); 
  
  //const itm  = $derived.by(()=>{ (Active_Itm?.slice(0,2)==='# '? Active_Itm?.slice(2,Active_Itm?.length-2) :Active_Itm[0]==='#'? Active_Itm?.slice(1,Active_Itm.length-1)  :On_Page) })  ;
  let itm = $derived.by(()=>((On_Page!=='Home' && Active_Itm[0]!=='#' && typeof Active_Itm==='string')? Active_Itm  :null) );
</script>
  


<span   class = "{fixed? 'fixed' :'portrait:fixed absolute'} w-full h-fit  m-0 p-0  {!S_bar? 'px-[1.2ch]' :Right? ' col-start-1  mr-[2.2ch] pr-[4ch]'  :'col-start-2  -ml-[2.2ch] pl-[4ch]'} 
            inline-grid  grid-cols-12  top-0 z-50  min-h-[6ch]  hover:min-h-[7.4ch] portrait:min-h-[8ch]  border-b-2  sm:border-b  border-black
            items-center justify-stretch  place-items-center  place-content-evenly  dark:border-gray-400/70 
            grid-flow-col  col-span-full  transition-all  duration-300  bg-[#aab]  dark:bg-[#000]
            gap-x-2  shadow-lg   hover:shadow-muted-foreground  shadow-stone-500/70 "
  >
  
  <Breadcrumb.Root  class ='inline-grid  invisible  md:visible  bg-[#ccd] dark:bg-[#181822]  *:text-[#556] dark:*:text-[#778] rounded-lg 
                            col-start-1  col-end-8  {Right? 'portrait:ml-3' :'ml-3'} p-2  justify-self-start font-medium '
  >
    <Breadcrumb.List  class= 'text-md  landscape:text-lg ' >
      <Breadcrumb.Item class='portrait:sm:hidden portrait:md:inline-flex '>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Separator class={!On_Page? 'hidden '  :'portrait:hidden '}/>
      <Breadcrumb.Item >   <!-- {activeElement.nodeName=='A' && items.includes(Active_Itm)? Active_Itm :'Dashboard'} -->
        <Breadcrumb.Link    href={On_Page==='Home'? '/' :'#{On_Page}'}
                            class={Active_Itm[0]!=='#'? 'hidden '  :' '}> {On_Page} </Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator   class={!itm? 'hidden ' :'portrait:hidden portrait:md:inline-flex'}/>
      <Breadcrumb.Item    class={On_Page===itm? 'hidden ' :'portrait:hidden md:inline-flex'}>
        <Breadcrumb.Page  href='#{itm}'> {itm? itm :''} </Breadcrumb.Page>
      </Breadcrumb.Item>
  
    </Breadcrumb.List>
  </Breadcrumb.Root>
  
    <span  class ='inline-grid   col-start-8 col-end-13 portrait:col-end-11 gap-2  mt-3  justify-evenly *:transition-all *:duration-300 '>
      <Search_Bar {Right} {P_sbar} {Srch_top} {Active_Itm}/>             
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
                        hover:scale-150  border-black border select-none  shadow-xl shadow-blue-800 self-center brightness-[.68]  hover:brightness-100'
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
    <!-- GitHub   class= 'absolute size-12 {Right? 'left-[4%]' :'right-[4%]'}  top-[130%] landscape:top-[108%]  text-2xl text-black bg-white shadow-[inset_0_0_1.8ch_#213] rounded-full opacity-80 hover:opacity-100' / -->

  </span>