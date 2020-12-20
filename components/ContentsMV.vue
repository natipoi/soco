<template>
    <section class="contents-mv">
        <div class="contents-mv-text">
            <h1 class="contents-mv-h1"></h1>
            <p class="contents-mv-heading">
                <span class="only-day">OPEN 11:00 | CLOSE 15:00</span>
                <span class="only-night">OPEN 18:00 | CLOSE late</span>
                <br>Tel: 075-285-4385
            </p>
        </div>
        <div class="contents-mv-image-wrap">
          <picture class="contents-mv-image only-day">
            <source media="(max-width: 820px)" srcset="~/assets/kitchen/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/kitchen/main_pc.jpg">
            <img class="img" src="~/assets/kitchen/main_pc.jpg" alt="メインビジュアル">
          </picture>
          <picture class="contents-mv-image only-night">
            <source media="(max-width: 820px)" srcset="~/assets/bar/main_sp.jpg">
            <source media="(min-width: 821px)" srcset="~/assets/bar/main_pc.jpg">
            <img class="img" src="~/assets/bar/main_pc.jpg" alt="メインビジュアル">
          </picture>
        </div>
    </section>
</template>