<template>
<div>
    <lamp-status v-for="Lamp in 5" :key="Lamp"></lamp-status>
</div>
    
</template>

<script>
import LampStatus from "./LampStatus";

export default {
    components : {
        "lamp-status" : LampStatus
    }
}
</script>
<style scope>
    div {
        border : 2px dashed red;
    }
</style>