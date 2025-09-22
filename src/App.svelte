<script>
    import './app.css';
</script>


<main class="contain bg-background rounded-md py-4">
    <nav class="row-justified px-12 py-2">

        <h4>Bars</h4>
        <ul class="row-justified">
            <li>Shop</li>
            <li>Categories</li>
            <li>flavours</li>
        </ul>

        <div>
            <button aria-label="search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </button>


            <button aria-label="love" class="ml-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>

            </button>
        </div>
    </nav>

    <hr>

     <section class="col">
        <h1 class="mb-6">
            Chocolate is <br> Happiness
        </h1>

        <p>
            All of really need is love a little chocolate now and doesn’t hurt
            chocolate is the hapiness of your own purpose in the world.
        </p>

        <button class="primary-btn">
            Buy now
        </button>
    </section>


    <section class="bg-primary">
       <div class="row-justified px-12 py-6">
            <img src="./choco.png" alt="chocolate" class="w-200 h-140 object-contain">
            <div class="">
                <h2 class="text-background mb-4">Anything is good made of chocolate</h2>
                <p class="mb-6 text-background">
                    All of really need is love a little chocolate now and doesn’t hurt
                    chocolate is the hapiness of your own purpose in the world.
                </p>

                <button class="secondary-btn">buy now</button>
                <a href="/ingredients" class="inline-flex text-background">
                    view ingredients
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-background ml-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </a>
            </div>
       </div>
    </section>

    <section class="py-40">
        <div class="row">
            <h3>Best Selling Products</h3>
           <div class="actions">
                <button aria-label="back" class="btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>

                </button>
                <button aria-label="next" class="btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>

                </button>
           </div>
        </div>

        <div class="grid p-12">
            <div class="card">
                <img src="./icecream.png" alt="Chocolate">
                <button aria-label="cart" class="fav">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </button> 
            </div>

             <div class="card transorm translate-y-12">
                <img src="./choliq.png" alt="Chocolate">
                <button aria-label="cart" class="fav">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </button> 
            </div>

             <div class="card">
                <img src="./beans.png" alt="Chocolate">
                <button aria-label="cart" class="fav">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </button>
            </div>
        </div>
    </section>

</main>
