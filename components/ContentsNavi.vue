<template>
    <section class="contents-navi-section only-pc">
        <div class="contents-navi-wrap">
            <ul class="contents-navi">
                <li><nuxt-link v-scroll-to="'#menu-section'" to>MENU</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#info-section'" to>INFO</nuxt-link></li>
                <li><nuxt-link v-scroll-to="'#reservation-section'" to>RESERVATIONS</nuxt-link></li>
                <li class="only-day"><a href="/bar/">BAR</a></li>
                <li class="only-night"><a href="/kitchen/">KITCHEN</a></li>
            </ul>
        </div>
    </section>
</template>