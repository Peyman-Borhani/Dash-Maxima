<script>
    
  import  * as Sheet        from '$lib/components/ui/sheet/index.js';
  import  * as Breadcrumb   from '$lib/components/ui/breadcrumb/index.js';
  import  * as DropdownMenu   from '$lib/components/ui/dropdown-menu/index.js';
  import  {Button}          from '$lib/components/ui/button/index.js';


  import  Home          from  '~icons/lucide/home';
  import  LineChart     from  '~icons/lucide/line-chart';
  import  Package       from  '~icons/lucide/package';
  import  Menu          from  '~icons/lucide/menu';
  import  ShoppingCart  from  '~icons/lucide/shopping-cart';
  import  UsersRound    from  '~icons/lucide/users-round';
  import  Settings      from  '~icons/lucide/settings';
  import  SheetFooter   from './components/ui/sheet/sheet-footer.svelte';
  //lg:grid-cols-3 xl:grid-cols-3 p-6 sm:pl-80 sm:py-80'
  //class='inline-grid  top-0  w-full  h-24  
  //items-center  content-center self-start  justify-center  sm:gap-4  rounded-b-md'
  let  {children, menu}  =$props();
  menu =false
  let  items  =['Dashboard', 'Orders', 'Products', 'Customers', 'Analytics', 'Settings']
  let  sbar_css    ='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground';
</script>


<span
        class ='inline-grid  h-fit  w-full  z-40  gap-2 p-0 m-0  grid-flow-col  items-center
                sm:static   border-b  sm:border-0  bg-background  place-content-between'
>

<Breadcrumb.Root  class ='hidden  md:inline-grid  py-2 bg-black px-24 rounded-lg'>
  <Breadcrumb.List  class= 'text-[2ch]' >
    <Breadcrumb.Item> 
      <Breadcrumb.Link href='##'> Dashboard </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link  href='##'> Orders </Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page> Recent Orders </Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>

  <span  class ='inline-flex  justify-evenly w-fit'>

    {@render  children()}

    <DropdownMenu.Root  class='size-14'>
    <DropdownMenu.Trigger asChild let:builder>
        <Button
                size='icon'
                class='size-14 overflow-hidden rounded-full transition-all duration-300  hover:scale-150  border-black border-2 select-none  shadow-xl shadow-blue-800'
                builders={[builder]}
        >                <!-- /images/placeholder-user.jpg' '~icons/lucide/users' -->
            <img
                src='https://avatars.githubusercontent.com/u/26680960?v=4'
                alt='Avatar'
                class='overflow-hidden self-stretch rounded-full'
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

{#snippet Side_bar(itm)}
    <a  href='##'   class='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground break-keep'
    >   {itm}
    </a>
{/snippet}
  
<Sheet.Root     >

    <Sheet.Trigger  asChild  let:builder  
    >
    <Button     builders={[builder]}  size='icon'  variant='outline' 
                class='landscape:hidden  right-0'
    >
        <Menu  class='size-8' />
        <span  class='sr-only'>Toggle Menu</span>
    </Button>
    </Sheet.Trigger>

    <Sheet.Content  side='right'   class ='w-max'>
      <nav  class='inline-grid  justify-between  h-full  font-medium  group-default:size-8' 
      >
        <Menu>  <br>  <span class='sr-only'> Menu </span>
        </Menu>

        <a  href='##'  class={sbar_css}>   <Home class='size-9'/> Dashboard       </a>
        <a  href='##'  class={sbar_css}>   <ShoppingCart class='size-8'/>  Orders </a>
        <a  href='##'  class={sbar_css}>   <Package class='size-8'/>  Products    </a>
        <a  href='##'  class={sbar_css}>   <UsersRound class='size-5'/> Customers </a>
        <a  href='##'  class={sbar_css}>   <LineChart class='size-5'/> Settings
        </a>
      </nav>
    </Sheet.Content>

</Sheet.Root>

</span>