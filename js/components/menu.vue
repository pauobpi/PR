<template>
    <div class="menu">
            <div v-if="active === 'org'">
                <ul>
                    <li>
                        <a class="menu__list active" href="#/organize">
                            <i class="fa fa-sitemap" aria-hidden="true"></i>Organitzar despeses
                        </a>
                    </li>
                    <li>
                        <a class="menu__list" href="#/statics">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>Info. Financera
                        </a>
                    </li>
                </ul>
            </div>
            <div v-if="active === 'finan'">
                <ul>   
                    <li>
                        <a class="menu__list" href="#/organize">
                            <i class="fa fa-sitemap" aria-hidden="true"></i>Organitzar despeses
                        </a>
                    </li>
                    <li>
                        <a class="menu__list active" href="#/statics">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>Info. Financera
                        </a>
                    </li>
                </ul>
            </div>
            <div v-if="active === 'app'">
                <ul> 
                    <li>
                        <a class="menu__list" href="#/organize">
                            <i class="fa fa-sitemap" aria-hidden="true"></i>Organitzar despeses
                        </a>
                    </li>
                    <li>
                        <a class="menu__list" href="#/statics">
                            <i class="fa fa-bar-chart" aria-hidden="true"></i>Info. Financera
                        </a>
                    </li>
                </ul> 
            </div>
       </ul>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                activeOrg   : false,
                activeFinan : false
            } 
        },
        props:['active']

    }
</script>