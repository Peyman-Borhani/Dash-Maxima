<script>
    import  Tool_Tip       from  '$lib/Tool_Tip.svelte'

    import  ChevronLeft   from  '~icons/lucide/chevron-left'
    import  ChevronRight  from  '~icons/lucide/chevron-right'
    import  Copy          from  '~icons/lucide/copy'
    import  CreditCard    from  '~icons/lucide/credit-card'
    import  File          from  '~icons/lucide/file'
    import  ListFilter    from  '~icons/lucide/list-filter'
    import  Truck              from  '~icons/lucide/truck'
    import  EllipsisVertical   from  '~icons/lucide/ellipsis-vertical';
    
    import  * as DropdownMenu  from '$lib/components/ui/dropdown-menu/index.js'
    import  * as Card          from '$lib/components/ui/card/index.js'
    import  * as Pagination    from '$lib/components/ui/pagination/index.js'
    import  * as Table    from  '$lib/components/ui/table/index.js'
    import  * as Tabs     from  '$lib/components/ui/tabs/index.js'
    
    import  {Badge}       from  '$lib/components/ui/badge/index.js'
    import  {Button}      from  '$lib/components/ui/button/index.js'
    import  {Progress}    from  '$lib/components/ui/progress/index.js'
    import  {Separator}   from  '$lib/components/ui/separator/index.js';
  
    let  {Tdata } =$props();
    const  td_size = Tdata.length;

    let  id  =$state(0);
    let  oid =$state('1e31b70H');
    const  orderID = n=>{n+=id; id = n<0? td_size-1  :n>=td_size? 0 :n;  oid=(id+1)+'e31b70H'; console.log(id); };
    
    const   cost = Tdata.map(x=> new Object(
                                {   price: x[5],
                                    post: ((x[5]/100)+5),
                                    tax:  (x[5]*8)/100,
                                    total:(parseFloat(x[5])+parseFloat((x[5]/100)+5)+parseFloat((x[5]*8)/100)).toFixed(2)
                                })        
    );
  </script>
  


  <!-- Headline -->
  <h1   class='text-3xl dark:text-foreground/80 mt-[1svmin] mb-[3svmin] font-medium xl:font-semibold'>Orders </h1>
  
  <article  class='grid  grid-cols-12   items-start  justify-between   min-h-full  gap-y-[5svh] 
                   auto-rows-max  col-span-full  gap-x-[3svw] portrait:gap-x-[1.4svw]'
  >
  
    <section  class='grid grid-cols-subgrid  gap-[3svmin] portrait:gap-x-[1svw] row-start-1 col-span-full portrait:lg:col-span-6 landscape:col-span-7 *:shadow-gray-600 dark:*:shadow-gray-500 *:shadow-inner '>
      
      <Card.Root class='col-span-full  '>
          <Card.Header class='pb-6'>
              <Card.Title class='text-xl'>Your Orders</Card.Title> 
              <Card.Description class='max-w-lg  leading-relaxed'>
                  Dynamic Orders Dashboard for seamless management and insightful analysis.
              </Card.Description>
          </Card.Header>
          <Card.Footer>     <Button>Create New Order</Button>
          </Card.Footer>
      </Card.Root>
  
      <Card.Root  class='row-start-2 row-span-1  col-span-6  portrait:lg:col-span-3  landscape:col-span-4'>
          <Card.Header >
              <Card.Description  class='pb-2 text-xl font-medium  border-b-2 '>Weekly</Card.Description>
              <Card.Title class='text-3xl'>$1329</Card.Title>
          </Card.Header>
          <Card.Content>    <div class='text-xs text-muted-foreground'>+25% from last week</div>
          </Card.Content>
          <Card.Footer>     <Progress value={25} aria-label='25% increase' />
          </Card.Footer>
      </Card.Root>
          
      <Card.Root  class='row-start-2 row-span-1 col-span-6  portrait:lg:col-span-3 landscape:col-span-4'>
          <Card.Header  class='pb-2'>
              <Card.Description  class='pb-2 text-xl font-medium border-b'>Monthly</Card.Description>
              <Card.Title  class='text-3xl'>$5,329</Card.Title>
          </Card.Header>
          <Card.Content>    <div class='text-xs text-muted-foreground'>+10% from last month</div>
          </Card.Content>
          <Card.Footer>     <Progress  value={12}  aria-label='12% increase' />
          </Card.Footer>
      </Card.Root>
    </section>
    
    
    <!--------------------- Recent orders receipt--------------------->
    <Card.Root class='grid w-full overflow-y-hidden  col-span-full  col-start-1 row-start-2  *:shadow-gray-500 *:shadow-inner 
                      m-0 p-0 lg:col-start-7  lg:row-start-1   landscape:col-start-8  landscape:row-start-1 '
    >  <!-- nice purple theme from-[#dce] via-[#a9b] to-[#547]  dark:from-[#325] dark:via-[#213] dark:to-[#102] -->
      <Card.Header class='inline-flex  w-full h-full  items-stretch justify-between p-0  m-0
                          bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-[#eef] via-[#ccd] to-[#98a]  dark:from-[#435] dark:via-[#213] dark:to-[#001] '
        >
            <Pagination.Root  count={10} >
                <Pagination.Content  class='inline-grid grid-flow-col col-span-full  gap-x-[2ch]  w-full h-fit items-stretch justify-between *:transition-all duration-300 overflow-hidden'
                                    
                >
                    <Pagination.Item>
                        <Tool_Tip   t='Previous'
                                    css='h-full -ml-1 pr-2 rounded-ee-md opacity-25 hover:opacity-80  border-none hover:shadow-[0_3pt_1ch_#102a_,_inset_0_0_2ch_#324a]  hover:dark:shadow-[0_0_1ch_#abda_,_inset_0_0_1ch_#8afa]'>
                            <ChevronLeft  class='size-[6.4ch]'  onclick={_=>orderID(-1)} />
                            <span class='sr-only'>Previous Order</span>
                      </Tool_Tip>
                    </Pagination.Item>

                    <Card.Title   class='inline-grid  w-fit absolute   grid-flow-col  *:hover:opacity-100  transition-all  sm:font-medium gap-x-[1ch]
                                    place-self-center justify-items-between  text-xl  lg:font-semibold landscape:font-bold xl:font-bold '
                                onclick = {e=> navigator.clipboard.writeText(e.currentTarget.childNodes[1].textContent)} 
                    >   <span class='inline-flex text-lg w-full  text-muted-foreground  italic font-medium '
                        > ID: 
                        </span>
                        {oid}
                        <Tool_Tip   
                                t   ='Copy Order ID'
                                css ='opacity-0 '
                        >
                          <Button   size ='icon'  variant='outline'
                                    class=' w-7 h-8 '
                            >
                                <Copy  class ='h-7 lg:h-8  scale-y-125 '/> 
                        </Button>
                    </Tool_Tip>
                    </Card.Title>

                    <Pagination.Item>
                        <Tool_Tip   t='Next'
                                    css='h-full -mr-1 pl-2 rounded-es-md opacity-30 hover:opacity-80  border-none  hover:shadow-[0_3pt_1ch_#102a_,_inset_0_0_2ch_#324a]  hover:dark:shadow-[0_0_1ch_#abda_,_inset_0_0_1ch_#8afa]'>
                            <ChevronRight  class='size-[6.4ch] '     onclick={_=>orderID(1)} />
                            <span class='sr-only'>Next Order</span>
                        </Tool_Tip>
                    </Pagination.Item>
                </Pagination.Content>
            </Pagination.Root>
      </Card.Header>

      <Card.Content class='grid  py-2 w-full text-md  bg-[#e7e5eb] dark:bg-[#191721]'>
          <div class='grid gap-1'>
          
          <div class='inline-flex  items-center justify-between gap-4'> 
            <Card-Header class='text-xl font-semibold '> Items </Card-Header>
            <span class='text-sm landscape:text-md text-muted-foreground '> {Tdata[id][4]} </span>
          </div>
        <Separator class='bg-muted  my-2' />

          <ul class='grid gap-3'>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>
                  3 Items (x, y, z) 
              </span>
              <span>${Tdata[id][5]}.00</span>
              </li>
          </ul>
            <Separator class='mb-2 p-0 bg-none border-b-2 border-black border-dotted' />
          <ul class='grid gap-1'>
              <!--li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Subtotal</span>
              <span>${Tdata[id][5]}.00</span>
              </li -->
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>Shipping</span>
              <span>${cost[id].post}</span>
              </li>
              <li class='flex items-center justify-between'>
              <span class='text-muted-foreground'>8% Tax </span>
              <span>${cost[id].tax}</span>
              </li>
              <li class='flex items-center justify-between font-semibold'>
              <span class='text-muted-foreground'>Total</span>
              <span>${cost[id].total}</span>
              </li>
          </ul>
          </div>
          <Separator class='bg-muted  my-4' />

          <section class='inline-grid w-full items-center gap-2 justify-between'>
            <div class='font-semibold'>Shipping Address</div>
            <address class='grid gap-1 not-italic text-sm text-muted-foreground'>
              <span>{Tdata[id][7]}</span>
            </address>
          </section>
          <Separator class='bg-muted  my-3' />

          <section class='grid gap-3'>
          <div class='font-semibold'>Customer Information</div>
          <dl class='grid gap-1'>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Customer</dt>
              <dd>{Tdata[id][0]}</dd>
              </div>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Email</dt>
              <dd>
                  <a href='mailto:'>{Tdata[id][1]}</a>
              </dd>
              </div>
              <div class='flex items-center justify-between'>
              <dt class='text-muted-foreground'>Phone</dt>
              <dd>
                  <a href='tel:'>{Tdata[id][6]}</a>
              </dd>
              </div>
          </dl>
          </section>
          <Separator class='bg-muted  my-3' />

          <div class='grid gap-1'>
          <div class='font-semibold'>Payment Information</div>
          <dl> <div class='flex items-center justify-between'>
                <dt class='flex items-center gap-1 text-muted-foreground'>
                  <CreditCard class='size-6' />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
          </dl>
          </div>
      </Card.Content>
      <Card.Footer class='inline-flex w-full h-[7ch] items-stretch *:self-end justify-between border-t bg-[#aac] dark:bg-[#102] px-3 py-2 my-0'>
          <div class=' text-md text:black dark:text-muted-foreground items-end h-[3ch] font-semibold'>
            Date:   <time dateTime='2024-11-23'> {Tdata[0][4]} </time>
          </div>
          
          <Tool_Tip   t ='Track'>
            <Button  size='icon'  variant='outline'  class='size-8 gap-1'>
                    <Truck class='size-5' />
                    <span   class='sr-only'>Track</span>
            </Button>
        </Tool_Tip>

        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild let:builder>
            <Tool_Tip   t='More' >
              <Button
                builders={[builder]}
                size='icon'
                variant='outline'
                class='h-8 w-6'
                >
                    <EllipsisVertical class='size-5' />
                    <span class='sr-only'>More</span>
              </Button>     
            </Tool_Tip>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content align='end'>
            <DropdownMenu.Item>Edit</DropdownMenu.Item>
            <DropdownMenu.Item>Export</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Trash</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Card.Footer>
    </Card.Root>  <!--endof Recent orders receipt-->
  
    
  <main class = 'grid col-span-full w-full  *:shadow-gray-500 *:shadow-inner '>
    <Card.Root>
      <section class='inline-grid  portrait:grid-rows-2 w-full  justify-between  items-start grid-flow-col '>
        <Card.Header>
                <Card.Title class=' -mt-2 pb-4 tracking-wider text-2xl' >Orders Table</Card.Title>
                <Card.Description >Recent orders from store:</Card.Description>
        </Card.Header>
        <span class= 'inline-grid grid-flow-col  justify-between  items-end gap-3 px-4 '> 
            <Tabs.Root  value='week'  > 
                <Tabs.Content value='week'>
                <Tabs.List class='dark:bg-[#333a] hover:shadow-md  gap-1 '>
                    <Tabs.Trigger value='week'>Week</Tabs.Trigger>
                    <Tabs.Trigger value='month'>Month</Tabs.Trigger>
                    <Tabs.Trigger value='year'>Year</Tabs.Trigger>
                </Tabs.List>
                </Tabs.Content>
            </Tabs.Root>
  
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild let:builder>
                  <Button   size='sm'   variant='outline'   
                            builders={[builder]} >
                      <ListFilter />
                      <span class='sr-only md:not-sr-only'>Filter</span>
                  </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align='end'>
                  <DropdownMenu.Label>Filter by</DropdownMenu.Label>
                  <DropdownMenu.Separator />
                  <DropdownMenu.CheckboxItem checked>Fulfilled</DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem>Declined</DropdownMenu.CheckboxItem>
                  <DropdownMenu.CheckboxItem>Refunded</DropdownMenu.CheckboxItem>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
  
            <Button   size='sm' variant='outline' class='gap-1'>
                      <File class='h-3.5 w-3.5' />
                      <span class='sr-only md:not-sr-only'>Export</span>
            </Button>
          </span>
      </section>
      <hr>
      <Card.Content class= 'grid'>
        <Table.Root>
          <Table.Header class='border-b border-b-black dark:border-b-white'>
            <Table.Row class=' grid grid-flow-col portrait:text-md text-lg bg-muted  *:table-cell *:h-10 *:bg-muted/80 border-collapse border-b-4 border-b-black'>
                <Table.Head >Customer</Table.Head>
                <Table.Head >Type</Table.Head>
                <Table.Head >Status</Table.Head>
                <Table.Head >Date</Table.Head>
                <Table.Head class='text-right'>Amount</Table.Head>
            </Table.Row>
          </Table.Header>
            
          <Table.Body class='table-row-group grid w-full'>
            {#each Tdata  as  tr}
                <Table.Row  class='grid  grid-flow-col grid-cols-5 w-full  text-start *:table-cell border-dotted border-muted border-b'>
                    <Table.Cell>
                    <div  class='table-cell font-medium'>{tr[0]}</div>
                    <div  class='text-sm text-muted-foreground md:inline'>{tr[1]}</div>
                    </Table.Cell>
                    <Table.Cell class='ml-6'> {tr[2]}</Table.Cell>
                    <Table.Cell >
                        <Badge class='text-sm ' variant='secondary'>
                        {tr[3]==='J'? '✔' :tr[3]==='X'? '❌' : '🏁'}
                        </Badge>
                    </Table.Cell>
                    <Table.Cell class='hidden md:table-cell'>{tr[4]}</Table.Cell>
                    <Table.Cell class='text-right'>${tr[5]}</Table.Cell>
                </Table.Row>
            {/each}
          </Table.Body>
        </Table.Root>
      </Card.Content>
    </Card.Root>
  </main>

</article>
