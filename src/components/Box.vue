<template>
    <div class="box" :index="index" :key="index">
        <input type="checkbox" v-model.lazy="checked"/>
        <input type="number" v-model.number="number" :disabled="checked"/>
        <button v-show="checked" @click="save">Save</button>
    </div>
</template>
<script>
    export default {
        name: 'Box',
        components: {},
        props: {
            index: {
                type: Number
            },
        },
        data: function(){
            return {
                checked: false,
                number: "",
            }
        },
        methods:{
            save(){
                console.log("Index: "+ this.index + " Value: " + this.number);
            }
        }
    }

</script>
<style scoped lang="scss">
    .box {
        min-height: 100px;
        height: 100px;
        min-width: 100px;
        width: 100px;
        border: 4px solid white;
        overflow: hidden;
        position: relative;
        background-color: #C5CAE9;
        padding: 5px;

        &:after {
            content: attr(index);
            top: 0;
            position: absolute;
            left: 0;
            display: block;
            border-radius: 50%;
            color: white;
            background-color: grey;
        }
    }

</style>
