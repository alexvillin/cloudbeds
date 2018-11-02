<template>
    <div class="container">
        <Ruler :amount="colsCounter" position="top" />
        <Ruler :amount="rowsCounter" position="left" />

        <div class="container-flex" v-for="(r, rindex) in rows" :key="rindex">
            <Box v-for="(c, cindex) in cols" :index="cols.length * rindex + ++cindex" :key="cindex" />
        </div>
    </div>
</template>

<script>
    import Helper from '@/helper'
    import Box from '@/components/Box.vue'
    import Ruler from '@/components/Ruler.vue'

    export default {
        name: 'home',
        components: {
            Box,
            Ruler
        },
        data: function() {
            return {
                rowsCounter: 1,
                colsCounter: 1,
                containerW: Helper.getWindowWidth(),
                containerH: Helper.getWindowHeight(),
            }
        },
        mounted: function() {
            this.init();
            window.addEventListener('scroll', this.updateCounters)
        },
        computed: {
            rows() {
                return Array(this.rowsCounter);
            },
            cols() {
                return Array(this.colsCounter);
            },
        },
        methods: {
            init() {
                let box = this.$el.querySelector('.box');
                this.rowsCounter = Math.ceil(this.containerH / box.clientHeight)
                this.colsCounter = Math.ceil(this.containerW / box.clientWidth)
            },
            updateCounters() {
                if (Helper.isElementRightVisible(this.$el)) {
                    this.timeout(() => this.colsCounter++)
                }
                if (Helper.isElementBottomVisible(this.$el)) {
                    this.timeout(() => this.rowsCounter++)
                }
            },
            timeout(fn){
                setTimeout(fn, 500);
            }
        }
    }

</script>

<style lang="scss" scoped>
    .container {
        margin: 20px;
        /*        overflow: scroll;*/
        position: relative;
        display: inline-block;
    }

    .container-flex {
        display: inline-flex;
        flex-flow: row nowrap;
    }

</style>
