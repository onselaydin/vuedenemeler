<template>
    <div>
        <h1>NewMemory Componenti</h1>
    </div>
</template>
<script>
    export default {
        data : function(){
            return {
                counter : 0
            }
        },
        created(){
            console.log("created");
        },
        destroyed(){
            console.log("destroyed");
        },
        activated(){
            console.log("Activated");
        },
        deactivated(){
            console.log("deactivated");
        }
    }
</script>