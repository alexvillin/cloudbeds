<template>
    <div class="container">
        <div id="optional">
            <input type="checkbox" v-model="delay"> Set/Unset delay
        </div>
        <Ruler :amount="colsCounter" position="top" />
        <Ruler :amount="rowsCounter" position="left" />

        <div class="container-flex" v-for="(r, rindex) in rows" :key="rindex">
            <Box v-for="(c, cindex) in cols" :index="cols.length * rindex + ++cindex"/>
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
                delay: true,
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
                Helper.isLoadBeforehand = true;
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
                if(this.delay){
                    setTimeout(fn, 500);
                } else {
                    fn();
                }
            },
        }
    }

</script>

<style lang="scss" scoped>
    .container {
        margin: 20px;
        position: relative;
        display: inline-block;
    }

    .container-flex {
        display: inline-flex;
        flex-flow: row nowrap;
        clear: both;
    }

    #optional{
        display: block;
        position: fixed;
        z-index: 1000;
        padding: 20px;
        background-color: lightgray;
        border: 2px solid gray;
    }

</style>
