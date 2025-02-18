<script>
  import    {getContext}        from  'svelte';
    
  import    * as Breadcrumb     from  '$lib/components/ui/breadcrumb/index.js'
  import    * as DropdownMenu   from  '$lib/components/ui/dropdown-menu/index.js'
  import    Dark_Light          from  '$lib/Dark_Light.svelte'
  import    Search_Bar          from  '$lib/Search_Bar.svelte'
  import    {Button}            from  '$lib/components/ui/button/index.js'
  import    FS_In               from  '~icons/radix-icons/enter-full-screen'  //import    Fullscreen          from  '~icons/lucide/fullscreen'
  import    GitHub              from  '~icons/radix-icons/github-logo';
  import    Arrow_D             from  '~icons/radix-icons/double-arrow-down';
  
  
  let   {Active_Itm,  avatar ='https://avatars.githubusercontent.com/u/26680960?v=4'
        }=$props(); //items= ['Home', 'Orders', 'Products', 'Customers', 'Analytics', '', 'Settings']
        //max word size among items. min: 2 (char+icon) //const menu_size = `${items.reduce((x,cfg.On_Page)=> {return cfg.On_Page.length>x? cfg.On_Page.length :x}, 2)}ch`;
  
  let cfg   =getContext('CFG');
  let items =getContext('NAV');

  //just Content - (no Side_Bar, no Header...)
  //let  None  =$derived(!cfg.P_sbar && !H_bar && !F_bar); 
  //const itm  = $derived.by(()=>{ (Active_Itm?.slice(0,2)==='# '? Active_Itm?.slice(2,Active_Itm?.length-2) :Active_Itm[0]==='#'? Active_Itm?.slice(1,Active_Itm.length-1)  :cfg.On_Page) })  ;
  let  hov  =$state(cfg.H_hbar)
  let  viz  =$derived(hov || cfg.H_hbar);
  let  itm  =$derived.by(()=>((cfg.On_Page!=='Home' && Active_Itm[0]!=='#' && typeof Active_Itm==='string')? Active_Itm  :null) );
//cfg.Right? ' col-start-1  mr-[2.6ch] px-[6ch]'  :'col-start-2  -ml-[2.6ch] px-[6ch]'

</script>  


<!-- {cfg.fixed? 'fixed' :'portrait:fixed landscape:absolute' -->
<span   class = "fixed  top-0 m-0 p-0  {viz? 'mt-0 *:opacity-100'  :'-mt-[1ch] opacity-30 ' } 
            inline-grid z-50  w-full h-fit max-h-[7ch]  grid-cols-12  col-start-1 col-end-13
            {!cfg.L_sbar? 'portrait:px-[1ch] landscape:px-[2ch]' :cfg.Right? 'pr-[4ch]' :'pr-[1ch]'}  min-h-[6.8ch]  portrait:min-h-[7.2ch]   hover:min-h-[7.6ch] 
            items-center justify-stretch  place-items-center  place-content-evenly   border-b  border-white dark:border-gray-300/60
            grid-flow-col  col-span-full  transition-all  duration-400  bg-[#aab]  dark:bg-black hover:dark:border-white/70
            gap-x-2  shadow-lg   hover:shadow-muted-foreground  shadow-stone-500/70 "
            onpointerenter={_=>{hov=true}}
            onpointerleave={_=>{hov=false}}
  > 
  {#if (cfg.fixed || viz)}
    <Breadcrumb.Root  class ='inline-grid  invisible  md:visible landscape:visible bg-[#ccd] dark:bg-[#181822]  *:text-[#556] dark:*:text-[#778] rounded-lg 
                            {cfg.Right? 'col-start-1 landscape:col-start-2 col-end-6 ' :'col-start-1 landscape:col-start-2  col-end-7 ml-[3ch]'} p-2  justify-self-start font-medium '
    >
      <Breadcrumb.List  class= 'text-md  landscape:text-lg ' >
        <Breadcrumb.Item class='portrait:sm:hidden portrait:md:inline-flex '>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Separator class={!cfg.On_Page? 'hidden '  :'portrait:hidden '}/>
        <Breadcrumb.Item >   <!-- {activeElement.nodeName=='A' && items.includes(Active_Itm)? Active_Itm :'Dashboard'} -->
            <Breadcrumb.Link    href={cfg.On_Page==='Home'? 'Home' :'#'+cfg.On_Page}
                                class={Active_Itm[0]!=='#'? 'hidden '  :' '}> {cfg.On_Page}
            </Breadcrumb.Link>
        </Breadcrumb.Item>
       <!--
        <Breadcrumb.Separator   class={!itm? 'hidden ' :'portrait:hidden portrait:md:inline-flex'}/>
        <Breadcrumb.Item    class={cfg.On_Page===itm? 'hidden ' :'portrait:hidden md:inline-flex'}>
            <Breadcrumb.Page  href='#{itm}'> {itm? itm :''} </Breadcrumb.Page>
        </Breadcrumb.Item>
      -->
      </Breadcrumb.List>
    </Breadcrumb.Root>

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