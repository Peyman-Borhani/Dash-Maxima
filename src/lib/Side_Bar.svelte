<script>
    import  Home          from  '~icons/lucide/home';
    import  LineChart     from  '~icons/lucide/line-chart';
    import  Package       from  '~icons/lucide/package';
    import  Menu          from  '~icons/lucide/menu';
    import  UsersRound    from  '~icons/lucide/users-round';
    import  Settings      from  '~icons/lucide/settings';
    import  ShoppingCart  from  '~icons/lucide/shopping-cart';
    import  Tags          from  '~icons/lucide/tags';
    import  * as Sheet    from  '$lib/components/ui/sheet/index.js';
    import  {Button}      from  '$lib/components/ui/button/index.js';

    import  * as Tooltip    from '$lib/components/ui/tooltip/index.js';
    import  {activeElement} from  'runed';

    let  {Active_Itm,  menu,  right,  hide,  show,  fixed}  = $props();
    /*  Attr:   right (side poisition)  -  {Active_Itm} (focused element)
                menu <-(always use)    -   fixed (placement/won't shift)   
                show/hide (forced visibility)
    */
    let  items    =['Dashboard', 'Orders', 'Products', 'Customers', 'Analytics', 'Settings'];
    
    let  menu_css ='flex items-center w-fit gap-4 px-2.5 text-muted-foreground hover:text-foreground ',
         sbar_css ='size-6  group-hover:scale-150  transition-transform duration-300 ';

    let  side = right?  'col-start-13 -col-end-1  border-l'  :  'col-start-0  col-end-1  border-r ';
    side +=  fixed? 'fixed '  :'absolute ';
    side +=  show? 'visible '  :hide? 'invisible ' :'lg:visible  landscape:visible ';
    //  md:inline-grid 
</script>


<aside  class ='inline-grid  {side} z-40  h-screen  grid-rows-12  grid-flow-row row-span-full  
                py-4 px-1.5  row-start-0  justify-center  content-between  place-self-stretch  bg-background '
>
<!--
{#snippet Side_bar(itm)}
    <a  href='#todo.{itm}'   class='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground break-keep'
    >   {itm}
    </a>
{/snippet}
-->
  <Sheet.Root >

    <Sheet.Trigger  asChild  let:builder 
    >
        <Button     builders={[builder]}  size='icon'  variant='outline' 
                    class='row-start-1 row-end-3  text-xl'
        >
            <Menu  class=' size-8' />
            <span  class='sr-only'> Toggle Menu </span>
        </Button>
    </Sheet.Trigger>

    {#if menu}
        <Sheet.Content  side={right? 'right' :'left'}   class ='w-max'>
        <nav  class='inline-grid  justify-between  h-full row-start-0 font-medium text-2xl' 
        >
            <!-- <Menu> <br>
                <span class='sr-only'  onpointerdown={()=> menu=!menu}
                >  Menu </span>
            </Menu> -->
            <a  href='##'  class={menu_css}>   <Home        class='size-6' /> Dashboard </a>
            <a  href='##'  class={menu_css}>   <ShoppingCart class='size-6'/> Orders    </a>
            <a  href='##'  class={menu_css}>   <Package     class='size-6' /> Products  </a>
            <a  href='##'  class={menu_css}>   <UsersRound  class='size-6' /> Customers </a>
            <a  href='##'  class={menu_css}>   <LineChart   class='size-6' /> Analytics </a>
            <a  href='##'  class={menu_css}>   <Settings    class='size-6' /> Settings  </a>
        </nav>
        </Sheet.Content>
    {/if}
  </Sheet.Root>

    <nav  class='inline-grid  grid-flow-row  invisible landscape:visible lg:visible  group-hover:scale-150
                {show?  'visible' :''}  row-start-3  row-end-13 justify-center  place-content-evenly '
    >
    <!--
      <a  href='##'  class='flex  group shrink-0 items-center justify-center gap-2  md:size-8
                            rounded-full text-lg font-semibold active:text-primary  md:text-base'
                     onclick={()=> menu = !menu}
      >
        <Menu   class ='size-8 text-slate-600 group-hover:scale-150  transition-all duration-300' />
        <span   class ='sr-only'> Menu </span>
      </a>
        -->
      <Tooltip.Root >
        <Tooltip.Trigger  asChild  let:builder class ='text-sm'>
          <a
            href='##'
            class='inline-grid  group justify-center rounded-lg text-muted-foreground transition-all  hover:text-foreground  md:size-8'
            use:builder.action
            {...builder}
          >
            <Home  class ={sbar_css} />
            <span  class='sr-only'>Dashboard</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Dashboard</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <ShoppingCart class ={sbar_css} />
            <span class='sr-only'>Orders</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Orders</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <Package class ={sbar_css} />
            <span class='sr-only'>Products</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Products</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <UsersRound class ={sbar_css} />
            <span class='sr-only'>Customers</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right'>Customers</Tooltip.Content>
      </Tooltip.Root>
      
      <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
          <a
            href='##'
            class='flex  group items-center justify-center rounded-lg text-cyan-300 hover:text-foreground text-xl md:size-8'
            use:builder.action
            {...builder}
          >
            <Tags  class='group-hover:scale-150  transition-all duration-300 font-sans' 
                   style='text-shadow: 0 0 1ch #def;  letter-spacing: -2pt'
            /> 
          <span  class='sr-only'>Tag-label/Element focused</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side='right' class='ml-2 p-4 italic text-md font-semibold text-violet-600'>
            Tag-name: 
            <span class='text-lg text-green-500'> {activeElement.current?.nodeName} </span>
            &nbsp - &nbsp Item: 
            <span class='text-lg  text-green-500'> {Active_Itm} </span>
        </Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger  asChild let:builder>
          <a
            href ='##'
            class='flex  group items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:size-8'
            use:builder.action
            {...builder}
          >
            <LineChart  class ={sbar_css} />
            <span class='sr-only'>Analytics</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content  side='right'>Analytics</Tooltip.Content>
      </Tooltip.Root>

      <Tooltip.Root>
        <Tooltip.Trigger  asChild let:builder>
          <a
            href='##'
            class='inline-grid row-start-9  group  mt-auto  md:size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground '
            use:builder.action
            {...builder}
          >
            <Settings  class ={sbar_css} />
            <span  class='sr-only'>Settings</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content  side='right'>Settings</Tooltip.Content>
      </Tooltip.Root>
    </nav>

</aside>